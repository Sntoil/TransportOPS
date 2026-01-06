import React from 'react';
import { Users, Package, ArrowRightLeft, Warehouse } from 'lucide-react';

export default function DepartmentView({ members, tasks, onTaskToggle }) {
  // ✅ Safety Guard
  const safeMembers = members || [];
  const safeTasks = tasks || [];

  // แยกข้อมูล
  const inboundMembers = safeMembers.filter(m => m?.dept === 'Inbound');
  const inboundTasks = safeTasks.filter(t => t?.area === 'Inbound');
  const outboundMembers = safeMembers.filter(m => m?.dept === 'Outbound');
  const outboundTasks = safeTasks.filter(t => t?.area === 'Outbound');
  const internalMembers = safeMembers.filter(m => m?.dept === 'Internal');
  const internalTasks = safeTasks.filter(t => t?.area === 'Internal');

  const renderSection = (title, team, work, color, icon) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col h-full">
      <div className={`p-4 border-b border-gray-100 ${color} bg-opacity-10 flex justify-between items-center`}>
        <div className="flex items-center gap-2">{icon}<h3 className="font-bold text-lg text-gray-800">{title}</h3></div>
        <span className="text-xs font-bold text-gray-500 bg-white px-2 py-1 rounded-full shadow-sm">{team.length} คน | {work.length} งาน</span>
      </div>
      <div className="p-4 flex-1 space-y-4">
         <div>
            <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">ทีมงาน</h4>
            <div className="flex flex-wrap gap-2">
                {team.length > 0 ? team.map((m, i) => (<span key={m?.id||i} className="text-xs px-2.5 py-1 bg-gray-50 text-gray-700 rounded border">{m?.name}</span>)) : <p className="text-xs text-gray-300">- ว่าง -</p>}
            </div>
         </div>
         <div>
            <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">งาน</h4>
            <div className="space-y-2">
                {work.length > 0 ? work.map((t, i) => (
                    <div key={t?.id||i} className="flex items-start gap-3 p-2.5 bg-gray-50 rounded-lg border">
                        <input type="checkbox" checked={t?.completed||false} onChange={() => onTaskToggle && onTaskToggle(t.id, t?.completed)} className="mt-0.5 rounded text-blue-600 cursor-pointer"/>
                        <p className={`text-sm ${t?.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}>{t?.name}</p>
                    </div>
                )) : <p className="text-xs text-center text-gray-300">- ไม่มีงาน -</p>}
            </div>
         </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center"><h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2"><Users className="text-blue-600"/> ภาพรวมแผนก</h2></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {renderSection('Inbound', inboundMembers, inboundTasks, 'bg-blue-500', <Package size={20} className="text-blue-600"/>)}
        {renderSection('Outbound', outboundMembers, outboundTasks, 'bg-green-500', <ArrowRightLeft size={20} className="text-green-600"/>)}
        {renderSection('Internal', internalMembers, internalTasks, 'bg-purple-500', <Warehouse size={20} className="text-purple-600"/>)}
      </div>
    </div>
  );
}