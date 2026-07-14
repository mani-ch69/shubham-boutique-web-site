import { useState } from 'react';
import { LayoutDashboard, ShoppingCart, Image as ImageIcon, Users, Settings, Package, Ruler } from 'lucide-react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="flex min-h-screen bg-[#F8F5F2]">
      {/* Sidebar */}
      <aside className="w-64 bg-[#4A3B33] text-white p-6 hidden md:block">
        <h2 className="text-xl font-serif font-bold mb-10 tracking-widest text-[#D4AF37]">ADMIN PANEL</h2>
        <nav className="space-y-4">
          <SidebarItem icon={<LayoutDashboard />} label="Dashboard" active={activeTab === 'dashboard'} onClick={() => setActiveTab('dashboard')} />
          <SidebarItem icon={<ShoppingCart />} label="Orders" active={activeTab === 'orders'} onClick={() => setActiveTab('orders')} />
          <SidebarItem icon={<Package />} label="Dress Catalog" active={activeTab === 'catalog'} onClick={() => setActiveTab('catalog')} />
          <SidebarItem icon={<ImageIcon />} label="Gallery" active={activeTab === 'gallery'} onClick={() => setActiveTab('gallery')} />
          <SidebarItem icon={<Users />} label="Customers" active={activeTab === 'customers'} onClick={() => setActiveTab('customers')} />
          <SidebarItem icon={<Settings />} label="Settings" active={activeTab === 'settings'} onClick={() => setActiveTab('settings')} />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <header className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-serif text-[#4A3B33] capitalize">{activeTab}</h1>
          <div className="flex items-center space-x-4">
            <span className="text-[#7D6B5D]">Welcome, Admin</span>
            <div className="w-10 h-10 bg-[#D4AF37] rounded-full"></div>
          </div>
        </header>

        {activeTab === 'dashboard' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatCard label="Total Orders" value="124" trend="+12%" />
            <StatCard label="Active Stitching" value="45" trend="+5%" />
            <StatCard label="New Customers" value="12" trend="+8%" />

            <div className="md:col-span-2 bg-white rounded-3xl p-8 shadow-sm border border-[#F5E6D3]">
              <h3 className="text-xl font-serif mb-6 text-[#4A3B33]">Recent Orders</h3>
              <table className="w-full">
                <thead>
                  <tr className="text-left text-[#7D6B5D] text-sm border-b border-[#F5E6D3]">
                    <th className="pb-4">Order ID</th>
                    <th className="pb-4">Customer</th>
                    <th className="pb-4">Type</th>
                    <th className="pb-4">Status</th>
                  </tr>
                </thead>
                <tbody className="text-[#4A3B33]">
                  {[1,2,3,4,5].map(i => (
                    <tr key={i} className="border-b border-[#F5E6D3] last:border-0">
                      <td className="py-4 font-mono text-sm">#ORD-2026-00{i}</td>
                      <td className="py-4">Customer Name</td>
                      <td className="py-4">Stitching</td>
                      <td className="py-4">
                        <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-bold">Pending</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#F5E6D3]">
              <h3 className="text-xl font-serif mb-6 text-[#4A3B33]">Quick Actions</h3>
              <div className="space-y-4">
                <button className="w-full py-3 bg-[#D4AF37] text-white rounded-xl font-bold hover:bg-[#B8962D] transition-all">Add New Design</button>
                <button className="w-full py-3 border-2 border-[#4A3B33] text-[#4A3B33] rounded-xl font-bold hover:bg-[#4A3B33] hover:text-white transition-all">Upload Gallery Image</button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'catalog' && (
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#F5E6D3]">
             <div className="flex justify-between mb-8">
                <h3 className="text-xl font-serif text-[#4A3B33]">Manage Designs</h3>
                <button className="px-6 py-2 bg-[#D4AF37] text-white rounded-full font-bold">+ Add Design</button>
             </div>
             {/* Simple Catalog Table */}
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                 {[1,2,3,4].map(i => (
                     <div key={i} className="border rounded-xl p-4">
                         <div className="h-40 bg-gray-100 rounded-lg mb-2"></div>
                         <h4 className="font-bold">Bridal Suit {i}</h4>
                         <p className="text-xs text-gray-500">SB-00{i}</p>
                         <div className="flex justify-between mt-4">
                             <button className="text-blue-500 text-sm">Edit</button>
                             <button className="text-red-500 text-sm">Delete</button>
                         </div>
                     </div>
                 ))}
             </div>
          </div>
        )}
      </main>
    </div>
  );
};

const SidebarItem = ({ icon, label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center space-x-4 p-4 rounded-xl transition-all ${active ? 'bg-[#D4AF37] text-white shadow-lg' : 'hover:bg-white/10'}`}
  >
    {icon}
    <span className="font-medium">{label}</span>
  </button>
);

const StatCard = ({ label, value, trend }) => (
  <div className="bg-white rounded-3xl p-6 shadow-sm border border-[#F5E6D3]">
    <p className="text-[#7D6B5D] text-sm mb-2">{label}</p>
    <div className="flex items-end justify-between">
      <h4 className="text-3xl font-bold text-[#4A3B33]">{value}</h4>
      <span className="text-green-500 text-sm font-bold">{trend}</span>
    </div>
  </div>
);

export default AdminDashboard;
