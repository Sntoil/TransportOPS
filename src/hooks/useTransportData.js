import { useState, useEffect } from 'react';
import { 
  collection, addDoc, updateDoc, deleteDoc, doc, onSnapshot, query, orderBy, serverTimestamp 
} from 'firebase/firestore';
import { db } from '../firebase';

export default function useTransportData(user) {
  // ✅ FIX 1: บังคับให้เป็น Array ว่าง [] ตั้งแต่เกิด ห้ามเป็น null
  const [members, setMembers] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [logs, setLogs] = useState([]);
  const [actionLogs, setActionLogs] = useState([]);
  const [rules, setRules] = useState([]);
  const [manualScores, setManualScores] = useState([]);
  const [roles, setRoles] = useState({}); // อันนี้เป็น Object ถูกแล้ว

  useEffect(() => {
    if (!user) return; // ถ้าไม่มี User ก็จบเลย (ค่าจะเป็น [] ตามข้างบน)

    // ดึง Members
    const unsubMembers = onSnapshot(collection(db, 'members'), (snapshot) => {
      if (!snapshot.empty) {
        setMembers(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      } else {
        setMembers([]); // ถ้าไม่เจอข้อมูล ให้เป็น array ว่าง
      }
    });

    // ดึง Tasks
    const qTasks = query(collection(db, 'tasks'));
    const unsubTasks = onSnapshot(qTasks, (snapshot) => {
      if (!snapshot.empty) {
        setTasks(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      } else {
        setTasks([]);
      }
    });

    // ดึง Logs
    const qLogs = query(collection(db, 'logs'), orderBy('date', 'desc'));
    const unsubLogs = onSnapshot(qLogs, (snapshot) => {
       if (!snapshot.empty) {
        setLogs(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      } else {
        setLogs([]);
      }
    });

    // ดึง ActionLogs
    const qActionLogs = query(collection(db, 'actionLogs'), orderBy('timestamp', 'desc'));
    const unsubActionLogs = onSnapshot(qActionLogs, (snapshot) => {
       if (!snapshot.empty) {
        setActionLogs(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      } else {
        setActionLogs([]);
      }
    });

    // ดึง Rules
    const unsubRules = onSnapshot(collection(db, 'rules'), (snapshot) => {
      setRules(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    // ดึง ManualScores
    const unsubManualScores = onSnapshot(collection(db, 'manualScores'), (snapshot) => {
      setManualScores(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    // ดึง Roles
    const unsubRoles = onSnapshot(collection(db, 'roles'), (snapshot) => {
      const rolesData = {};
      snapshot.docs.forEach(doc => { rolesData[doc.id] = doc.data().role; });
      setRoles(rolesData);
    });

    return () => {
      unsubMembers(); unsubTasks(); unsubLogs(); unsubActionLogs();
      unsubRules(); unsubManualScores(); unsubRoles();
    };
  }, [user]);

  // ... (ฟังก์ชัน Add/Update/Delete เดิม ใช้ของเดิมได้เลยครับ ไม่ต้องแก้) ...
  // แต่เพื่อความชัวร์ ผมใส่ placeholder ไว้ให้ ถ้าคุณมีฟังก์ชันพวกนี้อยู่แล้ว ไม่ต้องก๊อปส่วนนี้ไปทับก็ได้
  // หรือถ้าจะเอาชัวร์ ให้ก๊อปฟังก์ชัน Action Handlers จากไฟล์เดิมมาใส่ต่อท้ายตรงนี้ครับ 
  
  // --- Action Handlers (Copy เดิมมาใส่ หรือใช้ตัวย่อนี้ถ้าไฟล์เดิมหาย) ---
  const addActionLog = async (who, action, detail) => { await addDoc(collection(db, 'actionLogs'), { timestamp: serverTimestamp(), user: who, action, detail }); };
  const handleTaskToggle = async (id, status) => { await updateDoc(doc(db, 'tasks', id), { completed: !status }); };
  const handleUpdateTaskStatus = async (id, status) => { await updateDoc(doc(db, 'tasks', id), { status }); };
  const handleAddTask = async (data) => { await addDoc(collection(db, 'tasks'), data); };
  const handleEditTask = async (id, data) => { await updateDoc(doc(db, 'tasks', id), data); };
  const handleDeleteTask = async (id) => { await deleteDoc(doc(db, 'tasks', id)); };
  const handleAddMember = async (data) => { await addDoc(collection(db, 'members'), data); };
  const handleEditMember = async (id, data) => { await updateDoc(doc(db, 'members', id), data); };
  const handleDeleteMember = async (id) => { await deleteDoc(doc(db, 'members', id)); };
  const handleAddLog = async (data) => { await addDoc(collection(db, 'logs'), data); };
  const handleResolveLog = async (id, note, by) => { await updateDoc(doc(db, 'logs', id), { status: 'solved', resolution: note, solvedBy: by?.email }); };
  const handleDeleteLog = async (id) => { await deleteDoc(doc(db, 'logs', id)); };
  const handleSaveRule = async (data) => { if(data.id) { const {id,...rest}=data; await updateDoc(doc(db,'rules',id),rest); } else { await addDoc(collection(db,'rules'),data); } };
  const handleDeleteRule = async (id) => { await deleteDoc(doc(db, 'rules', id)); };
  const handleSaveManualScore = async (data) => { await addDoc(collection(db, 'manualScores'), {...data, timestamp: serverTimestamp()}); };
  const handleDeleteManualScore = async (id) => { await deleteDoc(doc(db, 'manualScores', id)); };
  const handleSaveRole = async (email, role) => { const ref = doc(db, 'roles', email); await import('firebase/firestore').then(({setDoc})=>setDoc(ref, {role}, {merge:true})); };

  // ✅ FIX 2: Return ต้องครบ และชื่อต้องตรงเป๊ะ
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