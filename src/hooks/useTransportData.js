import { useState, useEffect } from 'react';
import { db, appId } from '../firebase';
import { 
  collection, addDoc, updateDoc, deleteDoc, doc, 
  onSnapshot, query, serverTimestamp 
} from 'firebase/firestore';
import { formatDateTime } from '../utils/helpers';
import { 
  INITIAL_MEMBERS, INITIAL_TASKS, INITIAL_LOGS, 
  INITIAL_ACTION_LOGS, INITIAL_RULES, INITIAL_MANUAL_SCORES, DEFAULT_ROLES 
} from '../utils/constants';

export function useTransportData(user) {
  // --- State ---
  const [members, setMembers] = useState(INITIAL_MEMBERS);
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  const [logs, setLogs] = useState(INITIAL_LOGS);
  const [actionLogs, setActionLogs] = useState(INITIAL_ACTION_LOGS);
  const [rules, setRules] = useState(INITIAL_RULES);
  const [manualScores, setManualScores] = useState(INITIAL_MANUAL_SCORES);
  const [roles, setRoles] = useState(DEFAULT_ROLES);

  // --- Data Fetching ---
  useEffect(() => {
    if (!user) return;
    
    const setupListener = (collectionName, setState) => {
      const q = query(collection(db, 'artifacts', appId, 'public', 'data', collectionName));
      return onSnapshot(q, (snapshot) => {
        const data = snapshot.docs.map(doc => ({ ...doc.data(), docId: doc.id }));
        if(data.length > 0) setState(data);
      }, (error) => console.error(`Error loading ${collectionName}:`, error));
    };

    const unsubMembers = setupListener('members', setMembers);
    const unsubTasks = setupListener('tasks', setTasks);
    const unsubLogs = setupListener('logs', setLogs);
    const unsubActionLogs = setupListener('actionLogs', setActionLogs);
    const unsubRules = setupListener('rules', setRules);
    const unsubScores = setupListener('manualScores', setManualScores);
    const unsubRoles = setupListener('roles', setRoles);

    return () => {
      unsubMembers(); unsubTasks(); unsubLogs(); unsubActionLogs(); 
      unsubRules(); unsubScores(); unsubRoles();
    };
  }, [user]);

  // --- Helper Actions ---
  const getUserName = (appUser) => appUser ? (appUser.email || appUser.name) : "System";

  const addActionLog = async (action, appUser) => {
    if (!user) return;
    await addDoc(collection(db, 'artifacts', appId, 'public', 'data', 'actionLogs'), {
      timestamp: formatDateTime(new Date()),
      action: action,
      user: getUserName(appUser),
      createdAt: serverTimestamp()
    });
  };

  // --- CRUD Handlers ---

  const handleTaskToggle = async (taskId, taskTitle, dept, appUser) => {
    const task = tasks.find(t => t.id === taskId);
    if (!task) return;
    const newStatus = task.status === 'completed' ? 'pending' : 'completed';
    await updateDoc(doc(db, 'artifacts', appId, 'public', 'data', 'tasks', taskId), { status: newStatus });
    if (newStatus === 'completed') { addActionLog(`กดจบงาน: "${taskTitle}" ของแผนก ${dept}`, appUser); }
  };

  const handleUpdateTaskStatus = async (taskId, newStatus) => {
    await updateDoc(doc(db, 'artifacts', appId, 'public', 'data', 'tasks', taskId), { latestStatus: newStatus });
  };

  const handleAddTask = async (newTask, dept, appUser) => {
    await addDoc(collection(db, 'artifacts', appId, 'public', 'data', 'tasks'), newTask);
    addActionLog(`เพิ่มงานใหม่: "${newTask.title}" ในแผนก ${dept}`, appUser);
  };
  
  const handleEditTask = async (task, appUser) => {
     const { id, ...data } = task;
     await updateDoc(doc(db, 'artifacts', appId, 'public', 'data', 'tasks', id), data);
     addActionLog(`แก้ไขงาน: "${task.title}"`, appUser);
  };

  const handleDeleteTask = async (id, appUser) => {
     await deleteDoc(doc(db, 'artifacts', appId, 'public', 'data', 'tasks', id));
     addActionLog("ลบงาน", appUser);
  };

  const handleAddMember = async (newMember, appUser) => {
    await addDoc(collection(db, 'artifacts', appId, 'public', 'data', 'members'), newMember);
    addActionLog(`เพิ่มพนักงานใหม่: ${newMember.name}`, appUser);
  };

  const handleEditMember = async (member, appUser) => {
    const { docId, ...data } = member;
    if(docId) {
        await updateDoc(doc(db, 'artifacts', appId, 'public', 'data', 'members', docId), data);
        addActionLog(`แก้ไขข้อมูลพนักงาน: ${member.name}`, appUser);
    }
  };

  const handleDeleteMember = async (id) => {
    const memberToDelete = members.find(m => m.id === id);
    if(memberToDelete && memberToDelete.docId) {
        await deleteDoc(doc(db, 'artifacts', appId, 'public', 'data', 'members', memberToDelete.docId));
    }
  };

  const handleAddLog = async (newLog, appUser) => {
    await addDoc(collection(db, 'artifacts', appId, 'public', 'data', 'logs'), newLog);
    addActionLog(`แจ้งปัญหาใหม่: ${newLog.topic}`, appUser);
  };
  
  const handleResolveLog = async (id, resolution, appUser) => {
      const logToUpdate = logs.find(l => l.id === id || l.docId === id);
      if(logToUpdate && logToUpdate.docId) {
          await updateDoc(doc(db, 'artifacts', appId, 'public', 'data', 'logs', logToUpdate.docId), {
              status: 'solved',
              resolution: resolution || "แก้ไขแล้ว",
              solvedBy: getUserName(appUser),
              solvedAt: serverTimestamp()
          });
          addActionLog("ปิดงานแจ้งปัญหา", appUser);
      }
  };

  const handleSaveRule = async (ruleData, appUser) => {
    const existingRule = rules.find(r => r.id === ruleData.id);
    if (existingRule && existingRule.docId) {
        await updateDoc(doc(db, 'artifacts', appId, 'public', 'data', 'rules', existingRule.docId), { 
            topic: ruleData.topic, score: ruleData.score, type: ruleData.type, detail: ruleData.detail 
        });
        addActionLog(`แก้ไขกฎระเบียบ: ${ruleData.topic}`, appUser);
    } else {
        await addDoc(collection(db, 'artifacts', appId, 'public', 'data', 'rules'), ruleData);
        addActionLog(`เพิ่มกฎระเบียบใหม่: ${ruleData.topic}`, appUser);
    }
  };

  const handleDeleteRule = async (id, appUser) => {
    const ruleToDelete = rules.find(r => r.id === id);
    if(ruleToDelete && ruleToDelete.docId) {
        await deleteDoc(doc(db, 'artifacts', appId, 'public', 'data', 'rules', ruleToDelete.docId));
        addActionLog("ลบกฎระเบียบ", appUser);
    }
  };

  const handleSaveManualScore = async (data, appUser) => {
    await addDoc(collection(db, 'artifacts', appId, 'public', 'data', 'manualScores'), data);
    const memberName = members.find(m => m.id === data.memberId)?.name;
    const typeText = data.score > 0 ? "เพิ่มคะแนน" : "หักคะแนน";
    addActionLog(`ปรับคะแนน (${typeText}) ให้คุณ ${memberName}: ${data.reason}`, appUser);
  };
  
  const handleDeleteManualScore = async (id, appUser) => {
      const scoreToDelete = manualScores.find(s => s.id === id || s.docId === id);
      if(scoreToDelete && scoreToDelete.docId) {
          await deleteDoc(doc(db, 'artifacts', appId, 'public', 'data', 'manualScores', scoreToDelete.docId));
          addActionLog("ลบรายการปรับคะแนน", appUser);
      }
  };

  const handleSaveRole = async (roleData) => {
    const existingRole = roles.find(r => r.id === roleData.id);
    if (existingRole && existingRole.docId) {
         const { docId, ...data } = roleData;
         await updateDoc(doc(db, 'artifacts', appId, 'public', 'data', 'roles', existingRole.docId), {
             access: data.access,
             readOnly: data.readOnly
         });
    } else {
         await addDoc(collection(db, 'artifacts', appId, 'public', 'data', 'roles'), roleData);
    }
  };

  return {
    // Data
    members, tasks, logs, actionLogs, rules, manualScores, roles,
    // Actions
    handleTaskToggle, handleUpdateTaskStatus, handleAddTask, handleEditTask, handleDeleteTask,
    handleAddMember, handleEditMember, handleDeleteMember,
    handleAddLog, handleResolveLog,
    handleSaveRule, handleDeleteRule,
    handleSaveManualScore, handleDeleteManualScore,
    handleSaveRole
  };
}