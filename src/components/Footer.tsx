import { motion } from 'framer-motion';
import { Zap, MapPin, Mail, Phone, ArrowUpRight, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

const footerLinks = {
  Services: [
    'Brand Identity',
    'UI / UX Design',
    'Motion Design',
    'Editorial Design',
    'Web Design',
    'Creative Direction',
  ],
  Company: ['About Us', 'Our Process', 'Case Studies', 'Awards', 'Careers', 'Press'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Accessibility'],
};

const socials = [
  { icon: Instagram, label: 'Instagram' },
  { icon: Twitter, label: 'Twitter' },
  { icon: Linkedin, label: 'LinkedIn' },
  { icon: Youtube, label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="relative bg-blue-950 border-t border-blue-800/30 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="absolute top-10 left-1/4 w-80 h-80 bg-blue-800/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-accent flex items-center justify-center shadow-lg shadow-blue-500/30">
                <Zap size={20} className="text-white" fill="white" />
              </div>
              <span className="font-bold text-2xl tracking-tight text-white">instagram</span>
            </div>
            <p className="text-blue-400 text-sm leading-relaxed mb-6 max-w-xs">
              Premium design studio located at the iconic HMS Belfast on The Queen&apos;s Walk, London.
              Crafting extraordinary visual experiences since 2012.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm text-blue-400">
                <MapPin size={14} className="text-accent mt-0.5 flex-shrink-0" />
                <span>HMS Belfast, The Queen&apos;s Walk, Bermondsey Village, London SE1 2JH</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-blue-400">
                <Mail size={14} className="text-accent" />
                <span>hello@instagram-design.co.uk</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-blue-400">
                <Phone size={14} className="text-accent" />
                <span>+44 (0)20 7000 0000</span>
              </div>
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-blue-400 hover:text-blue-200 text-sm transition-colors duration-200 flex items-center gap-1 group"
                    >
                      <span>{link}</span>
                      <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-blue-800/30">
          <div className="text-blue-500 text-sm">
            &copy; {new Date().getFullYear()} Instagram Design Studio. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <motion.a
                key={social.label}
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
                className="w-9 h-9 rounded-xl bg-blue-900/50 border border-blue-700/40 hover:border-blue-500/60 hover:bg-blue-800/60 flex items-center justify-center text-blue-400 hover:text-blue-200 transition-colors duration-200"
              >
                <social.icon size={16} />
              </motion.a>
            ))}
          </div>

          <div className="text-blue-600 text-xs">
            Designed with &hearts; in London
          </div>
        </div>
      </div>
    </footer>
  );
}
