import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { MapPin, Download, ChevronRight, X, Code, Brain, Shield, Zap, Target, Heart } from 'lucide-react';
import profileImage from '@/assets/profile.jpg';

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="about" className="section-padding relative overflow-hidden">
        {/* Background accent */}
        <motion.div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[150px] opacity-20"
          style={{ background: 'linear-gradient(135deg, hsl(220 90% 60% / 0.3) 0%, hsl(320 80% 55% / 0.3) 100%)' }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <div className="section-container relative" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            {/* Section Header */}
            <motion.div 
              className="mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 font-mono text-sm text-secondary mb-4">
                <Zap size={14} />
                // About Me
              </span>
              <h2 className="text-3xl md:text-5xl font-bold">
                <span className="text-foreground">Who </span>
                <span className="text-gradient-primary">I Am</span>
              </h2>
            </motion.div>

            {/* Content Grid - Text Left, Image Right */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Text Content */}
              <motion.div 
                className="order-2 lg:order-1 space-y-6"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    Mahedi Hasan Rafsun
                  </h3>
                  <p className="text-muted-foreground text-lg mb-4">
                    Web Developer | AI Tool Builder | Cybersecurity Enthusiast | Prompt Engineer
                  </p>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin size={16} className="text-secondary" />
                    <span>Bangladesh</span>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-card border border-border">
                  <p className="text-muted-foreground leading-relaxed">
                    "Building intelligent systems, secure digital solutions, and practical AI tools to solve real-world problems."
                  </p>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  I'm a dedicated student developer with a passion for creating innovative solutions 
                  through AI integration, automation, and secure development practices. My journey 
                  focuses on building tools that make a real difference.
                </p>

                <div className="flex flex-wrap gap-4">
                  <motion.button
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-primary text-primary-foreground rounded-xl font-medium transition-all hover:shadow-lg hover:shadow-primary/25"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Read More
                    <ChevronRight size={18} />
                  </motion.button>
                  <motion.a
                    href="/resume.pdf"
                    download
                    className="inline-flex items-center gap-2 px-6 py-3 bg-card text-foreground rounded-xl font-medium border border-border hover:border-primary/50 transition-all"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Download size={18} />
                    Download Resume
                  </motion.a>
                </div>
              </motion.div>

              {/* Right: Profile Image */}
              <motion.div
                className="order-1 lg:order-2 flex justify-center lg:justify-end"
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="relative">
                  {/* Animated ring */}
                  <motion.div 
                    className="absolute -inset-4 rounded-2xl"
                    style={{ 
                      background: 'linear-gradient(135deg, hsl(220 90% 60%) 0%, hsl(320 80% 55%) 50%, hsl(280 75% 60%) 100%)',
                      padding: '3px'
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="w-full h-full rounded-2xl bg-background" />
                  </motion.div>
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-2xl animate-pulse-glow" />
                  
                  <img
                    src={profileImage}
                    alt="Mahedi Hasan Rafsun"
                    className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-2xl border-2 border-border shadow-2xl z-10"
                  />
                  
                  {/* Status badge */}
                  <motion.div 
                    className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border shadow-lg"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1, type: "spring" }}
                  >
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-sm font-medium text-foreground">Open to Opportunities</span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Read More Modal */}
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md"
          onClick={() => setIsModalOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-card rounded-3xl border border-border shadow-2xl p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-muted hover:bg-primary/20 transition-colors"
            >
              <X size={20} />
            </button>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gradient-primary mb-2">
                  Full Story
                </h3>
                <p className="text-muted-foreground">My journey, vision, and values</p>
              </div>

              <div className="space-y-6">
                <div className="p-5 rounded-xl bg-muted/50 border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <Target size={20} className="text-primary" />
                    <h4 className="font-semibold text-foreground">Life Summary</h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    I'm Mahedi Hasan Rafsun, a passionate student developer from Bangladesh. 
                    From a young age, I've been fascinated by technology and its power to transform lives. 
                    What started as curiosity has evolved into a dedicated pursuit of excellence in 
                    web development, AI integration, and cybersecurity.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-muted/50 border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <Code size={20} className="text-secondary" />
                    <h4 className="font-semibold text-foreground">Learning Journey</h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    My learning journey has been self-driven and unconventional. I've mastered 
                    web development through hands-on projects, explored AI tools to enhance 
                    productivity, and developed a strong foundation in cybersecurity fundamentals. 
                    I believe in learning by doing and sharing knowledge with others.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-muted/50 border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <Brain size={20} className="text-accent" />
                    <h4 className="font-semibold text-foreground">Career Vision</h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    My long-term goal is to become a professional Machine Learning developer 
                    and AI automation specialist. I envision creating intelligent systems that 
                    solve real-world problems, building secure digital solutions, and contributing 
                    to the global tech community.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-muted/50 border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <Heart size={20} className="text-secondary" />
                    <h4 className="font-semibold text-foreground">Values & Mindset</h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    I believe in discipline, consistency, and a growth-driven mindset. 
                    I'm not positioning myself as "perfect" — instead, I'm committed to 
                    continuous learning, building real projects, and creating long-term value. 
                    Professionalism, integrity, and helping others are core to who I am.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};
