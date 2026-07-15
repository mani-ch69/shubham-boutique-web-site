import React, { useState } from 'react';
import { Camera, Upload, Trash2, Heart, Plus } from 'lucide-react';

const GalleryManagement = () => {
  // Dummy gallery items for UI demonstration
  const [items, setItems] = useState([
    { id: 1, url: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=2000&auto=format&fit=crop', title: 'Bridal Work #1' },
    { id: 2, url: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=3086&auto=format&fit=crop', title: 'Pink Lehenga' },
  ]);

  return (
    <div className="animate-in fade-in duration-500">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-serif font-bold text-[#2D1B4E]">Gallery Management</h2>
          <p className="text-gray-500">Showcase your best creations in the digital portfolio.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-[#F472B6] text-white rounded-xl font-bold shadow-lg hover:bg-[#E11D48] transition-all">
          <Upload size={20} /> Upload Photos
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {/* Upload Card */}
        <div className="aspect-[3/4] border-2 border-dashed border-[#F5E6D3] rounded-[2rem] flex flex-col items-center justify-center text-[#F472B6] hover:bg-white transition-all cursor-pointer group">
          <div className="p-4 bg-[#FDF2F8] rounded-full group-hover:scale-110 transition-transform">
            <Plus size={32} />
          </div>
          <p className="mt-4 font-bold text-xs uppercase tracking-widest">New Upload</p>
        </div>

        {items.map((item) => (
          <div key={item.id} className="group relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all">
            <img src={item.url} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2D1B4E]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
              <p className="text-white font-serif text-lg mb-4">{item.title}</p>
              <div className="flex gap-2">
                <button className="flex-1 py-2 bg-white text-[#2D1B4E] rounded-xl text-xs font-bold flex items-center justify-center gap-2">
                   <Heart size={14} /> Featured
                </button>
                <button className="p-2 bg-red-500 text-white rounded-xl">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryManagement;
