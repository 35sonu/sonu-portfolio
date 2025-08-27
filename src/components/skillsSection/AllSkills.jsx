import SingleSkill from "./SingleSkill";
import { FaJava, FaAndroid } from "react-icons/fa"; 
import { SiCplusplus, SiPython, SiTensorflow, SiKotlin, SiFirebase } from "react-icons/si";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaLinux,
  FaWindows
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiTypescript,
  SiRedux,
  SiNextdotjs,
  SiPrisma,
  SiPostgresql,
  SiMongodb,
  SiExpress,
  SiPostman,
  SiGithub
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const categories = [
  {
    title: "Languages",
    skills: [
      { name: "C", icon: SiCplusplus },
      { name: "C++", icon: SiCplusplus },
      { name: "Python", icon: SiPython },
      { name: "Java", icon: FaJava },
      // { name: "Kotlin", icon: SiKotlin },
      { name: "JavaScript", icon: IoLogoJavascript },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TailwindCSS", icon: RiTailwindCssFill },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "REST APIs", icon: SiPostman },
    ],
  },
  {
    title: "Databases & Tools",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
      // { name: "Firebase", icon: SiFirebase },
      { name: "Docker", icon: FaDocker },
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: SiGithub },
    ],
  },
  {
    title: "AI/ML & Cloud",
    skills: [
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "AWS", icon: FaAws },
      { name: "Android", icon: FaAndroid },
    ],
  },
  {
    title: "Operating Systems",
    skills: [
      { name: "Linux", icon: FaLinux },
      { name: "Windows", icon: FaWindows },
    ],
  },
];

const AllSkills = () => {
  return (
    <div className="space-y-12 px-6 md:px-0 max-w-[1200px] mx-auto">
      {categories.map((cat, ci) => (
        <motion.div
          key={ci}
          variants={fadeIn("up", 0.2 + ci * 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className=""
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            {cat.title}
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
            {cat.skills.map((skill, si) => (
              <motion.div
                key={si}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex flex-col items-center"
              >
                <SingleSkill
                  text={skill.name}
                  imgSvg={<skill.icon size={36} className="text-cyan-500" />}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default AllSkills;
