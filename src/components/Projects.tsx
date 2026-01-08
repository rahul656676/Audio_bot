import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Cloud, Plane, Brain } from "lucide-react";

const projects = [
  {
    title: "AI Audio Conversational Chatbot",
    description: "Developed an AI-powered audio chatbot supporting real-time voice interaction. Implemented speech-to-text processing and NLP-based response logic in Python. Deployed on AWS EC2 with S3 for asset storage and RDS/Aurora for conversation data.",
    tags: ["Python", "AWS EC2", "S3", "RDS/Aurora", "NLP", "Speech-to-Text"],
    icon: Cloud,
    gradient: "from-primary to-blue-500",
    deployed: true,
  },
  {
    title: "Intelligent AI Travel Agent System",
    description: "Built an AI-driven travel assistant that collects source, destination, date, and time to generate booking website links with dynamic price estimation. Implemented backend logic in Python for end-to-end journey cost calculation.",
    tags: ["Python", "AWS RDS", "API Integration", "Machine Learning"],
    icon: Plane,
    gradient: "from-accent to-pink-500",
    deployed: true,
  },
  {
    title: "Machine Learning Model Development",
    description: "Implemented regression and classification models using Scikit-learn. Conducted data cleaning, feature selection, hyperparameter tuning, and model evaluation on structured datasets.",
    tags: ["Scikit-learn", "Pandas", "NumPy", "Model Evaluation"],
    icon: Brain,
    gradient: "from-green-500 to-primary",
    deployed: false,
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-gradient">Projects</span>
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group glass p-6 rounded-2xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 flex flex-col"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient} opacity-80`}>
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center gap-2">
                    {project.deployed && (
                      <span className="px-2 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full">
                        AWS Deployed
                      </span>
                    )}
                    <button className="p-2 text-muted-foreground hover:text-primary transition-colors">
                      <Github className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-mono text-muted-foreground bg-muted rounded"
                    >
                      {tag}
                    </span>
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
