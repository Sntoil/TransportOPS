import React from 'react';
import { Shield, Eye, Edit } from 'lucide-react';
import { MENU_ITEMS } from '../utils/constants';

export default function AssignMenuView({ roles, onSaveRole, currentRole }) {
  const sortedRoles = [...roles].sort((a, b) => a.name.localeCompare(b.name, 'th'));

  const handleToggleMenu = (targetRole, menuId) => {
    let newAccess = [];
    if (targetRole.access.includes('all')) {
         const allMenuIds = MENU_ITEMS.map(m => m.id);
         newAccess = allMenuIds.filter(id => id !== menuId);
    } else {
         if (targetRole.access.includes(menuId)) {
             newAccess = targetRole.access.filter(id => id !== menuId);
         } else {
             newAccess = [...targetRole.access, menuId];
         }
    }
    onSaveRole({ ...targetRole, access: newAccess });
  };
  
  const handleToggleReadOnly = (targetRole, menuId) => {
     const currentReadOnly = targetRole.readOnly || [];
     const newReadOnly = currentReadOnly.includes(menuId)
        ? currentReadOnly.filter(id => id !== menuId)
        : [...currentReadOnly, menuId];
        
     onSaveRole({ ...targetRole, readOnly: newReadOnly });
  };

  return (
    <div className="space-y-6 animate-fade-in">
       <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2"><Shield className="text-blue-600" /> กำหนดสิทธิ์การเข้าถึง (Assign Menu)</h2>
       <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
         <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-4 py-3 text-left font-bold text-gray-500 uppercase min-w-[200px]">ตำแหน่ง</th>
                        {MENU_ITEMS.map(menu => (
                            <th key={menu.id} className="px-2 py-3 text-center font-bold text-gray-500 text-xs w-24">
                                <div className="flex flex-col items-center gap-1">
                                    <menu.icon size={16} />
                                    <span>{menu.label}</span>
                                </div>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {sortedRoles.map((role, idx) => (
                        <tr key={role.docId || role.id || idx} className="hover:bg-gray-50">
                            <td className="px-4 py-3 font-medium text-gray-900">{role.name}</td>
                            {MENU_ITEMS.map(menu => {
                                const hasAccess = role.access?.includes('all') || role.access?.includes(menu.id);
                                const isReadOnly = role.readOnly?.includes(menu.id);
                                return (
                                    <td key={menu.id} className="px-2 py-3 text-center">
                                        <div className="flex flex-col items-center gap-2">
                                            <label className="flex items-center space-x-2 cursor-pointer">
                                                <input 
                                                    type="checkbox" 
                                                    className="form-checkbox h-4 w-4 text-blue-600 rounded"
                                                    checked={!!hasAccess}
                                                    onChange={() => handleToggleMenu(role, menu.id)}
                                                    disabled={role.id === 'dgm' && menu.id === 'assign_menu'} 
                                                />
                                            </label>
                                            {hasAccess && (
                                                <button 
                                                    onClick={() => handleToggleReadOnly(role, menu.id)}
                                                    className={`text-[10px] px-1.5 py-0.5 rounded border flex items-center gap-1 transition-colors ${isReadOnly ? 'bg-yellow-100 text-yellow-700 border-yellow-200' : 'bg-white text-gray-500 border-gray-200 hover:bg-gray-50'}`}
                                                    title={isReadOnly ? "View Only" : "Full Access"}
                                                >
                                                    {isReadOnly ? <Eye size={10} /> : <Edit size={10} />}
                                                    {isReadOnly ? 'View' : 'Edit'}
                                                </button>
                                            )}
                                        </div>
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
         </div>
         <div className="p-4 bg-gray-50 text-xs text-gray-500 border-t">
            * <strong>View Only:</strong> สามารถดูข้อมูลได้แต่ไม่สามารถแก้ไข/ลบ/เพิ่มข้อมูลได้ <br/>
            * <strong>Edit:</strong> สามารถจัดการข้อมูลได้เต็มรูปแบบ
         </div>
       </div>
    </div>
  );
}