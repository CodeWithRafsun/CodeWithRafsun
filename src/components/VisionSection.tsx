import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Rocket, Brain } from 'lucide-react';

export const VisionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding relative bg-muted/20">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Section Header */}
          <div className="mb-12">
            <span className="font-mono text-sm text-primary mb-2 block">// Vision</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Long-term Goals</h2>
          </div>

          {/* Vision Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card rounded-xl p-8 border border-border text-left"
            >
              <div className="p-3 rounded-lg bg-muted w-fit mb-4">
                <Target size={24} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Current Focus</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-primary" />
                  AI-powered tools development
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-primary" />
                  Automation systems
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-primary" />
                  Machine Learning foundations
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-card rounded-xl p-8 border border-primary/30 text-left relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
              <div className="relative">
                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                  <Rocket size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Long-term Goal</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Become a professional <span className="text-primary font-medium">Machine Learning developer</span> and{' '}
                  <span className="text-accent font-medium">AI automation master</span>, building impactful 
                  solutions that create lasting value.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {['Discipline', 'Consistency', 'Skill-first Mindset'].map((value) => (
              <span
                key={value}
                className="px-4 py-2 rounded-full border border-border text-sm text-muted-foreground"
              >
                {value}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
