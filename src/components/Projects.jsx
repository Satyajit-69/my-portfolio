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
import CardSwap, { Card } from "./ui/CardSwap";

// Inject Raleway from Google Fonts once
const fontLink = document.createElement("link");
fontLink.href = "https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700;800&display=swap";
fontLink.rel = "stylesheet";
if (!document.head.querySelector("[href*='Raleway']")) {
  document.head.appendChild(fontLink);
}

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
      images: [
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      ],
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
      images: [
        "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=600&h=400&fit=crop",
      ],
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
      images: [
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=600&h=400&fit=crop",
      ],
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
      images: [
        "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600&h=400&fit=crop",
      ],
      tags: ["WebRTC", "Socket.io", "React", "Node.js", "MongoDB", "JWT", "AI Assistant"],
      github: "https://github.com/Satyajit-69/Video-conferencing-platform",
      live: "https://video-conferencing-platform-nine.vercel.app/",
      color: "from-violet-400 to-purple-500",
      icon: Video,
    },
    {
      id: 5,
      title: "TravelWise – Smart Travel Booking Platform",
      description:
        "A full-stack travel booking platform supporting real-time pricing, hotel discovery, itinerary planning, and secure payments with map-based search.",
      images: [
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&h=400&fit=crop",
      ],
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
          if (entry.isIntersecting)
            setVisibleProjects((prev) => new Set([...prev, project.id]));
        },
        { threshold: 0.15 },
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const f = "'Raleway', sans-serif";

  /* ── Text block ── */
  const TextBlock = ({ project }) => {
    const Icon = project.icon;
    return (
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "20px", justifyContent: "center", minWidth: 0 }}>

        {/* Icon + Title */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
          <div
            className={`p-2.5 rounded-xl bg-gradient-to-br ${project.color} shadow-lg`}
            style={{ flexShrink: 0, marginTop: "4px" }}
          >
            <Icon className="w-5 h-5 text-white" />
          </div>
          <h3
            className="text-black dark:text-white"
            style={{ fontFamily: f, fontSize: "1.6rem", fontWeight: 800, lineHeight: 1.3, letterSpacing: "-0.02em" }}
          >
            {project.title}
          </h3>
        </div>

        {/* Description */}
        <p
          className="text-gray-500 dark:text-gray-400"
          style={{ fontFamily: f, fontSize: "0.95rem", fontWeight: 400, lineHeight: 1.75 }}
        >
          {project.description}
        </p>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`bg-gradient-to-r ${project.color} text-white shadow-sm`}
              style={{ fontFamily: f, fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.06em", padding: "4px 12px", borderRadius: "999px", textTransform: "uppercase" }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div style={{ display: "flex", gap: "12px" }}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="border dark:border-slate-600 border-gray-300 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 transition"
            style={{ fontFamily: f, fontWeight: 600, fontSize: "0.85rem", display: "flex", alignItems: "center", gap: "8px", padding: "8px 18px", borderRadius: "8px" }}
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-gradient-to-r ${project.color} text-white shadow hover:opacity-90 transition`}
            style={{ fontFamily: f, fontWeight: 600, fontSize: "0.85rem", display: "flex", alignItems: "center", gap: "8px", padding: "8px 18px", borderRadius: "8px" }}
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </a>
        </div>
      </div>
    );
  };

  /* ── CardSwap image block ── */
  const ImageBlock = ({ project, tiltSide }) => (
    <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", minWidth: 0, height: "360px", position: "relative" }}>
      <CardSwap width={340} height={240} cardDistance={30} verticalDistance={30} delay={4000} pauseOnHover={true} tiltSide={tiltSide}>
        {project.images.map((imgSrc, i) => (
          <Card key={i}>
            <img src={imgSrc} alt={`${project.title} screenshot ${i + 1}`} style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px", display: "block" }} />
          </Card>
        ))}
      </CardSwap>
    </div>
  );

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2
            className="text-black dark:text-white mb-4"
            style={{ fontFamily: f, fontSize: "clamp(2.4rem, 5vw, 3.8rem)", fontWeight: 800, letterSpacing: "-0.03em" }}
          >
            Featured Projects
          </h2>
          <p
            className="text-gray-400 mt-4 max-w-2xl mx-auto"
            style={{ fontFamily: f, fontWeight: 400, fontSize: "1rem", lineHeight: 1.7 }}
          >
            Real-world projects focused on scalability, performance, and modern architectures
          </p>
        </div>

        {/* Project rows */}
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;
          const isVisible = visibleProjects.has(project.id);

          return (
            <div
              key={project.id}
              className="isDark:border-white border-black"
              ref={(el) => (projectRefs.current[project.id] = el)}
              style={{
                marginTop: "64px",
                marginBottom: "64px",
                transition: "opacity 0.7s ease, transform 0.7s ease",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(40px)",
              }}
            >
              <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "64px", padding: "3rem" }}>
                {isEven ? (
                  <>
                    <TextBlock project={project} />
                    <ImageBlock project={project} tiltSide="right" />
                  </>
                ) : (
                  <>
                    <ImageBlock project={project} tiltSide="left" />
                    <TextBlock project={project} />
                  </>
                )}
              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
};

export default Projects;