import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Rocket, Brain, Zap, TrendingUp } from 'lucide-react';

export const VisionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const values = [
    { label: 'Discipline', icon: Target },
    { label: 'Consistency', icon: TrendingUp },
    { label: 'Skill-first Mindset', icon: Brain },
  ];

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background effects */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[200px] opacity-15"
        style={{ background: 'linear-gradient(135deg, hsl(320 80% 55% / 0.4) 0%, hsl(220 90% 60% / 0.4) 100%)' }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
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
              className="inline-flex items-center gap-2 font-mono text-sm text-accent mb-4 px-4 py-2 rounded-full bg-accent/10 border border-accent/20"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              <Zap size={14} />
              // Vision
            </motion.span>
            <h2 className="text-3xl md:text-5xl font-bold">
              <span className="text-foreground">Long-term </span>
              <span className="text-gradient-primary">Goals</span>
            </h2>
          </div>

          {/* Vision Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30, rotateY: -5 }}
              animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group bg-card rounded-2xl p-8 border border-border text-left hover:border-primary/30 transition-all duration-500 hover-glow"
              whileHover={{ y: -5 }}
            >
              <motion.div 
                className="p-4 rounded-xl bg-primary/10 border border-primary/20 w-fit mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Target size={28} className="text-primary" />
              </motion.div>
              <h3 className="text-xl font-bold text-foreground mb-4">Current Focus</h3>
              <ul className="space-y-3 text-muted-foreground">
                {['AI-powered tools development', 'Automation systems', 'Machine Learning foundations'].map((item, i) => (
                  <motion.li 
                    key={item}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.1 }}
                  >
                    <span className="w-2 h-2 rounded-full bg-gradient-primary" />
                    <span className="text-sm">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30, rotateY: 5 }}
              animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group relative bg-card rounded-2xl p-8 border border-secondary/30 text-left overflow-hidden hover:border-secondary/50 transition-all duration-500"
              whileHover={{ y: -5 }}
              style={{ boxShadow: '0 0 60px hsl(320 80% 55% / 0.1)' }}
            >
              {/* Animated glow */}
              <motion.div 
                className="absolute top-0 right-0 w-40 h-40 rounded-full blur-[60px]"
                style={{ background: 'hsl(320 80% 55% / 0.2)' }}
                animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              
              <div className="relative z-10">
                <motion.div 
                  className="p-4 rounded-xl bg-gradient-primary w-fit mb-6"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Rocket size={28} className="text-primary-foreground" />
                </motion.div>
                <h3 className="text-xl font-bold text-foreground mb-4">Long-term Goal</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Become a professional{' '}
                  <span className="text-primary font-semibold">Machine Learning developer</span> and{' '}
                  <span className="text-secondary font-semibold">AI automation master</span>, building impactful 
                  solutions that create lasting value.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.label}
                className="group flex items-center gap-3 px-5 py-3 rounded-full border border-border bg-card hover:border-primary/30 transition-all duration-300 cursor-default"
                whileHover={{ scale: 1.05, y: -2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <value.icon size={16} className="text-primary" />
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {value.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
