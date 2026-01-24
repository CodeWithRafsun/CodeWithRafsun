import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Lightbulb, Code, Shield, HelpCircle, Sparkles } from 'lucide-react';

const focusAreas = [
  { icon: Sparkles, label: 'AI-powered Tools Exploration' },
  { icon: Code, label: 'Development Tips & Tricks' },
  { icon: Shield, label: 'Cybersecurity Awareness' },
  { icon: HelpCircle, label: 'Problem-solving Help' },
  { icon: Lightbulb, label: 'Motivational Learning' },
];

export const InitiativeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding relative bg-muted/20">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-card rounded-2xl p-8 md:p-12 border border-border relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            
            <div className="relative">
              {/* Header */}
              <div className="mb-8">
                <span className="font-mono text-xs text-accent mb-2 block uppercase tracking-wider">
                  Initiative
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  LWMHR
                </h2>
                <p className="text-primary font-medium">Learn With Mahedi Hasan Rafsun</p>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-8 max-w-2xl">
                An educational initiative focused on sharing knowledge, exploring AI-powered tools, 
                and helping others on their development journey. Not a hobby project — a growing 
                educational platform.
              </p>

              {/* Focus Areas */}
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {focusAreas.map((area, index) => (
                  <motion.div
                    key={area.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 border border-border/50"
                  >
                    <area.icon size={16} className="text-accent flex-shrink-0" />
                    <span className="text-sm text-foreground">{area.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
