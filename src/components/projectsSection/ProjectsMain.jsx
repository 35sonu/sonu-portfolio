import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import ProjectCard from "./ProjectCard";

const ProjectsMain = () => {
  const projects = [
    {
      id: 1,
      name: "Student Performance Analysis",
      year: "2024",
      description: "ML-powered academic performance predictor and analytics system",
      technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Excel"],
      achievements: [
        "Linear Regression model with 59.9% accuracy (R² score)",
        "Identified attendance as strongest predictor (0.99 correlation)",
        "Analyzed 200 students to provide early-warning system"
      ],
      links: {
        github: "github.com/35sonu/Student-Performance-Analysis",
        demo: "#"
      },
      gradientColors: ["#8b5cf6", "#7c3aed", "#6d28d9"], // Purple to Violet
      accentColor: "from-purple-500 to-violet-600"
    },

    {
      id: 2,
      name: "WasteWise – Smart Waste Management Platform",
      year: "2024",
      description: "AI-powered waste classifier with smart management dashboard",
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "Docker", "AWS", "TensorFlow"],
      achievements: [
        "Built CNN model with 94% accuracy using MobileNetV2",
        "FastAPI backend with geolocation tracking via Leaflet.js",
        "Admin dashboard with data filters and optimized routes"
      ],
      links: {
        github: "github.com/35sonu/Smart-Waste-Management",
        demo: "#"
      },
      gradientColors: ["#10b981", "#059669", "#047857"], // Green to Emerald to Teal
      accentColor: "from-green-500 to-emerald-600"
    },

    {
      id: 3,
      name: "Affiliate Postback Tracking System",
      year: "2024",
      description: "Real-time affiliate tracking system for clicks and conversions",
      technologies: ["Node.js", "Express", "PostgreSQL", "Next.js"],
      achievements: [
        "Real-time affiliate conversion tracking",
        "Advanced fraud detection algorithms",
        "Analytics dashboard with performance trends"
      ],
      links: {
        github: "github.com/35sonu/affiliate-postback-system",
        demo: "#"
      },
      gradientColors: ["#06b6d4", "#3b82f6", "#6366f1"], // Cyan to Blue to Indigo
      accentColor: "from-cyan-500 to-blue-600"
    },

    {
      id: 4,
      name: "QuoteSpace – Daily Quote App",
      year: "2024",
      description: "Beautiful React Native app for daily motivation and inspiration",
      technologies: ["React Native", "AsyncStorage", "Axios", "React Navigation"],
      achievements: [
        "Integrated quotable.io API with smooth animations",
        "Local favorites management with AsyncStorage",
        "10+ animated gradient backgrounds with share functionality"
      ],
      links: {
        github: "github.com/35sonu/QuoteSpace-React-Native-App",
        demo: "#"
      },
      gradientColors: ["#ec4899", "#f43f5e", "#ef4444"], // Pink to Rose to Red
      accentColor: "from-pink-500 to-rose-600"
    },

    {
      id: 5,
      name: "Smart Farming Platform",
      year: "2024",
      description: "Android app connecting farmers with markets and AI support",
      technologies: ["Android", "Firebase", "AI Chatbot"],
      achievements: [
        "Served 50+ test users with crop prices and logistics",
        "Firebase Auth & Realtime DB integration",
        "Improved farmer-market reach by 40% in pilot testing"
      ],
      links: {
        github: "https://github.com/35sonu/Smart-Farming-Platform",
        demo: "#"
      },
      gradientColors: ["#f59e0b", "#f97316", "#ea580c"], // Amber to Orange to Red
      accentColor: "from-amber-500 to-orange-600"
    }
  ];

  return (
    <section id="projects" className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8 bg-gray-900">
      {/* Floating particles background */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/5 backdrop-blur-sm"
          initial={{ 
            x: Math.random() * 100 - 50,
            y: Math.random() * 100 - 50,
            scale: 0,
            opacity: 0
          }}
          animate={{ 
            x: Math.random() * 2000 - 1000,
            y: Math.random() * 2000 - 1000,
            scale: Math.random() * 0.5 + 0.5,
            opacity: [0, 0.1, 0]
          }}
          transition={{
            duration: Math.random() * 30 + 30,
            repeat: Infinity,
            delay: i * 2,
            ease: "linear"
          }}
          style={{
            width: `${Math.random() * 20 + 10}px`,
            height: `${Math.random() * 20 + 10}px`,
          }}
        />
      ))}

      {/* Gradient spotlight */}
      <div className="absolute top-0 left-1/2 w-full max-w-3xl h-96 bg-gradient-to-b from-cyan-500/20 to-transparent rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Animated header */}
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-6"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%"]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
          >
            Featured Projects
          </motion.h2>
          
          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Production-grade applications built with cutting-edge technologies and innovative solutions
          </motion.p>
          
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-8 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.4 }}
          />
        </motion.div>

        {/* Projects grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            show: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        {/* View more button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.a
            href="https://github.com/35sonu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-500 hover:to-blue-600 transition-all shadow-lg hover:shadow-cyan-500/20 relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
          >
            <span className="relative z-10">View All Projects</span>
            <motion.div 
              className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsMain;