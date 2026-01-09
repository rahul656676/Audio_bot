import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Download, Sparkles } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Animated gradient orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.06, 0.12, 0.06],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary rounded-full blur-[150px]" 
      />
      <motion.div 
        animate={{ 
          scale: [1.1, 1, 1.1],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent rounded-full blur-[120px]" 
      />
      
      {/* Noise texture */}
      <div className="absolute inset-0 noise pointer-events-none" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.015)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <motion.div style={{ y, opacity }} className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 max-w-6xl mx-auto">
          
          {/* Profile Image with 3D effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex-shrink-0"
          >
            {/* Rotating glow ring */}
            <motion.div 
              className="absolute -inset-6 rounded-full opacity-60"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-transparent to-accent blur-sm" />
            </motion.div>

            {/* 3D Circle container */}
            <motion.div 
              className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 circle-3d overflow-hidden"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={profileImage} 
                alt="Rahul Jangir - AI Developer" 
                className="w-full h-full object-cover rounded-full"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/15 via-transparent to-transparent" />
            </motion.div>

            {/* Status badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-gradient-primary text-primary-foreground font-semibold text-xs sm:text-sm flex items-center gap-2 shadow-3d whitespace-nowrap"
            >
              <motion.span 
                className="w-2 h-2 bg-primary-foreground rounded-full"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              Open to Work
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left max-w-xl"
          >
            {/* Greeting */}
            <motion.div variants={itemVariants} className="flex items-center gap-2 justify-center lg:justify-start mb-4">
              <Sparkles className="w-4 h-4 text-highlight" />
              <span className="text-highlight font-mono text-sm sm:text-base">AI Developer & ML Engineer</span>
            </motion.div>

            {/* Name */}
            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
              <span className="text-foreground">Hi, I'm </span>
              <span className="text-gradient">Rahul Jangir</span>
            </motion.h1>

            {/* Description */}
            <motion.p variants={itemVariants} className="text-muted-foreground text-base sm:text-lg md:text-xl mb-6 leading-relaxed">
              I build <span className="text-highlight font-medium">intelligent systems</span> and 
              <span className="text-highlight font-medium"> cloud-deployed AI solutions</span>. 
              Specializing in conversational AI, NLP, and machine learning pipelines.
            </motion.p>

            {/* Tech stack preview */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8">
              {["Python", "AWS", "NLP", "ML", "TensorFlow"].map((tech) => (
                <span 
                  key={tech} 
                  className="px-3 py-1.5 text-xs font-mono text-muted-foreground bg-muted/50 rounded-lg border border-border/50 hover:border-primary/30 hover:text-highlight transition-all"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-8">
              <motion.a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-primary text-primary-foreground font-semibold rounded-xl transition-all shadow-3d hover:shadow-glow"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View My Projects
                <ArrowDown className="w-4 h-4" />
              </motion.a>
              
              <motion.a
                href="/resume.pdf"
                download
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 glass-3d text-foreground font-semibold rounded-xl hover:border-primary/40 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="w-4 h-4" />
                Resume
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 justify-center lg:justify-start">
              <span className="text-muted-foreground text-sm mr-2">Connect:</span>
              {[
                { href: "https://linkedin.com/in/rahul-jangir-929a65305", icon: Linkedin, label: "LinkedIn" },
                { href: "https://github.com/rahul-jangir", icon: Github, label: "GitHub" },
                { href: "mailto:jangirrahul0026@gmail.com", icon: Mail, label: "Email" },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="p-2.5 rounded-xl glass-3d hover:border-primary/40 transition-all group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-highlight transition-colors" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <motion.div 
          className="w-6 h-10 rounded-full border-2 border-primary/30 flex justify-center pt-2"
          animate={{ borderColor: ["hsl(142, 72%, 42%, 0.2)", "hsl(142, 72%, 42%, 0.5)", "hsl(142, 72%, 42%, 0.2)"] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="w-1.5 h-2.5 bg-primary/60 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
