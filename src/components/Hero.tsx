import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Phone, Download } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero">
      {/* Deep animated background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.08, 0.15, 0.08],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[100px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
            x: [0, -40, 0],
            y: [0, 40, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/30 rounded-full blur-[80px]" 
        />
        <motion.div 
          animate={{ 
            x: [0, 100, 0],
            y: [0, -80, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-primary/15 rounded-full blur-[60px]" 
        />
        
        <div className="absolute inset-0 noise pointer-events-none" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
        
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(120,15%,2%)_70%)]" />
      </div>

      <motion.div style={{ y, opacity, scale }} className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          
          {/* 3D Circular Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotateY: -30 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative"
          >
            {/* Outer rotating glow rings */}
            <motion.div 
              className="absolute -inset-8 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-transparent to-accent opacity-40 blur-md" />
            </motion.div>
            
            <motion.div 
              className="absolute -inset-12 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent via-transparent to-primary opacity-30 blur-lg" />
            </motion.div>

            {/* 3D Circle container */}
            <motion.div 
              className="relative w-64 h-64 md:w-80 md:h-80 circle-3d overflow-hidden"
              whileHover={{ scale: 1.05 }}
              animate={{ 
                boxShadow: [
                  "0 0 0 4px hsl(142, 76%, 36%, 0.3), 0 0 0 8px hsl(142, 76%, 36%, 0.15), 0 0 0 12px hsl(142, 76%, 36%, 0.08), 0 20px 60px -10px hsl(142, 76%, 36%, 0.5), inset 0 -20px 40px hsl(0, 0%, 0%, 0.5), inset 0 20px 40px hsl(142, 76%, 36%, 0.2)",
                  "0 0 0 6px hsl(142, 76%, 36%, 0.4), 0 0 0 12px hsl(142, 76%, 36%, 0.2), 0 0 0 18px hsl(142, 76%, 36%, 0.1), 0 30px 80px -10px hsl(142, 76%, 36%, 0.6), inset 0 -25px 50px hsl(0, 0%, 0%, 0.6), inset 0 25px 50px hsl(142, 76%, 36%, 0.25)",
                  "0 0 0 4px hsl(142, 76%, 36%, 0.3), 0 0 0 8px hsl(142, 76%, 36%, 0.15), 0 0 0 12px hsl(142, 76%, 36%, 0.08), 0 20px 60px -10px hsl(142, 76%, 36%, 0.5), inset 0 -20px 40px hsl(0, 0%, 0%, 0.5), inset 0 20px 40px hsl(142, 76%, 36%, 0.2)"
                ]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Image */}
              <motion.img 
                src={profileImage} 
                alt="Rahul Jangir" 
                className="w-full h-full object-cover rounded-full"
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ duration: 8, repeat: Infinity }}
              />
              
              {/* Inner glow overlay */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-b from-primary/10 via-transparent to-background/50" />
            </motion.div>

            {/* Status badge */}
            <motion.div 
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-5 py-2.5 rounded-full bg-gradient-primary text-primary-foreground font-bold text-sm flex items-center gap-2 shadow-3d"
              animate={{ y: [0, -8, 0], boxShadow: ["0 10px 30px -5px hsl(142, 76%, 36%, 0.4)", "0 15px 40px -5px hsl(142, 76%, 36%, 0.6)", "0 10px 30px -5px hsl(142, 76%, 36%, 0.4)"] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              <motion.span 
                className="w-2 h-2 bg-primary-foreground rounded-full"
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
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
              className="text-highlight font-mono text-lg mb-4 flex items-center gap-2 justify-center lg:justify-start"
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
                    "0 0 30px hsl(142, 76%, 36%, 0.4)",
                    "0 0 60px hsl(142, 76%, 36%, 0.7)",
                    "0 0 30px hsl(142, 76%, 36%, 0.4)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Rahul Jangir
              </motion.span>
            </motion.h1>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-8"
            >
              <motion.span
                className="text-card-foreground"
                animate={{ opacity: [0.6, 0.9, 0.6] }}
                transition={{ duration: 4, repeat: Infinity }}
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
              Specializing in <span className="text-highlight">Python-based machine learning</span> and cloud-deployed intelligent systems. 
              Building <span className="text-highlight">conversational AI</span>, audio-based assistants, and AI-driven web applications.
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
                { href: "mailto:jangirrahul0026@gmail.com", icon: Mail, label: "Email" },
                { href: "tel:+918118852776", icon: Phone, label: "Phone" },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="p-3 rounded-full glass-3d hover:glow-primary transition-all duration-500 group relative"
                  whileHover={{ scale: 1.2, rotate: 5, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <social.icon className="w-6 h-6 text-muted-foreground group-hover:text-highlight transition-colors" />
                  <motion.div 
                    className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-card rounded-lg text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-primary/30 shadow-3d"
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
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-primary text-primary-foreground font-semibold rounded-full transition-all shadow-3d"
                whileHover={{ scale: 1.05, boxShadow: "0 0 50px hsl(142, 76%, 36%, 0.6)" }}
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
                className="inline-flex items-center gap-2 px-8 py-4 glass-3d border-2 border-primary/50 text-highlight font-semibold rounded-full hover:border-primary transition-all"
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px hsl(142, 76%, 36%, 0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5" />
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div 
          className="w-7 h-12 rounded-full border-2 border-primary/40 flex justify-center pt-2 backdrop-blur-sm"
          animate={{ borderColor: ["hsl(142, 76%, 36%, 0.2)", "hsl(142, 76%, 36%, 0.6)", "hsl(142, 76%, 36%, 0.2)"] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            animate={{ y: [0, 16, 0], opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-2 h-3 bg-primary rounded-full"
          />
        </motion.div>
      </motion.div>

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary/40 rounded-full"
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
          }}
          animate={{
            y: [0, -150, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0, 0.8, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut"
          }}
        />
      ))}
    </section>
  );
};

export default Hero;
