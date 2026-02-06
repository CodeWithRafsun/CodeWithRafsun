import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Lightbulb, Code, Shield, HelpCircle, Sparkles, GraduationCap, ArrowRight, Mail } from 'lucide-react';

const focusAreas = [
  { icon: Sparkles, label: 'Teaching AI Tools', description: 'Practical exploration & usage' },
  { icon: Code, label: 'Development Tips', description: 'Tricks & best practices' },
  { icon: Shield, label: 'Cybersecurity Awareness', description: 'Security fundamentals' },
  { icon: Lightbulb, label: 'Practical Learning', description: 'Hands-on approach' },
];

export const InitiativeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="organization" className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-glow opacity-50" />
      
      <div className="section-container relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <motion.div 
            className="relative bg-card rounded-3xl p-8 md:p-12 border border-border overflow-hidden hover-glow"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated background accents */}
            <motion.div 
              className="absolute top-0 right-0 w-80 h-80 rounded-full blur-[100px] opacity-30"
              style={{ background: 'hsl(220 90% 60% / 0.4)' }}
              animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute bottom-0 left-0 w-60 h-60 rounded-full blur-[80px] opacity-20"
              style={{ background: 'hsl(320 80% 55% / 0.4)' }}
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
            
            <div className="relative z-10">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center gap-6 mb-10">
                <motion.div 
                  className="p-4 rounded-2xl bg-gradient-primary w-fit"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <GraduationCap size={32} className="text-primary-foreground" />
                </motion.div>
                <div>
                  <span className="font-mono text-xs text-secondary mb-2 block uppercase tracking-wider">
                    Educational Initiative
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                    LWMHR
                  </h2>
                  <p className="text-gradient-primary font-semibold text-lg">Learn With Mahedi Hasan Rafsun</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-8 max-w-2xl text-lg leading-relaxed">
                An educational and motivational initiative dedicated to sharing knowledge, 
                exploring AI-powered tools, and helping others on their development journey.
              </p>

              {/* Mission */}
              <div className="p-5 rounded-xl bg-muted/50 border border-border mb-10">
                <h3 className="font-semibold text-foreground mb-2">Our Mission</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  To provide practical, accessible education in AI tools, development best practices, 
                  and cybersecurity awareness. We believe in learning by doing and sharing knowledge openly.
                </p>
              </div>

              {/* Focus Areas */}
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {focusAreas.map((area, index) => (
                  <motion.div
                    key={area.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="group flex items-center gap-4 p-4 rounded-xl bg-muted/50 border border-border hover:border-primary/30 transition-all duration-300 cursor-default"
                    whileHover={{ x: 5 }}
                  >
                    <div className="p-2.5 rounded-xl bg-card border border-border group-hover:bg-gradient-glow transition-colors">
                      <area.icon size={18} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-foreground">{area.label}</p>
                      <p className="text-xs text-muted-foreground">{area.description}</p>
                    </div>
                    <ArrowRight size={14} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                ))}
              </div>

              {/* Contact / Collaboration */}
              <div className="flex flex-col sm:flex-row items-center gap-4 p-5 rounded-xl bg-gradient-glow border border-border">
                <Mail size={20} className="text-primary" />
                <p className="text-sm text-foreground text-center sm:text-left">
                  Interested in collaboration or have questions?{' '}
                  <a href="#contact" className="text-primary font-medium hover:underline">
                    Get in touch
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
