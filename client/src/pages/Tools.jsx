import React, { useState } from 'react';
import { Calculator, Paintbrush, Compass, LayoutDashboard, Layers, Coins, HelpCircle, Palette } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ToolCard = ({ icon: Icon, title, desc, onClick }) => (
  <div 
    onClick={onClick}
    className="bg-white p-8 border border-border-divider cursor-pointer group hover:border-accent-gold transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col items-center text-center"
  >
    <div className="w-16 h-16 bg-secondary-bg rounded-full flex items-center justify-center mb-6 group-hover:bg-accent-gold transition-colors duration-300">
      <Icon className="text-accent-gold group-hover:text-white transition-colors duration-300" size={32} />
    </div>
    <h3 className="font-display text-xl text-primary-text mb-3">{title}</h3>
    <p className="font-body text-sm text-secondary-text">{desc}</p>
  </div>
);

const CostEstimator = () => {
  const [result, setResult] = useState(null);
  
  const calculate = (e) => {
    e.preventDefault();
    setResult("₹12L - ₹18L");
  };

  return (
    <div className="bg-white p-8 md:p-12 shadow-xl border border-border-divider max-w-3xl mx-auto">
      <h3 className="font-display text-3xl text-primary-text mb-2">Interior Design Cost Estimator</h3>
      <p className="font-body text-secondary-text mb-8">Get a quick ballpark estimate for your Pune property.</p>
      
      {!result ? (
        <form onSubmit={calculate} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block font-accent text-xs uppercase tracking-wider text-secondary-text mb-2">Property Type</label>
              <select className="w-full border-b border-border-divider pb-2 focus:outline-none focus:border-accent-gold font-body bg-transparent">
                <option>Apartment</option>
                <option>Villa</option>
                <option>Office</option>
              </select>
            </div>
            <div>
              <label className="block font-accent text-xs uppercase tracking-wider text-secondary-text mb-2">BHK Size</label>
              <select className="w-full border-b border-border-divider pb-2 focus:outline-none focus:border-accent-gold font-body bg-transparent">
                <option>1 BHK</option>
                <option>2 BHK</option>
                <option>3 BHK</option>
                <option>4+ BHK</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div>
              <label className="block font-accent text-xs uppercase tracking-wider text-secondary-text mb-2">Area (sq.ft)</label>
              <input type="number" placeholder="1200" className="w-full border-b border-border-divider pb-2 focus:outline-none focus:border-accent-gold font-body bg-transparent" />
            </div>
            <div>
              <label className="block font-accent text-xs uppercase tracking-wider text-secondary-text mb-2">Design Style</label>
              <select className="w-full border-b border-border-divider pb-2 focus:outline-none focus:border-accent-gold font-body bg-transparent">
                <option>Standard</option>
                <option>Premium</option>
                <option>Luxury</option>
              </select>
            </div>
          </div>
          <button type="submit" className="w-full bg-accent-gold text-white font-accent text-sm tracking-wider uppercase py-4 mt-4 hover:bg-accent-dark transition-colors">
            Calculate Estimate
          </button>
        </form>
      ) : (
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12 bg-secondary-bg border border-border-divider">
          <p className="font-accent text-xs uppercase tracking-widest text-secondary-text mb-4">Estimated Range</p>
          <h4 className="font-display text-5xl md:text-6xl text-primary-text mb-8">{result}</h4>
          <p className="font-body text-sm text-secondary-text mb-8 max-w-md mx-auto">This is a ballpark estimate including civil work, custom furniture, lighting, and styling for a Premium finish.</p>
          <button onClick={() => setResult(null)} className="font-accent text-xs tracking-wider uppercase text-accent-gold border-b border-accent-gold pb-1 hover:text-primary-text transition-colors">
            Recalculate
          </button>
        </motion.div>
      )}
    </div>
  );
};

const Tools = () => {
  const [activeTool, setActiveTool] = useState(null);

  const toolsList = [
    { id: 'estimator', icon: Calculator, title: 'Cost Estimator', desc: 'Calculate interior costs based on property size.' },
    { id: 'budget', icon: Coins, title: 'Room Budget Planner', desc: 'Allocate funds per room accurately.' },
    { id: 'palette', icon: Palette, title: 'Color Palette', desc: 'Generate a cohesive scheme.' },
    { id: 'vastu', icon: Compass, title: 'Vastu Checker', desc: 'Analyze floor plan directions.' },
    { id: 'space', icon: LayoutDashboard, title: 'Space Planner', desc: '2D drag-and-drop furniture tool.' },
    { id: 'material', icon: Layers, title: 'Material Compare', desc: 'Marble vs Quartz vs Granite.' },
    { id: 'emi', icon: Calculator, title: 'EMI Calculator', desc: 'Plan your renovation loan.' },
    { id: 'quiz', icon: HelpCircle, title: 'Style Quiz', desc: 'Find your true design aesthetic.' },
  ];

  return (
    <div className="bg-primary-bg min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6">
        
        {!activeTool ? (
          <>
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-display text-primary-text mb-6">Property & Design Tools</h1>
              <p className="font-body text-lg text-secondary-text max-w-2xl mx-auto">
                Empower your interior design journey with our suite of interactive tools and calculators.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {toolsList.map((tool) => (
                <ToolCard key={tool.id} {...tool} onClick={() => setActiveTool(tool.id)} />
              ))}
            </div>
          </>
        ) : (
          <div className="w-full">
             <button 
               onClick={() => setActiveTool(null)}
               className="mb-8 font-accent text-xs uppercase tracking-widest text-secondary-text hover:text-accent-gold transition-colors flex items-center"
             >
               ← Back to Tools
             </button>
             
             {activeTool === 'estimator' ? (
               <CostEstimator />
             ) : (
               <div className="bg-white p-16 text-center shadow-xl border border-border-divider max-w-3xl mx-auto">
                 <div className="w-20 h-20 bg-secondary-bg rounded-full flex items-center justify-center mx-auto mb-6">
                   <Paintbrush className="text-accent-gold" size={32} />
                 </div>
                 <h3 className="font-display text-3xl text-primary-text mb-4">Coming Soon</h3>
                 <p className="font-body text-secondary-text">This tool is currently undergoing a design upgrade. Please check back later or use the Cost Estimator.</p>
               </div>
             )}
          </div>
        )}

      </div>
    </div>
  );
};

export default Tools;
