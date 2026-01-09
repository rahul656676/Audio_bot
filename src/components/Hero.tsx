import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Phone, Download, Play } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/10 rounded-full blur-3xl" 
        />
        <div className="absolute inset-0 noise pointer-events-none" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          
          {/* Profile Image - YouTube Style */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotateY: -30 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            {/* Rotating border */}
            <div className="absolute -inset-4 rounded-2xl rotating-border">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary via-accent to-primary opacity-75 blur-sm" />
            </div>
            
            {/* Video frame container */}
            <motion.div 
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden video-frame"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Play button overlay */}
              <motion.div 
                className="absolute inset-0 flex items-center justify-center bg-background/30 backdrop-blur-sm z-10 opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
                whileHover={{ backgroundColor: "rgba(0,0,0,0.5)" }}
              >
                <motion.div 
                  className="w-16 h-16 rounded-full bg-primary flex items-center justify-center"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                </motion.div>
              </motion.div>
              
              {/* Image */}
              <motion.img 
                src={profileImage} 
                alt="Rahul Jangir" 
                className="w-full h-full object-cover"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 10, repeat: Infinity }}
              />
              
              {/* Glowing corners */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-primary rounded-tl-2xl animate-glow" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-primary rounded-tr-2xl animate-glow" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-primary rounded-bl-2xl animate-glow" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-primary rounded-br-2xl animate-glow" />
            </motion.div>

            {/* Status badge */}
            <motion.div 
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-primary text-primary-foreground font-bold text-sm flex items-center gap-2"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="w-2 h-2 bg-primary-foreground rounded-full animate-pulse" />
              #OPENTOWORK
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center lg:text-left"
          >
            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-primary font-mono text-lg mb-4 flex items-center gap-2 justify-center lg:justify-start"
            >
              <motion.span 
                animate={{ rotate: [0, 20, 0] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
              >
                👋
              </motion.span>
              Hi, my name is
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4"
            >
              <motion.span 
                className="text-gradient inline-block"
                animate={{ 
                  textShadow: [
                    "0 0 20px hsl(142, 70%, 45%, 0.5)",
                    "0 0 40px hsl(142, 70%, 45%, 0.8)",
                    "0 0 20px hsl(142, 70%, 45%, 0.5)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Rahul Jangir
              </motion.span>
            </motion.h1>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-2xl md:text-4xl lg:text-5xl font-semibold text-muted-foreground mb-8"
            >
              <motion.span
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                AI Developer & ML Engineer
              </motion.span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="max-w-xl text-muted-foreground text-lg md:text-xl mb-8 leading-relaxed"
            >
              Specializing in Python-based machine learning and cloud-deployed intelligent systems. 
              Building conversational AI, audio-based assistants, and AI-driven web applications.
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex items-center gap-4 mb-8 justify-center lg:justify-start"
            >
              {[
                { href: "https://linkedin.com/in/rahul-jangir-929a65305", icon: Linkedin, label: "LinkedIn" },
                { href: "https://github.com/rahul-jangir", icon: Github, label: "GitHub" },
                { href: "mailto:rahul.jangir@example.com", icon: Mail, label: "Email" },
                { href: "tel:+918118852776", icon: Phone, label: "Phone" },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="p-3 rounded-full glass hover:bg-primary/20 transition-all duration-300 group relative"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <social.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                  <motion.div 
                    className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-card rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
                  >
                    {social.label}
                  </motion.div>
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#projects"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-primary text-primary-foreground font-semibold rounded-full transition-all"
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(142, 70%, 45%, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
                <motion.span
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowDown className="w-5 h-5" />
                </motion.span>
              </motion.a>
              
              <motion.a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-8 py-4 glass border-2 border-primary/50 text-primary font-semibold rounded-full hover:bg-primary/10 transition-all"
                whileHover={{ scale: 1.05, borderColor: "hsl(142, 70%, 45%)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5" />
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div 
          className="w-6 h-10 rounded-full border-2 border-primary/50 flex justify-center pt-2"
          animate={{ borderColor: ["hsl(142, 70%, 45%, 0.3)", "hsl(142, 70%, 45%, 0.8)", "hsl(142, 70%, 45%, 0.3)"] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-primary rounded-full"
          />
        </motion.div>
      </motion.div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}
    </section>
  );
};

export default Hero;
