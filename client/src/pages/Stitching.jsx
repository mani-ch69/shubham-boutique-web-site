import { useState } from 'react';
import { Ruler, Upload, Send, ChevronRight, ChevronLeft } from 'lucide-react';

const Stitching = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    measurements: {},
    instructions: '',
    designId: ''
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-serif text-[#4A3B33] mb-4">Online Stitching Service</h1>
        <p className="text-[#7D6B5D]">Get your perfect fit from the comfort of your home</p>
      </div>

      {/* Progress Bar */}
      <div className="flex items-center justify-between mb-12 relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-[#F5E6D3] -z-10"></div>
        <div className={`absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-[#D4AF37] -z-10 transition-all duration-500`} style={{ width: `${(step - 1) * 50}%` }}></div>
        {[1, 2, 3].map(i => (
          <div key={i} className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${step >= i ? 'bg-[#D4AF37] text-white' : 'bg-[#F5E6D3] text-[#7D6B5D]'}`}>
            {i}
          </div>
        ))}
      </div>

      <div className="bg-white rounded-3xl p-8 shadow-xl border border-[#F5E6D3]">
        {step === 1 && (
          <div className="animate-fadeIn">
            <h2 className="text-2xl font-serif text-[#4A3B33] mb-6 flex items-center">
              <Ruler className="mr-2 text-[#D4AF37]" /> Enter Your Measurements (Inches)
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {['Height', 'Bust', 'Waist', 'Hip', 'Shoulder', 'Sleeve', 'Neck', 'Armhole', 'Dress Length'].map(field => (
                <div key={field}>
                  <label className="block text-sm font-medium text-[#4A3B33] mb-1">{field}</label>
                  <input type="number" step="0.1" className="w-full px-4 py-2 border border-[#F5E6D3] rounded-xl focus:outline-none focus:border-[#D4AF37]" placeholder="0.0" />
                </div>
              ))}
            </div>
            <button onClick={nextStep} className="mt-10 w-full py-4 bg-[#D4AF37] text-white rounded-xl font-bold hover:bg-[#B8962D] transition-all flex items-center justify-center">
              Next Step <ChevronRight className="ml-2" />
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="animate-fadeIn">
            <h2 className="text-2xl font-serif text-[#4A3B33] mb-6 flex items-center">
              <Upload className="mr-2 text-[#D4AF37]" /> Upload Reference Photos
            </h2>
            <div className="space-y-6">
              <div className="border-2 border-dashed border-[#F5E6D3] rounded-2xl p-8 text-center hover:border-[#D4AF37] transition-colors cursor-pointer">
                <p className="text-[#7D6B5D]">Drag and drop your fabric or design photos here</p>
                <p className="text-xs text-gray-400 mt-2">Maximum file size: 5MB (JPG, PNG)</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#4A3B33] mb-1">Special Instructions</label>
                <textarea className="w-full px-4 py-2 border border-[#F5E6D3] rounded-xl focus:outline-none focus:border-[#D4AF37] h-32" placeholder="e.g. Boat neck, elbow length sleeves with lace..."></textarea>
              </div>
            </div>
            <div className="flex gap-4 mt-10">
              <button onClick={prevStep} className="flex-1 py-4 border-2 border-[#D4AF37] text-[#D4AF37] rounded-xl font-bold hover:bg-[#FFF9F2] transition-all flex items-center justify-center">
                <ChevronLeft className="mr-2" /> Previous
              </button>
              <button onClick={nextStep} className="flex-1 py-4 bg-[#D4AF37] text-white rounded-xl font-bold hover:bg-[#B8962D] transition-all flex items-center justify-center">
                Review Order <ChevronRight className="ml-2" />
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="animate-fadeIn text-center">
            <h2 className="text-2xl font-serif text-[#4A3B33] mb-6">Review & Submit</h2>
            <p className="mb-8 text-[#7D6B5D]">Please double check your measurements before submitting. Our team will contact you on WhatsApp for confirmation.</p>
            <div className="bg-[#FFF9F2] p-6 rounded-2xl text-left mb-8 space-y-2">
                <p><strong>Design:</strong> Custom Selection</p>
                <p><strong>Total Items:</strong> 1 Dress</p>
                <p><strong>Delivery Estimate:</strong> 7-10 Business Days</p>
            </div>
            <div className="flex gap-4">
              <button onClick={prevStep} className="flex-1 py-4 border-2 border-[#D4AF37] text-[#D4AF37] rounded-xl font-bold hover:bg-[#FFF9F2] transition-all flex items-center justify-center">
                <ChevronLeft className="mr-2" /> Edit Details
              </button>
              <button className="flex-1 py-4 bg-[#4A3B33] text-white rounded-xl font-bold hover:bg-[#2A211D] transition-all flex items-center justify-center">
                Submit Order <Send className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Stitching;
