import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow opacity-20" />
      
      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© {currentYear}</span>
            <span className="text-border">•</span>
            <span className="font-mono text-gradient-primary font-semibold">@codewithrafsun</span>
          </div>

          <p className="text-sm text-muted-foreground text-center md:text-right flex items-center gap-2">
            Built with <Heart size={14} className="text-secondary fill-secondary" /> for the future.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
