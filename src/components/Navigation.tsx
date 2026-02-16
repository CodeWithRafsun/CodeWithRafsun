import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun, Terminal } from 'lucide-react';

const navLinks = [
  { href: '#about', label: 'About', id: 'about' },
  { href: '#skills', label: 'Skills', id: 'skills' },
  { href: '#projects', label: 'Projects', id: 'projects' },
  { href: '#platforms', label: 'Branding', id: 'platforms' },
  { href: '#education', label: 'Education', id: 'education' },
  { href: '#organization', label: 'LWMHR', id: 'organization' },
  { href: '#contact', label: 'Contact', id: 'contact' },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for active section highlighting
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    
    navLinks.forEach((link) => {
      const el = document.getElementById(link.id);
      if (!el) return;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(link.id);
          }
        },
        { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-xl border-b border-border shadow-lg shadow-background/20' : 'bg-transparent'
      }`}
    >
      <nav className="section-container">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Brand */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="p-1.5 rounded-lg bg-gradient-primary">
              <Terminal size={16} className="text-primary-foreground" />
            </div>
            <span className="font-mono text-sm font-semibold text-gradient-primary group-hover:opacity-80 transition-opacity">
              @CodeWithRafsun
            </span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    activeSection === link.id
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 rounded-lg bg-primary/10 border border-primary/20"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center gap-2">
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-card/80 border border-border hover:border-primary/50 transition-all"
              aria-label="Toggle theme"
              whileTap={{ scale: 0.9, rotate: 180 }}
            >
              {isDarkMode ? <Sun size={16} className="text-foreground" /> : <Moon size={16} className="text-foreground" />}
            </motion.button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-card/95 backdrop-blur-xl border-b border-border"
          >
            <ul className="section-container py-4 space-y-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                      activeSection === link.id
                        ? 'text-primary bg-primary/10'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
