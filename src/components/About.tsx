import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin, Sparkles } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Title */}
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-gradient">About Me</span>
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Profile Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group"
            >
              <div className="aspect-square rounded-2xl bg-gradient-card border border-border overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-primary opacity-10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-8xl font-bold text-gradient">RJ</div>
                </div>
                <div className="absolute inset-0 border-2 border-primary/20 rounded-2xl transform translate-x-3 translate-y-3 -z-10" />
              </div>
            </motion.div>

            {/* About Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="md:col-span-2 space-y-6"
            >
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm an <span className="text-foreground font-medium">AI Developer</span> specializing in Python-based 
                machine learning and cloud-deployed intelligent systems. With hands-on experience building 
                <span className="text-primary"> conversational AI</span>, audio-based assistants, and AI-driven web applications.
              </p>

              <p className="text-muted-foreground text-lg leading-relaxed">
                I have a strong foundation in <span className="text-foreground font-medium">ML pipelines</span>, 
                data preprocessing, and deploying scalable AI solutions on <span className="text-primary">AWS</span>. 
                Currently seeking AI Developer or Machine Learning Engineer roles.
              </p>

              {/* Info Cards */}
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                <div className="glass p-4 rounded-xl flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Education</p>
                    <p className="font-medium">B.Tech - AI</p>
                    <p className="text-sm text-muted-foreground">2023 - 2027</p>
                  </div>
                </div>

                <div className="glass p-4 rounded-xl flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">Pilani, Rajasthan</p>
                    <p className="text-sm text-muted-foreground">India</p>
                  </div>
                </div>
              </div>

              <div className="glass p-4 rounded-xl flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10">
                  <Sparkles className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Institute</p>
                  <p className="font-medium">B.K. Birla Institute of Engineering and Technology</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
