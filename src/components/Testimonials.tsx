import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Alexandra Chen',
    role: 'CEO, Luminary Brands',
    avatar: 'AC',
    rating: 5,
    text: 'Working with Instagram Design Studio transformed our brand identity completely. Their attention to detail and creative vision exceeded every expectation we had. The team at HMS Belfast is truly world-class.',
    gradient: 'from-blue-600 to-blue-400',
  },
  {
    name: 'Marcus Webb',
    role: 'Founder, NovaTech',
    avatar: 'MW',
    rating: 5,
    text: 'I&apos;ve worked with design agencies across London and internationally &mdash; none compare to the level of craft and strategic thinking this team brings. Our product launch was a resounding success thanks to their work.',
    gradient: 'from-blue-500 to-accent',
  },
  {
    name: 'Sophia Laurent',
    role: 'CMO, Velvet Studios',
    avatar: 'SL',
    rating: 5,
    text: 'From brand identity to motion design, every deliverable was extraordinary. They didn&apos;t just meet the brief &mdash; they reinterpreted it in ways we hadn&apos;t imagined and the results speak for themselves.',
    gradient: 'from-accent to-blue-500',
  },
  {
    name: 'James Holloway',
    role: 'Director, Meridian Creative',
    avatar: 'JH',
    rating: 5,
    text: 'The collaborative process was seamless and enjoyable. They truly listened, challenged conventions, and produced a visual system that has become our greatest competitive advantage in the market.',
    gradient: 'from-blue-700 to-blue-400',
  },
  {
    name: 'Priya Sharma',
    role: 'Head of Brand, Elevate Co.',
    avatar: 'PS',
    rating: 5,
    text: 'Our new website and brand identity have generated incredible feedback from clients and peers alike. The team&apos;s mastery of visual storytelling is unparalleled. Highly recommended without reservation.',
    gradient: 'from-blue-500 to-blue-700',
  },
  {
    name: 'Oliver Kent',
    role: 'Creative Producer, Apex Films',
    avatar: 'OK',
    rating: 5,
    text: 'Exceptional work from start to finish. The motion design package they created for our film campaign generated over 2 million social impressions in the first week alone. Simply outstanding talent.',
    gradient: 'from-blue-400 to-blue-600',
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950 via-blue-900/20 to-blue-950" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-4">Social Proof</span>
          <h2
            className="text-5xl md:text-6xl font-black text-white mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Client Voices
          </h2>
          <p className="text-blue-300 text-lg max-w-xl mx-auto">
            Don&apos;t take our word for it. Here&apos;s what our clients say about working with us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative p-8 rounded-3xl bg-blue-900/25 border border-blue-800/30 hover:border-blue-500/40 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-600/10 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-600/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${t.gradient} flex items-center justify-center font-bold text-white text-sm shadow-lg`}>
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{t.name}</div>
                    <div className="text-blue-400 text-xs">{t.role}</div>
                  </div>
                </div>
                <Quote size={20} className="text-blue-600 opacity-60" />
              </div>

              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} size={14} className="text-amber-400 fill-amber-400" />
                ))}
              </div>

              <p
                className="text-blue-300 text-sm leading-relaxed"
                dangerouslySetInnerHTML={{ __html: t.text }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
