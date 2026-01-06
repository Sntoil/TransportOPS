import { useState, useEffect } from 'react';
import { 
  collection, addDoc, updateDoc, deleteDoc, doc, onSnapshot, query, orderBy, serverTimestamp 
} from 'firebase/firestore';
import { db } from '../firebase';

export default function useTransportData(user) {
  // ตั้งค่าเริ่มต้นเป็น Array ว่าง [] เสมอ (ห้าม null)
  const [members, setMembers] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [logs, setLogs] = useState([]);
  const [actionLogs, setActionLogs] = useState([]);
  const [rules, setRules] = useState([]);
  const [manualScores, setManualScores] = useState([]);
  const [roles, setRoles] = useState({});

  useEffect(() => {
    // ถ้าไม่มี User (ยังไม่ Login) ไม่ต้องไปดึง Database (ป้องกัน Error Permission)
    if (!user && !user?.email) return;

    const unsubMembers = onSnapshot(collection(db, 'members'), (snapshot) => {
      setMembers(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    const qTasks = query(collection(db, 'tasks'));
    const unsubTasks = onSnapshot(qTasks, (snapshot) => {
      setTasks(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    const qLogs = query(collection(db, 'logs'), orderBy('date', 'desc'));
    const unsubLogs = onSnapshot(qLogs, (snapshot) => {
      setLogs(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    const qActionLogs = query(collection(db, 'actionLogs'), orderBy('timestamp', 'desc'));
    const unsubActionLogs = onSnapshot(qActionLogs, (snapshot) => {
      setActionLogs(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    const unsubRules = onSnapshot(collection(db, 'rules'), (snapshot) => {
      setRules(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    const unsubManualScores = onSnapshot(collection(db, 'manualScores'), (snapshot) => {
      setManualScores(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

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

  // --- Action Handlers (ต้องมีครบ!) ---

  const addActionLog = async (who, action, detail) => {
    try {
      await addDoc(collection(db, 'actionLogs'), {
        timestamp: serverTimestamp(),
        user: who, action, detail
      });
    } catch(e) { console.error("Log Error", e); }
  };

  const handleTaskToggle = async (taskId, currentStatus, updatedBy) => {
    const newStatus = !currentStatus;
    const taskRef = doc(db, 'tasks', taskId);
    await updateDoc(taskRef, { completed: newStatus });
    await addActionLog(updatedBy?.email || 'Unknown', 'Toggle Task', `Task ${taskId} -> ${newStatus ? 'Done' : 'Undo'}`);
  };

  const handleUpdateTaskStatus = async (taskId, newStatus, updatedBy) => {
    const taskRef = doc(db, 'tasks', taskId);
    await updateDoc(taskRef, { status: newStatus });
    await addActionLog(updatedBy?.email || 'Unknown', 'Update Status', `Task ${taskId} -> ${newStatus}`);
  };

  const handleAddTask = async (newTask, createdBy) => {
    await addDoc(collection(db, 'tasks'), newTask);
    await addActionLog(createdBy?.email || 'Unknown', 'Add Task', `Added task: ${newTask.name}`);
  };

  const handleEditTask = async (taskId, updatedData, updatedBy) => {
    const taskRef = doc(db, 'tasks', taskId);
    await updateDoc(taskRef, updatedData);
    await addActionLog(updatedBy?.email || 'Unknown', 'Edit Task', `Edited task: ${taskId}`);
  };

  const handleDeleteTask = async (taskId, deletedBy) => {
    await deleteDoc(doc(db, 'tasks', taskId));
    await addActionLog(deletedBy?.email || 'Unknown', 'Delete Task', `Deleted task: ${taskId}`);
  };

  const handleAddMember = async (newMember, createdBy) => {
    await addDoc(collection(db, 'members'), newMember);
    await addActionLog(createdBy?.email || 'Unknown', 'Add Member', `Added member: ${newMember.name}`);
  };

  const handleEditMember = async (memberId, updatedData, updatedBy) => {
    const memberRef = doc(db, 'members', memberId);
    await updateDoc(memberRef, updatedData);
    await addActionLog(updatedBy?.email || 'Unknown', 'Edit Member', `Edited member: ${memberId}`);
  };

  const handleDeleteMember = async (memberId, deletedBy) => {
    await deleteDoc(doc(db, 'members', memberId));
    await addActionLog(deletedBy?.email || 'Unknown', 'Delete Member', `Deleted member: ${memberId}`);
  };

  const handleAddLog = async (logData, createdBy) => {
    await addDoc(collection(db, 'logs'), logData);
    await addActionLog(createdBy?.email || 'Unknown', 'Add Log', `Added problem: ${logData.topic}`);
  };

  const handleResolveLog = async (logId, note, solvedBy) => {
    const logRef = doc(db, 'logs', logId);
    await updateDoc(logRef, { status: 'solved', resolution: note, solvedBy: solvedBy?.email || 'Unknown' });
    await addActionLog(solvedBy?.email || 'Unknown', 'Resolve Log', `Resolved log: ${logId}`);
  };

  const handleDeleteLog = async (logId, deletedBy) => {
    await deleteDoc(doc(db, 'logs', logId));
    await addActionLog(deletedBy?.email || 'Unknown', 'Delete Log', `Deleted log: ${logId}`);
  };

  const handleSaveRule = async (ruleData, savedBy) => {
    if (ruleData.id) {
       const { id, ...data } = ruleData;
       await updateDoc(doc(db, 'rules', id), data);
    } else {
       await addDoc(collection(db, 'rules'), ruleData);
    }
    await addActionLog(savedBy?.email || 'Unknown', 'Save Rule', `Saved rule`);
  };

  const handleDeleteRule = async (ruleId, deletedBy) => {
    await deleteDoc(doc(db, 'rules', ruleId));
    await addActionLog(deletedBy?.email || 'Unknown', 'Delete Rule', `Deleted rule: ${ruleId}`);
  };

  const handleSaveManualScore = async (scoreData, savedBy) => {
     await addDoc(collection(db, 'manualScores'), { ...scoreData, timestamp: serverTimestamp() });
     await addActionLog(savedBy?.email || 'Unknown', 'Add Score', `Score ${scoreData.points}`);
  };

  const handleDeleteManualScore = async (scoreId, deletedBy) => {
     await deleteDoc(doc(db, 'manualScores', scoreId));
     await addActionLog(deletedBy?.email || 'Unknown', 'Delete Score', `Deleted score: ${scoreId}`);
  };
  
  const handleSaveRole = async (email, role, savedBy) => {
     const roleRef = doc(db, 'roles', email);
     await import('firebase/firestore').then(async ({setDoc, getDoc}) => {
        await setDoc(roleRef, { role }, { merge: true });
     });
     await addActionLog(savedBy?.email || 'Unknown', 'Update Role', `Set ${email} to ${role}`);
  };

  // ✅ สำคัญมาก: ต้อง return ออกไปให้ครบทุกตัว!
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