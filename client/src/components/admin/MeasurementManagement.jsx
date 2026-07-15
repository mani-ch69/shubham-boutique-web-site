import React, { useState } from 'react';
import { Ruler, User, Edit, Search } from 'lucide-react';

const MeasurementManagement = () => {
  const [measurements, setMeasurements] = useState([
    { id: 1, name: 'Neha Sharma', height: '5.4"', bust: '34"', waist: '28"', hip: '36"', date: '10 May 2026' },
    { id: 2, name: 'Pooja Verma', height: '5.2"', bust: '36"', waist: '30"', hip: '38"', date: '12 May 2026' },
  ]);

  return (
    <div className="animate-in fade-in duration-500">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-serif font-bold text-[#2D1B4E]">Customer Measurements</h2>
          <p className="text-gray-500">Quick access to body measurements for custom tailoring.</p>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input type="text" placeholder="Search by name..." className="pl-10 pr-6 py-3 bg-white border border-[#F5E6D3] rounded-xl text-sm outline-none" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {measurements.map((m) => (
          <div key={m.id} className="bg-white p-8 rounded-[2rem] shadow-sm border border-[#F5E6D3] hover:shadow-xl transition-all">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#FDF2F8] text-[#F472B6] rounded-2xl flex items-center justify-center font-bold text-lg">{m.name[0]}</div>
                <div>
                  <h4 className="font-bold text-[#2D1B4E]">{m.name}</h4>
                  <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">Last Updated: {m.date}</p>
                </div>
              </div>
              <button className="p-2 text-gray-400 hover:text-[#F472B6] transition-colors"><Edit size={18} /></button>
            </div>

            <div className="grid grid-cols-4 gap-4">
                <MeasuItem label="Height" val={m.height} />
                <MeasuItem label="Bust" val={m.bust} />
                <MeasuItem label="Waist" val={m.waist} />
                <MeasuItem label="Hip" val={m.hip} />
            </div>
            <button className="mt-6 w-full py-3 bg-[#FDF2F8] text-[#2D1B4E] rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-[#F472B6] hover:text-white transition-all">
                View Full Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const MeasuItem = ({ label, val }) => (
    <div className="text-center p-3 bg-[#FDF2F8] rounded-2xl">
        <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">{label}</p>
        <p className="text-sm font-bold text-[#2D1B4E]">{val}</p>
    </div>
);

export default MeasurementManagement;
