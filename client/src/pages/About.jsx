import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="bg-primary-bg min-h-screen pt-24 pb-12">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80" 
            alt="Studio Workspace" 
            className="w-full h-full object-cover grayscale-[30%]"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white container mx-auto px-6"
        >
          <h1 className="text-5xl md:text-7xl font-display mb-4">Our Philosophy</h1>
          <p className="font-body text-lg max-w-2xl mx-auto font-light tracking-wide text-white/90">
            Crafting spaces that resonate with your soul and tell your unique story.
          </p>
        </motion.div>
      </section>

      {/* Bio Section */}
      <section className="py-24 bg-primary-bg">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&q=80" alt="Prateek Sharma" className="w-full max-w-md mx-auto rounded-sm shadow-xl" />
              </motion.div>
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-sm font-accent tracking-[0.2em] text-accent-gold uppercase mb-4">Principal Designer</h2>
              <h3 className="text-4xl md:text-5xl font-display text-primary-text mb-6">Prateek Sharma</h3>
              <p className="font-body text-secondary-text mb-6 leading-relaxed">
                Starting Aura Interiors in Pune in 2010, Prateek Sharma envisioned a design firm that bridges the gap between high-end luxury and deeply personal living spaces.
              </p>
              <div className="space-y-4 mb-8">
                <p className="font-body text-sm text-secondary-text flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent-gold rounded-full"></span>
                  Interior Design from Rachana Sansad, Mumbai
                </p>
                <p className="font-body text-sm text-secondary-text flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent-gold rounded-full"></span>
                  Certification from Indian Institute of Interior Designers (IIID)
                </p>
              </div>
              <blockquote className="border-l-2 border-accent-gold pl-6 py-2 italic font-display text-2xl text-primary-text mb-8">
                "A room should tell the story of who you are, and be a collection of what you love."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-secondary-bg">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl font-display text-primary-text mb-16">Our Pillars</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Sustainability', text: 'We prioritize eco-friendly materials and sustainable design practices in every project we undertake.' },
              { title: 'Timeless Design', text: 'Our designs transcend fleeting trends, offering an enduring elegance that feels fresh for decades.' },
              { title: 'Client-Centricity', text: 'Your lifestyle, preferences, and vision are at the absolute center of our design process.' }
            ].map((val, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-10 shadow-lg border-t-2 border-transparent hover:border-accent-gold transition-all"
              >
                <h4 className="font-display text-2xl text-primary-text mb-4">{val.title}</h4>
                <p className="font-body text-secondary-text text-sm leading-relaxed">{val.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-primary-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-accent tracking-[0.2em] text-accent-gold uppercase mb-4">The People Behind The Magic</h2>
            <h3 className="text-4xl font-display text-primary-text">Our Team</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Prateek Sharma', role: 'Principal Designer', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80' },
              { name: 'Aryan Khanna', role: 'Senior Designer', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80' },
              { name: 'Ritu Patel', role: '3D Visualization', img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80' },
              { name: 'Siddharth Jha', role: 'Project Manager', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80' }
            ].map((member, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="overflow-hidden mb-4 rounded-sm shadow-md aspect-[3/4]">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale-[20%] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <h4 className="font-display text-xl text-primary-text">{member.name}</h4>
                <p className="font-accent text-xs tracking-wider uppercase text-accent-gold mt-1">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-24 bg-secondary-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-display text-primary-text">Awards & Recognition</h3>
          </div>
          <div className="max-w-3xl mx-auto space-y-8">
            {[
              { year: '2024', title: 'Times 40 Under 40, Pune' },
              { year: '2022', title: 'Elle Decor A-List Nominee' },
              { year: '2020', title: 'Houzz Best of Design (India)' },
              { year: '2018', title: 'Featured in Architectural Digest India' },
              { year: '2015', title: 'IIID Regional Award — Residential Category' },
              { year: '2012', title: 'Best Emerging Studio, Pune Design Week' }
            ].map((award, idx) => (
              <div key={idx} className="flex flex-col md:flex-row md:items-center border-b border-border-divider pb-4">
                <div className="font-accent text-lg text-accent-gold font-semibold w-24 mb-2 md:mb-0">{award.year}</div>
                <div className="font-display text-xl text-primary-text">{award.title}</div>
              </div>
            ))}
          </div>
          
          <div className="mt-20 pt-10 border-t border-border-divider flex flex-wrap justify-center gap-12 opacity-50 grayscale">
             {/* Press Logos Text Replacements */}
             <span className="font-display text-2xl font-bold uppercase tracking-widest">AD India</span>
             <span className="font-display text-2xl font-bold uppercase tracking-widest">Elle Decor</span>
             <span className="font-display text-2xl font-bold uppercase tracking-widest">Houzz</span>
             <span className="font-display text-2xl font-bold uppercase tracking-widest">Times of India</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
