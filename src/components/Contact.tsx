import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const links = [
    { icon: Mail, label: "Email", value: "jangirrahul0026@gmail.com", href: "mailto:jangirrahul0026@gmail.com" },
    { icon: Github, label: "GitHub", value: "github.com/rahul-jangir", href: "https://github.com/rahul-jangir" },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/rahul-jangir", href: "https://linkedin.com/in/rahul-jangir-929a65305" },
  ];

  return (
    <section id="contact" className="py-20 md:py-28 relative" ref={ref}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="section-title mb-4">
            <span className="text-gradient">Let's Connect</span>
          </h2>
          <p className="section-subtitle mx-auto mb-10">
            Interested in working together? I'm always open to discussing new projects and opportunities.
          </p>

          {/* Primary CTA */}
          <motion.a
            href="mailto:jangirrahul0026@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-primary text-primary-foreground font-semibold rounded-xl shadow-lg hover:shadow-xl transition-shadow mb-10"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Mail className="w-5 h-5" />
            Get in Touch
            <ArrowUpRight className="w-4 h-4" />
          </motion.a>

          {/* Contact Links */}
          <div className="grid sm:grid-cols-3 gap-4">
            {links.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="glass-card border-glow rounded-xl p-5 group"
                whileHover={{ y: -3 }}
              >
                <link.icon className="w-6 h-6 text-highlight mx-auto mb-2" />
                <p className="font-medium text-foreground mb-1">{link.label}</p>
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