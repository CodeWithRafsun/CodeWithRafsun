import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Send, MapPin, MessageSquare, Sparkles } from 'lucide-react';

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:codewithrafsun@gmail.com?subject=Contact from ${formState.name}&body=${formState.message}%0A%0AFrom: ${formState.email}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[200px] opacity-20"
        style={{ background: 'linear-gradient(135deg, hsl(220 90% 60% / 0.3) 0%, hsl(320 80% 55% / 0.3) 100%)' }}
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      
      <div className="section-container relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          {/* Section Header */}
          <div className="mb-16 text-center">
            <motion.span 
              className="inline-flex items-center gap-2 font-mono text-sm text-primary mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              <MessageSquare size={14} />
              // Contact
            </motion.span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-foreground">Get In </span>
              <span className="text-gradient-primary">Touch</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-lg mx-auto">
              Open to learning, collaboration, and future opportunities.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover-glow"
                whileHover={{ x: 5 }}
              >
                <div className="flex items-start gap-4">
                  <motion.div 
                    className="p-3 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-gradient-primary transition-all duration-300"
                    whileHover={{ rotate: 5 }}
                  >
                    <Mail size={22} className="text-primary group-hover:text-primary-foreground transition-colors" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <a
                      href="mailto:codewithrafsun@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors font-mono text-sm"
                    >
                      codewithrafsun@gmail.com
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-secondary/50 transition-all duration-300 hover-glow"
                whileHover={{ x: 5 }}
              >
                <div className="flex items-start gap-4">
                  <motion.div 
                    className="p-3 rounded-xl bg-secondary/10 border border-secondary/20 group-hover:bg-gradient-primary transition-all duration-300"
                    whileHover={{ rotate: -5 }}
                  >
                    <MapPin size={22} className="text-secondary group-hover:text-primary-foreground transition-colors" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Location</h3>
                    <p className="text-muted-foreground text-sm">
                      Gazipur, Dhaka, Bangladesh
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="p-6 rounded-2xl bg-gradient-glow border border-border"
              >
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Whether you have a project idea, want to collaborate, or just want to say hello — 
                  I'd love to hear from you. I typically respond within{' '}
                  <span className="text-primary font-medium">24-48 hours</span>.
                </p>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              onSubmit={handleSubmit}
              className="lg:col-span-3 p-8 rounded-3xl bg-card border border-border hover-glow"
            >
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    required
                    className="w-full px-5 py-3.5 rounded-xl bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-foreground placeholder:text-muted-foreground transition-all duration-300 outline-none"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    required
                    className="w-full px-5 py-3.5 rounded-xl bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-foreground placeholder:text-muted-foreground transition-all duration-300 outline-none"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    required
                    rows={5}
                    className="w-full px-5 py-3.5 rounded-xl bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-foreground placeholder:text-muted-foreground transition-all duration-300 outline-none resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-gradient-primary text-primary-foreground rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                >
                  <Sparkles size={18} className={isHovered ? 'animate-pulse' : ''} />
                  Send Message
                  <Send size={18} className={isHovered ? 'translate-x-1' : ''} style={{ transition: 'transform 0.3s' }} />
                </motion.button>
              </div>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
