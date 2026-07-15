import React, { useState, useEffect } from 'react';
import { Search, Eye, Filter, MoreVertical, CheckCircle2, Clock, Scissors, Truck } from 'lucide-react';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const StitchingManagement = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    const token = localStorage.getItem('token');
    try {
      const res = await axios.get(`${API_URL}/stitching/all`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setOrders(res.data);
    } catch (err) {
      console.error("Error fetching orders", err);
    } finally {
      setLoading(false);
    }
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-700';
      case 'processing': return 'bg-blue-100 text-blue-700';
      case 'ready': return 'bg-green-100 text-green-700';
      case 'delivered': return 'bg-gray-100 text-gray-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="animate-in fade-in duration-500">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-serif font-bold text-[#2D1B4E]">Stitching Orders</h2>
          <p className="text-gray-500">Manage custom tailoring orders and status.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-2 bg-white border border-[#F5E6D3] text-[#2D1B4E] rounded-xl font-bold shadow-sm hover:bg-[#FDF2F8] transition-all">
            Export List
          </button>
        </div>
      </div>

      {/* Stats Summary for Orders */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <OrderStat icon={<Clock className="text-yellow-500" />} label="New Orders" value="12" />
        <OrderStat icon={<Scissors className="text-blue-500" />} label="In Tailoring" value="28" />
        <OrderStat icon={<CheckCircle2 className="text-green-500" />} label="Ready for Trial" value="15" />
        <OrderStat icon={<Truck className="text-purple-500" />} label="Dispatched" value="45" />
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-[2rem] shadow-sm border border-[#F5E6D3] overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-[#FDF2F8] text-[#2D1B4E] text-xs uppercase font-bold tracking-widest">
            <tr>
              <th className="px-8 py-5">Order ID</th>
              <th className="px-6 py-5">Customer</th>
              <th className="px-6 py-5">Design</th>
              <th className="px-6 py-5">Order Date</th>
              <th className="px-6 py-5">Status</th>
              <th className="px-8 py-5 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#FDF2F8]">
            {loading ? (
              <tr><td colSpan="6" className="text-center py-20">Loading orders...</td></tr>
            ) : orders.length > 0 ? orders.map((order) => (
              <tr key={order.id} className="hover:bg-[#FDF2F8]/50 transition-colors">
                <td className="px-8 py-4 font-mono text-xs font-bold text-[#F472B6]">#{order.id.slice(0,8).toUpperCase()}</td>
                <td className="px-6 py-4">
                  <div className="text-sm font-bold text-[#2D1B4E]">{order.full_name || 'Walk-in Customer'}</div>
                  <div className="text-[10px] text-gray-400">{order.phone || 'No Phone'}</div>
                </td>
                <td className="px-6 py-4 text-sm text-[#2D1B4E] font-medium">{order.design_name || 'Custom Design'}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{new Date(order.created_at).toLocaleDateString()}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${getStatusStyle(order.status)}`}>
                    {order.status}
                  </span>
                </td>
                <td className="px-8 py-4 text-right">
                  <button className="p-2 text-[#4A3B33] hover:bg-[#FDF2F8] rounded-lg transition-all">
                    <Eye size={18} />
                  </button>
                </td>
              </tr>
            )) : (
                <tr><td colSpan="6" className="text-center py-20 text-gray-400 italic">No orders found.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const OrderStat = ({ icon, label, value }) => (
  <div className="bg-white p-4 rounded-2xl border border-[#F5E6D3] flex items-center gap-4 shadow-sm">
    <div className="w-12 h-12 rounded-xl bg-[#FDF2F8] flex items-center justify-center">
      {icon}
    </div>
    <div>
      <p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">{label}</p>
      <p className="text-lg font-bold text-[#2D1B4E]">{value}</p>
    </div>
  </div>
);

export default StitchingManagement;
