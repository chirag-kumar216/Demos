import React from 'react';
import { motion } from 'framer-motion';

const AdminDashboard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-24 pb-12"
    >
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-display text-primary-text">AdminDashboard</h1>
        {/* TODO: Implement AdminDashboard */}
      </div>
    </motion.div>
  );
};

export default AdminDashboard;
