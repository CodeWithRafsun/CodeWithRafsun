import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface SkillCategory {
  title: string;
  items: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Core Skills',
    items: ['Programming', 'Web Development', 'Prompt Engineering', 'Cybersecurity Awareness'],
  },
  {
    title: 'Platforms & Tools',
    items: ['Supabase', 'Vercel', 'GitHub', 'Lovable', 'CLI-based Tooling'],
  },
  {
    title: 'Focus Areas',
    items: ['AI-powered Applications', 'Automation Systems', 'Developer Productivity Tools', 'Research & Learning'],
  },
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="section-padding relative bg-muted/20">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="mb-12 text-center">
            <span className="font-mono text-sm text-primary mb-2 block">// Skills</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Expertise & Tools</h2>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="bg-card rounded-xl p-6 border border-border card-glow"
              >
                <h3 className="font-mono text-sm text-accent mb-6 pb-3 border-b border-border">
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.items.map((skill, skillIndex) => (
                    <motion.li
                      key={skill}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                      <span className="text-sm">{skill}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
