import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Download, Sparkles } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 80]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6 } 
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-20 pb-8">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Animated 3D orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.4, 1],
          opacity: [0.12, 0.22, 0.12],
          rotateZ: [0, 180, 360]
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[300px] sm:w-[500px] md:w-[700px] h-[300px] sm:h-[500px] md:h-[700px] bg-primary rounded-full blur-[120px] sm:blur-[200px]" 
      />
      <motion.div 
        animate={{ 
          scale: [1.3, 1, 1.3],
          opacity: [0.1, 0.18, 0.1],
          rotateZ: [360, 180, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/3 right-1/4 w-[250px] sm:w-[400px] md:w-[550px] h-[250px] sm:h-[400px] md:h-[550px] bg-accent rounded-full blur-[100px] sm:blur-[170px]" 
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.025)_1px,transparent_1px)] bg-[size:50px_50px] sm:bg-[size:80px_80px]" />
      
      <div className="absolute inset-0 noise" />

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary/35 rounded-full hidden sm:block"
          style={{
            left: `${10 + i * 12}%`,
            top: `${18 + (i % 4) * 20}%`,
          }}
          animate={{
            y: [-25, 25, -25],
            x: [-12, 12, -12],
            opacity: [0.35, 0.75, 0.35],
            scale: [1, 1.6, 1],
          }}
          transition={{
            duration: 5 + i * 0.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4,
          }}
        />
      ))}

      <motion.div style={{ y, opacity }} className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-12 lg:gap-20 max-w-6xl mx-auto">
          
          {/* 3D Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative flex-shrink-0"
          >
            <motion.div 
              className="w-44 h-44 xs:w-52 xs:h-52 sm:w-60 sm:h-60 md:w-72 md:h-72 profile-circle overflow-hidden"
              whileHover={{ scale: 1.05, rotateY: 10 }}
              transition={{ duration: 0.4 }}
            >
              <img 
                src={profileImage} 
                alt="Rahul Jangir" 
                className="w-full h-full object-cover rounded-full"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/25 via-transparent to-transparent" />
            </motion.div>

            {/* Status badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-gradient-primary text-primary-foreground font-semibold text-[10px] sm:text-xs flex items-center gap-1.5 sm:gap-2"
              style={{ boxShadow: '0 12px 35px hsl(210, 100%, 55%, 0.45)' }}
            >
              <motion.span 
                className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-primary-foreground rounded-full"
                animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
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
            className="text-center lg:text-left max-w-xl px-2 sm:px-0"
            style={{ perspective: '1000px' }}
          >
            <motion.div variants={itemVariants} className="flex items-center gap-2 justify-center lg:justify-start mb-3 sm:mb-4">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-highlight" />
              <span className="text-highlight font-mono text-xs sm:text-sm md:text-base">AI Developer & ML Engineer</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-5 tracking-tight">
              <span className="text-foreground">I'm </span>
              <span className="text-gradient">Rahul Jangir</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-muted-foreground text-sm sm:text-base md:text-lg lg:text-xl mb-5 sm:mb-6 leading-relaxed">
              Building <span className="text-highlight font-medium">intelligent AI systems</span> and{" "}
              <span className="text-highlight font-medium">cloud-deployed ML solutions</span>. 
              Specializing in conversational AI, NLP pipelines, and production-grade machine learning.
            </motion.p>

            {/* Tech chips */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-1.5 sm:gap-2 justify-center lg:justify-start mb-6 sm:mb-8">
              {["Python", "AWS", "TensorFlow", "NLP", "LangChain"].map((tech, i) => (
                <motion.span 
                  key={tech} 
                  className="tech-chip"
                  whileHover={{ scale: 1.1, y: -3 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8">
              <motion.a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 bg-gradient-primary text-primary-foreground font-semibold rounded-xl transition-all text-sm sm:text-base"
                style={{ boxShadow: '0 12px 35px hsl(210, 100%, 55%, 0.35)' }}
                whileHover={{ scale: 1.03, y: -2, boxShadow: '0 18px 45px hsl(210, 100%, 55%, 0.55)' }}
                whileTap={{ scale: 0.98 }}
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              
              <motion.a
                href="/resume.pdf"
                download
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 glass-card rounded-xl font-medium text-sm sm:text-base"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="w-4 h-4" />
                Resume
              </motion.a>
            </motion.div>

            {/* Social */}
            <motion.div variants={itemVariants} className="flex items-center gap-2 sm:gap-3 justify-center lg:justify-start">
              <span className="text-muted-foreground text-xs sm:text-sm">Connect:</span>
              {[
                { href: "https://linkedin.com/in/rahul-jangir-929a65305", icon: Linkedin, label: "LinkedIn" },
                { href: "https://github.com/rahul-jangir", icon: Github, label: "GitHub" },
                { href: "mailto:jangirrahul0026@gmail.com", icon: Mail, label: "Email" },
              ].map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="p-2.5 sm:p-3 rounded-xl glass-card"
                  whileHover={{ scale: 1.15, y: -3, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + i * 0.1 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground hover:text-highlight transition-colors" />
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
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <motion.div 
          className="w-5 h-9 sm:w-6 sm:h-10 rounded-full border-2 border-primary/45 flex justify-center pt-2"
          animate={{ borderColor: ["hsl(210, 100%, 55%, 0.35)", "hsl(210, 100%, 55%, 0.75)", "hsl(210, 100%, 55%, 0.35)"] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-2.5 bg-primary rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;