import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaArrowLeft, FaMapMarkerAlt, FaHourglassHalf } from 'react-icons/fa';

const projects = [
  { id: 1, name: 'Ayodhya Airport Glass Terminal', location: 'Ayodhya', eta: 'Q2 2025', type: 'Architectural', scale: 'Large' },
  { id: 2, name: 'Riverside Glass Pavilion', location: 'Ayodhya', eta: 'Q3 2025', type: 'Artistic', scale: 'Medium' },
  { id: 3, name: 'Heritage Hotel Glass Atrium', location: 'Varanasi', eta: 'Q1 2025', type: 'Interior', scale: 'Large' },
  { id: 4, name: 'Luxury Villa UPVC Project', location: 'Lucknow', eta: 'Q2 2025', type: 'UPVC', scale: 'Small' },
  { id: 5, name: 'Sacred Temple Glass Dome', location: 'Ayodhya', eta: 'Q4 2025', type: 'Artistic', scale: 'Large' },
  { id: 6, name: 'Corporate ACP Campus', location: 'Kanpur', eta: 'Q3 2025', type: 'ACP', scale: 'Medium' },
  { id: 7, name: 'Museum Skylight System', location: 'Ayodhya', eta: 'Q1 2026', type: 'Architectural', scale: 'Medium' },
  { id: 8, name: 'School Stained Glass Art', location: 'Faizabad', eta: 'Q2 2025', type: 'Artistic', scale: 'Small' },
];

const scaleColors = {
  Large: { bg: 'rgba(255,122,0,0.1)', text: '#CC5500', border: 'rgba(255,122,0,0.25)' },
  Medium: { bg: 'rgba(140,80,200,0.1)', text: '#6a2e90', border: 'rgba(140,80,200,0.25)' },
  Small: { bg: 'rgba(60,160,80,0.1)', text: '#1e6b3a', border: 'rgba(60,160,80,0.25)' },
};

export default function UpcomingProjects() {
  return (
    <div className="min-h-screen pt-24 pb-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #FFF8F2 0%, #f8f0ff 50%, #FFF8F2 100%)' }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 20%, rgba(140,80,200,0.04) 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <Link to="/projects" className="inline-flex items-center gap-2 font-inter text-sm transition-colors mb-10"
            style={{ color: '#9A9A9A' }}
            onMouseEnter={e => e.currentTarget.style.color='#FF7A00'}
            onMouseLeave={e => e.currentTarget.style.color='#9A9A9A'}>
            <FaArrowLeft className="text-xs" /> Back to Projects
          </Link>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
              style={{ background: 'rgba(140,80,200,0.1)', border: '1px solid rgba(140,80,200,0.25)' }}>
              <FaCalendarAlt style={{ color: '#7a3ea0', fontSize: '1.2rem' }} />
            </div>
            <span className="text-xs font-inter font-semibold tracking-widest uppercase px-3 py-1 rounded-full"
              style={{ background: 'rgba(140,80,200,0.1)', color: '#5a2e80', border: '1px solid rgba(140,80,200,0.25)' }}>
              8 Planned
            </span>
          </div>
          <h1 className="font-playfair mb-3" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, color: '#1C1C1C' }}>
            Upcoming Projects
          </h1>
          <p className="font-inter text-base max-w-lg" style={{ color: '#6B6B6B' }}>
            Exciting glass design ventures on our horizon — innovations set to transform spaces near you.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {projects.map((p, i) => {
            const sc = scaleColors[p.scale];
            return (
              <motion.div key={p.id} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6, boxShadow: '0 20px 50px rgba(140,80,200,0.12)' }}
                className="rounded-2xl overflow-hidden transition-all duration-300"
                style={{ background: 'rgba(255,255,255,0.92)', border: '1.5px solid rgba(140,80,200,0.15)', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
                <div className="h-32 relative flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #f8f0ff 0%, #ead8ff 100%)', borderBottom: '1px solid rgba(140,80,200,0.12)' }}>
                  <FaHourglassHalf style={{ fontSize: '2rem', color: 'rgba(140,80,200,0.3)' }} />
                  <span className="absolute top-3 right-3 text-xs font-inter px-2 py-0.5 rounded-full"
                    style={{ background: sc.bg, color: sc.text, border: `1px solid ${sc.border}` }}>
                    {p.scale}
                  </span>
                </div>
                <div className="p-4">
                  <span className="text-xs font-inter tracking-widest uppercase mb-1 block" style={{ color: '#9A9A9A' }}>{p.type}</span>
                  <h3 className="font-playfair font-bold text-sm mb-3 leading-snug" style={{ color: '#1C1C1C' }}>{p.name}</h3>
                  <div className="flex items-center gap-1 text-xs font-inter mb-2" style={{ color: '#9A9A9A' }}>
                    <FaMapMarkerAlt className="text-xs" style={{ color: '#FF7A00' }} />{p.location}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <FaCalendarAlt className="text-xs" style={{ color: '#7a3ea0' }} />
                    <span className="text-xs font-inter font-semibold" style={{ color: '#7a3ea0' }}>ETA: {p.eta}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
