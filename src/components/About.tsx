import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Target, Zap, Code2 } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    { icon: Code2, label: "AI/ML Focus", value: "Generative AI & NLP" },
    { icon: Zap, label: "Deployment", value: "AWS Cloud Native" },
    { icon: GraduationCap, label: "Experience", value: "REGex Internship" },
    { icon: Target, label: "Goal", value: "Production ML Systems" },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 md:py-32 relative" ref={ref}>
      <motion.div 
        className="absolute top-1/3 left-0 w-[250px] sm:w-[400px] md:w-[500px] h-[250px] sm:h-[400px] md:h-[500px] bg-primary/5 rounded-full blur-[120px] sm:blur-[180px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-14 md:mb-16"
          >
            <motion.h2 
              className="section-title mb-3 sm:mb-4"
              initial={{ opacity: 0, y: 20, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <span className="text-gradient">About Me</span>
            </motion.h2>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="glass-card border-glow rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 mb-8 sm:mb-10 md:mb-12"
            style={{ perspective: '1000px' }}
          >
            <div className="space-y-4 sm:space-y-5 text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed">
              <p>
                I'm <span className="text-foreground font-semibold">Rahul Jangir</span>, an AI Developer based in{" "}
                <span className="text-highlight">Jaipur, Rajasthan, India</span>. I specialize in building intelligent systems 
                that bridge the gap between cutting-edge machine learning and real-world applications.
              </p>
              <p>
                Currently pursuing my internship at <span className="text-highlight font-medium">REGex Software Services</span>, 
                I'm working on <span className="text-foreground">Generative AI and Machine Learning</span> projects, 
                exploring real-world AI applications and production-grade deployments.
              </p>
              <p>
                My expertise spans <span className="text-foreground">Python, Linux, and Generative AI</span>. 
                I'm passionate about creating conversational AI systems, NLP pipelines, and cloud-deployed ML solutions 
                that make a meaningful impact.
              </p>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30, rotateX: -10 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="glass-card border-glow rounded-xl sm:rounded-2xl p-4 sm:p-5 text-center group"
                style={{ perspective: '1000px' }}
                whileHover={{ y: -6, rotateX: 5 }}
              >
                <motion.div 
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-primary flex items-center justify-center mx-auto mb-3"
                  style={{ boxShadow: '0 8px 20px hsl(210, 100%, 55%, 0.3)' }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                </motion.div>
                <p className="text-[10px] sm:text-xs text-muted-foreground mb-1">{item.label}</p>
                <p className="text-xs sm:text-sm font-semibold text-foreground group-hover:text-highlight transition-colors">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;