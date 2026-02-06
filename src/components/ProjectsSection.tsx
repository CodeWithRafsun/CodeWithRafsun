import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, Terminal, Layers, Bot, Wrench, Globe, Cpu, ChevronLeft, ChevronRight } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  url: string;
  isGithub: boolean;
  icon: React.ElementType;
  tags: string[];
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: 'Termux Tutorial',
    description: 'Educational platform focused on Termux and developer learning with comprehensive guides.',
    url: 'https://termux-tutorial-by-mahedi-hasan-raf.vercel.app',
    isGithub: false,
    icon: Terminal,
    tags: ['Education', 'Web App', 'React'],
    featured: true,
  },
  {
    title: 'Tools-Com',
    description: 'Web-based utility and developer tools platform for everyday productivity.',
    url: 'https://tools-com.vercel.app',
    isGithub: false,
    icon: Wrench,
    tags: ['Utilities', 'Developer Tools', 'Web'],
    featured: true,
  },
  {
    title: 'LWMHR ChatBot CLI',
    description: 'CLI-based chatbot project for interactive learning and automation.',
    url: 'https://github.com/CodeWithRafsun/lwmhrChatBot-cli',
    isGithub: true,
    icon: Bot,
    tags: ['CLI', 'Chatbot', 'Node.js'],
  },
  {
    title: 'TermPassX',
    description: 'CLI-based security and utility tool for terminal enthusiasts.',
    url: 'https://github.com/CodeWithRafsun/TermPassX',
    isGithub: true,
    icon: Layers,
    tags: ['Security', 'CLI Tool', 'Bash'],
  },
  {
    title: 'mahedihasanrafsun.info',
    description: 'Personal web-based portfolio and information project.',
    url: 'https://github.com/CodeWithRafsun/mahedihasanrafsun.info.git',
    isGithub: true,
    icon: Globe,
    tags: ['Portfolio', 'Web', 'React'],
  },
  {
    title: 'AI Powered Project',
    description: 'AI-powered web application built using modern AI tools and automation.',
    url: 'https://codewithrafsun.lovable.app',
    isGithub: false,
    icon: Cpu,
    tags: ['AI', 'Lovable', 'Automation'],
    featured: true,
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentSlide, setCurrentSlide] = useState(0);
  const projectsPerSlide = 3;
  const totalSlides = Math.ceil(projects.length / projectsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const currentProjects = projects.slice(
    currentSlide * projectsPerSlide,
    (currentSlide + 1) * projectsPerSlide
  );

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background effects */}
      <motion.div 
        className="absolute top-1/2 right-0 w-[600px] h-[600px] rounded-full blur-[150px] opacity-15"
        style={{ background: 'linear-gradient(135deg, hsl(220 90% 60% / 0.4) 0%, hsl(320 80% 55% / 0.4) 100%)' }}
        animate={{ scale: [1, 1.1, 1], x: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="section-container relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <motion.span 
                className="inline-flex items-center gap-2 font-mono text-sm text-secondary mb-4 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
              >
                <Layers size={14} />
                // Projects
              </motion.span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                <span className="text-foreground">Featured </span>
                <span className="text-gradient-primary">Work</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl text-lg">
                A collection of tools, platforms, and CLI utilities I've built with passion.
              </p>
            </div>

            {/* Slider Navigation */}
            <div className="flex items-center gap-3">
              <button
                onClick={prevSlide}
                className="p-3 rounded-xl bg-card border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                aria-label="Previous projects"
              >
                <ChevronLeft size={20} className="text-foreground" />
              </button>
              <span className="text-sm text-muted-foreground font-mono">
                {currentSlide + 1} / {totalSlides}
              </span>
              <button
                onClick={nextSlide}
                className="p-3 rounded-xl bg-card border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                aria-label="Next projects"
              >
                <ChevronRight size={20} className="text-foreground" />
              </button>
            </div>
          </div>

          {/* Projects Grid with Slide Animation */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {currentProjects.map((project, index) => (
                <motion.a
                  key={project.title}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`group relative bg-card rounded-2xl p-6 border transition-all duration-500 hover-glow card-glow overflow-hidden ${
                    project.featured 
                      ? 'border-primary/30 hover:border-primary/50' 
                      : 'border-border hover:border-secondary/50'
                  }`}
                  whileHover={{ y: -5 }}
                >
                  {/* Featured badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="px-2 py-1 text-xs font-mono rounded-full bg-gradient-primary text-primary-foreground">
                        Featured
                      </span>
                    </div>
                  )}
                  
                  {/* Gradient line on hover */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Icon & Title Row */}
                  <div className="flex items-start justify-between mb-4">
                    <motion.div 
                      className="p-3 rounded-xl bg-muted border border-border group-hover:border-primary/30 group-hover:bg-gradient-glow transition-all duration-300"
                      whileHover={{ rotate: 5, scale: 1.05 }}
                    >
                      <project.icon size={22} className="text-primary" />
                    </motion.div>
                    <motion.div 
                      className="opacity-0 group-hover:opacity-100 transition-all duration-300 p-2 rounded-lg bg-muted"
                      whileHover={{ scale: 1.1 }}
                    >
                      {project.isGithub ? (
                        <Github size={16} className="text-muted-foreground" />
                      ) : (
                        <ExternalLink size={16} className="text-muted-foreground" />
                      )}
                    </motion.div>
                  </div>

                  {/* Content */}
                  <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-gradient-primary transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-5 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono px-3 py-1.5 rounded-full bg-muted text-muted-foreground border border-border group-hover:border-primary/20 group-hover:text-foreground transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'w-8 bg-gradient-primary' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
