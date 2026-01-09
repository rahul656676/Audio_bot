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

  return (
    <section id="about" className="py-20 md:py-28 relative" ref={ref}>
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">
              <span className="text-gradient">About Me</span>
            </h2>
            <p className="section-subtitle mx-auto">
              AI developer passionate about building intelligent systems that solve real problems.
            </p>
          </div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card rounded-2xl p-6 sm:p-8 mb-8"
          >
            <p className="text-muted-foreground leading-relaxed mb-4">
              I specialize in developing AI-powered applications, from conversational chatbots to machine learning pipelines. 
              My focus is on creating <span className="text-highlight">production-ready solutions</span> that leverage cloud infrastructure for scalability.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Currently pursuing my B.Tech in Artificial Intelligence at B.K. Birla Institute of Engineering and Technology, 
              with hands-on experience in <span className="text-highlight">Python, TensorFlow, AWS,</span> and modern ML frameworks.
            </p>
            
            {/* Info Cards inline */}
            <div className="flex flex-wrap gap-4">
              {infoCards.map((item) => (
                <div key={item.label} className="flex items-center gap-3 px-4 py-2 rounded-lg bg-secondary/50 border border-border/50">
                  <item.icon className="w-4 h-4 text-highlight" />
                  <div>
                    <span className="text-xs text-muted-foreground">{item.label}: </span>
                    <span className="text-sm text-foreground font-medium">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-3 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="glass-card border-glow rounded-xl p-5 text-center"
              >
                <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-gradient-primary flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
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