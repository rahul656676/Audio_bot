import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, CheckCircle2, MapPin } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: "Summer Internship",
      company: "REGex Software Services",
      location: "Jaipur, India",
      period: "June 2025 - July 2025",
      responsibilities: [
        "Working on Generative AI and Machine Learning projects",
        "Exploring real-world AI applications and production deployment",
        "Building and evaluating supervised ML models using Python and Scikit-learn",
        "Deploying AI components on AWS and Linux-based servers",
      ],
    },
  ];

  return (
    <section id="experience" className="py-16 sm:py-24 md:py-32 relative" ref={ref}>
      <motion.div 
        className="absolute bottom-0 left-0 w-[300px] sm:w-[450px] md:w-[550px] h-[300px] sm:h-[450px] md:h-[550px] bg-primary/5 rounded-full blur-[140px] sm:blur-[200px]"
        animate={{ scale: [1, 1.25, 1], opacity: [0.05, 0.12, 0.05] }}
        transition={{ duration: 14, repeat: Infinity }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-10 sm:mb-14">
            <motion.h2 
              className="section-title mb-3 sm:mb-4"
              initial={{ opacity: 0, y: 20, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <span className="text-gradient">Experience</span>
            </motion.h2>
            <motion.p 
              className="section-subtitle mx-auto px-2"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              Professional experience in AI and machine learning.
            </motion.p>
          </div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -10 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="glass-card border-glow rounded-xl sm:rounded-2xl p-5 sm:p-7 md:p-9"
              style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
              whileHover={{ y: -8, rotateX: 4 }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4 mb-5 sm:mb-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <motion.div 
                    className="p-3 sm:p-4 rounded-lg sm:rounded-xl bg-gradient-primary flex-shrink-0"
                    style={{ boxShadow: '0 12px 30px hsl(210, 100%, 55%, 0.35)' }}
                    whileHover={{ rotate: 10, scale: 1.12 }}
                  >
                    <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                  </motion.div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg sm:text-xl">{exp.title}</h3>
                    <p className="text-highlight font-medium text-sm sm:text-base">{exp.company}</p>
                    <div className="flex items-center gap-1.5 text-muted-foreground text-xs sm:text-sm mt-1">
                      <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg glass-card self-start">
                  <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span className="font-mono">{exp.period}</span>
                </div>
              </div>

              <ul className="space-y-3 sm:space-y-4">
                {exp.responsibilities.map((resp, respIndex) => (
                  <motion.li 
                    key={respIndex} 
                    className="flex items-start gap-2.5 sm:gap-3 text-muted-foreground text-sm sm:text-base"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + respIndex * 0.1 }}
                  >
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{resp}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;