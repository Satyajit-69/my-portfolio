import { useEffect, useRef, useState } from "react";
import TypewriterText from "./ui/TyperwriterText";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredStat, setHoveredStat] = useState(null);
  const [activeTab, setActiveTab] = useState("journey");
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "./assets/satyajit_sahoo_resume.pdf";
    link.download = "Satyajit_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const stats = [
    {
      label: "Projects Completed",
      value: "15+",
      icon: "🚀",
      color: "from-blue-500 to-cyan-500",
    },
    {
      label: "Technologies Used",
      value: "20+",
      icon: "💻",
      color: "from-purple-500 to-pink-500",
    },
    {
      label: "Lines of Code",
      value: "10K+",
      icon: "📝",
      color: "from-green-500 to-emerald-500",
    },
  ];

  const timeline = [
    {
      year: "2025",
      title: "Mastery In Multiple Technologies",
      description:
        "Mastered multiple technologies like MERN stack , DevOps with AWS , Generative AI and Agentic AI with Python ,Solved around 500 DSA problems in LeetCode.",
      icon: "🎓",
    },
    {
      year: "2024",
      title: "Full Stack Journey Begins",
      description:
        "Started building production-ready web applications with modern tech stack",
      icon: "🎯",
    },
    {
      year: "2023",
      title: "Deep Dive into Development",
      description: "Mastered React, Node.js, and system design principles",
      icon: "💡",
    },
    {
      year: "2022",
      title: "First Steps in Coding",
      description: "Discovered passion for web development and problem-solving",
      icon: "🌱",
    },
  ];

  const interests = [
    {
      name: "Web Development",
      icon: "🌐",
      description: "Building scalable applications",
    },
    {
      name: "System Design",
      icon: "🏗️",
      description: "Architecture & patterns",
    },
    { name: "Fitness", icon: "💪", description: "Staying healthy & active" },
    { name: "Learning", icon: "📚", description: "Continuous improvement" },
    { name: "Problem Solving", icon: "🧩", description: "DSA & algorithms" },
    {
      name: "Open Source",
      icon: "🔓",
      description: "Contributing to community",
    },
  ];

  const tabs = [
    { id: "journey", label: "My Journey", icon: "🗺️" },
    { id: "interests", label: "Interests", icon: "❤️" },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen py-20 px-6  dark:from-slate-950  dark:to-black overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-300/20 dark:bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/20 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-200/10 dark:bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2
            style={{ fontFamily: "Anton SC", fontWeight: "400" }}
            className={`text-5xl md:text-6xl font-bold text-black dark:text-white bg-clip-text  mb-4 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            About Me
          </h2>
          <div
            className={`w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
            }`}
          ></div>
        </div>

        {/* Main Content */}
        <div
          className={`grid md:grid-cols-2 gap-12 mb-20 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Image Section */}
          <div className="flex items-center justify-center">
            <div className="relative group">
              {/* <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div> */}
              <div className="relative p-3">
                <img
                  src="/profilepic2.jpg"
                  alt="Satyajit Sahoo"
                  className="w-100 h-120 object-cover rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4 text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              <p
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "400",
                  fontOpticalSizing: "auto",
                  fontStyle: "inherit",
                }}
                className="transform hover:translate-x-2 transition-transform duration-300"
              >
                I'm a passionate{" "}
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                  Full Stack Developer
                </span>{" "}
                who loves building scalable, clean, and production-ready web
                applications.
              </p>
              <p
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "400",
                  fontOpticalSizing: "auto",
                  fontStyle: "inherit",
                }}
                className="transform hover:translate-x-2 transition-transform duration-300"
              >
                I enjoy solving complex problems and continuously improving my
                system design and development skills. With a strong foundation
                in both frontend and backend technologies, I create seamless
                user experiences backed by robust server-side architecture.
              </p>
              <p
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "400",
                  fontOpticalSizing: "auto",
                  fontStyle: "inherit",
                }}
                className="transform hover:translate-x-2 transition-transform duration-300"
              >
                Outside coding, I focus on{" "}
                <span className="font-semibold text-cyan-600 dark:text-cyan-400">
                  fitness
                </span>{" "}
                and{" "}
                <span className="font-semibold text-purple-600 dark:text-purple-400">
                  personal growth
                </span>
                . I believe in maintaining a healthy work-life balance and
                constantly pushing my boundaries.
              </p>
              <p
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "400",
                  fontOpticalSizing: "auto",
                  fontStyle: "inherit",
                }}
                className="transform hover:translate-x-2 transition-transform duration-300"
              >
                My short-term goal is to secure a{" "}
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  high-impact internship before 2026
                </span>{" "}
                and grow as a software engineer, contributing to innovative
                projects that make a real difference.
              </p>
            </div>

            {/* Download CV Button */}
            <div className="pt-4">
              <button
                onClick={handleDownloadCV}
                className="group relative px-8 py-4 bg-black text-white dark:bg-white dark:text-black font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/50 hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>Download CV</span>
                  <svg
                    className="w-5 h-5 transform group-hover:translate-y-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div
          className={`mb-20 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          
          <h3 className="text-4xl  text-center mb-10 text-slate-800 dark:text-white
          "
          style={{fontFamily : '"Pacifico", cursive'}}
          >
            <TypewriterText 
            
      words={[
        "Quick facts about me <3"
      ]}
      typeSpeed={45}
      deleteSpeed={0}
      pauseDuration={10000000000}
      cursorClassName="dark:text-white  text-black animate-pulse"
            />
          </h3>
          <div className="grid  justify-center grid-cols-4 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div
                key={i}
                onMouseEnter={() => setHoveredStat(i)}
                onMouseLeave={() => setHoveredStat(null)}
                className="relative group"
              >
                <div
                  className={`relative p-8 rounded-2xl bg-white dark:bg-white border-2 border-slate-200 dark:border-slate-700 transition-all duration-500 ${
                    hoveredStat === i
                      ? "scale-110 shadow-2xl border-transparent"
                      : "hover:scale-105 "
                  }`}
                >
                  {/* Gradient Border on Hover */}
                  {hoveredStat === i && (
                    <div
                      className={`absolute inset-0 bg-${stat.color} rounded-2xl blur opacity-75 -z-10`}
                    ></div>
                  )}

                  <div className="text-5xl mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    {stat.icon}
                  </div>
                  <div
                    className={`text-4xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-slate-600 dark:text-slate-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tabbed Content Section */}
        <div
          className={`mb-20 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Tabs */}
          <div className="flex justify-center mb-12 gap-4 flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-black  text-white shadow-lg shadow-cyan-500/50 scale-105"
                    : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:shadow-lg border-2 border-slate-200 dark:border-slate-700"
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="min-h-[400px]">
            {/* Journey Tab */}
            {activeTab === "journey" && (
              <div className="space-y-8 animate-fadeIn">
                <h3 className="text-3xl font-bold text-center mb-12  text-black dark:text-white">
                  My Coding Journey
                </h3>
                <div className="relative">
                  {/* Timeline Line */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-black dark:bg-white  rounded-full"></div>

                  {timeline.map((item, index) => (
                    <div
                      key={index}
                      className={`relative mb-16 ${
                        index % 2 === 0 ? "md:text-right" : "md:text-left"
                      }`}
                    >
                      <div
                        className={`md:w-1/2 ${index % 2 === 0 ? "md:ml-auto md:pl-12" : "md:mr-auto md:pr-12"}`}
                      >
                        <div className="group bg-black text-white dark:bg-white dark:text-black p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-slate-200 dark:border-slate-700 hover:border-cyan-500 dark:hover:border-cyan-500">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="text-3xl group-hover:scale-125 transition-transform duration-300">
                              {item.icon}
                            </span>
                            <span className="text-2xl font-bold ">
                              {item.year}
                            </span>
                          </div>
                          <h4 className="text-xl font-bold mb-2 text-yellow-400">
                            {item.title}
                          </h4>
                          <p className="">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      {/* Timeline Dot */}
                      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full border-4 border-white dark:border-slate-900 shadow-lg"></div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Interests Tab */}
            {activeTab === "interests" && (
              <div className="animate-fadeIn">
                <h3 className="text-3xl font-bold text-center mb-12 text-slate-800 dark:text-white">
                  What I'm Passionate About
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {interests.map((interest, index) => (
                    <div
                      key={index}
                      className="group relative p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-slate-200 dark:border-slate-700 hover:border-cyan-500 dark:hover:border-cyan-500 hover:scale-105"
                    >
                      <div className="text-5xl mb-4 group-hover:scale-110 group-hover:rotate-180 transition-all duration-500">
                        {interest.icon}
                      </div>
                      <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                        {interest.name}
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400">
                        {interest.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

       
      </div>

      {/* Add animation styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </section>
  );
};

export default About;
