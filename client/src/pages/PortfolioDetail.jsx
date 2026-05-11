import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import BeforeAfterSlider from '../components/BeforeAfterSlider';

const PortfolioDetail = () => {
  const navigate = useNavigate();
  const { slug } = useParams();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-primary-bg min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full overflow-hidden flex items-end pb-12">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=1600&q=80" 
            alt="Project Cover" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-6">
          <button 
            onClick={() => navigate(-1)}
            className="mb-8 flex items-center text-white/80 hover:text-white transition-colors font-accent text-xs uppercase tracking-widest"
          >
            <ArrowLeft size={16} className="mr-2" /> Back to Portfolio
          </button>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-3 py-1 bg-accent-gold text-white font-accent text-[0.6rem] tracking-[0.2em] uppercase mb-4">
              Residential
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display text-white mb-4">The Ivory Retreat</h1>
            <p className="font-body text-lg text-white/90">Koregaon Park, Pune</p>
          </motion.div>
        </div>
      </section>

      {/* Project Meta */}
      <section className="bg-white border-b border-border-divider">
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <p className="font-accent text-[0.6rem] tracking-widest uppercase text-secondary-text mb-1">Area</p>
              <p className="font-display text-xl text-primary-text">1,800 sq.ft</p>
            </div>
            <div>
              <p className="font-accent text-[0.6rem] tracking-widest uppercase text-secondary-text mb-1">Duration</p>
              <p className="font-display text-xl text-primary-text">8 Weeks</p>
            </div>
            <div>
              <p className="font-accent text-[0.6rem] tracking-widest uppercase text-secondary-text mb-1">Budget</p>
              <p className="font-display text-xl text-primary-text">₹12L - ₹15L</p>
            </div>
            <div>
              <p className="font-accent text-[0.6rem] tracking-widest uppercase text-secondary-text mb-1">Style</p>
              <p className="font-display text-xl text-primary-text">Modern Minimalist</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Story */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <h3 className="font-display text-3xl text-primary-text mb-6">The Challenge</h3>
          <p className="font-body text-secondary-text leading-relaxed mb-12">
            The clients, a young tech-entrepreneur couple, wanted a home that served as a serene escape from their fast-paced work lives. The original 3BHK apartment was poorly lit, with a fragmented layout that made the space feel cramped despite its generous 1,800 sq.ft area.
          </p>

          <h3 className="font-display text-3xl text-primary-text mb-6">Our Approach</h3>
          <p className="font-body text-secondary-text leading-relaxed mb-12">
            We adopted a minimalist approach, knocking down a non-structural wall to open up the living and dining areas, allowing natural light to flood the space. The color palette was kept intentionally muted—lots of ivory, warm beige, and natural oak wood, accented with brushed brass fixtures for a touch of understated luxury.
          </p>

          <h3 className="font-display text-3xl text-primary-text mb-6">Materials & Finishes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
            {['Italian Statuario Marble Flooring', 'Oak Veneer Paneling', 'Brushed Brass Hardware', 'Linen Upholstery', 'Fluted Glass Partitions', 'Matte PU Kitchen Cabinets'].map((item, idx) => (
              <div key={idx} className="flex items-center">
                <CheckCircle className="text-accent-gold mr-3" size={18} />
                <span className="font-body text-secondary-text">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After for this project */}
      <section className="bg-secondary-bg py-24 border-t border-border-divider">
         <div className="container mx-auto px-6">
            <div className="text-center mb-16">
               <h3 className="text-4xl font-display text-primary-text mb-4">The Transformation</h3>
            </div>
            <BeforeAfterSlider 
               beforeImage="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80"
               afterImage="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=1200&q=80"
               projectName="The Ivory Retreat - Living Area"
               location="Koregaon Park"
               duration="8 Weeks"
               budget="Included in Total"
            />
         </div>
      </section>
      
      {/* Next Project CTA */}
      <section className="py-24 bg-primary-bg text-center border-t border-border-divider">
        <h2 className="text-sm font-accent tracking-[0.2em] text-accent-gold uppercase mb-6">Next Project</h2>
        <h3 className="text-4xl md:text-5xl font-display text-primary-text mb-10 hover:text-accent-gold transition-colors cursor-pointer">Golden Hour Penthouse</h3>
      </section>

    </div>
  );
};

export default PortfolioDetail;
