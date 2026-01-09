import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  const experiences = [
    {
      title: "AI / ML Intern",
      company: "Regex Software Services",
      period: "Jun 2025 - Aug 2025",
      responsibilities: [
        "Built and evaluated supervised machine learning models using Python and Scikit-learn",
        "Performed data preprocessing and feature engineering to improve model performance",
        "Evaluated models using accuracy, precision, recall, and F1-score metrics",
        "Assisted in deploying AI components on AWS and Linux-based servers",
      ],
    },
  ];

  return (
    <section id="experience" className="py-32 relative overflow-hidden" ref={ref}>
      {/* Background glow */}
      <motion.div 
        style={{ y }}
        className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px]" 
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
              <span className="text-gradient">Experience</span>
            </motion.h2>
            <motion.div 
              className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative pl-8 border-l-2 border-primary/30"
              >
                {/* Timeline dot */}
                <motion.div 
                  className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-primary shadow-3d"
                  animate={{ 
                    boxShadow: [
                      "0 0 10px hsl(142, 76%, 36%, 0.4)",
                      "0 0 25px hsl(142, 76%, 36%, 0.7)",
                      "0 0 10px hsl(142, 76%, 36%, 0.4)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                <motion.div 
                  className="glass-3d p-6 rounded-2xl transition-all duration-500 hover:border-primary/50"
                  whileHover={{ x: 10, scale: 1.01 }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-card-foreground flex items-center gap-2">
                        <Briefcase className="w-5 h-5 text-highlight" />
                        {exp.title}
                      </h3>
                      <p className="text-highlight font-medium">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span className="font-mono text-sm">{exp.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <motion.li
                        key={respIndex}
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.3 + respIndex * 0.1 }}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <motion.span 
                          className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"
                          animate={{ 
                            boxShadow: [
                              "0 0 5px hsl(142, 76%, 36%, 0.3)",
                              "0 0 10px hsl(142, 76%, 36%, 0.6)",
                              "0 0 5px hsl(142, 76%, 36%, 0.3)"
                            ]
                          }}
                          transition={{ duration: 2, repeat: Infinity, delay: respIndex * 0.2 }}
                        />
                        {resp}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
