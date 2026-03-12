import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaGem, FaMapMarkerAlt, FaStar, FaWindowMaximize } from 'react-icons/fa';

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };

const stats = [
  { icon: FaGem, value: '500+', label: 'Projects Completed', color: '#FF7A00' },
  { icon: FaAward, value: '15+', label: 'Years of Excellence', color: '#F4A261' },
  { icon: FaStar, value: '200+', label: 'Happy Clients', color: '#FF7A00' },
  { icon: FaMapMarkerAlt, value: 'Ayodhya', label: 'Based In India', color: '#F4A261' },
];

const services = [
  'Fenesta UPVC Windows & Doors',
  'Aluminium Composite Panel (ACP)',
  'Aluminium HPL & HPL Cladding',
  'Toughened Glass',
  'Exterior Work & Consultants',
  'Architectural Glass Facades',
];

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-28 relative overflow-hidden" style={{ background: '#FFF8F2' }}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(255,122,0,0.05) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }} className="text-center mb-4">
          <span className="saffron-badge">Our Story</span>
        </motion.div>

        <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.1 }} className="section-heading text-center text-gradient mb-16">
          Crafting Glass Masterpieces
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text side */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.7, delay: 0.15 }}>
            <p className="font-inter text-lg leading-relaxed mb-6" style={{ color: '#4a4a4a', lineHeight: '1.85' }}>
              Founded with a passion for transforming spaces through the timeless beauty of glass,{' '}
              <span className="font-semibold" style={{ color: '#1C1C1C' }}>Super Art Glass</span> has established itself as
              Ayodhya's premier destination for artistic and architectural glass solutions. We believe glass is not merely a
              material — it is a canvas for light, elegance, and artistic vision.
            </p>
            <p className="font-inter text-lg leading-relaxed mb-6" style={{ color: '#4a4a4a', lineHeight: '1.85' }}>
              We specialize in{' '}
              <span className="font-semibold" style={{ color: '#FF7A00' }}>Fenesta UPVC Windows & Doors</span>,{' '}
              <span className="font-semibold" style={{ color: '#FF7A00' }}>Aluminium Composite Panels (ACP)</span>,{' '}
              HPL Cladding, Toughened Glass, and full-scale architectural glass façades. Each project is a testament to
              precision engineering and artistic mastery.
            </p>
            <p className="font-inter text-lg leading-relaxed mb-8" style={{ color: '#4a4a4a', lineHeight: '1.85' }}>
              Serving Ayodhya, Faizabad, and surrounding regions of Uttar Pradesh with uncompromising quality and craftsmanship.
            </p>

            {/* Services grid */}
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 sm:gap-3 mb-8">
              {services.map((s, i) => (
                <motion.div key={s} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl"
                  style={{ background: 'rgba(255,122,0,0.06)', border: '1px solid rgba(255,122,0,0.15)' }}>
                  <FaWindowMaximize style={{ color: '#FF7A00', fontSize: '0.7rem', flexShrink: 0 }} />
                  <span className="text-xs font-inter font-medium" style={{ color: '#4a4a4a' }}>{s}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, rgba(255,122,0,0.4), transparent)' }} />
              <FaGem style={{ color: '#FF7A00', fontSize: '0.85rem' }} />
              <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,122,0,0.4))' }} />
            </div>

            <blockquote className="px-6 py-5 rounded-2xl" style={{ background: 'rgba(255,122,0,0.06)', border: '1px solid rgba(255,122,0,0.18)' }}>
              <p className="font-playfair text-lg italic leading-relaxed" style={{ color: '#4a4a4a' }}>
                "Every pane of glass we craft tells a story — of light, of space, of the human desire to make the world more beautiful."
              </p>
              <footer className="mt-3 text-sm font-inter font-medium" style={{ color: '#FF7A00' }}>
                Shahban Ali — Founder, Super Art Glass
              </footer>
            </blockquote>
          </motion.div>

          {/* Visual side */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.7, delay: 0.3 }} className="relative">
            <div className="relative h-[320px] sm:h-[400px] lg:h-[480px]">
              <div className="absolute top-8 left-8 right-0 bottom-0 rounded-3xl"
                style={{ background: 'linear-gradient(135deg, rgba(255,122,0,0.1) 0%, rgba(244,162,97,0.05) 100%)', border: '1px solid rgba(255,122,0,0.15)' }} />
              <div className="absolute top-0 left-0 right-8 bottom-8 rounded-3xl overflow-hidden"
                style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,248,242,0.98) 100%)', border: '1.5px solid rgba(255,122,0,0.2)', backdropFilter: 'blur(20px)', boxShadow: '0 20px 60px rgba(255,122,0,0.12)' }}>
                <div className="absolute inset-0 opacity-[0.04]"
                  style={{ backgroundImage: 'linear-gradient(rgba(255,122,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,122,0,1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-8">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
                    style={{ width: '90px', height: '90px', transform: 'rotate(45deg)', background: 'linear-gradient(135deg, rgba(255,122,0,0.25) 0%, rgba(244,162,97,0.1) 50%, rgba(255,229,180,0.2) 100%)', border: '2px solid rgba(255,122,0,0.35)', borderRadius: '8px' }}
                  />
                  <p className="font-playfair text-2xl font-bold text-center" style={{ color: '#1C1C1C' }}>
                    Artistic Glass<br />
                    <span className="text-gradient-blue">Ayodhya, India</span>
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {['UPVC', 'ACP', 'Glass Facades', 'Toughened Glass'].map((tag) => (
                      <span key={tag} className="text-xs font-inter px-3 py-1 rounded-full"
                        style={{ background: 'rgba(255,122,0,0.1)', border: '1px solid rgba(255,122,0,0.2)', color: '#CC5F00' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 rounded-tl-lg" style={{ borderColor: 'rgba(255,122,0,0.4)' }} />
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 rounded-tr-lg" style={{ borderColor: 'rgba(255,122,0,0.4)' }} />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 rounded-bl-lg" style={{ borderColor: 'rgba(255,122,0,0.4)' }} />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 rounded-br-lg" style={{ borderColor: 'rgba(255,122,0,0.4)' }} />
              </div>
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -left-4 px-5 py-3 rounded-2xl z-10"
                style={{ background: 'rgba(255,255,255,0.97)', border: '1px solid rgba(255,122,0,0.22)', boxShadow: '0 8px 28px rgba(255,122,0,0.15)' }}>
                <div className="font-playfair text-2xl font-bold text-gradient-blue">15+</div>
                <div className="text-xs font-inter" style={{ color: '#6B6B6B' }}>Years of Excellence</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {stats.map((stat, i) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 * i }}
              whileHover={{ y: -5, boxShadow: '0 16px 40px rgba(255,122,0,0.15)' }}
              className="p-6 text-center rounded-2xl transition-all duration-300"
              style={{ background: 'rgba(255,255,255,0.9)', border: '1px solid rgba(255,122,0,0.2)', boxShadow: '0 4px 20px rgba(255,122,0,0.07)' }}>
              <stat.icon style={{ color: stat.color, fontSize: '1.5rem' }} className="mx-auto mb-3" />
              <div className="font-playfair text-2xl font-bold mb-1" style={{ color: '#1C1C1C' }}>{stat.value}</div>
              <div className="text-xs font-inter tracking-wide" style={{ color: '#6B6B6B' }}>{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
