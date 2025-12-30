import { useEffect, useRef, useState } from 'react';
import LogoScrolling from './LogoScroling';
// Mock LogoScrolling component for demo

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [counts, setCounts] = useState({
    technologies: 0,
    categories: 0,
    years: 0,
    projects: 0,
  });
  const [progressBars, setProgressBars] = useState({});
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);

  const fullText = 'Skills & Technologies';

  const skillsData = [
    {
      id: 1,
      title: 'Frontend',
      icon: '</>',
      gradient: 'from-cyan-400 to-blue-500',
      lightGradient: 'from-cyan-500 to-blue-600',
      skills: [
        { name: 'HTML', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', proficiency: 95 },
        { name: 'CSS', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', proficiency: 90 },
        { name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', proficiency: 92 },
        { name: 'React', url: 'https://react.dev/', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', proficiency: 88 },
        { name: 'Bootstrap', url: 'https://getbootstrap.com/', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg', proficiency: 85 },
        { name: 'Material-UI', url: 'https://mui.com/', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg', proficiency: 80 },
        { name: 'Tailwind CSS', url: 'https://tailwindcss.com/', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', proficiency: 93 },
      ],
    },
    {
      id: 2,
      title: 'Backend',
      icon: '{ }',
      gradient: 'from-green-400 to-emerald-500',
      lightGradient: 'from-green-500 to-emerald-600',
      skills: [
        { name: 'Node.js', url: 'https://nodejs.org/', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', proficiency: 87 },
        { name: 'Express.js', url: 'https://expressjs.com/', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', proficiency: 85 },
        { name: 'MongoDB', url: 'https://www.mongodb.com/', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', proficiency: 82 },
        { name: 'REST APIs', url: 'https://restfulapi.net/', logo: 'https://cdn-icons-png.flaticon.com/512/2164/2164832.png', proficiency: 90 },
      ],
    },
    {
      id: 3,
      title: 'Languages',
      icon: '<>',
      gradient: 'from-purple-400 to-pink-500',
      lightGradient: 'from-purple-500 to-pink-600',
      skills: [
        { name: 'JavaScript', url: 'https://www.javascript.com/', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', proficiency: 92 },
        { name: 'Java', url: 'https://www.java.com/', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', proficiency: 78 },
        { name: 'Python', url: 'https://www.python.org/', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', proficiency: 84 },
     
      ],
    },
    {
      id: 4,
      title: 'State & Tools',
      icon: '⚡',
      gradient: 'from-violet-400 to-purple-500',
      lightGradient: 'from-violet-500 to-purple-600',
      skills: [
        { name: 'Redux', url: 'https://redux.js.org/', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg', proficiency: 80 },
        { name: 'VsCode', url: 'https://code.visualstudio.com/', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', proficiency: 95 },
        { name: 'GitHub', url: 'https://github.com/', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', proficiency: 88 },
      ],
    },
    {
      id: 5,
      title: 'Database',
      icon: 'DB',
      gradient: 'from-blue-400 to-indigo-500',
      lightGradient: 'from-blue-500 to-indigo-600',
      skills: [
        { name: 'MongoDB', url: 'https://www.mongodb.com/', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', proficiency: 82 },
        { name: 'MySQL', url: 'https://www.mysql.com/', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', proficiency: 77 },
        { name: 'Mongoose', url: 'https://mongoosejs.com/', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongoose/mongoose-original.svg', proficiency: 85 },
      ],
    },
    {
      id: 6,
      title: 'DevOps',
      icon: '🔧',
      gradient: 'from-orange-400 to-red-500',
      lightGradient: 'from-orange-500 to-red-600',
      skills: [
        { name: 'Docker', url: 'https://www.docker.com/', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', proficiency: 82 },
        { name: 'CI/CD', url: 'https://about.gitlab.com/topics/ci-cd/', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg', proficiency: 77 },
        { name: 'Kubernetes', url: 'https://kubernetes.io/', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', proficiency: 75 },
{
  name: 'AWS',
  url: 'https://aws.amazon.com/',
  logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf8ZwQVJ4EjnO8oWqjAZGEy-IbyqfLCcmYHg&s',
  proficiency: 50
}

      ],
    },
    {
      id: 7,
      title: 'Gen AI',
      icon: '🤖',
      gradient: 'from-pink-400 to-rose-500',
      lightGradient: 'from-pink-500 to-rose-600',
      skills: [
        { name: 'LLM Models', url: 'https://huggingface.co/', logo: 'https://huggingface.co/front/assets/huggingface_logo.svg', proficiency: 85 },
        { name: 'Prompt Engineering', url: 'https://www.promptingguide.ai/', logo: 'https://cdn-icons-png.flaticon.com/512/8637/8637099.png', proficiency: 88 },
        { name: 'RAG Agents', url: 'https://www.langchain.com/', logo: 'https://static.vecteezy.com/system/resources/previews/031/478/623/non_2x/rag-creative-icon-design-free-vector.jpg', proficiency: 82 },
        { name: 'Vector DBs', url: 'https://www.pinecone.io/', logo: 'https://cdn-icons-png.flaticon.com/512/2103/2103832.png', proficiency: 80 },
      ],
    },
  ];

  // Reveal animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Scroll progress for rocket animation
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionHeight = rect.height;
        const viewportHeight = window.innerHeight;
        
        const scrolled = Math.max(0, viewportHeight - rect.top);
        const total = sectionHeight + viewportHeight;
        const progress = Math.min(Math.max(scrolled / total, 0), 1);
        
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Typewriter effect with loop
  useEffect(() => {
    if (isVisible) {
      if (charIndex < fullText.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(prev => prev + fullText[charIndex]);
          setCharIndex(prev => prev + 1);
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setDisplayedText('');
          setCharIndex(0);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    }
  }, [charIndex, isVisible, fullText]);

  // Counter animation
  useEffect(() => {
    if (isVisible) {
      const totalTech = skillsData.reduce((a, c) => a + c.skills.length, 0);
      const totalCat = skillsData.length;
      const totalYears = 3;
      const totalProjects = 50;

      let tech = 0, cat = 0, yrs = 0, proj = 0;
      const interval = setInterval(() => {
        if (tech < totalTech) setCounts(p => ({ ...p, technologies: ++tech }));
        if (cat < totalCat) setCounts(p => ({ ...p, categories: ++cat }));
        if (yrs < totalYears) setCounts(p => ({ ...p, years: ++yrs }));
        if (proj < totalProjects) {
          proj += 2;
          setCounts(p => ({ ...p, projects: Math.min(proj, totalProjects) }));
        }
        if (tech >= totalTech && cat >= totalCat && yrs >= totalYears && proj >= totalProjects)
          clearInterval(interval);
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  // Progress bar animation
  useEffect(() => {
    if (isVisible) {
      const timeout = setTimeout(() => {
        const newProgress = {};
        skillsData.forEach(category => {
          category.skills.forEach(skill => {
            const key = `${category.id}-${skill.name}`;
            newProgress[key] = skill.proficiency;
          });
        });
        setProgressBars(newProgress);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [isVisible]);

  return (
    <section id="skills" className="py-20 min-h-screen bg-gradient-to-b dark:from-black dark:via-slate-950 dark:to-black from-gray-50 via-white to-gray-50 relative overflow-hidden" ref={sectionRef}>
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 dark:bg-blue-500/10 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 dark:bg-purple-500/10 bg-purple-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 dark:bg-cyan-500/5 bg-cyan-400/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Floating Code Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-[10%] text-cyan-500 font-mono text-sm animate-float" style={{animationDelay: '0s'}}>{'<div>'}</div>
        <div className="absolute top-1/3 right-[15%] text-blue-500 font-mono text-sm animate-float" style={{animationDelay: '1s'}}>{'{ }'}</div>
        <div className="absolute top-2/3 left-[20%] text-purple-500 font-mono text-sm animate-float" style={{animationDelay: '2s'}}>{'</>'}</div>
        <div className="absolute top-1/2 right-[25%] text-green-500 font-mono text-sm animate-float" style={{animationDelay: '1.5s'}}>{'[ ]'}</div>
        <div className="absolute bottom-1/4 left-[15%] text-pink-500 font-mono text-sm animate-float" style={{animationDelay: '0.5s'}}>{'( )'}</div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <div className={`inline-flex flex-col items-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}>
            <span className="text-sm font-semibold dark:text-cyan-400 text-blue-600 tracking-[0.3em] uppercase mb-3 relative">
              <span className="absolute -left-8 top-1/2 w-6 h-px dark:bg-cyan-400 bg-blue-600"></span>
              Technical Expertise
              <span className="absolute -right-8 top-1/2 w-6 h-px dark:bg-cyan-400 bg-blue-600"></span>
            </span>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r dark:from-white dark:via-cyan-200 dark:to-white from-gray-900 via-blue-600 to-gray-900 bg-clip-text text-transparent mb-4 min-h-[4rem]">
              {displayedText}
              <span className="animate-pulse ml-1 dark:text-cyan-400 text-blue-600">|</span>
            </h2>
            <div className="relative w-32 h-1.5 dark:bg-slate-800 bg-gray-200 rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full animate-shimmer"></div>
            </div>
            <p className="mt-8 dark:text-slate-400 text-gray-600 max-w-2xl text-lg leading-relaxed">
              Comprehensive expertise across the full stack development lifecycle with proven proficiency
            </p>
          </div>
        </div>

        {/* Scrolling Logos */}
        <div className={`mb-12 transition-all duration-700 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`} style={{transitionDelay: '200ms'}}>
          <div className="mt-3 bg-gradient-to-r dark:from-slate-900/50 dark:via-slate-800/50 dark:to-slate-900/50 from-white/80 via-gray-50/80 to-white/80 backdrop-blur-sm rounded-2xl  dark:border-slate-700/50 border-gray-200 border shadow-2xl dark:shadow-none shadow-gray-200/50">
            <LogoScrolling />
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <div
              key={category.id}
              className={`group relative bg-gradient-to-br dark:from-slate-900/90 dark:to-slate-950/90 from-white/90 to-gray-50/90 backdrop-blur-sm rounded-3xl dark:border-slate-700/50 border-gray-200 border shadow-2xl dark:shadow-cyan-500/20 shadow-gray-300/50 dark:hover:shadow-cyan-500/20 hover:shadow-blue-500/30 transition-all duration-700 overflow-hidden ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${category.lightGradient} opacity-80`}></div>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} dark:opacity-5 opacity-10 blur-xl`}></div>
              </div>

              <div className="p-8 relative z-10">
                <div className="flex items-center mb-8">
                  <div className={`relative w-16 h-16 bg-gradient-to-br ${category.lightGradient} rounded-2xl flex items-center justify-center shadow-xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <span className="text-white text-2xl font-bold">{category.icon}</span>
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity`}></div>
                  </div>
                  <div className="ml-5">
                    <h3 className="text-2xl font-bold dark:text-white text-gray-900 dark:group-hover:text-cyan-300 group-hover:text-blue-600 transition-colors duration-300">{category.title}</h3>
                    <p className="text-sm dark:text-slate-400 text-gray-600 mt-1">
                      {category.skills.length} technologies
                    </p>
                  </div>
                </div>

                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => {
                    const progressKey = `${category.id}-${skill.name}`;
                    const currentProgress = progressBars[progressKey] || 0;
                    
                    return (
                      <div
                        key={skillIndex}
                        className="group/skill"
                        style={{
                          animation: isVisible ? `slideIn 0.6s ease-out ${(skillIndex * 0.1) + 0.5}s both` : 'none'
                        }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <a
                            href={skill.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2.5 hover:gap-3 transition-all duration-300 dark:group-hover/skill:text-cyan-300 group-hover/skill:text-blue-600"
                          >
                            <img
                              src={skill.logo}
                              alt={skill.name}
                              className="w-6 h-6 group-hover/skill:scale-125 group-hover/skill:rotate-12 transition-all duration-300"
                              style={{ filter: 'brightness(0.9)' }}
                            />
                            <span className="dark:text-slate-200 text-gray-700 font-medium text-sm">{skill.name}</span>
                          </a>
                          <span className="dark:text-cyan-400 text-blue-600 font-semibold text-sm">{skill.proficiency}%</span>
                        </div>
                        
                        <div className="relative h-2 dark:bg-slate-800 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className={`absolute inset-y-0 left-0 bg-gradient-to-r ${category.lightGradient} rounded-full transition-all duration-1000 ease-out`}
                            style={{ 
                              width: `${currentProgress}%`,
                              boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)'
                            }}
                          >
                            <div className="absolute inset-0 bg-white/20 animate-shimmer-fast"></div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div
                className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br ${category.lightGradient}`}
                style={{
                  padding: '2px',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                }}
              ></div>
            </div>
          ))}
        </div>

        {/* Stats Footer */}
        <div
          className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          {[
            { count: counts.technologies, label: 'Technologies', color: 'cyan', lightColor: 'blue', icon: '🚀' },
            { count: counts.categories, label: 'Categories', color: 'purple', lightColor: 'purple', icon: '📦' },
            { count: counts.years, label: 'Years Experience', color: 'green', lightColor: 'green', icon: '⏱️' },
            { count: counts.projects, label: 'Projects Completed', color: 'red', lightColor: 'blue', icon: '✨' }
          ].map((stat, idx) => (
            <div 
              key={idx}
              className="group relative text-center p-8 bg-gradient-to-br dark:from-slate-900/90 dark:to-slate-950/90 from-white/90 to-gray-50/90 backdrop-blur-sm rounded-2xl dark:border-slate-700/50 border-gray-200 border dark:hover:border-cyan-500/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 dark:hover:shadow-2xl dark:hover:shadow-cyan-500/20 hover:shadow-xl hover:shadow-blue-500/30"
            >
              <div className="absolute inset-0 bg-gradient-to-br dark:from-cyan-500/0 dark:to-purple-500/0 from-blue-500/0 to-purple-500/0 dark:group-hover:from-cyan-500/5 dark:group-hover:to-purple-500/5 group-hover:from-blue-500/10 group-hover:to-purple-500/10 rounded-2xl transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="text-4xl mb-3 animate-bounce-slow">{stat.icon}</div>
                <div className={`text-4xl font-bold mb-3 bg-gradient-to-r dark:from-${stat.color}-400 dark:to-${stat.color}-600 from-${stat.lightColor}-500 to-${stat.lightColor}-700 bg-clip-text text-transparent`}>
                  {stat.count}+
                </div>
                <div className="text-sm dark:text-slate-400 text-gray-600 font-medium tracking-wide">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes shimmer-fast {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.3;
          }
          25% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-10px) translateX(-10px);
            opacity: 0.4;
          }
          75% {
            transform: translateY(-30px) translateX(5px);
            opacity: 0.7;
          }
        }
        .animate-shimmer::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          animation: shimmer 3s infinite;
        }
        .animate-shimmer-fast::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          animation: shimmer-fast 2s infinite;
        }
        .animate-bounce-slow {
          animation: bounce 3s infinite;
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
};

export default Skills;