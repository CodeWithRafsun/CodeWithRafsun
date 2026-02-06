import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Tech-themed images for the hero slider
const heroImages = [
  {
    url: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1920&q=80',
    alt: 'Code on screen'
  },
  {
    url: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&q=80',
    alt: 'AI and Machine Learning'
  },
  {
    url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1920&q=80',
    alt: 'Cybersecurity Matrix'
  },
  {
    url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80',
    alt: 'Circuit Board Technology'
  },
  {
    url: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=1920&q=80',
    alt: 'Terminal Command Line'
  },
  {
    url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80',
    alt: 'Data Center Networks'
  },
  {
    url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80',
    alt: 'Global Data Networks'
  },
  {
    url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80',
    alt: 'Cybersecurity Lock'
  },
  {
    url: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1920&q=80',
    alt: 'AI Robot Face'
  },
  {
    url: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1920&q=80',
    alt: 'Code Development'
  },
  {
    url: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=1920&q=80',
    alt: 'Automation and Robotics'
  },
  {
    url: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1920&q=80',
    alt: 'Network Infrastructure'
  },
];

export const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % heroImages.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <section 
      className="relative h-screen w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Image Slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={heroImages[currentIndex].url}
            alt={heroImages[currentIndex].alt}
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for consistency */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />
        </motion.div>
      </AnimatePresence>

      {/* Animated gradient overlay */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, hsl(220 90% 60% / 0.1) 0%, transparent 50%, hsl(320 80% 55% / 0.1) 100%)'
        }}
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-card/80 backdrop-blur-sm border border-border hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} className="text-foreground group-hover:text-primary transition-colors" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-card/80 backdrop-blur-sm border border-border hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 group"
        aria-label="Next slide"
      >
        <ChevronRight size={24} className="text-foreground group-hover:text-primary transition-colors" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'w-8 bg-gradient-primary' 
                : 'bg-foreground/30 hover:bg-foreground/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-foreground/60 font-mono">Scroll</span>
          <div className="w-5 h-8 border-2 border-foreground/30 rounded-full flex justify-center pt-1">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 bg-primary rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
