import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, Linkedin, Facebook, Instagram, Youtube, Link2 } from 'lucide-react';

interface SocialLink {
  name: string;
  url: string;
  icon: React.ElementType;
  color: string;
  hoverBg: string;
}

const socialLinks: SocialLink[] = [
  { name: 'Facebook', url: 'https://facebook.com/codewithrafsun', icon: Facebook, color: 'group-hover:text-[#1877F2]', hoverBg: 'group-hover:bg-[#1877F2]/10' },
  { name: 'YouTube', url: 'https://youtube.com/@codewithrafsun', icon: Youtube, color: 'group-hover:text-[#FF0000]', hoverBg: 'group-hover:bg-[#FF0000]/10' },
  { name: 'GitHub', url: 'https://github.com/CodeWithRafsun', icon: Github, color: 'group-hover:text-foreground', hoverBg: 'group-hover:bg-foreground/10' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/codewithrafsun', icon: Linkedin, color: 'group-hover:text-[#0A66C2]', hoverBg: 'group-hover:bg-[#0A66C2]/10' },
  { name: 'Instagram', url: 'https://instagram.com/codewithrafsun', icon: Instagram, color: 'group-hover:text-[#E4405F]', hoverBg: 'group-hover:bg-[#E4405F]/10' },
];

export const SocialSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(hsl(320 80% 55%) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />
      
      <div className="section-container relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Section Header */}
          <div className="mb-12">
            <motion.span 
              className="inline-flex items-center gap-2 font-mono text-sm text-primary mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              <Link2 size={14} />
              // Connect
            </motion.span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-foreground">Social </span>
              <span className="text-gradient-primary">Media</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Find me everywhere as{' '}
              <span className="font-mono text-gradient-primary font-semibold">@CodeWithRafsun</span>
            </p>
          </div>

          {/* Social Icons - Clean Look */}
          <div className="flex justify-center items-center gap-4 md:gap-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`group relative p-4 md:p-5 rounded-2xl bg-card border border-border transition-all duration-300 ${link.hoverBg} hover:border-primary/50`}
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={link.name}
              >
                <link.icon 
                  size={24} 
                  className={`text-muted-foreground transition-colors duration-300 ${link.color}`} 
                />
                
                {/* Tooltip */}
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg bg-card border border-border text-xs font-medium text-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none">
                  {link.name}
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
