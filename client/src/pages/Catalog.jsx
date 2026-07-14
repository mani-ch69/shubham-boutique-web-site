import { useState, useEffect } from 'react';
import axios from 'axios';
import { Search, Filter, Heart } from 'lucide-react';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const Catalog = () => {
  const [designs, setDesigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('');

  useEffect(() => {
    const fetchDesigns = async () => {
      try {
        const res = await axios.get(`${API_URL}/catalog?category=${category}`);
        setDesigns(res.data);
      } catch (err) {
        console.error("Failed to fetch designs", err);
      } finally {
        setLoading(false);
      }
    };
    fetchDesigns();
  }, [category]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
        <div>
          <h1 className="text-4xl font-serif text-[#4A3B33]">Design Catalog</h1>
          <p className="text-[#7D6B5D] mt-2">Browse our exclusive collection of custom designs</p>
        </div>

        <div className="flex flex-wrap gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search designs..."
              className="pl-10 pr-4 py-2 border border-[#F5E6D3] rounded-full focus:outline-none focus:border-[#D4AF37]"
            />
          </div>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="px-4 py-2 border border-[#F5E6D3] rounded-full focus:outline-none focus:border-[#D4AF37]"
          >
            <option value="">All Categories</option>
            <option value="Bridal">Bridal</option>
            <option value="Lehenga">Lehenga</option>
            <option value="Kurti">Kurti</option>
            <option value="Blouse">Blouse</option>
          </select>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#D4AF37]"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {designs.length > 0 ? designs.map((design) => (
            <div key={design.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group border border-[#F5E6D3]">
              <div className="relative h-80 overflow-hidden">
                <img
                  src={design.image_url || 'https://via.placeholder.com/400x600'}
                  alt={design.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full text-[#4A3B33] hover:text-red-500 transition-colors">
                  <Heart className="w-5 h-5" />
                </button>
              </div>
              <div className="p-5">
                <div className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest mb-1">{design.category_name}</div>
                <h3 className="text-xl font-serif text-[#4A3B33] mb-1">{design.name}</h3>
                <p className="text-sm text-[#7D6B5D] mb-4">Code: {design.code}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-[#4A3B33]">₹{design.price || 'Contact for Price'}</span>
                  <button className="px-4 py-2 bg-[#4A3B33] text-white text-sm rounded-full hover:bg-[#D4AF37] transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          )) : (
            <div className="col-span-full text-center py-20 text-[#7D6B5D]">
              No designs found in this category.
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Catalog;
