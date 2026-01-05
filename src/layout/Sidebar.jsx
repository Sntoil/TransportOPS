import React from 'react';
import { LayoutDashboard, ChevronLeft, ChevronRight, LogOut } from 'lucide-react';
import { MENU_ITEMS } from '../utils/constants';

function MenuButton({ id, label, icon: Icon, activeTab, setActiveTab, isSidebarOpen, colorClass = "text-gray-500" }) {
  return (
    <button onClick={() => setActiveTab(id)} className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 mb-1 ${activeTab === id ? 'bg-blue-50 text-blue-700 shadow-sm border border-blue-100 font-medium' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'} ${!isSidebarOpen ? 'justify-center' : ''}`} title={!isSidebarOpen ? label : ''}>
      <Icon size={22} className={`flex-shrink-0 ${activeTab === id ? 'text-blue-600' : colorClass}`} />
      {isSidebarOpen && <span className="truncate text-sm">{label}</span>}
    </button>
  );
}

export default function Sidebar({ isSidebarOpen, setSidebarOpen, activeTab, setActiveTab, appUser, currentUserRole, roles, handleLogout, hasAccess, setIsProfileModalOpen }) {
  const filteredNavItems = MENU_ITEMS.filter(item => hasAccess(item.id));

  return (
    <aside className={`bg-white border-r border-gray-200 hidden md:flex flex-col transition-all duration-300 ease-in-out z-20 shadow-[2px_0_15px_rgba(0,0,0,0.03)] ${isSidebarOpen ? 'w-64' : 'w-20'}`}>
        <div className={`p-4 border-b border-gray-100 flex items-center ${isSidebarOpen ? 'justify-between' : 'justify-center'}`}>
           {isSidebarOpen && (<h1 className="text-xl font-extrabold text-blue-800 flex items-center gap-2 truncate"><div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white flex-shrink-0 shadow-md"><LayoutDashboard size={18} /></div><span className="truncate">Transport<span className="text-blue-500 font-light">Ops</span></span></h1>)}
           {!isSidebarOpen && (<div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-md"><LayoutDashboard size={24} /></div>)}
        </div>
        <div className="flex justify-end px-2 pt-2"><button onClick={() => setSidebarOpen(!isSidebarOpen)} className="p-1.5 rounded-md hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition">{isSidebarOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} className="mx-auto" />}</button></div>
        <nav className="flex-1 p-3 space-y-0.5 overflow-y-auto overflow-x-hidden custom-scrollbar">
          {filteredNavItems.map(item => (
              <MenuButton 
                key={item.id}
                id={item.id} 
                label={item.label} 
                icon={item.icon} 
                activeTab={activeTab} 
                setActiveTab={setActiveTab} 
                isSidebarOpen={isSidebarOpen} 
                colorClass={['inbound', 'outbound', 'internal', 'problems'].includes(item.id) ? 
                    (item.id === 'inbound' ? 'text-green-500' : 
                     item.id === 'outbound' ? 'text-orange-500' : 
                     item.id === 'internal' ? 'text-purple-500' : 'text-red-500') 
                    : "text-gray-500"}
              />
          ))}
        </nav>
        <div className="p-4 border-t border-gray-100 mt-auto">
          <div className={`flex items-center gap-3 ${!isSidebarOpen ? 'justify-center' : ''} cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition`} onClick={() => setIsProfileModalOpen(true)}>
             <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">{appUser.email ? appUser.email.charAt(0).toUpperCase() : 'U'}</div>
             {isSidebarOpen && (
               <div className="flex-1 min-w-0">
                 <p className="text-sm font-medium text-gray-800 truncate">{appUser.email || 'User'}</p>
                 <div className="flex items-center gap-2">
                    <span className="text-[10px] bg-blue-50 text-blue-600 px-1.5 rounded border border-blue-100 truncate max-w-[80px]">{roles.find(r=>r.id===currentUserRole)?.name || currentUserRole}</span>
                 </div>
               </div>
             )}
          </div>
          {isSidebarOpen && (
             <button onClick={handleLogout} className="text-xs text-red-500 hover:text-red-600 flex items-center gap-1 mt-2 w-full justify-center py-1"><LogOut size={10} /> ออกจากระบบ</button>
          )}
        </div>
    </aside>
  );
}