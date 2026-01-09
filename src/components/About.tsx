import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin, Sparkles } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, -5]);

  return (
    <section id="about" className="py-32 relative overflow-hidden" ref={ref}>
      {/* Background glow */}
      <motion.div 
        style={{ y }}
        className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px]" 
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Title */}
          <div className="flex items-center gap-4 mb-12">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <span className="text-gradient">About Me</span>
            </motion.h2>
            <motion.div 
              className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Profile Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
              animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ rotate }}
              className="relative group"
            >
              <motion.div 
                className="aspect-square rounded-2xl glass-3d overflow-hidden relative"
                whileHover={{ scale: 1.05 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    className="text-8xl font-bold text-gradient"
                    animate={{ 
                      textShadow: [
                        "0 0 20px hsl(142, 76%, 36%, 0.3)",
                        "0 0 40px hsl(142, 76%, 36%, 0.5)",
                        "0 0 20px hsl(142, 76%, 36%, 0.3)"
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    RJ
                  </motion.div>
                </div>
                {/* 3D border effect */}
                <motion.div 
                  className="absolute inset-0 border-2 border-primary/30 rounded-2xl"
                  animate={{ borderColor: ["hsl(142, 76%, 36%, 0.2)", "hsl(142, 76%, 36%, 0.5)", "hsl(142, 76%, 36%, 0.2)"] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.div>
              {/* Shadow layer */}
              <div className="absolute inset-0 border-2 border-primary/10 rounded-2xl transform translate-x-4 translate-y-4 -z-10" />
            </motion.div>

            {/* About Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="md:col-span-2 space-y-6"
            >
              <motion.p 
                className="text-muted-foreground text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {"I'm an"} <span className="text-highlight font-medium">AI Developer</span> specializing in Python-based 
                machine learning and cloud-deployed intelligent systems. With hands-on experience building 
                <span className="text-highlight"> conversational AI</span>, audio-based assistants, and AI-driven web applications.
              </motion.p>

              <motion.p 
                className="text-muted-foreground text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                I have a strong foundation in <span className="text-highlight font-medium">ML pipelines</span>, 
                data preprocessing, and deploying scalable AI solutions on <span className="text-highlight">AWS</span>. 
                Currently seeking AI Developer or Machine Learning Engineer roles.
              </motion.p>

              {/* Info Cards */}
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                <motion.div 
                  className="glass-3d p-4 rounded-xl flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  whileHover={{ scale: 1.03, x: 5 }}
                >
                  <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/10 shadow-inner-3d">
                    <GraduationCap className="w-6 h-6 text-highlight" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Education</p>
                    <p className="font-medium text-card-foreground">B.Tech - AI</p>
                    <p className="text-sm text-muted-foreground">2023 - 2027</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="glass-3d p-4 rounded-xl flex items-center gap-4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  whileHover={{ scale: 1.03, x: -5 }}
                >
                  <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/10 shadow-inner-3d">
                    <MapPin className="w-6 h-6 text-highlight" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium text-card-foreground">Pilani, Rajasthan</p>
                    <p className="text-sm text-muted-foreground">India</p>
                  </div>
                </motion.div>
              </div>

              <motion.div 
                className="glass-3d p-4 rounded-xl flex items-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="p-3 rounded-lg bg-gradient-to-br from-accent/20 to-primary/10 shadow-inner-3d">
                  <Sparkles className="w-6 h-6 text-highlight" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Institute</p>
                  <p className="font-medium text-card-foreground">B.K. Birla Institute of Engineering and Technology</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
