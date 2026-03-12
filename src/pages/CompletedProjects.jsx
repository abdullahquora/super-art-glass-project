import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle, FaArrowLeft, FaMapMarkerAlt, FaStar, FaTimes, FaExpand, FaUser, FaBuilding } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    client: 'Dr. Arvind Mishra',
    name: 'Agrim Hospital',
    location: 'Ayodhya',
    type: 'Commercial',
    description: 'Full facade design with ACP cladding, toughened glass canopy and modern entrance glazing for a multi-storey hospital complex.',
    image: '/images/projects/agrim-hospital.jpg',
    rating: 5,
  },
  {
    id: 2,
    client: 'Nitin Agarwal',
    name: 'A.K. Plaza',
    location: 'Ayodhya',
    type: 'ACP Cladding',
    description: 'Multi-storey commercial plaza with full glass facade, HPL cladding, structural glazing and decorative frontage.',
    image: '/images/projects/ak-plaza.jpg',
    rating: 5,
  },
  {
    id: 3,
    client: 'Dr. Sangram Singh',
    name: 'Royal Heritage Hotel & Resort',
    location: 'Ayodhya',
    type: 'Interior',
    description: 'Luxury banquet hall interior with designer false ceiling, chandeliers, wall paneling and premium glass work throughout.',
    image: '/images/projects/royal-heritage-hotel.jpg',
    rating: 5,
  },
  {
    id: 4,
    client: 'Ali Ahmad Rasool',
    name: 'Ali House (Tanda)',
    location: 'Tanda',
    type: 'Residential',
    description: 'Premium residential bungalow with ACP cladding, UPVC windows, glass balcony railings and modern facade design on front and back.',
    image: '/images/projects/ali-house.jpg',
    rating: 5,
  },
  {
    id: 5,
    client: 'Vishnu Gupta',
    name: 'Raghunath Ji Complex',
    location: 'Ayodhya',
    type: 'Glass Facade',
    description: 'Three-storey commercial complex with structural glazing, ACP cladding panels, decorative lighting and full frontage renovation.',
    image: '/images/projects/raghunath-complex.jpg',
    rating: 5,
  },
  {
    id: 6,
    client: 'Manoj Pathak',
    name: 'Shri Guest House',
    location: 'Ayodhya',
    type: 'Architectural',
    description: 'Modern guest house facade with toughened glass entrance, ACP cladding, decorative CNC jali panels and premium signage.',
    image: '/images/projects/shri-guest-house.jpg',
    rating: 5,
  },
  {
    id: 7,
    client: 'Alok Singh',
    name: 'Tanvi Palace Hotel',
    location: 'Ayodhya',
    type: 'Glass Facade',
    description: 'Multi-storey hotel with glass balcony railings, HPL wooden cladding, structural glazing and complete exterior transformation.',
    image: '/images/projects/tanvi-palace.jpg',
    rating: 5,
  },
  {
    id: 8,
    client: 'Satya Prakash Singh',
    name: 'SP Complex – Abhay Diagnostics Centre',
    location: 'Ayodhya',
    type: 'Commercial',
    description: 'High-rise commercial complex facade design with ACP cladding, backlit signage, large glass storefronts and underground parking.',
    image: '/images/projects/sp-complex.jpg',
    rating: 5,
  },
  {
    id: 9,
    client: 'Dilshad Umar',
    name: 'Bright Future (Tanda)',
    location: 'Tanda',
    type: 'ACP Cladding',
    description: 'Commercial building with full ACP wood-finish cladding, large toughened glass shopfronts and aluminium framing.',
    image: '/images/projects/bright-future.jpg',
    rating: 4,
  },
  {
    id: 10,
    client: 'Dubey Ji',
    name: 'The Govind Palace',
    location: 'Ayodhya',
    type: 'Architectural',
    description: 'Heritage-style palace with arched toughened glass entrance, metal cladding pillars and elegant exterior stonework detailing.',
    image: '/images/projects/govind-palace.jpg',
    rating: 5,
  },
  {
    id: 11,
    client: 'Ar. Praveen Jaiswal',
    name: 'M.B. Palace',
    location: 'Ayodhya',
    type: 'Glass Facade',
    description: 'Commercial building with full structural glass facade panels, backlit glazing strips and premium storefront design.',
    image: '/images/projects/mb-palace.jpg',
    rating: 5,
  },
  {
    id: 12,
    client: 'Mohit Bhaiya',
    name: 'Bedis Dream Land Hotel & Resort',
    location: 'Ayodhya',
    type: 'Architectural',
    description: 'Luxury hotel with grand glass entrance, full ACP corner facade cladding, ornamental columns and premium glazing throughout.',
    image: '/images/projects/dreamland-hotel.jpg',
    rating: 5,
  },
  {
    id: 13,
    client: 'Kamlesh Pratap Singh',
    name: 'Geet Kamal Palace',
    location: 'Ayodhya',
    type: 'ACP Cladding',
    description: 'Commercial complex facade with ACP cladding, toughened glass storefront, canopy installation and premium entrance design.',
    image: '/images/projects/geet-kamal-palace.jpg',
    rating: 4,
  },
];

const typeColors = {
  Commercial:    { bg: 'rgba(255,122,0,0.1)',   text: '#CC5500',  border: 'rgba(255,122,0,0.25)' },
  'ACP Cladding':{ bg: 'rgba(60,160,80,0.1)',   text: '#1e6b3a',  border: 'rgba(60,160,80,0.25)' },
  Interior:      { bg: 'rgba(140,80,200,0.1)',   text: '#6a2e90',  border: 'rgba(140,80,200,0.25)' },
  Residential:   { bg: 'rgba(60,120,200,0.1)',   text: '#1a4e8a',  border: 'rgba(60,120,200,0.25)' },
  'Glass Facade':{ bg: 'rgba(0,170,200,0.1)',    text: '#005a6b',  border: 'rgba(0,170,200,0.25)' },
  Architectural: { bg: 'rgba(180,120,0,0.1)',    text: '#8a5a00',  border: 'rgba(180,120,0,0.25)' },
};

export default function CompletedProjects() {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.type)))];
  const filtered = filter === 'All' ? projects : projects.filter(p => p.type === filter);

  return (
    <div className="min-h-screen pt-24 pb-20 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #FFF8F2 0%, #f0fff4 50%, #FFF8F2 100%)' }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 20%, rgba(60,160,80,0.04) 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Back link */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <Link to="/projects"
            className="inline-flex items-center gap-2 font-inter text-sm transition-colors mb-10"
            style={{ color: '#9A9A9A' }}
            onMouseEnter={e => e.currentTarget.style.color = '#FF7A00'}
            onMouseLeave={e => e.currentTarget.style.color = '#9A9A9A'}>
            <FaArrowLeft className="text-xs" /> Back to Projects
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
              style={{ background: 'rgba(60,160,80,0.1)', border: '1px solid rgba(60,160,80,0.25)' }}>
              <FaCheckCircle style={{ color: '#2e8b57', fontSize: '1.2rem' }} />
            </div>
            <span className="text-xs font-inter font-semibold tracking-widest uppercase px-3 py-1 rounded-full"
              style={{ background: 'rgba(60,160,80,0.1)', color: '#1e6b3a', border: '1px solid rgba(60,160,80,0.25)' }}>
              500+ Delivered
            </span>
          </div>
          <h1 className="font-playfair mb-3"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, color: '#1C1C1C' }}>
            Completed Projects
          </h1>
          <p className="font-inter text-base max-w-lg" style={{ color: '#6B6B6B' }}>
            A portfolio of successfully delivered glass masterpieces — each one a story of craftsmanship and precision.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-10">
          {categories.map(cat => (
            <button key={cat} onClick={() => setFilter(cat)}
              className="text-xs font-inter font-semibold px-4 py-2 rounded-full transition-all duration-200"
              style={filter === cat
                ? { background: '#FF7A00', color: '#fff', border: '1.5px solid #FF7A00' }
                : { background: 'rgba(255,122,0,0.07)', color: '#CC5F00', border: '1.5px solid rgba(255,122,0,0.2)' }
              }>
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => {
              const tc = typeColors[p.type] || typeColors.Commercial;
              return (
                <motion.div key={p.id}
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  whileHover={{ y: -6, boxShadow: '0 24px 56px rgba(60,160,80,0.14)' }}
                  className="group rounded-2xl overflow-hidden cursor-pointer transition-all duration-300"
                  style={{ background: 'rgba(255,255,255,0.96)', border: '1.5px solid rgba(60,160,80,0.18)', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}
                  onClick={() => setSelected(p)}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden" style={{ height: '200px' }}>
                    <img
                      src={process.env.PUBLIC_URL + p.image}
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={e => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    {/* Fallback placeholder */}
                    <div className="absolute inset-0 items-center justify-center"
                      style={{ display: 'none', background: 'linear-gradient(135deg, #f0fff4 0%, #d4edda 100%)' }}>
                      <FaBuilding style={{ fontSize: '3rem', color: 'rgba(60,160,80,0.35)' }} />
                    </div>

                    {/* Type badge */}
                    <span className="absolute top-3 left-3 text-xs font-inter font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm"
                      style={{ background: tc.bg, color: tc.text, border: `1px solid ${tc.border}` }}>
                      {p.type}
                    </span>

                    {/* Expand icon */}
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: 'rgba(255,255,255,0.9)', border: '1px solid rgba(255,122,0,0.3)' }}>
                      <FaExpand style={{ color: '#FF7A00', fontSize: '0.7rem' }} />
                    </div>

                    <div className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                      style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 60%)' }} />
                  </div>

                  {/* Card body */}
                  <div className="p-5">
                    <h3 className="font-playfair font-bold text-base mb-1 leading-snug" style={{ color: '#1C1C1C' }}>{p.name}</h3>
                    <div className="flex items-center gap-1.5 mb-3">
                      <FaUser style={{ color: '#FF7A00', fontSize: '0.65rem' }} />
                      <span className="text-xs font-inter" style={{ color: '#6B6B6B' }}>{p.client}</span>
                    </div>
                    <p className="text-xs font-inter mb-4 leading-relaxed line-clamp-2" style={{ color: '#8a8a8a' }}>{p.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs font-inter" style={{ color: '#9A9A9A' }}>
                        <FaMapMarkerAlt style={{ color: '#FF7A00', fontSize: '0.65rem' }} />{p.location}
                      </div>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, si) => (
                          <FaStar key={si} className="text-xs"
                            style={{ color: si < p.rating ? '#FF7A00' : 'rgba(0,0,0,0.1)' }} />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
            style={{ background: 'rgba(10,10,10,0.75)', backdropFilter: 'blur(14px)' }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ type: 'spring', damping: 26, stiffness: 280 }}
              className="relative rounded-3xl overflow-hidden w-full max-w-2xl"
              style={{ background: '#fff', boxShadow: '0 40px 100px rgba(0,0,0,0.35)' }}
              onClick={e => e.stopPropagation()}
            >
              {/* Image */}
              <div className="relative" style={{ height: '340px' }}>
                <img
                  src={process.env.PUBLIC_URL + selected.image}
                  alt={selected.name}
                  className="w-full h-full object-cover"
                  onError={e => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="absolute inset-0 items-center justify-center"
                  style={{ display: 'none', background: 'linear-gradient(135deg, #f0fff4, #d4edda)' }}>
                  <FaBuilding style={{ fontSize: '5rem', color: 'rgba(60,160,80,0.3)' }} />
                </div>
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 50%)' }} />

                {/* Type badge */}
                {(() => { const tc = typeColors[selected.type] || typeColors.Commercial; return (
                  <span className="absolute top-4 left-4 text-xs font-inter font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm"
                    style={{ background: tc.bg, color: tc.text, border: `1px solid ${tc.border}` }}>
                    {selected.type}
                  </span>
                ); })()}

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h2 className="font-playfair text-white text-2xl font-bold drop-shadow">{selected.name}</h2>
                </div>
              </div>

              {/* Details */}
              <div className="p-6">
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: 'rgba(255,122,0,0.1)' }}>
                      <FaUser style={{ color: '#FF7A00', fontSize: '0.65rem' }} />
                    </div>
                    <div>
                      <div className="text-xs font-inter" style={{ color: '#9A9A9A' }}>Client</div>
                      <div className="text-sm font-inter font-semibold" style={{ color: '#1C1C1C' }}>{selected.client}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: 'rgba(255,122,0,0.1)' }}>
                      <FaMapMarkerAlt style={{ color: '#FF7A00', fontSize: '0.65rem' }} />
                    </div>
                    <div>
                      <div className="text-xs font-inter" style={{ color: '#9A9A9A' }}>Location</div>
                      <div className="text-sm font-inter font-semibold" style={{ color: '#1C1C1C' }}>{selected.location}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-0.5 mt-1">
                      {[...Array(5)].map((_, si) => (
                        <FaStar key={si} style={{ color: si < selected.rating ? '#FF7A00' : 'rgba(0,0,0,0.12)', fontSize: '0.8rem' }} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm font-inter leading-relaxed" style={{ color: '#5a5a5a' }}>{selected.description}</p>
              </div>

              {/* Close */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-xl flex items-center justify-center transition-colors"
                style={{ background: 'rgba(255,255,255,0.92)', border: '1px solid rgba(255,122,0,0.3)', color: '#FF7A00' }}
              >
                <FaTimes />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
