import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award } from 'lucide-react';

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
    <section id="education" className="section-padding relative">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          {/* Section Header */}
          <div className="mb-12 text-center">
            <span className="font-mono text-sm text-primary mb-2 block">// Education</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Academic Journey</h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            <div className="space-y-8">
              {education.map((item, index) => (
                <motion.div
                  key={item.level}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className={`relative flex items-start gap-6 md:gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary border-4 border-background -translate-x-1.5 md:-translate-x-1.5 mt-2" />

                  {/* Content Card */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className={`bg-card rounded-xl p-6 border border-border ${item.current ? 'border-primary/50' : ''}`}>
                      <div className="flex items-start gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-muted">
                          {item.current ? (
                            <GraduationCap size={18} className="text-primary" />
                          ) : (
                            <Award size={18} className="text-accent" />
                          )}
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{item.level}</h3>
                          {item.current && (
                            <span className="text-xs font-mono text-primary">Currently Studying</span>
                          )}
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm mb-2">{item.school}</p>
                      {item.result && (
                        <p className="text-sm font-mono text-accent">{item.result}</p>
                      )}
                      {item.status && (
                        <p className="text-sm text-muted-foreground">{item.status}</p>
                      )}
                    </div>
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
