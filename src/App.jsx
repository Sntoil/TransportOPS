import * as React from 'react';
import { useState, useEffect } from 'react';
import { LayoutDashboard, ArrowDownToLine, ArrowUpFromLine, Building2, Lock, Menu, Loader2 } from 'lucide-react';

// Firebase
import { auth, db, appId } from './firebase';
import { signInWithCustomToken, onAuthStateChanged } from 'firebase/auth';
import { collection, getDocs, query, where } from 'firebase/firestore';

// Utils & Constants
import { getLocalDate, calculateDaysDiff } from './utils/helpers';
import { DEFAULT_ROLES } from './utils/constants';

// Hooks
import { useTransportData } from './hooks/useTransportData.js';

// Components & Features
import { Toast } from './components/UIComponents';
import Sidebar from './layout/Sidebar';
import LoginView from './features/LoginView';
import DashboardView from './features/DashboardView';
import DepartmentView from './features/DepartmentView';
import ProblemLogView from './features/ProblemLogView';
import ScoreLogView from './features/ScoreLogView';
import ActionLogView from './features/ActionLogView';
import RulesView from './features/RulesView';
import TeamView from './features/TeamView';
import AssignMenuView from './features/AssignMenuView';

export default function TransportApp() {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [loginError, setLoginError] = useState("");
  const [appUser, setAppUser] = useState(null);
  
  const [activeTab, setActiveTab] = useState('dashboard');
  const [currentDate, setCurrentDate] = useState(getLocalDate());
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [viewMode, setViewMode] = useState('daily');
  const [selectedMonth, setSelectedMonth] = useState(getLocalDate().slice(0, 7));
  const [currentUserRole, setCurrentUserRole] = useState('dgm');
  
  const [toastMessage, setToastMessage] = useState("");
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);
  const [isAdjustModalOpen, setIsAdjustModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  // --- Use Custom Hook ---
  // ตัด handleSeedData ออกจากที่นี่
  const {
    members, tasks, logs, actionLogs, rules, manualScores, roles,
    handleTaskToggle, handleUpdateTaskStatus, handleAddTask, handleEditTask, handleDeleteTask,
    handleAddMember, handleEditMember, handleDeleteMember,
    handleAddLog, handleResolveLog,
    handleSaveRule, handleDeleteRule,
    handleSaveManualScore, handleDeleteManualScore,
    handleSaveRole
  } = useTransportData(user);

  // --- Auth Initialization ---
  useEffect(() => {
    const initAuth = async () => {
      if (typeof __initial_auth_token !== 'undefined' && __initial_auth_token) {
        await signInWithCustomToken(auth, __initial_auth_token);
      }
    };
    initAuth();
    const unsubscribe = onAuthStateChanged(auth, (u) => { setUser(u); setAuthLoading(false); });
    return () => unsubscribe();
  }, []);

  const handleLogin = async (email, password) => {
    setAuthLoading(true); setLoginError("");
    try {
        const membersRef = collection(db, 'artifacts', appId, 'public', 'data', 'members');
        const q = query(membersRef, where("email", "==", email));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            const memberData = querySnapshot.docs[0].data();
            if (memberData.password !== password) {
                setLoginError("รหัสผ่านไม่ถูกต้อง"); setAuthLoading(false); return;
            }
            const roleObj = roles.find(r => r.name === memberData.role);
            setAppUser({ email: memberData.email, name: memberData.name });
            setCurrentUserRole(roleObj ? roleObj.id : 'dgm');
            setAuthLoading(false);
        } else {
            setLoginError("ไม่พบผู้ใช้งาน หรือ อีเมลไม่ถูกต้อง"); setAuthLoading(false);
        }
    } catch (error) {
        console.error("Login error:", error);
        setLoginError("เกิดข้อผิดพลาด: " + error.message); setAuthLoading(false);
    }
  };

  const handleLogout = async () => { setAppUser(null); setCurrentUserRole('dgm'); };
  const showToast = (message) => { setToastMessage(message); setIsToastVisible(true); setTimeout(() => setIsToastVisible(false), 3000); };
  
  // --- Wrapper เพื่อส่ง appUser เข้าไปใน hook functions โดยอัตโนมัติ ---
  const withUser = (fn) => (...args) => {
      if (fn) fn(...args, appUser);
  };

  // --- Business Logic Calculations (ส่วนการแสดงผล) ---
  const getStats = (dept = null) => {
    let filteredTasks = tasks;
    if (viewMode === 'daily') {
      filteredTasks = filteredTasks.filter(t => t.date === currentDate);
    } else {
      filteredTasks = filteredTasks.filter(t => t.date.startsWith(selectedMonth));
    }
    const rawTasks = filteredTasks;
    if (dept) filteredTasks = filteredTasks.filter(t => t.dept === dept);
    const completed = filteredTasks.filter(t => t.status === 'completed').length;
    const total = filteredTasks.length;
    return { completed, total, pending: total - completed, rawTasks };
  };

  const getMemberScore = (memberId) => {
    let score = 100;
    const today = getLocalDate();
    manualScores.forEach(s => {
        if (s.memberId === memberId && s.date.startsWith(selectedMonth)) {
            score += parseInt(s.score);
        }
    });
    tasks.forEach(t => {
        if (t.assignee === memberId && t.date.startsWith(selectedMonth)) {
            if (t.status !== 'completed') {
                if (t.type === 'routine' && t.date < today) { score -= 1; } 
                else if (t.type === 'assign' && t.dueDate && today > t.dueDate) {
                    const diff = calculateDaysDiff(t.dueDate, today);
                    score -= diff; 
                }
            }
        }
    });
    return Math.max(0, score);
  };

  const getScoreLogs = () => {
    let scoreLogs = [];
    const today = getLocalDate();
    manualScores.forEach(s => {
        if(s.date.startsWith(selectedMonth)) {
            const member = members.find(m => m.id === s.memberId);
            scoreLogs.push({
                date: s.date, memberName: member ? member.name : "Unknown", topic: s.reason, score: s.score, type: 'Manual'
            });
        }
    });
    tasks.forEach(t => {
        if (t.date.startsWith(selectedMonth)) {
            const member = members.find(m => m.id === t.assignee);
            if (!member) return;
            if (t.status !== 'completed') {
                if (t.type === 'routine' && t.date < today) {
                    scoreLogs.push({ date: t.date, memberName: member.name, topic: `ไม่ได้ทำ Routine: ${t.title}`, score: -1, type: 'Auto' });
                }
                if (t.type === 'assign' && t.dueDate && today > t.dueDate) {
                    const diff = calculateDaysDiff(t.dueDate, today);
                    scoreLogs.push({ date: today, memberName: member.name, topic: `งานล่าช้า (${diff} วัน): ${t.title}`, score: -diff, type: 'Auto' });
                }
            }
        }
    });
    return scoreLogs;
  };
  
  // Mock AI
  const generateDailyBriefing = async () => { setAiLoading(true); setTimeout(() => { setAiLoading(false); showToast("AI Summary Created"); }, 2000); };
  const askAiSolution = async () => { setAiLoading(true); setTimeout(() => { setAiLoading(false); showToast("AI Suggestion Received"); }, 2000); };

  const getCurrentRoleData = () => { const r = roles.find(r => r.id === currentUserRole); return r || DEFAULT_ROLES[0]; };
  const hasAccess = (menuId) => { const r = getCurrentRoleData(); return r.access.includes('all') || r.access.includes(menuId); };
  const isReadOnly = (menuId) => { const r = getCurrentRoleData(); return r.readOnly?.includes(menuId); };

  if (authLoading) return <div className="flex h-screen items-center justify-center bg-slate-900"><Loader2 className="w-10 h-10 text-blue-500 animate-spin" /></div>;
  if (!appUser) return <LoginView onLogin={handleLogin} error={loginError} loading={authLoading} />;

  return (
    <div className="flex h-screen bg-gray-50 font-sans text-gray-900">
      <Toast message={toastMessage} isVisible={isToastVisible} onClose={() => setIsToastVisible(false)} />
      
      <Sidebar 
        isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} 
        activeTab={activeTab} setActiveTab={setActiveTab} 
        appUser={appUser} currentUserRole={currentUserRole} roles={roles}
        handleLogout={handleLogout} hasAccess={hasAccess} 
        setIsProfileModalOpen={setIsProfileModalOpen}
      />

      <main className="flex-1 overflow-y-auto bg-gray-50/50">
        <div className="md:hidden bg-white p-3 flex justify-between items-center shadow-sm sticky top-0 z-10 border-b">
           <div className="flex items-center gap-2"><LayoutDashboard className="text-blue-600"/> <h1 className="font-bold text-lg text-blue-800">TransportOps</h1></div>
           <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="p-2 bg-gray-50 rounded text-gray-600"><Menu size={22} /></button>
        </div>

        <div className="p-4 md:p-6 lg:p-8 max-w-7xl mx-auto min-h-full">
          {/* ลบปุ่ม Load Sample Data ออกจากตรงนี้แล้ว */}

          {activeTab === 'dashboard' && hasAccess('dashboard') && (
            <DashboardView 
              statsAll={getStats()} statsIn={getStats('Inbound')} statsOut={getStats('Outbound')} statsInt={getStats('Internal')} 
              logs={logs} members={members} tasks={tasks} rules={rules} manualScores={manualScores} 
              setActiveTab={setActiveTab} currentDate={currentDate} setCurrentDate={setCurrentDate} 
              selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} 
              viewMode={viewMode} setViewMode={setViewMode} 
              generateDailyBriefing={generateDailyBriefing} 
              getMemberScore={getMemberScore} setIsAdjustModalOpen={setIsAdjustModalOpen} 
              onSaveManualScore={(data) => { withUser(handleSaveManualScore)(data); showToast("บันทึกคะแนนเรียบร้อย"); }}
              onDeleteManualScore={(id) => { withUser(handleDeleteManualScore)(id); showToast("ลบรายการเรียบร้อย"); }}
              onResolveLog={(id, note) => withUser(handleResolveLog)(id, note)}
              askAiSolution={askAiSolution} userEmail={appUser.email} currentUserRole={currentUserRole} hasAccess={hasAccess} aiLoading={aiLoading}
            />
          )}
          
          {['inbound', 'outbound', 'internal'].map(deptKey => 
            activeTab === deptKey && hasAccess(deptKey) && (
              <DepartmentView 
                key={deptKey}
                dept={deptKey.charAt(0).toUpperCase() + deptKey.slice(1)} 
                title={`งาน ${deptKey.charAt(0).toUpperCase() + deptKey.slice(1)}`} 
                color={deptKey === 'inbound' ? "#22c55e" : deptKey === 'outbound' ? "#f97316" : "#a855f7"} 
                icon={deptKey === 'inbound' ? ArrowDownToLine : deptKey === 'outbound' ? ArrowUpFromLine : Building2} 
                tasks={tasks} members={members} currentDate={currentDate} setCurrentDate={setCurrentDate} 
                viewMode={viewMode} setViewMode={setViewMode} selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} 
                showToast={showToast}
                onUpdateTaskStatus={handleUpdateTaskStatus}
                onAddTask={(task, d) => withUser(handleAddTask)(task, d)}
                onToggleTask={(id, title, d) => withUser(handleTaskToggle)(id, title, d)}
                onDeleteTask={(id) => withUser(handleDeleteTask)(id)}
                onEditTask={(task) => withUser(handleEditTask)(task)}
              />
            )
          )}

          {activeTab === 'problems' && hasAccess('problems') && (
            <ProblemLogView 
              logs={logs} currentDate={currentDate} askAiSolution={askAiSolution} showToast={showToast} 
              userEmail={appUser.email} currentUserRole={currentUserRole} aiLoading={aiLoading}
              onAddLog={(l) => withUser(handleAddLog)(l)}
              onResolveLog={(id, note) => withUser(handleResolveLog)(id, note)}
            />
          )}

          {activeTab === 'scorelog' && hasAccess('scorelog') && <ScoreLogView scoreLogs={getScoreLogs()} />}
          {activeTab === 'actionlog' && hasAccess('actionlog') && <ActionLogView actionLogs={actionLogs} />}
          
          {activeTab === 'rules' && hasAccess('rules') && (
            <RulesView 
              rules={rules} isReadOnly={isReadOnly('rules')}
              onSaveRule={(r) => { withUser(handleSaveRule)(r); showToast("บันทึกกฎเรียบร้อย"); }}
              onDeleteRule={(id) => withUser(handleDeleteRule)(id)}
            />
          )}

          {activeTab === 'team' && hasAccess('team') && (
             <TeamView 
               members={members} roles={roles}
               onAddMember={(m) => { withUser(handleAddMember)(m); showToast("เพิ่มสมาชิกเรียบร้อย"); }}
               onEditMember={(m) => withUser(handleEditMember)(m)}
               onDeleteMember={(id) => withUser(handleDeleteMember)(id)}
             />
          )}

          {activeTab === 'assign_menu' && hasAccess('assign_menu') && (
             <AssignMenuView roles={roles} currentRole={currentUserRole} onSaveRole={(r) => { withUser(handleSaveRole)(r); showToast("บันทึกสิทธิ์เรียบร้อย"); }} />
          )}
          
          {!hasAccess(activeTab) && (
              <div className="flex flex-col items-center justify-center h-full text-gray-400 py-20">
                  <Lock size={48} className="mb-4 text-gray-300" />
                  <p>คุณไม่มีสิทธิ์เข้าถึงหน้านี้</p>
                  <button onClick={() => setActiveTab('dashboard')} className="mt-4 text-blue-600 hover:underline">กลับหน้าหลัก</button>
              </div>
          )}
        </div>
      </main>
      
      {/* Modals placed at root level */}
      {isAdjustModalOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black bg-opacity-50 p-4 backdrop-blur-sm">
           <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6 animate-fade-in">
              {/* ... Content of Adjust Modal (Passed into DashboardView usually, but handled here for global access if needed) ... */}
              {/* Note: In this architecture, DashboardView renders its own modal trigger. 
                  If you want the modal to be truly global, you need to move the modal content here or keep passing state down.
                  Currently, DashboardView handles the modal UI internally if setIsAdjustModalOpen is passed.
                  Wait, DashboardView previously contained the Modal UI. 
                  So passing setIsAdjustModalOpen down is correct. */}
           </div>
        </div>
      )}
      
       {/* User Profile Modal */}
       {isProfileModalOpen && (
          <div className="fixed inset-0 z-[90] flex items-center justify-center bg-black bg-opacity-50 p-4 backdrop-blur-sm" onClick={() => setIsProfileModalOpen(false)}>
             <div className="bg-white rounded-xl shadow-2xl w-full max-w-sm p-6 animate-fade-in" onClick={e => e.stopPropagation()}>
                 <div className="flex flex-col items-center mb-6">
                     <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-3xl mb-3">
                         {appUser.email ? appUser.email.charAt(0).toUpperCase() : 'U'}
                     </div>
                     <h2 className="text-xl font-bold text-gray-800">{appUser.name || 'User'}</h2>
                     <p className="text-sm text-gray-500">{appUser.email}</p>
                 </div>
                 <div className="mt-8 pt-4 border-t flex justify-end">
                     <button onClick={() => setIsProfileModalOpen(false)} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm">ปิด</button>
                 </div>
             </div>
          </div>
      )}
    </div>
  );
}