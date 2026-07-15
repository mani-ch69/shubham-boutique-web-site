import React, { useState, useEffect } from 'react';
import { Search, Plus, Edit, Trash2, ExternalLink, Filter } from 'lucide-react';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const CatalogManagement = () => {
  const [designs, setDesigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingDesign, setEditingDesign] = useState(null);
  const [formData, setFormData] = useState({
    code: '', name: '', categoryId: '', fabricSuggestion: '', price: '', imageUrl: ''
  });

  useEffect(() => {
    fetchDesigns();
  }, []);

  const fetchDesigns = async () => {
    try {
      const res = await axios.get(`${API_URL}/catalog`);
      setDesigns(res.data);
    } catch (err) {
      console.error("Error fetching designs", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      if (editingDesign) {
        // Update logic (to be added to backend)
        await axios.put(`${API_URL}/catalog/${editingDesign.id}`, formData, {
          headers: { Authorization: `Bearer ${token}` }
        });
      } else {
        await axios.post(`${API_URL}/catalog`, formData, {
          headers: { Authorization: `Bearer ${token}` }
        });
      }
      setShowModal(false);
      setEditingDesign(null);
      setFormData({ code: '', name: '', categoryId: '', fabricSuggestion: '', price: '', imageUrl: '' });
      fetchDesigns();
    } catch (err) {
      alert("Error saving design. Make sure you are logged in as admin.");
    }
  };

  return (
    <div className="animate-in fade-in duration-500">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-serif font-bold text-[#2D1B4E]">Catalog Management</h2>
          <p className="text-gray-500">Add, edit or delete your boutique designs.</p>
        </div>
        <button
          onClick={() => { setEditingDesign(null); setShowModal(true); }}
          className="flex items-center gap-2 px-6 py-3 bg-[#F472B6] text-white rounded-xl font-bold shadow-lg hover:bg-[#E11D48] transition-all"
        >
          <Plus size={20} /> Add New Design
        </button>
      </div>

      {/* Filters & Search */}
      <div className="bg-white p-4 rounded-2xl shadow-sm border border-[#F5E6D3] mb-8 flex flex-wrap gap-4 items-center">
        <div className="relative flex-1 min-w-[300px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input type="text" placeholder="Search by name or code..." className="w-full pl-10 pr-4 py-2 bg-[#FDF2F8] border-none rounded-xl text-sm" />
        </div>
        <select className="px-4 py-2 bg-[#FDF2F8] border-none rounded-xl text-sm outline-none">
          <option>All Categories</option>
          <option>Bridal</option>
          <option>Party Wear</option>
        </select>
        <button className="p-2 bg-[#FDF2F8] text-[#2D1B4E] rounded-xl">
          <Filter size={20} />
        </button>
      </div>

      {/* Designs Table */}
      <div className="bg-white rounded-[2rem] shadow-sm border border-[#F5E6D3] overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-[#FDF2F8] text-[#2D1B4E] text-xs uppercase font-bold tracking-widest">
            <tr>
              <th className="px-8 py-5">Image</th>
              <th className="px-6 py-5">Code</th>
              <th className="px-6 py-5">Name</th>
              <th className="px-6 py-5">Category</th>
              <th className="px-6 py-5">Price</th>
              <th className="px-8 py-5 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#FDF2F8]">
            {loading ? (
              <tr><td colSpan="6" className="text-center py-20">Loading designs...</td></tr>
            ) : designs.map((design) => (
              <tr key={design.id} className="hover:bg-[#FDF2F8]/50 transition-colors">
                <td className="px-8 py-4">
                  <div className="w-12 h-16 bg-gray-100 rounded-lg overflow-hidden border border-[#F5E6D3]">
                    <img src={design.image_url} alt="" className="w-full h-full object-cover" />
                  </div>
                </td>
                <td className="px-6 py-4 font-mono text-xs font-bold text-[#F472B6]">{design.code}</td>
                <td className="px-6 py-4 font-medium text-[#2D1B4E]">{design.name}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{design.category_name}</td>
                <td className="px-6 py-4 font-bold text-[#2D1B4E]">₹{design.price}</td>
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

      {/* Add/Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div className="bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
            <div className="p-8 border-b border-[#FDF2F8] flex justify-between items-center">
              <h3 className="text-2xl font-serif font-bold text-[#2D1B4E]">
                {editingDesign ? 'Edit Design' : 'Add New Design'}
              </h3>
              <button onClick={() => setShowModal(false)} className="p-2 hover:bg-[#FDF2F8] rounded-full text-gray-400"><X size={20} /></button>
            </div>
            <form onSubmit={handleSubmit} className="p-8 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Design Code</label>
                  <input
                    type="text"
                    value={formData.code}
                    onChange={(e) => setFormData({...formData, code: e.target.value})}
                    placeholder="SB-001"
                    className="w-full px-4 py-3 bg-[#FDF2F8] border-none rounded-xl focus:ring-2 focus:ring-[#F472B6]/20 outline-none"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Price (₹)</label>
                  <input
                    type="number"
                    value={formData.price}
                    onChange={(e) => setFormData({...formData, price: e.target.value})}
                    placeholder="5999"
                    className="w-full px-4 py-3 bg-[#FDF2F8] border-none rounded-xl focus:ring-2 focus:ring-[#F472B6]/20 outline-none"
                    required
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Design Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Bridal Pink Lehenga"
                  className="w-full px-4 py-3 bg-[#FDF2F8] border-none rounded-xl focus:ring-2 focus:ring-[#F472B6]/20 outline-none"
                  required
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Image URL (Cloudinary)</label>
                <input
                  type="text"
                  value={formData.imageUrl}
                  onChange={(e) => setFormData({...formData, imageUrl: e.target.value})}
                  placeholder="https://..."
                  className="w-full px-4 py-3 bg-[#FDF2F8] border-none rounded-xl focus:ring-2 focus:ring-[#F472B6]/20 outline-none"
                  required
                />
              </div>
              <div className="pt-6">
                <button type="submit" className="w-full py-4 bg-[#2D1B4E] text-white rounded-2xl font-bold hover:bg-[#1A102E] transition-all shadow-xl">
                  {editingDesign ? 'Update Design' : 'Save Design'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

const X = ({ size }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>;

export default CatalogManagement;
