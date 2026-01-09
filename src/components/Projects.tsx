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

  return (
    <section id="projects" className="py-20 md:py-28 relative" ref={ref}>
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[150px] -translate-y-1/2" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title mb-4">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="section-subtitle mx-auto">
            AI and machine learning solutions from conversational systems to cloud-deployed applications.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass-card border-glow rounded-2xl p-6 group ${project.span}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-gradient-primary shadow-lg">
                  <project.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div className="flex items-center gap-2">
                  {project.deployed && (
                    <span className="px-2 py-1 text-xs font-medium bg-primary/15 text-highlight rounded-full border border-primary/25 flex items-center gap-1">
                      <Cloud className="w-3 h-3" />
                      Live
                    </span>
                  )}
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-muted-foreground hover:text-highlight transition-colors rounded-lg hover:bg-muted/30"
                    aria-label="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-muted-foreground hover:text-highlight transition-colors rounded-lg hover:bg-muted/30"
                    aria-label="Live Demo"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-highlight transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span key={tag} className="tech-chip text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        {/* GitHub Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-10"
        >
          <a 
            href="https://github.com/rahul-jangir" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-highlight transition-colors font-medium link-underline"
          >
            View all on GitHub
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;