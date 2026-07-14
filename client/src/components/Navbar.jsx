import { Link } from 'react-router-dom';
import { ShoppingBag, User, Heart, Menu } from 'lucide-react';
import useAuthStore from '../store/useAuthStore';

const Navbar = () => {
  const { isAuthenticated, logout } = useAuthStore();

  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-[#F5E6D3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-serif font-bold text-[#D4AF37] tracking-wider">
              SHUBHAM BOUTIQUE
            </Link>
          </div>

          <div className="hidden md:flex space-x-8 items-center text-[#4A3B33] font-medium">
            <Link to="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
            <Link to="/catalog" className="hover:text-[#D4AF37] transition-colors">Catalog</Link>
            <Link to="/gallery" className="hover:text-[#D4AF37] transition-colors">Gallery</Link>
            <Link to="/stitching" className="hover:text-[#D4AF37] transition-colors">Online Stitching</Link>
            <Link to="/shop" className="hover:text-[#D4AF37] transition-colors">Shop</Link>
          </div>

          <div className="flex items-center space-x-5">
            <Link to="/wishlist"><Heart className="w-6 h-6 text-[#4A3B33] hover:text-[#D4AF37] cursor-pointer" /></Link>
            <Link to="/cart"><ShoppingBag className="w-6 h-6 text-[#4A3B33] hover:text-[#D4AF37] cursor-pointer" /></Link>
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <Link to="/profile"><User className="w-6 h-6 text-[#4A3B33] hover:text-[#D4AF37] cursor-pointer" /></Link>
                <button onClick={logout} className="text-sm text-red-500 underline">Logout</button>
              </div>
            ) : (
              <Link to="/login" className="px-5 py-2 bg-[#D4AF37] text-white rounded-full text-sm font-semibold hover:bg-[#B8962D] transition-all">
                Login
              </Link>
            )}
            <Menu className="md:hidden w-7 h-7 text-[#4A3B33]" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
