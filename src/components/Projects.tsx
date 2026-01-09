import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Cloud, Plane, Brain, MessageSquare, Mic } from "lucide-react";

const projects = [
  {
    title: "AI Audio Conversational Chatbot",
    description: "Real-time voice interaction system with speech-to-text processing, natural language understanding, and multi-turn dialogue support.",
    tags: ["Python", "NLP", "Speech-to-Text", "Audio Processing"],
    icon: Mic,
    github: "https://github.com/rahul-jangir",
    span: "md:col-span-2",
  },
  {
    title: "AI Text Chatbot",
    description: "Production-grade conversational AI deployed on AWS with EC2, S3 storage, Aurora database, and RDS.",
    tags: ["Python", "AWS EC2", "S3", "Aurora DB", "RDS"],
    icon: MessageSquare,
    github: "https://github.com/rahul-jangir",
    deployed: true,
    span: "md:col-span-1",
  },
  {
    title: "AI Travel Agent System",
    description: "Intelligent travel assistant generating optimized booking links with dynamic pricing and automated cost calculations.",
    tags: ["Python", "AWS RDS", "API Integration", "ML"],
    icon: Plane,
    github: "https://github.com/rahul-jangir",
    deployed: true,
    span: "md:col-span-1",
  },
  {
    title: "ML Model Pipeline",
    description: "End-to-end ML workflow with data preprocessing, feature engineering, hyperparameter tuning, and production deployment.",
    tags: ["Scikit-learn", "Pandas", "NumPy", "MLOps"],
    icon: Brain,
    github: "https://github.com/rahul-jangir",
    span: "md:col-span-2",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
      },
    }),
  };

  return (
    <section id="projects" className="py-24 md:py-32 relative" ref={ref}>
      {/* Background elements */}
      <motion.div 
        className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[180px] -translate-y-1/2"
        animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="section-title mb-4"
            initial={{ opacity: 0, y: 20, rotateX: -15 }}
            animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-gradient">Featured Projects</span>
          </motion.h2>
          <motion.p 
            className="section-subtitle mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            AI and machine learning solutions from conversational systems to cloud-deployed applications.
          </motion.p>
        </motion.div>

        {/* Bento Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6" style={{ perspective: '1000px' }}>
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{ 
                y: -8, 
                rotateX: 5, 
                rotateY: -3,
                transition: { duration: 0.3 }
              }}
              className={`glass-card border-glow rounded-2xl p-6 group ${project.span}`}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="flex items-start justify-between mb-5">
                <motion.div 
                  className="p-3.5 rounded-xl bg-gradient-primary"
                  style={{ boxShadow: '0 8px 20px hsl(142, 72%, 42%, 0.3)' }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <project.icon className="w-5 h-5 text-primary-foreground" />
                </motion.div>
                <div className="flex items-center gap-2">
                  {project.deployed && (
                    <motion.span 
                      className="px-2.5 py-1 text-xs font-medium bg-primary/15 text-highlight rounded-full border border-primary/30 flex items-center gap-1.5"
                      animate={{ boxShadow: ['0 0 10px hsl(142, 72%, 42%, 0.2)', '0 0 20px hsl(142, 72%, 42%, 0.4)', '0 0 10px hsl(142, 72%, 42%, 0.2)'] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Cloud className="w-3 h-3" />
                      Live
                    </motion.span>
                  )}
                  <motion.a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-muted-foreground hover:text-highlight transition-colors rounded-lg hover:bg-muted/30"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    aria-label="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </motion.a>
                  <motion.a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-muted-foreground hover:text-highlight transition-colors rounded-lg hover:bg-muted/30"
                    whileHover={{ scale: 1.2, rotate: -10 }}
                    aria-label="Live Demo"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>

              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-highlight transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <motion.span 
                    key={tag} 
                    className="tech-chip text-xs"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 + i * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        {/* GitHub Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a 
            href="https://github.com/rahul-jangir" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-highlight transition-colors font-medium link-underline"
            whileHover={{ x: 5 }}
          >
            View all on GitHub
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;