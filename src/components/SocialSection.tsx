import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, Linkedin, Facebook, Instagram, Youtube, Link2 } from 'lucide-react';

interface SocialLink {
  name: string;
  url: string;
  icon: React.ElementType;
  username: string;
  color: string;
}

// Custom Telegram icon
const TelegramIcon = ({ size = 24, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 2L11 13" />
    <path d="M22 2L15 22L11 13L2 9L22 2Z" />
  </svg>
);

// Custom TikTok icon
const TikTokIcon = ({ size = 24, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
  </svg>
);

// Custom Bitbucket icon
const BitbucketIcon = ({ size = 24, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M2.65 3A1 1 0 001.67 4.18L4.02 20a1 1 0 00.97.82h14.06a.73.73 0 00.74-.64l2.37-16.13A1 1 0 0021.17 3H2.65zm11.9 12.41H9.46l-1.04-5.45h6.17l-.04 5.45z"/>
  </svg>
);

const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/CodeWithRafsun', icon: Github, username: '@CodeWithRafsun', color: 'group-hover:text-foreground' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/codewithrafsun', icon: Linkedin, username: '@codewithrafsun', color: 'group-hover:text-primary' },
  { name: 'Facebook', url: 'https://facebook.com/codewithrafsun', icon: Facebook, username: '@codewithrafsun', color: 'group-hover:text-primary' },
  { name: 'Instagram', url: 'https://instagram.com/codewithrafsun', icon: Instagram, username: '@codewithrafsun', color: 'group-hover:text-secondary' },
  { name: 'Telegram', url: 'https://t.me/codewithrafsun', icon: TelegramIcon, username: '@codewithrafsun', color: 'group-hover:text-primary' },
  { name: 'YouTube', url: 'https://youtube.com/@codewithrafsun', icon: Youtube, username: '@codewithrafsun', color: 'group-hover:text-secondary' },
  { name: 'TikTok', url: 'https://tiktok.com/@codewithrafsun', icon: TikTokIcon, username: '@codewithrafsun', color: 'group-hover:text-foreground' },
  { name: 'Bitbucket', url: 'https://bitbucket.org/codewithrafsun', icon: BitbucketIcon, username: '@codewithrafsun', color: 'group-hover:text-primary' },
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
          className="max-w-5xl mx-auto"
        >
          {/* Section Header */}
          <div className="mb-12 text-center">
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
              <span className="text-foreground">Professional </span>
              <span className="text-gradient-primary">Presence</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Unified branding across all platforms as{' '}
              <span className="font-mono text-gradient-primary font-semibold">@codewithrafsun</span>
            </p>
          </div>

          {/* Social Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 overflow-hidden"
                whileHover={{ y: -3, scale: 1.02 }}
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <motion.div 
                  className="relative p-2.5 rounded-xl bg-muted group-hover:bg-gradient-primary transition-all duration-300"
                  whileHover={{ rotate: 5 }}
                >
                  <link.icon size={18} className={`text-muted-foreground ${link.color} transition-colors duration-300`} />
                </motion.div>
                <div className="relative min-w-0 flex-1">
                  <p className="text-sm font-semibold text-foreground truncate">{link.name}</p>
                  <p className="text-xs text-muted-foreground font-mono truncate">{link.username}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
