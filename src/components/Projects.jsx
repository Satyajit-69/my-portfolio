import { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, Play, Pause, Dumbbell, MessageCircle, TrendingUp, Video, Plane } from 'lucide-react';

const Projects = () => {
  const [playingVideo, setPlayingVideo] = useState(null);
  const [visibleProjects, setVisibleProjects] = useState(new Set());
  const videoRefs = useRef({});
  const projectRefs = useRef({});

  const projects = [
    {
      id: 1,
      title: "GymPookie – AI Fitness Tracker (In Development)",
      description:
        "An AI-powered fitness tracker using Python, RAG (Retrieval Augmented Generation), and LLM models to deliver personalized workout and diet recommendations. Uses a vector database to store user history and generate adaptive plans based on progress.",
      video:
        "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      tags: [
        "React Native",
        "Python",
        "FastAPI",
        "RAG",
        "Vector DB (Chroma/FAISS)",
        "LLM Models",
      ],
      github: "https://github.com",
      live: "https://example.com",
      color: "from-orange-400 to-red-500",
      icon: Dumbbell,
    },
    {
      id: 2,
      title: "ChatBuddy – AI Chat Companion (In Development)",
      description:
        "A conversational AI chat app powered by Python backend, RAG pipeline, vector database, and LLM models. Supports context-aware replies using stored conversation history with smart retrieval and multilingual response generation.",
      video:
        "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      tags: [
        "React",
        "Python",
        "FastAPI/Flask",
        "RAG",
        "Vector DB",
        "LLM Models",
      ],
      github: "https://github.com",
      live: "https://example.com",
      color: "from-sky-400 to-blue-500",
      icon: MessageCircle,
    },
    {
      id: 3,
      title: "StockTracker Pro – Real-Time Monitoring Platform",
      description:
        "A real-time stock market dashboard featuring live price updates, technical indicators, and watchlist management. Built using WebSocket-powered live streams and optimized chart rendering for instant updates.",
      video:
        "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
      tags: ["React", "WebSocket", "Python", "TradingView"],
      github: "https://github.com",
      live: "https://example.com",
      color: "from-emerald-400 to-teal-500",
      icon: TrendingUp,
    },
    {
      id: 4,
      title: "ConferX – Video Conferencing System",
      description:
        "A modern video conferencing platform featuring HD calls, screen sharing, breakout rooms, and real-time chat. Built with WebRTC for peer-to-peer communication along with cloud support and adaptive streaming.",
      video:
        "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      tags: ["WebRTC", "Socket.io", "React", "AWS"],
      github: "https://github.com/Satyajit-69/Video-conferencing-frontend",
      live: "http://ec2-13-62-211-75.eu-north-1.compute.amazonaws.com/",
      color: "from-violet-400 to-purple-500",
      icon: Video,
    },
    {
      id: 5,
      title: "TravelWise – Smart Travel Booking Platform",
      description:
        "A travel booking system that supports real-time flight pricing, hotel search, itinerary planning, and payment integration. Includes map-based location search and multi-currency support.",
      video:
        "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      tags: ["Next.js", "Stripe", "Maps API", "PostgreSQL"],
      github: "https://github.com",
      live: "https://example.com",
      color: "from-cyan-400 to-blue-500",
      icon: Plane,
    },
  ];

  useEffect(() => {
    const videoObservers = [];
    const animObservers = [];

    projects.forEach((project) => {
      const videoElement = videoRefs.current[project.id];
      const projectElement = projectRefs.current[project.id];
      
      // Video autoplay observer
      if (videoElement) {
        const videoObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                videoElement.play().catch(() => {});
                setPlayingVideo(project.id);
              } else {
                videoElement.pause();
                setPlayingVideo(prev => prev === project.id ? null : prev);
              }
            });
          },
          { threshold: 0.5 }
        );
        videoObserver.observe(videoElement);
        videoObservers.push(videoObserver);
      }

      // Animation observer
      if (projectElement) {
        const animObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setVisibleProjects((prev) => new Set([...prev, project.id]));
              }
            });
          },
          { threshold: 0.15 }
        );
        animObserver.observe(projectElement);
        animObservers.push(animObserver);
      }
    });

    return () => {
      videoObservers.forEach(observer => observer.disconnect());
      animObservers.forEach(observer => observer.disconnect());
    };
  }, [projects]);

  const toggleVideo = (videoId) => {
    const videoElement = videoRefs.current[videoId];
    if (!videoElement) return;
    
    if (playingVideo === videoId) {
      videoElement.pause();
      setPlayingVideo(null);
    } else {
      Object.keys(videoRefs.current).forEach((key) => {
        const vid = videoRefs.current[key];
        if (vid && parseInt(key) !== videoId) {
          vid.pause();
        }
      });
      videoElement.play().catch(() => {});
      setPlayingVideo(videoId);
    }
  };

  return (
    <section id="projects" className="py-20 dark:bg-black bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeIn">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold rounded-full shadow-lg animate-pulse">
              ✨ Portfolio Showcase
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Innovative solutions showcasing modern web technologies and seamless user experiences
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            const isVisible = visibleProjects.has(project.id);
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={project.id}
                ref={(el) => (projectRefs.current[project.id] = el)}
                className={`group dark:bg-slate-800/50 bg-gray-50 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-purple-500/10 overflow-hidden border dark:border-slate-700/50 border-gray-200 dark:hover:border-slate-600 hover:border-gray-300 transform hover:-translate-y-2 flex flex-col lg:flex transition-all duration-700
                ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}
                ${isVisible 
                  ? isEven 
                    ? 'animate-slideInLeft' 
                    : 'animate-slideInRight'
                  : 'opacity-0'
                }`}
              >
                <div className={`relative lg:w-1/2 aspect-video lg:aspect-auto bg-slate-900 overflow-hidden ${isVisible ? 'animate-scaleIn' : 'opacity-0'}`}>
                  <video
                    ref={(el) => (videoRefs.current[project.id] = el)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loop
                    muted
                    playsInline
                  >
                    <source src={project.video} type="video/mp4" />
                  </video>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  
                  <button
                    onClick={() => toggleVideo(project.id)}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-4 rounded-full shadow-2xl transition-all duration-500 hover:scale-110 z-10"
                  >
                    {playingVideo === project.id ? (
                      <Pause className="w-7 h-7 text-slate-900" />
                    ) : (
                      <Play className="w-7 h-7 text-slate-900 ml-0.5" />
                    )}
                  </button>

                  <div className={`absolute top-5 right-5 flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r ${project.color} text-white text-sm font-semibold shadow-lg`}>
                    <IconComponent className="w-4 h-4" />
                    Live Demo
                  </div>
                </div>

                <div className={`lg:w-1/2 p-8 lg:p-10 flex flex-col justify-center ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
                  <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r ${project.color} text-white text-sm font-semibold mb-4 w-fit`}>
                    <IconComponent className="w-4 h-4" />
                    <span>Project {String(project.id).padStart(2, '0')}</span>
                  </div>

                  <h3 className="text-3xl font-bold mb-4 dark:text-white text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-500">
                    {project.title}
                  </h3>
                  
                  <p className="dark:text-gray-300 text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1.5 dark:bg-slate-700/50 bg-gray-200 dark:text-gray-200 text-gray-700 rounded-lg text-sm font-medium dark:hover:bg-slate-600/50 hover:bg-gray-300 transition-all duration-300 hover:scale-105"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 dark:bg-slate-700 bg-gray-800 text-white rounded-xl dark:hover:bg-slate-600 hover:bg-gray-700 transition-all duration-500 font-semibold hover:shadow-lg hover:scale-105"
                    >
                      <Github className="w-5 h-5" />
                      View Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${project.color} text-white rounded-xl hover:shadow-xl transition-all duration-500 font-semibold hover:scale-105`}
                    >
                      <ExternalLink className="w-5 h-5" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-100px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(100px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        .animate-fadeIn { animation: fadeIn 1s ease-out forwards; }
        .animate-slideInLeft { animation: slideInLeft 0.8s ease-out forwards; }
        .animate-slideInRight { animation: slideInRight 0.8s ease-out forwards; }
        .animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-scaleIn { animation: scaleIn 0.8s ease-out forwards; }
      `}</style>
    </section>
  );
};

export default Projects;