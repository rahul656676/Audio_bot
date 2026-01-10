import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Linkedin, Cloud, Plane, Brain, MessageSquare, Mic, Code } from "lucide-react";

const LINKEDIN_URL = "https://linkedin.com/in/rahul-jangir-929a65305";

const projects = [
  {
    title: "AI Audio Conversational Chatbot",
    description: "Real-time voice interaction system with speech-to-text processing, natural language understanding, and multi-turn dialogue support.",
    tags: ["Python", "NLP", "Speech-to-Text", "Audio Processing"],
    icon: Mic,
    span: "md:col-span-2",
  },
  {
    title: "AI Text Chatbot",
    description: "Production-grade conversational AI deployed on AWS with EC2, S3 storage, Aurora database, and RDS.",
    tags: ["Python", "AWS EC2", "S3", "Aurora DB", "RDS"],
    icon: MessageSquare,
    deployed: true,
    span: "md:col-span-1",
  },
  {
    title: "AI Travel Agent System",
    description: "Intelligent travel assistant generating optimized booking links with dynamic pricing and automated cost calculations.",
    tags: ["Python", "AWS RDS", "API Integration", "ML"],
    icon: Plane,
    deployed: true,
    span: "md:col-span-1",
  },
  {
    title: "ML Model Pipeline",
    description: "End-to-end ML workflow with data preprocessing, feature engineering, hyperparameter tuning, and production deployment.",
    tags: ["Scikit-learn", "Pandas", "NumPy", "MLOps"],
    icon: Brain,
    span: "md:col-span-2",
  },
  {
    title: "Generative AI Projects",
    description: "Working on cutting-edge Generative AI and Machine Learning projects, exploring real-world AI applications.",
    tags: ["Generative AI", "Python", "Linux", "ML"],
    icon: Code,
    span: "md:col-span-3",
    featured: true,
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cardVariants = {
    hidden: { opacity: 0, y: 60, rotateX: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: i * 0.12,
        duration: 0.7,
      },
    }),
  };

  return (
    <section id="projects" className="py-16 sm:py-24 md:py-32 relative" ref={ref}>
      {/* Background elements */}
      <motion.div 
        className="absolute top-1/2 right-0 w-[300px] sm:w-[450px] md:w-[600px] h-[300px] sm:h-[450px] md:h-[600px] bg-primary/6 rounded-full blur-[140px] sm:blur-[200px] -translate-y-1/2"
        animate={{ scale: [1, 1.25, 1], opacity: [0.06, 0.12, 0.06] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14 md:mb-16"
        >
          <motion.h2 
            className="section-title mb-3 sm:mb-4"
            initial={{ opacity: 0, y: 20, rotateX: -15 }}
            animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-gradient">Featured Projects</span>
          </motion.h2>
          <motion.p 
            className="section-subtitle mx-auto px-2"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            AI and machine learning solutions from conversational systems to cloud-deployed applications.
          </motion.p>
        </motion.div>

        {/* Bento Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6" style={{ perspective: '1000px' }}>
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{ 
                y: -10, 
                rotateX: 6, 
                rotateY: -4,
                scale: 1.02,
                transition: { duration: 0.35 }
              }}
              className={`glass-card border-glow rounded-2xl p-4 sm:p-5 md:p-6 group cursor-pointer block ${project.span} ${project.featured ? 'ring-1 ring-primary/30' : ''}`}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="flex items-start justify-between mb-4 sm:mb-5">
                <motion.div 
                  className={`p-2.5 sm:p-3 md:p-3.5 rounded-xl bg-gradient-primary ${project.featured ? 'ring-2 ring-primary/40' : ''}`}
                  style={{ boxShadow: '0 10px 25px hsl(210, 100%, 55%, 0.35)' }}
                  whileHover={{ scale: 1.12, rotate: 6 }}
                >
                  <project.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
                </motion.div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  {project.deployed && (
                    <motion.span 
                      className="px-2 sm:px-2.5 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium bg-primary/18 text-highlight rounded-full border border-primary/35 flex items-center gap-1 sm:gap-1.5"
                      animate={{ boxShadow: ['0 0 12px hsl(210, 100%, 55%, 0.25)', '0 0 25px hsl(210, 100%, 55%, 0.45)', '0 0 12px hsl(210, 100%, 55%, 0.25)'] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Cloud className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                      <span className="hidden xs:inline">Live</span>
                    </motion.span>
                  )}
                  <motion.div 
                    className="p-1.5 sm:p-2 text-muted-foreground group-hover:text-highlight transition-colors rounded-lg group-hover:bg-muted/30"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  >
                    <Linkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </motion.div>
                  <motion.div 
                    className="p-1.5 sm:p-2 text-muted-foreground group-hover:text-highlight transition-colors rounded-lg group-hover:bg-muted/30"
                    whileHover={{ scale: 1.2, rotate: -10 }}
                  >
                    <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </motion.div>
                </div>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-foreground mb-1.5 sm:mb-2 group-hover:text-highlight transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {project.tags.map((tag, i) => (
                  <motion.span 
                    key={tag} 
                    className="tech-chip"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 + i * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>

        {/* LinkedIn Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-8 sm:mt-10 md:mt-12"
        >
          <motion.a 
            href={LINKEDIN_URL}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-highlight transition-colors font-medium link-underline text-sm sm:text-base"
            whileHover={{ x: 5 }}
          >
            <Linkedin className="w-4 h-4" />
            View all projects on LinkedIn
            <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;