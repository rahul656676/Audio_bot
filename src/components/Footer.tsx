import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-10 border-t border-border/50 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="text-center sm:text-left">
            <motion.a 
              href="#home" 
              className="text-xl font-bold text-gradient"
              whileHover={{ scale: 1.05 }}
            >
              RJ
            </motion.a>
            <p className="text-muted-foreground text-sm mt-1">
              © {new Date().getFullYear()} Rahul Jangir. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Built with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-primary fill-current" />
            </motion.div>
            <span>using React & Tailwind</span>
          </div>
          
          <div className="flex items-center gap-3">
            {[
              { href: "https://github.com/rahul-jangir", icon: Github, label: "GitHub" },
              { href: "https://linkedin.com/in/rahul-jangir-929a65305", icon: Linkedin, label: "LinkedIn" },
              { href: "mailto:jangirrahul0026@gmail.com", icon: Mail, label: "Email" },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="p-2 text-muted-foreground hover:text-highlight transition-colors"
                aria-label={social.label}
                whileHover={{ scale: 1.2, y: -2 }}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;