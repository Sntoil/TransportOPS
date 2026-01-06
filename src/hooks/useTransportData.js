import { useState, useEffect } from 'react';
import { 
  collection, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  onSnapshot, 
  query, 
  orderBy, 
  serverTimestamp,
  setDoc 
} from 'firebase/firestore';
import { db } from '../firebase';

export default function useTransportData(user) {
  // ✅ 1. กำหนดค่าเริ่มต้นเป็น Array ว่างป้องกันจอขาว
  const [members, setMembers] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [logs, setLogs] = useState([]);
  const [actionLogs, setActionLogs] = useState([]);
  const [rules, setRules] = useState([]);
  const [manualScores, setManualScores] = useState([]);
  const [roles, setRoles] = useState({});

  useEffect(() => {
    if (!user) return;

    const subscribe = (colName, setState, q = null) => {
        const ref = collection(db, colName);
        const finalQuery = q || ref;
        return onSnapshot(finalQuery, (snapshot) => {
            const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setState(data);
        }, (error) => {
            console.error(`Error fetching ${colName}:`, error);
            setState([]); 
        });
    };

    const unsubMembers = subscribe('members', setMembers);
    const unsubTasks = subscribe('tasks', setTasks, query(collection(db, 'tasks')));
    const unsubLogs = subscribe('logs', setLogs, query(collection(db, 'logs'), orderBy('date', 'desc')));
    const unsubActionLogs = subscribe('actionLogs', setActionLogs, query(collection(db, 'actionLogs'), orderBy('timestamp', 'desc')));
    const unsubRules = subscribe('rules', setRules);
    const unsubManualScores = subscribe('manualScores', setManualScores);
    
    const unsubRoles = onSnapshot(collection(db, 'roles'), (snapshot) => {
        const r = {};
        snapshot.docs.forEach(d => r[d.id] = d.data().role);
        setRoles(r);
    });

    return () => {
        unsubMembers(); unsubTasks(); unsubLogs(); unsubActionLogs();
        unsubRules(); unsubManualScores(); unsubRoles();
    };
  }, [user]);

  // --- Helper: Action Logger ---
  const addActionLog = async (who, action, detail) => {
      try { 
          await addDoc(collection(db, 'actionLogs'), { 
              timestamp: serverTimestamp(), 
              user: who || 'Unknown', 
              action, 
              detail 
          }); 
      } catch(e) { console.error("Log Error", e); }
  };

  // --- TASK ACTIONS ---
  const handleTaskToggle = async (id, status, by) => {
      await updateDoc(doc(db, 'tasks', id), { completed: !status });
      addActionLog(by?.email, 'Toggle Task', `Task ID: ${id}`);
  };
  const handleUpdateTaskStatus = async (id, status, by) => {
      await updateDoc(doc(db, 'tasks', id), { status });
      addActionLog(by?.email, 'Update Status', `Task ${id} -> ${status}`);
  };
  const handleAddTask = async (data, by) => {
      await addDoc(collection(db, 'tasks'), data);
      addActionLog(by?.email, 'Add Task', `Task: ${data.name}`);
  };
  const handleEditTask = async (id, data, by) => {
      await updateDoc(doc(db, 'tasks', id), data);
      addActionLog(by?.email, 'Edit Task', `Task: ${id}`);
  };
  const handleDeleteTask = async (id, by) => {
      await deleteDoc(doc(db, 'tasks', id));
      addActionLog(by?.email, 'Delete Task', `Task: ${id}`);
  };

  // --- MEMBER ACTIONS (แก้ใหม่: บันทึก Role ลง Database ให้ถูกต้อง) ---
  const handleAddMember = async (data, by) => { 
      // 1. Clean Data & Determine Role
      const cleanEmail = data.email ? data.email.trim().toLowerCase() : '';
      const position = data.position ? data.position.trim() : '';
      
      const isManager = position.toLowerCase().includes('manager') || 
                        position.toLowerCase().includes('หัวหน้า') || 
                        position.toLowerCase().includes('dgm') || 
                        position.toLowerCase().includes('dm');
      const role = isManager ? 'dgm' : 'staff';

      // 2. Add to 'members' collection (ใส่ field role ไปด้วย!)
      await addDoc(collection(db, 'members'), {
          ...data,
          email: cleanEmail,
          position: position,
          role: role // ✅ สำคัญ: ต้องบันทึก Role ลงไปตรงนี้
      }); 
      
      // 3. Add to 'roles' collection for permission check
      if (cleanEmail) {
          const roleRef = doc(db, 'roles', cleanEmail);
          await setDoc(roleRef, { role }, { merge: true });
      }

      addActionLog(by?.email, 'Add Member', `Added: ${data.name} (${role})`); 
  };

  const handleEditMember = async (id, data, by) => { 
      await updateDoc(doc(db, 'members', id), data); 
      
      // ถ้ามีการเปลี่ยนตำแหน่งหรือ Email อาจต้องอัปเดต Role ด้วย (ทำเผื่อไว้)
      if (data.email || data.role) {
           const cleanEmail = data.email ? data.email.trim().toLowerCase() : '';
           if(cleanEmail && data.role) {
                await setDoc(doc(db, 'roles', cleanEmail), { role: data.role }, { merge: true });
           }
      }

      addActionLog(by?.email, 'Edit Member', `Edited: ${data.name}`); 
  };
  
  const handleDeleteMember = async (id, by) => { 
      await deleteDoc(doc(db, 'members', id)); 
      addActionLog(by?.email, 'Delete Member', `Deleted ID: ${id}`); 
  };

  // --- LOG/PROBLEM ACTIONS ---
  const handleAddLog = async (data, by) => { 
      await addDoc(collection(db, 'logs'), data); 
      addActionLog(by?.email, 'Add Log', data.topic); 
  };
  const handleResolveLog = async (id, note, by) => { 
      await updateDoc(doc(db, 'logs', id), { status: 'solved', resolution: note, solvedBy: by?.email }); 
      addActionLog(by?.email, 'Resolve Log', id); 
  };
  const handleDeleteLog = async (id, by) => { 
      await deleteDoc(doc(db, 'logs', id)); 
      addActionLog(by?.email, 'Delete Log', id); 
  };

  // --- RULE/SCORE ACTIONS ---
  const handleSaveRule = async (data, by) => { 
      if(data.id){
          const {id, ...rest} = data;
          await updateDoc(doc(db,'rules',id), rest);
      } else {
          await addDoc(collection(db,'rules'), data);
      } 
      addActionLog(by?.email,'Save Rule', data.condition); 
  };
  const handleDeleteRule = async (id, by) => { 
      await deleteDoc(doc(db,'rules',id)); 
      addActionLog(by?.email,'Delete Rule', id); 
  };
  
  const handleSaveManualScore = async (data, by) => { 
      await addDoc(collection(db,'manualScores'), {...data, timestamp: serverTimestamp()}); 
      addActionLog(by?.email,'Add Score', `${data.points} pts`); 
  };
  const handleDeleteManualScore = async (id, by) => { 
      await deleteDoc(doc(db,'manualScores',id)); 
      addActionLog(by?.email,'Delete Score', id); 
  };

  // --- ROLE ACTIONS ---
  const handleSaveRole = async (email, role, by) => { 
      const cleanEmail = email.trim().toLowerCase();
      const ref = doc(db,'roles', cleanEmail); 
      await setDoc(ref, {role}, {merge:true}); 
      addActionLog(by?.email,'Update Role', `${cleanEmail}->${role}`); 
  };

  return {
    members, tasks, logs, actionLogs, rules, manualScores, roles,
    handleTaskToggle, handleUpdateTaskStatus, handleAddTask, handleEditTask, handleDeleteTask,
    handleAddMember, handleEditMember, handleDeleteMember,
    handleAddLog, handleResolveLog, handleDeleteLog,
    handleSaveRule, handleDeleteRule,
    handleSaveManualScore, handleDeleteManualScore, 
    handleSaveRole
  };
}