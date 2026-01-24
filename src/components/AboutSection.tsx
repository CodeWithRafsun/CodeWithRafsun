import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Code2, Brain, Shield, Languages, Zap } from 'lucide-react';

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const highlights = [
    { icon: Code2, label: 'Programming & Web Dev', color: 'text-primary' },
    { icon: Brain, label: 'AI & Automation', color: 'text-secondary' },
    { icon: Shield, label: 'Cybersecurity Awareness', color: 'text-accent' },
    { icon: Languages, label: 'Bangla & English', color: 'text-primary' },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <motion.div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[150px] opacity-20"
        style={{ background: 'linear-gradient(135deg, hsl(220 90% 60% / 0.3) 0%, hsl(320 80% 55% / 0.3) 100%)' }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="section-container relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          {/* Section Header */}
          <motion.div 
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 font-mono text-sm text-secondary mb-4">
              <Zap size={14} />
              // About Me
            </span>
            <h2 className="text-3xl md:text-5xl font-bold">
              <span className="text-foreground">Who </span>
              <span className="text-gradient-primary">I Am</span>
            </h2>
          </motion.div>

          {/* Content */}
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            <motion.div 
              className="lg:col-span-3 space-y-6"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="p-6 rounded-2xl bg-card border border-border hover-glow">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  I'm a student and self-taught developer from{' '}
                  <span className="inline-flex items-center gap-1 text-foreground font-medium">
                    <MapPin size={16} className="text-secondary" />
                    Bangladesh
                  </span>, currently pursuing my studies in Science while building real-world projects.
                </p>
              </div>
              
              <div className="p-6 rounded-2xl bg-card border border-border hover-glow">
                <p className="text-muted-foreground leading-relaxed">
                  My journey in tech started with curiosity and has evolved into a deep interest in{' '}
                  <span className="text-primary font-medium">AI-powered tools</span>, 
                  automation systems, and emerging technologies. I'm skilled in programming, web development, 
                  prompt engineering, and have a strong awareness of cybersecurity practices.
                </p>
              </div>
              
              <div className="p-6 rounded-2xl bg-card border border-border hover-glow">
                <p className="text-muted-foreground leading-relaxed">
                  I believe in <span className="text-secondary font-medium">discipline</span>, 
                  consistency, and a growth-driven mindset. I'm not positioning myself 
                  as "perfect" — instead, I'm committed to learning continuously and building projects that 
                  create <span className="text-accent font-medium">long-term value</span>.
                </p>
              </div>

              <motion.blockquote 
                className="relative p-6 rounded-2xl overflow-hidden"
                style={{ background: 'linear-gradient(135deg, hsl(220 90% 60% / 0.1) 0%, hsl(320 80% 55% / 0.1) 100%)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-primary" />
                <p className="text-foreground/90 italic text-lg pl-4">
                  "Building today to become a serious AI and ML professional tomorrow."
                </p>
              </motion.blockquote>
            </motion.div>

            {/* Highlights */}
            <motion.div 
              className="lg:col-span-2 space-y-4"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="font-mono text-sm text-muted-foreground mb-6 flex items-center gap-2">
                <span className="w-8 h-px bg-gradient-primary" />
                Focus Areas
              </h3>
              
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="group flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover-glow cursor-default"
                >
                  <div className="p-3 rounded-xl bg-muted group-hover:bg-gradient-glow transition-colors">
                    <item.icon size={20} className={item.color} />
                  </div>
                  <span className="text-foreground font-medium">{item.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
