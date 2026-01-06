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
  serverTimestamp 
} from 'firebase/firestore';
import { db } from '../firebase';

export default function useTransportData(user) {
  // ✅ 1. กำหนดค่าเริ่มต้นเป็น Array ว่าง [] ทั้งหมด (ห้าม null เด็ดขาด)
  const [members, setMembers] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [logs, setLogs] = useState([]);
  const [actionLogs, setActionLogs] = useState([]);
  const [rules, setRules] = useState([]);
  const [manualScores, setManualScores] = useState([]);
  const [roles, setRoles] = useState({});

  useEffect(() => {
    // ถ้าไม่มี User ไม่ต้องดึงข้อมูล (ป้องกัน Error Permission)
    if (!user) return;

    // Helper Function สำหรับดึงข้อมูลแบบปลอดภัย
    const subscribe = (colName, setState, q = null) => {
        const ref = collection(db, colName);
        const finalQuery = q || ref;
        return onSnapshot(finalQuery, (snapshot) => {
            if (!snapshot.empty) {
                const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setState(data);
            } else {
                setState([]);
            }
        }, (error) => {
            console.error(`Error fetching ${colName}:`, error);
            setState([]); // ถ้า Error ให้เป็น Array ว่างไว้ก่อน กันหน้าเว็บขาว
        });
    };

    // เริ่มดึงข้อมูล
    const unsubMembers = subscribe('members', setMembers);
    const unsubTasks = subscribe('tasks', setTasks, query(collection(db, 'tasks')));
    const unsubLogs = subscribe('logs', setLogs, query(collection(db, 'logs'), orderBy('date', 'desc')));
    const unsubActionLogs = subscribe('actionLogs', setActionLogs, query(collection(db, 'actionLogs'), orderBy('timestamp', 'desc')));
    const unsubRules = subscribe('rules', setRules);
    const unsubManualScores = subscribe('manualScores', setManualScores);
    
    // ดึง Roles (เก็บเป็น Object { email: role })
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

  // --- MEMBER ACTIONS (สำคัญ: เพิ่มระบบ Auto Role) ---
  const handleAddMember = async (data, by) => { 
      // 1. บันทึกข้อมูลพนักงานลง Collection members
      await addDoc(collection(db, 'members'), data); 
      
      // 2. ✅ เพิ่ม: บันทึกสิทธิ์ (Role) ลง Collection roles อัตโนมัติ
      if (data.email) {
          // ตรวจสอบตำแหน่ง: ถ้ามีคำว่า Manager หรือ หัวหน้า ให้เป็น dgm (Admin), นอกนั้นเป็น staff
          const position = data.position?.toLowerCase() || '';
          const isManager = position.includes('manager') || position.includes('หัวหน้า') || position.includes('dgm') || position.includes('dm');
          const role = isManager ? 'dgm' : 'staff';
          
          // ใช้ import เพื่อเรียกใช้ setDoc แบบ Dynamic (ป้องกัน Circular Dependency)
          const roleRef = doc(db, 'roles', data.email);
          await import('firebase/firestore').then(({setDoc}) => 
              setDoc(roleRef, { role }, { merge: true })
          );
      }

      addActionLog(by?.email, 'Add Member', `Added: ${data.name}`); 
  };

  const handleEditMember = async (id, data, by) => { 
      await updateDoc(doc(db, 'members', id), data); 
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

  // --- ROLE ACTIONS (Manual Update) ---
  const handleSaveRole = async (email, role, by) => { 
      const ref = doc(db,'roles', email); 
      await import('firebase/firestore').then(({setDoc}) => 
          setDoc(ref, {role}, {merge:true})
      ); 
      addActionLog(by?.email,'Update Role', `${email}->${role}`); 
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