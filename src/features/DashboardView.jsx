import React from 'react';
import { 
  Users, CheckCircle2, AlertTriangle, Activity, 
  TrendingUp, Clock, CalendarDays, MapPin 
} from 'lucide-react';

// Card Component (สวยงาม + ทันสมัย)
const StatCard = ({ title, value, subtext, icon: Icon, colorClass, bgClass }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
    <div className="flex justify-between items-start">
      <div>
        <p className="text-gray-500 text-sm font-medium mb-1">{title}</p>
        <h3 className="text-3xl font-bold text-gray-800">{value}</h3>
      </div>
      <div className={`p-3 rounded-xl ${bgClass} ${colorClass}`}>
        <Icon size={24} />
      </div>
    </div>
    {subtext && (
      <div className="mt-4 flex items-center gap-1 text-xs font-medium text-gray-400">
        <TrendingUp size={14} className="text-green-500" />
        <span>{subtext}</span>
      </div>
    )}
  </div>
);

export default function DashboardView({ members, tasks, logs }) {
  // ✅ Safety Guard: กันตาย 100%
  const safeMembers = members || [];
  const safeTasks = tasks || [];
  const safeLogs = logs || [];

  // 1. คำนวณสถิติ
  const totalMembers = safeMembers.length;
  const totalTasks = safeTasks.length;
  const completedTasks = safeTasks.filter(t => t?.completed).length;
  const pendingTasks = totalTasks - completedTasks;
  
  const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
  
  const pendingIssues = safeLogs.filter(l => l?.status === 'pending').length;
  const solvedIssues = safeLogs.filter(l => l?.status === 'solved').length;

  // 2. ดึงข้อมูลล่าสุด (5 รายการ)
  const recentTasks = safeTasks.slice(0, 5); // สามารถ sort เพิ่มเติมได้ถ้าต้องการ
  const recentProblems = safeLogs.slice(0, 5);

  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
           <h2 className="text-3xl font-bold text-slate-800">Overview Dashboard</h2>
           <p className="text-slate-500 mt-1">สรุปภาพรวมการดำเนินงานประจำวัน</p>
        </div>
        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200 text-sm text-gray-600">
           <CalendarDays size={16} />
           {new Date().toLocaleDateString('th-TH', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="พนักงานทั้งหมด" 
          value={totalMembers} 
          icon={Users} 
          colorClass="text-blue-600" 
          bgClass="bg-blue-50"
          subtext="Active Members"
        />
        <StatCard 
          title="งานเสร็จสิ้น" 
          value={`${completedTasks}/${totalTasks}`} 
          icon={CheckCircle2} 
          colorClass="text-green-600" 
          bgClass="bg-green-50"
          subtext={`Success Rate ${completionRate}%`}
        />
        <StatCard 
          title="ปัญหาที่รอแก้ไข" 
          value={pendingIssues} 
          icon={AlertTriangle} 
          colorClass="text-red-600" 
          bgClass="bg-red-50"
          subtext={`Solved: ${solvedIssues}`}
        />
        <StatCard 
          title="ประสิทธิภาพรวม" 
          value={`${completionRate}%`} 
          icon={Activity} 
          colorClass="text-purple-600" 
          bgClass="bg-purple-50"
          subtext="Overall Performance"
        />
      </div>

      {/* Content Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Recent Tasks (2 ส่วน) */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-50 flex justify-between items-center">
             <h3 className="font-bold text-lg text-slate-800 flex items-center gap-2">
                <Clock className="text-blue-500" size={20}/> งานล่าสุด
             </h3>
             <span className="text-xs font-bold px-2 py-1 bg-blue-50 text-blue-600 rounded-lg">{recentTasks.length} รายการ</span>
          </div>
          <div className="p-0">
             {recentTasks.length > 0 ? (
                <table className="w-full text-left border-collapse">
                   <thead className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
                      <tr>
                         <th className="p-4 font-semibold">ชื่องาน</th>
                         <th className="p-4 font-semibold">พื้นที่/แผนก</th>
                         <th className="p-4 font-semibold text-center">สถานะ</th>
                      </tr>
                   </thead>
                   <tbody className="divide-y divide-gray-50">
                      {recentTasks.map((task, idx) => (
                         <tr key={task?.id || idx} className="hover:bg-slate-50/50 transition-colors">
                            <td className="p-4 text-sm font-medium text-slate-700">{task?.name || 'Unknown'}</td>
                            <td className="p-4 text-sm text-slate-500 flex items-center gap-1">
                                <MapPin size={14} className="text-gray-300"/> {task?.area || '-'}
                            </td>
                            <td className="p-4 text-center">
                               <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold ${task?.completed ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                                  {task?.completed ? 'Completed' : 'Pending'}
                               </span>
                            </td>
                         </tr>
                      ))}
                   </tbody>
                </table>
             ) : (
                <div className="p-10 text-center text-gray-400">ไม่มีข้อมูลงานล่าสุด</div>
             )}
          </div>
        </div>

        {/* Right Column: Recent Problems (1 ส่วน) */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
           <div className="p-6 border-b border-gray-50">
             <h3 className="font-bold text-lg text-slate-800 flex items-center gap-2">
                <AlertTriangle className="text-red-500" size={20}/> ปัญหาล่าสุด
             </h3>
           </div>
           <div className="p-4 space-y-3">
              {recentProblems.length > 0 ? recentProblems.map((log, idx) => (
                 <div key={log?.id || idx} className="p-4 rounded-xl bg-red-50/50 border border-red-100 hover:border-red-200 transition-colors cursor-pointer group">
                    <div className="flex justify-between items-start mb-2">
                       <span className="text-[10px] font-bold uppercase tracking-wider text-red-600 bg-red-100 px-2 py-0.5 rounded">{log?.dept || 'General'}</span>
                       <span className="text-[10px] text-gray-400">{log?.date}</span>
                    </div>
                    <h4 className="text-sm font-bold text-gray-800 mb-1 group-hover:text-red-700 transition-colors">{log?.topic}</h4>
                    <p className="text-xs text-gray-500 line-clamp-2">{log?.detail}</p>
                 </div>
              )) : (
                 <div className="p-10 text-center text-gray-400">ไม่มีรายการแจ้งปัญหา</div>
              )}
           </div>
        </div>

      </div>
    </div>
  );
}