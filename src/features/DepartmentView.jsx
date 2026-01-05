import React, { useState, useEffect } from 'react';
import { Plus, Users, Circle, CheckCircle2, Clock, Edit, Trash2, Save } from 'lucide-react';
import { ProgressCircle, MemberAvatar } from '../components/UIComponents';

export default function DepartmentView({ 
  dept, title, color, icon: Icon, 
  tasks, members, 
  currentDate, setCurrentDate, 
  selectedMonth, setSelectedMonth,
  viewMode, setViewMode,
  onToggleTask, onUpdateTaskStatus, onAddTask, showToast, onDeleteTask, onEditTask 
}) {
  const [subTab, setSubTab] = useState('summary');
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDetail, setNewTaskDetail] = useState("");
  const [newTaskAssignee, setNewTaskAssignee] = useState("");
  const [newTaskDate, setNewTaskDate] = useState(currentDate);
  const [newTaskDueDate, setNewTaskDueDate] = useState(currentDate); 
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editTaskData, setEditTaskData] = useState(null);

  useEffect(() => { setNewTaskDate(currentDate); setNewTaskDueDate(currentDate); }, [currentDate]);
  
  const deptTasks = tasks.filter(t => {
     const isDept = t.dept === dept;
     const isDateMatch = viewMode === 'daily' ? t.date === currentDate : t.date.startsWith(selectedMonth);
     return isDept && isDateMatch;
  });

  const routineTasks = deptTasks.filter(t => t.type === 'routine');
  const assignTasks = deptTasks.filter(t => t.type === 'assign');
  const deptMembers = members.filter(m => m.dept === dept);
  
  const calculateProgress = (taskList) => {
    if (taskList.length === 0) return 0;
    const completed = taskList.filter(t => t.status === 'completed').length;
    return (completed / taskList.length) * 100;
  };

  const overallProgress = calculateProgress(deptTasks);
  const routineProgress = calculateProgress(routineTasks);
  const assignProgress = calculateProgress(assignTasks);

  const handleFormSubmit = (e, type) => {
    e.preventDefault();
    if (!newTaskTitle) return;
    onAddTask({
      title: newTaskTitle,
      details: newTaskDetail,
      type: type,
      status: 'pending',
      latestStatus: 'รอดำเนินการ',
      date: newTaskDate || currentDate,
      dueDate: type === 'assign' ? newTaskDueDate : null, 
      dept: dept,
      assignee: newTaskAssignee ? newTaskAssignee : null, 
      assigneeName: newTaskAssignee ? members.find(m => m.id === newTaskAssignee)?.name : "ไม่ระบุ"
    }, dept); 

    setNewTaskTitle(""); setNewTaskDetail(""); setNewTaskAssignee("");
    showToast("บันทึกงานใหม่เรียบร้อยแล้ว");
  };

  const handleStatusSave = (taskId) => { showToast("บันทึกสถานะงานเรียบร้อยแล้ว"); };

  const openEditTask = (task) => {
      setEditTaskData({ ...task, assignee: task.assignee ? task.assignee : "" });
      setIsEditModalOpen(true);
  };

  const handleEditSubmit = (e) => {
      e.preventDefault();
      onEditTask({
          ...editTaskData,
          assignee: editTaskData.assignee ? editTaskData.assignee : null,
          assigneeName: editTaskData.assignee ? members.find(m => m.id === editTaskData.assignee)?.name : "ไม่ระบุ"
      });
      setIsEditModalOpen(false);
      showToast("แก้ไขงานเรียบร้อยแล้ว");
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {isEditModalOpen && (
          <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black bg-opacity-50 p-4 backdrop-blur-sm">
             <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6 animate-fade-in">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2"><Edit className="text-blue-600"/> แก้ไขงาน</h3>
                <form onSubmit={handleEditSubmit} className="space-y-4">
                   <div><label className="block text-xs font-bold text-gray-500 mb-1">หัวข้อ</label><input className="w-full border rounded px-3 py-2" value={editTaskData.title || ""} onChange={e => setEditTaskData({...editTaskData, title: e.target.value})} /></div>
                   <div><label className="block text-xs font-bold text-gray-500 mb-1">รายละเอียด</label><input className="w-full border rounded px-3 py-2" value={editTaskData.details || ""} onChange={e => setEditTaskData({...editTaskData, details: e.target.value})} /></div>
                   <div>
                      <label className="block text-xs font-bold text-gray-500 mb-1">ผู้รับผิดชอบ</label>
                      <select className="w-full border rounded px-3 py-2 bg-white" value={editTaskData.assignee || ""} onChange={e => setEditTaskData({...editTaskData, assignee: e.target.value})}>
                          <option value="">เลือก...</option>{deptMembers.map(m => <option key={m.id} value={m.id}>{m.name}</option>)}
                      </select>
                   </div>
                   {editTaskData.type === 'assign' && (
                       <div><label className="block text-xs font-bold text-gray-500 mb-1">วันกำหนดเสร็จ</label><input type="date" className="w-full border rounded px-3 py-2" value={editTaskData.dueDate || ""} onChange={e => setEditTaskData({...editTaskData, dueDate: e.target.value})} /></div>
                   )}
                   <div className="flex gap-2 justify-end pt-4"><button type="button" onClick={() => setIsEditModalOpen(false)} className="px-4 py-2 text-gray-500 hover:bg-gray-100 rounded">ยกเลิก</button><button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">บันทึก</button></div>
                </form>
             </div>
          </div>
      )}

      <header className={`flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 bg-white p-5 rounded-xl shadow-sm border-l-4`} style={{ borderColor: color }}>
        <div className="flex items-center gap-4">
          <div className={`p-3 rounded-full bg-opacity-10 flex-shrink-0`} style={{ backgroundColor: color }}>
            <Icon size={28} style={{ color: color }} />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">{title}</h2>
            <p className="text-gray-500 text-sm">จัดการงาน ({viewMode === 'daily' ? `ประจำวันที่ ${currentDate}` : `ประจำเดือน ${selectedMonth}`})</p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto items-stretch sm:items-center">
            <div className="flex bg-gray-100 rounded-lg p-1">
                <button onClick={() => setViewMode('daily')} className={`flex-1 sm:flex-none px-3 py-1.5 text-xs font-medium rounded-md transition ${viewMode === 'daily' ? 'bg-white shadow text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}>รายวัน</button>
                <button onClick={() => setViewMode('monthly')} className={`flex-1 sm:flex-none px-3 py-1.5 text-xs font-medium rounded-md transition ${viewMode === 'monthly' ? 'bg-white shadow text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}>รายเดือน</button>
            </div>
            <div className="min-w-[130px]">
              {viewMode === 'daily' ? (<input type="date" value={currentDate} onChange={(e) => setCurrentDate(e.target.value)} className="w-full border rounded-md px-3 py-1.5 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white" />) : (<input type="month" value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)} className="w-full border rounded-md px-3 py-1.5 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white" />)}
            </div>
        </div>

        <div className="flex flex-wrap gap-2 w-full lg:w-auto mt-2 lg:mt-0">
          <button onClick={() => setSubTab('summary')} className={`flex-1 lg:flex-none px-4 py-2 rounded-md text-sm font-medium transition ${subTab === 'summary' ? 'bg-gray-100 text-gray-900 font-bold shadow-sm' : 'text-gray-500 hover:bg-gray-50'}`}>สรุปงาน</button>
          <button onClick={() => setSubTab('routine')} className={`flex-1 lg:flex-none px-4 py-2 rounded-md text-sm font-medium transition ${subTab === 'routine' ? 'bg-gray-100 text-gray-900 font-bold shadow-sm' : 'text-gray-500 hover:bg-gray-50'}`}>Routine</button>
          <button onClick={() => setSubTab('assign')} className={`flex-1 lg:flex-none px-4 py-2 rounded-md text-sm font-medium transition ${subTab === 'assign' ? 'bg-gray-100 text-gray-900 font-bold shadow-sm' : 'text-gray-500 hover:bg-gray-50'}`}>Assigned</button>
        </div>
      </header>

      {subTab === 'summary' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ProgressCircle percentage={overallProgress} color={color} title="รวมทั้งหมด" subtitle={`${deptTasks.filter(t=>t.status==='completed').length} / ${deptTasks.length} งาน`} />
          <ProgressCircle percentage={routineProgress} color="#3b82f6" title="Routine" subtitle={`${routineTasks.filter(t=>t.status==='completed').length} / ${routineTasks.length} งาน`} />
          <ProgressCircle percentage={assignProgress} color="#8b5cf6" title="Assigned" subtitle={`${assignTasks.filter(t=>t.status==='completed').length} / ${assignTasks.length} งาน`} />
          
          <div className="md:col-span-3 bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-bold mb-4 flex items-center gap-2 text-gray-700"><Users size={18} /> สมาชิกทีม {title}</h3>
            <div className="flex flex-wrap gap-4">
              {deptMembers.length > 0 ? deptMembers.map((m, idx) => (
                <div key={m.docId || m.id || idx} className="flex items-center gap-3 p-2.5 hover:bg-gray-50 rounded-lg transition border border-transparent hover:border-gray-100">
                  <MemberAvatar member={m} size="sm" />
                  <div><p className="font-medium text-sm text-gray-800">{m.name}</p><p className="text-xs text-gray-500">{m.role}</p></div>
                </div>
              )) : <p className="text-gray-400 text-sm">ไม่มีสมาชิกในแผนกนี้</p>}
            </div>
          </div>
        </div>
      )}

      {(subTab === 'routine' || subTab === 'assign') && (
         <div className="space-y-4">
           {/* Add Task Form (Simplified for brevity) */}
           <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
              <h3 className="font-bold text-gray-700 mb-3 text-sm flex items-center gap-2"><Plus size={16} /> เพิ่มงานใหม่ ({subTab === 'routine' ? 'Routine' : 'Assign'})</h3>
              <form onSubmit={(e) => handleFormSubmit(e, subTab)} className="grid grid-cols-1 md:grid-cols-12 gap-3">
                 <div className="md:col-span-3"><input type="text" placeholder="ระบุหัวข้องาน..." required className="w-full border rounded-lg px-3 py-2 text-sm" value={newTaskTitle} onChange={(e) => setNewTaskTitle(e.target.value)} /></div>
                 <div className="md:col-span-3"><input type="text" placeholder="รายละเอียด..." className="w-full border rounded-lg px-3 py-2 text-sm" value={newTaskDetail} onChange={(e) => setNewTaskDetail(e.target.value)} /></div>
                 <div className="md:col-span-2"><select className="w-full border rounded-lg px-2 py-2 text-sm bg-white" value={newTaskAssignee} onChange={(e) => setNewTaskAssignee(e.target.value)}><option value="">เลือก...</option>{deptMembers.map(m => <option key={m.id} value={m.id}>{m.name}</option>)}</select></div>
                 <div className="md:col-span-2"><input type="date" className="w-full border rounded-lg px-2 py-2 text-sm" value={newTaskDate} onChange={(e) => setNewTaskDate(e.target.value)} /></div>
                 {subTab === 'assign' && (<div className="md:col-span-2"><input type="date" className="w-full border rounded-lg px-2 py-2 text-sm border-red-100 bg-red-50" value={newTaskDueDate} onChange={(e) => setNewTaskDueDate(e.target.value)} /></div>)}
                 <div className={`${subTab === 'assign' ? 'md:col-span-12 flex justify-end' : 'md:col-span-2 flex items-end'}`}><button type="submit" className={`bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm whitespace-nowrap shadow-sm h-[38px] ${subTab === 'assign' ? 'w-auto' : 'w-full'}`}>เพิ่ม</button></div>
              </form>
           </div>
           
           <div className="bg-white rounded-xl shadow-sm overflow-hidden">
             <div className="divide-y">
               {(subTab === 'routine' ? routineTasks : assignTasks).length === 0 ? (<div className="p-10 text-center text-gray-400 text-sm">ไม่มีงานในรายการสำหรับช่วงเวลานี้</div>) : (
                 (subTab === 'routine' ? routineTasks : assignTasks).map((task, idx) => (
                   <div key={task.docId || task.id || idx} className="p-4 hover:bg-gray-50 group transition">
                     <div className="flex items-start gap-4 mb-2">
                       <button onClick={() => onToggleTask(task.id, task.title, dept)} className={`transition-colors flex-shrink-0 mt-0.5 ${task.status === 'completed' ? 'text-green-500' : 'text-gray-300 hover:text-gray-400'}`}>
                         {task.status === 'completed' ? <CheckCircle2 size={24} /> : <Circle size={24} />}
                       </button>
                       <div className="flex-1 min-w-0">
                         <div className="flex justify-between items-start">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                                <p className={`font-bold text-sm ${task.status === 'completed' ? 'text-gray-400 line-through' : 'text-gray-800'}`}>{task.title}</p>
                                {viewMode === 'monthly' && <span className="text-[10px] bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded border">{task.date}</span>}
                                {task.dueDate && (<span className={`text-[10px] px-1.5 py-0.5 rounded border flex items-center gap-1 ${new Date(currentDate) > new Date(task.dueDate) && task.status !== 'completed' ? 'bg-red-100 text-red-600 border-red-200' : 'bg-blue-50 text-blue-600 border-blue-100'}`}><Clock size={10} /> Due: {task.dueDate}</span>)}
                            </div>
                            <div className="flex items-center gap-2">
                                {task.assignee && (<div className="flex items-center gap-1.5 flex-shrink-0 bg-gray-100 px-2 py-1 rounded-full"><img src={members.find(m => m.id === task.assignee)?.avatar} className="w-4 h-4 rounded-full" /><span className="text-[10px] text-gray-600 truncate max-w-[80px]">{members.find(m => m.id === task.assignee)?.name}</span></div>)}
                                <button onClick={() => openEditTask(task)} className="text-gray-400 hover:text-blue-500 p-1"><Edit size={14} /></button>
                                <button onClick={() => onDeleteTask(task.id)} className="text-gray-400 hover:text-red-500 p-1"><Trash2 size={14} /></button>
                            </div>
                         </div>
                         {task.details && <p className="text-xs text-gray-500 mt-1 mb-2">{task.details}</p>}
                         <div className="flex items-center gap-2 mt-2"><span className="text-[10px] font-bold text-gray-400 uppercase whitespace-nowrap">สถานะล่าสุด:</span><div className="flex-1 flex items-center gap-2 relative group/input"><input type="text" className="flex-1 border-b border-gray-200 bg-transparent text-xs py-1 px-1 focus:border-blue-400 focus:outline-none text-blue-800 font-medium transition-colors" placeholder="พนักงานอัพเดทสถานะ..." value={task.latestStatus || ""} onChange={(e) => onUpdateTaskStatus(task.id, e.target.value)} /><button onClick={() => handleStatusSave(task.id)} className="text-gray-400 hover:text-blue-600 transition-colors p-1 rounded-full hover:bg-blue-50"><Save size={14} /></button></div></div>
                       </div>
                     </div>
                   </div>
                 ))
               )}
             </div>
           </div>
        </div>
      )}
    </div>
  );
}