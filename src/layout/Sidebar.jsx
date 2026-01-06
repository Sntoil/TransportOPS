import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Building2, 
  ClipboardList, 
  AlertTriangle, 
  ListTodo, 
  History, 
  BookOpen, 
  LogOut,
  UserCircle 
} from 'lucide-react';

export default function Sidebar({ activeTab, setActiveTab, user, role, onLogout }) {
  // ✅ FIX 1: ป้องกัน Role เป็นค่าว่าง
  const safeRole = role ? role.toLowerCase() : 'staff';
  
  // ✅ FIX 2: ป้องกัน User เป็นค่าว่าง
  const safeUser = user || {};
  const userName = safeUser.displayName || safeUser.email || 'Guest';
  const userEmail = safeUser.email || 'No Email';

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'team', label: 'จัดการทีมงาน', icon: Users },
    { id: 'dept', label: 'ภาพรวมแผนก', icon: Building2 },
    { id: 'assign', label: 'มอบหมายงาน', icon: ListTodo },
    { id: 'scores', label: 'บันทึกคะแนน', icon: ClipboardList },
    { id: 'problems', label: 'แจ้งปัญหา', icon: AlertTriangle },
    { id: 'rules', label: 'กฎระเบียบ', icon: BookOpen },
    { id: 'action_logs', label: 'ประวัติการแก้ไข', icon: History, role: ['dgm', 'dm', 'admin'] } // ซ่อนเมนูนี้ถ้าไม่ใช่ admin
  ];

  return (
    <div className="flex flex-col h-full bg-slate-900 text-white shadow-xl">
      {/* Header */}
      <div className="p-6 border-b border-slate-800">
        <h1 className="text-xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
          TransportOps
        </h1>
        <p className="text-xs text-slate-500 mt-1">System v1.0.2</p>
      </div>

      {/* User Info */}
      <div className="p-6 bg-slate-800/50">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-slate-700 rounded-full">
            <UserCircle size={24} className="text-slate-300" />
          </div>
          <div className="overflow-hidden">
            <p className="text-sm font-medium text-white truncate">{userName}</p>
            <p className="text-xs text-slate-400 truncate">{userEmail}</p>
            <span className="inline-block mt-1 px-2 py-0.5 rounded text-[10px] font-bold bg-blue-900 text-blue-200 uppercase tracking-wide border border-blue-800">
              {safeRole}
            </span>
          </div>
        </div>
      </div>

      {/* Menu List */}
      <div className="flex-1 overflow-y-auto py-4">
        <nav className="space-y-1 px-3">
          {menuItems.map((item) => {
            // ✅ FIX 3: เช็คสิทธิ์การแสดงเมนูแบบปลอดภัย
            if (item.role && !item.role.includes(safeRole)) {
              return null;
            }

            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 group
                  ${activeTab === item.id 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50' 
                    : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                  }`}
              >
                <item.icon 
                  size={18} 
                  className={`transition-colors ${activeTab === item.id ? 'text-white' : 'text-slate-500 group-hover:text-white'}`} 
                />
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Logout */}
      <div className="p-4 border-t border-slate-800">
        <button
          onClick={onLogout}
          className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-slate-400 hover:bg-red-500/10 hover:text-red-400 transition-colors border border-transparent hover:border-red-500/20"
        >
          <LogOut size={18} />
          ออกจากระบบ
        </button>
      </div>
    </div>
  );
}