import React, { useState } from 'react';
import {
  LayoutDashboard, ShoppingCart, Image as ImageIcon, Users,
  Settings, Package, Ruler, ClipboardList, BarChart3,
  Warehouse, LogOut, Menu, X, Bell, Search
} from 'lucide-react';
import CatalogManagement from '../components/admin/CatalogManagement';
import StitchingManagement from '../components/admin/StitchingManagement';
import GalleryManagement from '../components/admin/GalleryManagement';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const menuItems = [
    { id: 'dashboard', icon: <LayoutDashboard />, label: 'Dashboard' },
    { id: 'catalog', icon: <Package />, label: 'Catalog Management' },
    { id: 'gallery', icon: <ImageIcon />, label: 'Gallery Management' },
    { id: 'stitching', icon: <ClipboardList />, label: 'Stitching Orders' },
    { id: 'measurements', icon: <Ruler />, label: 'Measurements' },
    { id: 'shop', icon: <ShoppingCart />, label: 'Shop Products' },
    { id: 'orders', icon: <Package />, label: 'Shop Orders' },
    { id: 'inventory', icon: <Warehouse />, label: 'Inventory' },
    { id: 'customers', icon: <Users />, label: 'Customers' },
    { id: 'reports', icon: <BarChart3 />, label: 'Reports' },
    { id: 'settings', icon: <Settings />, label: 'Settings' },
  ];

  return (
    <div className="flex min-h-screen bg-[#FDF2F8]">
      {/* Sidebar */}
      <aside className={`${isSidebarOpen ? 'w-72' : 'w-20'} bg-[#2D1B4E] text-white transition-all duration-300 flex flex-col sticky top-0 h-screen shadow-2xl z-20`}>
        <div className="p-6 flex items-center justify-between">
          {isSidebarOpen && (
            <div className="flex flex-col">
              <span className="text-xl font-serif font-bold tracking-tighter text-[#F472B6]">Shubham</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/60 -mt-1">Boutique</span>
            </div>
          )}
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 hover:bg-white/10 rounded-lg">
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1 custom-scrollbar">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-4 p-3 rounded-xl transition-all ${
                activeTab === item.id
                ? 'bg-[#F472B6] text-white shadow-lg shadow-[#F472B6]/20'
                : 'hover:bg-white/5 text-white/70 hover:text-white'
              }`}
            >
              <div className="flex-shrink-0">{item.icon}</div>
              {isSidebarOpen && <span className="font-medium text-sm text-left">{item.label}</span>}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-white/10">
          <button className="w-full flex items-center gap-4 p-3 rounded-xl text-red-400 hover:bg-red-400/10 transition-all">
            <LogOut size={20} />
            {isSidebarOpen && <span className="font-medium">Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Header */}
        <header className="bg-white h-20 px-8 flex items-center justify-between border-b border-[#F5E6D3] sticky top-0 z-10 flex-shrink-0">
          <div className="relative w-96 hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search anything..."
              className="w-full pl-10 pr-4 py-2 bg-[#FDF2F8] border-none rounded-full text-sm focus:ring-2 focus:ring-[#F472B6]/20"
            />
          </div>

          <div className="flex items-center gap-6">
            <button className="relative p-2 text-gray-500 hover:bg-[#FDF2F8] rounded-full">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-[#F472B6] rounded-full border-2 border-white"></span>
            </button>
            <div className="flex items-center gap-3 pl-4 border-l border-gray-100">
              <div className="text-right">
                <p className="text-sm font-bold text-[#2D1B4E]">Admin User</p>
                <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Super Admin</p>
              </div>
              <div className="w-10 h-10 bg-[#F472B6] rounded-xl flex items-center justify-center text-white font-bold shadow-md uppercase">A</div>
            </div>
          </div>
        </header>

        {/* Dynamic Content */}
        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          {activeTab === 'dashboard' && <DashboardOverview />}
          {activeTab === 'catalog' && <CatalogManagement />}
          {activeTab === 'stitching' && <StitchingManagement />}
          {activeTab === 'gallery' && <GalleryManagement />}

          {/* placeholder for other tabs */}
          {['measurements', 'shop', 'orders', 'inventory', 'customers', 'reports', 'settings'].includes(activeTab) && (
            <div className="flex flex-col items-center justify-center h-full text-gray-400 italic">
              <Package size={64} className="mb-4 opacity-20" />
              <p>The {activeTab} module is coming soon...</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

const DashboardOverview = () => (
  <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
    <div className="flex justify-between items-end mb-8">
      <div>
        <h2 className="text-3xl font-serif font-bold text-[#2D1B4E]">Overview</h2>
        <p className="text-gray-500">Welcome back, here's what's happening today.</p>
      </div>
      <button className="px-6 py-2 bg-[#2D1B4E] text-white rounded-xl text-sm font-bold hover:bg-[#1A102E] transition-all shadow-lg">
        Download Report
      </button>
    </div>

    {/* Stats Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
      <StatCard label="Total Customers" value="1,245" change="+12.5%" color="pink" />
      <StatCard label="Stitching Orders" value="230" change="+8.2%" color="purple" />
      <StatCard label="Shop Orders" value="1,320" change="+14.1%" color="blue" />
      <StatCard label="Total Revenue" value="₹2,45,800" change="+10.3%" color="green" />
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Chart Placeholder */}
      <div className="lg:col-span-2 bg-white p-8 rounded-[2rem] shadow-sm border border-[#F5E6D3]">
        <h3 className="text-xl font-serif font-bold text-[#2D1B4E] mb-6">Monthly Sales</h3>
        <div className="h-64 flex items-end justify-between gap-2 px-4">
          {[40, 60, 45, 90, 65, 80, 50, 85, 45, 70, 55, 75].map((h, i) => (
            <div key={i} className="flex-1 bg-[#FDF2F8] rounded-t-lg relative group transition-all">
              <div
                style={{ height: `${h}%` }}
                className={`w-full bg-[#F472B6]/20 rounded-t-lg group-hover:bg-[#F472B6] transition-all cursor-pointer`}
              ></div>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-4 px-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
          <span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-[#F5E6D3]">
        <h3 className="text-xl font-serif font-bold text-[#2D1B4E] mb-6">Recent Activity</h3>
        <div className="space-y-6">
          <ActivityItem type="order" title="New Stitching Order" time="2 mins ago" desc="By Neha Sharma" />
          <ActivityItem type="catalog" title="New Design Added" time="45 mins ago" desc="Bridal Lehenga SB-009" />
          <ActivityItem type="user" title="New Customer" time="1 hour ago" desc="Priya Patel registered" />
          <ActivityItem type="inventory" title="Low Stock Alert" time="3 hours ago" desc="Silk Fabric < 5 meters" />
        </div>
      </div>
    </div>
  </div>
);

const StatCard = ({ label, value, change, color }) => (
  <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-[#F5E6D3] hover:shadow-xl hover:shadow-[#F472B6]/5 transition-all group">
    <p className="text-gray-500 text-sm mb-1">{label}</p>
    <div className="flex items-end justify-between">
      <h4 className="text-2xl font-bold text-[#2D1B4E]">{value}</h4>
      <span className="text-green-500 text-xs font-bold bg-green-50 px-2 py-1 rounded-lg">{change}</span>
    </div>
    <div className="mt-4 w-full h-1 bg-[#FDF2F8] rounded-full overflow-hidden">
      <div className={`h-full bg-[#F472B6] w-2/3 transition-all duration-1000 group-hover:w-3/4`}></div>
    </div>
  </div>
);

const ActivityItem = ({ type, title, time, desc }) => (
  <div className="flex gap-4">
    <div className="w-10 h-10 rounded-full bg-[#FDF2F8] flex items-center justify-center flex-shrink-0">
      <Bell size={16} className="text-[#F472B6]" />
    </div>
    <div>
      <p className="text-sm font-bold text-[#2D1B4E]">{title}</p>
      <p className="text-xs text-gray-400 mb-1">{time}</p>
      <p className="text-xs text-[#7D6B5D]">{desc}</p>
    </div>
  </div>
);

export default AdminDashboard;
