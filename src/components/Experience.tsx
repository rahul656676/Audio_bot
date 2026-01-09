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
    <section id="experience" className="py-20 md:py-28 relative" ref={ref}>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">
              <span className="text-gradient">Experience</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Professional experience in AI and machine learning.
            </p>
          </div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card border-glow rounded-2xl p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-primary flex-shrink-0">
                    <Briefcase className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">{exp.title}</h3>
                    <p className="text-highlight">{exp.company}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                  <Calendar className="w-4 h-4" />
                  <span className="font-mono">{exp.period}</span>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.responsibilities.map((resp, respIndex) => (
                  <li key={respIndex} className="flex items-start gap-3 text-muted-foreground text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{resp}</span>
                  </li>
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