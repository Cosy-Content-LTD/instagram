import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950 via-blue-900/60 to-blue-950" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-700/10 rounded-full blur-3xl" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-800/40 border border-blue-600/40 text-blue-300 text-sm font-medium mb-8 backdrop-blur-sm"
        >
          <Sparkles size={14} className="text-accent" />
          Premium Design Studio &mdash; London
          <Sparkles size={14} className="text-accent" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-6xl md:text-8xl font-black leading-none tracking-tight mb-6"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          <span className="text-white">Design that</span>
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-accent to-blue-300 bg-clip-text text-transparent">
            moves the world
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-blue-200 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          We craft extraordinary visual experiences that captivate audiences and define brands.
          Based at the iconic HMS Belfast, London &mdash; where history meets innovation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#services"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-accent text-white font-semibold text-lg transition-all duration-300 shadow-xl shadow-blue-600/30 hover:shadow-blue-400/40 hover:-translate-y-1"
          >
            Explore Services
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border border-blue-600/50 hover:border-blue-400 text-blue-200 hover:text-white font-semibold text-lg transition-all duration-300 backdrop-blur-sm hover:bg-blue-800/20"
          >
            Learn More
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex items-center justify-center gap-2 text-blue-400 text-sm"
        >
          <MapPin size={14} className="text-accent" />
          <span>HMS Belfast, The Queen&apos;s Walk, Bermondsey Village, London SE1 2JH</span>
        </motion.div>

        {/* Floating stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '500+', label: 'Projects Delivered' },
            { value: '98%', label: 'Client Satisfaction' },
            { value: '12+', label: 'Years Experience' },
            { value: '40+', label: 'Design Awards' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="p-6 rounded-2xl bg-blue-900/30 border border-blue-700/30 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-3xl font-black text-white mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>{stat.value}</div>
              <div className="text-blue-400 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-blue-400 text-xs font-medium tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-0.5 h-8 bg-gradient-to-b from-blue-400 to-transparent rounded-full"
        />
      </motion.div>
    </section>
  );
}
