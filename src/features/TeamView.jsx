import React, { useState } from 'react';
import { Users, UserPlus, Trash2, Edit2, X, Phone, Mail, Briefcase } from 'lucide-react';

export default function TeamView({ members, onAdd, onEdit, onDelete, currentUserRole }) {
  const safeMembers = members || [];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({ name: '', position: '', dept: 'Inbound', tel: '', email: '' });

  const resetForm = () => { setFormData({ name: '', position: '', dept: 'Inbound', tel: '', email: '' }); setEditingId(null); setIsModalOpen(false); };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId) onEdit(editingId, formData);
    else onAdd(formData);
    resetForm();
  };

  const handleEditClick = (m) => { setFormData(m); setEditingId(m.id); setIsModalOpen(true); };
  const handleDeleteClick = (id) => { if(confirm('ยืนยันการลบ?')) onDelete(id); };
  
  // ✅ ถ้าเป็น DGM/Admin จะเห็นปุ่ม (App.jsx ปลดล็อคให้แล้ว)
  const canManage = ['dgm', 'dm', 'admin'].includes(currentUserRole);

  return (
    <div className="space-y-6 animate-fade-in">
       <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2"><Users className="text-blue-600"/> จัดการทีมงาน</h2>
            <p className="text-sm text-gray-500">พนักงานทั้งหมด: {safeMembers.length} คน</p>
          </div>
          {canManage && <button onClick={() => setIsModalOpen(true)} className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition shadow-sm"><UserPlus size={18}/> เพิ่มพนักงาน</button>}
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {safeMembers.length > 0 ? safeMembers.map((member, idx) => (
             <div key={member?.id || idx} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition group">
                <div className="flex justify-between items-start mb-4">
                   <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg border border-blue-100">
                         {member?.name ? member.name.charAt(0).toUpperCase() : '?'}
                      </div>
                      <div>
                         <h3 className="font-bold text-slate-800">{member?.name || 'ไม่ระบุชื่อ'}</h3>
                         <div className="flex items-center gap-1 text-xs text-slate-500">
                            <Briefcase size={12}/> {member?.position || member?.role || 'Staff'}
                         </div>
                      </div>
                   </div>
                   <span className={`text-[10px] font-bold px-2 py-1 rounded uppercase ${
                       member?.dept === 'Inbound' ? 'bg-blue-100 text-blue-600' :
                       member?.dept === 'Outbound' ? 'bg-orange-100 text-orange-600' : 'bg-purple-100 text-purple-600'
                   }`}>{member?.dept || 'General'}</span>
                </div>
                
                <div className="space-y-2 text-sm text-gray-600 flex-1 border-t border-gray-50 pt-3 mt-1">
                   {member?.tel ? <div className="flex items-center gap-2"><Phone size={14} className="text-gray-400"/> {member.tel}</div> : <div className="text-xs text-gray-300 italic">ไม่มีเบอร์โทร</div>}
                   {member?.email ? <div className="flex items-center gap-2"><Mail size={14} className="text-gray-400"/> {member.email}</div> : <div className="text-xs text-gray-300 italic">ไม่มีอีเมล</div>}
                </div>

                {canManage && (
                   <div className="flex justify-end gap-2 mt-4 pt-3 border-t border-gray-50 opacity-100 transition">
                      <button onClick={() => handleEditClick(member)} className="flex items-center gap-1 px-3 py-1.5 text-xs font-bold text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition">
                          <Edit2 size={14}/> แก้ไข
                      </button>
                      <button onClick={() => handleDeleteClick(member.id)} className="flex items-center gap-1 px-3 py-1.5 text-xs font-bold text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition">
                          <Trash2 size={14}/> ลบ
                      </button>
                   </div>
                )}
             </div>
          )) : (
             <div className="col-span-full py-16 flex flex-col items-center justify-center text-center bg-white rounded-2xl border-2 border-dashed border-gray-200">
                <Users size={48} className="text-gray-200 mb-4"/>
                <h3 className="text-lg font-bold text-gray-400">ยังไม่มีข้อมูลพนักงาน</h3>
                <p className="text-gray-400 text-sm mt-1">กดปุ่ม "เพิ่มพนักงาน" เพื่อเริ่มต้น</p>
             </div>
          )}
       </div>

       {/* Modal Form */}
       {isModalOpen && (
         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
            <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-2xl animate-fade-in">
               <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-bold text-slate-800">{editingId ? 'แก้ไขข้อมูล' : 'เพิ่มพนักงานใหม่'}</h3>
                  <button onClick={resetForm}><X className="text-gray-400 hover:text-gray-600"/></button>
               </div>
               <form onSubmit={handleSubmit} className="space-y-4">
                  <div><label className="text-xs font-bold text-gray-500">ชื่อ-นามสกุล</label><input required className="w-full border rounded-lg px-3 py-2 mt-1" value={formData.name} onChange={e=>setFormData({...formData, name:e.target.value})} /></div>
                  <div><label className="text-xs font-bold text-gray-500">ตำแหน่ง (Position)</label><input required className="w-full border rounded-lg px-3 py-2 mt-1" value={formData.position} onChange={e=>setFormData({...formData, position:e.target.value})} placeholder="เช่น Driver, Admin..."/></div>
                  <div>
                    <label className="text-xs font-bold text-gray-500">แผนก</label>
                    <select className="w-full border rounded-lg px-3 py-2 mt-1" value={formData.dept} onChange={e=>setFormData({...formData, dept:e.target.value})}>
                        <option value="Inbound">Inbound</option><option value="Outbound">Outbound</option><option value="Internal">Internal</option>
                    </select>
                  </div>
                  <div><label className="text-xs font-bold text-gray-500">เบอร์โทร</label><input className="w-full border rounded-lg px-3 py-2 mt-1" value={formData.tel} onChange={e=>setFormData({...formData, tel:e.target.value})} /></div>
                  <div><label className="text-xs font-bold text-gray-500">อีเมล (ถ้ามี)</label><input className="w-full border rounded-lg px-3 py-2 mt-1" value={formData.email} onChange={e=>setFormData({...formData, email:e.target.value})} /></div>
                  <button type="submit" className="w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 font-bold shadow-lg shadow-blue-200 mt-2">บันทึกข้อมูล</button>
               </form>
            </div>
         </div>
       )}
    </div>
  );
}