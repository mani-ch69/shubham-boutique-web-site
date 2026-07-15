import React, { useState } from 'react';
import { ShoppingBag, Plus, Edit, Trash2 } from 'lucide-react';

const ShopManagement = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Bridal Bangle Set', category: 'Jewellery', price: '₹1,299', stock: 12, status: 'Active' },
    { id: 2, name: 'Silk Hair Accessory', category: 'Hair', price: '₹450', stock: 45, status: 'Active' },
    { id: 3, name: 'Matte Lipstick (Rose)', category: 'Makeup', price: '₹899', stock: 0, status: 'Out of Stock' },
  ]);

  return (
    <div className="animate-in fade-in duration-500">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-serif font-bold text-[#2D1B4E]">Shop Products</h2>
          <p className="text-gray-500">Manage makeup, jewellery, and accessories inventory.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-[#F472B6] text-white rounded-xl font-bold shadow-lg hover:bg-[#E11D48] transition-all">
          <Plus size={20} /> Add New Product
        </button>
      </div>

      <div className="bg-white rounded-[2rem] shadow-sm border border-[#F5E6D3] overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-[#FDF2F8] text-[#2D1B4E] text-xs uppercase font-bold tracking-widest">
            <tr>
              <th className="px-8 py-5">Product</th>
              <th className="px-6 py-5">Category</th>
              <th className="px-6 py-5">Price</th>
              <th className="px-6 py-5">Stock</th>
              <th className="px-6 py-5">Status</th>
              <th className="px-8 py-5 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#FDF2F8]">
            {products.map((p) => (
              <tr key={p.id} className="hover:bg-[#FDF2F8]/50 transition-colors">
                <td className="px-8 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center"><ShoppingBag size={18} className="text-gray-400" /></div>
                    <span className="font-medium text-[#2D1B4E]">{p.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-xs font-bold text-gray-400 uppercase">{p.category}</td>
                <td className="px-6 py-4 font-bold text-[#2D1B4E]">{p.price}</td>
                <td className="px-6 py-4 text-sm font-medium">{p.stock} units</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${p.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {p.status}
                  </span>
                </td>
                <td className="px-8 py-4 text-right">
                  <div className="flex justify-end gap-2">
                    <button className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg"><Edit size={16} /></button>
                    <button className="p-2 text-red-500 hover:bg-red-50 rounded-lg"><Trash2 size={16} /></button>
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

export default ShopManagement;
