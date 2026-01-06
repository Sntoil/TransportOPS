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
import { GoogleGenerativeAI } from "@google/generative-ai";

let genAI = null;
try { if (import.meta.env.VITE_FIREBASE_API_KEY) genAI = new GoogleGenerativeAI(import.meta.env.VITE_FIREBASE_API_KEY); } catch (e) {}

export default function TransportApp() {
  const [user, setUser] = useState(null);
  const [appUser, setAppUser] = useState(null);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [aiLoading, setAiLoading] = useState(false);

  // ดึงข้อมูล (ถ้า Hook ยังไม่โหลด จะได้ undefined -> เรากันด้วย || {})
  const data = useTransportData(user || appUser) || {};
  
  // แตกตัวแปร (Destructuring)
  const {
    members = [], tasks = [], logs = [], actionLogs = [], rules = [], manualScores = [], roles = {},
    handleTaskToggle, handleUpdateTaskStatus, handleAddTask, handleEditTask, handleDeleteTask,
    handleAddMember, handleEditMember, handleDeleteMember,
    handleAddLog, handleResolveLog, handleDeleteLog,
    handleSaveRule, handleDeleteRule,
    handleSaveManualScore, handleDeleteManualScore, handleSaveRole
  } = data;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => { await signOut(auth); setAppUser(null); };
  const showToast = (msg) => toast.success(msg);
  const withUser = (fn) => (...args) => { if (fn) return fn(...args, user || appUser); };
  const currentUserRole = roles?.[(user || appUser)?.email] || 'staff'; 

  const askAiSolution = async (logItem) => {
      if (!genAI) return alert("API Key Missing");
      setAiLoading(true);
      try {
        const model = genAI.getGenerativeModel({ model: "gemini-pro"});
        const result = await model.generateContent(`แนะนำวิธีแก้ปัญหา: ${logItem.topic} ${logItem.detail}`);
        alert(`AI Suggestion:\n${result.response.text()}`);
      } catch (e) { alert("AI Error"); } finally { setAiLoading(false); }
  };

  if (!user && !appUser) return <LoginView onLogin={(u) => setAppUser(u)} />;

  return (
    <div className="flex h-screen bg-gray-50 font-sans text-gray-900 overflow-hidden">
      <Toaster position="top-right" />
      
      {/* Sidebar Mobile Overlay */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 text-white transform transition-transform duration-300 lg:static lg:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
         <Sidebar activeTab={activeTab} setActiveTab={(t) => { setActiveTab(t); setIsSidebarOpen(false); }} user={user || appUser} role={currentUserRole} onLogout={handleLogout} />
      </div>

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <div className="lg:hidden bg-white p-4 shadow-sm flex items-center justify-between">
           <span className="font-bold text-lg text-slate-800">TransportOps</span>
           <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 text-gray-600"><Menu/></button>
        </div>

        <div className="flex-1 overflow-auto p-4 lg:p-8">
           <div className="max-w-7xl mx-auto space-y-6">
              {/* ✅ ส่ง Props แบบใส่เกราะ || [] ทุกบรรทัด */}
              {activeTab === 'dashboard' && <DashboardView members={members || []} tasks={tasks || []} logs={logs || []} />}
              
              {activeTab === 'team' && <TeamView members={members || []} onAdd={withUser(handleAddMember)} onEdit={withUser(handleEditMember)} onDelete={withUser(handleDeleteMember)} currentUserRole={currentUserRole} />}
              
              {activeTab === 'dept' && <DepartmentView members={members || []} tasks={tasks || []} onTaskToggle={withUser(handleTaskToggle)} />}
              
              {activeTab === 'scores' && <ScoreLogView members={members || []} manualScores={manualScores || []} rules={rules || []} tasks={tasks || []} onAddScore={withUser(handleSaveManualScore)} onDeleteScore={withUser(handleDeleteManualScore)} currentUserRole={currentUserRole} />}
              
              {activeTab === 'problems' && <ProblemLogView logs={logs || []} onAddLog={withUser(handleAddLog)} onResolveLog={withUser(handleResolveLog)} onDeleteLog={withUser(handleDeleteLog)} currentDate={new Date().toLocaleDateString('th-TH')} askAiSolution={askAiSolution} showToast={showToast} userEmail={(user || appUser)?.email} currentUserRole={currentUserRole} aiLoading={aiLoading} />}
              
              {activeTab === 'assign' && <AssignMenuView members={members || []} tasks={tasks || []} onAddTask={withUser(handleAddTask)} onEditTask={withUser(handleEditTask)} onDeleteTask={withUser(handleDeleteTask)} onUpdateStatus={withUser(handleUpdateTaskStatus)} currentUserRole={currentUserRole} />}
              
              {activeTab === 'action_logs' && <ActionLogView logs={actionLogs || []} />}
              
              {activeTab === 'rules' && <RulesView rules={rules || []} onSave={withUser(handleSaveRule)} onDelete={withUser(handleDeleteRule)} currentUserRole={currentUserRole} roles={roles || {}} onSaveRole={withUser(handleSaveRole)} />}
           </div>
        </div>
      </div>
      {isSidebarOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => setIsSidebarOpen(false)}></div>}
    </div>
  );
}