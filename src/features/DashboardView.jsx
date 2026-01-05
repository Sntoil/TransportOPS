import React from 'react';
import { 
  Users, 
  CheckCircle2, 
  AlertTriangle, 
  Clock, 
  Activity 
} from 'lucide-react';

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
  // ✅ Safety Guard: รับประกันว่าเป็น Array
  const safeMembers = members || [];
  const safeTasks = tasks || [];
  const safeLogs = logs || [];

  const totalMembers = safeMembers.length;
  
  // ✅ Safety Check: ใช้ ?. เพื่อป้องกัน task ที่ข้อมูลไม่ครบ
  const totalTasks = safeTasks.length;
  const completedTasks = safeTasks.filter(t => t?.completed).length; 
  
  const completionRate = totalTasks > 0 
    ? Math.round((completedTasks / totalTasks) * 100) 
    : 0;

  const pendingIssues = safeLogs.filter(l => l?.status === 'pending').length;
  const solvedIssues = safeLogs.filter(l => l?.status === 'solved').length;

  const recentTasks = safeTasks.slice(0, 5); 

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Dashboard ภาพรวม</h2>
        <span className="text-sm text-gray-500">สถานะ: พร้อมใช้งาน</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          icon={Users} label="พนักงานทั้งหมด" value={totalMembers} color="text-blue-600" subtext="Active Members" 
        />
        <StatCard 
          icon={CheckCircle2} label="งานที่สำเร็จวันนี้" value={`${completedTasks}/${totalTasks}`} color="text-green-600" subtext={`คิดเป็น ${completionRate}%`}
        />
        <StatCard 
          icon={AlertTriangle} label="ปัญหาที่รอดำเนินการ" value={pendingIssues} color="text-red-600" subtext={`แก้ไขแล้ว ${solvedIssues} รายการ`}
        />
        <StatCard 
          icon={Activity} label="ประสิทธิภาพรวม" value={`${completionRate}%`} color="text-indigo-600" subtext="เทียบกับเป้าหมาย"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Tasks */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Clock size={20} className="text-orange-500" /> 
            งานล่าสุด
          </h3>
          <div className="space-y-3">
            {recentTasks.length > 0 ? (
              recentTasks.map((task, idx) => (
                <div key={task?.id || idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${task?.completed ? 'bg-green-500' : 'bg-orange-500'}`}></div>
                    <div>
                      <p className="font-medium text-sm text-gray-800">{task?.name || 'No Name'}</p>
                      <p className="text-xs text-gray-500">{task?.area || '-'}</p>
                    </div>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${task?.completed ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                    {task?.completed ? 'เสร็จแล้ว' : 'กำลังทำ'}
                  </span>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-400 py-4">ไม่มีข้อมูลงาน</p>
            )}
          </div>
        </div>

        {/* Problems */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
           <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
            <AlertTriangle size={20} className="text-red-500" /> 
            ปัญหาล่าสุด
          </h3>
          <div className="space-y-3">
            {safeLogs.slice(0, 5).map((log, idx) => (
              <div key={log?.id || idx} className="p-3 border-l-4 border-red-400 bg-red-50 rounded-r-lg">
                 <p className="text-sm font-bold text-gray-800">{log?.topic}</p>
                 <p className="text-xs text-gray-600 mt-1 truncate">{log?.detail}</p>
                 <div className="flex justify-between mt-2 text-[10px] text-gray-500">
                    <span>{log?.dept}</span>
                    <span>{log?.date}</span>
                 </div>
              </div>
            ))}
            {safeLogs.length === 0 && <p className="text-center text-gray-400 py-4">ไม่มีรายการแจ้งปัญหา</p>}
          </div>
        </div>
      </div>
    </div>
  );
}