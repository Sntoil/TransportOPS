import React, { useMemo, useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { Lock, Mail, Loader2, AlertCircle } from 'lucide-react';

export default function LoginView({ onLogin }) {
  const adminEmail = useMemo(() => (import.meta.env.VITE_ADMIN_EMAIL || 'admin@tsops.com').toLowerCase(), []);
  const adminPassword = useMemo(() => import.meta.env.VITE_ADMIN_PASSWORD || 'pass1234', []);

  const [email, setEmail] = useState(adminEmail);
  const [password, setPassword] = useState(adminPassword);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // ✅ Local Admin Shortcut (สำหรับ Demo/Deploy)
      if (email.trim().toLowerCase() === adminEmail && password === adminPassword) {
        onLogin?.({ email: adminEmail, displayName: 'Admin', providerId: 'local-admin' });
        return;
      }

      // ✅ ของจริง: ยิงไปตรวจสอบกับ Firebase Auth
      await signInWithEmailAndPassword(auth, email, password);
      // ถ้าผ่าน App.jsx จะจับได้เองจาก onAuthStateChanged
    } catch (err) {
      console.error("Login Failed:", err);
      if (err.code === 'auth/invalid-credential' || err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password') {
         setError('อีเมลหรือรหัสผ่านไม่ถูกต้อง');
      } else if (err.code === 'auth/too-many-requests') {
         setError('ล็อกอินผิดหลายครั้ง กรุณารอสักครู่');
      } else {
         setError('เกิดข้อผิดพลาดในการเชื่อมต่อ');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden flex flex-col md:flex-row">
        
        {/* Login Form */}
        <div className="w-full p-8 md:p-10">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-slate-800 tracking-tight">TransportOPS</h1>
            <p className="text-sm text-slate-500 mt-2">เข้าสู่ระบบเพื่อจัดการงานขนส่ง</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 text-xs p-3 rounded-lg flex items-center gap-2">
                <AlertCircle size={16} /> {error}
              </div>
            )}

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">อีเมล</label>
              <div className="relative">
                <Mail className="absolute left-3 top-2.5 text-slate-400" size={18} />
                <input 
                  type="email" 
                  required
                  className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-sm"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">รหัสผ่าน</label>
              <div className="relative">
                <Lock className="absolute left-3 top-2.5 text-slate-400" size={18} />
                <input 
                  type="password" 
                  required
                  className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-sm"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-slate-800 hover:bg-slate-900 text-white font-bold py-2.5 rounded-lg transition shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? <Loader2 className="animate-spin" size={20} /> : 'เข้าสู่ระบบ'}
            </button>
          </form>

          <p className="mt-8 text-center text-xs text-slate-400">
            © 2024 Transport Operations System
          </p>
        </div>
      </div>
    </div>
  );
}
