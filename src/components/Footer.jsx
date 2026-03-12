import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaInstagram, FaFacebookF, FaWhatsapp, FaLinkedinIn, FaMapMarkerAlt, FaPhone, FaEnvelope, FaStore } from 'react-icons/fa';

const quickLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'About Us', href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'Gallery', href: '/#gallery' },
  { label: 'Contact Us', href: '/#contact' },
];

const projectLinks = [
  { label: 'All Projects', to: '/projects' },
  { label: 'Ongoing Projects', to: '/projects/ongoing' },
  { label: 'Completed Projects', to: '/projects/completed' },
  { label: 'Upcoming Projects', to: '/projects/upcoming' },
];

const socials = [
  { icon: FaInstagram, href: '#', label: 'Instagram' },
  { icon: FaFacebookF, href: '#', label: 'Facebook' },
  { icon: FaWhatsapp, href: 'https://wa.me/919455724383', label: 'WhatsApp' },
  { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
];

export default function Footer() {
  const handleScrollLink = (href) => {
    if (href.startsWith('/#')) {
      const id = href.slice(2);
      if (window.location.pathname !== '/') { window.location.href = href; return; }
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative overflow-hidden pt-16 pb-8"
      style={{ background: 'linear-gradient(180deg, #2a1200 0%, #1a0a00 100%)' }}>
      {/* Top saffron gradient border */}
      <div className="absolute top-0 left-0 right-0 h-1"
        style={{ background: 'linear-gradient(90deg, transparent, #FF7A00, #F4A261, #FFE5B4, #F4A261, #FF7A00, transparent)' }} />

      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top, rgba(255,122,0,0.08) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-5">
              <img
                src={process.env.PUBLIC_URL + '/images/logo.png'}
                alt="Super Art Glass"
                className="w-12 h-12 object-contain rounded-xl"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <div>
                <div className="font-playfair font-bold text-xl text-white" style={{ lineHeight: 1.2 }}>Super Art</div>
                <div className="font-playfair font-bold text-lg" style={{ lineHeight: 1.1, color: '#F4A261' }}>Glass</div>
              </div>
            </Link>
            <p className="font-inter text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,229,180,0.55)' }}>
              Ayodhya's premier glass company — premium UPVC, ACP, toughened glass, and architectural solutions since 2009.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <motion.a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  whileHover={{ scale: 1.12, y: -2 }} whileTap={{ scale: 0.95 }}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300"
                  style={{ background: 'rgba(255,122,0,0.12)', border: '1px solid rgba(255,122,0,0.25)' }}
                >
                  <s.icon style={{ color: 'rgba(255,229,180,0.7)', fontSize: '0.85rem' }} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-inter font-semibold text-sm tracking-widest uppercase mb-5 text-white">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} onClick={(e) => { e.preventDefault(); handleScrollLink(link.href); }}
                    className="flex items-center gap-2 font-inter text-sm transition-colors duration-200 group"
                    style={{ color: 'rgba(255,229,180,0.5)' }}
                    onMouseEnter={e => e.currentTarget.style.color='rgba(255,122,0,0.9)'}
                    onMouseLeave={e => e.currentTarget.style.color='rgba(255,229,180,0.5)'}
                  >
                    <span className="w-1 h-1 rounded-full" style={{ background: 'rgba(255,122,0,0.5)' }} />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="font-inter font-semibold text-sm tracking-widest uppercase mb-5 text-white">
              Projects
            </h4>
            <ul className="space-y-3">
              {projectLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to}
                    className="flex items-center gap-2 font-inter text-sm transition-colors duration-200"
                    style={{ color: 'rgba(255,229,180,0.5)' }}
                    onMouseEnter={e => e.currentTarget.style.color='rgba(255,122,0,0.9)'}
                    onMouseLeave={e => e.currentTarget.style.color='rgba(255,229,180,0.5)'}
                  >
                    <span className="w-1 h-1 rounded-full" style={{ background: 'rgba(255,122,0,0.5)' }} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-inter font-semibold text-sm tracking-widest uppercase mb-5 text-white">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaStore style={{ color: '#FF7A00', fontSize: '0.8rem', marginTop: '3px', flexShrink: 0 }} />
                <span className="font-inter text-xs leading-relaxed" style={{ color: 'rgba(255,229,180,0.5)' }}>
                  Near Disha Coaching, Durgapuri Colony Naka, Ayodhya
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt style={{ color: '#F4A261', fontSize: '0.8rem', marginTop: '3px', flexShrink: 0 }} />
                <span className="font-inter text-xs leading-relaxed" style={{ color: 'rgba(255,229,180,0.5)' }}>
                  Shop No. 4, Noor Complex, ICICI Bank Road, Faizabad
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone style={{ color: '#FF7A00', fontSize: '0.75rem', flexShrink: 0 }} />
                <a href="tel:9455724383" className="font-inter text-sm transition-colors" style={{ color: 'rgba(255,229,180,0.55)' }}
                  onMouseEnter={e => e.target.style.color='rgba(255,122,0,0.9)'}
                  onMouseLeave={e => e.target.style.color='rgba(255,229,180,0.55)'}>
                  9455724383 / 8423629222
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope style={{ color: '#F4A261', fontSize: '0.75rem', flexShrink: 0 }} />
                <a href="mailto:superartglassfzd@gmail.com" className="font-inter text-xs transition-colors" style={{ color: 'rgba(255,229,180,0.55)' }}
                  onMouseEnter={e => e.target.style.color='rgba(255,122,0,0.9)'}
                  onMouseLeave={e => e.target.style.color='rgba(255,229,180,0.55)'}>
                  superartglassfzd@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(255,122,0,0.15)' }}>
          <p className="font-inter text-xs" style={{ color: 'rgba(255,229,180,0.3)' }}>
            © {new Date().getFullYear()} Super Art Glass. All rights reserved.
          </p>
          <p className="font-inter text-xs" style={{ color: 'rgba(255,229,180,0.3)' }}>
            Crafted with precision · Ayodhya, India
          </p>
        </div>
      </div>
    </footer>
  );
}
