import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

interface SubmitStatus {
  type: 'success' | 'error' | null;
  message: string;
}

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<SubmitStatus>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: '' });

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1800));

    if (form.name && form.email && form.message) {
      setStatus({ type: 'success', message: 'Thank you! We&apos;ll be in touch within 24 hours.' });
      setForm({ name: '', email: '', company: '', service: '', message: '' });
    } else {
      setStatus({ type: 'error', message: 'Please fill in all required fields.' });
    }

    setLoading(false);
  };

  const inputClass =
    'w-full px-4 py-3.5 rounded-xl bg-blue-900/30 border border-blue-700/40 text-white placeholder-blue-500 text-sm font-medium focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-200 hover:border-blue-600/60';

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950 via-blue-900/30 to-blue-950" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-700/5 rounded-full blur-3xl" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-4">Get In Touch</span>
          <h2
            className="text-5xl md:text-6xl font-black text-white mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Start Your Project
          </h2>
          <p className="text-blue-300 text-lg max-w-xl mx-auto">
            Ready to create something extraordinary? Let&apos;s talk about your vision and how we can bring it to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Let&apos;s Connect</h3>
              <p className="text-blue-300 leading-relaxed text-sm">
                Whether you have a clear brief or just a spark of an idea, we&apos;re here to help shape it into something remarkable. Our team responds to all inquiries within one business day.
              </p>
            </div>

            <div className="space-y-5">
              {[
                {
                  icon: MapPin,
                  label: 'Studio Address',
                  value: 'HMS Belfast, The Queen&apos;s Walk, Bermondsey Village, London SE1 2JH',
                },
                {
                  icon: Mail,
                  label: 'Email Us',
                  value: 'hello@instagram-design.co.uk',
                },
                {
                  icon: Phone,
                  label: 'Call Us',
                  value: '+44 (0)20 7000 0000',
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4 p-5 rounded-2xl bg-blue-900/20 border border-blue-800/30 hover:border-blue-600/40 transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                    <item.icon size={16} className="text-white" />
                  </div>
                  <div>
                    <div className="text-blue-400 text-xs font-semibold uppercase tracking-wider mb-1">{item.label}</div>
                    <div
                      className="text-blue-100 text-sm font-medium"
                      dangerouslySetInnerHTML={{ __html: item.value }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-800/30 to-blue-900/20 border border-blue-700/30">
              <div className="text-white font-semibold mb-2">Studio Hours</div>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between text-blue-300">
                  <span>Monday &mdash; Friday</span>
                  <span className="text-blue-100 font-medium">9:00 &mdash; 18:00</span>
                </div>
                <div className="flex justify-between text-blue-300">
                  <span>Saturday</span>
                  <span className="text-blue-100 font-medium">10:00 &mdash; 15:00</span>
                </div>
                <div className="flex justify-between text-blue-400">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-3xl bg-blue-900/25 border border-blue-800/30 backdrop-blur-sm"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-blue-300 text-xs font-semibold uppercase tracking-wider mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={inputClass}
                    required
                  />
                </div>
                <div>
                  <label className="block text-blue-300 text-xs font-semibold uppercase tracking-wider mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={inputClass}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-blue-300 text-xs font-semibold uppercase tracking-wider mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Your company"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-blue-300 text-xs font-semibold uppercase tracking-wider mb-2">Service</label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="" className="bg-blue-950">Select a service</option>
                    <option value="brand" className="bg-blue-950">Brand Identity</option>
                    <option value="ui" className="bg-blue-950">UI / UX Design</option>
                    <option value="motion" className="bg-blue-950">Motion Design</option>
                    <option value="editorial" className="bg-blue-950">Editorial Design</option>
                    <option value="web" className="bg-blue-950">Web Design</option>
                    <option value="creative" className="bg-blue-950">Creative Direction</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-blue-300 text-xs font-semibold uppercase tracking-wider mb-2">Your Message *</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project, goals, and timeline..."
                  rows={5}
                  className={`${inputClass} resize-none`}
                  required
                />
              </div>

              {status.type && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-center gap-3 p-4 rounded-xl mb-5 text-sm font-medium ${
                    status.type === 'success'
                      ? 'bg-green-500/10 border border-green-500/30 text-green-400'
                      : 'bg-red-500/10 border border-red-500/30 text-red-400'
                  }`}
                >
                  {status.type === 'success' ? <CheckCircle size={16} /> : <AlertCircle size={16} />}
                  <span dangerouslySetInnerHTML={{ __html: status.message }} />
                </motion.div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-accent text-white font-semibold text-base transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-blue-400/40 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
