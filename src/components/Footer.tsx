import { motion } from 'framer-motion';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© {currentYear}</span>
            <span className="text-border">•</span>
            <span className="font-mono text-primary">@codewithrafsun</span>
          </div>

          <p className="text-sm text-muted-foreground text-center md:text-right">
            Built with passion. Designed for the future.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
