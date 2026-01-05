import { LayoutDashboard, ArrowDownToLine, ArrowUpFromLine, Building2, AlertTriangle, ClipboardList, History, Gavel, Users, Shield } from 'lucide-react';

export const INITIAL_MEMBERS = [];
export const INITIAL_TASKS = [];
export const INITIAL_LOGS = [];
export const INITIAL_ACTION_LOGS = [];
export const INITIAL_RULES = [];
export const INITIAL_MANUAL_SCORES = [];

export const DEFAULT_ROLES = [
  { id: 'dgm', name: 'DGM', access: ['all'], readOnly: [] },
  { id: 'dm', name: 'DM', access: ['all'], readOnly: [] },
  { id: 'rp_in', name: 'Route Planner Inbound', access: ['dashboard', 'inbound', 'problems', 'scorelog', 'rules'], readOnly: ['scorelog', 'rules'] },
  { id: 'rp_out', name: 'Route Planner Outbound', access: ['dashboard', 'outbound', 'problems', 'scorelog', 'rules'], readOnly: ['scorelog', 'rules'] },
  { id: 'rp_int', name: 'Route Planner Internal', access: ['dashboard', 'internal', 'problems', 'scorelog', 'rules'], readOnly: ['scorelog', 'rules'] },
];

export const MENU_ITEMS = [
  { id: 'dashboard', label: 'หน้าหลัก', icon: LayoutDashboard },
  { id: 'inbound', label: 'งานรถโอนย้าย', icon: ArrowDownToLine },
  { id: 'outbound', label: 'งานส่งสินค้า', icon: ArrowUpFromLine },
  { id: 'internal', label: 'งานรถส่วนกลาง', icon: Building2 },
  { id: 'problems', label: 'Problem Log', icon: AlertTriangle },
  { id: 'scorelog', label: 'ประวัติคะแนน', icon: ClipboardList },
  { id: 'actionlog', label: 'ประวัติการทำงาน', icon: History },
  { id: 'rules', label: 'ระเบียบการให้คะแนน', icon: Gavel },
  { id: 'team', label: 'จัดการทีม', icon: Users },
  { id: 'assign_menu', label: 'กำหนดสิทธิ์ (Assign Menu)', icon: Shield }
];