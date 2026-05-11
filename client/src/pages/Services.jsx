import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceAccordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="mt-8 space-y-4">
      {items.map((item, idx) => (
        <div key={idx} className="border border-border-divider bg-white">
          <button
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            className="w-full px-6 py-4 flex justify-between items-center text-left focus:outline-none"
          >
            <span className="font-display text-lg text-primary-text font-medium">{item.q}</span>
            <ChevronDown 
              className={`transform transition-transform duration-300 text-accent-gold ${openIndex === idx ? 'rotate-180' : ''}`} 
              size={20} 
            />
          </button>
          <AnimatePresence>
            {openIndex === idx && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-4 pt-2 text-secondary-text font-body text-sm leading-relaxed border-t border-border-divider/50">
                  {item.a}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

const Services = () => {
  const services = [
    {
      id: "residential",
      title: "Residential Interior Design",
      desc: "Comprehensive design solutions for apartments, independent houses, villas, and penthouses. We create sanctuaries that reflect your personality.",
      includes: ["Space Planning", "Furniture Layout", "Material Selection", "Color Palette", "Lighting Design", "Custom Joinery", "Soft Furnishings"],
      price: "Starting from ₹800/sq.ft",
      faqs: [
        { q: "Do you design 2BHK apartments?", a: "Yes, we have specialized packages for 1BHK, 2BHK, 3BHK, and 4BHK apartments tailored to optimize space." },
        { q: "How long does a residential project take?", a: "Typically, a full 3BHK takes about 8-12 weeks from design approval to handover." }
      ]
    },
    {
      id: "commercial",
      title: "Commercial Interior Design",
      desc: "Strategic design for offices, co-working spaces, retail stores, and showrooms that enhance productivity and brand identity.",
      includes: ["Brand Integration", "Ergonomic Planning", "Lighting Strategy", "Acoustic Solutions", "Reception Design", "Workstation Layout"],
      price: "Starting from ₹600/sq.ft",
      faqs: [
        { q: "Can you work after office hours?", a: "Yes, our execution teams can work night shifts to ensure minimal disruption to your business." }
      ]
    },
    {
      id: "kitchen",
      title: "Modular Kitchen Design",
      desc: "Highly functional, ergonomic, and aesthetic kitchens available in L-shaped, U-shaped, parallel, and island layouts.",
      includes: ["HDHMR / Marine Ply Base", "Acrylic / PU / Glass Finishes", "Hafele / Hettich Fittings", "Appliance Integration", "Countertop Selection"],
      price: "Starting from ₹1.2L",
      faqs: [
        { q: "What is the warranty on modular kitchens?", a: "We provide a 10-year warranty on core materials and lifetime warranty on branded hardware." }
      ]
    },
    {
      id: "turnkey",
      title: "Turnkey Projects",
      desc: "End-to-end execution where we take full responsibility from bare shell to final handover. You get a single point of contact.",
      includes: ["Civil Work", "Electrical & Plumbing", "False Ceiling", "Painting & Textures", "Custom Furniture Manufacture", "Styling & Handover"],
      price: "Custom Quote based on scope",
      faqs: [
        { q: "Do I need to hire separate contractors?", a: "No, turnkey means we handle everything. You don't need to deal with any contractors directly." }
      ]
    }
  ];

  return (
    <div className="bg-primary-bg min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-display text-primary-text mb-6">Our Services</h1>
          <p className="font-body text-lg text-secondary-text max-w-2xl mx-auto">
            From concept to execution, we offer tailored design solutions to meet your functional needs and aesthetic aspirations.
          </p>
        </div>

        <div className="space-y-24">
          {services.map((service, idx) => (
            <div key={service.id} className="bg-white p-8 md:p-12 shadow-xl border border-border-divider/50">
              <div className="flex flex-col lg:flex-row gap-12">
                <div className="w-full lg:w-1/3">
                  <div className="sticky top-32">
                    <h2 className="text-3xl font-display text-primary-text mb-4">{service.title}</h2>
                    <p className="font-body text-secondary-text leading-relaxed mb-6">{service.desc}</p>
                    <div className="bg-secondary-bg inline-block px-4 py-2 font-accent text-xs font-semibold text-accent-gold uppercase tracking-widest mb-8">
                      {service.price}
                    </div>
                    
                    <h3 className="font-accent text-sm tracking-widest uppercase text-primary-text mb-4">What's Included</h3>
                    <ul className="space-y-2 mb-8">
                      {service.includes.map((item, i) => (
                        <li key={i} className="flex items-start font-body text-sm text-secondary-text">
                          <span className="w-1.5 h-1.5 bg-accent-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <Link to="/contact" className="inline-block w-full text-center bg-primary-text text-white font-accent text-sm tracking-wider uppercase px-8 py-3 hover:bg-accent-gold transition-colors duration-300">
                      Get a Quote
                    </Link>
                  </div>
                </div>
                
                <div className="w-full lg:w-2/3">
                  <div className="aspect-[21/9] bg-gray-200 mb-8 overflow-hidden rounded-sm">
                    {/* Placeholder image for each service */}
                    <img 
                      src={`https://images.unsplash.com/photo-${idx === 0 ? '1600585154340-be6161a56a0c' : idx === 1 ? '1497366216548-37526070297c' : idx === 2 ? '1556909114-f6e7ad7d3136' : '1613977257363-707ba9348227'}?w=1200&q=80`}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-display text-2xl text-primary-text mb-2 mt-12">Frequently Asked Questions</h3>
                  <ServiceAccordion items={service.faqs} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
