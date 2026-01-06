import React, { useState } from 'react';
import { ListTodo, Plus, Edit2, Trash2, CheckCircle2, XCircle, Search, Filter, Clock } from 'lucide-react';

export default function AssignMenuView({ members, tasks, onAddTask, onEditTask, onDeleteTask, onUpdateStatus, currentUserRole }) {
  const safeMembers = members || [];
  const safeTasks = tasks || [];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [formData, setFormData] = useState({ name: '', area: 'Inbound', assigneeId: '', status: 'pending', deadline: '' });
  
  // 🔎 Features: Search & Filter
  const [searchTerm, setSearchTerm] = useState('');
  const [filterArea, setFilterArea] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');

  const resetForm = () => {
    setFormData({ name: '', area: 'Inbound', assigneeId: '', status: 'pending', deadline: '' });
    setEditingTask(null);
    setIsModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingTask) onEditTask(editingTask.id, formData);
    else onAddTask({ ...formData, completed: false, createdAt: new Date().toISOString() });
    resetForm();
  };

  const openEdit = (task) => {
    setEditingTask(task);
    setFormData({
      name: task.name || '',
      area: task.area || 'Inbound',
      assigneeId: task.assigneeId || '',
      status: task.status || 'pending',
      deadline: task.deadline || ''
    });
    setIsModalOpen(true);
  };

  const getAssigneeName = (id) => safeMembers.find(m => m.id === id)?.name || 'ไม่ระบุ';

  // 🔄 Logic การกรองข้อมูล
  const filteredTasks = safeTasks.filter(task => {
    const matchesSearch = task.name?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesArea = filterArea === 'All' || task.area === filterArea;
    const isDone = task.status === 'done' || task.completed;
    const matchesStatus = filterStatus === 'All' 
        ? true 
        : filterStatus === 'Done' ? isDone : !isDone;
    return matchesSearch && matchesArea && matchesStatus;
  });

  const canManage = ['dgm', 'dm', 'admin'].includes(currentUserRole);

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header & Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
           <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2"><ListTodo className="text-blue-600"/> มอบหมายงาน</h2>
           <p className="text-sm text-gray-500">{filteredTasks.length} รายการที่แสดง</p>
        </div>
        {canManage && (
            <button onClick={() => setIsModalOpen(true)} className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 shadow-sm transition">
                <Plus size={18}/> สร้างงานใหม่
            </button>
        )}
      </div>

      {/* Filters Bar */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-4 items-center">
         <div className="relative flex-1 w-full">
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18}/>
            <input 
                type="text" 
                placeholder="ค้นหาชื่องาน..." 
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-100 outline-none text-sm"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
            />
         </div>
         <div className="flex gap-2 w-full md:w-auto">
            <select className="border rounded-lg px-3 py-2 text-sm bg-slate-50 outline-none" value={filterArea} onChange={e => setFilterArea(e.target.value)}>
                <option value="All">ทุกพื้นที่</option>
                <option value="Inbound">Inbound</option>
                <option value="Outbound">Outbound</option>
                <option value="Internal">Internal</option>
            </select>
            <select className="border rounded-lg px-3 py-2 text-sm bg-slate-50 outline-none" value={filterStatus} onChange={e => setFilterStatus(e.target.value)}>
                <option value="All">ทุกสถานะ</option>
                <option value="Pending">กำลังทำ</option>
                <option value="Done">เสร็จแล้ว</option>
            </select>
         </div>
      </div>

      {/* Task Grid Cards (แบบใหม่ ดูง่ายกว่าตารางบนมือถือ) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
         {filteredTasks.map((task) => {
            const isDone = task.status === 'done' || task.completed;
            return (
                <div key={task.id} className={`bg-white p-4 rounded-xl shadow-sm border transition hover:shadow-md ${isDone ? 'border-green-100 bg-green-50/30' : 'border-gray-100'}`}>
                    <div className="flex justify-between items-start mb-3">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                            task.area === 'Inbound' ? 'bg-blue-100 text-blue-700' :
                            task.area === 'Outbound' ? 'bg-orange-100 text-orange-700' : 'bg-purple-100 text-purple-700'
                        }`}>
                            {task.area}
                        </span>
                        {canManage && (
                            <div className="flex gap-1">
                                <button onClick={() => openEdit(task)} className="p-1.5 text-gray-400 hover:text-blue-600 rounded-full"><Edit2 size={14}/></button>
                                <button onClick={() => confirm('ลบงานนี้?') && onDeleteTask(task.id)} className="p-1.5 text-gray-400 hover:text-red-600 rounded-full"><Trash2 size={14}/></button>
                            </div>
                        )}
                    </div>
                    
                    <h3 className={`font-bold text-slate-800 mb-1 ${isDone ? 'line-through text-slate-400' : ''}`}>{task.name}</h3>
                    
                    <div className="flex items-center gap-2 mb-4 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                            <div className="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-600">
                                {getAssigneeName(task.assigneeId).charAt(0)}
                            </div>
                            {getAssigneeName(task.assigneeId)}
                        </div>
                    </div>

                    <div className="pt-3 border-t border-gray-100 flex justify-between items-center">
                         <button 
                            onClick={() => canManage && onUpdateStatus(task.id, isDone ? 'pending' : 'done')}
                            disabled={!canManage}
                            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition w-full justify-center ${
                                isDone 
                                ? 'bg-green-500 text-white hover:bg-green-600' 
                                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                            }`}
                         >
                            {isDone ? <CheckCircle2 size={14}/> : <Clock size={14}/>}
                            {isDone ? 'เสร็จสิ้น' : 'รอการทำงาน'}
                         </button>
                    </div>
                </div>
            );
         })}
      </div>
      
      {filteredTasks.length === 0 && (
          <div className="text-center py-12 text-gray-400 bg-white rounded-xl border border-dashed">
             <Filter size={40} className="mx-auto mb-2 opacity-20"/>
             <p>ไม่พบรายการงานตามเงื่อนไข</p>
          </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
            <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-2xl animate-fade-in">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-bold text-slate-800">{editingTask ? 'แก้ไขงาน' : 'มอบหมายงานใหม่'}</h3>
                    <button onClick={resetForm}><XCircle className="text-gray-400 hover:text-gray-600"/></button>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-xs font-bold text-gray-500 mb-1">ชื่องาน</label>
                        <input required className="w-full border rounded-lg px-3 py-2" value={formData.name} onChange={e=>setFormData({...formData, name:e.target.value})} placeholder="เช่น จัดเรียงสินค้า..."/>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-bold text-gray-500 mb-1">พื้นที่</label>
                            <select className="w-full border rounded-lg px-3 py-2" value={formData.area} onChange={e=>setFormData({...formData, area:e.target.value})}>
                                <option value="Inbound">Inbound</option><option value="Outbound">Outbound</option><option value="Internal">Internal</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-gray-500 mb-1">ผู้รับผิดชอบ</label>
                            <select className="w-full border rounded-lg px-3 py-2" value={formData.assigneeId} onChange={e=>setFormData({...formData, assigneeId:e.target.value})}>
                                <option value="">-- ไม่ระบุ --</option>
                                {safeMembers.map(m => <option key={m.id} value={m.id}>{m.name}</option>)}
                            </select>
                        </div>
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 font-bold shadow-lg shadow-blue-200 transition">บันทึกข้อมูล</button>
                </form>
            </div>
        </div>
      )}
    </div>
  );
}