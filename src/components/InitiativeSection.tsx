import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Lightbulb, Code, Shield, HelpCircle, Sparkles, GraduationCap, ArrowRight } from 'lucide-react';

const focusAreas = [
  { icon: Sparkles, label: 'AI-powered Tools Exploration', color: 'text-primary' },
  { icon: Code, label: 'Development Tips & Tricks', color: 'text-secondary' },
  { icon: Shield, label: 'Cybersecurity Awareness', color: 'text-accent' },
  { icon: HelpCircle, label: 'Problem-solving Help', color: 'text-primary' },
  { icon: Lightbulb, label: 'Motivational Learning', color: 'text-secondary' },
];

export const InitiativeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding relative overflow-hidden">
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
              <p className="text-muted-foreground mb-10 max-w-2xl text-lg leading-relaxed">
                An educational initiative focused on sharing knowledge, exploring AI-powered tools, 
                and helping others on their development journey. Not a hobby project — a{' '}
                <span className="text-primary font-medium">growing educational platform</span>.
              </p>

              {/* Focus Areas */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
                      <area.icon size={18} className={area.color} />
                    </div>
                    <span className="text-sm text-foreground font-medium">{area.label}</span>
                    <ArrowRight size={14} className="text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
