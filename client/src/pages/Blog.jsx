import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Tips & Guides', 'Project Stories', 'Trends', 'Vastu', 'Materials'];

  const blogPosts = [
    { id: 1, title: "10 Interior Design Trends Dominating Pune Homes in 2024", category: "Trends", readTime: "5 min read", img: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=800&q=80", desc: "Discover what's new and enduring in the world of luxury interiors this year." },
    { id: 2, title: "Vastu Tips for Your New Home in Pune — A Complete Guide", category: "Vastu", readTime: "8 min read", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80", desc: "Balance the energies of your home with these essential Vastu principles." },
    { id: 3, title: "Modular Kitchen vs. Carpenter-Made: What's Right for You?", category: "Tips & Guides", readTime: "6 min read", img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80", desc: "A comprehensive breakdown to help you make the best choice for your kitchen." },
    { id: 4, title: "Material Guide: Marble vs. Quartz", category: "Materials", readTime: "4 min read", img: "https://images.unsplash.com/photo-1620626011761-996317702782?w=800&q=80", desc: "Which countertop material reigns supreme in Indian kitchens?" },
    { id: 5, title: "Behind the Design: The Making of Koregaon Park's Most Beautiful Home", category: "Project Stories", readTime: "10 min read", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", desc: "An exclusive look into our process for The Ivory Retreat project." },
    { id: 6, title: "Color Psychology in Interior Design", category: "Tips & Guides", readTime: "7 min read", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80", desc: "How to use color to influence mood and perception in your living spaces." }
  ];

  const filteredPosts = filter === 'All' ? blogPosts : blogPosts.filter(p => p.category === filter);

  return (
    <div className="bg-primary-bg min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-display text-primary-text mb-6">The Aura Journal</h1>
          <p className="font-body text-lg text-secondary-text max-w-2xl mx-auto">
            Insights, trends, and stories from the world of luxury interior design.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map(c => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`font-accent text-xs tracking-widest uppercase px-6 py-2 border rounded-full transition-all duration-300 ${
                filter === c 
                  ? 'bg-accent-gold border-accent-gold text-white' 
                  : 'border-border-divider text-secondary-text hover:border-accent-gold hover:text-accent-gold'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Featured Post (if All is selected) */}
        {filter === 'All' && (
          <div className="mb-16 group cursor-pointer">
            <Link to={`/blog/post-1`}>
              <div className="relative aspect-[21/9] md:aspect-[21/7] overflow-hidden rounded-sm mb-6">
                <img src={blogPosts[0].img} alt={blogPosts[0].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute top-6 left-6 bg-white px-4 py-1 font-accent text-xs tracking-wider uppercase text-primary-text shadow-md">
                  {blogPosts[0].category}
                </div>
              </div>
              <div className="max-w-3xl">
                <p className="font-body text-sm text-secondary-text mb-3">{blogPosts[0].readTime}</p>
                <h2 className="font-display text-3xl md:text-4xl text-primary-text mb-4 group-hover:text-accent-gold transition-colors">{blogPosts[0].title}</h2>
                <p className="font-body text-secondary-text leading-relaxed">{blogPosts[0].desc}</p>
              </div>
            </Link>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredPosts.slice(filter === 'All' ? 1 : 0).map((post, idx) => (
            <motion.div 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <Link to={`/blog/post-${post.id}`}>
                <div className="relative aspect-video overflow-hidden rounded-sm mb-6">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-4 left-4 bg-white px-3 py-1 font-accent text-[0.6rem] tracking-wider uppercase text-primary-text shadow-md">
                    {post.category}
                  </div>
                </div>
                <p className="font-body text-xs text-secondary-text mb-2">{post.readTime}</p>
                <h3 className="font-display text-2xl text-primary-text mb-3 group-hover:text-accent-gold transition-colors line-clamp-2">{post.title}</h3>
                <p className="font-body text-sm text-secondary-text line-clamp-2">{post.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
