import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin, Code2, Target } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const highlights = [
    { icon: Code2, label: "AI Development", value: "Python & ML" },
    { icon: Target, label: "Focus Area", value: "NLP & Conversational AI" },
    { icon: GraduationCap, label: "Education", value: "B.Tech AI (2023-27)" },
    { icon: MapPin, label: "Location", value: "Pilani, Rajasthan" },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden" ref={ref}>
      {/* Subtle background glow */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-12">
            <h2 className="section-title">
              <span className="text-gradient">About Me</span>
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/40 to-transparent" />
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Main content */}
            <motion.div variants={itemVariants} className="lg:col-span-3 space-y-6">
              <p className="text-foreground text-lg leading-relaxed">
                I'm an <span className="text-highlight font-semibold">AI Developer</span> passionate about 
                building intelligent systems that solve real-world problems. My expertise lies in 
                developing machine learning models and deploying them at scale on cloud infrastructure.
              </p>

              <p className="text-muted-foreground text-base leading-relaxed">
                With hands-on experience in <span className="text-highlight">conversational AI</span>, 
                audio-based assistants, and end-to-end ML pipelines, I bring ideas to life through 
                clean code and thoughtful architecture. I'm currently pursuing my B.Tech in Artificial 
                Intelligence at B.K. Birla Institute of Engineering and Technology.
              </p>

              <p className="text-muted-foreground text-base leading-relaxed">
                When I'm not coding, I'm exploring the latest developments in NLP and 
                <span className="text-highlight"> generative AI</span>, always looking for ways to push 
                the boundaries of what's possible with machine learning.
              </p>

              {/* What I'm looking for */}
              <div className="pt-4">
                <h3 className="text-sm font-mono text-highlight mb-3 uppercase tracking-wider">Currently Seeking</h3>
                <p className="text-muted-foreground">
                  <span className="text-foreground font-medium">AI Developer</span> or 
                  <span className="text-foreground font-medium"> Machine Learning Engineer</span> roles 
                  where I can contribute to impactful AI projects and grow alongside talented teams.
                </p>
              </div>
            </motion.div>

            {/* Info cards */}
            <motion.div variants={itemVariants} className="lg:col-span-2 space-y-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="glass-3d p-4 rounded-xl flex items-center gap-4 card-hover"
                >
                  <div className="p-2.5 rounded-lg bg-primary/10 border border-primary/20">
                    <item.icon className="w-5 h-5 text-highlight" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">{item.label}</p>
                    <p className="font-medium text-foreground">{item.value}</p>
                  </div>
                </motion.div>
              ))}

              {/* Institute card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.7 }}
                className="glass-3d p-4 rounded-xl card-hover"
              >
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Institute</p>
                <p className="font-medium text-foreground text-sm leading-snug">
                  B.K. Birla Institute of Engineering and Technology
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
