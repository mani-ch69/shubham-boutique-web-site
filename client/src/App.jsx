import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Stitching from './pages/Stitching';
import Gallery from './pages/Gallery';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#FFFDFB] text-[#4A3B33] font-sans">
        <Routes>
          {/* Admin routes without shared Navbar */}
          <Route path="/admin/*" element={<AdminDashboard />} />

          {/* User routes with shared Navbar */}
          <Route path="/*" element={
            <>
              <Navbar />
              <main>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/catalog" element={<Catalog />} />
                  <Route path="/stitching" element={<Stitching />} />
                  <Route path="/gallery" element={<Gallery />} />
                </Routes>
              </main>
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
