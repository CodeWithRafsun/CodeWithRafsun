import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Code2, Brain, Shield, Languages } from 'lucide-react';

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const highlights = [
    { icon: Code2, label: 'Programming & Web Dev' },
    { icon: Brain, label: 'AI & Automation' },
    { icon: Shield, label: 'Cybersecurity Awareness' },
    { icon: Languages, label: 'Bangla & English' },
  ];

  return (
    <section id="about" className="section-padding relative">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <div className="mb-12">
            <span className="font-mono text-sm text-primary mb-2 block">// About</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Who I Am</h2>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <div className="md:col-span-2 space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm a student and self-taught developer from{' '}
                <span className="text-foreground inline-flex items-center gap-1">
                  <MapPin size={16} className="text-primary" />
                  Bangladesh
                </span>, currently pursuing my studies in Science while building real-world projects.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                My journey in tech started with curiosity and has evolved into a deep interest in AI-powered tools, 
                automation systems, and emerging technologies. I'm skilled in programming, web development, 
                prompt engineering, and have a strong awareness of cybersecurity practices.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                I believe in discipline, consistency, and a growth-driven mindset. I'm not positioning myself 
                as "perfect" — instead, I'm committed to learning continuously and building projects that 
                create long-term value.
              </p>

              <div className="pt-4">
                <blockquote className="border-l-2 border-primary pl-4 text-foreground/80 italic">
                  "Building today to become a serious AI and ML professional tomorrow."
                </blockquote>
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-4">
              <h3 className="font-mono text-sm text-muted-foreground mb-4">Focus Areas</h3>
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 border border-border/50"
                >
                  <item.icon size={18} className="text-primary" />
                  <span className="text-sm text-foreground">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
