import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python"],
  },
  {
    title: "AI / ML",
    skills: ["Supervised Learning", "Feature Engineering", "Model Evaluation"],
  },
  {
    title: "Deep Learning",
    skills: ["Neural Networks", "Foundations"],
  },
  {
    title: "NLP",
    skills: ["Conversational AI", "Speech-to-Text (Basics)"],
  },
  {
    title: "Cloud",
    skills: ["AWS EC2", "S3", "RDS/Aurora"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "AWS RDS"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Linux", "SSH", "VS Code"],
  },
  {
    title: "Libraries",
    skills: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section id="skills" className="py-32 relative overflow-hidden" ref={ref}>
      {/* Background glow */}
      <motion.div 
        style={{ y }}
        className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px]" 
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <div className="flex items-center gap-4 mb-12">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <span className="text-gradient">Technical Skills</span>
            </motion.h2>
            <motion.div 
              className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30, rotateX: 15 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass-3d p-6 rounded-2xl transition-all duration-500 group hover:border-primary/50"
              >
                <motion.h3 
                  className="text-lg font-semibold mb-4 text-highlight"
                  animate={isInView ? { 
                    textShadow: [
                      "0 0 10px hsl(142, 76%, 36%, 0.3)",
                      "0 0 20px hsl(142, 76%, 36%, 0.5)",
                      "0 0 10px hsl(142, 76%, 36%, 0.3)"
                    ]
                  } : {}}
                  transition={{ duration: 3, repeat: Infinity, delay: categoryIndex * 0.2 }}
                >
                  {category.title}
                </motion.h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-muted-foreground border border-primary/20 hover:border-primary/50 hover:text-highlight transition-all cursor-default"
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
