import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Send, ArrowUpRight } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "jangirrahul0026@gmail.com",
      href: "mailto:jangirrahul0026@gmail.com",
      action: "Send email",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8118852776",
      href: "tel:+918118852776",
      action: "Call",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pilani, Rajasthan, India",
      href: "#",
      action: "View",
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-28 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Header */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="inline-block text-highlight font-mono text-sm mb-4"
          >
            What's Next?
          </motion.span>
          
          <motion.h2 
            className="section-title mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="text-gradient">Let's Connect</span>
          </motion.h2>
          
          <motion.p 
            className="section-subtitle mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I'm actively looking for <span className="text-highlight font-medium">AI Developer</span> and 
            <span className="text-highlight font-medium"> Machine Learning Engineer</span> opportunities. 
            Feel free to reach out — I'd love to hear from you!
          </motion.p>

          {/* Primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-12"
          >
            <motion.a
              href="mailto:jangirrahul0026@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-primary text-primary-foreground font-semibold rounded-xl transition-all shadow-3d hover:shadow-glow"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail className="w-5 h-5" />
              Say Hello
              <Send className="w-4 h-4" />
            </motion.a>
          </motion.div>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.label}
                href={info.href}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="glass-3d p-5 rounded-xl text-center card-hover group"
              >
                <div className="inline-flex p-3 rounded-xl bg-primary/10 border border-primary/15 mb-3 group-hover:bg-primary/15 transition-colors">
                  <info.icon className="w-5 h-5 text-highlight" />
                </div>
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">{info.label}</p>
                <p className="font-medium text-foreground text-sm group-hover:text-highlight transition-colors">
                  {info.value}
                </p>
              </motion.a>
            ))}
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex items-center justify-center gap-4"
          >
            <a
              href="https://linkedin.com/in/rahul-jangir-929a65305"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 glass-3d rounded-xl hover:border-primary/30 transition-all group"
            >
              <Linkedin className="w-4 h-4 text-muted-foreground group-hover:text-highlight transition-colors" />
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 text-muted-foreground group-hover:text-highlight transition-colors" />
            </a>
            <a
              href="https://github.com/rahul-jangir"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 glass-3d rounded-xl hover:border-primary/30 transition-all group"
            >
              <Github className="w-4 h-4 text-muted-foreground group-hover:text-highlight transition-colors" />
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-muted-foreground group-hover:text-highlight transition-colors" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
