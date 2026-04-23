import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Users, Globe, Heart } from 'lucide-react';

const pillars = [
  { icon: Award, title: 'Excellence', description: 'We pursue perfection in every pixel, every curve, every composition.' },
  { icon: Users, title: 'Collaboration', description: 'We work alongside you as true partners, not just a vendor.' },
  { icon: Globe, title: 'Global Vision', description: 'World-class design sensibility with deep local London roots.' },
  { icon: Heart, title: 'Passion', description: 'Design isn&apos;t just what we do &mdash; it&apos;s who we are.' },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950 via-blue-900/30 to-blue-950" />
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl" />
      <div className="absolute left-0 bottom-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-4">Our Story</span>
            <h2
              className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Where History<br />
              <span className="bg-gradient-to-r from-blue-400 to-accent bg-clip-text text-transparent">
                Meets Innovation
              </span>
            </h2>
            <div className="space-y-5 text-blue-300 text-base leading-relaxed">
              <p>
                Anchored at HMS Belfast on The Queen&apos;s Walk in the heart of London, Instagram Design Studio draws
                inspiration from the timeless resolve of this historic warship. Just as HMS Belfast has weathered
                the tides of time, our designs are built to endure.
              </p>
              <p>
                Founded with the belief that design is the most powerful form of communication, we blend
                artistic vision with strategic thinking to create work that doesn&apos;t just look beautiful
                &mdash; it performs, converts, and inspires.
              </p>
              <p>
                From our iconic riverside studio, we partner with brands across London and around the globe,
                delivering design solutions that define categories and set new standards of excellence.
              </p>
            </div>
            <div className="mt-10">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-accent text-white font-semibold transition-all duration-300 shadow-lg shadow-blue-600/30 hover:-translate-y-0.5"
              >
                Work With Us
                <span>&rarr;</span>
              </a>
            </div>
          </motion.div>

          {/* Right: Pillars grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * i }}
                className="p-6 rounded-2xl bg-blue-900/30 border border-blue-700/30 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md shadow-blue-600/30">
                  <pillar.icon size={20} className="text-white" />
                </div>
                <h3 className="text-white font-bold text-base mb-2">{pillar.title}</h3>
                <p
                  className="text-blue-400 text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: pillar.description }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline strip */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-24 p-8 rounded-3xl bg-gradient-to-r from-blue-900/40 via-blue-800/20 to-blue-900/40 border border-blue-700/30 backdrop-blur-sm"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { year: '2012', milestone: 'Founded in London' },
              { year: '2016', milestone: 'First International Client' },
              { year: '2019', milestone: 'D&amp;AD Award Winner' },
              { year: '2024', milestone: 'Global Design Leader' },
            ].map((item) => (
              <div key={item.year}>
                <div
                  className="text-3xl font-black text-accent mb-2"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                  dangerouslySetInnerHTML={{ __html: item.year }}
                />
                <div
                  className="text-blue-300 text-sm font-medium"
                  dangerouslySetInnerHTML={{ __html: item.milestone }}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
