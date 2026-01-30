import { useEffect, useRef, useState } from "react";
import {
  ExternalLink,
  Github,
  Dumbbell,
  MessageCircle,
  TrendingUp,
  Video,
  Plane,
} from "lucide-react";
import { useTheme } from "./ThemeContext";

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(new Set());
  const projectRefs = useRef({});
  const { isDarkMode } = useTheme();

  const projects = [
    {
      id: 1,
      title: "Oceanum Library – GenAI Knowledge Platform (In Progress)",
      description:
        "A Generative AI–powered digital library built using RAG architecture. Enables intelligent document search, semantic retrieval, and context-aware answers using vector databases and LLMs.",
      img: "assets/image.png",
      tags: ["React", "Python", "FastAPI", "RAG", "Vector DB", "LLMs"],
      github: "https://github.com/Satyajit-69/The-Oceanum-Library",
      live: "https://the-oceanum-library.vercel.app/",
      color: "from-orange-400 to-red-500",
      icon: Dumbbell,
    },
    {
      id: 2,
      title: "Meena GPT – AI Chat Assistant",
      description:
        "A fast, responsive AI assistant powered by Google Gemini APIs. Supports real-time conversation, context handling, and scalable backend architecture using Node.js.",
      img: "/meena.png",
      tags: ["React", "Node.js", "MongoDB", "Google Gemini API"],
      github: "https://github.com/Satyajit-69/Meena-Gpt",
      live: "https://meena-gpt.vercel.app/",
      color: "from-sky-400 to-blue-500",
      icon: MessageCircle,
    },
    {
      id: 3,
      title: "StockMates – Real-Time Stock Monitoring Platform",
      description:
        "A real-time stock market dashboard featuring live price updates, technical indicators, and watchlists using WebSocket-based streaming for low-latency updates.",
      img: "/ui.jpg",
      tags: ["React", "WebSocket", "Node.js", "TradingView"],
      github: "https://github.com",
      live: "https://stock-trading-platform-ochre.vercel.app/",
      color: "from-emerald-400 to-teal-500",
      icon: TrendingUp,
    },
    {
      id: 4,
      title: "ConferX – AI-Powered Video Conferencing Platform",
      description:
        "A full-stack video conferencing platform with real-time HD meetings, scheduled & instant rooms, secure JWT authentication, meeting history dashboard, and an AI assistant for in-meeting support. Built using WebRTC and Socket.io with a scalable cloud-deployed backend.",
      img: "/image.png",
      tags: [
        "WebRTC",
        "Socket.io",
        "React",
        "Node.js",
        "MongoDB",
        "JWT",
        "AI Assistant",
      ],
      github: "https://github.com/Satyajit-69/Video-conferencing-platform",
      live: "https://video-conferencing-platform-nine.vercel.app/", // ✅ frontend link
      color: "from-violet-400 to-purple-500",
      icon: Video,
    },
    {
      id: 5,
      title: "TravelWise – Smart Travel Booking Platform",
      description:
        "A full-stack travel booking platform supporting real-time pricing, hotel discovery, itinerary planning, and secure payments with map-based search.",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900",
      tags: ["React.js", "Node.js", "Maps API", "MongoDB"],
      github: "https://github.com",
      live: "https://sigmaproject-aw32.onrender.com",
      color: "from-cyan-400 to-blue-500",
      icon: Plane,
    },
  ];

  useEffect(() => {
    const observers = [];

    projects.forEach((project) => {
      const el = projectRefs.current[project.id];
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleProjects((prev) => new Set([...prev, project.id]));
          }
        },
        { threshold: 0.2 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section
      id="projects"
      className="py-20"
      style={{
        backgroundImage: `url(${isDarkMode ? '/darkproject.jpg' : '/lightproject.svg'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Real-world projects focused on scalability, performance, and modern
            architectures
          </p>
        </div>

        <div className="space-y-14">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const isEven = index % 2 === 0;
            const isVisible = visibleProjects.has(project.id);

            return (
              <div
                key={project.id}
                ref={(el) => (projectRefs.current[project.id] = el)}
                className={`flex flex-col lg:flex-row ${
                  !isEven && "lg:flex-row-reverse"
                } gap-10 items-center rounded-2xl p-6 dark:bg-slate-800/50 bg-gray-50 border dark:border-slate-700 transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="lg:w-1/2 rounded-xl shadow-lg object-cover"
                />

                <div className="lg:w-1/2 space-y-4">
                  <div
                    className={`inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gradient-to-r ${project.color} text-white`}
                  >
                    <Icon className="w-4 h-4" />
                    Project {project.id}
                  </div>

                  <h3 className="text-3xl font-bold dark:text-white">
                    {project.title}
                  </h3>

                  <p className="dark:text-gray-300 text-gray-600">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm rounded-lg dark:bg-slate-700 bg-gray-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      className="flex items-center gap-2 px-5 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700"
                    >
                      <Github className="w-5 h-5" /> Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      className={`flex items-center gap-2 px-5 py-2 rounded-lg bg-gradient-to-r ${project.color} text-white`}
                    >
                      <ExternalLink className="w-5 h-5" /> Live
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
