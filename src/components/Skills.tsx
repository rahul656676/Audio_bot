import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python"],
    color: "primary",
  },
  {
    title: "AI / ML",
    skills: ["Supervised Learning", "Feature Engineering", "Model Evaluation"],
    color: "primary",
  },
  {
    title: "Deep Learning",
    skills: ["Neural Networks", "Foundations"],
    color: "accent",
  },
  {
    title: "NLP",
    skills: ["Conversational AI", "Speech-to-Text (Basics)"],
    color: "accent",
  },
  {
    title: "Cloud",
    skills: ["AWS EC2", "S3", "RDS/Aurora"],
    color: "primary",
  },
  {
    title: "Databases",
    skills: ["MySQL", "AWS RDS"],
    color: "primary",
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Linux", "SSH", "VS Code"],
    color: "accent",
  },
  {
    title: "Libraries",
    skills: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
    color: "accent",
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-gradient">Technical Skills</span>
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="glass p-6 rounded-2xl hover:border-primary/50 transition-colors group"
              >
                <h3 className={`text-lg font-semibold mb-4 ${category.color === 'primary' ? 'text-primary' : 'text-accent'}`}>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      className={`px-3 py-1.5 rounded-full text-sm font-medium ${
                        category.color === 'primary' 
                          ? 'bg-primary/10 text-primary' 
                          : 'bg-accent/10 text-accent'
                      }`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
