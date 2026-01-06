import React, { useState } from 'react';
import { BookOpen, Plus, Trash2, ShieldAlert, Gavel } from 'lucide-react';

export default function RulesView({ rules, onSave, onDelete, currentUserRole }) {
  const safeRules = rules || [];
  const [newRule, setNewRule] = useState({ condition: '', points: -5 });

  const handleAdd = (e) => {
      e.preventDefault();
      onSave(newRule);
      setNewRule({ condition: '', points: -5 });
  };

  const canManage = ['dgm', 'dm', 'admin'].includes(currentUserRole);

  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2"><BookOpen className="text-blue-600"/> กฎระเบียบและบทลงโทษ</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         {/* List */}
         <div className="lg:col-span-2 space-y-4">
             {safeRules.length > 0 ? safeRules.map((rule, idx) => (
                 <div key={rule.id || idx} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center hover:shadow-md transition group">
                     <div className="flex items-start gap-3">
                         <div className={`p-2 rounded-lg ${rule.points > 0 ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                             {rule.points > 0 ? <Gavel size={20}/> : <ShieldAlert size={20}/>}
                         </div>
                         <div>
                             <p className="font-bold text-slate-800">{rule.condition}</p>
                             <p className="text-xs text-slate-500">ผลกระทบ: <span className={rule.points > 0 ? 'text-green-600 font-bold' : 'text-red-600 font-bold'}>{rule.points > 0 ? '+' : ''}{rule.points} คะแนน</span></p>
                         </div>
                     </div>
                     {canManage && (
                         <button onClick={() => onDelete(rule.id)} className="p-2 text-gray-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition"><Trash2 size={18}/></button>
                     )}
                 </div>
             )) : <div className="text-center p-10 text-gray-400 bg-white rounded-xl border border-dashed">ยังไม่มีกฎระเบียบ</div>}
         </div>

         {/* Add Form */}
         {canManage && (
             <div className="bg-slate-800 text-white p-6 rounded-2xl h-fit shadow-xl">
                 <h3 className="font-bold mb-4 flex items-center gap-2"><Plus size={18}/> เพิ่มกฎระเบียบใหม่</h3>
                 <form onSubmit={handleAdd} className="space-y-4">
                     <div>
                         <label className="block text-xs font-bold text-slate-400 mb-1">เงื่อนไข/การกระทำ</label>
                         <textarea required rows="3" className="w-full bg-slate-700 border-none rounded-lg px-3 py-2 text-white placeholder-slate-500" placeholder="เช่น มาสายเกิน 15 นาที..." value={newRule.condition} onChange={e=>setNewRule({...newRule, condition:e.target.value})}></textarea>
                     </div>
                     <div>
                         <label className="block text-xs font-bold text-slate-400 mb-1">คะแนน (ใส่ลบเพื่อตัดแต้ม)</label>
                         <input required type="number" className="w-full bg-slate-700 border-none rounded-lg px-3 py-2 text-white placeholder-slate-500" placeholder="-10" value={newRule.points} onChange={e=>setNewRule({...newRule, points:parseInt(e.target.value)})}/>
                     </div>
                     <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 py-2.5 rounded-lg font-bold transition shadow-lg shadow-blue-900/50">บันทึกกฎระเบียบ</button>
                 </form>
             </div>
         )}
      </div>
    </div>
  );
}