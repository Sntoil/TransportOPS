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

// ใช้ try-catch ป้องกัน Error กรณีไม่มี Key หรือ Key ผิด
let genAI = null;
try {
  if (import.meta.env.VITE_FIREBASE_API_KEY) {
    genAI = new GoogleGenerativeAI(import.meta.env.VITE_FIREBASE_API_KEY);
  }
} catch (e) {
  console.warn("Google AI init failed:", e);
}

export default function TransportApp() {
  const [user, setUser] = useState(null);
  const [appUser, setAppUser] = useState(null);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [aiLoading, setAiLoading] = useState(false);

  // ดึง Data ทั้งหมดจาก Hook
  const {
    members, tasks, logs, actionLogs, rules, manualScores, roles,
    handleTaskToggle, handleUpdateTaskStatus, handleAddTask, handleEditTask, handleDeleteTask,
    handleAddMember, handleEditMember, handleDeleteMember,
    handleAddLog, handleResolveLog, handleDeleteLog,
    handleSaveRule, handleDeleteRule,
    handleSaveManualScore, handleDeleteManualScore,
    handleSaveRole
  } = useTransportData(user || appUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    setAppUser(null);
  };

  const showToast = (msg) => toast.success(msg);

  const withUser = (fn) => (...args) => {
      if (fn) return fn(...args, user || appUser);
  };

  // Safety Check: ถ้า roles ยังไม่มา ให้เป็น object ว่าง
  const safeRoles = roles || {};
  const currentUserRole = safeRoles[(user || appUser)?.email] || 'staff'; 

  // AI Function
  const askAiSolution = async (logItem) => {
      if (!genAI) {
          alert("ระบบ AI ไม่พร้อมใช้งาน (อาจไม่มี API Key)");
          return;
      }
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
          alert("เกิดข้อผิดพลาดในการเรียก AI");
      } finally {
          setAiLoading(false);
      }
  };

  if (!user && !appUser) {
    return <LoginView onLogin={(u) => setAppUser(u)} />;
  }

  // ✅ PREPARE SAFE DATA: แปลง undefined ให้เป็น [] ก่อนส่งไปหน้าอื่น
  const safeMembers = members || [];
  const safeTasks = tasks || [];
  const safeLogs = logs || [];
  const safeManualScores = manualScores || [];
  const safeRules = rules || [];
  const safeActionLogs = actionLogs || [];

  return (
    <div className="flex h-screen bg-gray-100 font-sans text-gray-900 overflow-hidden">
      <Toaster position="top-right" />
      
      {/* Sidebar */}
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
        <div className="lg:hidden bg-white p-4 shadow-sm flex items-center justify-between">
           <span className="font-bold text-lg text-slate-800">TransportOps</span>
           <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 text-gray-600"><Menu/></button>
        </div>

        <div className="flex-1 overflow-auto p-4 lg:p-8">
           <div className="max-w-7xl mx-auto">
              {activeTab === 'dashboard' && 
                <DashboardView 
                    members={safeMembers} 
                    tasks={safeTasks} 
                    logs={safeLogs} 
                />
              }

              {activeTab === 'team' && <TeamView members={safeMembers} onAdd={withUser(handleAddMember)} onEdit={withUser(handleEditMember)} onDelete={withUser(handleDeleteMember)} currentUserRole={currentUserRole} />}
              
              {activeTab === 'dept' && <DepartmentView members={safeMembers} tasks={safeTasks} onTaskToggle={withUser(handleTaskToggle)} />}
              
              {activeTab === 'scores' && <ScoreLogView members={safeMembers} manualScores={safeManualScores} rules={safeRules} tasks={safeTasks} onAddScore={withUser(handleSaveManualScore)} onDeleteScore={withUser(handleDeleteManualScore)} currentUserRole={currentUserRole} />}
              
              {activeTab === 'problems' && 
                <ProblemLogView 
                    logs={safeLogs} 
                    onAddLog={withUser(handleAddLog)} 
                    onResolveLog={withUser(handleResolveLog)}
                    onDeleteLog={withUser(handleDeleteLog)}
                    currentDate={new Date().toLocaleDateString('th-TH')}
                    askAiSolution={askAiSolution}
                    showToast={showToast}
                    userEmail={(user || appUser)?.email}
                    currentUserRole={currentUserRole}
                    aiLoading={aiLoading}
                />
              }

              {activeTab === 'assign' && <AssignMenuView members={safeMembers} tasks={safeTasks} onAddTask={withUser(handleAddTask)} onEditTask={withUser(handleEditTask)} onDeleteTask={withUser(handleDeleteTask)} onUpdateStatus={withUser(handleUpdateTaskStatus)} currentUserRole={currentUserRole} />}
              
              {activeTab === 'action_logs' && <ActionLogView logs={safeActionLogs} />}
              
              {activeTab === 'rules' && <RulesView rules={safeRules} onSave={withUser(handleSaveRule)} onDelete={withUser(handleDeleteRule)} currentUserRole={currentUserRole} roles={safeRoles} onSaveRole={withUser(handleSaveRole)} />}
           </div>
        </div>
      </div>
      
      {isSidebarOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => setIsSidebarOpen(false)}></div>}
    </div>
  );
}