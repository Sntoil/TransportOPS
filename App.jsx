import * as React from 'react';
const { useState, useEffect } = React;
import { 
  LayoutDashboard, 
  ArrowDownToLine, 
  ArrowUpFromLine, 
  Building2, 
  AlertTriangle, 
  Users, 
  CheckCircle2, 
  Circle, 
  Plus, 
  Trash2, 
  X,
  Loader2,
  ChevronLeft,
  ChevronRight,
  Menu,
  Save,
  History,
  Clock,
  Gavel,
  ClipboardList,
  LogOut,
  Database,
  Edit,
  Lock,
  Mail,
  Truck,
  Shield,
  Eye,
  Sparkles
} from 'lucide-react';

// ✅ Firebase Imports
import { auth, db, appId } from './firebase';
import { 
  signInWithCustomToken, // Ensure this is available or use signInAnonymously if needed
  onAuthStateChanged
} from 'firebase/auth';
import { 
  collection, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  onSnapshot, 
  query, 
  serverTimestamp,
  getDocs,
  where
} from 'firebase/firestore';

// --- Helper Functions ---

// ✅ Fix 3: Timezone Handling - Get Local Date instead of UTC
const getLocalDate = () => {
  const d = new Date();
  const offset = d.getTimezoneOffset() * 60000;
  return new Date(d.getTime() - offset).toISOString().split('T')[0];
};

const formatDateTime = (date) => {
  if (!date) return '-';
  const d = new Date(date);
  return `${d.toLocaleDateString('th-TH')} ${d.toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' })}`;
};

const calculateDaysDiff = (date1, date2) => {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  const diffTime = d2 - d1;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays > 0 ? diffDays : 0;
};

// --- Constants & Initial Data ---
const INITIAL_MEMBERS = [];
const INITIAL_TASKS = [];
const INITIAL_LOGS = [];
const INITIAL_ACTION_LOGS = [];
const INITIAL_RULES = [];
const INITIAL_MANUAL_SCORES = [];

const DEFAULT_ROLES = [
  { id: 'dgm', name: 'DGM', access: ['all'], readOnly: [] },
  { id: 'dm', name: 'DM', access: ['all'], readOnly: [] },
  { id: 'rp_in', name: 'Route Planner Inbound', access: ['dashboard', 'inbound', 'problems', 'scorelog', 'rules'], readOnly: ['scorelog', 'rules'] },
  { id: 'rp_out', name: 'Route Planner Outbound', access: ['dashboard', 'outbound', 'problems', 'scorelog', 'rules'], readOnly: ['scorelog', 'rules'] },
  { id: 'rp_int', name: 'Route Planner Internal', access: ['dashboard', 'internal', 'problems', 'scorelog', 'rules'], readOnly: ['scorelog', 'rules'] },
];

const MENU_ITEMS = [
  { id: 'dashboard', label: 'หน้าหลัก', icon: LayoutDashboard },
  { id: 'inbound', label: 'งานรถโอนย้าย', icon: ArrowDownToLine },
  { id: 'outbound', label: 'งานส่งสินค้า', icon: ArrowUpFromLine },
  { id: 'internal', label: 'งานรถส่วนกลาง', icon: Building2 },
  { id: 'problems', label: 'Problem Log', icon: AlertTriangle },
  { id: 'scorelog', label: 'ประวัติคะแนน', icon: ClipboardList },
  { id: 'actionlog', label: 'ประวัติการทำงาน', icon: History },
  { id: 'rules', label: 'ระเบียบการให้คะแนน', icon: Gavel },
  { id: 'team', label: 'จัดการทีม', icon: Users },
  { id: 'assign_menu', label: 'กำหนดสิทธิ์ (Assign Menu)', icon: Shield }
];

// --- Sub-Components ---

function Toast({ message, isVisible, onClose }) {
  if (!isVisible) return null;
  return (
    <div className="fixed top-4 right-4 z-[60] bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 animate-fade-in-down transition-all">
      <CheckCircle2 size={20} className="text-white" />
      <span className="font-medium">{message}</span>
      <button onClick={onClose} className="ml-2 hover:bg-green-700 rounded-full p-1"><X size={14}/></button>
    </div>
  );
}

function StatCard({ title, value, total, color, icon: Icon, subStats, onClick }) {
  const percentage = total > 0 ? Math.round((value / total) * 100) : 0;
  const colorClasses = {
    blue: "bg-blue-50 text-blue-600 border-blue-200 hover:border-blue-300",
    green: "bg-green-50 text-green-600 border-green-200 hover:border-green-300",
    orange: "bg-orange-50 text-orange-600 border-orange-200 hover:border-orange-300",
    purple: "bg-purple-50 text-purple-600 border-purple-200 hover:border-purple-300",
    red: "bg-red-50 text-red-600 border-red-200 hover:border-red-300",
  };
  return (
    <div onClick={onClick} className={`p-4 rounded-xl border ${colorClasses[color]} shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer h-full flex flex-col justify-between`}>
      <div>
        <div className="flex justify-between items-start mb-2 gap-2">
          <div className="min-w-0 flex-1"><p className="text-sm font-medium opacity-80 truncate" title={title}>{title}</p><div className="flex items-baseline gap-1 mt-1"><h3 className="text-2xl font-bold">{value}</h3><span className="text-xs font-normal opacity-70">/ {total}</span></div></div>
          <div className={`p-2 rounded-lg bg-white bg-opacity-60 flex-shrink-0`}><Icon size={20} /></div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mt-2"><div className={`h-2 rounded-full transition-all duration-500 ${color === 'blue' ? 'bg-blue-500' : color === 'green' ? 'bg-green-500' : color === 'orange' ? 'bg-orange-500' : 'bg-purple-500'}`} style={{ width: `${percentage}%` }}></div></div>
      </div>
      {subStats && (<div className="mt-3 pt-3 border-t border-black/5 flex justify-between text-[10px] sm:text-xs"><span className="text-gray-600">คงค้าง Routine: <span className="font-bold text-red-500">{subStats.routine}</span></span><span className="text-gray-600">คงค้าง Assign: <span className="font-bold text-red-500">{subStats.assigned}</span></span></div>)}
      {!subStats && <p className="text-xs mt-2 text-right opacity-90">{percentage}% สำเร็จ</p>}
    </div>
  );
}

function ProgressCircle({ percentage, color, title, subtitle }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center">
      <h4 className="text-sm font-bold text-gray-700 mb-4">{title}</h4>
      <div className="relative w-32 h-32">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle className="text-gray-100 stroke-current" strokeWidth="8" cx="50" cy="50" r="40" fill="transparent"></circle>
          <circle className="stroke-current transition-all duration-1000 ease-out" strokeWidth="8" strokeLinecap="round" cx="50" cy="50" r="40" fill="transparent" strokeDasharray="251.2" strokeDashoffset={251.2 - (251.2 * percentage) / 100} style={{ color: color }} transform="rotate(-90 50 50)"></circle>
        </svg>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-gray-700"><span className="text-2xl font-bold">{Math.round(percentage)}%</span></div>
      </div>
      <div className="mt-4 text-center text-xs text-gray-500">{subtitle}</div>
    </div>
  );
}

function MemberAvatar({ member, size = "md" }) {
  const sizeClass = size === "sm" ? "w-8 h-8" : size === "lg" ? "w-16 h-16" : "w-10 h-10";
  return (
    <div className="relative group cursor-pointer inline-block">
      <img src={member.avatar || `https://i.pravatar.cc/150?u=${member.id}`} alt={member.name} className={`${sizeClass} rounded-full object-cover border-2 border-white shadow-sm bg-gray-200`} />
      <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></div>
    </div>
  );
}

function MenuButton({ id, label, icon: Icon, activeTab, setActiveTab, isSidebarOpen, colorClass = "text-gray-500" }) {
  return (
    <button onClick={() => setActiveTab(id)} className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 mb-1 ${activeTab === id ? 'bg-blue-50 text-blue-700 shadow-sm border border-blue-100 font-medium' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'} ${!isSidebarOpen ? 'justify-center' : ''}`} title={!isSidebarOpen ? label : ''}>
      <Icon size={22} className={`flex-shrink-0 ${activeTab === id ? 'text-blue-600' : colorClass}`} />
      {isSidebarOpen && <span className="truncate text-sm">{label}</span>}
    </button>
  );
}

function LoginView({ onLogin, error, loading }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => { e.preventDefault(); onLogin(email, password); };
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-slate-900 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg mb-4"><Truck size={32} className="text-white" /></div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Transport<span className="text-blue-400">Ops</span></h1>
          <p className="text-blue-200 text-sm mt-1">ระบบบริหารจัดการงานขนส่ง</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-blue-100 ml-1">อีเมล</label>
            <div className="relative group"><div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-blue-300 group-focus-within:text-blue-400 transition-colors"><Mail size={18} /></div><input type="email" required className="w-full bg-slate-800/50 border border-slate-700 text-white rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-slate-500 transition-all" placeholder="name@company.com" value={email} onChange={(e) => setEmail(e.target.value)} /></div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-blue-100 ml-1">รหัสผ่าน</label>
            <div className="relative group"><div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-blue-300 group-focus-within:text-blue-400 transition-colors"><Lock size={18} /></div><input type="password" required className="w-full bg-slate-800/50 border border-slate-700 text-white rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-slate-500 transition-all" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} /></div>
          </div>
          {error && (<div className="bg-red-500/10 border border-red-500/50 text-red-200 text-sm rounded-lg p-3 flex items-center gap-2 animate-pulse"><AlertTriangle size={16} />{error}</div>)}
          <button type="submit" disabled={loading} className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-lg shadow-lg hover:shadow-blue-500/30 transition-all duration-200 transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2">{loading ? <Loader2 size={20} className="animate-spin" /> : 'เข้าสู่ระบบ'}</button>
        </form>
        <div className="mt-8 text-center text-xs text-blue-300/60">© 2026 Transport Operations System v3.4</div>
      </div>
    </div>
  );
}

// --- Assign Menu View ---
function AssignMenuView({ roles, onSaveRole, currentRole }) {
  const sortedRoles = [...roles].sort((a, b) => a.name.localeCompare(b.name, 'th'));

  const handleToggleMenu = (targetRole, menuId) => {
    let newAccess = [];
    if (targetRole.access.includes('all')) {
         const allMenuIds = MENU_ITEMS.map(m => m.id);
         newAccess = allMenuIds.filter(id => id !== menuId);
    } else {
         if (targetRole.access.includes(menuId)) {
             newAccess = targetRole.access.filter(id => id !== menuId);
         } else {
             newAccess = [...targetRole.access, menuId];
         }
    }
    onSaveRole({ ...targetRole, access: newAccess });
  };
  
  const handleToggleReadOnly = (targetRole, menuId) => {
     const currentReadOnly = targetRole.readOnly || [];
     const newReadOnly = currentReadOnly.includes(menuId)
        ? currentReadOnly.filter(id => id !== menuId)
        : [...currentReadOnly, menuId];
        
     onSaveRole({ ...targetRole, readOnly: newReadOnly });
  };

  return (
    <div className="space-y-6 animate-fade-in">
       <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2"><Shield className="text-blue-600" /> กำหนดสิทธิ์การเข้าถึง (Assign Menu)</h2>
       <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
         <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-4 py-3 text-left font-bold text-gray-500 uppercase min-w-[200px]">ตำแหน่ง</th>
                        {MENU_ITEMS.map(menu => (
                            <th key={menu.id} className="px-2 py-3 text-center font-bold text-gray-500 text-xs w-24">
                                <div className="flex flex-col items-center gap-1">
                                    <menu.icon size={16} />
                                    <span>{menu.label}</span>
                                </div>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {sortedRoles.map((role, idx) => (
                        <tr key={role.docId || role.id || idx} className="hover:bg-gray-50">
                            <td className="px-4 py-3 font-medium text-gray-900">{role.name}</td>
                            {MENU_ITEMS.map(menu => {
                                const hasAccess = role.access?.includes('all') || role.access?.includes(menu.id);
                                const isReadOnly = role.readOnly?.includes(menu.id);
                                return (
                                    <td key={menu.id} className="px-2 py-3 text-center">
                                        <div className="flex flex-col items-center gap-2">
                                            <label className="flex items-center space-x-2 cursor-pointer">
                                                <input 
                                                    type="checkbox" 
                                                    className="form-checkbox h-4 w-4 text-blue-600 rounded"
                                                    checked={!!hasAccess}
                                                    onChange={() => handleToggleMenu(role, menu.id)}
                                                    disabled={role.id === 'dgm' && menu.id === 'assign_menu'} 
                                                />
                                            </label>
                                            {hasAccess && (
                                                <button 
                                                    onClick={() => handleToggleReadOnly(role, menu.id)}
                                                    className={`text-[10px] px-1.5 py-0.5 rounded border flex items-center gap-1 transition-colors ${isReadOnly ? 'bg-yellow-100 text-yellow-700 border-yellow-200' : 'bg-white text-gray-500 border-gray-200 hover:bg-gray-50'}`}
                                                    title={isReadOnly ? "View Only" : "Full Access"}
                                                >
                                                    {isReadOnly ? <Eye size={10} /> : <Edit size={10} />}
                                                    {isReadOnly ? 'View' : 'Edit'}
                                                </button>
                                            )}
                                        </div>
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
         </div>
         <div className="p-4 bg-gray-50 text-xs text-gray-500 border-t">
            * <strong>View Only:</strong> สามารถดูข้อมูลได้แต่ไม่สามารถแก้ไข/ลบ/เพิ่มข้อมูลได้ <br/>
            * <strong>Edit:</strong> สามารถจัดการข้อมูลได้เต็มรูปแบบ
         </div>
       </div>
    </div>
  );
}

// --- Rules View ---
function RulesView({ rules, onSaveRule, onDeleteRule, isReadOnly }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editRule, setEditRule] = useState({ topic: "", score: 0, type: "deduct", detail: "" });
  const handleEditClick = (rule) => { setEditRule(rule); setIsEditing(true); };
  const handleAddClick = () => { setEditRule({ topic: "", score: 0, type: "deduct", detail: "" }); setIsEditing(true); };
  const handleSubmit = (e) => { e.preventDefault(); onSaveRule({ ...editRule, id: editRule.id || Date.now().toString() }); setIsEditing(false); setEditRule({ topic: "", score: 0, type: "deduct", detail: "" }); };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2"><Gavel className="text-blue-600" /> ระเบียบการหัก/เพิ่ม คะแนน</h2>
        {!isReadOnly && <button onClick={handleAddClick} className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"><Plus size={18} /> เพิ่มกฎใหม่</button>}
      </div>
      {isEditing && !isReadOnly && (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-6"><h3 className="font-bold mb-4">{editRule.id ? 'แก้ไขกฎระเบียบ' : 'เพิ่มกฎระเบียบใหม่'}</h3><form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4"><div className="md:col-span-2"><label className="block text-xs font-semibold text-gray-500 mb-1">หัวข้อ</label><input required className="w-full border rounded px-3 py-2" value={editRule.topic || ""} onChange={e => setEditRule({...editRule, topic: e.target.value})} /></div><div><label className="block text-xs font-semibold text-gray-500 mb-1">ประเภท</label><select className="w-full border rounded px-3 py-2" value={editRule.type} onChange={e => setEditRule({...editRule, type: e.target.value})}><option value="deduct">หักคะแนน (-)</option><option value="add">เพิ่มคะแนน (+)</option></select></div><div><label className="block text-xs font-semibold text-gray-500 mb-1">คะแนน</label><input type="number" required className="w-full border rounded px-3 py-2" value={Math.abs(editRule.score) || 0} onChange={e => setEditRule({...editRule, score: editRule.type === 'deduct' ? -Math.abs(e.target.value) : Math.abs(e.target.value)})} /></div><div className="md:col-span-2"><label className="block text-xs font-semibold text-gray-500 mb-1">รายละเอียด</label><input className="w-full border rounded px-3 py-2" value={editRule.detail || ""} onChange={e => setEditRule({...editRule, detail: e.target.value})} /></div><div className="md:col-span-2 flex justify-end gap-2"><button type="button" onClick={() => setIsEditing(false)} className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded">ยกเลิก</button><button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">บันทึก</button></div></form></div>
      )}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden"><table className="min-w-full divide-y divide-gray-200"><thead className="bg-gray-50"><tr><th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">หัวข้อ</th><th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">รายละเอียด</th><th className="px-6 py-3 text-center text-xs font-bold text-gray-500 uppercase">คะแนน</th>{!isReadOnly && <th className="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase">จัดการ</th>}</tr></thead><tbody className="bg-white divide-y divide-gray-200">{rules.map(rule => (<tr key={rule.docId || rule.id} className="hover:bg-gray-50"><td className="px-6 py-4 font-medium text-gray-800">{rule.topic}</td><td className="px-6 py-4 text-sm text-gray-500">{rule.detail}</td><td className="px-6 py-4 text-center"><span className={`px-2 py-1 rounded text-xs font-bold ${rule.score > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>{rule.score > 0 ? '+' : ''}{rule.score}</span></td>{!isReadOnly && <td className="px-6 py-4 text-right flex justify-end gap-2"><button onClick={() => handleEditClick(rule)} className="text-blue-500 hover:bg-blue-50 p-1 rounded"><Edit size={16} /></button><button onClick={() => onDeleteRule(rule.id)} className="text-red-500 hover:bg-red-50 p-1 rounded"><Trash2 size={16} /></button></td>}</tr>))}</tbody></table></div>
    </div>
  );
}

function ScoreLogView({ scoreLogs }) {
  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2"><ClipboardList className="text-blue-600" /> ประวัติการหัก/เพิ่ม คะแนน (Score Log)</h2>
      <div className="bg-white rounded-xl shadow-sm overflow-hidden"><div className="overflow-x-auto"><table className="min-w-full divide-y divide-gray-200"><thead className="bg-gray-50"><tr><th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">วัน-เวลา</th><th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">ชื่อพนักงาน</th><th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">รายการ</th><th className="px-6 py-3 text-center text-xs font-bold text-gray-500 uppercase">คะแนน</th><th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">ประเภท</th></tr></thead><tbody className="bg-white divide-y divide-gray-200">{scoreLogs.length === 0 ? (<tr><td colSpan="5" className="px-6 py-8 text-center text-gray-400">ยังไม่มีประวัติคะแนนในเดือนนี้</td></tr>) : (scoreLogs.sort((a,b) => new Date(b.date) - new Date(a.date)).map((log, idx) => (<tr key={idx} className="hover:bg-gray-50 transition"><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{log.date}</td><td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-700">{log.memberName}</td><td className="px-6 py-4 text-sm text-gray-600">{log.topic}</td><td className="px-6 py-4 text-center"><span className={`font-bold ${log.score < 0 ? 'text-red-500' : 'text-green-500'}`}>{log.score > 0 ? '+' : ''}{log.score}</span></td><td className="px-6 py-4 whitespace-nowrap text-xs"><span className={`px-2 py-1 rounded border ${log.type === 'Auto' ? 'bg-gray-100 text-gray-500 border-gray-200' : 'bg-blue-50 text-blue-600 border-blue-100'}`}>{log.type}</span></td></tr>)))}</tbody></table></div></div>
    </div>
  );
}

function ActionLogView({ actionLogs }) {
  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2"><History className="text-blue-600" /> ประวัติการทำงาน (Action Log)</h2>
      <div className="bg-white rounded-xl shadow-sm overflow-hidden"><div className="overflow-x-auto"><table className="min-w-full divide-y divide-gray-200"><thead className="bg-gray-50"><tr><th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">วัน-เวลา</th><th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">ผู้ดำเนินการ</th><th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">รายละเอียด</th></tr></thead><tbody className="bg-white divide-y divide-gray-200">{actionLogs.length === 0 ? (<tr><td colSpan="3" className="px-6 py-8 text-center text-gray-400">ยังไม่มีประวัติการทำงาน</td></tr>) : ([...actionLogs].sort((a, b) => {
        if (a.createdAt && b.createdAt) {
          return b.createdAt.seconds - a.createdAt.seconds;
        }
        return b.timestamp > a.timestamp ? 1 : -1;
      }).map(log => (<tr key={log.docId || log.id} className="hover:bg-gray-50 transition"><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{log.timestamp}</td><td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-700">{log.user}</td><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{log.action}</td></tr>)))}</tbody></table></div></div>
    </div>
  );
}

function DashboardView({ 
  statsAll, statsIn, statsOut, statsInt, logs, members, tasks, rules, manualScores,
  setActiveTab, currentDate, selectedMonth, viewMode, setViewMode, setCurrentDate, setSelectedMonth, 
  generateDailyBriefing, onSaveManualScore, getMemberScore, setIsAdjustModalOpen, onDeleteManualScore,
  onResolveLog, askAiSolution, userEmail, currentUserRole, hasAccess, aiLoading
}) {
  const getPendingStats = (tasks, dept) => {
    const deptTasks = tasks.filter(t => t.dept === dept && t.status === 'pending');
    const contextTasks = deptTasks.filter(t => viewMode === 'daily' ? t.date === currentDate : t.date.startsWith(selectedMonth));
    return { routine: contextTasks.filter(t => t.type === 'routine').length, assigned: contextTasks.filter(t => t.type === 'assign').length };
  };

  const pendingLogs = logs.filter(l => l.status === 'pending');
  
  const [isResolveModalOpen, setIsResolveModalOpen] = useState(false);
  const [resolveNote, setResolveNote] = useState("");
  const [selectedLogId, setSelectedLogId] = useState(null);

  const handleOpenResolve = (id) => {
      setSelectedLogId(id);
      setIsResolveModalOpen(true);
  };

  const handleResolveSubmit = () => {
      if(selectedLogId) {
          onResolveLog(selectedLogId, resolveNote);
          setIsResolveModalOpen(false);
          setResolveNote("");
          setSelectedLogId(null);
      }
  };

  return (
    <div className="space-y-6 animate-fade-in">
       {isResolveModalOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black bg-opacity-50 p-4 backdrop-blur-sm">
           <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6 animate-fade-in">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2"><CheckCircle2 className="text-green-600"/> บันทึกการปิดงาน</h3>
              <div className="space-y-4">
                 <div><label className="block text-xs font-bold text-gray-500 mb-1">หมายเหตุ / สรุปการแก้ไข</label><textarea className="w-full border rounded px-3 py-2 h-24" value={resolveNote} onChange={e => setResolveNote(e.target.value)} placeholder="ระบุรายละเอียดการแก้ไข..."></textarea></div>
                 <div className="flex gap-2 justify-end pt-4"><button onClick={() => setIsResolveModalOpen(false)} className="px-4 py-2 text-gray-500 hover:bg-gray-100 rounded">ยกเลิก</button><button onClick={handleResolveSubmit} className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">ยืนยันปิดงาน</button></div>
              </div>
           </div>
        </div>
      )}

       <header className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-4 mb-4">
          <div><h2 className="text-xl md:text-2xl font-bold text-gray-800">ภาพรวม (Overview)</h2><p className="text-gray-500 text-sm mt-1">{viewMode === 'daily' ? `ข้อมูลประจำวันที่ ${currentDate}` : `ข้อมูลประจำเดือน ${selectedMonth}`}</p></div>
          <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-3 items-stretch sm:items-center bg-white p-2 rounded-lg shadow-sm border"><div className="flex bg-gray-100 rounded-lg p-1 self-center w-full sm:w-auto"><button onClick={() => setViewMode('daily')} className={`flex-1 sm:flex-none px-4 py-1.5 text-sm rounded-md transition font-medium ${viewMode === 'daily' ? 'bg-white shadow text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}>รายวัน</button><button onClick={() => setViewMode('monthly')} className={`flex-1 sm:flex-none px-4 py-1.5 text-sm rounded-md transition font-medium ${viewMode === 'monthly' ? 'bg-white shadow text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}>รายเดือน</button></div><div className="flex-1 min-w-[140px]">{viewMode === 'daily' ? (<input type="date" value={currentDate} onChange={(e) => setCurrentDate(e.target.value)} className="w-full border rounded-md px-3 py-1.5 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white" />) : (<input type="month" value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)} className="w-full border rounded-md px-3 py-1.5 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white" />)}</div><div className="hidden sm:block w-px h-6 bg-gray-300 mx-1"></div><button onClick={generateDailyBriefing} disabled={aiLoading} className="flex items-center justify-center gap-2 px-3 py-1.5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm rounded-lg shadow hover:shadow-lg transition-all hover:scale-105 whitespace-nowrap disabled:opacity-70">{aiLoading ? <Loader2 size={16} className="animate-spin" /> : <Sparkles size={16} />} <span>AI Summary</span></button></div>
       </header>

       <div className="bg-white p-5 md:p-6 rounded-xl shadow-md border-t-4 border-blue-500 transform transition-all hover:scale-[1.005]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4 md:gap-6 w-full md:w-auto"><div className="p-3 md:p-4 bg-blue-50 text-blue-600 rounded-full shadow-inner flex-shrink-0"><LayoutDashboard size={32} className="md:w-10 md:h-10" /></div><div><h3 className="text-lg md:text-xl font-bold text-gray-800">งานทั้งหมด (Total Tasks)</h3><p className="text-gray-500 text-xs md:text-sm">งานรถโอนย้าย, งานส่งสินค้า, งานรถส่วนกลาง</p></div></div>
              <div className="w-full md:flex-1 md:max-w-lg"><div className="flex justify-between items-end mb-2"><span className="text-3xl md:text-4xl font-bold text-blue-600 tracking-tight">{statsAll.completed}</span><div className="text-right"><span className="text-gray-400 text-xs md:text-sm font-medium">จากทั้งหมด</span><span className="text-gray-600 font-bold ml-1 text-sm md:text-base">{statsAll.total} งาน</span></div></div><div className="w-full bg-gray-100 rounded-full h-4 md:h-5 overflow-hidden shadow-inner"><div className="bg-gradient-to-r from-blue-400 to-blue-600 h-full rounded-full transition-all duration-1000 ease-out" style={{ width: `${statsAll.total > 0 ? (statsAll.completed/statsAll.total)*100 : 0}%` }}></div></div><div className="flex justify-between text-xs text-gray-500 mt-2 font-medium"><span>สำเร็จ {statsAll.total > 0 ? Math.round((statsAll.completed/statsAll.total)*100) : 0}%</span><span className="text-red-500">คงค้าง {statsAll.pending} งาน</span></div></div>
          </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {hasAccess('inbound') && <StatCard title="งานรถโอนย้าย (Inbound)" value={statsIn.completed} total={statsIn.total} color="green" icon={ArrowDownToLine} subStats={getPendingStats(statsIn.rawTasks, 'Inbound')} onClick={() => setActiveTab('inbound')} />}
        {hasAccess('outbound') && <StatCard title="งานส่งสินค้า (Outbound)" value={statsOut.completed} total={statsOut.total} color="orange" icon={ArrowUpFromLine} subStats={getPendingStats(statsOut.rawTasks, 'Outbound')} onClick={() => setActiveTab('outbound')} />}
        {hasAccess('internal') && <StatCard title="งานรถส่วนกลาง (Internal)" value={statsInt.completed} total={statsInt.total} color="purple" icon={Building2} subStats={getPendingStats(statsInt.rawTasks, 'Internal')} onClick={() => setActiveTab('internal')} />}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 col-span-1 lg:col-span-2 flex flex-col">
          <div className="flex justify-between items-center mb-4"><h3 className="font-bold text-lg flex items-center gap-2"><AlertTriangle className="text-red-500" size={20} /> <span className="truncate">ปัญหารอล่าสุด</span></h3><button onClick={() => setActiveTab('problems')} className="text-sm text-blue-600 hover:underline whitespace-nowrap">ดูทั้งหมด</button></div>
          {pendingLogs.length === 0 ? (
              <p className="text-gray-400 text-center py-6 bg-gray-50 rounded-lg border border-dashed text-sm">ไม่พบปัญหาค้างดำเนินการ</p>
          ) : (
              <div className="flex overflow-x-auto gap-4 pb-4 custom-scrollbar">
                  {pendingLogs.map((log, idx) => (
                      <div key={log.docId || log.id || idx} className="min-w-[280px] bg-red-50 border border-red-100 p-4 rounded-xl flex flex-col justify-between">
                          <div>
                              <div className="flex justify-between items-start mb-2"><div className="bg-red-200 p-1.5 rounded-full text-red-600"><AlertTriangle size={16} /></div><span className="text-[10px] text-gray-500">{log.date}</span></div>
                              <h4 className="font-bold text-gray-800 text-sm mb-1">{log.topic}</h4>
                              <p className="text-xs text-gray-600 line-clamp-2 mb-2">{log.detail}</p>
                              <p className="text-[10px] text-gray-400 mb-2">แจ้งโดย: {log.createdBy || 'Unknown'}</p>
                          </div>
                          <div className="flex justify-between items-center">
                              <span className="text-[10px] uppercase font-bold tracking-wider bg-white px-2 py-0.5 rounded border border-gray-200 text-gray-500">{log.dept}</span>
                              {['dgm', 'dm'].includes(currentUserRole) && (
                                  <button onClick={() => handleOpenResolve(log.docId || log.id)} className="text-xs bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700 transition">ปิดงาน</button>
                              )}
                          </div>
                      </div>
                  ))}
              </div>
          )}
        </div>
        
        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex flex-col">
           <div className="flex justify-between items-center mb-4"><h3 className="font-bold text-lg flex items-center gap-2"><Users className="text-blue-500" size={20} /> คะแนนทีมงาน</h3><span className="text-[10px] bg-gray-100 px-2 py-1 rounded text-gray-500">เดือน {selectedMonth}</span></div>
           <div className="flex-1 overflow-y-auto space-y-4 pr-1 max-h-[300px]">
             {['Inbound', 'Outbound', 'Internal'].map(d => {
               const deptMembers = members.filter(m => m.dept === d);
               if (deptMembers.length === 0) return null;
               return (<div key={d} className="space-y-2"><h4 className="text-xs font-bold text-gray-400 uppercase border-b pb-1">{d}</h4><div className="space-y-2">{deptMembers.map((m, idx) => { const score = getMemberScore(m.id || m.docId); const scoreColor = score >= 80 ? 'text-green-600' : score >= 60 ? 'text-yellow-600' : 'text-red-600'; return (<div key={m.docId || m.id || idx} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition group"><div className="flex items-center gap-3"><MemberAvatar member={m} size="sm" /><div><p className="text-sm font-medium text-gray-800">{m.name}</p><p className="text-[10px] text-gray-500">{m.role}</p></div></div><div className="text-right"><span className={`text-lg font-bold ${scoreColor}`}>{score}</span><p className="text-[9px] text-gray-400">Points</p></div></div>); })}</div></div>);
             })}
           </div>
           <div className="mt-4 pt-4 border-t border-gray-100">
              <h4 className="text-xs font-bold text-gray-600 mb-2">ประวัติการปรับคะแนน (Manual)</h4>
              <div className="max-h-[100px] overflow-y-auto text-[10px] space-y-1">
                 {manualScores.filter(s => s.date.startsWith(selectedMonth)).map((s, idx) => { const m = members.find(mem => mem.id === s.memberId); return (<div key={s.docId || s.id || idx} className="flex justify-between items-center bg-gray-50 p-1.5 rounded"><span className="truncate flex-1">{m?.name}: {s.reason}</span><span className={`font-bold ml-2 ${s.score > 0 ? 'text-green-600' : 'text-red-600'}`}>{s.score > 0 ? '+' : ''}{s.score}</span><button onClick={() => onDeleteManualScore(s.docId || s.id)} className="ml-2 text-gray-400 hover:text-red-500"><Trash2 size={10} /></button></div>) })}
                 {manualScores.filter(s => s.date.startsWith(selectedMonth)).length === 0 && (<p className="text-gray-400 italic">ไม่มีรายการปรับคะแนนในเดือนนี้</p>)}
              </div>
           </div>
           <button onClick={() => setIsAdjustModalOpen(true)} className="mt-2 w-full py-2 bg-blue-50 text-blue-600 font-medium text-xs rounded hover:bg-blue-100 transition flex justify-center items-center gap-2"><Gavel size={14} /> เพิ่ม/หักคะแนนโดยหัวหน้างาน</button>
        </div>
      </div>
    </div>
  );
}

function DepartmentView({ 
  dept, title, color, icon: Icon, 
  tasks, members, 
  currentDate, setCurrentDate, 
  selectedMonth, setSelectedMonth,
  viewMode, setViewMode,
  onToggleTask, onUpdateTaskStatus, onAddTask, showToast, onDeleteTask, onEditTask 
}) {
  const [subTab, setSubTab] = useState('summary');
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDetail, setNewTaskDetail] = useState("");
  const [newTaskAssignee, setNewTaskAssignee] = useState("");
  const [newTaskDate, setNewTaskDate] = useState(currentDate);
  const [newTaskDueDate, setNewTaskDueDate] = useState(currentDate); 
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editTaskData, setEditTaskData] = useState(null);

  useEffect(() => { setNewTaskDate(currentDate); setNewTaskDueDate(currentDate); }, [currentDate]);
  
  const deptTasks = tasks.filter(t => {
     const isDept = t.dept === dept;
     const isDateMatch = viewMode === 'daily' ? t.date === currentDate : t.date.startsWith(selectedMonth);
     return isDept && isDateMatch;
  });

  const routineTasks = deptTasks.filter(t => t.type === 'routine');
  const assignTasks = deptTasks.filter(t => t.type === 'assign');
  const deptMembers = members.filter(m => m.dept === dept);
  
  const calculateProgress = (taskList) => {
    if (taskList.length === 0) return 0;
    const completed = taskList.filter(t => t.status === 'completed').length;
    return (completed / taskList.length) * 100;
  };

  const overallProgress = calculateProgress(deptTasks);
  const routineProgress = calculateProgress(routineTasks);
  const assignProgress = calculateProgress(assignTasks);

  const handleFormSubmit = (e, type) => {
    e.preventDefault();
    if (!newTaskTitle) return;

    // ✅ Fix 1: Removed parseInt for IDs to treat them as strings
    onAddTask({
      title: newTaskTitle,
      details: newTaskDetail,
      type: type,
      status: 'pending',
      latestStatus: 'รอดำเนินการ',
      date: newTaskDate || currentDate,
      dueDate: type === 'assign' ? newTaskDueDate : null, 
      dept: dept,
      assignee: newTaskAssignee ? newTaskAssignee : null, 
      assigneeName: newTaskAssignee ? members.find(m => m.id === newTaskAssignee)?.name : "ไม่ระบุ"
    }, dept); 

    setNewTaskTitle("");
    setNewTaskDetail("");
    setNewTaskAssignee("");
    showToast("บันทึกงานใหม่เรียบร้อยแล้ว");
  };

  const handleStatusSave = (taskId) => {
    showToast("บันทึกสถานะงานเรียบร้อยแล้ว");
  };

  const openEditTask = (task) => {
      // ✅ Fix 1: No integer conversion for ID
      setEditTaskData({ ...task, assignee: task.assignee ? task.assignee : "" });
      setIsEditModalOpen(true);
  };

  const handleEditSubmit = (e) => {
      e.preventDefault();
      // ✅ Fix 1: No integer conversion for ID
      onEditTask({
          ...editTaskData,
          assignee: editTaskData.assignee ? editTaskData.assignee : null,
          assigneeName: editTaskData.assignee ? members.find(m => m.id === editTaskData.assignee)?.name : "ไม่ระบุ"
      });
      setIsEditModalOpen(false);
      showToast("แก้ไขงานเรียบร้อยแล้ว");
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {isEditModalOpen && (
          <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black bg-opacity-50 p-4 backdrop-blur-sm">
             <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6 animate-fade-in">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2"><Edit className="text-blue-600"/> แก้ไขงาน</h3>
                <form onSubmit={handleEditSubmit} className="space-y-4">
                   <div><label className="block text-xs font-bold text-gray-500 mb-1">หัวข้อ</label><input className="w-full border rounded px-3 py-2" value={editTaskData.title || ""} onChange={e => setEditTaskData({...editTaskData, title: e.target.value})} /></div>
                   <div><label className="block text-xs font-bold text-gray-500 mb-1">รายละเอียด</label><input className="w-full border rounded px-3 py-2" value={editTaskData.details || ""} onChange={e => setEditTaskData({...editTaskData, details: e.target.value})} /></div>
                   <div>
                      <label className="block text-xs font-bold text-gray-500 mb-1">ผู้รับผิดชอบ</label>
                      <select className="w-full border rounded px-3 py-2 bg-white" value={editTaskData.assignee || ""} onChange={e => setEditTaskData({...editTaskData, assignee: e.target.value})}>
                          <option value="">เลือก...</option>
                          {deptMembers.map(m => <option key={m.id} value={m.id}>{m.name}</option>)}
                      </select>
                   </div>
                   {editTaskData.type === 'assign' && (
                       <div><label className="block text-xs font-bold text-gray-500 mb-1">วันกำหนดเสร็จ</label><input type="date" className="w-full border rounded px-3 py-2" value={editTaskData.dueDate || ""} onChange={e => setEditTaskData({...editTaskData, dueDate: e.target.value})} /></div>
                   )}
                   <div className="flex gap-2 justify-end pt-4"><button type="button" onClick={() => setIsEditModalOpen(false)} className="px-4 py-2 text-gray-500 hover:bg-gray-100 rounded">ยกเลิก</button><button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">บันทึก</button></div>
                </form>
             </div>
          </div>
      )}

      <header className={`flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 bg-white p-5 rounded-xl shadow-sm border-l-4`} style={{ borderColor: color }}>
        <div className="flex items-center gap-4">
          <div className={`p-3 rounded-full bg-opacity-10 flex-shrink-0`} style={{ backgroundColor: color }}>
            <Icon size={28} style={{ color: color }} />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">{title}</h2>
            <p className="text-gray-500 text-sm">
                จัดการงาน ({viewMode === 'daily' ? `ประจำวันที่ ${currentDate}` : `ประจำเดือน ${selectedMonth}`})
            </p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto items-stretch sm:items-center">
            <div className="flex bg-gray-100 rounded-lg p-1">
                <button onClick={() => setViewMode('daily')} className={`flex-1 sm:flex-none px-3 py-1.5 text-xs font-medium rounded-md transition ${viewMode === 'daily' ? 'bg-white shadow text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}>รายวัน</button>
                <button onClick={() => setViewMode('monthly')} className={`flex-1 sm:flex-none px-3 py-1.5 text-xs font-medium rounded-md transition ${viewMode === 'monthly' ? 'bg-white shadow text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}>รายเดือน</button>
            </div>
            <div className="min-w-[130px]">
              {viewMode === 'daily' ? (
                  <input type="date" value={currentDate} onChange={(e) => setCurrentDate(e.target.value)} className="w-full border rounded-md px-3 py-1.5 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white" />
              ) : (
                  <input type="month" value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)} className="w-full border rounded-md px-3 py-1.5 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white" />
              )}
            </div>
        </div>

        <div className="flex flex-wrap gap-2 w-full lg:w-auto mt-2 lg:mt-0">
          <button onClick={() => setSubTab('summary')} className={`flex-1 lg:flex-none px-4 py-2 rounded-md text-sm font-medium transition ${subTab === 'summary' ? 'bg-gray-100 text-gray-900 font-bold shadow-sm' : 'text-gray-500 hover:bg-gray-50'}`}>สรุปงาน</button>
          <button onClick={() => setSubTab('routine')} className={`flex-1 lg:flex-none px-4 py-2 rounded-md text-sm font-medium transition ${subTab === 'routine' ? 'bg-gray-100 text-gray-900 font-bold shadow-sm' : 'text-gray-500 hover:bg-gray-50'}`}>Routine</button>
          <button onClick={() => setSubTab('assign')} className={`flex-1 lg:flex-none px-4 py-2 rounded-md text-sm font-medium transition ${subTab === 'assign' ? 'bg-gray-100 text-gray-900 font-bold shadow-sm' : 'text-gray-500 hover:bg-gray-50'}`}>Assigned</button>
        </div>
      </header>

      {subTab === 'summary' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ProgressCircle percentage={overallProgress} color={color} title="รวมทั้งหมด" subtitle={`${deptTasks.filter(t=>t.status==='completed').length} / ${deptTasks.length} งาน`} />
          <ProgressCircle percentage={routineProgress} color="#3b82f6" title="Routine" subtitle={`${routineTasks.filter(t=>t.status==='completed').length} / ${routineTasks.length} งาน`} />
          <ProgressCircle percentage={assignProgress} color="#8b5cf6" title="Assigned" subtitle={`${assignTasks.filter(t=>t.status==='completed').length} / ${assignTasks.length} งาน`} />
          
          <div className="md:col-span-3 bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-bold mb-4 flex items-center gap-2 text-gray-700"><Users size={18} /> สมาชิกทีม {title}</h3>
            <div className="flex flex-wrap gap-4">
              {deptMembers.length > 0 ? deptMembers.map((m, idx) => (
                <div key={m.docId || m.id || idx} className="flex items-center gap-3 p-2.5 hover:bg-gray-50 rounded-lg transition border border-transparent hover:border-gray-100">
                  <MemberAvatar member={m} size="sm" />
                  <div><p className="font-medium text-sm text-gray-800">{m.name}</p><p className="text-xs text-gray-500">{m.role}</p></div>
                </div>
              )) : <p className="text-gray-400 text-sm">ไม่มีสมาชิกในแผนกนี้</p>}
            </div>
          </div>
        </div>
      )}

      {(subTab === 'routine' || subTab === 'assign') && (
         <div className="space-y-4">
           {/* Add Task Form */}
           <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
              <h3 className="font-bold text-gray-700 mb-3 text-sm flex items-center gap-2">
                <Plus size={16} /> เพิ่มงานใหม่ ({subTab === 'routine' ? 'Routine' : 'Assign'})
              </h3>
              <form onSubmit={(e) => handleFormSubmit(e, subTab)} className="grid grid-cols-1 md:grid-cols-12 gap-3">
                 <div className="md:col-span-3">
                    <label className="block text-[10px] text-gray-400 font-bold mb-1 uppercase">หัวข้อ</label>
                    <input type="text" placeholder="ระบุหัวข้องาน..." required className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400" value={newTaskTitle} onChange={(e) => setNewTaskTitle(e.target.value)} />
                 </div>
                 <div className="md:col-span-3">
                    <label className="block text-[10px] text-gray-400 font-bold mb-1 uppercase">รายละเอียด</label>
                    <input type="text" placeholder="รายละเอียดเพิ่มเติม..." className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400" value={newTaskDetail} onChange={(e) => setNewTaskDetail(e.target.value)} />
                 </div>
                 <div className="md:col-span-2">
                    <label className="block text-[10px] text-gray-400 font-bold mb-1 uppercase">ผู้รับผิดชอบ</label>
                    <select className="w-full border rounded-lg px-2 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white" value={newTaskAssignee} onChange={(e) => setNewTaskAssignee(e.target.value)}>
                       <option value="">เลือก...</option>
                       {deptMembers.map(m => <option key={m.id} value={m.id}>{m.name}</option>)}
                    </select>
                 </div>
                 <div className="md:col-span-2">
                    <label className="block text-[10px] text-gray-400 font-bold mb-1 uppercase">วันที่ได้รับมอบหมาย</label>
                    <input type="date" className="w-full border rounded-lg px-2 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400" value={newTaskDate} onChange={(e) => setNewTaskDate(e.target.value)} />
                 </div>
                 {subTab === 'assign' && (
                   <div className="md:col-span-2">
                      <label className="block text-[10px] text-red-400 font-bold mb-1 uppercase">วันกำหนดเสร็จ (Due)</label>
                      <input type="date" className="w-full border rounded-lg px-2 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-400 border-red-100 bg-red-50" value={newTaskDueDate} onChange={(e) => setNewTaskDueDate(e.target.value)} />
                   </div>
                 )}
                 <div className={`${subTab === 'assign' ? 'md:col-span-12 flex justify-end' : 'md:col-span-2 flex items-end'}`}>
                    <button type="submit" className={`bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm whitespace-nowrap shadow-sm h-[38px] ${subTab === 'assign' ? 'w-auto' : 'w-full'}`}>เพิ่ม</button>
                 </div>
              </form>
           </div>
           
           {/* Task List */}
           <div className="bg-white rounded-xl shadow-sm overflow-hidden">
             <div className="divide-y">
               {(subTab === 'routine' ? routineTasks : assignTasks).length === 0 ? (
                 <div className="p-10 text-center text-gray-400 text-sm">ไม่มีงานในรายการสำหรับช่วงเวลานี้</div>
               ) : (
                 (subTab === 'routine' ? routineTasks : assignTasks).map((task, idx) => (
                   <div key={task.docId || task.id || idx} className="p-4 hover:bg-gray-50 group transition">
                     <div className="flex items-start gap-4 mb-2">
                       <button onClick={() => onToggleTask(task.id, task.title, dept)} className={`transition-colors flex-shrink-0 mt-0.5 ${task.status === 'completed' ? 'text-green-500' : 'text-gray-300 hover:text-gray-400'}`} title="หัวหน้างาน: กดเพื่ออัพเดทงานเสร็จ">
                         {task.status === 'completed' ? <CheckCircle2 size={24} /> : <Circle size={24} />}
                       </button>
                       <div className="flex-1 min-w-0">
                         <div className="flex justify-between items-start">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                                <p className={`font-bold text-sm ${task.status === 'completed' ? 'text-gray-400 line-through' : 'text-gray-800'}`}>{task.title}</p>
                                {viewMode === 'monthly' && <span className="text-[10px] bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded border">{task.date}</span>}
                                {task.dueDate && (
                                  <span className={`text-[10px] px-1.5 py-0.5 rounded border flex items-center gap-1 ${new Date(currentDate) > new Date(task.dueDate) && task.status !== 'completed' ? 'bg-red-100 text-red-600 border-red-200' : 'bg-blue-50 text-blue-600 border-blue-100'}`}>
                                    <Clock size={10} /> Due: {task.dueDate}
                                  </span>
                                )}
                            </div>
                            
                            <div className="flex items-center gap-2">
                                {task.assignee && (
                                  <div className="flex items-center gap-1.5 flex-shrink-0 bg-gray-100 px-2 py-1 rounded-full">
                                    <img src={members.find(m => m.id === task.assignee)?.avatar} className="w-4 h-4 rounded-full" />
                                    <span className="text-[10px] text-gray-600 truncate max-w-[80px]">{members.find(m => m.id === task.assignee)?.name}</span>
                                  </div>
                                )}
                                {/* Edit & Delete Buttons */}
                                <button onClick={() => openEditTask(task)} className="text-gray-400 hover:text-blue-500 p-1"><Edit size={14} /></button>
                                <button onClick={() => onDeleteTask(task.id)} className="text-gray-400 hover:text-red-500 p-1"><Trash2 size={14} /></button>
                            </div>
                         </div>
                         {task.details && <p className="text-xs text-gray-500 mt-1 mb-2">{task.details}</p>}
                         <div className="flex items-center gap-2 mt-2">
                            <span className="text-[10px] font-bold text-gray-400 uppercase whitespace-nowrap">สถานะล่าสุด:</span>
                            <div className="flex-1 flex items-center gap-2 relative group/input">
                              <input type="text" className="flex-1 border-b border-gray-200 bg-transparent text-xs py-1 px-1 focus:border-blue-400 focus:outline-none text-blue-800 font-medium transition-colors" placeholder="พนักงานอัพเดทสถานะ..." value={task.latestStatus || ""} onChange={(e) => onUpdateTaskStatus(task.id, e.target.value)} />
                              <button onClick={() => handleStatusSave(task.id)} className="text-gray-400 hover:text-blue-600 transition-colors p-1 rounded-full hover:bg-blue-50" title="บันทึกสถานะ"><Save size={14} /></button>
                            </div>
                         </div>
                       </div>
                     </div>
                   </div>
                 ))
               )}
             </div>
           </div>
        </div>
      )}
    </div>
  );
}

function ProblemLogView({ logs, onAddLog, onResolveLog, currentDate, askAiSolution, showToast, userEmail, currentUserRole, aiLoading }) {
  const [topic, setTopic] = useState("");
  const [detail, setDetail] = useState("");
  const [dept, setDept] = useState("Inbound");
  const [activeTab, setActiveTab] = useState('pending'); // 'pending' | 'solved'
  const [isResolveModalOpen, setIsResolveModalOpen] = useState(false);
  const [resolveNote, setResolveNote] = useState("");
  const [selectedLogId, setSelectedLogId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddLog({ 
        topic, 
        detail, 
        dept, 
        date: currentDate, 
        status: 'pending',
        createdBy: userEmail || "Unknown" 
    });
    setTopic(""); setDetail(""); showToast("บันทึกปัญหาเรียบร้อยแล้ว");
  };

  const handleOpenResolve = (id) => {
      setSelectedLogId(id);
      setIsResolveModalOpen(true);
  };

  const handleResolveSubmit = () => {
      if(selectedLogId) {
          onResolveLog(selectedLogId, resolveNote);
          setIsResolveModalOpen(false);
          setResolveNote("");
          setSelectedLogId(null);
          showToast("ปิดงานเรียบร้อยแล้ว");
      }
  };

  const filteredLogs = logs.filter(l => l.status === activeTab);

  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2"><AlertTriangle className="text-red-500" /> Problem Log</h2>

      {isResolveModalOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black bg-opacity-50 p-4 backdrop-blur-sm">
           <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6 animate-fade-in">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2"><CheckCircle2 className="text-green-600"/> บันทึกการปิดงาน</h3>
              <div className="space-y-4">
                 <div><label className="block text-xs font-bold text-gray-500 mb-1">หมายเหตุ / สรุปการแก้ไข</label><textarea className="w-full border rounded px-3 py-2 h-24" value={resolveNote} onChange={e => setResolveNote(e.target.value)} placeholder="ระบุรายละเอียดการแก้ไข..."></textarea></div>
                 <div className="flex gap-2 justify-end pt-4"><button onClick={() => setIsResolveModalOpen(false)} className="px-4 py-2 text-gray-500 hover:bg-gray-100 rounded">ยกเลิก</button><button onClick={handleResolveSubmit} className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">ยืนยันปิดงาน</button></div>
              </div>
           </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Form */}
        <div className="bg-white p-6 rounded-xl shadow-sm h-fit">
          <h3 className="font-bold mb-4 text-gray-800">แจ้งปัญหาใหม่</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div><label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide">หัวข้อ</label><input required type="text" className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-red-200 focus:border-red-400 outline-none transition" value={topic} onChange={e => setTopic(e.target.value)} /></div>
            <div><label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide">รายละเอียด</label><textarea required className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-red-200 focus:border-red-400 outline-none transition" rows="3" value={detail} onChange={e => setDetail(e.target.value)}></textarea></div>
            <div><label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide">แผนก</label><select className="w-full border rounded-lg px-3 py-2 text-sm bg-white" value={dept} onChange={e => setDept(e.target.value)}><option value="Inbound">Inbound</option><option value="Outbound">Outbound</option><option value="Internal">Internal</option></select></div>
            <button type="submit" className="w-full bg-red-600 text-white py-2.5 rounded-lg hover:bg-red-700 transition font-medium text-sm shadow-md shadow-red-200">บันทึกปัญหา</button>
          </form>
        </div>
        
        {/* List with Tabs */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm overflow-hidden flex flex-col max-h-[600px]">
           <div className="flex border-b">
              <button onClick={() => setActiveTab('pending')} className={`flex-1 py-3 text-sm font-bold text-center border-b-2 transition ${activeTab === 'pending' ? 'border-red-500 text-red-600 bg-red-50' : 'border-transparent text-gray-500 hover:bg-gray-50'}`}>รอดำเนินการ ({logs.filter(l => l.status === 'pending').length})</button>
              <button onClick={() => setActiveTab('solved')} className={`flex-1 py-3 text-sm font-bold text-center border-b-2 transition ${activeTab === 'solved' ? 'border-green-500 text-green-600 bg-green-50' : 'border-transparent text-gray-500 hover:bg-gray-50'}`}>ปิดงานแล้ว ({logs.filter(l => l.status === 'solved').length})</button>
           </div>
           
           <div className="divide-y overflow-y-auto flex-1">
              {filteredLogs.length === 0 ? <div className="p-10 text-center text-gray-400">ไม่มีรายการในสถานะนี้</div> : null}
              {[...filteredLogs].reverse().map((log, idx) => (
                <div key={log.docId || log.id || idx} className="p-4 hover:bg-gray-50 transition relative group">
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-bold text-gray-800 text-sm">{log.topic}</h4>
                          <span className="text-[10px] text-gray-400">โดย: {log.createdBy}</span>
                          {log.status === 'pending' && <button onClick={() => askAiSolution(log)} disabled={aiLoading} className="flex items-center gap-1 px-1.5 py-0.5 bg-indigo-50 text-indigo-600 text-[10px] rounded border border-indigo-100 hover:bg-indigo-100 transition whitespace-nowrap"><Sparkles size={10} /> {aiLoading ? 'Thinking...' : 'Ask AI'}</button>}
                      </div>
                      <p className="text-sm text-gray-600 break-words">{log.detail}</p>
                      {log.status === 'solved' && (
                          <div className="mt-2 text-xs bg-green-50 p-2 rounded border border-green-100 text-green-800">
                              <strong>แก้ไขแล้วโดย:</strong> {log.solvedBy} <br/>
                              <strong>หมายเหตุ:</strong> {log.resolution}
                          </div>
                      )}
                      <div className="flex gap-2 mt-2"><span className="text-[10px] uppercase font-bold tracking-wider bg-gray-100 px-2 py-0.5 rounded text-gray-600">{log.dept}</span><span className="text-[10px] text-gray-400 px-2 py-0.5">{log.date}</span></div>
                    </div>
                    <div>
                        {log.status === 'pending' ? (
                            ['dgm', 'dm'].includes(currentUserRole) && (
                                <button onClick={() => handleOpenResolve(log.docId || log.id)} className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs rounded hover:bg-yellow-200 transition font-bold">ปิดงาน</button>
                            )
                        ) : (
                            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide whitespace-nowrap bg-green-100 text-green-700">SOLVED</span>
                        )}
                    </div>
                  </div>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
}

function TeamView({ members, onAddMember, onEditMember, onDeleteMember, roles }) {
  const [newMember, setNewMember] = useState({ name: "", role: "", dept: "Inbound", avatar: "", email: "", password: "" });
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingMember, setEditingMember] = useState(null);

  const handleAddMemberSubmit = (e) => { e.preventDefault(); onAddMember({ ...newMember, avatar: newMember.avatar || `https://i.pravatar.cc/150?u=${Date.now()}` }); setNewMember({ name: "", role: "", dept: "Inbound", avatar: "", email: "", password: "" }); };
  
  const handleEditClick = (member) => {
      setEditingMember(member);
      setIsEditModalOpen(true);
  };

  const handleEditSubmit = (e) => {
      e.preventDefault();
      onEditMember(editingMember);
      setIsEditModalOpen(false);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2"><Users className="text-blue-600" /> จัดการทีมงาน</h2>
      
      {/* Edit Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black bg-opacity-50 p-4 backdrop-blur-sm">
           <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6 animate-fade-in">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2"><Edit className="text-blue-600"/> แก้ไขข้อมูลพนักงาน</h3>
              <form onSubmit={handleEditSubmit} className="space-y-4">
                 <div><label className="block text-xs font-bold text-gray-500 mb-1">ชื่อ-สกุล</label><input required className="w-full border rounded px-3 py-2" value={editingMember.name} onChange={e => setEditingMember({...editingMember, name: e.target.value})} /></div>
                 <div><label className="block text-xs font-bold text-gray-500 mb-1">อีเมล (สำหรับเข้าสู่ระบบ)</label><input required type="email" className="w-full border rounded px-3 py-2" value={editingMember.email} onChange={e => setEditingMember({...editingMember, email: e.target.value})} /></div>
                 <div>
                    <label className="block text-xs font-bold text-gray-500 mb-1">ตำแหน่ง</label>
                    <select required className="w-full border rounded px-3 py-2 bg-white" value={editingMember.role} onChange={e => setEditingMember({...editingMember, role: e.target.value})}>
                       {roles.map(r => <option key={r.id} value={r.name}>{r.name}</option>)}
                    </select>
                 </div>
                 <div><label className="block text-xs font-bold text-gray-500 mb-1">แผนก</label><select className="w-full border rounded px-3 py-2 bg-white" value={editingMember.dept} onChange={e => setEditingMember({...editingMember, dept: e.target.value})}><option value="Inbound">Inbound</option><option value="Outbound">Outbound</option><option value="Internal">Internal</option><option value="Manager">Manager</option></select></div>
                 <div className="flex gap-2 justify-end pt-4"><button type="button" onClick={() => setIsEditModalOpen(false)} className="px-4 py-2 text-gray-500 hover:bg-gray-100 rounded">ยกเลิก</button><button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">บันทึก</button></div>
              </form>
           </div>
        </div>
      )}

      <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
        <h3 className="font-bold mb-4 text-gray-700">เพิ่มสมาชิกใหม่</h3>
        <form onSubmit={handleAddMemberSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-end">
           <div className="w-full"><label className="block text-xs font-semibold text-gray-500 mb-1">ชื่อ-สกุล</label><input required value={newMember.name} onChange={e => setNewMember({...newMember, name: e.target.value})} className="w-full border rounded-lg px-3 py-2 text-sm" placeholder="ระบุชื่อ..." /></div>
           <div className="w-full"><label className="block text-xs font-semibold text-gray-500 mb-1">อีเมล (Login)</label><input required type="email" value={newMember.email} onChange={e => setNewMember({...newMember, email: e.target.value})} className="w-full border rounded-lg px-3 py-2 text-sm" placeholder="name@company.com" /></div>
           <div className="w-full"><label className="block text-xs font-semibold text-gray-500 mb-1">รหัสผ่าน</label><input required type="password" value={newMember.password} onChange={e => setNewMember({...newMember, password: e.target.value})} className="w-full border rounded-lg px-3 py-2 text-sm" placeholder="********" /></div>
           
           <div className="w-full">
              <label className="block text-xs font-semibold text-gray-500 mb-1">ตำแหน่ง</label>
              <select required className="w-full border rounded-lg px-3 py-2 text-sm bg-white" value={newMember.role} onChange={e => setNewMember({...newMember, role: e.target.value})}>
                 <option value="">เลือกตำแหน่ง...</option>
                 {roles.map(r => <option key={r.id} value={r.name}>{r.name}</option>)}
              </select>
           </div>
           <div className="w-full"><label className="block text-xs font-semibold text-gray-500 mb-1">แผนก</label><select className="w-full border rounded-lg px-3 py-2 text-sm bg-white" value={newMember.dept} onChange={e => setNewMember({...newMember, dept: e.target.value})}><option value="Inbound">Inbound</option><option value="Outbound">Outbound</option><option value="Internal">Internal</option><option value="Manager">Manager</option></select></div>
           
           <div className="w-full md:col-span-1 lg:col-span-1"><button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 w-full font-medium text-sm shadow-sm transition h-[38px] mt-6">เพิ่มสมาชิก</button></div>
        </form>
      </div>
      <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50"><tr><th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">สมาชิก</th><th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">อีเมล</th><th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">ตำแหน่ง</th><th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">แผนก</th><th className="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">จัดการ</th></tr></thead>
            <tbody className="bg-white divide-y divide-gray-200">{members.map((m, idx) => (<tr key={m.docId || m.id || idx} className="hover:bg-gray-50 transition cursor-pointer" onClick={() => handleEditClick(m)}><td className="px-6 py-4 whitespace-nowrap flex items-center gap-3"><img className="h-9 w-9 rounded-full object-cover border" src={m.avatar || `https://i.pravatar.cc/150?u=${m.id}`} alt="" /><div className="text-sm font-medium text-gray-900">{m.name}</div></td><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{m.email}</td><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{m.role}</td><td className="px-6 py-4 whitespace-nowrap"><span className={`px-2.5 py-0.5 inline-flex text-xs leading-4 font-semibold rounded-full ${m.dept === 'Inbound' ? 'bg-green-100 text-green-800' : m.dept === 'Outbound' ? 'bg-orange-100 text-orange-800' : 'bg-purple-100 text-purple-800'}`}>{m.dept}</span></td><td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"><button onClick={(e) => { e.stopPropagation(); onDeleteMember(m.id); }} className="text-gray-400 hover:text-red-600 transition p-1 rounded-full hover:bg-red-50"><Trash2 size={18} /></button></td></tr>))}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// ... Main App Component ...

export default function TransportApp() {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [loginError, setLoginError] = useState("");
  const [appUser, setAppUser] = useState(null); // Visual User
  
  const [activeTab, setActiveTab] = useState('dashboard');
  // ✅ Fix 3: Use local date
  const [currentDate, setCurrentDate] = useState(getLocalDate());
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [viewMode, setViewMode] = useState('daily');
  // ✅ Fix 3: Use local date for month
  const [selectedMonth, setSelectedMonth] = useState(getLocalDate().slice(0, 7));
  const [currentUserRole, setCurrentUserRole] = useState('dgm'); // Default role for demo
  
  const [members, setMembers] = useState(INITIAL_MEMBERS);
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  const [logs, setLogs] = useState(INITIAL_LOGS);
  const [actionLogs, setActionLogs] = useState(INITIAL_ACTION_LOGS);
  const [rules, setRules] = useState(INITIAL_RULES);
  const [manualScores, setManualScores] = useState(INITIAL_MANUAL_SCORES);
  const [roles, setRoles] = useState(DEFAULT_ROLES);

  const [toastMessage, setToastMessage] = useState("");
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);
  const [isAdjustModalOpen, setIsAdjustModalOpen] = useState(false);
  const [adjustData, setAdjustData] = useState({ date: currentDate, memberId: "", ruleId: "" });
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  const isMaintenance = false;

  if (isMaintenance) {
    return (
      <div className="flex h-screen items-center justify-center bg-slate-900 text-white flex-col gap-4">
        <h1 className="text-4xl font-bold">🚧 ปิดปรับปรุงระบบ</h1>
        <p>ทีมงานกำลังอัพเดทข้อมูล โปรดกลับมาใหม่เร็วๆ นี้</p>
      </div>
    );
  }

  // --- Auth Initialization ---
  useEffect(() => {
    const initAuth = async () => {
      if (typeof __initial_auth_token !== 'undefined' && __initial_auth_token) {
        await signInWithCustomToken(auth, __initial_auth_token);
      }
    };
    initAuth();
    
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setAuthLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async (email, password) => {
    setAuthLoading(true);
    setLoginError("");

    try {
        const membersRef = collection(db, 'artifacts', appId, 'public', 'data', 'members');
        const q = query(membersRef, where("email", "==", email));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            const memberData = querySnapshot.docs[0].data();
            
            // ✅ Fix 2: Login Security Check (Basic)
            if (memberData.password !== password) {
                setLoginError("รหัสผ่านไม่ถูกต้อง");
                setAuthLoading(false);
                return;
            }

            const roleObj = roles.find(r => r.name === memberData.role);
            const roleId = roleObj ? roleObj.id : 'dgm';

            setAppUser({ email: memberData.email, name: memberData.name });
            setCurrentUserRole(roleId);
            setAuthLoading(false);
        } else {
            setLoginError("ไม่พบผู้ใช้งาน หรือ อีเมลไม่ถูกต้อง");
            setAuthLoading(false);
        }
    } catch (error) {
        console.error("Login error:", error);
        setLoginError("เกิดข้อผิดพลาดในการเชื่อมต่อ: " + error.message);
        setAuthLoading(false);
    }
  };

  const handleLogout = async () => {
    setAppUser(null);
    setCurrentUserRole('dgm'); 
  };

  useEffect(() => {
    setAdjustData(prev => ({ ...prev, date: currentDate }));
  }, [currentDate]);

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
      unsubMembers(); unsubTasks(); unsubLogs(); unsubActionLogs(); unsubRules(); unsubScores(); unsubRoles();
    };
  }, [user]);

  // --- Actions ---

  const showToast = (message) => {
    setToastMessage(message);
    setIsToastVisible(true);
    setTimeout(() => setIsToastVisible(false), 3000);
  };

  const getUserName = () => {
    return appUser ? (appUser.email || appUser.name) : "System";
  };

  const handleAddActionLog = async (action) => {
    if (!user) return;
    await addDoc(collection(db, 'artifacts', appId, 'public', 'data', 'actionLogs'), {
      timestamp: formatDateTime(new Date()),
      action: action,
      user: getUserName(),
      createdAt: serverTimestamp()
    });
  };

  // --- CRUD Handlers ---

  const handleTaskToggle = async (taskId, taskTitle, dept) => {
    const task = tasks.find(t => t.id === taskId);
    if (!task) return;
    const newStatus = task.status === 'completed' ? 'pending' : 'completed';
    await updateDoc(doc(db, 'artifacts', appId, 'public', 'data', 'tasks', taskId), { status: newStatus });
    if (newStatus === 'completed') { handleAddActionLog(`กดจบงาน: "${taskTitle}" ของแผนก ${dept}`); }
    showToast("อัพเดทสถานะงานสำเร็จ");
  };

  const handleUpdateTaskStatus = async (taskId, newStatus) => {
    await updateDoc(doc(db, 'artifacts', appId, 'public', 'data', 'tasks', taskId), { latestStatus: newStatus });
  };

  const handleAddTask = async (newTask, dept) => {
    await addDoc(collection(db, 'artifacts', appId, 'public', 'data', 'tasks'), newTask);
    handleAddActionLog(`เพิ่มงานใหม่: "${newTask.title}" ในแผนก ${dept}`);
  };
  
  const handleEditTask = async (task) => {
     const { id, ...data } = task;
     await updateDoc(doc(db, 'artifacts', appId, 'public', 'data', 'tasks', id), data);
     handleAddActionLog(`แก้ไขงาน: "${task.title}"`);
  };

  const handleDeleteTask = async (id) => {
     await deleteDoc(doc(db, 'artifacts', appId, 'public', 'data', 'tasks', id));
     handleAddActionLog("ลบงาน");
  };

  const handleAddMember = async (newMember) => {
    await addDoc(collection(db, 'artifacts', appId, 'public', 'data', 'members'), newMember);
    handleAddActionLog(`เพิ่มพนักงานใหม่: ${newMember.name}`);
  };

  const handleEditMember = async (member) => {
    const { docId, ...data } = member;
    if(docId) {
        await updateDoc(doc(db, 'artifacts', appId, 'public', 'data', 'members', docId), data);
        handleAddActionLog(`แก้ไขข้อมูลพนักงาน: ${member.name}`);
        showToast("แก้ไขข้อมูลเรียบร้อย");
    }
  };

  const handleDeleteMember = async (id) => {
    const memberToDelete = members.find(m => m.id === id);
    if(memberToDelete && memberToDelete.docId) {
        await deleteDoc(doc(db, 'artifacts', appId, 'public', 'data', 'members', memberToDelete.docId));
    }
  };

  const handleAddLog = async (newLog) => {
    await addDoc(collection(db, 'artifacts', appId, 'public', 'data', 'logs'), newLog);
    handleAddActionLog(`แจ้งปัญหาใหม่: ${newLog.topic}`);
  };
  
  const handleResolveLog = async (id, resolution) => {
      const logToUpdate = logs.find(l => l.id === id);
      if(logToUpdate && logToUpdate.docId) {
          await updateDoc(doc(db, 'artifacts', appId, 'public', 'data', 'logs', logToUpdate.docId), {
              status: 'solved',
              resolution: resolution || "แก้ไขแล้ว",
              solvedBy: getUserName(),
              solvedAt: serverTimestamp()
          });
          handleAddActionLog("ปิดงานแจ้งปัญหา");
      }
  };

  const handleSaveRule = async (ruleData) => {
    const existingRule = rules.find(r => r.id === ruleData.id);
    if (existingRule && existingRule.docId) {
        try {
            await updateDoc(doc(db, 'artifacts', appId, 'public', 'data', 'rules', existingRule.docId), { 
                topic: ruleData.topic, 
                score: ruleData.score, 
                type: ruleData.type, 
                detail: ruleData.detail 
            });
            handleAddActionLog(`แก้ไขกฎระเบียบ: ${ruleData.topic}`);
        } catch (e) {
             console.error(e);
        }
    } else {
        await addDoc(collection(db, 'artifacts', appId, 'public', 'data', 'rules'), ruleData);
        handleAddActionLog(`เพิ่มกฎระเบียบใหม่: ${ruleData.topic}`);
    }
    showToast("บันทึกกฎระเบียบเรียบร้อย");
  };

  const handleDeleteRule = async (id) => {
    const ruleToDelete = rules.find(r => r.id === id);
    if(ruleToDelete && ruleToDelete.docId) {
        await deleteDoc(doc(db, 'artifacts', appId, 'public', 'data', 'rules', ruleToDelete.docId));
        handleAddActionLog("ลบกฎระเบียบ");
    }
  };

  const handleSaveManualScore = async (data) => {
    await addDoc(collection(db, 'artifacts', appId, 'public', 'data', 'manualScores'), data);
    const memberName = members.find(m => m.id === data.memberId)?.name;
    const typeText = data.score > 0 ? "เพิ่มคะแนน" : "หักคะแนน";
    handleAddActionLog(`ปรับคะแนน (${typeText}) ให้คุณ ${memberName}: ${data.reason}`);
    showToast("บันทึกการปรับคะแนนเรียบร้อย");
  };
  
  const handleDeleteManualScore = async (id) => {
      const scoreToDelete = manualScores.find(s => s.id === id);
      if(scoreToDelete && scoreToDelete.docId) {
          await deleteDoc(doc(db, 'artifacts', appId, 'public', 'data', 'manualScores', scoreToDelete.docId));
          handleAddActionLog("ลบรายการปรับคะแนน");
          showToast("ลบรายการเรียบร้อย");
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
    showToast("บันทึกสิทธิ์การเข้าใช้งานเรียบร้อย");
  };

  const handleSeedData = async () => {
    if(!user) return;
    
    if(members.length > 0 || tasks.length > 0) {
        showToast("มีข้อมูลอยู่แล้ว ไม่จำเป็นต้องโหลดเพิ่ม");
        return;
    }

    const batchPromises = [];
    
    // ✅ Fix 1: Use String IDs for consistency with Firestore logic
    const initialMembers = [
      { id: "1", name: "สมชาย ใจดี", role: "DM", dept: "Inbound", avatar: "https://i.pravatar.cc/150?u=1", email: "somchai@demo.com", password: "123" },
      { id: "2", name: "วิภา รักงาน", role: "Route Planner Outbound", dept: "Outbound", avatar: "https://i.pravatar.cc/150?u=2", email: "wipa@demo.com", password: "123" },
      { id: "3", name: "ก้อง เกียรติ", role: "Route Planner Internal", dept: "Internal", avatar: "https://i.pravatar.cc/150?u=3", email: "kong@demo.com", password: "123" },
      { id: "4", name: "อารี มีสุข", role: "Route Planner Inbound", dept: "Inbound", avatar: "https://i.pravatar.cc/150?u=4", email: "aree@demo.com", password: "123" },
      { id: "5", name: "มานะ อดทน", role: "Route Planner Outbound", dept: "Outbound", avatar: "https://i.pravatar.cc/150?u=5", email: "mana@demo.com", password: "123" }
    ];
    initialMembers.forEach(m => batchPromises.push(addDoc(collection(db, 'artifacts', appId, 'public', 'data', 'members'), m)));

    const initialRules = [
      { id: "1", topic: "งานล่าช้ากว่ากำหนด (Assign)", score: -1, type: "deduct", detail: "หัก 1 คะแนน ต่อ 1 วันที่ล่าช้า" },
      { id: "2", topic: "ไม่ทำงานประจำวัน (Routine)", score: -1, type: "deduct", detail: "หัก 1 คะแนน ต่องานที่ค้างข้ามวัน" },
      { id: "3", topic: "แต่งกายไม่เรียบร้อย", score: -5, type: "deduct", detail: "ไม่ใส่ชุดยูนิฟอร์ม" },
      { id: "4", topic: "มาสาย", score: -2, type: "deduct", detail: "สายเกิน 15 นาที" }
    ];
    initialRules.forEach(r => batchPromises.push(addDoc(collection(db, 'artifacts', appId, 'public', 'data', 'rules'), r)));

    DEFAULT_ROLES.forEach(r => batchPromises.push(addDoc(collection(db, 'artifacts', appId, 'public', 'data', 'roles'), r)));

    await Promise.all(batchPromises);
    handleAddActionLog("ระบบทำการโหลดข้อมูลตัวอย่าง");
    showToast("โหลดข้อมูลตัวอย่างเรียบร้อย");
  };

  // --- Logic & Stats ---

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
        // ✅ Fix 1: Ensure strict string comparison if IDs are strings
        if (t.assignee === memberId && t.date.startsWith(selectedMonth)) {
            if (t.status !== 'completed') {
                if (t.type === 'routine' && t.date < today) {
                    score -= 1; 
                } else if (t.type === 'assign' && t.dueDate && today > t.dueDate) {
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
                date: s.date,
                memberName: member ? member.name : "Unknown",
                topic: s.reason,
                score: s.score,
                type: 'Manual'
            });
        }
    });

    tasks.forEach(t => {
        if (t.date.startsWith(selectedMonth)) {
            const member = members.find(m => m.id === t.assignee);
            if (!member) return;

            if (t.status !== 'completed') {
                if (t.type === 'routine' && t.date < today) {
                    scoreLogs.push({
                        date: t.date,
                        memberName: member.name,
                        topic: `ไม่ได้ทำ Routine: ${t.title}`,
                        score: -1, 
                        type: 'Auto'
                    });
                }
                if (t.type === 'assign' && t.dueDate && today > t.dueDate) {
                    const diff = calculateDaysDiff(t.dueDate, today);
                    scoreLogs.push({
                        date: today,
                        memberName: member.name,
                        topic: `งานล่าช้า (${diff} วัน): ${t.title}`,
                        score: -diff, 
                        type: 'Auto'
                    });
                }
            }
        }
    });
    return scoreLogs;
  };
  
  // ✅ Fix 4: AI Mock Functionality
  const generateDailyBriefing = async () => {
     setAiLoading(true);
     // Simulate API Call
     setTimeout(() => {
         setAiLoading(false);
         showToast("AI Summary: สร้างสรุปงานประจำวันเรียบร้อยแล้ว (Mockup)");
     }, 2000);
  };

  // ✅ Fix 4: AI Mock Functionality
  const askAiSolution = async (problem) => {
     setAiLoading(true);
     // Simulate API Call
     setTimeout(() => {
         setAiLoading(false);
         showToast(`AI Suggestion for "${problem.topic}": ลองตรวจสอบเอกสารอ้างอิงและติดต่อประสานงานใหม่ (Mockup)`);
     }, 2000);
  };

  const handleAdjustSubmit = (e) => {
    e.preventDefault();
    if(!adjustData.memberId || !adjustData.ruleId) return;
    // ✅ Fix 1: Using String ID
    const rule = rules.find(r => r.id === adjustData.ruleId);
    if(rule) {
        handleSaveManualScore({ ...adjustData, score: rule.score, reason: rule.topic, type: 'Manual' });
        setIsAdjustModalOpen(false);
        setAdjustData({ date: currentDate, memberId: "", ruleId: "" });
    }
  };
  
  const getCurrentRoleData = () => {
      const roleDef = roles.find(r => r.id === currentUserRole);
      return roleDef || DEFAULT_ROLES[0]; 
  };
  
  const hasAccess = (menuId) => {
      const role = getCurrentRoleData();
      if (role.access.includes('all')) return true;
      return role.access.includes(menuId);
  };
  
  const isReadOnly = (menuId) => {
      const role = getCurrentRoleData();
      return role.readOnly?.includes(menuId);
  };
  
  const filteredNavItems = MENU_ITEMS.filter(item => hasAccess(item.id));

  if (authLoading) return <div className="flex h-screen items-center justify-center bg-slate-900"><Loader2 className="w-10 h-10 text-blue-500 animate-spin" /></div>;

  if (!appUser) {
    return <LoginView onLogin={handleLogin} error={loginError} loading={authLoading} />;
  }

  return (
    <div className="flex h-screen bg-gray-50 font-sans text-gray-900">
      <Toast message={toastMessage} isVisible={isToastVisible} onClose={() => setIsToastVisible(false)} />
      
      <aside className={`bg-white border-r border-gray-200 hidden md:flex flex-col transition-all duration-300 ease-in-out z-20 shadow-[2px_0_15px_rgba(0,0,0,0.03)] ${isSidebarOpen ? 'w-64' : 'w-20'}`}>
        <div className={`p-4 border-b border-gray-100 flex items-center ${isSidebarOpen ? 'justify-between' : 'justify-center'}`}>
           {isSidebarOpen && (<h1 className="text-xl font-extrabold text-blue-800 flex items-center gap-2 truncate"><div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white flex-shrink-0 shadow-md"><LayoutDashboard size={18} /></div><span className="truncate">Transport<span className="text-blue-500 font-light">Ops</span></span></h1>)}
           {!isSidebarOpen && (<div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-md"><LayoutDashboard size={24} /></div>)}
        </div>
        <div className="flex justify-end px-2 pt-2"><button onClick={() => setSidebarOpen(!isSidebarOpen)} className="p-1.5 rounded-md hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition">{isSidebarOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} className="mx-auto" />}</button></div>
        <nav className="flex-1 p-3 space-y-0.5 overflow-y-auto overflow-x-hidden custom-scrollbar">
          {filteredNavItems.map(item => (
              <MenuButton 
                key={item.id}
                id={item.id} 
                label={item.label} 
                icon={item.icon} 
                activeTab={activeTab} 
                setActiveTab={setActiveTab} 
                isSidebarOpen={isSidebarOpen} 
                colorClass={['inbound', 'outbound', 'internal', 'problems'].includes(item.id) ? 
                    (item.id === 'inbound' ? 'text-green-500' : 
                     item.id === 'outbound' ? 'text-orange-500' : 
                     item.id === 'internal' ? 'text-purple-500' : 'text-red-500') 
                    : "text-gray-500"}
              />
          ))}
        </nav>
        <div className="p-4 border-t border-gray-100 mt-auto">
          <div className={`flex items-center gap-3 ${!isSidebarOpen ? 'justify-center' : ''} cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition`} onClick={() => setIsProfileModalOpen(true)}>
             <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">{appUser.email ? appUser.email.charAt(0).toUpperCase() : 'U'}</div>
             {isSidebarOpen && (
               <div className="flex-1 min-w-0">
                 <p className="text-sm font-medium text-gray-800 truncate">{appUser.email || 'User'}</p>
                 <div className="flex items-center gap-2">
                    <span className="text-[10px] bg-blue-50 text-blue-600 px-1.5 rounded border border-blue-100 truncate max-w-[80px]">{roles.find(r=>r.id===currentUserRole)?.name || currentUserRole}</span>
                 </div>
               </div>
             )}
          </div>
          {isSidebarOpen && (
             <button onClick={handleLogout} className="text-xs text-red-500 hover:text-red-600 flex items-center gap-1 mt-2 w-full justify-center py-1"><LogOut size={10} /> ออกจากระบบ</button>
          )}
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto bg-gray-50/50">
        <div className="md:hidden bg-white p-3 flex justify-between items-center shadow-sm sticky top-0 z-10 border-b">
          <div className="flex items-center gap-2"><div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white"><LayoutDashboard size={18} /></div><h1 className="font-bold text-lg text-blue-800">TransportOps</h1></div>
          <button className="p-2 bg-gray-50 rounded text-gray-600"><Menu size={22} /></button>
        </div>

        <div className="p-4 md:p-6 lg:p-8 max-w-7xl mx-auto min-h-full">
          {members.length === 0 && activeTab === 'dashboard' && (
             <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-xl flex items-center justify-between animate-fade-in">
                <div className="flex items-center gap-3 text-blue-800"><Database className="text-blue-600" /><div><h4 className="font-bold">ฐานข้อมูลว่างเปล่า</h4><p className="text-sm opacity-80">เริ่มต้นใช้งานด้วยการโหลดข้อมูลตัวอย่าง</p></div></div>
                <button onClick={handleSeedData} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium shadow-sm transition-transform hover:scale-105">โหลดข้อมูลตัวอย่าง (Seed Data)</button>
             </div>
          )}

          {activeTab === 'dashboard' && hasAccess('dashboard') && (<DashboardView 
              statsAll={getStats()} statsIn={getStats('Inbound')} statsOut={getStats('Outbound')} statsInt={getStats('Internal')} 
              logs={logs} members={members} tasks={tasks} rules={rules} manualScores={manualScores} 
              setActiveTab={setActiveTab} currentDate={currentDate} setCurrentDate={setCurrentDate} 
              selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} 
              viewMode={viewMode} setViewMode={setViewMode} 
              generateDailyBriefing={generateDailyBriefing} onSaveManualScore={handleSaveManualScore} 
              getMemberScore={getMemberScore} setIsAdjustModalOpen={setIsAdjustModalOpen} onDeleteManualScore={handleDeleteManualScore}
              onResolveLog={handleResolveLog} askAiSolution={askAiSolution} userEmail={appUser.email} currentUserRole={currentUserRole}
              hasAccess={hasAccess} aiLoading={aiLoading}
          />)}
          {activeTab === 'inbound' && hasAccess('inbound') && (<DepartmentView dept="Inbound" title="งานรถโอนย้าย (Inbound)" color="#22c55e" icon={ArrowDownToLine} tasks={tasks} members={members} currentDate={currentDate} setCurrentDate={setCurrentDate} viewMode={viewMode} setViewMode={setViewMode} selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} onUpdateTaskStatus={handleUpdateTaskStatus} onAddTask={handleAddTask} showToast={showToast} onToggleTask={handleTaskToggle} onDeleteTask={handleDeleteTask} onEditTask={handleEditTask} />)}
          {activeTab === 'outbound' && hasAccess('outbound') && (<DepartmentView dept="Outbound" title="งานส่งสินค้า (Outbound)" color="#f97316" icon={ArrowUpFromLine} tasks={tasks} members={members} currentDate={currentDate} setCurrentDate={setCurrentDate} viewMode={viewMode} setViewMode={setViewMode} selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} onUpdateTaskStatus={handleUpdateTaskStatus} onAddTask={handleAddTask} showToast={showToast} onToggleTask={handleTaskToggle} onDeleteTask={handleDeleteTask} onEditTask={handleEditTask} />)}
          {activeTab === 'internal' && hasAccess('internal') && (<DepartmentView dept="Internal" title="งานรถส่วนกลาง (Internal)" color="#a855f7" icon={Building2} tasks={tasks} members={members} currentDate={currentDate} setCurrentDate={setCurrentDate} viewMode={viewMode} setViewMode={setViewMode} selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} onUpdateTaskStatus={handleUpdateTaskStatus} onAddTask={handleAddTask} showToast={showToast} onToggleTask={handleTaskToggle} onDeleteTask={handleDeleteTask} onEditTask={handleEditTask} />)}
          {activeTab === 'problems' && hasAccess('problems') && (<ProblemLogView logs={logs} onAddLog={handleAddLog} onResolveLog={handleResolveLog} currentDate={currentDate} askAiSolution={askAiSolution} showToast={showToast} userEmail={appUser.email} currentUserRole={currentUserRole} aiLoading={aiLoading} />)}
          {activeTab === 'scorelog' && hasAccess('scorelog') && (<ScoreLogView scoreLogs={getScoreLogs()} />)}
          {activeTab === 'actionlog' && hasAccess('actionlog') && (<ActionLogView actionLogs={actionLogs} />)}
          {activeTab === 'rules' && hasAccess('rules') && (<RulesView rules={rules} onSaveRule={handleSaveRule} onDeleteRule={handleDeleteRule} isReadOnly={isReadOnly('rules')} />)}
          {activeTab === 'team' && hasAccess('team') && (<TeamView members={members} onAddMember={handleAddMember} onDeleteMember={handleDeleteMember} onEditMember={handleEditMember} roles={roles} />)}
          {activeTab === 'assign_menu' && hasAccess('assign_menu') && (<AssignMenuView roles={roles} onSaveRole={handleSaveRole} currentRole={currentUserRole} />)}
          
          {!hasAccess(activeTab) && (
              <div className="flex flex-col items-center justify-center h-full text-gray-400 py-20">
                  <Lock size={48} className="mb-4 text-gray-300" />
                  <p>คุณไม่มีสิทธิ์เข้าถึงหน้านี้</p>
                  <button onClick={() => setActiveTab('dashboard')} className="mt-4 text-blue-600 hover:underline">กลับหน้าหลัก</button>
              </div>
          )}
        </div>
      </main>

      {/* Adjust Score Modal */}
      {isAdjustModalOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black bg-opacity-50 p-4 backdrop-blur-sm">
           <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6 animate-fade-in">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2"><Gavel className="text-blue-600"/> ปรับคะแนนทีมงาน</h3>
              <form onSubmit={handleAdjustSubmit}>
                 <div className="space-y-4">
                    <div><label className="block text-xs font-bold text-gray-500 mb-1">วันที่</label><input type="date" className="w-full border rounded px-3 py-2" value={adjustData.date} onChange={e => setAdjustData({...adjustData, date: e.target.value})} /></div>
                    <div><label className="block text-xs font-bold text-gray-500 mb-1">พนักงาน</label><select required className="w-full border rounded px-3 py-2 bg-white" value={adjustData.memberId} onChange={e => setAdjustData({...adjustData, memberId: e.target.value})}><option value="">เลือกพนักงาน...</option>{members.map(m => <option key={m.id} value={m.id}>{m.name} ({m.dept})</option>)}</select></div>
                    <div><label className="block text-xs font-bold text-gray-500 mb-1">ระเบียบ/หัวข้อ</label><select required className="w-full border rounded px-3 py-2 bg-white" value={adjustData.ruleId} onChange={e => setAdjustData({...adjustData, ruleId: e.target.value})}><option value="">เลือกหัวข้อ...</option>{rules.map(r => <option key={r.id} value={r.id}>{r.topic} ({r.score > 0 ? '+' : ''}{r.score})</option>)}</select></div>
                 </div>
                 <div className="flex gap-2 justify-end pt-4"><button type="button" onClick={() => setIsAdjustModalOpen(false)} className="px-4 py-2 text-gray-500 hover:bg-gray-100 rounded">ยกเลิก</button><button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">บันทึก</button></div>
              </form>
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
                 
                 <div className="space-y-4">
                 </div>
                 
                 <div className="mt-8 pt-4 border-t flex justify-end">
                     <button onClick={() => setIsProfileModalOpen(false)} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm">ปิด</button>
                 </div>
             </div>
          </div>
      )}

      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t flex justify-around p-2 pb-safe z-50 text-[10px] shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
        {['dashboard', 'inbound', 'outbound', 'problems'].filter(id => hasAccess(id)).map(id => (
            <button key={id} onClick={() => setActiveTab(id)} className={`flex flex-col items-center gap-1 p-2 rounded-lg ${activeTab === id ? 'text-blue-600 bg-blue-50' : 'text-gray-400'}`}>
                {id === 'dashboard' && <LayoutDashboard size={20} />}
                {id === 'inbound' && <ArrowDownToLine size={20} />}
                {id === 'outbound' && <ArrowUpFromLine size={20} />}
                {id === 'problems' && <AlertTriangle size={20} />}
                <span>{id === 'dashboard' ? 'Main' : id === 'inbound' ? 'In' : id === 'outbound' ? 'Out' : 'Log'}</span>
            </button>
        ))}
      </div>
    </div>
  );
}