import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExpand, FaTimes, FaUser, FaMapMarkerAlt } from 'react-icons/fa';

const galleryItems = [
  {
    id: 1, title: 'Royal Heritage Hotel & Resort', category: 'Interior',
    client: 'Dr. Sangram Singh', location: 'Ayodhya',
    image: '/images/projects/agrim-hospital.jpg',
    description: 'Luxury banquet hall interior with designer false ceiling, chandeliers and wall paneling.',
  },
  {
    id: 2, title: 'Agrim Hospital', category: 'Commercial',
    client: 'Dr. Arvind Mishra', location: 'Ayodhya',
    image: '/images/projects/ak-plaza.jpg',
    description: 'Full facade design with ACP cladding, toughened glass canopy and modern entrance glazing.',
  },
  {
    id: 3, title: 'A.K. Plaza', category: 'ACP Cladding',
    client: 'Nitin Agarwal', location: 'Ayodhya',
    image: '/images/projects/royal-heritage-hotel.jpg',
    description: 'Multi-storey commercial plaza with full glass facade, HPL cladding and structural glazing.',
  },
  {
    id: 4, title: 'Tanvi Palace', category: 'Architectural',
    client: 'Alok Singh', location: 'Ayodhya',
    image: '/images/projects/sp-complex.jpg',
    description: 'Modern hotel facade with HPL cladding, glass balcony railings and premium entrance design.',
  },
  {
    id: 5, title: 'M.B. Palace', category: 'Glass Facade',
    client: 'Ar. Praveen Jaiswal', location: 'Ayodhya',
    image: '/images/projects/dreamland-hotel.jpg',
    description: 'Commercial building with full glass facade, decorative cladding and structural glazing.',
  },
  {
    id: 6, title: 'Shri Guest House', category: 'Residential',
    client: 'Manoj Pathak', location: 'Ayodhya',
    image: '/images/projects/ali-house.jpg',
    description: 'Guest house with ACP cladding, glass entrance and modern exterior facade design.',
  },
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="gallery" className="py-16 sm:py-20 md:py-28 relative overflow-hidden" style={{ background: '#FFF8F2' }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(255,122,0,0.04) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }} className="text-center mb-3 sm:mb-4">
          <span className="saffron-badge">Our Portfolio</span>
        </motion.div>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.1 }} className="section-heading text-center text-gradient mb-3 sm:mb-4">
          Project Gallery
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-center font-inter text-sm sm:text-base max-w-xl mx-auto mb-10 sm:mb-16" style={{ color: '#6B6B6B' }}>
          A glimpse into our finest glass creations — each piece a fusion of art and engineering
        </motion.p>

        {/* Responsive grid: 1 col mobile, 2 cols tablet, 3 cols desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
              style={{ border: '1.5px solid rgba(255,122,0,0.18)', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}
              onClick={() => setSelected(item)}
              whileHover={{ scale: 1.02, boxShadow: '0 16px 48px rgba(255,122,0,0.18)' }}
            >
              {/* Image with zoom on hover */}
              <div className="relative overflow-hidden" style={{ height: '260px' }}>
                <img
                  src={process.env.PUBLIC_URL + item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Dark overlay for text contrast */}
                <div className="absolute inset-0 transition-opacity duration-500"
                  style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 40%, transparent 60%)' }} />

                {/* Hover overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(255,122,0,0.08) 50%, transparent 100%)' }} />
              </div>

              {/* Text overlay at bottom */}
              <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6">
                <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block text-xs font-inter font-semibold px-2.5 py-1 rounded-full mb-2 text-white"
                    style={{ background: 'rgba(255,122,0,0.8)', backdropFilter: 'blur(4px)' }}>
                    {item.category}
                  </span>
                  <h3 className="font-playfair text-white text-base sm:text-lg font-semibold drop-shadow-lg mb-1">{item.title}</h3>
                  <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    <span className="flex items-center gap-1 text-xs font-inter text-white/80">
                      <FaUser style={{ fontSize: '0.55rem' }} /> {item.client}
                    </span>
                    <span className="flex items-center gap-1 text-xs font-inter text-white/80">
                      <FaMapMarkerAlt style={{ fontSize: '0.55rem' }} /> {item.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Expand icon */}
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'rgba(255,255,255,0.9)', border: '1px solid rgba(255,122,0,0.3)' }}>
                <FaExpand style={{ color: '#FF7A00', fontSize: '0.7rem' }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            style={{ background: 'rgba(10,10,10,0.75)', backdropFilter: 'blur(14px)' }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="relative rounded-2xl sm:rounded-3xl overflow-hidden w-full max-w-2xl"
              style={{ background: '#fff', boxShadow: '0 40px 80px rgba(0,0,0,0.35)' }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={process.env.PUBLIC_URL + selected.image}
                  alt={selected.title}
                  className="w-full h-auto object-contain"
                />
                <div className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 50%)' }} />
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
                  <span className="inline-block text-xs font-inter font-semibold px-2.5 py-1 rounded-full mb-2 text-white"
                    style={{ background: 'rgba(255,122,0,0.8)' }}>
                    {selected.category}
                  </span>
                  <h3 className="font-playfair text-white text-xl sm:text-3xl font-bold">{selected.title}</h3>
                </div>
              </div>

              {/* Details */}
              <div className="p-5 sm:p-6">
                <div className="flex flex-wrap gap-4 mb-3">
                  <span className="flex items-center gap-1.5 text-sm font-inter" style={{ color: '#4a4a4a' }}>
                    <FaUser style={{ color: '#FF7A00', fontSize: '0.7rem' }} /> {selected.client}
                  </span>
                  <span className="flex items-center gap-1.5 text-sm font-inter" style={{ color: '#4a4a4a' }}>
                    <FaMapMarkerAlt style={{ color: '#FF7A00', fontSize: '0.7rem' }} /> {selected.location}
                  </span>
                </div>
                <p className="font-inter text-sm leading-relaxed" style={{ color: '#6B6B6B' }}>{selected.description}</p>
              </div>

              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-colors"
                style={{ background: 'rgba(255,255,255,0.92)', border: '1px solid rgba(255,122,0,0.3)', color: '#FF7A00' }}
              >
                <FaTimes />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
