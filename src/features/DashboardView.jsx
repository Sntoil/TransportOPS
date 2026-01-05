import React, { useState } from 'react';
import { LayoutDashboard, ArrowDownToLine, ArrowUpFromLine, Building2, AlertTriangle, Users, Sparkles, Loader2, CheckCircle2, Trash2, Gavel } from 'lucide-react';
import { StatCard, MemberAvatar } from '../components/UIComponents';

export default function DashboardView({ 
  statsAll, statsIn, statsOut, statsInt, logs, members, tasks, rules, manualScores,
  setActiveTab, currentDate, selectedMonth, viewMode, setViewMode, setCurrentDate, setSelectedMonth, 
  generateDailyBriefing, onSaveManualScore, getMemberScore, setIsAdjustModalOpen, onDeleteManualScore,
  onResolveLog, askAiSolution, userEmail, currentUserRole, hasAccess, aiLoading
}) {
  const [isResolveModalOpen, setIsResolveModalOpen] = useState(false);
  const [resolveNote, setResolveNote] = useState("");
  const [selectedLogId, setSelectedLogId] = useState(null);

  const getPendingStats = (tasks, dept) => {
    const deptTasks = tasks.filter(t => t.dept === dept && t.status === 'pending');
    const contextTasks = deptTasks.filter(t => viewMode === 'daily' ? t.date === currentDate : t.date.startsWith(selectedMonth));
    return { routine: contextTasks.filter(t => t.type === 'routine').length, assigned: contextTasks.filter(t => t.type === 'assign').length };
  };

  const pendingLogs = logs.filter(l => l.status === 'pending');
  
  const handleOpenResolve = (id) => { setSelectedLogId(id); setIsResolveModalOpen(true); };

  const handleResolveSubmit = () => {
      if(selectedLogId) {
          onResolveLog(selectedLogId, resolveNote);
          setIsResolveModalOpen(false);
          setResolveNote("");
          setSelectedLogId(null);
      }
  };

  return (
    <div className="space-y-6 animate-fade-in">
       {isResolveModalOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black bg-opacity-50 p-4 backdrop-blur-sm">
           <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6 animate-fade-in">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2"><CheckCircle2 className="text-green-600"/> บันทึกการปิดงาน</h3>
              <div className="space-y-4">
                 <div><label className="block text-xs font-bold text-gray-500 mb-1">หมายเหตุ / สรุปการแก้ไข</label><textarea className="w-full border rounded px-3 py-2 h-24" value={resolveNote} onChange={e => setResolveNote(e.target.value)} placeholder="ระบุรายละเอียดการแก้ไข..."></textarea></div>
                 <div className="flex gap-2 justify-end pt-4"><button onClick={() => setIsResolveModalOpen(false)} className="px-4 py-2 text-gray-500 hover:bg-gray-100 rounded">ยกเลิก</button><button onClick={handleResolveSubmit} className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">ยืนยันปิดงาน</button></div>
              </div>
           </div>
        </div>
      )}

       <header className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-4 mb-4">
          <div><h2 className="text-xl md:text-2xl font-bold text-gray-800">ภาพรวม (Overview)</h2><p className="text-gray-500 text-sm mt-1">{viewMode === 'daily' ? `ข้อมูลประจำวันที่ ${currentDate}` : `ข้อมูลประจำเดือน ${selectedMonth}`}</p></div>
          <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-3 items-stretch sm:items-center bg-white p-2 rounded-lg shadow-sm border"><div className="flex bg-gray-100 rounded-lg p-1 self-center w-full sm:w-auto"><button onClick={() => setViewMode('daily')} className={`flex-1 sm:flex-none px-4 py-1.5 text-sm rounded-md transition font-medium ${viewMode === 'daily' ? 'bg-white shadow text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}>รายวัน</button><button onClick={() => setViewMode('monthly')} className={`flex-1 sm:flex-none px-4 py-1.5 text-sm rounded-md transition font-medium ${viewMode === 'monthly' ? 'bg-white shadow text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}>รายเดือน</button></div><div className="flex-1 min-w-[140px]">{viewMode === 'daily' ? (<input type="date" value={currentDate} onChange={(e) => setCurrentDate(e.target.value)} className="w-full border rounded-md px-3 py-1.5 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white" />) : (<input type="month" value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)} className="w-full border rounded-md px-3 py-1.5 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white" />)}</div><div className="hidden sm:block w-px h-6 bg-gray-300 mx-1"></div><button onClick={generateDailyBriefing} disabled={aiLoading} className="flex items-center justify-center gap-2 px-3 py-1.5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm rounded-lg shadow hover:shadow-lg transition-all hover:scale-105 whitespace-nowrap disabled:opacity-70">{aiLoading ? <Loader2 size={16} className="animate-spin" /> : <Sparkles size={16} />} <span>AI Summary</span></button></div>
       </header>

       <div className="bg-white p-5 md:p-6 rounded-xl shadow-md border-t-4 border-blue-500 transform transition-all hover:scale-[1.005]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4 md:gap-6 w-full md:w-auto"><div className="p-3 md:p-4 bg-blue-50 text-blue-600 rounded-full shadow-inner flex-shrink-0"><LayoutDashboard size={32} className="md:w-10 md:h-10" /></div><div><h3 className="text-lg md:text-xl font-bold text-gray-800">งานทั้งหมด (Total Tasks)</h3><p className="text-gray-500 text-xs md:text-sm">งานรถโอนย้าย, งานส่งสินค้า, งานรถส่วนกลาง</p></div></div>
              <div className="w-full md:flex-1 md:max-w-lg"><div className="flex justify-between items-end mb-2"><span className="text-3xl md:text-4xl font-bold text-blue-600 tracking-tight">{statsAll.completed}</span><div className="text-right"><span className="text-gray-400 text-xs md:text-sm font-medium">จากทั้งหมด</span><span className="text-gray-600 font-bold ml-1 text-sm md:text-base">{statsAll.total} งาน</span></div></div><div className="w-full bg-gray-100 rounded-full h-4 md:h-5 overflow-hidden shadow-inner"><div className="bg-gradient-to-r from-blue-400 to-blue-600 h-full rounded-full transition-all duration-1000 ease-out" style={{ width: `${statsAll.total > 0 ? (statsAll.completed/statsAll.total)*100 : 0}%` }}></div></div><div className="flex justify-between text-xs text-gray-500 mt-2 font-medium"><span>สำเร็จ {statsAll.total > 0 ? Math.round((statsAll.completed/statsAll.total)*100) : 0}%</span><span className="text-red-500">คงค้าง {statsAll.pending} งาน</span></div></div>
          </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {hasAccess('inbound') && <StatCard title="งานรถโอนย้าย (Inbound)" value={statsIn.completed} total={statsIn.total} color="green" icon={ArrowDownToLine} subStats={getPendingStats(statsIn.rawTasks, 'Inbound')} onClick={() => setActiveTab('inbound')} />}
        {hasAccess('outbound') && <StatCard title="งานส่งสินค้า (Outbound)" value={statsOut.completed} total={statsOut.total} color="orange" icon={ArrowUpFromLine} subStats={getPendingStats(statsOut.rawTasks, 'Outbound')} onClick={() => setActiveTab('outbound')} />}
        {hasAccess('internal') && <StatCard title="งานรถส่วนกลาง (Internal)" value={statsInt.completed} total={statsInt.total} color="purple" icon={Building2} subStats={getPendingStats(statsInt.rawTasks, 'Internal')} onClick={() => setActiveTab('internal')} />}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 col-span-1 lg:col-span-2 flex flex-col">
          <div className="flex justify-between items-center mb-4"><h3 className="font-bold text-lg flex items-center gap-2"><AlertTriangle className="text-red-500" size={20} /> <span className="truncate">ปัญหารอล่าสุด</span></h3><button onClick={() => setActiveTab('problems')} className="text-sm text-blue-600 hover:underline whitespace-nowrap">ดูทั้งหมด</button></div>
          {pendingLogs.length === 0 ? (
              <p className="text-gray-400 text-center py-6 bg-gray-50 rounded-lg border border-dashed text-sm">ไม่พบปัญหาค้างดำเนินการ</p>
          ) : (
              <div className="flex overflow-x-auto gap-4 pb-4 custom-scrollbar">
                  {pendingLogs.map((log, idx) => (
                      <div key={log.docId || log.id || idx} className="min-w-[280px] bg-red-50 border border-red-100 p-4 rounded-xl flex flex-col justify-between">
                          <div>
                              <div className="flex justify-between items-start mb-2"><div className="bg-red-200 p-1.5 rounded-full text-red-600"><AlertTriangle size={16} /></div><span className="text-[10px] text-gray-500">{log.date}</span></div>
                              <h4 className="font-bold text-gray-800 text-sm mb-1">{log.topic}</h4>
                              <p className="text-xs text-gray-600 line-clamp-2 mb-2">{log.detail}</p>
                              <p className="text-[10px] text-gray-400 mb-2">แจ้งโดย: {log.createdBy || 'Unknown'}</p>
                          </div>
                          <div className="flex justify-between items-center">
                              <span className="text-[10px] uppercase font-bold tracking-wider bg-white px-2 py-0.5 rounded border border-gray-200 text-gray-500">{log.dept}</span>
                              {['dgm', 'dm'].includes(currentUserRole) && (
                                  <button onClick={() => handleOpenResolve(log.docId || log.id)} className="text-xs bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700 transition">ปิดงาน</button>
                              )}
                          </div>
                      </div>
                  ))}
              </div>
          )}
        </div>
        
        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex flex-col">
           <div className="flex justify-between items-center mb-4"><h3 className="font-bold text-lg flex items-center gap-2"><Users className="text-blue-500" size={20} /> คะแนนทีมงาน</h3><span className="text-[10px] bg-gray-100 px-2 py-1 rounded text-gray-500">เดือน {selectedMonth}</span></div>
           <div className="flex-1 overflow-y-auto space-y-4 pr-1 max-h-[300px]">
             {['Inbound', 'Outbound', 'Internal'].map(d => {
               const deptMembers = members.filter(m => m.dept === d);
               if (deptMembers.length === 0) return null;
               return (<div key={d} className="space-y-2"><h4 className="text-xs font-bold text-gray-400 uppercase border-b pb-1">{d}</h4><div className="space-y-2">{deptMembers.map((m, idx) => { const score = getMemberScore(m.id || m.docId); const scoreColor = score >= 80 ? 'text-green-600' : score >= 60 ? 'text-yellow-600' : 'text-red-600'; return (<div key={m.docId || m.id || idx} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition group"><div className="flex items-center gap-3"><MemberAvatar member={m} size="sm" /><div><p className="text-sm font-medium text-gray-800">{m.name}</p><p className="text-[10px] text-gray-500">{m.role}</p></div></div><div className="text-right"><span className={`text-lg font-bold ${scoreColor}`}>{score}</span><p className="text-[9px] text-gray-400">Points</p></div></div>); })}</div></div>);
             })}
           </div>
           <div className="mt-4 pt-4 border-t border-gray-100">
              <h4 className="text-xs font-bold text-gray-600 mb-2">ประวัติการปรับคะแนน (Manual)</h4>
              <div className="max-h-[100px] overflow-y-auto text-[10px] space-y-1">
                 {manualScores.filter(s => s.date.startsWith(selectedMonth)).map((s, idx) => { const m = members.find(mem => mem.id === s.memberId); return (<div key={s.docId || s.id || idx} className="flex justify-between items-center bg-gray-50 p-1.5 rounded"><span className="truncate flex-1">{m?.name}: {s.reason}</span><span className={`font-bold ml-2 ${s.score > 0 ? 'text-green-600' : 'text-red-600'}`}>{s.score > 0 ? '+' : ''}{s.score}</span><button onClick={() => onDeleteManualScore(s.docId || s.id)} className="ml-2 text-gray-400 hover:text-red-500"><Trash2 size={10} /></button></div>) })}
                 {manualScores.filter(s => s.date.startsWith(selectedMonth)).length === 0 && (<p className="text-gray-400 italic">ไม่มีรายการปรับคะแนนในเดือนนี้</p>)}
              </div>
           </div>
           <button onClick={() => setIsAdjustModalOpen(true)} className="mt-2 w-full py-2 bg-blue-50 text-blue-600 font-medium text-xs rounded hover:bg-blue-100 transition flex justify-center items-center gap-2"><Gavel size={14} /> เพิ่ม/หักคะแนนโดยหัวหน้างาน</button>
        </div>
      </div>
    </div>
  );
}