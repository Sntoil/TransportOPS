import React from 'react';
import { 
  Users, CheckCircle, AlertTriangle, Activity, 
  TrendingUp, Calendar, ArrowRight, BarChart3 
} from 'lucide-react';

export default function DashboardView({ members, tasks, logs }) {
  // ✅ 1. Safety Guard: ถ้าข้อมูลยังไม่โหลด ให้แสดง Loading หรือค่าว่างแทน
  const safeMembers = members || [];
  const safeTasks = tasks || [];
  const safeLogs = logs || [];

  // คำนวณ Stats (ใช้ safe variables ทั้งหมด)
  const totalTasks = safeTasks.length;
  const completedTasks = safeTasks.filter(t => t.completed || t.status === 'done').length;
  const pendingTasks = totalTasks - completedTasks;
  const progress = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

  const activeIssues = safeLogs.filter(l => l.status === 'pending').length;
  const resolvedIssues = safeLogs.filter(l => l.status === 'solved').length;

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Transport Overview</h2>
          <p className="text-sm text-gray-500">ภาพรวมการดำเนินงานวันนี้</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500 bg-white px-3 py-1.5 rounded-lg border border-gray-200 shadow-sm">
           <Calendar size={14} />
           {new Date().toLocaleDateString('th-TH', { dateStyle: 'long' })}
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          title="งานทั้งหมด" 
          value={totalTasks} 
          icon={<CheckCircle className="text-blue-600" size={24}/>} 
          trend="+12% จากเมื่อวาน"
          color="bg-blue-50 text-blue-700"
        />
        <StatCard 
          title="งานคงค้าง" 
          value={pendingTasks} 
          icon={<Activity className="text-orange-600" size={24}/>} 
          trend="ต้องเร่งดำเนินการ"
          color="bg-orange-50 text-orange-700"
        />
        <StatCard 
          title="ปัญหาที่แจ้ง" 
          value={activeIssues} 
          icon={<AlertTriangle className="text-red-600" size={24}/>} 
          trend={`${resolvedIssues} แก้ไขแล้ว`}
          color="bg-red-50 text-red-700"
        />
        <StatCard 
          title="พนักงานเข้างาน" 
          value={`${safeMembers.length} คน`} 
          icon={<Users className="text-purple-600" size={24}/>} 
          trend="Active Now"
          color="bg-purple-50 text-purple-700"
        />
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Progress Chart Area */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-lg text-slate-800 flex items-center gap-2">
              <BarChart3 className="text-gray-400" size={20}/> ความคืบหน้างานประจำวัน
            </h3>
          </div>
          
          <div className="flex items-center gap-6 mb-8">
            <div className="relative w-32 h-32 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="64" cy="64" r="56" stroke="#f1f5f9" strokeWidth="12" fill="transparent" />
                <circle cx="64" cy="64" r="56" stroke="#3b82f6" strokeWidth="12" fill="transparent" 
                  strokeDasharray={351.86} 
                  strokeDashoffset={351.86 - (351.86 * progress) / 100} 
                  className="transition-all duration-1000 ease-out"
                />
              </svg>
              <div className="absolute text-center">
                <span className="text-3xl font-bold text-slate-800">{progress}%</span>
                <p className="text-[10px] text-gray-400 uppercase">Completed</p>
              </div>
            </div>
            <div className="flex-1 space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-500">Inbound</span>
                  <span className="font-bold text-slate-700">
                    {safeTasks.filter(t => t.area === 'Inbound' && t.completed).length} / {safeTasks.filter(t => t.area === 'Inbound').length}
                  </span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                  <div className="bg-blue-500 h-full rounded-full" style={{ width: `${calculatePercent(safeTasks, 'Inbound')}%` }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-500">Outbound</span>
                  <span className="font-bold text-slate-700">
                    {safeTasks.filter(t => t.area === 'Outbound' && t.completed).length} / {safeTasks.filter(t => t.area === 'Outbound').length}
                  </span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                  <div className="bg-green-500 h-full rounded-full" style={{ width: `${calculatePercent(safeTasks, 'Outbound')}%` }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
          <h3 className="font-bold text-lg text-slate-800 mb-4 flex items-center gap-2">
            <TrendingUp className="text-gray-400" size={20}/> ปัญหาล่าสุด
          </h3>
          <div className="flex-1 overflow-y-auto max-h-[300px] space-y-3 pr-2">
            {safeLogs.length > 0 ? safeLogs.slice(0, 5).map((log, i) => (
              <div key={log.id || i} className="p-3 bg-slate-50 rounded-lg border border-slate-100 text-sm hover:border-red-200 transition-colors cursor-pointer group">
                <div className="flex justify-between items-start mb-1">
                  <span className={`px-2 py-0.5 text-[10px] font-bold rounded uppercase ${
                    log.priority === 'High' ? 'bg-red-100 text-red-600' : 'bg-gray-200 text-gray-600'
                  }`}>{log.priority || 'Normal'}</span>
                  <span className="text-[10px] text-gray-400">{new Date(log.date?.seconds * 1000 || Date.now()).toLocaleDateString()}</span>
                </div>
                <p className="font-medium text-slate-700 line-clamp-2 group-hover:text-blue-600 transition">{log.topic}</p>
                <div className="mt-2 pt-2 border-t border-slate-100 flex items-center gap-1 text-[11px] text-gray-400">
                   <Users size={12}/> {log.reporter || 'Unknown'}
                </div>
              </div>
            )) : (
              <div className="h-full flex flex-col items-center justify-center text-gray-300">
                <CheckCircle size={40} className="mb-2 opacity-50"/>
                <p>ไม่มีรายการแจ้งปัญหา</p>
              </div>
            )}
          </div>
          <button className="w-full mt-4 py-2 text-sm font-bold text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition flex items-center justify-center gap-1">
            ดูทั้งหมด <ArrowRight size={16}/>
          </button>
        </div>
      </div>
    </div>
  );
}

// Helper Components
function StatCard({ title, value, icon, trend, color }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition cursor-default">
      <div className="flex justify-between items-start mb-2">
        <div className={`p-2 rounded-lg ${color} bg-opacity-20`}>{icon}</div>
        <span className="text-[10px] font-medium px-2 py-1 bg-slate-50 text-slate-500 rounded-full border border-slate-100">{trend}</span>
      </div>
      <h3 className="text-2xl font-bold text-slate-800 mt-2">{value}</h3>
      <p className="text-xs text-gray-400 mt-1">{title}</p>
    </div>
  );
}

function calculatePercent(tasks, area) {
  const areaTasks = tasks.filter(t => t.area === area);
  if (areaTasks.length === 0) return 0;
  const completed = areaTasks.filter(t => t.completed).length;
  return Math.round((completed / areaTasks.length) * 100);
}