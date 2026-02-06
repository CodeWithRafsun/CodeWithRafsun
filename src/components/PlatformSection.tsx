import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase } from 'lucide-react';

interface Platform {
  name: string;
  logo: string;
  url: string;
  category: 'freelance' | 'affiliate' | 'development' | 'tools';
}

const platforms: Platform[] = [
  // Freelance Platforms
  { name: 'Fiverr', logo: 'https://cdn.simpleicons.org/fiverr/1DBF73', url: 'https://fiverr.com', category: 'freelance' },
  { name: 'Upwork', logo: 'https://cdn.simpleicons.org/upwork/6FDA44', url: 'https://upwork.com', category: 'freelance' },
  
  // Affiliate Platforms
  { name: 'Amazon', logo: 'https://cdn.simpleicons.org/amazon/FF9900', url: 'https://amazon.com', category: 'affiliate' },
  { name: 'AliExpress', logo: 'https://cdn.simpleicons.org/aliexpress/FF4747', url: 'https://aliexpress.com', category: 'affiliate' },
  { name: 'Binance', logo: 'https://cdn.simpleicons.org/binance/F0B90B', url: 'https://binance.com', category: 'affiliate' },
  { name: 'Bybit', logo: 'https://cdn.simpleicons.org/bybit/F7A600', url: 'https://bybit.com', category: 'affiliate' },
  
  // Development Platforms
  { name: 'GitHub', logo: 'https://cdn.simpleicons.org/github/white', url: 'https://github.com/CodeWithRafsun', category: 'development' },
  { name: 'GitLab', logo: 'https://cdn.simpleicons.org/gitlab/FC6D26', url: 'https://gitlab.com', category: 'development' },
  { name: 'Bitbucket', logo: 'https://cdn.simpleicons.org/bitbucket/0052CC', url: 'https://bitbucket.org', category: 'development' },
  
  // Tools
  { name: 'Lovable AI', logo: 'https://lovable.dev/favicon.ico', url: 'https://lovable.dev', category: 'tools' },
  { name: 'Google Colab', logo: 'https://cdn.simpleicons.org/googlecolab/F9AB00', url: 'https://colab.research.google.com', category: 'tools' },
  { name: 'Kali Linux', logo: 'https://cdn.simpleicons.org/kalilinux/557C94', url: 'https://kali.org', category: 'tools' },
  { name: 'Ubuntu', logo: 'https://cdn.simpleicons.org/ubuntu/E95420', url: 'https://ubuntu.com', category: 'tools' },
];

export const PlatformSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(hsl(220 90% 60%) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
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

          {/* Platform Logos Grid */}
          <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 md:gap-6">
            {platforms.map((platform, index) => (
              <motion.a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative flex items-center justify-center aspect-square p-4 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 overflow-hidden"
                whileHover={{ scale: 1.05, y: -3 }}
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <img
                  src={platform.logo}
                  alt={platform.name}
                  className="relative w-8 h-8 md:w-10 md:h-10 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  onError={(e) => {
                    // Fallback to first letter if image fails
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      const fallback = document.createElement('span');
                      fallback.className = 'text-2xl font-bold text-muted-foreground group-hover:text-primary transition-colors';
                      fallback.textContent = platform.name.charAt(0);
                      parent.appendChild(fallback);
                    }
                  }}
                />
                
                {/* Tooltip */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg bg-card border border-border text-xs font-medium text-foreground opacity-0 group-hover:opacity-100 group-hover:-bottom-12 transition-all duration-300 whitespace-nowrap pointer-events-none z-10">
                  {platform.name}
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
