import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Cloud, Plane, Brain, MessageSquare } from "lucide-react";

const projects = [
  {
    title: "AI Audio Conversational Chatbot",
    description: "Developed an AI-powered audio chatbot supporting real-time voice interaction with speech-to-text processing. Features NLP-based response logic with natural conversation flow.",
    tags: ["Python", "NLP", "Speech-to-Text", "Audio Processing"],
    icon: Cloud,
    gradient: "from-primary to-accent",
    deployed: false,
  },
  {
    title: "AI Text Chatbot (AWS Deployed)",
    description: "Built a sophisticated conversational AI chatbot deployed on AWS EC2 server. Backend handled through S3 bucket storage, linked with Aurora database and RDS server for scalable data management.",
    tags: ["Python", "AWS EC2", "S3 Bucket", "Aurora", "RDS", "NLP"],
    icon: MessageSquare,
    gradient: "from-accent to-primary",
    deployed: true,
  },
  {
    title: "Intelligent AI Travel Agent System",
    description: "Built an AI-driven travel assistant that collects source, destination, date, and time to generate booking website links with dynamic price estimation. Implemented backend logic in Python for end-to-end journey cost calculation.",
    tags: ["Python", "AWS RDS", "API Integration", "Machine Learning"],
    icon: Plane,
    gradient: "from-primary/80 to-accent/80",
    deployed: true,
  },
  {
    title: "Machine Learning Model Development",
    description: "Implemented regression and classification models using Scikit-learn. Conducted data cleaning, feature selection, hyperparameter tuning, and model evaluation on structured datasets.",
    tags: ["Scikit-learn", "Pandas", "NumPy", "Model Evaluation"],
    icon: Brain,
    gradient: "from-accent/80 to-primary/80",
    deployed: false,
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="projects" className="py-32 relative overflow-hidden" ref={ref}>
      {/* Background elements */}
      <motion.div 
        style={{ y }}
        className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px]" 
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
              <span className="text-gradient">Projects</span>
            </motion.h2>
            <motion.div 
              className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50, rotateX: 10 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group glass-3d p-6 rounded-2xl transition-all duration-500 flex flex-col hover:border-primary/50"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <motion.div 
                    className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient} shadow-3d`}
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <project.icon className="w-6 h-6 text-primary-foreground" />
                  </motion.div>
                  <div className="flex items-center gap-2">
                    {project.deployed && (
                      <motion.span 
                        className="px-3 py-1 text-xs font-medium bg-primary/20 text-highlight rounded-full border border-primary/30"
                        animate={{ boxShadow: ["0 0 10px hsl(142, 76%, 36%, 0.3)", "0 0 20px hsl(142, 76%, 36%, 0.5)", "0 0 10px hsl(142, 76%, 36%, 0.3)"] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        AWS Deployed
                      </motion.span>
                    )}
                    <motion.button 
                      className="p-2 text-muted-foreground hover:text-highlight transition-colors"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                    >
                      <Github className="w-5 h-5" />
                    </motion.button>
                    <motion.button 
                      className="p-2 text-muted-foreground hover:text-highlight transition-colors"
                      whileHover={{ scale: 1.2, rotate: -5 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-card-foreground group-hover:text-highlight transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: index * 0.1 + tagIndex * 0.05 }}
                      className="px-3 py-1 text-xs font-mono text-muted-foreground bg-muted/50 rounded-lg border border-border/50 hover:border-primary/30 hover:text-highlight transition-all"
                    >
                      {tag}
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

export default Projects;
