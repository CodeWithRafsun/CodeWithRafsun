import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Terminal, Layers, Bot, Wrench, Globe, Cpu } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  url: string;
  isGithub: boolean;
  icon: React.ElementType;
  tags: string[];
}

const projects: Project[] = [
  {
    title: 'Termux Tutorial',
    description: 'Educational platform focused on Termux and developer learning.',
    url: 'https://termux-tutorial-by-mahedi-hasan-raf.vercel.app',
    isGithub: false,
    icon: Terminal,
    tags: ['Education', 'Web App'],
  },
  {
    title: 'Tools-Com',
    description: 'Web-based utility and developer tools platform.',
    url: 'https://tools-com.vercel.app',
    isGithub: false,
    icon: Wrench,
    tags: ['Utilities', 'Developer Tools'],
  },
  {
    title: 'LWMHR ChatBot CLI',
    description: 'CLI-based chatbot project for interactive learning.',
    url: 'https://github.com/CodeWithRafsun/lwmhrChatBot-cli',
    isGithub: true,
    icon: Bot,
    tags: ['CLI', 'Chatbot'],
  },
  {
    title: 'TermPassX',
    description: 'CLI-based security and utility tool.',
    url: 'https://github.com/CodeWithRafsun/TermPassX',
    isGithub: true,
    icon: Layers,
    tags: ['Security', 'CLI Tool'],
  },
  {
    title: 'mahedihasanrafsun.info',
    description: 'Personal web-based portfolio and information project.',
    url: 'https://github.com/CodeWithRafsun/mahedihasanrafsun.info.git',
    isGithub: true,
    icon: Globe,
    tags: ['Portfolio', 'Web'],
  },
  {
    title: 'AI Powered Project',
    description: 'AI-powered web application built using modern AI tools.',
    url: 'https://codewithrafsun.lovable.app',
    isGithub: false,
    icon: Cpu,
    tags: ['AI', 'Lovable'],
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="section-padding relative">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="mb-12">
            <span className="font-mono text-sm text-primary mb-2 block">// Projects</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Selected Work</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl">
              A collection of tools, platforms, and CLI utilities I've built.
            </p>
          </div>

          {/* Projects Grid - Dashboard Style */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {projects.map((project, index) => (
              <motion.a
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 card-glow"
              >
                {/* Icon & Title Row */}
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2.5 rounded-lg bg-muted border border-border group-hover:border-primary/30 transition-colors">
                    <project.icon size={20} className="text-primary" />
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    {project.isGithub ? (
                      <Github size={18} className="text-muted-foreground" />
                    ) : (
                      <ExternalLink size={18} className="text-muted-foreground" />
                    )}
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2 py-1 rounded bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
