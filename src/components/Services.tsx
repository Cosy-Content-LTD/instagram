import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Palette, Layout, Layers, Pen, Monitor, Wand2 } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Brand Identity',
    description: 'We craft distinctive brand systems that resonate deeply with your audience, from logo design to comprehensive visual guidelines.',
    gradient: 'from-blue-600 to-blue-400',
    delay: 0,
  },
  {
    icon: Layout,
    title: 'UI / UX Design',
    description: 'Intuitive, beautiful interfaces that delight users and drive conversions. Every pixel is purposeful and every interaction is intentional.',
    gradient: 'from-blue-500 to-accent',
    delay: 0.1,
  },
  {
    icon: Layers,
    title: 'Motion Design',
    description: 'Breathe life into your brand with stunning animations and motion graphics that capture attention and tell your story dynamically.',
    gradient: 'from-accent to-blue-400',
    delay: 0.2,
  },
  {
    icon: Pen,
    title: 'Editorial Design',
    description: 'Compelling print and digital publications that command attention. We combine typography, imagery, and layout into masterful compositions.',
    gradient: 'from-blue-700 to-blue-500',
    delay: 0.3,
  },
  {
    icon: Monitor,
    title: 'Web Design',
    description: 'Award-worthy websites built for performance and aesthetics. We transform your online presence into an unforgettable digital experience.',
    gradient: 'from-blue-600 to-blue-300',
    delay: 0.4,
  },
  {
    icon: Wand2,
    title: 'Creative Direction',
    description: 'Strategic creative leadership for campaigns and projects. We align vision, strategy, and execution to produce work that stands apart.',
    gradient: 'from-blue-500 to-blue-700',
    delay: 0.5,
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950 via-blue-900/20 to-blue-950" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-4">What We Do</span>
          <h2
            className="text-5xl md:text-6xl font-black text-white mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Design Services
          </h2>
          <p className="text-blue-300 text-lg max-w-2xl mx-auto leading-relaxed">
            From concept to creation, we offer a full spectrum of design services tailored to elevate your brand above the competition.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: service.delay }}
              className="group relative p-8 rounded-3xl bg-blue-900/20 border border-blue-800/30 hover:border-blue-500/50 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-600/10 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <service.icon size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors">{service.title}</h3>
              <p className="text-blue-400 text-sm leading-relaxed">{service.description}</p>
              <div className="mt-6 flex items-center gap-2 text-accent text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <span>Learn more</span>
                <span>&rarr;</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
