import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Linkedin, Send } from "lucide-react";

const LINKEDIN_URL = "https://linkedin.com/in/rahul-jangir-929a65305";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const links = [
    { icon: Mail, label: "Email", value: "jangirrahul0026@gmail.com", href: "mailto:jangirrahul0026@gmail.com" },
    { icon: Github, label: "GitHub", value: "github.com/rahul-jangir", href: "https://github.com/rahul-jangir" },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/rahul-jangir", href: LINKEDIN_URL },
  ];

  return (
    <section id="contact" className="py-16 sm:py-24 md:py-32 relative" ref={ref}>
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] md:w-[650px] h-[350px] sm:h-[500px] md:h-[650px] bg-primary/6 rounded-full blur-[140px] sm:blur-[200px]"
        animate={{ scale: [1, 1.25, 1], opacity: [0.06, 0.12, 0.06] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h2 
            className="section-title mb-3 sm:mb-4"
            initial={{ opacity: 0, y: 20, rotateX: -15 }}
            animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-gradient">Let's Connect</span>
          </motion.h2>
          <motion.p 
            className="section-subtitle mx-auto mb-8 sm:mb-10 md:mb-12 px-2"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            Interested in working together? I'm always open to discussing new projects and opportunities.
          </motion.p>

          {/* Primary CTA */}
          <motion.a
            href="mailto:jangirrahul0026@gmail.com"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 md:py-5 bg-gradient-primary text-primary-foreground font-semibold rounded-xl sm:rounded-2xl mb-10 sm:mb-12 md:mb-14 text-sm sm:text-base"
            style={{ boxShadow: '0 18px 45px hsl(210, 100%, 55%, 0.45)' }}
            whileHover={{ scale: 1.05, y: -6, boxShadow: '0 25px 60px hsl(210, 100%, 55%, 0.55)' }}
            whileTap={{ scale: 0.98 }}
          >
            <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
            Get in Touch
            <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </motion.a>

          {/* Contact Links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5" style={{ perspective: '1000px' }}>
            {links.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 40, rotateX: -10 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.12 }}
                className="glass-card border-glow rounded-xl sm:rounded-2xl p-5 sm:p-6 group"
                style={{ transformStyle: 'preserve-3d' }}
                whileHover={{ y: -10, rotateX: 6, scale: 1.03 }}
              >
                <motion.div
                  whileHover={{ rotate: 12, scale: 1.15 }}
                  className="inline-block"
                >
                  <link.icon className="w-6 h-6 sm:w-7 sm:h-7 text-highlight mx-auto mb-2 sm:mb-3" />
                </motion.div>
                <p className="font-semibold text-foreground mb-0.5 sm:mb-1 text-sm sm:text-base">{link.label}</p>
                <p className="text-xs sm:text-sm text-muted-foreground truncate group-hover:text-highlight transition-colors">
                  {link.value}
                </p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;