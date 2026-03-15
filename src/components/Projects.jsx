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



// Inject fonts: Playfair Display for headings, Raleway for body
(() => {
  if (!document.head.querySelector("[href*='Playfair']")) {
    const l = document.createElement("link");
    l.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Raleway:wght@400;500;600;700;800&display=swap";
    l.rel = "stylesheet";
    document.head.appendChild(l);
  }

  // Inject responsive styles
  if (!document.head.querySelector("#projects-responsive")) {
    const style = document.createElement("style");
    style.id = "projects-responsive";
    style.textContent = `
      .project-row {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 56px;
        padding: 2.5rem;
        border-radius: 20px;
        border: 1.5px solid rgba(0,0,0,0.12);
      }
      .dark .project-row {
        border-color: rgba(255,255,255,0.12);
      }
      .project-image-block {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 0;
        height: 360px;
        position: relative;
      }
      .project-text-block {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 18px;
        justify-content: center;
        min-width: 0;
      }
      @media (max-width: 768px) {
        .project-row {
          flex-direction: column !important;
          gap: 32px;
          padding: 1.5rem;
        }
        .project-image-block {
          width: 100%;
          height: 260px;
          order: 0 !important;
        }
        .project-text-block {
          width: 100%;
          order: 1 !important;
        }
      }
    `;
    document.head.appendChild(style);
  }
})();

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(new Set());
  const projectRefs = useRef({});
  const { isDarkMode } = useTheme();

  const projects = [
    {
      id: 1,
      title: "Oceanum Library – GenAI Knowledge Platform",
      description:
        "A Generative AI–powered digital library built using RAG architecture. Enables intelligent document search, semantic retrieval, and context-aware answers using vector databases and LLMs.",
      images: [
        "/ol-1.png", 
        "/ol-2.png",
        "/ol-3.png",
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
        "/meena.png",
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
      title: "StockMates – Real-Time Stock Monitoring",
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
      title: "ConferX – AI-Powered Video Conferencing",
      description:
        "A full-stack video conferencing platform with real-time HD meetings, scheduled & instant rooms, secure JWT authentication, meeting history dashboard, and an AI assistant for in-meeting support.",
      images: [
        "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600&h=400&fit=crop",
      ],
      tags: ["WebRTC", "Socket.io", "React", "Node.js", "MongoDB", "JWT"],
      github: "https://github.com/Satyajit-69/Video-conferencing-platform",
      live: "https://video-conferencing-platform-nine.vercel.app/",
      color: "from-violet-400 to-purple-500",
      icon: Video,
    },
    {
      id: 5,
      title: "TravelWise – Smart Travel Booking",
      description:
        "A full-stack travel booking platform supporting real-time pricing, hotel discovery, itinerary planning, and secure payments with map-based search.",
      images: [  
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
        { threshold: 0.1 },
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const body = "'Raleway', sans-serif";
  const heading = "'Playfair Display', serif";

  /* ── Text block ── */
  const TextBlock = ({ project }) => {
    const Icon = project.icon;
    return (
      <div className="project-text-block">
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
            style={{
              fontFamily: heading,
              fontSize: "clamp(1.2rem, 2.5vw, 1.55rem)",
              fontWeight: 700,
              lineHeight: 1.3,
            }}
          >
            {project.title}
          </h3>
        </div>

        {/* Description */}
        <p
          className="text-gray-500 dark:text-gray-400"
          style={{ fontFamily: body, fontSize: "0.9rem", fontWeight: 400, lineHeight: 1.8 }}
        >
          {project.description}
        </p>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`bg-gradient-to-r ${project.color} text-white`}
              style={{
                fontFamily: body,
                fontSize: "0.68rem",
                fontWeight: 700,
                letterSpacing: "0.07em",
                padding: "4px 11px",
                borderRadius: "999px",
                textTransform: "uppercase",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="border dark:border-slate-500 border-gray-400 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 transition"
            style={{
              fontFamily: body,
              fontWeight: 600,
              fontSize: "0.82rem",
              display: "flex",
              alignItems: "center",
              gap: "7px",
              padding: "8px 16px",
              borderRadius: "8px",
            }}
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-gradient-to-r ${project.color} text-white shadow hover:opacity-90 transition`}
            style={{
              fontFamily: body,
              fontWeight: 600,
              fontSize: "0.82rem",
              display: "flex",
              alignItems: "center",
              gap: "7px",
              padding: "8px 16px",
              borderRadius: "8px",
            }}
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </a>
        </div>
      </div>
    );
  };

  /* ── CardSwap image block ── */
  const ImageBlock = ({ project, tiltSide, mobileOrder }) => (
    <div className="project-image-block" style={{ order: mobileOrder }}>
      <CardSwap
        width={300}
        height={220}
        cardDistance={28}
        verticalDistance={28}
        delay={4000}
        pauseOnHover={true}
        tiltSide={tiltSide}
      >
        {project.images.map((imgSrc, i) => (
          <Card key={i}>
            <img
              src={imgSrc}
              alt={`${project.title} screenshot ${i + 1}`}
              style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px", display: "block" }}
            />
          </Card>
        ))}
      </CardSwap>
    </div>
  );

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">

        {/* Section Heading */}
        <div className="text-center mb-20">
          <h2
            className="text-black dark:text-white mb-4"
            style={{
              fontFamily: heading,
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 900,
              letterSpacing: "-0.01em",
              lineHeight: 1.15,
            }}
          >
            Featured Projects
          </h2>
          <p
            className="text-gray-400 mt-4 max-w-xl mx-auto"
            style={{ fontFamily: body, fontWeight: 400, fontSize: "0.97rem", lineHeight: 1.75 }}
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
              ref={(el) => (projectRefs.current[project.id] = el)}
              style={{
                marginTop: "48px",
                marginBottom: "48px",
                transition: "opacity 0.7s ease, transform 0.7s ease",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(36px)",
              }}
            >
              {/* Bordered card row */}
              <div className="project-row">
                {isEven ? (
                  <>
                    <TextBlock project={project} />
                    <ImageBlock project={project} tiltSide="right" mobileOrder={-1} />
                  </>
                ) : (
                  <>
                    <ImageBlock project={project} tiltSide="left" mobileOrder={-1} />
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