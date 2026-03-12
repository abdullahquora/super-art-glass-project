import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHardHat, FaCheckCircle, FaCalendarAlt, FaArrowRight, FaArrowLeft, FaTh } from 'react-icons/fa';

const categories = [
  {
    icon: FaHardHat,
    title: 'Ongoing Projects',
    description: 'Glass installations currently in progress — live craftsmanship happening right now in Ayodhya & beyond.',
    link: '/projects/ongoing',
    count: '12 Active',
    bg: 'rgba(255,255,255,0.9)',
    border: 'rgba(255,140,0,0.25)',
    iconBg: 'rgba(255,140,0,0.1)',
    iconColor: '#E07000',
    badge: 'Live',
    badgeBg: 'rgba(255,140,0,0.1)',
    badgeColor: '#CC5500',
    hoverShadow: '0 24px 60px rgba(255,140,0,0.18)',
  },
  {
    icon: FaCheckCircle,
    title: 'Completed Projects',
    description: 'A showcase of our successfully delivered glass masterpieces across Ayodhya, Faizabad and beyond.',
    link: '/projects/completed',
    count: '480+ Done',
    bg: 'rgba(255,255,255,0.9)',
    border: 'rgba(60,160,80,0.22)',
    iconBg: 'rgba(60,160,80,0.1)',
    iconColor: '#2e8b57',
    badge: 'Portfolio',
    badgeBg: 'rgba(60,160,80,0.1)',
    badgeColor: '#1e6b3a',
    hoverShadow: '0 24px 60px rgba(60,160,80,0.15)',
  },
  {
    icon: FaCalendarAlt,
    title: 'Upcoming Projects',
    description: 'Exciting new glass design ventures on our horizon — coming soon to transform spaces near you.',
    link: '/projects/upcoming',
    count: '8 Planned',
    bg: 'rgba(255,255,255,0.9)',
    border: 'rgba(140,80,200,0.22)',
    iconBg: 'rgba(140,80,200,0.1)',
    iconColor: '#7a3ea0',
    badge: 'Soon',
    badgeBg: 'rgba(140,80,200,0.1)',
    badgeColor: '#5a2e80',
    hoverShadow: '0 24px 60px rgba(140,80,200,0.15)',
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen pt-24 pb-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #FFF8F2 0%, #FFF3E8 50%, #FFF8F2 100%)' }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 30%, rgba(255,122,0,0.06) 0%, transparent 70%)' }} />
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{ backgroundImage: 'linear-gradient(rgba(255,122,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,122,0,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <Link to="/" className="inline-flex items-center gap-2 font-inter text-sm transition-colors mb-10" style={{ color: '#9A9A9A' }}
            onMouseEnter={e => e.currentTarget.style.color='#FF7A00'}
            onMouseLeave={e => e.currentTarget.style.color='#9A9A9A'}>
            <FaArrowLeft className="text-xs" /> Back to Home
          </Link>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 saffron-badge">
            <FaTh className="text-xs" />
            <span>Our Projects</span>
          </div>
          <h1 className="font-playfair text-gradient mb-4" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 800 }}>
            Project Portfolio
          </h1>
          <p className="font-inter text-base max-w-xl mx-auto" style={{ color: '#6B6B6B' }}>
            Explore the full spectrum of our glass craftsmanship — from works in progress to completed masterpieces
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div key={cat.title} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.12 }}>
              <Link to={cat.link}>
                <motion.div
                  whileHover={{ y: -8, boxShadow: cat.hoverShadow }}
                  whileTap={{ scale: 0.98 }}
                  className="group p-7 rounded-3xl cursor-pointer h-full relative overflow-hidden"
                  style={{ background: cat.bg, border: `1.5px solid ${cat.border}`, boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-13 h-13 p-3.5 rounded-2xl"
                      style={{ background: cat.iconBg, border: `1px solid ${cat.border}` }}>
                      <cat.icon style={{ color: cat.iconColor, fontSize: '1.4rem' }} />
                    </div>
                    <span className="text-xs font-inter font-semibold px-3 py-1 rounded-full"
                      style={{ background: cat.badgeBg, color: cat.badgeColor, border: `1px solid ${cat.border}` }}>
                      {cat.badge}
                    </span>
                  </div>
                  <p className="text-xs font-inter font-semibold tracking-widest uppercase mb-1" style={{ color: '#9A9A9A' }}>{cat.count}</p>
                  <h3 className="font-playfair text-xl font-bold mb-3" style={{ color: '#1C1C1C' }}>{cat.title}</h3>
                  <p className="font-inter text-sm leading-relaxed mb-5" style={{ color: '#6B6B6B' }}>{cat.description}</p>
                  <div className="flex items-center gap-2 transition-colors duration-300" style={{ color: cat.iconColor }}>
                    <span className="text-xs font-inter font-semibold tracking-wide uppercase">View All</span>
                    <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                  <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `radial-gradient(circle, ${cat.border} 0%, transparent 70%)` }} />
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
