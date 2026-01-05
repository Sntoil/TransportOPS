import { useState, useEffect } from 'react';
import { 
  collection, 
  addDoc, 
  updateDoc, 
  deleteDoc, // ✅ เพิ่ม deleteDoc
  doc, 
  onSnapshot, 
  query, 
  orderBy, 
  where, 
  serverTimestamp 
} from 'firebase/firestore';
import { db } from '../firebase';

export default function useTransportData(user) {
  const [members, setMembers] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [logs, setLogs] = useState([]);
  const [actionLogs, setActionLogs] = useState([]);
  const [rules, setRules] = useState([]);
  const [manualScores, setManualScores] = useState([]);
  const [roles, setRoles] = useState({});

  useEffect(() => {
    // 1. Members
    const unsubMembers = onSnapshot(collection(db, 'members'), (snapshot) => {
      setMembers(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    // 2. Tasks (Real-time)
    const qTasks = query(collection(db, 'tasks'));
    const unsubTasks = onSnapshot(qTasks, (snapshot) => {
      const loadedTasks = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setTasks(loadedTasks);
    });

    // 3. Problem Logs
    const qLogs = query(collection(db, 'logs'), orderBy('date', 'desc'));
    const unsubLogs = onSnapshot(qLogs, (snapshot) => {
      setLogs(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    // 4. Action Logs
    const qActionLogs = query(collection(db, 'actionLogs'), orderBy('timestamp', 'desc'));
    const unsubActionLogs = onSnapshot(qActionLogs, (snapshot) => {
      setActionLogs(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    // 5. Rules
    const unsubRules = onSnapshot(collection(db, 'rules'), (snapshot) => {
      setRules(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    // 6. Manual Scores
    const unsubManualScores = onSnapshot(collection(db, 'manualScores'), (snapshot) => {
      setManualScores(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    // 7. Roles
    const unsubRoles = onSnapshot(collection(db, 'roles'), (snapshot) => {
      const rolesData = {};
      snapshot.docs.forEach(doc => {
        rolesData[doc.id] = doc.data().role;
      });
      setRoles(rolesData);
    });

    return () => {
      unsubMembers();
      unsubTasks();
      unsubLogs();
      unsubActionLogs();
      unsubRules();
      unsubManualScores();
      unsubRoles();
    };
  }, []);

  // --- Actions ---

  const addActionLog = async (who, action, detail) => {
    await addDoc(collection(db, 'actionLogs'), {
      timestamp: serverTimestamp(),
      user: who,
      action,
      detail
    });
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
    await addActionLog(createdBy?.email || 'Unknown', 'Add Log', `Added problem log: ${logData.topic}`);
  };

  const handleResolveLog = async (logId, note, solvedBy) => {
    const logRef = doc(db, 'logs', logId);
    await updateDoc(logRef, {
      status: 'solved',
      resolution: note,
      solvedBy: solvedBy?.email || 'Unknown'
    });
    await addActionLog(solvedBy?.email || 'Unknown', 'Resolve Log', `Resolved log: ${logId}`);
  };

  // ✅ ฟังก์ชันใหม่สำหรับลบ Log
  const handleDeleteLog = async (logId, deletedBy) => {
    await deleteDoc(doc(db, 'logs', logId));
    await addActionLog(deletedBy?.email || 'Unknown', 'Delete Log', `Deleted log: ${logId}`);
  };

  const handleSaveRule = async (ruleData, savedBy) => {
    if (ruleData.id) {
       const ruleRef = doc(db, 'rules', ruleData.id);
       const { id, ...data } = ruleData;
       await updateDoc(ruleRef, data);
    } else {
       await addDoc(collection(db, 'rules'), ruleData);
    }
    await addActionLog(savedBy?.email || 'Unknown', 'Save Rule', `Saved rule: ${ruleData.condition}`);
  };

  const handleDeleteRule = async (ruleId, deletedBy) => {
    await deleteDoc(doc(db, 'rules', ruleId));
    await addActionLog(deletedBy?.email || 'Unknown', 'Delete Rule', `Deleted rule: ${ruleId}`);
  };

  const handleSaveManualScore = async (scoreData, savedBy) => {
     await addDoc(collection(db, 'manualScores'), {
        ...scoreData,
        timestamp: serverTimestamp()
     });
     await addActionLog(savedBy?.email || 'Unknown', 'Add Manual Score', `Score ${scoreData.points} to ${scoreData.memberId}`);
  };

  const handleDeleteManualScore = async (scoreId, deletedBy) => {
     await deleteDoc(doc(db, 'manualScores', scoreId));
     await addActionLog(deletedBy?.email || 'Unknown', 'Delete Manual Score', `Deleted score: ${scoreId}`);
  };
  
  const handleSaveRole = async (email, role, savedBy) => {
     const roleRef = doc(db, 'roles', email); // ใช้ email เป็น ID
     await updateDoc(roleRef, { role: role }).catch(async () => {
         // ถ้ายังไม่มีให้ create
         await import('firebase/firestore').then(({setDoc}) => setDoc(roleRef, { role }));
     });
     await addActionLog(savedBy?.email || 'Unknown', 'Update Role', `Set ${email} to ${role}`);
  }

  return {
    members, tasks, logs, actionLogs, rules, manualScores, roles,
    handleTaskToggle, handleUpdateTaskStatus, handleAddTask, handleEditTask, handleDeleteTask,
    handleAddMember, handleEditMember, handleDeleteMember,
    handleAddLog, handleResolveLog, handleDeleteLog, // 👈 ✅ ส่งออกไปใช้งาน
    handleSaveRule, handleDeleteRule,
    handleSaveManualScore, handleDeleteManualScore,
    handleSaveRole
  };
}