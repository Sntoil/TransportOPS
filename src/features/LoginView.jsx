import React, { useState } from 'react';
import { Truck, Mail, Lock, AlertTriangle, Loader2 } from 'lucide-react';

export default function LoginView({ onLogin, error, loading }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => { e.preventDefault(); onLogin(email, password); };
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-slate-900 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg mb-4"><Truck size={32} className="text-white" /></div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Transport<span className="text-blue-400">Ops</span></h1>
          <p className="text-blue-200 text-sm mt-1">ระบบบริหารจัดการงานขนส่ง</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-blue-100 ml-1">อีเมล</label>
            <div className="relative group"><div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-blue-300 group-focus-within:text-blue-400 transition-colors"><Mail size={18} /></div><input type="email" required className="w-full bg-slate-800/50 border border-slate-700 text-white rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-slate-500 transition-all" placeholder="name@company.com" value={email} onChange={(e) => setEmail(e.target.value)} /></div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-blue-100 ml-1">รหัสผ่าน</label>
            <div className="relative group"><div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-blue-300 group-focus-within:text-blue-400 transition-colors"><Lock size={18} /></div><input type="password" required className="w-full bg-slate-800/50 border border-slate-700 text-white rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-slate-500 transition-all" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} /></div>
          </div>
          {error && (<div className="bg-red-500/10 border border-red-500/50 text-red-200 text-sm rounded-lg p-3 flex items-center gap-2 animate-pulse"><AlertTriangle size={16} />{error}</div>)}
          <button type="submit" disabled={loading} className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-lg shadow-lg hover:shadow-blue-500/30 transition-all duration-200 transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2">{loading ? <Loader2 size={20} className="animate-spin" /> : 'เข้าสู่ระบบ'}</button>
        </form>
        <div className="mt-8 text-center text-xs text-blue-300/60">© 2026 Transport Operations System v3.4</div>
      </div>
    </div>
  );
}