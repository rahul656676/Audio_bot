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
    hidden: { opacity: 0, y: 50, rotateX: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { delay: i * 0.12, duration: 0.65 }
    })
  };

  return (
    <section id="skills" className="py-16 sm:py-24 md:py-32 relative" ref={ref}>
      <motion.div 
        className="absolute bottom-0 right-0 w-[300px] sm:w-[450px] md:w-[550px] h-[300px] sm:h-[450px] md:h-[550px] bg-accent/6 rounded-full blur-[140px] sm:blur-[200px]"
        animate={{ scale: [1, 1.25, 1], opacity: [0.06, 0.12, 0.06] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <motion.h2 
            className="section-title mb-3 sm:mb-4"
            initial={{ opacity: 0, y: 20, rotateX: -15 }}
            animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-gradient">Skills & Tools</span>
          </motion.h2>
          <motion.p 
            className="section-subtitle mx-auto px-2"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            Technologies I use to build intelligent, scalable applications.
          </motion.p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6" style={{ perspective: '1000px' }}>
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{ y: -10, rotateY: 6, scale: 1.02 }}
              className="glass-card border-glow rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
                <motion.div 
                  className="p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-primary"
                  style={{ boxShadow: '0 10px 25px hsl(210, 100%, 55%, 0.35)' }}
                  whileHover={{ rotate: 10, scale: 1.12 }}
                >
                  <category.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
                </motion.div>
                <h3 className="font-semibold text-foreground text-base sm:text-lg">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {category.skills.map((skill, i) => (
                  <motion.span 
                    key={skill} 
                    className="tech-chip"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 + i * 0.05 }}
                    whileHover={{ scale: 1.12, y: -3 }}
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