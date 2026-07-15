import React from 'react';
import { BarChart3, TrendingUp, DollarSign, Package, Users } from 'lucide-react';

const ReportManagement = () => {
  return (
    <div className="animate-in fade-in duration-500">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-serif font-bold text-[#2D1B4E]">Reports & Analytics</h2>
          <p className="text-gray-500">Detailed insights into sales, orders, and growth.</p>
        </div>
        <button className="px-6 py-2 bg-[#2D1B4E] text-white rounded-xl font-bold shadow-lg">Export All (PDF)</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <ReportSummary icon={<DollarSign />} label="Monthly Sales" value="₹85,400" trend="+15%" />
        <ReportSummary icon={<Package />} label="Stitching Revenue" value="₹42,200" trend="+8%" />
        <ReportSummary icon={<Users />} label="New Customers" value="28" trend="+12%" />
        <ReportSummary icon={<TrendingUp />} label="Order Growth" value="24%" trend="+5%" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-[#F5E6D3]">
            <h3 className="text-xl font-serif font-bold text-[#2D1B4E] mb-6 text-center">Sales Performance</h3>
            <div className="h-64 flex items-end justify-center gap-4">
                {[30, 50, 70, 45, 90, 60, 80].map((h, i) => (
                    <div key={i} className="w-8 bg-[#F472B6]/10 rounded-t-lg relative">
                        <div style={{ height: `${h}%` }} className="absolute bottom-0 w-full bg-[#F472B6] rounded-t-lg"></div>
                    </div>
                ))}
            </div>
            <div className="flex justify-between mt-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest px-4">
                <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
            </div>
        </div>
        <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-[#F5E6D3]">
            <h3 className="text-xl font-serif font-bold text-[#2D1B4E] mb-6">Top Selling Categories</h3>
            <div className="space-y-6">
                <CategoryBar label="Bridal Wear" percent="85%" color="#F472B6" />
                <CategoryBar label="Party Wear" percent="65%" color="#673AB7" />
                <CategoryBar label="Kurtis & Suits" percent="45%" color="#2D1B4E" />
                <CategoryBar label="Kids Wear" percent="25%" color="#FF9800" />
            </div>
        </div>
      </div>
    </div>
  );
};

const ReportSummary = ({ icon, label, value, trend }) => (
  <div className="bg-white p-6 rounded-3xl border border-[#F5E6D3] relative overflow-hidden">
    <div className="absolute top-0 right-0 p-4 opacity-5">{icon}</div>
    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{label}</p>
    <p className="text-2xl font-bold text-[#2D1B4E]">{value}</p>
    <p className="text-[10px] font-bold text-green-500 mt-1">{trend} from last month</p>
  </div>
);

const CategoryBar = ({ label, percent, color }) => (
    <div className="space-y-2">
        <div className="flex justify-between text-sm">
            <span className="font-medium text-[#2D1B4E]">{label}</span>
            <span className="font-bold text-[#F472B6]">{percent}</span>
        </div>
        <div className="w-full h-2 bg-[#FDF2F8] rounded-full overflow-hidden">
            <div style={{ width: percent, backgroundColor: color }} className="h-full"></div>
        </div>
    </div>
);

export default ReportManagement;
