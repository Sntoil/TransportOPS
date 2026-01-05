import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './firebase';
import useTransportData from './hooks/useTransportData';
import Sidebar from './layout/Sidebar';
import DashboardView from './features/DashboardView';
import TeamView from './features/TeamView';
import DepartmentView from './features/DepartmentView';
import ScoreLogView from './features/ScoreLogView';
import ProblemLogView from './features/ProblemLogView';
import AssignMenuView from './features/AssignMenuView';
import ActionLogView from './features/ActionLogView';
import RulesView from './features/RulesView';
import LoginView from './features/LoginView';
import { Toaster, toast } from 'react-hot-toast';
import { Menu } from 'lucide-react';

// AI Helper
import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_FIREBASE_API_KEY); // ใช้ API Key ตัวเดียวกับ Firebase (ถ้าเปิดบริการไว้) หรือใส่ Key แยก

export default function TransportApp() {
  const [user, setUser] = useState(null);
  const [appUser, setAppUser] = useState(null); // สำหรับเครื่อง 2 ที่ไม่มี Firebase Auth
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [aiLoading, setAiLoading] = useState(false);

  // ดึง Data ทั้งหมดจาก Hook
  const {
    members, tasks, logs, actionLogs, rules, manualScores, roles,
    handleTaskToggle, handleUpdateTaskStatus, handleAddTask, handleEditTask, handleDeleteTask,
    handleAddMember, handleEditMember, handleDeleteMember,
    handleAddLog, handleResolveLog, handleDeleteLog, // 👈 ✅ รับมาจาก Hook
    handleSaveRule, handleDeleteRule,
    handleSaveManualScore, handleDeleteManualScore,
    handleSaveRole
  } = useTransportData(user || appUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if(!currentUser) {
         // Auto login mock for demo/machine 2 if needed or just wait
      }
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    setAppUser(null);
  };

  const showToast = (msg) => toast.success(msg);

  // Wrapper เพื่อส่ง user เข้าไปใน function ของ hook อัตโนมัติ
  const withUser = (fn) => (...args) => {
      if (fn) return fn(...args, user || appUser); // 👈 มี return เพื่อให้ใช้ await ได้
  };

  const currentUserRole = roles[(user || appUser)?.email] || 'staff'; 

  // AI Function
  const askAiSolution = async (logItem) => {
      setAiLoading(true);
      try {
        const model = genAI.getGenerativeModel({ model: "gemini-pro"});
        const prompt = `ช่วยแนะนำวิธีแก้ปัญหาขนส่งนี้หน่อย: หัวข้อ "${logItem.topic}" รายละเอียด "${logItem.detail}"`;
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        alert(`🤖 AI Suggestion:\n${text}`);
      } catch (error) {
          console.error(error);
          alert("AI Error or API Key missing");
      } finally {
          setAiLoading(false);
      }
  };

  if (!user && !appUser) {
    return <LoginView onLogin={(u) => setAppUser(u)} />;
  }

  return (
    <div className="flex h-screen bg-gray-100 font-sans text-gray-900 overflow-hidden">
      <Toaster position="top-right" />
      
      {/* Sidebar (Desktop) */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 text-white transform transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
         <Sidebar 
            activeTab={activeTab} 
            setActiveTab={(t) => { setActiveTab(t); setIsSidebarOpen(false); }} 
            user={user || appUser} 
            role={currentUserRole}
            onLogout={handleLogout}
         />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header (Mobile Toggle) */}
        <div className="lg:hidden bg-white p-4 shadow-sm flex items-center justify-between">
           <span className="font-bold text-lg text-slate-800">TransportOps</span>
           <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 text-gray-600"><Menu/></button>
        </div>

        <div className="flex-1 overflow-auto p-4 lg:p-8">
           <div className="max-w-7xl mx-auto">
              {activeTab === 'dashboard' && <DashboardView members={members} tasks={tasks} logs={logs} />}
              {activeTab === 'team' && <TeamView members={members} onAdd={withUser(handleAddMember)} onEdit={withUser(handleEditMember)} onDelete={withUser(handleDeleteMember)} currentUserRole={currentUserRole} />}
              {activeTab === 'dept' && <DepartmentView members={members} tasks={tasks} onTaskToggle={withUser(handleTaskToggle)} />}
              {activeTab === 'scores' && <ScoreLogView members={members} manualScores={manualScores} rules={rules} tasks={tasks} onAddScore={withUser(handleSaveManualScore)} onDeleteScore={withUser(handleDeleteManualScore)} currentUserRole={currentUserRole} />}
              
              {activeTab === 'problems' && 
                <ProblemLogView 
                    logs={logs} 
                    onAddLog={withUser(handleAddLog)} 
                    onResolveLog={withUser(handleResolveLog)}
                    onDeleteLog={withUser(handleDeleteLog)} // 👈 ✅ ส่ง prop นี้ไป
                    currentDate={new Date().toLocaleDateString('th-TH')}
                    askAiSolution={askAiSolution}
                    showToast={showToast}
                    userEmail={(user || appUser)?.email}
                    currentUserRole={currentUserRole}
                    aiLoading={aiLoading}
                />
              }

              {activeTab === 'assign' && <AssignMenuView members={members} tasks={tasks} onAddTask={withUser(handleAddTask)} onEditTask={withUser(handleEditTask)} onDeleteTask={withUser(handleDeleteTask)} onUpdateStatus={withUser(handleUpdateTaskStatus)} currentUserRole={currentUserRole} />}
              {activeTab === 'action_logs' && <ActionLogView logs={actionLogs} />}
              {activeTab === 'rules' && <RulesView rules={rules} onSave={withUser(handleSaveRule)} onDelete={withUser(handleDeleteRule)} currentUserRole={currentUserRole} roles={roles} onSaveRole={withUser(handleSaveRole)} />}
           </div>
        </div>
      </div>
      
      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => setIsSidebarOpen(false)}></div>}
    </div>
  );
}