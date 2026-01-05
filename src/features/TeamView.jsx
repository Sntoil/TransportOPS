import React, { useState } from 'react';
import { Users, Edit, Trash2 } from 'lucide-react';

export default function TeamView({ members, onAddMember, onEditMember, onDeleteMember, roles }) {
  const [newMember, setNewMember] = useState({ name: "", role: "", dept: "Inbound", avatar: "", email: "", password: "" });
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingMember, setEditingMember] = useState(null);

  const handleAddMemberSubmit = (e) => { e.preventDefault(); onAddMember({ ...newMember, avatar: newMember.avatar || `https://i.pravatar.cc/150?u=${Date.now()}` }); setNewMember({ name: "", role: "", dept: "Inbound", avatar: "", email: "", password: "" }); };
  
  const handleEditClick = (member) => {
      setEditingMember(member);
      setIsEditModalOpen(true);
  };

  const handleEditSubmit = (e) => {
      e.preventDefault();
      onEditMember(editingMember);
      setIsEditModalOpen(false);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2"><Users className="text-blue-600" /> จัดการทีมงาน</h2>
      
      {/* Edit Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black bg-opacity-50 p-4 backdrop-blur-sm">
           <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6 animate-fade-in">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2"><Edit className="text-blue-600"/> แก้ไขข้อมูลพนักงาน</h3>
              <form onSubmit={handleEditSubmit} className="space-y-4">
                 <div><label className="block text-xs font-bold text-gray-500 mb-1">ชื่อ-สกุล</label><input required className="w-full border rounded px-3 py-2" value={editingMember.name} onChange={e => setEditingMember({...editingMember, name: e.target.value})} /></div>
                 <div><label className="block text-xs font-bold text-gray-500 mb-1">อีเมล (สำหรับเข้าสู่ระบบ)</label><input required type="email" className="w-full border rounded px-3 py-2" value={editingMember.email} onChange={e => setEditingMember({...editingMember, email: e.target.value})} /></div>
                 <div>
                    <label className="block text-xs font-bold text-gray-500 mb-1">ตำแหน่ง</label>
                    <select required className="w-full border rounded px-3 py-2 bg-white" value={editingMember.role} onChange={e => setEditingMember({...editingMember, role: e.target.value})}>
                       {roles.map(r => <option key={r.id} value={r.name}>{r.name}</option>)}
                    </select>
                 </div>
                 <div><label className="block text-xs font-bold text-gray-500 mb-1">แผนก</label><select className="w-full border rounded px-3 py-2 bg-white" value={editingMember.dept} onChange={e => setEditingMember({...editingMember, dept: e.target.value})}><option value="Inbound">Inbound</option><option value="Outbound">Outbound</option><option value="Internal">Internal</option><option value="Manager">Manager</option></select></div>
                 <div className="flex gap-2 justify-end pt-4"><button type="button" onClick={() => setIsEditModalOpen(false)} className="px-4 py-2 text-gray-500 hover:bg-gray-100 rounded">ยกเลิก</button><button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">บันทึก</button></div>
              </form>
           </div>
        </div>
      )}

      <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
        <h3 className="font-bold mb-4 text-gray-700">เพิ่มสมาชิกใหม่</h3>
        <form onSubmit={handleAddMemberSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-end">
           <div className="w-full"><label className="block text-xs font-semibold text-gray-500 mb-1">ชื่อ-สกุล</label><input required value={newMember.name} onChange={e => setNewMember({...newMember, name: e.target.value})} className="w-full border rounded-lg px-3 py-2 text-sm" placeholder="ระบุชื่อ..." /></div>
           <div className="w-full"><label className="block text-xs font-semibold text-gray-500 mb-1">อีเมล (Login)</label><input required type="email" value={newMember.email} onChange={e => setNewMember({...newMember, email: e.target.value})} className="w-full border rounded-lg px-3 py-2 text-sm" placeholder="name@company.com" /></div>
           <div className="w-full"><label className="block text-xs font-semibold text-gray-500 mb-1">รหัสผ่าน</label><input required type="password" value={newMember.password} onChange={e => setNewMember({...newMember, password: e.target.value})} className="w-full border rounded-lg px-3 py-2 text-sm" placeholder="********" /></div>
           
           <div className="w-full">
              <label className="block text-xs font-semibold text-gray-500 mb-1">ตำแหน่ง</label>
              <select required className="w-full border rounded-lg px-3 py-2 text-sm bg-white" value={newMember.role} onChange={e => setNewMember({...newMember, role: e.target.value})}>
                 <option value="">เลือกตำแหน่ง...</option>
                 {roles.map(r => <option key={r.id} value={r.name}>{r.name}</option>)}
              </select>
           </div>
           <div className="w-full"><label className="block text-xs font-semibold text-gray-500 mb-1">แผนก</label><select className="w-full border rounded-lg px-3 py-2 text-sm bg-white" value={newMember.dept} onChange={e => setNewMember({...newMember, dept: e.target.value})}><option value="Inbound">Inbound</option><option value="Outbound">Outbound</option><option value="Internal">Internal</option><option value="Manager">Manager</option></select></div>
           
           <div className="w-full md:col-span-1 lg:col-span-1"><button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 w-full font-medium text-sm shadow-sm transition h-[38px] mt-6">เพิ่มสมาชิก</button></div>
        </form>
      </div>
      <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50"><tr><th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">สมาชิก</th><th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">อีเมล</th><th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">ตำแหน่ง</th><th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">แผนก</th><th className="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">จัดการ</th></tr></thead>
            <tbody className="bg-white divide-y divide-gray-200">{members.map((m, idx) => (<tr key={m.docId || m.id || idx} className="hover:bg-gray-50 transition cursor-pointer" onClick={() => handleEditClick(m)}><td className="px-6 py-4 whitespace-nowrap flex items-center gap-3"><img className="h-9 w-9 rounded-full object-cover border" src={m.avatar || `https://i.pravatar.cc/150?u=${m.id}`} alt="" /><div className="text-sm font-medium text-gray-900">{m.name}</div></td><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{m.email}</td><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{m.role}</td><td className="px-6 py-4 whitespace-nowrap"><span className={`px-2.5 py-0.5 inline-flex text-xs leading-4 font-semibold rounded-full ${m.dept === 'Inbound' ? 'bg-green-100 text-green-800' : m.dept === 'Outbound' ? 'bg-orange-100 text-orange-800' : 'bg-purple-100 text-purple-800'}`}>{m.dept}</span></td><td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"><button onClick={(e) => { e.stopPropagation(); onDeleteMember(m.id); }} className="text-gray-400 hover:text-red-600 transition p-1 rounded-full hover:bg-red-50"><Trash2 size={18} /></button></td></tr>))}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}