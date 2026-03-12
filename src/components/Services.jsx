import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaTh, FaHardHat, FaCheckCircle, FaCalendarAlt, FaArrowRight } from 'react-icons/fa';

const services = [
  {
    icon: FaTh,
    title: 'All Projects',
    subtitle: 'Complete Portfolio',
    description: 'Explore our full portfolio of artistic and architectural glass projects — from intricate UPVC installations to large-scale commercial glass façades.',
    link: '/projects',
    bg: 'rgba(255,255,255,0.9)',
    border: 'rgba(255,122,0,0.22)',
    iconBg: 'rgba(255,122,0,0.1)',
    iconColor: '#FF7A00',
    tag: 'View All',
    tagBg: 'rgba(255,122,0,0.1)',
    tagColor: '#CC5F00',
    hoverGlow: 'rgba(255,122,0,0.18)',
  },
  {
    icon: FaHardHat,
    title: 'Ongoing Projects',
    subtitle: 'In Progress',
    description: 'Get a live look at our current glass installations and design work actively underway — pushing the boundaries of architectural glass in real time.',
    link: '/projects/ongoing',
    bg: 'rgba(255,255,255,0.9)',
    border: 'rgba(255,160,50,0.25)',
    iconBg: 'rgba(255,160,50,0.1)',
    iconColor: '#E07000',
    tag: 'Live Now',
    tagBg: 'rgba(255,140,0,0.1)',
    tagColor: '#CC6000',
    hoverGlow: 'rgba(255,140,0,0.2)',
  },
  {
    icon: FaCheckCircle,
    title: 'Completed Projects',
    subtitle: 'Delivered Excellence',
    description: 'Browse our gallery of successfully delivered glass projects — each one a story of craftsmanship, precision, and client satisfaction.',
    link: '/projects/completed',
    bg: 'rgba(255,255,255,0.9)',
    border: 'rgba(80,180,100,0.25)',
    iconBg: 'rgba(80,180,100,0.1)',
    iconColor: '#2e8b57',
    tag: 'Done',
    tagBg: 'rgba(80,180,100,0.1)',
    tagColor: '#1e6b3a',
    hoverGlow: 'rgba(80,180,100,0.15)',
  },
  {
    icon: FaCalendarAlt,
    title: 'Upcoming Projects',
    subtitle: 'Coming Soon',
    description: 'Peek into our pipeline of future glass installations and design projects — innovations set to transform spaces near you.',
    link: '/projects/upcoming',
    bg: 'rgba(255,255,255,0.9)',
    border: 'rgba(160,100,220,0.22)',
    iconBg: 'rgba(160,100,220,0.1)',
    iconColor: '#7a3ea0',
    tag: 'Soon',
    tagBg: 'rgba(160,100,220,0.1)',
    tagColor: '#6a2e90',
    hoverGlow: 'rgba(160,100,220,0.15)',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-20 md:py-28 relative overflow-hidden" style={{ background: '#FFF3E8' }}>
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top right, rgba(255,122,0,0.06) 0%, transparent 65%)' }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at bottom left, rgba(244,162,97,0.07) 0%, transparent 65%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }} className="text-center mb-3 sm:mb-4">
          <span className="saffron-badge">Our Work</span>
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.1 }} className="section-heading text-center text-gradient mb-3 sm:mb-4">
          Explore Our Projects
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-center font-inter text-sm sm:text-base max-w-xl mx-auto mb-10 sm:mb-16" style={{ color: '#6B6B6B' }}>
          Navigate through our project categories to discover the full breadth of our glass artistry
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {services.map((service, i) => (
            <motion.div key={service.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: i * 0.12 }}>
              <Link to={service.link}>
                <motion.div
                  whileHover={{ y: -8, boxShadow: `0 24px 60px ${service.hoverGlow}` }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="group relative p-5 sm:p-8 rounded-2xl sm:rounded-3xl h-full cursor-pointer overflow-hidden"
                  style={{ background: service.bg, border: `1.5px solid ${service.border}`, boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}
                >
                  {/* Top row */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
                      style={{ background: service.iconBg, border: `1px solid ${service.border}` }}>
                      <service.icon style={{ color: service.iconColor, fontSize: '1.4rem' }} />
                    </div>
                    <span className="text-xs font-inter font-semibold px-3 py-1 rounded-full"
                      style={{ background: service.tagBg, color: service.tagColor, border: `1px solid ${service.border}` }}>
                      {service.tag}
                    </span>
                  </div>

                  <p className="text-xs font-inter font-semibold tracking-widest uppercase mb-2" style={{ color: '#9A9A9A' }}>
                    {service.subtitle}
                  </p>
                  <h3 className="font-playfair text-2xl font-bold mb-3" style={{ color: '#1C1C1C' }}>
                    {service.title}
                  </h3>
                  <p className="font-inter text-sm leading-relaxed mb-6" style={{ color: '#6B6B6B' }}>
                    {service.description}
                  </p>

                  <div className="flex items-center gap-2 transition-colors duration-300" style={{ color: service.iconColor }}>
                    <span className="text-xs font-inter font-semibold tracking-wide uppercase">Explore</span>
                    <FaArrowRight className="text-xs group-hover:translate-x-1.5 transition-transform duration-300" />
                  </div>

                  {/* Hover corner glow */}
                  <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `radial-gradient(circle, ${service.hoverGlow} 0%, transparent 70%)` }} />
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
