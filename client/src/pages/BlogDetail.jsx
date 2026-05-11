import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Clock, Share2 } from 'lucide-react';

const BlogDetail = () => {
  const navigate = useNavigate();
  const { slug } = useParams();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-primary-bg min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-4xl">
        
        <button 
          onClick={() => navigate(-1)}
          className="mb-10 flex items-center text-secondary-text hover:text-accent-gold transition-colors font-accent text-xs uppercase tracking-widest"
        >
          <ArrowLeft size={16} className="mr-2" /> Back to Journal
        </button>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center space-x-4 mb-6">
            <span className="bg-secondary-bg px-3 py-1 font-accent text-[0.6rem] tracking-widest uppercase text-primary-text border border-border-divider">
              Trends
            </span>
            <span className="flex items-center font-body text-xs text-secondary-text">
              <Clock size={12} className="mr-1" /> 5 min read
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-primary-text mb-8 leading-tight">
            10 Interior Design Trends Dominating Pune Homes in 2024
          </h1>

          <div className="flex items-center justify-between py-6 border-y border-border-divider mb-12">
            <div className="flex items-center">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80" 
                alt="Prateek Sharma" 
                className="w-12 h-12 rounded-full object-cover mr-4 grayscale"
              />
              <div>
                <p className="font-display text-lg text-primary-text">Prateek Sharma</p>
                <p className="font-body text-xs text-secondary-text">Principal Designer</p>
              </div>
            </div>
            <div className="flex space-x-3">
               <button className="w-8 h-8 rounded-full border border-border-divider flex items-center justify-center text-secondary-text hover:text-accent-gold hover:border-accent-gold transition-all">
                  <Share2 size={14} />
               </button>
            </div>
          </div>
        </motion.div>

        <div className="aspect-video w-full overflow-hidden mb-12">
          <img 
            src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=1200&q=80" 
            alt="Living Room Trend" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none font-body text-secondary-text leading-relaxed">
          <p className="mb-6">
            As we step further into 2024, the landscape of interior design in Pune is witnessing a beautiful shift. Moving away from the stark, clinical minimalism that dominated the early 2020s, homeowners are now embracing spaces that feel lived-in, warm, and deeply personal.
          </p>
          
          <h3 className="font-display text-3xl text-primary-text mt-12 mb-4">1. The Return of Warm Earth Tones</h3>
          <p className="mb-6">
            Say goodbye to cool grays and sterile whites. This year is all about the warmth of terracotta, rich chocolate browns, soft linen whites, and muted mustard. These colors reflect the Indian landscape and bring an inherent coziness to apartments, particularly those with ample natural light in areas like Koregaon Park and Kalyani Nagar.
          </p>

          <h3 className="font-display text-3xl text-primary-text mt-12 mb-4">2. Artisanal and Handcrafted Elements</h3>
          <p className="mb-6">
            Mass-produced is out. Bespoke is in. Whether it's hand-thrown pottery, custom-woven rugs, or intricate brass hardware crafted by local artisans, integrating elements that show the "maker's mark" adds unparalleled character to a room.
          </p>

          <blockquote className="border-l-4 border-accent-gold pl-6 py-2 my-8 font-display text-2xl text-primary-text italic bg-secondary-bg/50">
            "A home should feel collected, not decorated. The pieces you choose should tell a story of where you've been and what you love."
          </blockquote>

          <h3 className="font-display text-3xl text-primary-text mt-12 mb-4">3. Biophilic Design Evolves</h3>
          <p className="mb-6">
            While adding plants to a room isn't new, the way we integrate nature is evolving. We are seeing a surge in indoor-outdoor flows, large uninterrupted windows, indoor water features, and the use of raw, unpolished natural materials like travertine and reclaimed wood.
          </p>

          <div className="bg-secondary-bg p-8 my-12 text-center border border-border-divider">
            <h4 className="font-display text-2xl text-primary-text mb-2">Ready to update your space?</h4>
            <p className="font-body text-sm mb-6">Book a consultation with our design team today.</p>
            <button onClick={() => navigate('/contact')} className="bg-accent-gold text-white font-accent text-xs tracking-widest uppercase px-6 py-3 hover:bg-accent-dark transition-colors">
              Contact Us
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BlogDetail;
