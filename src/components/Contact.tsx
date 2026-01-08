import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "rahul.jangir@example.com",
      href: "mailto:rahul.jangir@example.com",
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
    <section id="contact" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
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
              className="text-primary font-mono mb-4"
            >
              What's Next?
            </motion.p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Get In Touch</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              I'm currently looking for AI Developer or Machine Learning Engineer opportunities. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.label}
                href={info.href}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass p-6 rounded-2xl text-center hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                <p className="font-medium text-foreground">{info.value}</p>
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
            <a
              href="https://linkedin.com/in/rahul-jangir-929a65305"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full glass hover:bg-primary/20 transition-all duration-300 hover:glow-primary group"
            >
              <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://github.com/rahul-jangir"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full glass hover:bg-primary/20 transition-all duration-300 hover:glow-primary group"
            >
              <Github className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="mailto:rahul.jangir@example.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-primary text-primary-foreground font-semibold rounded-full hover:opacity-90 transition-opacity glow-primary"
            >
              Say Hello
              <Send className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
