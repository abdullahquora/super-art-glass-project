import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaChevronDown, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #FFF8F2 0%, #FFE5B4 35%, #FFF3E8 65%, #FFF8F2 100%)' }}
    >
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 30% 50%, rgba(255,122,0,0.07) 0%, transparent 70%)' }} />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 50% 50% at 75% 60%, rgba(244,162,97,0.1) 0%, transparent 60%)' }} />
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,122,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,122,0,1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }} />

      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 pt-28 pb-20 sm:py-24 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

        {/* LEFT: Text content */}
        <div className="order-2 lg:order-1">
          {/* Location badge with Ayodhya logo */}
          <div
            className="inline-flex items-center gap-2 mb-6 sm:mb-8"
            style={{ background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,122,0,0.2)', padding: '6px 18px 6px 6px', borderRadius: '999px', boxShadow: '0 2px 12px rgba(255,122,0,0.08)' }}
          >
            <img
              src={process.env.PUBLIC_URL + '/images/ayodhya-logo.png'}
              alt="Ayodhya"
              className="h-7 sm:h-8 w-auto flex-shrink-0 rounded-full"
            />
            <span className="w-1.5 h-1.5 rounded-full animate-pulse flex-shrink-0" style={{ background: '#FF7A00' }} />
            <span className="text-xs font-semibold tracking-widest uppercase font-inter" style={{ color: '#FF7A00' }}>
              Ayodhya, India
            </span>
          </div>

          {/* Heading */}
          <h1
            className="font-playfair text-gradient mb-4"
            style={{ fontSize: 'clamp(2.2rem, 7vw, 5.5rem)', fontWeight: 800, lineHeight: 1.05 }}
          >
            Super Art{' '}
            <span className="block">Glass</span>
          </h1>

          {/* Subtitle */}
          <p
            className="font-inter text-base sm:text-lg md:text-xl mb-6 max-w-lg"
            style={{ color: '#5a5a5a', lineHeight: 1.7, fontWeight: 300 }}
          >
            Crafting premium architectural glass solutions — from UPVC windows to stunning glass facades — trusted by <strong style={{ fontWeight: 500, color: '#3a3a3a' }}>500+ clients</strong> across India.
          </p>

          {/* Service pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {['UPVC Windows', 'Toughened Glass', 'ACP Cladding', 'HPL Cladding', 'Glass Facades'].map(s => (
              <span key={s} className="text-xs font-inter px-3.5 py-1.5 rounded-full transition-colors duration-200 hover:bg-[rgba(255,122,0,0.15)] cursor-default"
                style={{ background: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,122,0,0.2)', color: '#CC5F00' }}>
                {s}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8">
            <Link to="/projects">
              <button
                className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-inter font-semibold text-white text-sm tracking-wide transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_12px_32px_rgba(255,122,0,0.4)] active:translate-y-0 w-full sm:w-auto"
                style={{ background: 'linear-gradient(135deg, #FF7A00, #E86A00)', boxShadow: '0 6px 24px rgba(255,122,0,0.3)' }}
              >
                View Projects <FaArrowRight className="text-xs" />
              </button>
            </Link>
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-inter font-medium text-sm tracking-wide transition-all duration-300 hover:translate-y-[-2px] hover:bg-[rgba(255,122,0,0.1)] active:translate-y-0 w-full sm:w-auto"
              style={{ border: '1.5px solid rgba(255,122,0,0.3)', color: '#CC5F00', background: 'rgba(255,255,255,0.5)' }}
            >
              Learn More
            </button>
          </div>

          {/* Quick contact */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-6" style={{ borderTop: '1px solid rgba(255,122,0,0.12)' }}>
            <span className="text-[10px] font-inter font-semibold uppercase tracking-widest" style={{ color: '#b0b0b0' }}>Contact</span>
            <a href="tel:9455724383" className="flex items-center gap-1.5 text-sm font-inter transition-colors duration-200 hover:text-[#FF7A00]" style={{ color: '#6B6B6B' }}>
              <FaPhone style={{ color: '#FF7A00', fontSize: '0.65rem' }} /> 9455724383
            </a>
            <a href="tel:8423629222" className="flex items-center gap-1.5 text-sm font-inter transition-colors duration-200 hover:text-[#FF7A00]" style={{ color: '#6B6B6B' }}>
              <FaPhone style={{ color: '#FF7A00', fontSize: '0.65rem' }} /> 8423629222
            </a>
            <a href="mailto:superartglassfzd@gmail.com" className="flex items-center gap-1.5 text-xs sm:text-sm font-inter break-all sm:break-normal transition-colors duration-200 hover:text-[#FF7A00]" style={{ color: '#6B6B6B' }}>
              <FaEnvelope style={{ color: '#FF7A00', fontSize: '0.65rem', flexShrink: 0 }} /> superartglassfzd@gmail.com
            </a>
          </div>
        </div>

        {/* RIGHT: Company Logo + Stats */}
        <div className="flex flex-col items-center order-1 lg:order-2">
          <div className="relative">
            {/* Decorative ring */}
            <div className="absolute inset-[-20px] rounded-full pointer-events-none"
              style={{ border: '1px dashed rgba(255,122,0,0.15)' }} />
            <div className="absolute inset-[-50px] rounded-full pointer-events-none"
              style={{ border: '1px dashed rgba(255,122,0,0.08)' }} />

            {/* Ambient glow */}
            <div className="absolute pointer-events-none"
              style={{ inset: '-30px', borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(255,122,0,0.12) 0%, transparent 70%)' }} />

            {/* Super Art Glass Logo */}
            <img
              src={process.env.PUBLIC_URL + '/images/logo.png'}
              alt="Super Art Glass Logo"
              loading="eager"
              onError={(e) => { e.target.style.display = 'none'; }}
              className="transition-transform duration-500 hover:scale-105"
              style={{
                width: 'clamp(180px, 30vw, 320px)',
                height: 'clamp(180px, 30vw, 320px)',
                objectFit: 'contain',
                filter: 'drop-shadow(0 16px 48px rgba(255,122,0,0.2))',
              }}
            />

            {/* Badge: Years */}
            <div
              className="absolute px-4 py-2.5 rounded-2xl hidden sm:block"
              style={{ top: '-8px', right: '-28px', background: 'rgba(255,255,255,0.95)', border: '1px solid rgba(255,122,0,0.15)', boxShadow: '0 8px 24px rgba(0,0,0,0.06)' }}
            >
              <div className="font-playfair text-2xl font-bold text-gradient-blue">15+</div>
              <div className="text-[10px] font-inter font-medium" style={{ color: '#888' }}>Years Experience</div>
            </div>

            {/* Badge: Projects */}
            <div
              className="absolute px-4 py-2.5 rounded-2xl hidden sm:block"
              style={{ bottom: '-8px', left: '-28px', background: 'rgba(255,255,255,0.95)', border: '1px solid rgba(255,122,0,0.15)', boxShadow: '0 8px 24px rgba(0,0,0,0.06)' }}
            >
              <div className="font-playfair text-2xl font-bold text-gradient-blue">500+</div>
              <div className="text-[10px] font-inter font-medium" style={{ color: '#888' }}>Projects Done</div>
            </div>
          </div>

          {/* Mobile stats — visible only on small screens */}
          <div className="flex gap-6 mt-8 sm:hidden">
            <div className="text-center">
              <div className="font-playfair text-2xl font-bold text-gradient-blue">15+</div>
              <div className="text-[10px] font-inter font-medium" style={{ color: '#888' }}>Years Experience</div>
            </div>
            <div className="w-px bg-orange-200" />
            <div className="text-center">
              <div className="font-playfair text-2xl font-bold text-gradient-blue">500+</div>
              <div className="text-[10px] font-inter font-medium" style={{ color: '#888' }}>Projects Done</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 transition-opacity duration-300 hover:opacity-80"
        style={{ color: 'rgba(255,122,0,0.4)' }}
      >
        <span className="text-[10px] font-inter tracking-[0.2em] uppercase">Scroll</span>
        <FaChevronDown size={10} />
      </button>
    </section>
  );
}
