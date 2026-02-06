import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award, BookOpen, Sparkles, Code, Brain, Shield } from 'lucide-react';

interface EducationItem {
  level: string;
  school: string;
  result?: string;
  status?: string;
  current?: boolean;
}

const education: EducationItem[] = [
  {
    level: 'SSC',
    school: 'Bormi Union High School, Bangladesh',
    result: 'Completed',
  },
  {
    level: 'Diploma / Engineering Path',
    school: 'Currently Pursuing',
    status: 'Running / Planned',
    current: true,
  },
];

const selfTaughtAreas = [
  { icon: Code, label: 'Web Development', description: 'Frontend & Backend' },
  { icon: Brain, label: 'AI & Automation', description: 'Tools & Integration' },
  { icon: Shield, label: 'Cybersecurity', description: 'Fundamentals & Awareness' },
];

export const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="section-padding relative overflow-hidden">
      {/* Background effect */}
      <motion.div 
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[150px] opacity-15"
        style={{ background: 'hsl(220 90% 60% / 0.3)' }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
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
              className="inline-flex items-center gap-2 font-mono text-sm text-secondary mb-4 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              <BookOpen size={14} />
              // Education
            </motion.span>
            <h2 className="text-3xl md:text-5xl font-bold">
              <span className="text-foreground">Academic </span>
              <span className="text-gradient-primary">Journey</span>
            </h2>
          </div>

          {/* Formal Education */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {education.map((item, index) => (
              <motion.div
                key={item.level}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className={`group bg-card rounded-2xl p-6 border transition-all duration-500 hover-glow ${
                  item.current 
                    ? 'border-secondary/50 hover:border-secondary' 
                    : 'border-border hover:border-primary/50'
                }`}
              >
                {item.current && (
                  <motion.div 
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-primary text-primary-foreground text-xs font-mono mb-4"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Sparkles size={12} />
                    Currently Pursuing
                  </motion.div>
                )}
                
                <div className="flex items-start gap-4 mb-4">
                  <motion.div 
                    className={`p-3 rounded-xl ${
                      item.current 
                        ? 'bg-gradient-primary' 
                        : 'bg-muted border border-border group-hover:bg-gradient-glow'
                    } transition-all duration-300`}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    {item.current ? (
                      <GraduationCap size={22} className="text-primary-foreground" />
                    ) : (
                      <Award size={22} className="text-primary" />
                    )}
                  </motion.div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground">{item.level}</h3>
                    <p className="text-muted-foreground text-sm">{item.school}</p>
                  </div>
                </div>
                
                {item.result && (
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-muted/50 border border-border">
                    <span className="text-sm font-mono text-primary font-semibold">{item.result}</span>
                  </div>
                )}
                {item.status && (
                  <p className="text-sm text-secondary font-medium">{item.status}</p>
                )}
              </motion.div>
            ))}
          </div>

          {/* Self-Taught Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-card rounded-2xl p-8 border border-border hover-glow"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20">
                <BookOpen size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-foreground">Self-Taught Learning</h3>
                <p className="text-sm text-muted-foreground">Open-source & online platforms</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {selfTaughtAreas.map((area, index) => (
                <motion.div
                  key={area.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="group flex items-center gap-4 p-4 rounded-xl bg-muted/50 border border-border hover:border-primary/30 transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-2.5 rounded-xl bg-card border border-border group-hover:bg-gradient-glow transition-colors">
                    <area.icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{area.label}</p>
                    <p className="text-xs text-muted-foreground">{area.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
