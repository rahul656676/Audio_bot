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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.12, duration: 0.6 }
    })
  };

  return (
    <section id="skills" className="py-24 md:py-32 relative" ref={ref}>
      <motion.div 
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[180px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <motion.h2 
            className="section-title mb-4"
            initial={{ opacity: 0, y: 20, rotateX: -15 }}
            animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-gradient">Skills & Tools</span>
          </motion.h2>
          <motion.p 
            className="section-subtitle mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            Technologies I use to build intelligent, scalable applications.
          </motion.p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-6" style={{ perspective: '1000px' }}>
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{ y: -8, rotateY: 5, scale: 1.02 }}
              className="glass-card border-glow rounded-2xl p-7"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="flex items-center gap-4 mb-5">
                <motion.div 
                  className="p-3 rounded-xl bg-gradient-primary"
                  style={{ boxShadow: '0 8px 20px hsl(142, 72%, 42%, 0.3)' }}
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  <category.icon className="w-5 h-5 text-primary-foreground" />
                </motion.div>
                <h3 className="font-semibold text-foreground text-lg">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <motion.span 
                    key={skill} 
                    className="tech-chip"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 + i * 0.05 }}
                    whileHover={{ scale: 1.1, y: -2 }}
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