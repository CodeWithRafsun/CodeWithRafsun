import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Layers, Rocket } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  items: string[];
  accentColor: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Core Skills',
    icon: Code,
    items: ['Programming', 'Web Development', 'Prompt Engineering', 'Cybersecurity Awareness'],
    accentColor: 'primary',
  },
  {
    title: 'Platforms & Tools',
    icon: Layers,
    items: ['Supabase', 'Vercel', 'GitHub', 'Lovable', 'CLI-based Tooling'],
    accentColor: 'secondary',
  },
  {
    title: 'Focus Areas',
    icon: Rocket,
    items: ['AI-powered Applications', 'Automation Systems', 'Developer Productivity Tools', 'Research & Learning'],
    accentColor: 'accent',
  },
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(hsl(220 90% 60%) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Gradient orbs */}
      <motion.div 
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[150px] opacity-20"
        style={{ background: 'hsl(320 80% 55% / 0.3)' }}
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="section-container relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="mb-16 text-center">
            <motion.span 
              className="inline-flex items-center gap-2 font-mono text-sm text-primary mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              <Code size={14} />
              // Skills
            </motion.span>
            <h2 className="text-3xl md:text-5xl font-bold">
              <span className="text-foreground">Expertise & </span>
              <span className="text-gradient-primary">Tools</span>
            </h2>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: categoryIndex * 0.15 }}
                className="group relative bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-500 hover-glow card-glow"
              >
                {/* Gradient top border */}
                <div className="absolute top-0 left-4 right-4 h-px bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
                  <motion.div 
                    className={`p-2.5 rounded-xl bg-${category.accentColor}/10 border border-${category.accentColor}/20`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <category.icon size={20} className={`text-${category.accentColor}`} />
                  </motion.div>
                  <h3 className="font-mono text-sm text-foreground font-medium">
                    {category.title}
                  </h3>
                </div>
                
                {/* Skills list */}
                <ul className="space-y-3">
                  {category.items.map((skill, skillIndex) => (
                    <motion.li
                      key={skill}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: categoryIndex * 0.15 + skillIndex * 0.05 }}
                      className="group/item flex items-center gap-3 text-muted-foreground hover:text-foreground transition-all duration-300 cursor-default"
                    >
                      <motion.span 
                        className="w-2 h-2 rounded-full bg-gradient-primary"
                        whileHover={{ scale: 1.5 }}
                      />
                      <span className="text-sm group-hover/item:translate-x-1 transition-transform duration-300">{skill}</span>
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
