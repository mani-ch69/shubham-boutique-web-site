import { Link } from 'react-router-dom';
import { ArrowRight, Star, Scissors, Palette, ShoppingBag } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-serif mb-6 drop-shadow-lg">Elegance in Every Stitch</h1>
          <p className="text-xl md:text-2xl font-light mb-10 tracking-wide drop-shadow-md">Premium Custom Designing & Bridal Wear Specialist</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/catalog" className="px-10 py-4 bg-[#D4AF37] text-white rounded-full text-lg font-semibold hover:bg-[#B8962D] transition-all shadow-xl">
              Explore Catalog
            </Link>
            <Link to="/stitching" className="px-10 py-4 border-2 border-white text-white rounded-full text-lg font-semibold hover:bg-white hover:text-[#D4AF37] transition-all shadow-xl backdrop-blur-sm">
              Book Stitching
            </Link>
          </div>
        </div>
      </section>

      {/* Services Summary */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-[#4A3B33] mb-4">Our Expertise</h2>
            <div className="w-20 h-1 bg-[#D4AF37] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <ServiceCard
              icon={<Scissors className="w-10 h-10 text-[#D4AF37]" />}
              title="Custom Stitching"
              desc="Perfect fit tailored to your unique measurements with premium finishing."
            />
            <ServiceCard
              icon={<Star className="w-10 h-10 text-[#D4AF37]" />}
              title="Bridal Wear"
              desc="Exclusive designer lehengas and suits for your most special day."
            />
            <ServiceCard
              icon={<Palette className="w-10 h-10 text-[#D4AF37]" />}
              title="Designer Catalog"
              desc="Browse hundreds of latest designs and pick your favorite style."
            />
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-20 bg-[#FFF9F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-serif text-[#4A3B33] mb-12">Featured Collection</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Dummy items for now */}
                {[1,2,3,4].map(i => (
                    <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
                        <div className="h-80 bg-gray-200 overflow-hidden">
                            <img src={`https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=3086&auto=format&fit=crop`} alt="Design" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="p-4">
                            <h3 className="text-lg font-serif text-[#4A3B33]">Bridal Lehenga {i}</h3>
                            <p className="text-[#D4AF37] font-bold">Code: SB-00{i}</p>
                            <Link to="/catalog" className="mt-3 inline-flex items-center text-sm font-semibold text-[#4A3B33] hover:text-[#D4AF37]">
                                View Details <ArrowRight className="w-4 h-4 ml-1" />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            <Link to="/catalog" className="mt-12 inline-block px-8 py-3 bg-[#4A3B33] text-white rounded-full hover:bg-[#2A211D] transition-all">
                View All Designs
            </Link>
        </div>
      </section>
    </div>
  );
};

const ServiceCard = ({ icon, title, desc }) => (
  <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-[#FFFDFB] border border-[#F5E6D3] hover:border-[#D4AF37] transition-all shadow-sm">
    <div className="mb-6 p-4 bg-[#FFF9F2] rounded-full">{icon}</div>
    <h3 className="text-2xl font-serif text-[#4A3B33] mb-4">{title}</h3>
    <p className="text-[#7D6B5D] leading-relaxed">{desc}</p>
  </div>
);

export default Home;
