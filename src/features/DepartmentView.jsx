import React from 'react';
import { Users } from 'lucide-react';

export default function DepartmentView({ members, tasks, onTaskToggle }) {
  // ✅ Safety Guard
  const safeMembers = members || [];
  const safeTasks = tasks || [];

  const departments = ['Inbound', 'Outbound', 'Internal'];

  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
        <Users className="text-blue-600" /> 
        ภาพรวมแผนก
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {departments.map(dept => {
          // ✅ Safety Check: ใส่ ?. เพื่อป้องกันค่าว่าง
          const deptMembers = safeMembers.filter(m => m?.dept === dept);
          const deptTasks = safeTasks.filter(t => t?.area === dept);

          return (
            <div key={dept} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col">
              <div className="bg-slate-50 p-4 border-b border-gray-100">
                <h3 className="font-bold text-lg text-gray-700">{dept}</h3>
                <span className="text-xs text-gray-500">{deptMembers.length} คน | {deptTasks.length} งาน</span>
              </div>
              
              <div className="p-4 flex-1 space-y-3">
                 <div className="mb-4">
                    <h4 className="text-xs font-bold text-gray-400 uppercase mb-2">ทีมงาน</h4>
                    <div className="flex flex-wrap gap-2">
                        {deptMembers.length > 0 ? (
                            deptMembers.map((m, idx) => (
                                <span key={m?.id || idx} className="text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded-md">
                                    {m?.name || 'Unknown'}
                                </span>
                            ))
                        ) : <p className="text-xs text-gray-300">- ว่าง -</p>}
                    </div>
                 </div>

                 <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase mb-2">สถานะงาน</h4>
                    <div className="space-y-2">
                        {deptTasks.length > 0 ? (
                            deptTasks.map((t, idx) => (
                                <div key={t?.id || idx} className="flex items-center justify-between text-sm p-2 bg-gray-50 rounded border border-gray-100">
                                    <span className={t?.completed ? 'line-through text-gray-400' : 'text-gray-700'}>
                                        {t?.name || 'Task'}
                                    </span>
                                    <input 
                                        type="checkbox" 
                                        checked={t?.completed || false} 
                                        onChange={() => onTaskToggle(t.id, t?.completed)}
                                        className="rounded text-blue-600 focus:ring-blue-500 cursor-pointer"
                                    />
                                </div>
                            ))
                        ) : <p className="text-xs text-gray-300">- ไม่มีงาน -</p>}
                    </div>
                 </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}