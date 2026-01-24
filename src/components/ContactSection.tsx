import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Send, MapPin } from 'lucide-react';

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data
    const mailtoLink = `mailto:codewithrafsun@gmail.com?subject=Contact from ${formState.name}&body=${formState.message}%0A%0AFrom: ${formState.email}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="section-padding relative bg-muted/20">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <div className="mb-12 text-center">
            <span className="font-mono text-sm text-primary mb-2 block">// Contact</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Get In Touch</h2>
            <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
              Open to learning, collaboration, and future opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-start gap-4"
              >
                <div className="p-3 rounded-lg bg-card border border-border">
                  <Mail size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">Email</h3>
                  <a
                    href="mailto:codewithrafsun@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors font-mono text-sm"
                  >
                    codewithrafsun@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-start gap-4"
              >
                <div className="p-3 rounded-lg bg-card border border-border">
                  <MapPin size={20} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">Location</h3>
                  <p className="text-muted-foreground text-sm">
                    Gazipur, Dhaka, Bangladesh
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="pt-6"
              >
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Whether you have a project idea, want to collaborate, or just want to say hello — 
                  I'd love to hear from you. I typically respond within 24-48 hours.
                </p>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
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
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:ring-1 focus:ring-primary text-foreground placeholder:text-muted-foreground transition-colors outline-none"
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
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:ring-1 focus:ring-primary text-foreground placeholder:text-muted-foreground transition-colors outline-none"
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
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:ring-1 focus:ring-primary text-foreground placeholder:text-muted-foreground transition-colors outline-none resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20"
              >
                Send Message
                <Send size={18} />
              </button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
