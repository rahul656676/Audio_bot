import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Rahul Jangir. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/rahul-jangir"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-highlight transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/rahul-jangir-929a65305"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-highlight transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:jangirrahul0026@gmail.com"
              className="text-muted-foreground hover:text-highlight transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;