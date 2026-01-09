import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Brain, Cloud, Database, Wrench, Library } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: ["Python", "SQL", "JavaScript"],
  },
  {
    title: "AI / Machine Learning",
    icon: Brain,
    skills: ["Supervised Learning", "Feature Engineering", "Model Evaluation", "Neural Networks"],
  },
  {
    title: "NLP & Conversational AI",
    icon: Brain,
    skills: ["Conversational AI", "Speech-to-Text", "Text Processing", "Dialogue Systems"],
  },
  {
    title: "Cloud & Infrastructure",
    icon: Cloud,
    skills: ["AWS EC2", "S3 Storage", "RDS/Aurora", "Linux Servers"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "AWS RDS", "Aurora DB", "PostgreSQL"],
  },
  {
    title: "Tools & DevOps",
    icon: Wrench,
    skills: ["Git", "GitHub", "Linux", "SSH", "VS Code", "Jupyter"],
  },
  {
    title: "Libraries & Frameworks",
    icon: Library,
    skills: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "TensorFlow"],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-20 md:py-28 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <h2 className="section-title">
              <span className="text-gradient">Technical Skills</span>
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/40 to-transparent" />
          </div>
          <p className="section-subtitle">
            Technologies and tools I use to bring AI solutions to life.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: categoryIndex * 0.08 }}
              className="glass-3d p-5 rounded-xl card-hover"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 border border-primary/15">
                  <category.icon className="w-4 h-4 text-highlight" />
                </div>
                <h3 className="text-sm font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.05 + skillIndex * 0.03 }}
                    className="px-2.5 py-1 rounded-md text-xs font-medium bg-muted/40 text-muted-foreground border border-border/30 hover:border-primary/25 hover:text-highlight transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
