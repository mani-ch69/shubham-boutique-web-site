import { useState } from 'react';
import { Camera, LayoutGrid, Heart } from 'lucide-react';

const Gallery = () => {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Work' },
    { id: 'bridal', label: 'Bridal' },
    { id: 'suit', label: 'Suits' },
    { id: 'blouse', label: 'Blouses' },
    { id: 'lehenga', label: 'Lehengas' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-serif text-[#4A3B33] mb-4">Our Masterpieces</h1>
        <p className="text-[#7D6B5D] max-w-2xl mx-auto text-lg">A showcase of our recent work, bridal collections, and custom creations.</p>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-8 py-2 rounded-full border-2 transition-all font-medium ${filter === cat.id ? 'bg-[#D4AF37] border-[#D4AF37] text-white' : 'border-[#F5E6D3] text-[#4A3B33] hover:border-[#D4AF37]'}`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
        {[1,2,3,4,5,6,7,8].map(i => (
          <div key={i} className="relative break-inside-avoid rounded-2xl overflow-hidden group shadow-md hover:shadow-2xl transition-shadow">
            <img
              src={`https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=2000&auto=format&fit=crop`}
              alt="Gallery Item"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
               <h4 className="text-white text-xl font-serif mb-1">Bridal Work #{i}</h4>
               <p className="text-white/80 text-sm">Category: Bridal Collection</p>
               <div className="mt-4 flex justify-between items-center">
                  <button className="text-white hover:text-[#D4AF37]"><Heart className="w-6 h-6" /></button>
                  <span className="text-white/60 text-xs">View Details</span>
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
