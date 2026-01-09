import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: "AI / ML Intern",
      company: "Regex Software Services",
      period: "Jun 2025 - Aug 2025",
      responsibilities: [
        "Built and evaluated supervised ML models using Python and Scikit-learn",
        "Performed data preprocessing and feature engineering",
        "Evaluated models using accuracy, precision, recall, and F1-score",
        "Deployed AI components on AWS and Linux-based servers",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 md:py-32 relative" ref={ref}>
      <motion.div 
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[180px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-14">
            <motion.h2 
              className="section-title mb-4"
              initial={{ opacity: 0, y: 20, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <span className="text-gradient">Experience</span>
            </motion.h2>
            <motion.p 
              className="section-subtitle mx-auto"
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
              initial={{ opacity: 0, y: 40, rotateX: -10 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="glass-card border-glow rounded-2xl p-7 sm:p-9"
              style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
              whileHover={{ y: -6, rotateX: 3 }}
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <motion.div 
                    className="p-4 rounded-xl bg-gradient-primary flex-shrink-0"
                    style={{ boxShadow: '0 10px 25px hsl(142, 72%, 42%, 0.3)' }}
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <Briefcase className="w-6 h-6 text-primary-foreground" />
                  </motion.div>
                  <div>
                    <h3 className="font-bold text-foreground text-xl">{exp.title}</h3>
                    <p className="text-highlight font-medium">{exp.company}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground text-sm px-4 py-2 rounded-lg glass-card">
                  <Calendar className="w-4 h-4" />
                  <span className="font-mono">{exp.period}</span>
                </div>
              </div>

              <ul className="space-y-4">
                {exp.responsibilities.map((resp, respIndex) => (
                  <motion.li 
                    key={respIndex} 
                    className="flex items-start gap-3 text-muted-foreground"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + respIndex * 0.1 }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
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