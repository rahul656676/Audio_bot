import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 80]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Animated orbs */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.15, 0.08] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary rounded-full blur-[150px]" 
      />
      <motion.div 
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.06, 0.12, 0.06] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-accent rounded-full blur-[120px]" 
      />
      
      <div className="absolute inset-0 noise" />

      <motion.div style={{ y, opacity }} className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 max-w-6xl mx-auto">
          
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative flex-shrink-0"
          >
            <motion.div 
              className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 profile-circle overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={profileImage} 
                alt="Rahul Jangir" 
                className="w-full h-full object-cover rounded-full"
              />
            </motion.div>

            {/* Status */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-primary text-primary-foreground font-medium text-xs flex items-center gap-2 shadow-lg"
            >
              <span className="w-2 h-2 bg-primary-foreground rounded-full animate-pulse" />
              Available for Work
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left max-w-xl"
          >
            <motion.p variants={itemVariants} className="text-highlight font-mono text-sm mb-3">
              AI Developer & ML Engineer
            </motion.p>

            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight">
              <span className="text-foreground">I'm </span>
              <span className="text-gradient">Rahul Jangir</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-muted-foreground text-base sm:text-lg mb-6 leading-relaxed">
              Building <span className="text-highlight">intelligent AI systems</span> and{" "}
              <span className="text-highlight">cloud-deployed ML solutions</span>. 
              Specializing in conversational AI, NLP pipelines, and production-grade machine learning.
            </motion.p>

            {/* Tech chips */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8">
              {["Python", "AWS", "TensorFlow", "NLP", "LangChain"].map((tech) => (
                <span key={tech} className="tech-chip">{tech}</span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start mb-6">
              <motion.a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-primary text-primary-foreground font-semibold rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              
              <motion.a
                href="/resume.pdf"
                download
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 glass-card rounded-xl font-medium hover:border-primary/40"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="w-4 h-4" />
                Resume
              </motion.a>
            </motion.div>

            {/* Social */}
            <motion.div variants={itemVariants} className="flex items-center gap-2 justify-center lg:justify-start">
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
                  className="p-2.5 rounded-lg glass-card hover:border-primary/40"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground hover:text-highlight transition-colors" />
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
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <motion.div 
          className="w-5 h-9 rounded-full border-2 border-primary/40 flex justify-center pt-2"
          animate={{ borderColor: ["hsl(199, 89%, 48%, 0.3)", "hsl(199, 89%, 48%, 0.6)", "hsl(199, 89%, 48%, 0.3)"] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            animate={{ y: [0, 10, 0], opacity: [1, 0.4, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-primary/60 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;