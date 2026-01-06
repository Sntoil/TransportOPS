import React, { useState } from 'react';
import { Users, UserPlus, Trash2, Edit2, Save, X, Phone, Mail, MapPin } from 'lucide-react';

export default function TeamView({ members, onAdd, onEdit, onDelete, currentUserRole }) {
  // ✅ Safety Guard
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
  
  const canManage = ['dgm', 'dm', 'admin'].includes(currentUserRole);

  return (
    <div className="space-y-6 animate-fade-in">
       <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2"><Users className="text-blue-600"/> จัดการทีมงาน</h2>
          {canManage && <button onClick={() => setIsModalOpen(true)} className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition shadow-sm"><UserPlus size={18}/> เพิ่มพนักงาน</button>}
       </div>

       {/* Member Grid */}
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {safeMembers.length > 0 ? safeMembers.map((member, idx) => (
             <div key={member?.id || idx} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition">
                <div className="flex justify-between items-start mb-4">
                   <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg">
                         {member?.name ? member.name.charAt(0).toUpperCase() : '?'}
                      </div>
                      <div>
                         <h3 className="font-bold text-slate-800">{member?.name}</h3>
                         <p className="text-xs text-slate-500">{member?.position}</p>
                      </div>
                   </div>
                   <span className="text-[10px] font-bold bg-gray-100 text-gray-600 px-2 py-1 rounded uppercase">{member?.dept}</span>
                </div>
                
                <div className="space-y-2 text-sm text-gray-600 flex-1">
                   {member?.tel && <div className="flex items-center gap-2"><Phone size={14} className="text-gray-400"/> {member.tel}</div>}
                   {member?.email && <div className="flex items-center gap-2"><Mail size={14} className="text-gray-400"/> {member.email}</div>}
                </div>

                {canManage && (
                   <div className="flex justify-end gap-2 mt-4 pt-4 border-t border-gray-50">
                      <button onClick={() => handleEditClick(member)} className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-full"><Edit2 size={16}/></button>
                      <button onClick={() => handleDeleteClick(member.id)} className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-full"><Trash2 size={16}/></button>
                   </div>
                )}
             </div>
          )) : <div className="col-span-full text-center py-10 text-gray-400 bg-white rounded-xl border border-dashed border-gray-300">ยังไม่มีข้อมูลพนักงาน</div>}
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
                  <input required placeholder="ชื่อ-นามสกุล" className="w-full border rounded-lg px-3 py-2" value={formData.name} onChange={e=>setFormData({...formData, name:e.target.value})} />
                  <input required placeholder="ตำแหน่ง" className="w-full border rounded-lg px-3 py-2" value={formData.position} onChange={e=>setFormData({...formData, position:e.target.value})} />
                  <select className="w-full border rounded-lg px-3 py-2" value={formData.dept} onChange={e=>setFormData({...formData, dept:e.target.value})}>
                     <option value="Inbound">Inbound</option><option value="Outbound">Outbound</option><option value="Internal">Internal</option>
                  </select>
                  <input placeholder="เบอร์โทร" className="w-full border rounded-lg px-3 py-2" value={formData.tel} onChange={e=>setFormData({...formData, tel:e.target.value})} />
                  <input placeholder="อีเมล" className="w-full border rounded-lg px-3 py-2" value={formData.email} onChange={e=>setFormData({...formData, email:e.target.value})} />
                  <button type="submit" className="w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 font-bold shadow-lg shadow-blue-200">{editingId ? 'บันทึกแก้ไข' : 'เพิ่มพนักงาน'}</button>
               </form>
            </div>
         </div>
       )}
    </div>
  );
}