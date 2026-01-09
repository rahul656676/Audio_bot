import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Cloud, Plane, Brain, MessageSquare, Server, Mic } from "lucide-react";

const projects = [
  {
    title: "AI Audio Conversational Chatbot",
    description: "Real-time voice interaction system with advanced speech-to-text processing. Features natural language understanding with contextual conversation flow and multi-turn dialogue support.",
    tags: ["Python", "NLP", "Speech-to-Text", "Audio Processing", "Real-time"],
    icon: Mic,
    color: "from-primary to-accent",
    highlight: "Voice AI",
  },
  {
    title: "AI Text Chatbot",
    subtitle: "AWS Cloud Deployment",
    description: "Production-grade conversational AI deployed on AWS infrastructure. Backend architecture using EC2, S3 for storage, Aurora database for scalability, and RDS for reliable data management.",
    tags: ["Python", "AWS EC2", "S3", "Aurora DB", "RDS", "NLP"],
    icon: MessageSquare,
    color: "from-accent to-primary",
    highlight: "Live on AWS",
    deployed: true,
  },
  {
    title: "AI Travel Agent System",
    description: "Intelligent travel assistant that processes journey parameters to generate optimized booking links with dynamic pricing. End-to-end Python backend for automated cost calculations.",
    tags: ["Python", "AWS RDS", "API Integration", "ML", "Automation"],
    icon: Plane,
    color: "from-primary/90 to-accent/90",
    highlight: "Smart Automation",
    deployed: true,
  },
  {
    title: "ML Model Development Pipeline",
    description: "Comprehensive machine learning workflow including data preprocessing, feature engineering, hyperparameter optimization, and model evaluation with production-ready deployment patterns.",
    tags: ["Scikit-learn", "Pandas", "NumPy", "Model Evaluation", "MLOps"],
    icon: Brain,
    color: "from-accent/90 to-primary/90",
    highlight: "End-to-End ML",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-20 md:py-28 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
      
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
              <span className="text-gradient">Featured Projects</span>
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/40 to-transparent" />
          </div>
          <p className="section-subtitle">
            A selection of AI and machine learning projects I've built, from conversational systems to cloud-deployed solutions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass-3d rounded-2xl overflow-hidden card-hover"
            >
              {/* Header */}
              <div className="p-6 pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${project.color} shadow-lg`}>
                    <project.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div className="flex items-center gap-2">
                    {project.deployed && (
                      <span className="px-2.5 py-1 text-xs font-medium bg-primary/15 text-highlight rounded-full border border-primary/25 flex items-center gap-1.5">
                        <Server className="w-3 h-3" />
                        AWS
                      </span>
                    )}
                    <motion.button 
                      className="p-2 text-muted-foreground hover:text-highlight transition-colors rounded-lg hover:bg-muted/30"
                      whileHover={{ scale: 1.1 }}
                      aria-label="View on GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </motion.button>
                    <motion.button 
                      className="p-2 text-muted-foreground hover:text-highlight transition-colors rounded-lg hover:bg-muted/30"
                      whileHover={{ scale: 1.1 }}
                      aria-label="View live project"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>

                {/* Badge */}
                <span className="inline-block px-2.5 py-1 text-xs font-mono text-highlight bg-primary/10 rounded-md border border-primary/20 mb-3">
                  {project.highlight}
                </span>

                {/* Content */}
                <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-highlight transition-colors">
                  {project.title}
                </h3>
                {project.subtitle && (
                  <p className="text-sm text-highlight font-medium mb-2">{project.subtitle}</p>
                )}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>

              {/* Tags */}
              <div className="px-6 pb-6">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-mono text-muted-foreground bg-muted/40 rounded-md border border-border/30 hover:border-primary/30 hover:text-highlight transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View More Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-10"
        >
          <a 
            href="https://github.com/rahul-jangir" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-highlight transition-colors font-medium link-underline"
          >
            View more on GitHub
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
