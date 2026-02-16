import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { MapPin, Download, ChevronRight, X, Code, Brain, Shield, Zap, Target, Heart, Camera, Facebook, Github, Linkedin, Youtube, Instagram } from 'lucide-react';
import profileImage from '@/assets/profile.jpg';
import { supabase } from '@/integrations/supabase/client';

const socialLinks = [
  { icon: Facebook, url: 'https://facebook.com/CodeWithRafsun', label: 'Facebook' },
  { icon: Github, url: 'https://github.com/CodeWithRafsun', label: 'GitHub' },
  { icon: Linkedin, url: 'https://linkedin.com/in/CodeWithRafsun', label: 'LinkedIn' },
  { icon: Youtube, url: 'https://youtube.com/@CodeWithRafsun', label: 'YouTube' },
  { icon: Instagram, url: 'https://instagram.com/CodeWithRafsun', label: 'Instagram' },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProfileImage, setCurrentProfileImage] = useState(profileImage);
  const [currentBannerImage, setCurrentBannerImage] = useState('Navy Blue Geometric Technology LinkedIn Banner_20260107_141301_0000.png');
  const [isUploading, setIsUploading] = useState(false);

  // Load saved images from database
  useEffect(() => {
    const loadSettings = async () => {
      const { data } = await supabase
        .from('site_settings')
        .select('profile_image_url, banner_image_url')
        .eq('id', 'default')
        .single();
      if (data?.profile_image_url) setCurrentProfileImage(data.profile_image_url);
      if (data?.banner_image_url) setCurrentBannerImage(data.banner_image_url);
    };
    loadSettings();
  }, []);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, type: 'profile' | 'banner') => {
    const file = e.target.files?.[0];
    if (!file) return;
    setIsUploading(true);

    const fileExt = file.name.split('.').pop();
    const fileName = `${type}-${Date.now()}.${fileExt}`;

    const { error: uploadError } = await supabase.storage
      .from('profile-images')
      .upload(fileName, file, { upsert: true });

    if (uploadError) {
      console.error('Upload error:', uploadError);
      setIsUploading(false);
      return;
    }

    const { data: { publicUrl } } = supabase.storage
      .from('profile-images')
      .getPublicUrl(fileName);

    const updateField = type === 'profile' ? 'profile_image_url' : 'banner_image_url';
    await supabase
      .from('site_settings')
      .update({ [updateField]: publicUrl, updated_at: new Date().toISOString() })
      .eq('id', 'default');

    if (type === 'profile') setCurrentProfileImage(publicUrl);
    else setCurrentBannerImage(publicUrl);
    setIsUploading(false);
  };

  return (
    <>
      <section id="about" className="section-padding relative overflow-hidden">
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
            <motion.div className="mb-12 text-center"
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

            {/* Social Media Style Card */}
            <motion.div
              className="rounded-3xl overflow-hidden bg-card border border-border shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Banner / Cover Photo */}
              <div className="relative h-48 md:h-64 lg:h-72 overflow-hidden group">
                <img
                  src={currentBannerImage}
                  alt="Profile banner"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-primary opacity-20" />
                
                {/* Banner upload button */}
                <label className="absolute top-4 right-4 p-2.5 rounded-xl bg-card/70 backdrop-blur-sm border border-border cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity hover:bg-card">
                  <Camera size={18} className="text-foreground" />
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleImageUpload(e, 'banner')}
                    disabled={isUploading}
                  />
                </label>
              </div>

              {/* Profile area below banner */}
              <div className="relative px-6 md:px-10 pb-8">
                {/* Profile image overlapping banner */}
                <div className="relative -mt-16 md:-mt-20 mb-6 flex items-end gap-6">
                  <div className="relative group flex-shrink-0">
                    <div className="w-28 h-28 md:w-36 md:h-36 rounded-2xl border-4 border-card overflow-hidden shadow-xl">
                      <img
                        src={currentProfileImage}
                        alt="Mahedi Hasan Rafsun"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Profile upload button */}
                    <label className="absolute bottom-1 right-1 p-1.5 rounded-lg bg-gradient-primary cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                      <Camera size={14} className="text-primary-foreground" />
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handleImageUpload(e, 'profile')}
                        disabled={isUploading}
                      />
                    </label>
                    {/* Online indicator */}
                    <div className="absolute top-1 right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-card" />
                  </div>

                  {/* Name + role inline */}
                  <div className="hidden md:block pb-2">
                    <h3 className="text-2xl font-bold text-foreground">Mahedi Hasan Rafsun</h3>
                    <p className="text-muted-foreground text-sm">@CodeWithRafsun</p>
                  </div>
                </div>

                {/* Mobile name */}
                <div className="md:hidden mb-4">
                  <h3 className="text-xl font-bold text-foreground">Mahedi Hasan Rafsun</h3>
                  <p className="text-muted-foreground text-sm">@CodeWithRafsun</p>
                </div>

                {/* Info grid */}
                <div className="grid lg:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Web Developer | AI Tool Builder | Cybersecurity Enthusiast | Prompt Engineer
                    </p>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <MapPin size={14} className="text-secondary" />
                      <span>Gazipur, Dhaka, Bangladesh</span>
                    </div>
                    <div className="p-4 rounded-xl bg-muted/50 border border-border">
                      <p className="text-muted-foreground text-sm leading-relaxed italic">
                        "Building intelligent systems, secure digital solutions, and practical AI tools to solve real-world problems."
                      </p>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Dedicated student developer with a passion for creating innovative solutions 
                      through AI integration, automation, and secure development practices.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {/* Social links row */}
                    <div className="flex flex-wrap gap-2">
                      {socialLinks.map((link) => (
                        <a
                          key={link.label}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-xl bg-muted/50 border border-border hover:border-primary/50 hover:bg-primary/10 transition-all group"
                          title={link.label}
                        >
                          <link.icon size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
                        </a>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-wrap gap-3">
                      <motion.button
                        onClick={() => setIsModalOpen(true)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-primary text-primary-foreground rounded-xl text-sm font-medium transition-all hover:shadow-lg hover:shadow-primary/25"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Read More
                        <ChevronRight size={16} />
                      </motion.button>
                      <motion.a
                        href="/resume.pdf"
                        download
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-muted/50 text-foreground rounded-xl text-sm font-medium border border-border hover:border-primary/50 transition-all"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Download size={16} />
                        Resume
                      </motion.a>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { label: 'Projects', value: '6+' },
                        { label: 'Platforms', value: '13+' },
                        { label: 'Focus Areas', value: '4+' },
                      ].map((stat) => (
                        <div key={stat.label} className="text-center p-3 rounded-xl bg-muted/30 border border-border">
                          <div className="text-lg font-bold text-gradient-primary">{stat.value}</div>
                          <div className="text-xs text-muted-foreground">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
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
                <h3 className="text-2xl md:text-3xl font-bold text-gradient-primary mb-2">Full Story</h3>
                <p className="text-muted-foreground">My journey, vision, and values</p>
              </div>

              <div className="space-y-6">
                {[
                  { icon: Target, color: 'text-primary', title: 'Life Summary', text: "I'm Mahedi Hasan Rafsun, a passionate student developer from Bangladesh. From a young age, I've been fascinated by technology and its power to transform lives. What started as curiosity has evolved into a dedicated pursuit of excellence in web development, AI integration, and cybersecurity." },
                  { icon: Code, color: 'text-secondary', title: 'Learning Journey', text: "My learning journey has been self-driven and unconventional. I've mastered web development through hands-on projects, explored AI tools to enhance productivity, and developed a strong foundation in cybersecurity fundamentals. I believe in learning by doing and sharing knowledge with others." },
                  { icon: Brain, color: 'text-accent', title: 'Career Vision', text: "My long-term goal is to become a professional Machine Learning developer and AI automation specialist. I envision creating intelligent systems that solve real-world problems, building secure digital solutions, and contributing to the global tech community." },
                  { icon: Heart, color: 'text-secondary', title: 'Values & Mindset', text: 'I believe in discipline, consistency, and a growth-driven mindset. I\'m not positioning myself as "perfect" — instead, I\'m committed to continuous learning, building real projects, and creating long-term value. Professionalism, integrity, and helping others are core to who I am.' },
                ].map((item) => (
                  <div key={item.title} className="p-5 rounded-xl bg-muted/50 border border-border">
                    <div className="flex items-center gap-3 mb-3">
                      <item.icon size={20} className={item.color} />
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};
