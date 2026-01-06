import React from 'react';
import { History, Activity } from 'lucide-react';

export default function ActionLogView({ logs }) {
  const safeLogs = logs || [];

  return (
    <div className="space-y-6 animate-fade-in">
        <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2"><History className="text-blue-600"/> Activity Logs</h2>
        
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            {safeLogs.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-slate-50 border-b border-gray-100 text-xs uppercase text-gray-500 font-bold">
                            <tr>
                                <th className="p-4">เวลา</th>
                                <th className="p-4">ผู้ใช้งาน</th>
                                <th className="p-4">การกระทำ</th>
                                <th className="p-4">รายละเอียด</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50 text-sm">
                            {safeLogs.map((log, idx) => (
                                <tr key={log.id || idx} className="hover:bg-slate-50/50 transition">
                                    <td className="p-4 text-gray-500 text-xs whitespace-nowrap">
                                        {log.timestamp ? new Date(log.timestamp.seconds * 1000).toLocaleString('th-TH') : '-'}
                                    </td>
                                    <td className="p-4 font-bold text-slate-700">{log.user}</td>
                                    <td className="p-4">
                                        <span className="px-2 py-1 rounded bg-blue-50 text-blue-700 text-xs font-bold border border-blue-100">
                                            {log.action}
                                        </span>
                                    </td>
                                    <td className="p-4 text-gray-600 max-w-xs truncate" title={log.detail}>
                                        {log.detail}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="p-12 text-center text-gray-400 flex flex-col items-center gap-3">
                    <Activity size={40} className="text-gray-200"/>
                    <p>ยังไม่มีประวัติการใช้งาน</p>
                </div>
            )}
        </div>
    </div>
  );
}