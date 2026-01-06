import React from 'react';
import { Users, CheckCircle2, AlertTriangle, Clock, Activity } from 'lucide-react';

const StatCard = ({ icon: Icon, label, value, color, subtext }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start justify-between hover:shadow-md transition-shadow">
    <div>
      <p className="text-gray-500 text-sm font-medium mb-1">{label}</p>
      <h3 className="text-2xl font-bold text-gray-800">{value}</h3>
      {subtext && <p className={`text-xs mt-2 ${color}`}>{subtext}</p>}
    </div>
    <div className={`p-3 rounded-lg ${color} bg-opacity-10`}>
      <Icon className={color} size={24} />
    </div>
  </div>
);

export default function DashboardView({ members, tasks, logs }) {
  // ✅ กันตายชั้นที่ 1: ถ้า props ไม่มา ให้เป็น array ว่าง
  const safeMembers = members || [];
  const safeTasks = tasks || [];
  const safeLogs = logs || [];

  const totalMembers = safeMembers.length;
  // ✅ กันตายชั้นที่ 2: ใช้ ?.completed
  const totalTasks = safeTasks.length;
  const completedTasks = safeTasks.filter(t => t?.completed).length; 
  const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
  const pendingIssues = safeLogs.filter(l => l?.status === 'pending').length;
  const solvedIssues = safeLogs.filter(l => l?.status === 'solved').length;
  const recentTasks = safeTasks.slice(0, 5); 

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center"><h2 className="text-2xl font-bold text-gray-800">Dashboard</h2></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard icon={Users} label="พนักงาน" value={totalMembers} color="text-blue-600" subtext="Active" />
        <StatCard icon={CheckCircle2} label="งานสำเร็จ" value={`${completedTasks}/${totalTasks}`} color="text-green-600" subtext={`${completionRate}%`} />
        <StatCard icon={AlertTriangle} label="ปัญหาคงค้าง" value={pendingIssues} color="text-red-600" subtext={`แก้แล้ว ${solvedIssues}`} />
        <StatCard icon={Activity} label="ประสิทธิภาพ" value={`${completionRate}%`} color="text-indigo-600" subtext="ภาพรวม" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2"><Clock size={20} className="text-orange-500"/> งานล่าสุด</h3>
          <div className="space-y-3">
            {recentTasks.length > 0 ? recentTasks.map((t, i) => (
                <div key={t?.id || i} className="flex justify-between p-3 bg-gray-50 rounded-lg">
                  <div><p className="font-medium text-sm">{t?.name}</p><p className="text-xs text-gray-500">{t?.area}</p></div>
                  <span className={`text-xs px-2 py-1 rounded-full ${t?.completed ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>{t?.completed ? 'เสร็จ' : 'กำลังทำ'}</span>
                </div>
            )) : <p className="text-center text-gray-400">ไม่มีข้อมูล</p>}
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
           <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2"><AlertTriangle size={20} className="text-red-500"/> ปัญหาล่าสุด</h3>
           <div className="space-y-3">
            {safeLogs.slice(0, 5).map((l, i) => (
              <div key={l?.id || i} className="p-3 border-l-4 border-red-400 bg-red-50 rounded-r-lg">
                 <p className="text-sm font-bold">{l?.topic}</p><p className="text-xs text-gray-600 truncate">{l?.detail}</p>
              </div>
            ))}
            {safeLogs.length === 0 && <p className="text-center text-gray-400">ไม่มีข้อมูล</p>}
          </div>
        </div>
      </div>
    </div>
  );
}