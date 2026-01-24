import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award, BookOpen, Sparkles } from 'lucide-react';

interface EducationItem {
  level: string;
  school: string;
  result?: string;
  status?: string;
  current?: boolean;
}

const education: EducationItem[] = [
  {
    level: 'Primary School',
    school: 'Bormi Union Government Primary School',
    result: 'PSC Result: 4.89 / 5.00',
  },
  {
    level: 'High School',
    school: 'Bormi Union High School',
    result: 'SSC Result: 4.11 / 5.00',
  },
  {
    level: 'College',
    school: 'Sreepur Government College',
    status: '1st Year — Science Department',
    current: true,
  },
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
          className="max-w-4xl mx-auto"
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

          {/* Timeline */}
          <div className="relative">
            {/* Animated Vertical Line */}
            <motion.div 
              className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 md:-translate-x-px"
              style={{ background: 'linear-gradient(180deg, hsl(220 90% 60%) 0%, hsl(320 80% 55%) 100%)' }}
              initial={{ height: 0 }}
              animate={isInView ? { height: '100%' } : {}}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />

            <div className="space-y-10">
              {education.map((item, index) => (
                <motion.div
                  key={item.level}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                  className={`relative flex items-start gap-6 md:gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <motion.div 
                    className="absolute left-4 md:left-1/2 -translate-x-1.5 md:-translate-x-1.5 mt-6"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.2, type: "spring" }}
                  >
                    <div className="w-4 h-4 rounded-full bg-gradient-primary animate-pulse-glow" />
                  </motion.div>

                  {/* Content Card */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <motion.div 
                      className={`group bg-card rounded-2xl p-6 border transition-all duration-500 hover-glow ${
                        item.current 
                          ? 'border-secondary/50 hover:border-secondary' 
                          : 'border-border hover:border-primary/50'
                      }`}
                      whileHover={{ y: -5, scale: 1.02 }}
                    >
                      {/* Current badge */}
                      {item.current && (
                        <motion.div 
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-primary text-primary-foreground text-xs font-mono mb-4"
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <Sparkles size={12} />
                          Currently Studying
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
                          <span className="text-sm font-mono text-gradient-primary font-semibold">{item.result}</span>
                        </div>
                      )}
                      {item.status && (
                        <p className="text-sm text-secondary font-medium">{item.status}</p>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
