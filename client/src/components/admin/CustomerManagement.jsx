import React, { useState } from 'react';
import { User, Phone, MapPin, History, Search } from 'lucide-react';

const CustomerManagement = () => {
  const [customers, setCustomers] = useState([
    { id: 1, name: 'Neha Sharma', phone: '+91 9876543210', orders: 5, spent: '₹12,500', status: 'Active' },
    { id: 2, name: 'Pooja Verma', phone: '+91 8877665544', orders: 2, spent: '₹5,200', status: 'Active' },
    { id: 3, name: 'Anjali Singh', phone: '+91 7766554433', orders: 1, spent: '₹3,500', status: 'Inactive' },
  ]);

  return (
    <div className="animate-in fade-in duration-500">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-serif font-bold text-[#2D1B4E]">Customer Management</h2>
          <p className="text-gray-500">Manage your boutique's customer base and history.</p>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input type="text" placeholder="Search customers..." className="pl-10 pr-6 py-3 bg-white border border-[#F5E6D3] rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#F472B6]/20" />
        </div>
      </div>

      <div className="bg-white rounded-[2rem] shadow-sm border border-[#F5E6D3] overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-[#FDF2F8] text-[#2D1B4E] text-xs uppercase font-bold tracking-widest">
            <tr>
              <th className="px-8 py-5">Customer</th>
              <th className="px-6 py-5">Contact</th>
              <th className="px-6 py-5">Total Orders</th>
              <th className="px-6 py-5">Total Spent</th>
              <th className="px-6 py-5">Status</th>
              <th className="px-8 py-5 text-right">Profile</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#FDF2F8]">
            {customers.map((c) => (
              <tr key={c.id} className="hover:bg-[#FDF2F8]/50 transition-colors">
                <td className="px-8 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#F472B6] text-white rounded-lg flex items-center justify-center font-bold text-xs uppercase">{c.name[0]}</div>
                    <span className="font-medium text-[#2D1B4E]">{c.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1 text-xs text-[#7D6B5D]">
                    <Phone size={12} className="text-gray-400" /> {c.phone}
                  </div>
                </td>
                <td className="px-6 py-4 text-sm font-bold text-[#2D1B4E]">{c.orders}</td>
                <td className="px-6 py-4 text-sm font-bold text-[#F472B6]">{c.spent}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${c.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                    {c.status}
                  </span>
                </td>
                <td className="px-8 py-4 text-right">
                  <button className="p-2 text-gray-400 hover:text-[#2D1B4E] hover:bg-[#FDF2F8] rounded-lg transition-all">
                    <History size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerManagement;
