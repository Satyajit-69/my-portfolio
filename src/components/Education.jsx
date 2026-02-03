import { useEffect, useRef, useState } from "react";

// Mock ScrollVelocity component with infinite scroll
const ScrollVelocity = ({ texts, velocity, className }) => {
  const repeatedTexts = [...texts, ...texts, ...texts, ...texts];
  
  return (
    <div className={`overflow-hidden ${className}`}>
      <div className="flex gap-8 animate-scroll">
        {repeatedTexts.map((text, i) => (
          <h2 key={i} className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent whitespace-nowrap">
            {text}
          </h2>
        ))}
      </div>
    </div>
  );
};

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);

  const educationData = [
    {
      degree: "Bachelor of Science",
      field: "Computer Science",
      institution: "RRVDM, Utkal University",
      location: "Bhubaneswar, Odisha",
      duration: "2023 - 2026",
      grade: "CGPA: 8.9/10",
      semester: "Currently in 4th Semester",
      description:
        "Specialized in CS fundamentals, Data Structures, and Algorithms with hands-on experience in modern development practices.",
      achievements: [
        "Top 10% of the class",
        "Active member of Tech Club",
        "Participated in multiple hackathons"
      ],
      color: "from-blue-500 to-purple-600",
    },
    {
      degree: "Higher Secondary (12th)",
      field: "Science Stream",
      institution: "GSC Higher Secondary School",
      location: "Athagarh, Cuttack",
      duration: "2021 - 2023",
      grade: "69%",
      semester: "Completed",
      description:
        "Focused on Physics, Chemistry, Mathematics and Information Technology with strong analytical foundation.",
      achievements: [
        "IT Project Excellence Award",
        "Science Exhibition Participant",
        "Sports Team Member"
      ],
      color: "from-green-500 to-emerald-600",
    },
    {
      degree: "Secondary School (10th)",
      field: "Matriculation Studies",
      institution: "Sankarpur High School",
      location: "Dhenkanal, Odisha",
      duration: "2019 - 2021",
      grade: "79%",
      semester: "Completed",
      description:
        "Strong foundation in Mathematics and Science with consistent academic performance.",
      achievements: [
        "Math Olympiad Participant",
        "Perfect Attendance Award",
        "Class Representative"
      ],
      color: "from-orange-500 to-red-600",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const IconComponent = activeIndex === 0 ? "🎓" : activeIndex === 1 ? "📚" : "🏫";

  return (
    <section 
      id="education" 
      className="py-20 min-h-screen dark:bg-black bg-white relative overflow-hidden" 
      ref={sectionRef}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 dark:bg-purple-500/10 bg-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 dark:bg-blue-500/10 bg-blue-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold rounded-full shadow-lg animate-pulse">
              🎓 Academic Journey
            </span>
          </div>
          <ScrollVelocity
            texts={["My Education"]}
            velocity={90}
            className="mb-4"
          />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A journey through academic excellence and continuous learning
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-12 gap-8 items-start">
          {/* Left Column - Education Cards */}
          <div className="col-span-12 lg:col-span-6 space-y-6">
            {educationData.map((edu, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`group p-6 rounded-2xl cursor-pointer transition-all duration-500 transform hover:scale-[1.02] ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-12"
                } ${
                  activeIndex === index
                    ? `bg-gradient-to-r ${edu.color} text-white shadow-2xl scale-[1.02]`
                    : "dark:bg-slate-800/50 bg-gray-50 dark:text-gray-100 text-gray-900 shadow-lg hover:shadow-xl dark:border-slate-700/50 border-gray-200 border"
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-xl ${
                        activeIndex === index 
                          ? "bg-white/20" 
                          : "dark:bg-slate-700 bg-gray-200"
                      }`}>
                        {index === 0 ? "🎓" : index === 1 ? "📚" : "🏫"}
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold">{edu.degree}</h3>
                        <p className={`text-sm font-medium ${
                          activeIndex === index
                            ? "text-white/90"
                            : "text-blue-600 dark:text-blue-400"
                        }`}>
                          {edu.field}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={`px-3 py-1.5 rounded-full text-xs font-bold ${
                    activeIndex === index
                      ? "bg-white/20 backdrop-blur-sm text-white"
                      : "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200"
                  }`}>
                    {edu.grade}
                  </div>
                </div>

                {/* Details */}
                <div className={`space-y-2 text-sm mb-4 ${
                  activeIndex === index
                    ? "text-white/90"
                    : "text-gray-600 dark:text-gray-300"
                }`}>
                  <p className="flex items-center gap-2 font-medium">
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    {edu.institution}
                  </p>
                  <p className="flex items-center gap-2">
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {edu.location}
                  </p>
                  <p className="flex items-center gap-2">
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {edu.duration}
                  </p>
                </div>

                {/* Description */}
                <p className={`text-sm mb-4 ${
                  activeIndex === index
                    ? "text-white"
                    : "text-gray-700 dark:text-gray-400"
                }`}>
                  {edu.description}
                </p>

                {/* Achievements */}
                <div className="space-y-2">
                  <p className={`text-xs font-semibold uppercase tracking-wide ${
                    activeIndex === index ? "text-white/80" : "text-gray-500 dark:text-gray-400"
                  }`}>
                    Highlights
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement, idx) => (
                      <span
                        key={idx}
                        className={`text-xs px-3 py-1 rounded-full ${
                          activeIndex === index
                            ? "bg-white/20 text-white"
                            : "dark:bg-slate-700 bg-gray-200 dark:text-gray-300 text-gray-700"
                        }`}
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Visual Display */}
          <div className="col-span-12 lg:col-span-6 lg:sticky lg:top-24 min-h-full">
            <div
              className={`relative overflow-hidden rounded-2xl shadow-2xl dark:bg-slate-800/50 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-900 dark:to-slate-800 dark:border-slate-700/50 border-gray-200 border p-8 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-12"
              }`}
            >
              {/* Large Icon Display */}
              <div className="text-center mb-8">
                <div className={`inline-flex items-center justify-center w-32 h-32 rounded-3xl bg-gradient-to-r ${educationData[activeIndex].color} shadow-2xl mb-6 animate-bounce-slow`}>
                  <span className="text-6xl">
                    {activeIndex === 0 ? "🎓" : activeIndex === 1 ? "📚" : "🏫"}
                  </span>
                </div>
                <h3 className="text-3xl font-bold dark:text-white text-gray-900 mb-2">
                  {educationData[activeIndex].degree}
                </h3>
                <p className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {educationData[activeIndex].institution}
                </p>
                <p className="text-sm dark:text-gray-400 text-gray-600 mt-2">
                  {educationData[activeIndex].semester}
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center p-4 rounded-xl dark:bg-slate-700/50 bg-white border dark:border-slate-600 border-gray-200">
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {educationData[activeIndex].grade.split(':')[1]?.trim() || educationData[activeIndex].grade}
                  </div>
                  <div className="text-xs dark:text-gray-400 text-gray-600 mt-1">Academic Score</div>
                </div>
                <div className="text-center p-4 rounded-xl dark:bg-slate-700/50 bg-white border dark:border-slate-600 border-gray-200">
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {educationData[activeIndex].duration.split('-')[0].trim()}
                  </div>
                  <div className="text-xs dark:text-gray-400 text-gray-600 mt-1">Start Year</div>
                </div>
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center gap-3">
                {educationData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`transition-all duration-300 rounded-full ${
                      activeIndex === index
                        ? "w-10 h-3 bg-gradient-to-r from-blue-600 to-purple-600"
                        : "w-3 h-3 dark:bg-gray-600 bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`View ${educationData[index].degree}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
        .animate-scroll {
          animation: scroll 15s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Education;