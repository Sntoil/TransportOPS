import React, { useState } from 'react';
import { AlertTriangle, CheckCircle2, Sparkles } from 'lucide-react';

export default function ProblemLogView({ logs, onAddLog, onResolveLog, currentDate, askAiSolution, showToast, userEmail, currentUserRole, aiLoading }) {
  const [topic, setTopic] = useState("");
  const [detail, setDetail] = useState("");
  const [dept, setDept] = useState("Inbound");
  const [activeTab, setActiveTab] = useState('pending'); // 'pending' | 'solved'
  const [isResolveModalOpen, setIsResolveModalOpen] = useState(false);
  const [resolveNote, setResolveNote] = useState("");
  const [selectedLogId, setSelectedLogId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddLog({ 
        topic, 
        detail, 
        dept, 
        date: currentDate, 
        status: 'pending',
        createdBy: userEmail || "Unknown" 
    });
    setTopic(""); setDetail(""); showToast("บันทึกปัญหาเรียบร้อยแล้ว");
  };

  const handleOpenResolve = (id) => {
      setSelectedLogId(id);
      setIsResolveModalOpen(true);
  };

  const handleResolveSubmit = () => {
      if(selectedLogId) {
          onResolveLog(selectedLogId, resolveNote);
          setIsResolveModalOpen(false);
          setResolveNote("");
          setSelectedLogId(null);
          showToast("ปิดงานเรียบร้อยแล้ว");
      }
  };

  const filteredLogs = logs.filter(l => l.status === activeTab);

  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2"><AlertTriangle className="text-red-500" /> Problem Log</h2>

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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Form */}
        <div className="bg-white p-6 rounded-xl shadow-sm h-fit">
          <h3 className="font-bold mb-4 text-gray-800">แจ้งปัญหาใหม่</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div><label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide">หัวข้อ</label><input required type="text" className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-red-200 focus:border-red-400 outline-none transition" value={topic} onChange={e => setTopic(e.target.value)} /></div>
            <div><label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide">รายละเอียด</label><textarea required className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-red-200 focus:border-red-400 outline-none transition" rows="3" value={detail} onChange={e => setDetail(e.target.value)}></textarea></div>
            <div><label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide">แผนก</label><select className="w-full border rounded-lg px-3 py-2 text-sm bg-white" value={dept} onChange={e => setDept(e.target.value)}><option value="Inbound">Inbound</option><option value="Outbound">Outbound</option><option value="Internal">Internal</option></select></div>
            <button type="submit" className="w-full bg-red-600 text-white py-2.5 rounded-lg hover:bg-red-700 transition font-medium text-sm shadow-md shadow-red-200">บันทึกปัญหา</button>
          </form>
        </div>
        
        {/* List with Tabs */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm overflow-hidden flex flex-col max-h-[600px]">
           <div className="flex border-b">
              <button onClick={() => setActiveTab('pending')} className={`flex-1 py-3 text-sm font-bold text-center border-b-2 transition ${activeTab === 'pending' ? 'border-red-500 text-red-600 bg-red-50' : 'border-transparent text-gray-500 hover:bg-gray-50'}`}>รอดำเนินการ ({logs.filter(l => l.status === 'pending').length})</button>
              <button onClick={() => setActiveTab('solved')} className={`flex-1 py-3 text-sm font-bold text-center border-b-2 transition ${activeTab === 'solved' ? 'border-green-500 text-green-600 bg-green-50' : 'border-transparent text-gray-500 hover:bg-gray-50'}`}>ปิดงานแล้ว ({logs.filter(l => l.status === 'solved').length})</button>
           </div>
           
           <div className="divide-y overflow-y-auto flex-1">
              {filteredLogs.length === 0 ? <div className="p-10 text-center text-gray-400">ไม่มีรายการในสถานะนี้</div> : null}
              {[...filteredLogs].reverse().map((log, idx) => (
                <div key={log.docId || log.id || idx} className="p-4 hover:bg-gray-50 transition relative group">
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-bold text-gray-800 text-sm">{log.topic}</h4>
                          <span className="text-[10px] text-gray-400">โดย: {log.createdBy}</span>
                          {log.status === 'pending' && <button onClick={() => askAiSolution(log)} disabled={aiLoading} className="flex items-center gap-1 px-1.5 py-0.5 bg-indigo-50 text-indigo-600 text-[10px] rounded border border-indigo-100 hover:bg-indigo-100 transition whitespace-nowrap"><Sparkles size={10} /> {aiLoading ? 'Thinking...' : 'Ask AI'}</button>}
                      </div>
                      <p className="text-sm text-gray-600 break-words">{log.detail}</p>
                      {log.status === 'solved' && (
                          <div className="mt-2 text-xs bg-green-50 p-2 rounded border border-green-100 text-green-800">
                              <strong>แก้ไขแล้วโดย:</strong> {log.solvedBy} <br/>
                              <strong>หมายเหตุ:</strong> {log.resolution}
                          </div>
                      )}
                      <div className="flex gap-2 mt-2"><span className="text-[10px] uppercase font-bold tracking-wider bg-gray-100 px-2 py-0.5 rounded text-gray-600">{log.dept}</span><span className="text-[10px] text-gray-400 px-2 py-0.5">{log.date}</span></div>
                    </div>
                    <div>
                        {log.status === 'pending' ? (
                            ['dgm', 'dm'].includes(currentUserRole) && (
                                <button onClick={() => handleOpenResolve(log.docId || log.id)} className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs rounded hover:bg-yellow-200 transition font-bold">ปิดงาน</button>
                            )
                        ) : (
                            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide whitespace-nowrap bg-green-100 text-green-700">SOLVED</span>
                        )}
                    </div>
                  </div>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
}