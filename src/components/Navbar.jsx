import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'About Us', href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'Gallery', href: '/#gallery' },
  { label: 'Contact Us', href: '/#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    if (href.startsWith('/#')) {
      const id = href.slice(2);
      if (location.pathname !== '/') { window.location.href = href; return; }
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/92 backdrop-blur-xl shadow-[0_4px_24px_rgba(255,122,0,0.1)]'
            : 'bg-white/70 backdrop-blur-md'
        }`}
        style={{ borderBottom: scrolled ? '1px solid rgba(244,162,97,0.3)' : '1px solid rgba(244,162,97,0.15)' }}
      >
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" onClick={() => handleNavClick('/#home')} className="flex items-center gap-3 group">
            <img
              src={process.env.PUBLIC_URL + '/images/logo.png'}
              alt="Super Art Glass Logo"
              className="w-11 h-11 object-contain rounded-xl"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <div className="leading-tight">
              <div className="font-playfair font-bold text-xl text-dark tracking-wide" style={{ lineHeight: 1.15 }}>
                Super Art
              </div>
              <div className="font-playfair font-bold text-lg text-gradient-blue tracking-wide" style={{ lineHeight: 1.1 }}>
                Glass
              </div>
            </div>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="relative font-inter text-sm font-medium tracking-wide transition-colors duration-300 group"
                  style={{ color: '#4a4a4a' }}
                  onMouseEnter={e => e.target.style.color='#FF7A00'}
                  onMouseLeave={e => e.target.style.color='#4a4a4a'}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-saffron to-saffron-light group-hover:w-full transition-all duration-300 rounded-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <Link
            to="/projects"
            className="hidden md:flex items-center gap-2 glass-btn px-5 py-2.5 rounded-xl text-sm font-semibold font-inter"
            style={{ boxShadow: '0 4px 16px rgba(255,122,0,0.3)' }}
          >
            View Projects
          </Link>

          {/* Hamburger */}
          <button
            className="md:hidden p-2 rounded-xl transition-colors"
            style={{ background: 'rgba(255,122,0,0.08)', border: '1px solid rgba(255,122,0,0.2)', color: '#FF7A00' }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[68px] left-0 right-0 z-40 mx-4 mt-2 rounded-2xl overflow-hidden"
            style={{ background: 'rgba(255,255,255,0.97)', border: '1px solid rgba(255,122,0,0.18)', boxShadow: '0 12px 40px rgba(0,0,0,0.1)' }}
          >
            <ul className="flex flex-col py-4">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className="block px-6 py-3 font-inter text-sm font-medium transition-all duration-200"
                    style={{ color: '#4a4a4a' }}
                    onMouseEnter={e => { e.target.style.color='#FF7A00'; e.target.style.background='rgba(255,122,0,0.06)'; }}
                    onMouseLeave={e => { e.target.style.color='#4a4a4a'; e.target.style.background='transparent'; }}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.06 }}
                className="px-6 pt-2 pb-2"
              >
                <Link
                  to="/projects"
                  className="block glass-btn text-center py-3 rounded-xl text-sm font-semibold"
                  onClick={() => setMenuOpen(false)}
                >
                  View Projects
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
