import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHardHat, FaArrowLeft, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const projects = [
  { id: 1, name: 'Grand Mosque Glass Facade', location: 'Ayodhya', progress: 75, type: 'Architectural' },
  { id: 2, name: 'Heritage Hotel Lobby Panels', location: 'Faizabad', progress: 45, type: 'Interior' },
  { id: 3, name: 'Residential UPVC Windows', location: 'Ayodhya', progress: 90, type: 'UPVC' },
  { id: 4, name: 'Commercial ACP Cladding', location: 'Lucknow', progress: 30, type: 'ACP' },
  { id: 5, name: 'Temple Stained Glass Windows', location: 'Ayodhya', progress: 60, type: 'Artistic' },
  { id: 6, name: 'Office Glass Entrance', location: 'Sultanpur', progress: 20, type: 'Architectural' },
];

export default function OngoingProjects() {
  return (
    <div className="min-h-screen pt-24 pb-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #FFF8F2 0%, #FFF3E8 100%)' }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 20%, rgba(255,122,0,0.05) 0%, transparent 70%)' }} />

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
              style={{ background: 'rgba(255,140,0,0.1)', border: '1px solid rgba(255,140,0,0.25)' }}>
              <FaHardHat style={{ color: '#E07000', fontSize: '1.2rem' }} />
            </div>
            <span className="text-xs font-inter font-semibold tracking-widest uppercase px-3 py-1 rounded-full"
              style={{ background: 'rgba(255,140,0,0.1)', color: '#CC5500', border: '1px solid rgba(255,140,0,0.25)' }}>
              Live Now
            </span>
          </div>
          <h1 className="font-playfair mb-3" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, color: '#1C1C1C' }}>
            Ongoing Projects
          </h1>
          <p className="font-inter text-base max-w-lg" style={{ color: '#6B6B6B' }}>
            Glass installations and design works currently in progress — craftsmanship happening in real time.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div key={p.id} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, boxShadow: '0 20px 50px rgba(255,122,0,0.14)' }}
              className="rounded-2xl overflow-hidden transition-all duration-300"
              style={{ background: 'rgba(255,255,255,0.92)', border: '1.5px solid rgba(255,140,0,0.2)', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
              <div className="h-40 relative flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%)', borderBottom: '1px solid rgba(255,140,0,0.15)' }}>
                <FaHardHat style={{ fontSize: '2.5rem', color: 'rgba(255,122,0,0.3)' }} />
                <span className="absolute top-3 right-3 text-xs font-inter px-2.5 py-1 rounded-full"
                  style={{ background: 'rgba(255,140,0,0.15)', color: '#CC5500', border: '1px solid rgba(255,140,0,0.25)' }}>
                  {p.type}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-playfair font-bold text-lg mb-2" style={{ color: '#1C1C1C' }}>{p.name}</h3>
                <div className="flex items-center gap-1.5 text-xs font-inter mb-4" style={{ color: '#9A9A9A' }}>
                  <FaMapMarkerAlt className="text-xs" style={{ color: '#FF7A00' }} />{p.location}
                </div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-inter flex items-center gap-1" style={{ color: '#9A9A9A' }}>
                    <FaClock className="text-xs" style={{ color: '#FF7A00' }} /> Progress
                  </span>
                  <span className="text-xs font-inter font-semibold" style={{ color: '#E07000' }}>{p.progress}%</span>
                </div>
                <div className="h-2 rounded-full overflow-hidden" style={{ background: 'rgba(255,122,0,0.12)' }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${p.progress}%` }}
                    transition={{ duration: 1, delay: 0.3 + i * 0.1, ease: 'easeOut' }}
                    className="h-full rounded-full"
                    style={{ background: 'linear-gradient(90deg, #FF7A00, #F4A261)' }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
