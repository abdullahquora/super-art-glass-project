import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaCheckCircle, FaWhatsapp, FaStore } from 'react-icons/fa';

const contactInfo = [
  {
    icon: FaStore,
    label: 'Showroom',
    value: 'Near Disha Coaching, Durgapuri Colony Naka, Ayodhya',
    link: null,
    color: '#FF7A00',
  },
  {
    icon: FaMapMarkerAlt,
    label: 'Office',
    value: 'Shop No. 4, 1st Floor Noor Complex, ICICI Bank Tarang Road, Faizabad',
    link: null,
    color: '#F4A261',
  },
  {
    icon: FaPhone,
    label: 'Phone',
    value: '9455724383 / 8423629222',
    link: 'tel:9455724383',
    color: '#FF7A00',
  },
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'superartglassfzd@gmail.com',
    link: 'mailto:superartglassfzd@gmail.com',
    color: '#F4A261',
  },
  {
    icon: FaWhatsapp,
    label: 'WhatsApp',
    value: '9455724383',
    link: 'https://wa.me/919455724383',
    color: '#25d366',
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm({ name: '', phone: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-28 relative overflow-hidden" style={{ background: '#FFF3E8' }}>
      <div className="absolute top-0 left-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top left, rgba(255,122,0,0.06) 0%, transparent 65%)' }} />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at bottom right, rgba(244,162,97,0.08) 0%, transparent 65%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }} className="text-center mb-3 sm:mb-4">
          <span className="saffron-badge">Get In Touch</span>
        </motion.div>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.1 }} className="section-heading text-center text-gradient mb-3 sm:mb-4">
          Contact Us
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-center font-inter text-sm sm:text-base max-w-xl mx-auto mb-10 sm:mb-16" style={{ color: '#6B6B6B' }}>
          Ready to transform your space with premium glass? Let's start a conversation.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Left: Contact info */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.7, delay: 0.1 }}>
            <h3 className="font-playfair text-2xl font-bold mb-3" style={{ color: '#1C1C1C' }}>We'd Love to Hear From You</h3>
            <p className="font-inter text-sm leading-relaxed mb-8" style={{ color: '#6B6B6B' }}>
              Whether you have a project in mind, need a quote, or want to learn more about our glass solutions —
              our team is ready to assist you from Ayodhya and Faizabad.
            </p>

            <div className="space-y-4">
              {contactInfo.map((item, i) => (
                <motion.div key={item.label} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 * i }}
                  className="flex items-start gap-4 p-4 rounded-2xl transition-all duration-300"
                  style={{ background: 'rgba(255,255,255,0.85)', border: '1px solid rgba(255,122,0,0.15)', boxShadow: '0 2px 12px rgba(255,122,0,0.06)' }}
                >
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${item.color}18`, border: `1px solid ${item.color}30` }}>
                    <item.icon style={{ color: item.color }} className="text-base" />
                  </div>
                  <div>
                    <p className="text-xs font-inter font-semibold tracking-widest uppercase mb-0.5" style={{ color: '#9A9A9A' }}>{item.label}</p>
                    {item.link ? (
                      <a href={item.link} className="font-inter text-sm font-medium transition-colors duration-200" style={{ color: '#1C1C1C' }}
                        onMouseEnter={e => e.target.style.color='#FF7A00'}
                        onMouseLeave={e => e.target.style.color='#1C1C1C'}>
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-inter text-sm" style={{ color: '#4a4a4a' }}>{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 p-6 rounded-2xl text-center"
              style={{ background: 'linear-gradient(135deg, rgba(255,122,0,0.08) 0%, rgba(244,162,97,0.06) 100%)', border: '1px solid rgba(255,122,0,0.2)' }}>
              <p className="font-playfair italic text-base" style={{ color: '#4a4a4a' }}>
                "Transforming spaces through the art of glass — one project at a time."
              </p>
              <p className="text-sm font-inter mt-2 font-medium" style={{ color: '#FF7A00' }}>Super Art Glass, Ayodhya</p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.7, delay: 0.2 }}>
            <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl"
              style={{ background: 'rgba(255,255,255,0.9)', border: '1.5px solid rgba(255,122,0,0.2)', backdropFilter: 'blur(20px)', boxShadow: '0 8px 40px rgba(255,122,0,0.1)' }}>
              <h3 className="font-playfair text-xl font-bold mb-6" style={{ color: '#1C1C1C' }}>Send Us a Message</h3>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                      style={{ background: 'rgba(255,122,0,0.12)', border: '2px solid rgba(255,122,0,0.35)' }}>
                      <FaCheckCircle style={{ color: '#FF7A00', fontSize: '1.5rem' }} />
                    </div>
                    <h4 className="font-playfair text-xl font-bold mb-2" style={{ color: '#1C1C1C' }}>Message Sent!</h4>
                    <p className="font-inter text-sm" style={{ color: '#6B6B6B' }}>
                      Thank you for reaching out. We'll get back to you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-xs font-inter font-semibold tracking-widest uppercase mb-2" style={{ color: '#9A9A9A' }}>Your Name</label>
                      <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="e.g. Rahul Sharma" required className="input-glass" />
                    </div>
                    <div>
                      <label className="block text-xs font-inter font-semibold tracking-widest uppercase mb-2" style={{ color: '#9A9A9A' }}>Phone Number</label>
                      <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 94557 24383" required className="input-glass" />
                    </div>
                    <div>
                      <label className="block text-xs font-inter font-semibold tracking-widest uppercase mb-2" style={{ color: '#9A9A9A' }}>Message</label>
                      <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your project..." rows={5} required className="input-glass resize-none" />
                    </div>
                    <motion.button
                      type="submit"
                      disabled={loading}
                      whileHover={{ scale: 1.02, boxShadow: '0 0 28px rgba(255,122,0,0.4)' }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 rounded-2xl font-inter font-semibold text-white text-sm tracking-wide flex items-center justify-center gap-2 transition-all duration-300"
                      style={{
                        background: loading ? 'rgba(255,122,0,0.5)' : 'linear-gradient(135deg, #FF7A00, #F4A261)',
                        boxShadow: loading ? 'none' : '0 6px 20px rgba(255,122,0,0.35)',
                      }}
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="3" />
                            <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8v8H4z" />
                          </svg>
                          Sending...
                        </>
                      ) : 'Send Message'}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
