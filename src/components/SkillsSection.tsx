import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Layers, Brain, MessageSquare, Globe, Sparkles } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  skills: Skill[];
  accentColor: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Technical Skills',
    icon: Code,
    skills: [
      { name: 'Web Development (Frontend & Backend)', level: 85 },
      { name: 'AI Tool Integration', level: 80 },
      { name: 'API Handling', level: 75 },
      { name: 'Supabase / Firebase', level: 80 },
      { name: 'Automation Systems', level: 75 },
      { name: 'Cybersecurity Fundamentals', level: 70 },
      { name: 'Linux (Kali, Ubuntu)', level: 75 },
      { name: 'Git & Version Control', level: 85 },
      { name: 'Prompt Engineering', level: 90 },
    ],
    accentColor: 'primary',
  },
  {
    title: 'Soft Skills',
    icon: Brain,
    skills: [
      { name: 'Problem Solving', level: 90 },
      { name: 'Analytical Thinking', level: 85 },
      { name: 'Self-Learning', level: 95 },
      { name: 'Research Ability', level: 85 },
      { name: 'Time Management', level: 80 },
      { name: 'Communication', level: 75 },
    ],
    accentColor: 'secondary',
  },
  {
    title: 'Language Skills',
    icon: Globe,
    skills: [
      { name: 'Bangla (Native)', level: 100 },
      { name: 'English (Professional)', level: 80 },
    ],
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
              <Sparkles size={14} />
              // Skills
            </motion.span>
            <h2 className="text-3xl md:text-5xl font-bold">
              <span className="text-foreground">Expertise & </span>
              <span className="text-gradient-primary">Abilities</span>
            </h2>
          </div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                  <h3 className="font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                
                {/* Skills list with progress */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: categoryIndex * 0.15 + skillIndex * 0.05 }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">{skill.name}</span>
                        <span className="text-xs font-mono text-primary">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: categoryIndex * 0.15 + skillIndex * 0.1, ease: "easeOut" }}
                          className="h-full bg-gradient-primary rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
