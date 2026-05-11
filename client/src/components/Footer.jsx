import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-text text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Col 1 */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <div className="flex flex-col">
                <span className="font-display text-3xl font-medium tracking-wide text-white">AURA</span>
                <span className="font-accent text-[0.6rem] tracking-[0.3em] text-gray-400 mt-1 uppercase">Interiors</span>
              </div>
            </Link>
            <p className="text-gray-400 font-body text-sm leading-relaxed mb-8 pr-4">
              Aura Interiors is a luxury interior design studio based in Pune, creating spaces that tell your unique story through timeless design and meticulous attention to detail.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:bg-accent-gold hover:text-white hover:border-accent-gold transition-all">
                IG
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:bg-accent-gold hover:text-white hover:border-accent-gold transition-all">
                PT
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:bg-accent-gold hover:text-white hover:border-accent-gold transition-all">
                IN
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:bg-accent-gold hover:text-white hover:border-accent-gold transition-all">
                YT
              </a>
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="font-display text-xl mb-6 tracking-wide">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About Prateek', 'Portfolio', 'Before & After', 'Property Tools', 'Journal'].map((item, idx) => (
                <li key={idx}>
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} className="text-gray-400 hover:text-accent-gold transition-colors font-body text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="font-display text-xl mb-6 tracking-wide">Our Services</h4>
            <ul className="space-y-4">
              {['Residential Design', 'Commercial Design', 'Modular Kitchens', 'Turnkey Projects', 'Vastu Consultation', '3D Visualization'].map((item, idx) => (
                <li key={idx}>
                  <Link to="/services" className="text-gray-400 hover:text-accent-gold transition-colors font-body text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="font-display text-xl mb-6 tracking-wide">Contact Us</h4>
            <address className="not-italic text-gray-400 font-body text-sm space-y-4 mb-6">
              <p>203 Design Square,<br />Koregaon Park, Pune 411001</p>
              <p><a href="mailto:hello@aurainteriors.in" className="hover:text-accent-gold transition-colors">hello@aurainteriors.in</a></p>
              <p><a href="tel:+919649647678" className="hover:text-accent-gold transition-colors">+91 96496 47678</a></p>
            </address>
            <h4 className="font-display text-lg mb-4 tracking-wide">Newsletter</h4>
            <form className="flex">
              <input type="email" placeholder="Your email address" className="bg-gray-800 text-white px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-accent-gold font-body text-sm" />
              <button type="submit" className="bg-accent-gold px-4 py-2 text-white hover:bg-yellow-600 transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-body">
          <p>&copy; {new Date().getFullYear()} Aura Interiors. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
