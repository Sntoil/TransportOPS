import React from 'react';
import { Users, Package, ArrowRightLeft, Warehouse } from 'lucide-react';

export default function DepartmentView({ members, tasks, onTaskToggle }) {
  // ✅ Safety Guard
  const safeMembers = members || [];
  const safeTasks = tasks || [];

  const filterData = (deptName) => ({
      team: safeMembers.filter(m => m?.dept === deptName),
      work: safeTasks.filter(t => t?.area === deptName)
  });

  const Section = ({ title, icon, color, data }) => (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full overflow-hidden">
        <div className={`p-4 border-b border-gray-100 bg-opacity-10 ${color} flex justify-between items-center`}>
            <div className="flex items-center gap-2 text-slate-800 font-bold text-lg">{icon} {title}</div>
            <div className="text-xs font-bold bg-white px-2 py-1 rounded-full text-slate-500 shadow-sm">{data.team.length} คน | {data.work.length} งาน</div>
        </div>
        <div className="p-5 flex-1 space-y-6">
            <div>
                <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Members</h4>
                <div className="flex flex-wrap gap-2">
                    {data.team.length > 0 ? data.team.map((m,i) => (
                        <span key={m.id||i} className="px-2.5 py-1 text-xs font-medium bg-slate-50 text-slate-600 rounded-md border border-slate-100">{m.name}</span>
                    )) : <span className="text-xs text-gray-300 italic">- ไม่มีสมาชิก -</span>}
                </div>
            </div>
            <div>
                <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Tasks</h4>
                <div className="space-y-2">
                    {data.work.length > 0 ? data.work.map((t,i) => (
                        <div key={t.id||i} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100 hover:border-blue-200 transition-colors">
                            <input type="checkbox" checked={t.completed} onChange={() => onTaskToggle(t.id, t.completed)} className="mt-0.5 rounded text-blue-600 cursor-pointer"/>
                            <span className={`text-sm ${t.completed ? 'line-through text-gray-400' : 'text-slate-700'}`}>{t.name}</span>
                        </div>
                    )) : <div className="text-center text-xs text-gray-300 py-4 italic">- ไม่มีงานค้าง -</div>}
                </div>
            </div>
        </div>
    </div>
  );

  return (
    <div className="space-y-6 animate-fade-in">
       <div className="flex items-center gap-2"><h2 className="text-2xl font-bold text-slate-800">Department Overview</h2></div>
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
           <Section title="Inbound" icon={<Package className="text-blue-600"/>} color="bg-blue-500" data={filterData('Inbound')} />
           <Section title="Outbound" icon={<ArrowRightLeft className="text-green-600"/>} color="bg-green-500" data={filterData('Outbound')} />
           <Section title="Internal" icon={<Warehouse className="text-purple-600"/>} color="bg-purple-500" data={filterData('Internal')} />
       </div>
    </div>
  );
}