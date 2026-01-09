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
      type: "Internship",
      responsibilities: [
        "Built and evaluated supervised machine learning models using Python and Scikit-learn",
        "Performed data preprocessing and feature engineering to improve model performance",
        "Evaluated models using accuracy, precision, recall, and F1-score metrics",
        "Assisted in deploying AI components on AWS and Linux-based servers",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-28 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <h2 className="section-title">
              <span className="text-gradient">Experience</span>
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/40 to-transparent" />
          </div>

          {/* Experience Cards */}
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                {/* Timeline indicator */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/30 to-transparent hidden md:block" />
                <div className="absolute left-0 top-6 w-3 h-3 -translate-x-1 rounded-full bg-primary shadow-glow hidden md:block" />

                <div className="glass-3d p-6 rounded-xl md:ml-8 card-hover">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Briefcase className="w-4 h-4 text-highlight" />
                        <h3 className="text-lg font-bold text-foreground">{exp.title}</h3>
                      </div>
                      <p className="text-highlight font-medium">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="px-2.5 py-1 text-xs font-medium bg-primary/10 text-highlight rounded-md border border-primary/20">
                        {exp.type}
                      </span>
                      <div className="flex items-center gap-1.5 text-muted-foreground">
                        <Calendar className="w-3.5 h-3.5" />
                        <span className="font-mono text-xs">{exp.period}</span>
                      </div>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <ul className="space-y-3">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <motion.li
                        key={respIndex}
                        initial={{ opacity: 0, x: 10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.3, delay: 0.3 + respIndex * 0.08 }}
                        className="flex items-start gap-3 text-muted-foreground text-sm"
                      >
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{resp}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
