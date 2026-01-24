import { motion } from 'framer-motion';
import { Github, ArrowDown, Mail, Sparkles } from 'lucide-react';
import profileImage from '@/assets/profile.jpg';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <motion.div 
          className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full blur-[120px] opacity-40"
          style={{ background: 'linear-gradient(135deg, hsl(220 90% 60% / 0.4) 0%, hsl(280 75% 60% / 0.2) 100%)' }}
          animate={{ 
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] rounded-full blur-[120px] opacity-40"
          style={{ background: 'linear-gradient(135deg, hsl(320 80% 55% / 0.4) 0%, hsl(220 90% 60% / 0.2) 100%)' }}
          animate={{ 
            x: [0, -50, 0],
            y: [0, -30, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" 
          style={{ 
            backgroundImage: 'linear-gradient(hsl(220 90% 60%) 1px, transparent 1px), linear-gradient(90deg, hsl(220 90% 60%) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }} 
        />
      </div>

      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            className="relative"
          >
            <div className="relative w-52 h-52 md:w-64 md:h-64 lg:w-80 lg:h-80">
              {/* Animated ring */}
              <motion.div 
                className="absolute -inset-4 rounded-full"
                style={{ 
                  background: 'linear-gradient(135deg, hsl(220 90% 60%) 0%, hsl(320 80% 55%) 50%, hsl(280 75% 60%) 100%)',
                  padding: '3px'
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full rounded-full bg-background" />
              </motion.div>
              
              {/* Glow effect behind image */}
              <div className="absolute inset-0 rounded-full animate-pulse-glow" />
              
              <img
                src={profileImage}
                alt="Mahedi Hasan Rafsun"
                className="relative w-full h-full object-cover rounded-full border-2 border-border shadow-2xl z-10"
              />
              
              {/* Status indicator */}
              <motion.div 
                className="absolute -bottom-1 -right-1 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-card border border-border"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, type: "spring" }}
              >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-medium text-foreground">Available</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Hero Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.span 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border font-mono text-sm text-primary mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Sparkles size={14} className="text-secondary" />
                Hello, I'm
              </motion.span>
              
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 tracking-tight">
                <span className="text-foreground">Mahedi Hasan</span>{' '}
                <span className="text-gradient-primary">Rafsun</span>
              </h1>
              
              <motion.div 
                className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-base md:text-lg text-muted-foreground mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  Student Developer
                </span>
                <span className="text-border">•</span>
                <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium">
                  AI & Automation
                </span>
                <span className="text-border">•</span>
                <span className="font-mono text-accent">@codewithrafsun</span>
              </motion.div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              I build <span className="text-primary font-medium">AI-powered tools</span>, 
              automation systems, and developer solutions with a{' '}
              <span className="text-secondary font-medium">long-term vision</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-primary text-primary-foreground rounded-xl font-medium transition-all hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
              >
                View Projects
                <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
              </a>
              <a
                href="https://github.com/CodeWithRafsun"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-card text-foreground rounded-xl font-medium transition-all border border-border hover:border-primary/50 hover:bg-muted hover:-translate-y-0.5"
              >
                <Github size={18} />
                GitHub
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-transparent text-foreground rounded-xl font-medium transition-all border border-border hover:border-secondary/50 hover:bg-secondary/5 hover:-translate-y-0.5"
              >
                <Mail size={18} />
                Contact
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-muted-foreground font-mono">Scroll</span>
            <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center p-1">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-3 bg-gradient-primary rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
