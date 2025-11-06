import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { fadeIn } from "../../framerMotion/variants";
import { FiChevronRight } from "react-icons/fi";

const AboutMeText = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="flex flex-col gap-8 md:items-start sm:items-center md:text-left sm:text-center px-6 md:px-0"
      id="about"
    >
      {/* Section Title */}
      <motion.h2
        variants={fadeIn("down", 0.4)}
        className="text-5xl sm:text-6xl font-extrabold uppercase bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-400 mb-4"
      >
        About Me
      </motion.h2>

      {/* Intro Paragraph */}
      <motion.p
        variants={fadeIn("up", 0.5)}
        className="max-w-2xl text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
      >
        I'm <strong>Sonu Kumar</strong>, a Trainee Decision Scientist at <strong>Mu Sigma</strong> with expertise in Data Analytics, Machine Learning, and Full-Stack Development. I transform complex data into actionable insights and build intelligent solutions that drive business decisions.
      </motion.p>

      {/* What I Bring */}
      <motion.div
        variants={fadeIn("up", 0.6)}
        className="max-w-2xl space-y-4"
      >
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          What I Bring to the Table:
        </h3>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <FiChevronRight className="mt-1 text-cyan-500" size={20} />
            <span className="text-gray-700 dark:text-gray-300">
              <strong>Data Analytics & ML:</strong> Expertise in Python, Pandas, Scikit-learn for predictive modeling. Built ML models with 59.9% R² accuracy for student performance analysis. Proficient in statistical analysis and data visualization.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <FiChevronRight className="mt-1 text-cyan-500" size={20} />
            <span className="text-gray-700 dark:text-gray-300">
              <strong>AI & Deep Learning:</strong> Built CNN models with 94% accuracy using TensorFlow and MobileNetV2. Experience in computer vision, NLP, and developing intelligent systems for real-world applications.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <FiChevronRight className="mt-1 text-cyan-500" size={20} />
            <span className="text-gray-700 dark:text-gray-300">
              <strong>Full-Stack Development:</strong> Proficient in React, Next.js, Node.js, Express, and both SQL (PostgreSQL) and NoSQL (MongoDB) databases. Built scalable applications with modern tech stacks.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <FiChevronRight className="mt-1 text-cyan-500" size={20} />
            <span className="text-gray-700 dark:text-gray-300">
              <strong>Cloud & DevOps:</strong> Hands-on experience with AWS, Docker containerization, and Firebase. Certified in Amazon AWS and Android development through AICTE programs.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <FiChevronRight className="mt-1 text-cyan-500" size={20} />
            <span className="text-gray-700 dark:text-gray-300">
              <strong>Problem Solving:</strong> Solved 250+ problems on LeetCode and 200+ on GeeksforGeeks. Participated in Smart India Hackathon and secured Runner-up position in HackOClock.
            </span>
          </li>
        </ul>
      </motion.div>

      {/* Call‑to‑Action Button */}
      <motion.button
        variants={fadeIn("up", 0.7)}
        className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-teal-500 hover:to-cyan-500 text-white font-medium px-6 py-3 rounded-full transition-all duration-300"
      >
        <Link
          to="projects"
          spy={true}
          smooth={true}
          duration={600}
          offset={-120}
          className="cursor-pointer"
        >
          My Projects
        </Link>
        <FiChevronRight size={20} />
      </motion.button>
    </motion.div>
  );
};

export default AboutMeText;
