import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Linkedin, ArrowUpRight, Send } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const links = [
    { icon: Mail, label: "Email", value: "jangirrahul0026@gmail.com", href: "mailto:jangirrahul0026@gmail.com" },
    { icon: Github, label: "GitHub", value: "github.com/rahul-jangir", href: "https://github.com/rahul-jangir" },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/rahul-jangir", href: "https://linkedin.com/in/rahul-jangir-929a65305" },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 relative" ref={ref}>
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[180px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h2 
            className="section-title mb-4"
            initial={{ opacity: 0, y: 20, rotateX: -15 }}
            animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-gradient">Let's Connect</span>
          </motion.h2>
          <motion.p 
            className="section-subtitle mx-auto mb-12"
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
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-primary text-primary-foreground font-semibold rounded-2xl mb-14"
            style={{ boxShadow: '0 15px 40px hsl(142, 72%, 42%, 0.4)' }}
            whileHover={{ scale: 1.05, y: -5, boxShadow: '0 20px 50px hsl(142, 72%, 42%, 0.5)' }}
            whileTap={{ scale: 0.98 }}
          >
            <Mail className="w-5 h-5" />
            Get in Touch
            <Send className="w-4 h-4" />
          </motion.a>

          {/* Contact Links */}
          <div className="grid sm:grid-cols-3 gap-5" style={{ perspective: '1000px' }}>
            {links.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 40, rotateX: -10 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.12 }}
                className="glass-card border-glow rounded-xl p-6 group"
                style={{ transformStyle: 'preserve-3d' }}
                whileHover={{ y: -8, rotateX: 5, scale: 1.02 }}
              >
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="inline-block"
                >
                  <link.icon className="w-7 h-7 text-highlight mx-auto mb-3" />
                </motion.div>
                <p className="font-semibold text-foreground mb-1">{link.label}</p>
                <p className="text-sm text-muted-foreground truncate group-hover:text-highlight transition-colors">
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