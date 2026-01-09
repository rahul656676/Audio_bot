import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Target, Zap, GraduationCap, MapPin } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    { icon: Sparkles, title: "AI & ML", desc: "Deep learning, NLP, and conversational AI" },
    { icon: Target, title: "Cloud Native", desc: "AWS deployment with scalable architectures" },
    { icon: Zap, title: "Full Stack", desc: "End-to-end solutions from prototype to production" },
  ];

  const infoCards = [
    { icon: GraduationCap, label: "Education", value: "B.Tech AI (2023-27)" },
    { icon: MapPin, label: "Location", value: "Pilani, Rajasthan" },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6 }
    })
  };

  return (
    <section id="about" className="py-24 md:py-32 relative" ref={ref}>
      <motion.div 
        className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[180px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-14">
            <motion.h2 
              className="section-title mb-4"
              initial={{ opacity: 0, y: 20, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <span className="text-gradient">About Me</span>
            </motion.h2>
            <motion.p 
              className="section-subtitle mx-auto"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              AI developer passionate about building intelligent systems that solve real problems.
            </motion.p>
          </div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotateX: -5 }}
            animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="glass-card rounded-2xl p-7 sm:p-9 mb-10"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <p className="text-muted-foreground leading-relaxed mb-5 text-base sm:text-lg">
              I specialize in developing AI-powered applications, from conversational chatbots to machine learning pipelines. 
              My focus is on creating <span className="text-highlight font-medium">production-ready solutions</span> that leverage cloud infrastructure for scalability.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-7 text-base sm:text-lg">
              Currently pursuing my B.Tech in Artificial Intelligence at B.K. Birla Institute of Engineering and Technology, 
              with hands-on experience in <span className="text-highlight font-medium">Python, TensorFlow, AWS,</span> and modern ML frameworks.
            </p>
            
            {/* Info Cards inline */}
            <div className="flex flex-wrap gap-4">
              {infoCards.map((item, i) => (
                <motion.div 
                  key={item.label} 
                  className="flex items-center gap-3 px-5 py-3 rounded-xl glass-card"
                  whileHover={{ scale: 1.05, y: -3 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  <item.icon className="w-5 h-5 text-highlight" />
                  <div>
                    <span className="text-xs text-muted-foreground">{item.label}: </span>
                    <span className="text-sm text-foreground font-medium">{item.value}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-3 gap-5" style={{ perspective: '1000px' }}>
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                whileHover={{ y: -8, rotateX: 5, scale: 1.02 }}
                className="glass-card border-glow rounded-xl p-6 text-center"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.div 
                  className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-primary flex items-center justify-center"
                  style={{ boxShadow: '0 10px 25px hsl(142, 72%, 42%, 0.3)' }}
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </motion.div>
                <h3 className="font-semibold text-foreground mb-2 text-lg">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;