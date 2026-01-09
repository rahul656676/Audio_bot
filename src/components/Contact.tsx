import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "jangirrahul0026@gmail.com",
      href: "mailto:jangirrahul0026@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8118852776",
      href: "tel:+918118852776",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pilani, Rajasthan, India",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-32 relative overflow-hidden" ref={ref}>
      {/* Background glow */}
      <motion.div 
        style={{ y }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" 
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Title */}
          <div className="text-center mb-12">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-highlight font-mono mb-4"
            >
              {"What's Next?"}
            </motion.p>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="text-gradient">Get In Touch</span>
            </motion.h2>
            <motion.p 
              className="text-muted-foreground text-lg max-w-xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {"I'm currently looking for"} <span className="text-highlight">AI Developer</span> or <span className="text-highlight">Machine Learning Engineer</span> opportunities. 
              Whether you have a question or just want to say hi, {"I'll"} try my best to get back to you!
            </motion.p>
          </div>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.label}
                href={info.href}
                initial={{ opacity: 0, y: 30, rotateX: 15 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass-3d p-6 rounded-2xl text-center transition-all duration-500 group hover:border-primary/50"
              >
                <motion.div 
                  className="inline-flex p-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 mb-4 group-hover:from-primary/30 group-hover:to-accent/20 transition-all shadow-inner-3d"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  <info.icon className="w-6 h-6 text-highlight" />
                </motion.div>
                <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                <p className="font-medium text-card-foreground group-hover:text-highlight transition-colors">{info.value}</p>
              </motion.a>
            ))}
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center justify-center gap-6"
          >
            <motion.a
              href="https://linkedin.com/in/rahul-jangir-929a65305"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full glass-3d transition-all duration-500 group hover:glow-primary"
              whileHover={{ scale: 1.15, rotate: 5, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-highlight transition-colors" />
            </motion.a>
            <motion.a
              href="https://github.com/rahul-jangir"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full glass-3d transition-all duration-500 group hover:glow-primary"
              whileHover={{ scale: 1.15, rotate: -5, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="w-6 h-6 text-muted-foreground group-hover:text-highlight transition-colors" />
            </motion.a>
            <motion.a
              href="mailto:jangirrahul0026@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-primary text-primary-foreground font-semibold rounded-full transition-all shadow-3d glow-primary"
              whileHover={{ scale: 1.05, boxShadow: "0 0 60px hsl(142, 76%, 36%, 0.6)" }}
              whileTap={{ scale: 0.95 }}
            >
              Say Hello
              <Send className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
