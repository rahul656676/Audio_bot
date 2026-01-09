import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 border-t border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Left - Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#home" className="text-lg font-bold">
              <span className="text-gradient">RJ</span>
              <span className="text-foreground">.dev</span>
            </a>
            <p className="text-muted-foreground text-sm mt-1">
              © {currentYear} Rahul Jangir. All rights reserved.
            </p>
          </div>

          {/* Center - Built with */}
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <span>Built with</span>
            <Heart className="w-3.5 h-3.5 text-destructive fill-current" />
            <span>using React & Tailwind</span>
          </div>

          {/* Right - Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com/in/rahul-jangir-929a65305"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-highlight transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/rahul-jangir"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-highlight transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="mailto:jangirrahul0026@gmail.com"
              className="p-2 text-muted-foreground hover:text-highlight transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
