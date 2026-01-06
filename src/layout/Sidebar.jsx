import React from 'react';
import { LayoutDashboard, Users, Building2, ClipboardList, AlertTriangle, ListTodo, History, BookOpen, LogOut, UserCircle } from 'lucide-react';

export default function Sidebar({ activeTab, setActiveTab, user, role, onLogout, members }) {
  // Safe user data
  const safeUser = user || {};
  const userName = safeUser.displayName || safeUser.email?.split('@')[0] || 'Guest';
  const userEmail = safeUser.email || '';

  // 🔍 FIX IMPORTANT: ค้นหาตำแหน่งงานจริงจาก Database
  // ถ้าเจอใน Members ให้ใช้ Position ถ้าไม่เจอให้ใช้ Role
  const currentMember = members?.find(m => m.email === userEmail);
  const displayPosition = currentMember?.position || currentMember?.role || role || 'Staff';

  // แปลง Role ระบบให้เป็นตัวพิมพ์เล็กเพื่อเช็คสิทธิ์
  const systemRole = role ? role.toLowerCase() : 'staff';

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'team', label: 'จัดการทีมงาน', icon: Users },
    { id: 'dept', label: 'ภาพรวมแผนก', icon: Building2 },
    { id: 'assign', label: 'มอบหมายงาน', icon: ListTodo },
    { id: 'scores', label: 'บันทึกคะแนน', icon: ClipboardList },
    { id: 'problems', label: 'แจ้งปัญหา', icon: AlertTriangle },
    { id: 'rules', label: 'กฎระเบียบ', icon: BookOpen },
    { id: 'action_logs', label: 'ประวัติการแก้ไข', icon: History, role: ['dgm', 'dm', 'admin'] }
  ];

  return (
    <div className="flex flex-col h-full bg-slate-900 text-white shadow-xl">
      <div className="p-6 border-b border-slate-800">
        <h1 className="text-xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">TransportOps</h1>
        <p className="text-xs text-slate-500 mt-1">Version 2.0 (Unlocked)</p>
      </div>

      <div className="p-6 bg-slate-800/50">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-slate-700 rounded-full">
            <UserCircle size={24} className="text-slate-300" />
          </div>
          <div className="overflow-hidden">
            <p className="text-sm font-medium text-white truncate">{userName}</p>
            {/* ✅ แสดงตำแหน่งงานจริงๆ ตรงนี้ */}
            <span className="inline-block mt-1 px-2 py-0.5 rounded text-[10px] font-bold bg-blue-900 text-blue-200 uppercase tracking-wide border border-blue-800">
              {displayPosition}
            </span>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto py-4">
        <nav className="space-y-1 px-3">
          {menuItems.map((item) => {
            if (item.role && !item.role.includes(systemRole)) return null;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 group ${activeTab === item.id ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}
              >
                <item.icon size={18} className={`transition-colors ${activeTab === item.id ? 'text-white' : 'text-slate-500 group-hover:text-white'}`} />
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>

      <div className="p-4 border-t border-slate-800">
        <button onClick={onLogout} className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-slate-400 hover:bg-red-500/10 hover:text-red-400 transition border border-transparent hover:border-red-500/20">
          <LogOut size={18} /> ออกจากระบบ
        </button>
      </div>
    </div>
  );
}