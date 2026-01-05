import React from 'react';
import { History } from 'lucide-react';

export default function ActionLogView({ actionLogs }) {
  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2"><History className="text-blue-600" /> ประวัติการทำงาน (Action Log)</h2>
      <div className="bg-white rounded-xl shadow-sm overflow-hidden"><div className="overflow-x-auto"><table className="min-w-full divide-y divide-gray-200"><thead className="bg-gray-50"><tr><th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">วัน-เวลา</th><th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">ผู้ดำเนินการ</th><th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">รายละเอียด</th></tr></thead><tbody className="bg-white divide-y divide-gray-200">{actionLogs.length === 0 ? (<tr><td colSpan="3" className="px-6 py-8 text-center text-gray-400">ยังไม่มีประวัติการทำงาน</td></tr>) : ([...actionLogs].sort((a, b) => {
        if (a.createdAt && b.createdAt) {
          return b.createdAt.seconds - a.createdAt.seconds;
        }
        return b.timestamp > a.timestamp ? 1 : -1;
      }).map(log => (<tr key={log.docId || log.id} className="hover:bg-gray-50 transition"><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{log.timestamp}</td><td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-700">{log.user}</td><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{log.action}</td></tr>)))}</tbody></table></div></div>
    </div>
  );
}