import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    { id: 1, title: "The Ivory Retreat", category: "Residential", sqft: "1800 sq.ft", loc: "Koregaon Park, Pune", img: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=800&q=80", height: "h-96" },
    { id: 2, title: "Golden Hour Penthouse", category: "Residential", sqft: "3500 sq.ft", loc: "Kalyani Nagar", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80", height: "h-64" },
    { id: 3, title: "Viman Nagar Workspace", category: "Commercial", sqft: "2200 sq.ft", loc: "Viman Nagar", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80", height: "h-80" },
    { id: 4, title: "The Botanical Café", category: "Hospitality", sqft: "800 sq.ft", loc: "FC Road", img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80", height: "h-96" },
    { id: 5, title: "Marble & Mist Bathroom", category: "Residential", sqft: "180 sq.ft", loc: "Aundh", img: "https://images.unsplash.com/photo-1620626011761-996317702782?w=800&q=80", height: "h-64" },
    { id: 6, title: "Sage & Stone", category: "Residential", sqft: "4200 sq.ft", loc: "Baner", img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80", height: "h-80" }
  ];

  const filters = ['All', 'Residential', 'Commercial', 'Hospitality'];

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="bg-primary-bg min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-display text-primary-text mb-6">Our Portfolio</h1>
          <p className="font-body text-lg text-secondary-text max-w-2xl mx-auto">
            A curated selection of our finest interior design projects across Pune.
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-4 mb-16">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`font-accent text-xs tracking-widest uppercase px-6 py-2 border rounded-full transition-all duration-300 ${
                filter === f 
                  ? 'bg-accent-gold border-accent-gold text-white' 
                  : 'border-border-divider text-secondary-text hover:border-accent-gold hover:text-accent-gold'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="group relative cursor-pointer"
              >
                <Link to={`/portfolio/project-${project.id}`}>
                  <div className={`w-full ${project.height} overflow-hidden rounded-sm relative`}>
                    <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                      <h3 className="text-white font-display text-2xl mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{project.title}</h3>
                      <p className="text-white/80 font-body text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                        {project.loc} | {project.sqft}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
