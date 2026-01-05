import React from 'react';
import { CheckCircle2, X } from 'lucide-react';

export function Toast({ message, isVisible, onClose }) {
  if (!isVisible) return null;
  return (
    <div className="fixed top-4 right-4 z-[60] bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 animate-fade-in-down transition-all">
      <CheckCircle2 size={20} className="text-white" />
      <span className="font-medium">{message}</span>
      <button onClick={onClose} className="ml-2 hover:bg-green-700 rounded-full p-1"><X size={14}/></button>
    </div>
  );
}

export function StatCard({ title, value, total, color, icon: Icon, subStats, onClick }) {
  const percentage = total > 0 ? Math.round((value / total) * 100) : 0;
  const colorClasses = {
    blue: "bg-blue-50 text-blue-600 border-blue-200 hover:border-blue-300",
    green: "bg-green-50 text-green-600 border-green-200 hover:border-green-300",
    orange: "bg-orange-50 text-orange-600 border-orange-200 hover:border-orange-300",
    purple: "bg-purple-50 text-purple-600 border-purple-200 hover:border-purple-300",
    red: "bg-red-50 text-red-600 border-red-200 hover:border-red-300",
  };
  return (
    <div onClick={onClick} className={`p-4 rounded-xl border ${colorClasses[color]} shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer h-full flex flex-col justify-between`}>
      <div>
        <div className="flex justify-between items-start mb-2 gap-2">
          <div className="min-w-0 flex-1"><p className="text-sm font-medium opacity-80 truncate" title={title}>{title}</p><div className="flex items-baseline gap-1 mt-1"><h3 className="text-2xl font-bold">{value}</h3><span className="text-xs font-normal opacity-70">/ {total}</span></div></div>
          <div className={`p-2 rounded-lg bg-white bg-opacity-60 flex-shrink-0`}><Icon size={20} /></div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mt-2"><div className={`h-2 rounded-full transition-all duration-500 ${color === 'blue' ? 'bg-blue-500' : color === 'green' ? 'bg-green-500' : color === 'orange' ? 'bg-orange-500' : 'bg-purple-500'}`} style={{ width: `${percentage}%` }}></div></div>
      </div>
      {subStats && (<div className="mt-3 pt-3 border-t border-black/5 flex justify-between text-[10px] sm:text-xs"><span className="text-gray-600">คงค้าง Routine: <span className="font-bold text-red-500">{subStats.routine}</span></span><span className="text-gray-600">คงค้าง Assign: <span className="font-bold text-red-500">{subStats.assigned}</span></span></div>)}
      {!subStats && <p className="text-xs mt-2 text-right opacity-90">{percentage}% สำเร็จ</p>}
    </div>
  );
}

export function ProgressCircle({ percentage, color, title, subtitle }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center">
      <h4 className="text-sm font-bold text-gray-700 mb-4">{title}</h4>
      <div className="relative w-32 h-32">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle className="text-gray-100 stroke-current" strokeWidth="8" cx="50" cy="50" r="40" fill="transparent"></circle>
          <circle className="stroke-current transition-all duration-1000 ease-out" strokeWidth="8" strokeLinecap="round" cx="50" cy="50" r="40" fill="transparent" strokeDasharray="251.2" strokeDashoffset={251.2 - (251.2 * percentage) / 100} style={{ color: color }} transform="rotate(-90 50 50)"></circle>
        </svg>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-gray-700"><span className="text-2xl font-bold">{Math.round(percentage)}%</span></div>
      </div>
      <div className="mt-4 text-center text-xs text-gray-500">{subtitle}</div>
    </div>
  );
}

export function MemberAvatar({ member, size = "md" }) {
  const sizeClass = size === "sm" ? "w-8 h-8" : size === "lg" ? "w-16 h-16" : "w-10 h-10";
  return (
    <div className="relative group cursor-pointer inline-block">
      <img src={member.avatar || `https://i.pravatar.cc/150?u=${member.id}`} alt={member.name} className={`${sizeClass} rounded-full object-cover border-2 border-white shadow-sm bg-gray-200`} />
      <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></div>
    </div>
  );
}