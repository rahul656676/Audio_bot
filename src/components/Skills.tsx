import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Brain, Cloud, Database } from "lucide-react";

const skillCategories = [
  {
    title: "Languages & Frameworks",
    icon: Code,
    skills: ["Python", "JavaScript", "TypeScript", "React", "FastAPI", "Flask"],
  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "NLP", "LangChain", "OpenAI"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS EC2", "S3", "Lambda", "Docker", "CI/CD", "Linux"],
  },
  {
    title: "Data & Databases",
    icon: Database,
    skills: ["PostgreSQL", "Aurora", "MongoDB", "Redis", "Pandas", "NumPy"],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 md:py-28 relative" ref={ref}>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title mb-4">
            <span className="text-gradient">Skills & Tools</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Technologies I use to build intelligent, scalable applications.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-5">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card border-glow rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-gradient-primary">
                  <category.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="tech-chip">
                    {skill}
                  </span>
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