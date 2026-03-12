import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaArrowRight, FaChevronDown, FaPhone, FaEnvelope } from 'react-icons/fa';

const GlassShard = ({ style, delay = 0, size = 80 }) => (
  <motion.div
    style={style}
    animate={{ y: [0, -20, 0], rotate: [0, 6, 0], opacity: [0.12, 0.25, 0.12] }}
    transition={{ duration: 7 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
    className="absolute pointer-events-none"
  >
    <div style={{
      width: size, height: size,
      transform: 'rotate(45deg)',
      background: 'linear-gradient(135deg, rgba(255,122,0,0.18) 0%, rgba(244,162,97,0.08) 100%)',
      border: '1px solid rgba(255,122,0,0.22)',
      backdropFilter: 'blur(4px)',
      borderRadius: '6px',
    }} />
  </motion.div>
);

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '28%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #FFF8F2 0%, #FFE5B4 40%, #FFF3E8 70%, #FFF8F2 100%)' }}
    >
      {/* Warm radial glows */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 40% 45%, rgba(255,122,0,0.08) 0%, transparent 70%)' }} />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 40% 40% at 80% 75%, rgba(244,162,97,0.12) 0%, transparent 60%)' }} />

      {/* Subtle grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,122,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,122,0,1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }} />

      {/* Floating glass shards */}
      <GlassShard style={{ top: '10%', left: '6%' }} delay={0} size={65} />
      <GlassShard style={{ top: '18%', right: '6%' }} delay={1.5} size={90} />
      <GlassShard style={{ bottom: '22%', left: '4%' }} delay={0.8} size={50} />
      <GlassShard style={{ bottom: '14%', right: '7%' }} delay={2} size={70} />
      <GlassShard style={{ top: '52%', left: '14%' }} delay={1.2} size={40} />
      <GlassShard style={{ top: '38%', right: '17%' }} delay={0.5} size={55} />

      {/* Two-column layout: Text LEFT, Logo RIGHT */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 pt-24 pb-16 sm:py-20 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 items-center"
      >
        {/* LEFT: Text content */}
        <div>
          {/* Location badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-4 sm:mb-8"
            style={{ background: 'rgba(255,122,0,0.1)', border: '1px solid rgba(255,122,0,0.25)', padding: '6px 16px', borderRadius: '999px' }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#FF7A00' }} />
            <span className="text-xs font-semibold tracking-widest uppercase font-inter" style={{ color: '#FF7A00' }}>
              Ayodhya, India
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }}
            className="font-playfair text-gradient mb-5"
            style={{ fontSize: 'clamp(2rem, 7vw, 5.5rem)', fontWeight: 800, lineHeight: 1.08 }}
          >
            Super Art Glass
          </motion.h1>

          {/* Saffron underline */}
          <motion.div
            initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 0.4 }}
            className="w-28 h-1 rounded-full mb-6"
            style={{ background: 'linear-gradient(90deg, #FF7A00, #F4A261, #FFE5B4)', transformOrigin: 'left' }}
          />

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
            className="font-inter text-lg md:text-xl font-light mb-4 max-w-xl"
            style={{ color: '#4a4a4a', lineHeight: 1.75 }}
          >
            Premium Glass Design &amp; Architectural Glass Solutions
          </motion.p>

          {/* Service pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.35 }}
            className="flex flex-wrap gap-2 mb-5 sm:mb-8"
          >
            {['UPVC Windows', 'Toughened Glass', 'ACP Cladding', 'HPL Cladding', 'Glass Facades'].map(s => (
              <span key={s} className="text-xs font-inter px-3 py-1 rounded-full"
                style={{ background: 'rgba(255,122,0,0.09)', border: '1px solid rgba(255,122,0,0.2)', color: '#CC5F00' }}>
                {s}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 items-start"
          >
            <Link to="/projects">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 36px rgba(255,122,0,0.45)' }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-3 px-8 py-4 rounded-2xl font-inter font-semibold text-white text-sm tracking-wide"
                style={{ background: 'linear-gradient(135deg, #FF7A00, #F4A261)', boxShadow: '0 6px 24px rgba(255,122,0,0.35)' }}
              >
                View Projects <FaArrowRight className="text-xs" />
              </motion.button>
            </Link>
            <motion.button
              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 px-8 py-4 rounded-2xl font-inter font-medium text-sm tracking-wide transition-colors duration-300"
              style={{ border: '1.5px solid rgba(255,122,0,0.35)', color: '#CC5F00', background: 'rgba(255,122,0,0.06)' }}
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* Quick contact */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.65 }}
            className="flex flex-wrap gap-5 mt-8"
          >
            <a href="tel:9455724383" className="flex items-center gap-2 text-sm font-inter" style={{ color: '#6B6B6B' }}>
              <FaPhone style={{ color: '#FF7A00', fontSize: '0.7rem' }} /> 9455724383
            </a>
            <a href="tel:8423629222" className="flex items-center gap-2 text-sm font-inter" style={{ color: '#6B6B6B' }}>
              <FaPhone style={{ color: '#FF7A00', fontSize: '0.7rem' }} /> 8423629222
            </a>
            <a href="mailto:superartglassfzd@gmail.com" className="flex items-center gap-2 text-xs sm:text-sm font-inter break-all sm:break-normal" style={{ color: '#6B6B6B' }}>
              <FaEnvelope style={{ color: '#FF7A00', fontSize: '0.7rem', flexShrink: 0 }} /> superartglassfzd@gmail.com
            </a>
          </motion.div>
        </div>

        {/* RIGHT: Company Logo */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, type: 'spring', damping: 20 }}
          className="flex items-center justify-center mt-8 lg:mt-0"
        >
          <div className="relative">
            {/* Ambient glow */}
            <div className="absolute pointer-events-none"
              style={{ inset: '-24px', borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(255,122,0,0.1) 0%, transparent 70%)' }} />

            {/* Logo */}
            <motion.img
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              whileHover={{ scale: 1.05, filter: 'drop-shadow(0 28px 72px rgba(255,122,0,0.45))' }}
              src={process.env.PUBLIC_URL + '/images/logo.png'}
              alt="Super Art Glass Logo"
              onError={(e) => { e.target.style.display = 'none'; }}
              style={{
                width: 'clamp(150px, 35vw, 340px)',
                height: 'clamp(150px, 35vw, 340px)',
                objectFit: 'contain',
                filter: 'drop-shadow(0 20px 60px rgba(255,122,0,0.25))',
              }}
            />

            {/* Floating badge: Projects */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute px-3 sm:px-5 py-2 sm:py-3 rounded-xl sm:rounded-2xl hidden sm:block"
              style={{ bottom: '-12px', left: '-20px', background: 'rgba(255,255,255,0.96)', border: '1px solid rgba(255,122,0,0.22)', boxShadow: '0 8px 28px rgba(255,122,0,0.14)' }}
            >
              <div className="font-playfair text-xl sm:text-2xl font-bold text-gradient-blue">500+</div>
              <div className="text-xs font-inter" style={{ color: '#6B6B6B' }}>Projects Done</div>
            </motion.div>

            {/* Floating badge: Years */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute px-3 sm:px-5 py-2 sm:py-3 rounded-xl sm:rounded-2xl hidden sm:block"
              style={{ top: '-12px', right: '-20px', background: 'rgba(255,255,255,0.96)', border: '1px solid rgba(255,122,0,0.22)', boxShadow: '0 8px 28px rgba(255,122,0,0.14)' }}
            >
              <div className="font-playfair text-xl sm:text-2xl font-bold text-gradient-blue">15+</div>
              <div className="text-xs font-inter" style={{ color: '#6B6B6B' }}>Years Experience</div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: 'rgba(255,122,0,0.5)' }}
      >
        <span className="text-xs font-inter tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <FaChevronDown size={12} />
        </motion.div>
      </motion.button>
    </section>
  );
}
