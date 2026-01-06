import { useState, useEffect } from 'react';
import { 
  collection, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  onSnapshot, 
  query, 
  serverTimestamp 
} from 'firebase/firestore';
import { db } from '../firebase';

export default function useTransportData(user) {
  // ค่าเริ่มต้น
  const [members, setMembers] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [logs, setLogs] = useState([]);
  const [actionLogs, setActionLogs] = useState([]);
  const [rules, setRules] = useState([]);
  const [manualScores, setManualScores] = useState([]);
  const [roles, setRoles] = useState({});

  useEffect(() => {
    // ถ้าแก้ Rules เป็น if true แล้ว บรรทัดนี้ลบออกได้เพื่อให้เทสได้โดยไม่ต้องล็อกอิน
    // if (!user) return; 

    const subscribe = (colName, setState) => {
        // ✅ ไม่ใช้ orderBy แล้ว (แก้ปัญหา Index)
        const ref = collection(db, colName);
        return onSnapshot(ref, (snapshot) => {
            if (!snapshot.empty) {
                const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                
                // เรียงข้อมูลในบ้านเราเอง (Client-side Sorting) แทนการใช้ Index
                if (colName === 'logs') data.sort((a,b) => (b.date || '').localeCompare(a.date || ''));
                if (colName === 'actionLogs') data.sort((a,b) => (b.timestamp?.seconds || 0) - (a.timestamp?.seconds || 0));
                
                setState(data);
            } else {
                setState([]);
            }
        }, (error) => {
            console.error(`Error fetching ${colName}:`, error); // 👈 ดู Error ตรงนี้ใน Console (F12)
            setState([]); 
        });
    };

    // ⚠️ เช็คชื่อ Collection ตรงนี้ให้ตรงกับ Firebase ของคุณ!
    const unsubMembers = subscribe('members', setMembers);
    const unsubTasks = subscribe('tasks', setTasks);
    const unsubLogs = subscribe('logs', setLogs);
    const unsubActionLogs = subscribe('actionLogs', setActionLogs);
    const unsubRules = subscribe('rules', setRules);
    const unsubManualScores = subscribe('manualScores', setManualScores);
    
    const unsubRoles = onSnapshot(collection(db, 'roles'), (snapshot) => {
        const r = {};
        snapshot.docs.forEach(d => r[d.id] = d.data().role);
        setRoles(r);
    }, (e) => console.error("Roles Error:", e));

    return () => {
        unsubMembers(); unsubTasks(); unsubLogs(); unsubActionLogs();
        unsubRules(); unsubManualScores(); unsubRoles();
    };
  }, [user]);

  // --- Actions (เหมือนเดิม) ---
  const addActionLog = async (who, action, detail) => { try { await addDoc(collection(db, 'actionLogs'), { timestamp: serverTimestamp(), user: who||'Unknown', action, detail }); } catch(e){} };
  
  const handleTaskToggle = async (id, status, by) => { await updateDoc(doc(db, 'tasks', id), { completed: !status }); addActionLog(by?.email, 'Toggle Task', id); };
  const handleUpdateTaskStatus = async (id, status, by) => { await updateDoc(doc(db, 'tasks', id), { status }); addActionLog(by?.email, 'Update Status', id); };
  const handleAddTask = async (data, by) => { await addDoc(collection(db, 'tasks'), data); addActionLog(by?.email, 'Add Task', data.name); };
  const handleEditTask = async (id, data, by) => { await updateDoc(doc(db, 'tasks', id), data); addActionLog(by?.email, 'Edit Task', id); };
  const handleDeleteTask = async (id, by) => { await deleteDoc(doc(db, 'tasks', id)); addActionLog(by?.email, 'Delete Task', id); };

  // --- MEMBER ACTIONS ---
  const handleAddMember = async (data, by) => { 
      // 1. Cleansing Data: ตัดช่องว่างหน้าหลัง และแปลง Email เป็นตัวเล็กทั้งหมด (สำคัญมาก!)
      const cleanData = {
          ...data,
          email: data.email ? data.email.trim().toLowerCase() : '',
          name: data.name ? data.name.trim() : '',
          position: data.position ? data.position.trim() : ''
      };

      // 2. คำนวณ Role ก่อนบันทึก
      let role = 'staff';
      if (cleanData.email) {
          const position = cleanData.position.toLowerCase();
          const isManager = position.includes('manager') || position.includes('หัวหน้า') || position.includes('dgm') || position.includes('dm');
          role = isManager ? 'dgm' : 'staff';
      }

      // 3. ✅ บันทึกข้อมูลพนักงานลง Collection members (ใส่ role ลงไปด้วย!)
      // แบบนี้หน้า TeamView ถึงจะเห็นว่าเป็น DGM
      await addDoc(collection(db, 'members'), {
          ...cleanData,
          role: role // <--- บรรทัดนี้ที่หายไป
      }); 
      
      // 4. บันทึกสิทธิ์ (Role) ลง Collection roles (สำหรับการตรวจสอบสิทธิ์ Login)
      if (cleanData.email) {
          const roleRef = doc(db, 'roles', cleanData.email);
          await import('firebase/firestore').then(({setDoc}) => 
              setDoc(roleRef, { role }, { merge: true })
          );
      }

      addActionLog(by?.email, 'Add Member', `Added: ${cleanData.name} as ${role}`); 
  };
  const handleEditMember = async (id, data, by) => { await updateDoc(doc(db, 'members', id), data); addActionLog(by?.email, 'Edit Member', data.name); };
  const handleDeleteMember = async (id, by) => { await deleteDoc(doc(db, 'members', id)); addActionLog(by?.email, 'Delete Member', id); };
  
  const handleAddLog = async (data, by) => { await addDoc(collection(db, 'logs'), data); addActionLog(by?.email, 'Add Log', data.topic); };
  const handleResolveLog = async (id, n, by) => { await updateDoc(doc(db, 'logs', id), {status:'solved', resolution:n, solvedBy:by?.email}); addActionLog(by?.email, 'Resolve', id); };
  const handleDeleteLog = async (id, by) => { await deleteDoc(doc(db, 'logs', id)); addActionLog(by?.email, 'Del Log', id); };
  
  const handleSaveRule = async (d, by) => { if(d.id){const{id,...r}=d;await updateDoc(doc(db,'rules',id),r);}else{await addDoc(collection(db,'rules'),d);} addActionLog(by?.email,'Rule', d.condition); };
  const handleDeleteRule = async (id, by) => { await deleteDoc(doc(db,'rules',id)); addActionLog(by?.email,'Del Rule',id); };
  const handleSaveManualScore = async (d, by) => { await addDoc(collection(db,'manualScores'),{...d, timestamp:serverTimestamp()}); addActionLog(by?.email,'Score', d.points); };
  const handleDeleteManualScore = async (id, by) => { await deleteDoc(doc(db,'manualScores',id)); addActionLog(by?.email,'Del Score',id); };
  const handleSaveRole = async (e, r, by) => { const ref=doc(db,'roles',e); await import('firebase/firestore').then(({setDoc})=>setDoc(ref,{role:r},{merge:true})); addActionLog(by?.email,'Role',e); };

  return {
    members, tasks, logs, actionLogs, rules, manualScores, roles,
    handleTaskToggle, handleUpdateTaskStatus, handleAddTask, handleEditTask, handleDeleteTask,
    handleAddMember, handleEditMember, handleDeleteMember,
    handleAddLog, handleResolveLog, handleDeleteLog,
    handleSaveRule, handleDeleteRule,
    handleSaveManualScore, handleDeleteManualScore, handleSaveRole
  };
}