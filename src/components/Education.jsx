import { useEffect, useRef, useState } from "react";
import ScrollVelocity from "../components/ui/ScrollVeloctiy";

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);

  const educationData = [
    {
      degree: "Bachelor of Science ",
      field: "Computer Science",
      institution: "RRVDM , Utkal University",
      location: "Bhubaneswar,Odisha",
      duration: "2023 - 2026",
      grade: "CGPA: 8.9/10 (Lastly Attended 4th Sem)",
      description:
        "Specialized in CS fundamentals, Data Structures, and Algorithms",
      image: "/assets/college-campus-animate.svg",
    },
    {
      degree: "Higher Secondary (12th)",
      field: "Science Stream",
      institution: "Gsc Higher Secondary School",
      location: "Athagarh,Cuttack",
      duration: "2021-2023",
      grade: "Percentage: 69%",
      description:
        "Focused on Physics, Chemistry, Mathematics and Information Technology",
      image: "/assets/highschool.svg",
    },
    {
      degree: "Secondary School (10th)",
      field: "Matriculation Studies",
      institution: "Sankarpur High School",
      location: "Dhenkanal,Odisha",
      duration: "2019-2021",
      grade: "Percentage: 79%",
      description: "Strong foundation in Mathematics and Science",
      image: "/assets/high-school.svg",
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
        rootMargin: "0px 0px -200px 0px",
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

  return (
    <section id="education" className="py-16 min-h-screen" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          
          <ScrollVelocity
            texts={["My Education"]}
            velocity={90}
            className="custom-scroll-text"
          />
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-12 gap-8 items-start">
          {/* Left Column - Education Cards */}
          <div className="col-span-12 lg:col-span-6 space-y-6">
            {educationData.map((edu, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-12"
                } ${
                  activeIndex === index
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-yellow-300 shadow-2xl scale-100"
                    : "bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700"
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                    <p
                      className={`text-sm font-medium ${
                        activeIndex === index
                          ? "text-blue-100"
                          : "text-blue-600 dark:text-blue-400"
                      }`}
                    >
                      {edu.field}
                    </p>
                  </div>
                  <div
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      activeIndex === index
                        ? "bg-white text-blue-600"
                        : "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200"
                    }`}
                  >
                    {edu.grade}
                  </div>
                </div>

                <div
                  className={`space-y-2 text-sm ${
                    activeIndex === index
                      ? "text-blue-50"
                      : "text-gray-600 dark:text-gray-300"
                  }`}
                >
                  <p className="font-semibold flex items-center gap-2">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                    {edu.institution}
                  </p>
                  <p className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {edu.location}
                  </p>
                  <p className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    {edu.duration}
                  </p>
                </div>

                <p
                  className={`mt-4 text-sm ${
                    activeIndex === index
                      ? "text-white"
                      : "text-gray-700 dark:text-gray-400"
                  }`}
                >
                  {edu.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column - Sliding Image */}
          <div className="col-span-12 lg:col-span-6 sticky top-24">
            <div
              className={`relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 p-8 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-12"
              }`}
            >
              {educationData.map((edu, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ease-in-out ${
                    activeIndex === index
                      ? "opacity-100 translate-y-0 relative"
                      : "opacity-0 translate-y-8 absolute top-0 left-0 right-0"
                  }`}
                  style={{
                    transform:
                      activeIndex === index
                        ? "translateY(0)"
                        : `translateY(${(index - activeIndex) * 20}px)`,
                  }}
                >
                  <img
                    src={edu.image}
                    alt={edu.degree}
                    className="w-full h-[600px] object-contain transform hover:scale-105 transition-transform duration-300"
                  />
                  <div className="mt-6 text-center">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <p className="font-semibold mt-2 text-blue-600 dark:text-blue-400">
                      {edu.institution}
                    </p>
                  </div>
                </div>
              ))}

              {/* Navigation Dots */}
              <div className="flex justify-center gap-3 mt-8">
                {educationData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`transition-all duration-300 rounded-full ${
                      activeIndex === index
                        ? "w-9 h-3 bg-blue-600"
                        : "w-3 h-3 bg-gray-300 dark:bg-gray-500 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
