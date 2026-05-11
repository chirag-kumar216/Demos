const fs = require('fs');
const path = require('path');

const clientSrcDir = path.join(__dirname, 'client', 'src');

const pages = [
  'Home', 'About', 'Services', 'Portfolio', 'PortfolioDetail', 
  'BeforeAfter', 'Tools', 'Blog', 'BlogDetail', 'Contact', 
  'AdminDashboard', 'NotFound'
];

const components = [
  'Navbar', 'Footer', 'CustomCursor', 'PageTransition', 
  'BeforeAfterSlider', 'ProjectCard', 'TestimonialCarousel', 
  'ServiceCard', 'ScrollProgress', 'WhatsAppButton', 'LoadingScreen'
];

pages.forEach(page => {
  const content = `import React from 'react';
import { motion } from 'framer-motion';

const ${page} = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-24 pb-12"
    >
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-display text-primary-text">${page}</h1>
        {/* TODO: Implement ${page} */}
      </div>
    </motion.div>
  );
};

export default ${page};
`;
  fs.writeFileSync(path.join(clientSrcDir, 'pages', `${page}.jsx`), content);
});

components.forEach(comp => {
  const content = `import React from 'react';

const ${comp} = () => {
  return (
    <div className="${comp.toLowerCase()}">
      {/* TODO: Implement ${comp} */}
    </div>
  );
};

export default ${comp};
`;
  fs.writeFileSync(path.join(clientSrcDir, 'components', `${comp}.jsx`), content);
});

// Create basic index.js/main.jsx if needed, but we already have one
