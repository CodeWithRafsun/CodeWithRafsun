import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase } from 'lucide-react';

interface Platform {
  name: string;
  logo: string;
  url: string;
}

const platforms: Platform[] = [
  { name: 'Fiverr', logo: 'https://cdn.simpleicons.org/fiverr/1DBF73', url: 'https://fiverr.com' },
  { name: 'Upwork', logo: 'https://cdn.simpleicons.org/upwork/6FDA44', url: 'https://upwork.com' },
  { name: 'Amazon', logo: 'https://cdn.simpleicons.org/amazon/FF9900', url: 'https://amazon.com' },
  { name: 'AliExpress', logo: 'https://cdn.simpleicons.org/aliexpress/FF4747', url: 'https://aliexpress.com' },
  { name: 'Binance', logo: 'https://cdn.simpleicons.org/binance/F0B90B', url: 'https://binance.com' },
  { name: 'Bybit', logo: 'https://cdn.simpleicons.org/bybit/F7A600', url: 'https://bybit.com' },
  { name: 'GitHub', logo: 'https://cdn.simpleicons.org/github/white', url: 'https://github.com/CodeWithRafsun' },
  { name: 'GitLab', logo: 'https://cdn.simpleicons.org/gitlab/FC6D26', url: 'https://gitlab.com' },
  { name: 'Bitbucket', logo: 'https://cdn.simpleicons.org/bitbucket/0052CC', url: 'https://bitbucket.org' },
  { name: 'Lovable AI', logo: 'https://lovable.dev/favicon.ico', url: 'https://lovable.dev' },
  { name: 'Google Colab', logo: 'https://cdn.simpleicons.org/googlecolab/F9AB00', url: 'https://colab.research.google.com' },
  { name: 'Kali Linux', logo: 'https://cdn.simpleicons.org/kalilinux/557C94', url: 'https://kali.org' },
  { name: 'Ubuntu', logo: 'https://cdn.simpleicons.org/ubuntu/E95420', url: 'https://ubuntu.com' },
];

// Duplicate for seamless loop
const marqueeItems = [...platforms, ...platforms];

const PlatformCard = ({ platform }: { platform: Platform }) => (
  <a
    href={platform.url}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative flex-shrink-0 flex items-center gap-3 px-5 py-3 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
  >
    <img
      src={platform.logo}
      alt={platform.name}
      className="w-7 h-7 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
      onError={(e) => {
        (e.target as HTMLImageElement).style.display = 'none';
      }}
    />
    <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors whitespace-nowrap">
      {platform.name}
    </span>
  </a>
);

export const PlatformSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="platforms" className="section-padding relative overflow-hidden">
      <div className="section-container relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="mb-12 text-center">
            <motion.span
              className="inline-flex items-center gap-2 font-mono text-sm text-primary mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              <Briefcase size={14} />
              // Platforms
            </motion.span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-foreground">Work & </span>
              <span className="text-gradient-primary">Branding</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Platforms and tools I actively use and work with
            </p>
          </div>
        </motion.div>
      </div>

      {/* Right-to-left marquee scroll */}
      <div className="relative w-full overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

        {/* Row 1 - scroll right to left */}
        <div className="flex gap-4 py-3 animate-marquee-rtl hover:[animation-play-state:paused]">
          {marqueeItems.map((platform, i) => (
            <PlatformCard key={`r1-${platform.name}-${i}`} platform={platform} />
          ))}
        </div>

        {/* Row 2 - scroll left to right (reverse) */}
        <div className="flex gap-4 py-3 animate-marquee-ltr hover:[animation-play-state:paused]">
          {[...marqueeItems].reverse().map((platform, i) => (
            <PlatformCard key={`r2-${platform.name}-${i}`} platform={platform} />
          ))}
        </div>
      </div>
    </section>
  );
};
