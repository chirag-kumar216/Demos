import React, { useState } from 'react';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import { motion } from 'framer-motion';

const BeforeAfter = () => {
  const [activeTab, setActiveTab] = useState(0);

  const transformations = [
    { 
      category: 'Living Room',
      before: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80', 
      after: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=1200&q=80', 
      name: 'The Ivory Retreat', loc: 'Koregaon Park, Pune', dur: '8 Weeks', bud: '₹12L - ₹15L',
      changes: ['Flooring replaced with Italian Marble', 'Custom TV Unit with hidden wiring', 'False ceiling with ambient cove lighting', 'New modern plush sofa']
    },
    { 
      category: 'Bedroom',
      before: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?w=1200&q=80', 
      after: 'https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?w=1200&q=80', 
      name: 'Noir & Nude Suite', loc: 'Boat Club Road, Pune', dur: '6 Weeks', bud: '₹8L - ₹10L',
      changes: ['Bespoke tufted headboard', 'Walk-in wardrobe creation', 'Warm wooden flooring', 'Accent wallpaper']
    },
    { 
      category: 'Kitchen',
      before: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=1200&q=80', 
      after: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80', 
      name: 'The Calm Kitchen', loc: 'Wakad, Pune', dur: '4 Weeks', bud: '₹6L - ₹8L',
      changes: ['Modular parallel layout', 'Quartz countertops', 'Built-in appliances', 'Handle-less acrylic cabinets']
    },
    { 
      category: 'Bathroom',
      before: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&q=80', 
      after: 'https://images.unsplash.com/photo-1620626011761-996317702782?w=1200&q=80', 
      name: 'Marble & Mist', loc: 'Aundh, Pune', dur: '3 Weeks', bud: '₹4L - ₹5L',
      changes: ['Complete plumbing overhaul', 'Wall-hung commode', 'Rain shower panel', 'Anti-skid matte tiles']
    },
    { 
      category: 'Home Office',
      before: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=1200&q=80', 
      after: 'https://images.unsplash.com/photo-1585841378924-a7c3d8ce2e55?w=1200&q=80', 
      name: 'Viman Nagar Workspace', loc: 'Viman Nagar, Pune', dur: '5 Weeks', bud: '₹5L - ₹7L',
      changes: ['Ergonomic desk setup', 'Acoustic wall paneling', 'Zoom-ready background design', 'Custom bookshelf']
    }
  ];

  return (
    <div className="bg-primary-bg min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-display text-primary-text mb-6">Before & After</h1>
          <p className="font-body text-lg text-secondary-text max-w-2xl mx-auto">
            Witness the dramatic transformation of spaces. Slide to reveal the Aura difference.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {transformations.map((trans, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`font-accent text-xs tracking-widest uppercase px-6 py-2 border rounded-full transition-all duration-300 ${
                activeTab === idx 
                  ? 'bg-accent-gold border-accent-gold text-white' 
                  : 'border-border-divider text-secondary-text hover:border-accent-gold hover:text-accent-gold'
              }`}
            >
              {trans.category}
            </button>
          ))}
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <BeforeAfterSlider 
            beforeImage={transformations[activeTab].before}
            afterImage={transformations[activeTab].after}
            projectName={transformations[activeTab].name}
            location={transformations[activeTab].loc}
            duration={transformations[activeTab].dur}
            budget={transformations[activeTab].bud}
          />
          
          <div className="mt-12 bg-white p-8 shadow-sm border border-border-divider">
            <h4 className="font-display text-2xl text-primary-text mb-6">What Changed</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {transformations[activeTab].changes.map((change, idx) => (
                <div key={idx} className="flex items-center">
                  <span className="w-2 h-2 bg-accent-gold rounded-full mr-4"></span>
                  <p className="font-body text-secondary-text">{change}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BeforeAfter;
