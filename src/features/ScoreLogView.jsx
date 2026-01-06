import React, { useState } from 'react';
import { ClipboardList, Star, History, Trash2, Trophy, TrendingUp, TrendingDown } from 'lucide-react';

export default function ScoreLogView({ members, manualScores, rules, onAddScore, onDeleteScore, currentUserRole }) {
  const safeMembers = members || [];
  const safeScores = manualScores || [];
  const safeRules = rules || [];
  
  const [selectedMember, setSelectedMember] = useState('');
  const [selectedRule, setSelectedRule] = useState('');
  const [customScore, setCustomScore] = useState('');
  const [note, setNote] = useState('');

  // 📊 Feature: คำนวณคะแนนรวมรายคน
  const memberScores = safeMembers.map(member => {
      const total = safeScores
        .filter(s => s.memberId === member.id)
        .reduce((sum, s) => sum + (parseInt(s.points) || 0), 0);
      return { ...member, totalScore: total };
  }).sort((a, b) => b.totalScore - a.totalScore); // เรียงจากมากไปน้อย

  const handleSubmit = (e) => {
    e.preventDefault();
    const ruleItem = safeRules.find(r => r.id === selectedRule);
    const scoreVal = ruleItem ? parseInt(ruleItem.points) : parseInt(customScore);
    const reason = ruleItem ? ruleItem.condition : (note || 'Custom Score');

    if (!selectedMember || isNaN(scoreVal)) return alert('กรุณาระบุข้อมูลให้ครบถ้วน');

    onAddScore({
        memberId: selectedMember,
        points: scoreVal,
        reason: reason,
        date: new Date().toISOString().split('T')[0]
    });
    
    setCustomScore(''); setNote(''); // Reset form
  };

  return (
    <div className="space-y-6 animate-fade-in">
       
       {/* Summary Cards */}
       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-100 flex items-center gap-3">
              <div className="p-3 bg-yellow-100 rounded-full text-yellow-600"><Trophy size={24}/></div>
              <div>
                  <p className="text-xs text-yellow-700 font-bold uppercase">Top Performer</p>
                  <p className="font-bold text-slate-800">{memberScores[0]?.name || '-'}</p>
                  <p className="text-xs text-slate-500">{memberScores[0]?.totalScore || 0} คะแนน</p>
              </div>
          </div>
          <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 flex items-center gap-3">
              <div className="p-3 bg-blue-100 rounded-full text-blue-600"><TrendingUp size={24}/></div>
              <div>
                  <p className="text-xs text-blue-700 font-bold uppercase">Average Score</p>
                  <p className="font-bold text-slate-800">
                     {memberScores.length > 0 ? Math.round(memberScores.reduce((a,b)=>a+b.totalScore,0)/memberScores.length) : 0} คะแนน
                  </p>
              </div>
          </div>
          <div className="bg-red-50 p-4 rounded-xl border border-red-100 flex items-center gap-3">
              <div className="p-3 bg-red-100 rounded-full text-red-600"><TrendingDown size={24}/></div>
              <div>
                  <p className="text-xs text-red-700 font-bold uppercase">Needs Improvement</p>
                  <p className="font-bold text-slate-800">{memberScores[memberScores.length-1]?.name || '-'}</p>
                  <p className="text-xs text-slate-500">{memberScores[memberScores.length-1]?.totalScore || 0} คะแนน</p>
              </div>
          </div>
       </div>

       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-fit">
              <h3 className="font-bold text-slate-700 mb-4 flex items-center gap-2"><Star size={18} className="text-yellow-500"/> ให้คะแนน</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                      <label className="block text-xs font-bold text-gray-500 mb-1">พนักงาน</label>
                      <select required className="w-full border rounded-lg px-3 py-2 bg-slate-50" value={selectedMember} onChange={e=>setSelectedMember(e.target.value)}>
                          <option value="">-- เลือกพนักงาน --</option>
                          {safeMembers.map(m => <option key={m.id} value={m.id}>{m.name}</option>)}
                      </select>
                  </div>
                  <div>
                      <label className="block text-xs font-bold text-gray-500 mb-1">เลือกตามกฎ</label>
                      <select className="w-full border rounded-lg px-3 py-2" value={selectedRule} onChange={e=>setSelectedRule(e.target.value)}>
                          <option value="">-- กำหนดเอง --</option>
                          {safeRules.map(r => <option key={r.id} value={r.id}>{r.condition} ({r.points})</option>)}
                      </select>
                  </div>
                  {!selectedRule && (
                      <div className="grid grid-cols-2 gap-4">
                          <input type="number" placeholder="คะแนน (+/-)" className="w-full border rounded-lg px-3 py-2" value={customScore} onChange={e=>setCustomScore(e.target.value)}/>
                          <input type="text" placeholder="เหตุผล" className="w-full border rounded-lg px-3 py-2" value={note} onChange={e=>setNote(e.target.value)}/>
                      </div>
                  )}
                  <button type="submit" className="w-full bg-slate-800 text-white py-2.5 rounded-lg hover:bg-slate-900 font-bold shadow-lg">บันทึก</button>
              </form>
          </div>

          {/* History & Scoreboard */}
          <div className="lg:col-span-2 space-y-6">
              {/* Scoreboard Table */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                 <div className="p-4 border-b bg-slate-50/50"><h3 className="font-bold text-slate-700">อันดับคะแนนรวม</h3></div>
                 <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                       <thead className="bg-white text-gray-500 border-b">
                          <tr><th className="p-3">อันดับ</th><th className="p-3">ชื่อ</th><th className="p-3">แผนก</th><th className="p-3 text-right">คะแนนรวม</th></tr>
                       </thead>
                       <tbody className="divide-y">
                          {memberScores.slice(0, 5).map((m, i) => (
                             <tr key={m.id} className="hover:bg-slate-50">
                                <td className="p-3 pl-5 font-bold text-blue-600">#{i+1}</td>
                                <td className="p-3 font-medium">{m.name}</td>
                                <td className="p-3 text-gray-500 text-xs">{m.dept}</td>
                                <td className={`p-3 text-right font-bold ${m.totalScore >= 0 ? 'text-green-600' : 'text-red-600'}`}>{m.totalScore}</td>
                             </tr>
                          ))}
                       </tbody>
                    </table>
                 </div>
              </div>

              {/* Recent Logs */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="p-4 border-b bg-slate-50/50 flex justify-between">
                     <h3 className="font-bold text-slate-700 flex items-center gap-2"><History size={16}/> รายการล่าสุด</h3>
                  </div>
                  <div className="max-h-[300px] overflow-y-auto">
                      {safeScores.length > 0 ? safeScores.slice(0, 10).map((score) => (
                          <div key={score.id} className="p-3 border-b border-gray-50 flex justify-between items-center hover:bg-slate-50">
                              <div>
                                  <p className="font-bold text-sm text-slate-800">{safeMembers.find(m=>m.id===score.memberId)?.name || 'Unknown'}</p>
                                  <p className="text-xs text-gray-500">{score.reason}</p>
                              </div>
                              <div className="text-right">
                                  <span className={`font-bold ${score.points > 0 ? 'text-green-600' : 'text-red-600'}`}>{score.points > 0 ? '+' : ''}{score.points}</span>
                                  <p className="text-[10px] text-gray-400">{score.timestamp ? new Date(score.timestamp.seconds*1000).toLocaleDateString('th-TH') : '-'}</p>
                                  {['dgm', 'dm', 'admin'].includes(currentUserRole) && (
                                     <button onClick={() => onDeleteScore(score.id)} className="text-[10px] text-red-400 underline ml-2">ลบ</button>
                                  )}
                              </div>
                          </div>
                      )) : <p className="text-center p-4 text-gray-400 text-sm">ยังไม่มีข้อมูล</p>}
                  </div>
              </div>
          </div>
       </div>
    </div>
  );
}