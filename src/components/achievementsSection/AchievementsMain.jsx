import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { FaTrophy, FaCertificate, FaCode, FaMedal } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

const AchievementsMain = () => {
  const achievements = [
    {
      id: 1,
      type: "Hackathon",
      title: "Smart India Hackathon",
      subtitle: "Ministry of Education",
      description: "Participant in the prestigious national-level hackathon",
      icon: FaTrophy,
      color: "from-yellow-400 to-orange-500",
      bgGradient: "from-yellow-500/10 to-orange-500/10"
    },
    {
      id: 2,
      type: "Hackathon",
      title: "HackOClock",
      subtitle: "Secured Top rank",
      description: "Top 10 in competitive programming hackathon",
      icon: FaMedal,
      color: "from-blue-400 to-purple-500",
      bgGradient: "from-blue-500/10 to-purple-500/10"
    }
  ];

  const certifications = [
    {
      id: 1,
      title: "Amazon AWS Virtual Internship",
      issuer: "AICTE",
      description: "Cloud computing and AWS services certification",
      icon: FaCertificate,
      color: "from-cyan-400 to-blue-500"
    },
    {
      id: 2,
      title: "Android Development Internship",
      issuer: "Google via AICTE",
      description: "Mobile app development with Android framework",
      icon: FaCertificate,
      color: "from-green-400 to-teal-500"
    },
    {
      id: 3,
      title: "Cisco Networking Academy",
      issuer: "Cisco",
      description: "Networking Basics certification",
      icon: FaCertificate,
      color: "from-purple-400 to-pink-500"
    }
  ];

  const codingProfiles = [
    {
      id: 1,
      platform: "LeetCode",
      achievement: "250+ Problems Solved",
      description: "Strong problem-solving skills in data structures and algorithms",
      icon: SiLeetcode,
      color: "from-orange-400 to-red-500",
      link: "https://leetcode.com/u/35sonu/"
    },
    {
      id: 2,
      platform: "GeeksforGeeks",
      achievement: "200+ Problems Solved",
      description: "Comprehensive understanding of computer science concepts",
      icon: SiGeeksforgeeks,
      color: "from-green-400 to-emerald-500",
      link: "#"
    }
  ];

  return (
    <section id="achievements" className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-900/20">
      {/* Background decorations */}
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-teal-500/10 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-6">
            Achievements & Certifications
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Recognition, certifications, and competitive programming accomplishments
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Hackathons & Competitions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement) => (
              <motion.div
                key={achievement.id}
                whileHover={{ scale: 1.02, y: -5 }}
                className={`p-6 rounded-xl bg-gradient-to-br ${achievement.bgGradient} backdrop-blur-lg border border-white/10 shadow-xl`}
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${achievement.color} mr-4`}>
                    <achievement.icon className="text-white text-xl" />
                  </div>
                  <div>
                    <span className="text-sm text-cyan-400 font-medium">{achievement.type}</span>
                    <h4 className="text-lg font-bold text-white">{achievement.title}</h4>
                    <p className="text-gray-300 text-sm">{achievement.subtitle}</p>
                  </div>
                </div>
                <p className="text-gray-400">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Professional Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <motion.div
                key={cert.id}
                whileHover={{ scale: 1.05, y: -10 }}
                className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-lg border border-gray-700/50 shadow-xl hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className={`p-3 rounded-lg bg-gradient-to-r ${cert.color} w-fit mb-4`}>
                  <cert.icon className="text-white text-xl" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{cert.title}</h4>
                <p className="text-cyan-400 text-sm font-medium mb-2">{cert.issuer}</p>
                <p className="text-gray-400 text-sm">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Coding Profiles */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Coding Profiles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {codingProfiles.map((profile) => (
              <motion.a
                key={profile.id}
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -5 }}
                className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg border border-gray-700/50 shadow-xl hover:border-cyan-500/50 transition-all duration-300 block"
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${profile.color} mr-4`}>
                    <profile.icon className="text-white text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">{profile.platform}</h4>
                    <p className="text-cyan-400 font-medium">{profile.achievement}</p>
                  </div>
                </div>
                <p className="text-gray-400">{profile.description}</p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsMain;
