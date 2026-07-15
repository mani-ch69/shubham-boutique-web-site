import React, { useState } from 'react';
import { Package, AlertTriangle, ArrowUpRight, ArrowDownLeft, Plus } from 'lucide-react';

const InventoryManagement = () => {
  const [stock, setStock] = useState([
    { id: 1, name: 'Silk Fabric (Pink)', category: 'Fabric', quantity: 15, unit: 'meters', min: 10 },
    { id: 2, name: 'Cotton Yarn', category: 'Thread', quantity: 4, unit: 'boxes', min: 5 },
    { id: 3, name: 'Zari Border Gold', category: 'Lace', quantity: 22, unit: 'meters', min: 15 },
  ]);

  return (
    <div className="animate-in fade-in duration-500">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-serif font-bold text-[#2D1B4E]">Inventory Management</h2>
          <p className="text-gray-500">Track raw materials and boutique supplies.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-[#2D1B4E] text-white rounded-xl font-bold shadow-lg hover:bg-[#1A102E] transition-all">
          <Plus size={20} /> Add Raw Material
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <StockStat label="Items in Stock" value="45" color="blue" />
        <StockStat label="Low Stock Alerts" value="02" color="red" />
        <StockStat label="Recent Usage" value="12m" color="purple" />
      </div>

      <div className="bg-white rounded-[2rem] shadow-sm border border-[#F5E6D3] overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-[#FDF2F8] text-[#2D1B4E] text-xs uppercase font-bold tracking-widest">
            <tr>
              <th className="px-8 py-5">Item Name</th>
              <th className="px-6 py-5">Category</th>
              <th className="px-6 py-5">Current Stock</th>
              <th className="px-6 py-5">Min. Limit</th>
              <th className="px-6 py-5">Status</th>
              <th className="px-8 py-5 text-right">Adjust</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#FDF2F8]">
            {stock.map((item) => (
              <tr key={item.id} className="hover:bg-[#FDF2F8]/50 transition-colors">
                <td className="px-8 py-4 font-medium text-[#2D1B4E]">{item.name}</td>
                <td className="px-6 py-4 text-xs font-bold text-gray-400 uppercase">{item.category}</td>
                <td className="px-6 py-4 font-bold text-[#2D1B4E]">{item.quantity} {item.unit}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{item.min} {item.unit}</td>
                <td className="px-6 py-4">
                  {item.quantity < item.min ? (
                    <span className="flex items-center gap-1 text-red-500 text-[10px] font-bold uppercase">
                      <AlertTriangle size={12} /> Low Stock
                    </span>
                  ) : (
                    <span className="text-green-500 text-[10px] font-bold uppercase">In Stock</span>
                  )}
                </td>
                <td className="px-8 py-4 text-right">
                  <div className="flex justify-end gap-2">
                    <button className="p-2 text-green-500 hover:bg-green-50 rounded-lg"><ArrowUpRight size={16} /></button>
                    <button className="p-2 text-red-500 hover:bg-red-50 rounded-lg"><ArrowDownLeft size={16} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const StockStat = ({ label, value, color }) => (
  <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-[#F5E6D3] flex items-center justify-between">
    <div>
      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{label}</p>
      <p className="text-3xl font-bold text-[#2D1B4E]">{value}</p>
    </div>
    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-[#FDF2F8] text-[#F472B6]`}>
      <Package size={24} />
    </div>
  </div>
);

export default InventoryManagement;
