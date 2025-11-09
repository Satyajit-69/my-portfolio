import { useEffect, useRef, useState } from 'react';
import LogoScrolling from './LogoScroling'; // ✅ Make sure the path matches your folder structure

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
  const sectionRef = useRef(null);

  const fullText = 'Skills & Technologies';

  const skillsData = [
    {
      id: 1,
      title: 'Frontend',
      icon: '</>',
      gradient: 'from-cyan-400 to-blue-500',
      skills: [
        { name: 'HTML', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'React', url: 'https://react.dev/', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Bootstrap', url: 'https://getbootstrap.com/', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
        { name: 'Material-UI', url: 'https://mui.com/', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg' },
        { name: 'Tailwind CSS', url: 'https://tailwindcss.com/', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
      ],
    },
    {
      id: 2,
      title: 'Backend',
      icon: '{ }',
      gradient: 'from-green-400 to-emerald-500',
      skills: [
        { name: 'Node.js', url: 'https://nodejs.org/', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'Express.js', url: 'https://expressjs.com/', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
        { name: 'MongoDB', url: 'https://www.mongodb.com/', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        { name: 'REST APIs', url: 'https://restfulapi.net/', logo: 'https://cdn-icons-png.flaticon.com/512/2164/2164832.png' },
      ],
    },
    {
      id: 3,
      title: 'Languages',
      icon: '<>',
      gradient: 'from-purple-400 to-pink-500',
      skills: [
        { name: 'JavaScript', url: 'https://www.javascript.com/', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'Java', url: 'https://www.java.com/', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'Python', url: 'https://www.python.org/', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'Pydantic', url: 'https://docs.pydantic.dev/', logo: 'https://docs.pydantic.dev/latest/logo-white.svg' },
      ],
    },
    {
      id: 4,
      title: 'State & Tools',
      icon: '⚡',
      gradient: 'from-violet-400 to-purple-500',
      skills: [
        { name: 'Redux', url: 'https://redux.js.org/', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
        { name: 'VsCode', url: 'https://code.visualstudio.com/', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
        { name: 'GitHub', url: 'https://github.com/', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      ],
    },
    {
      id: 5,
      title: 'Database',
      icon: 'DB',
      gradient: 'from-blue-400 to-indigo-500',
      skills: [
        { name: 'MongoDB', url: 'https://www.mongodb.com/', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        { name: 'MySQL', url: 'https://www.mysql.com/', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'Mongoose', url: 'https://mongoosejs.com/', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongoose/mongoose-original.svg' },
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

  // Typewriter effect
  useEffect(() => {
    if (isVisible && charIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[charIndex]);
        setCharIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
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

  return (
    <section id="skills" className="py-20 min-h-screen bg-black" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

        {/* Header */}
        <div className="text-center mb-16">
          <div className={`inline-flex flex-col items-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}>
            <span className="text-sm font-semibold text-blue-400 tracking-wider uppercase mb-2">
              Technical Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 min-h-[3.5rem]">
              {displayedText}
              <span className="animate-pulse ml-1">|</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            <p className="mt-6 text-slate-400 max-w-2xl text-lg">
              Comprehensive expertise across the full stack development lifecycle
            </p>
          </div>
        </div>

        {/* ✅ Scrolling Logos Section */}
        <div className="mb-7 rounded-xl p-6 shadow-lg">
          <LogoScrolling />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, index) => (
            <div
              key={category.id}
              className={`group relative bg-slate-900 rounded-2xl border border-slate-700 shadow-sm hover:shadow-xl transition-all duration-700 overflow-hidden ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${category.gradient}`}></div>

              <div className="p-6">
                <div className="flex items-center mb-6">
                  <div className={`w-14 h-14 bg-gradient-to-br ${category.gradient} rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-white text-xl font-bold">{category.icon}</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                    <p className="text-sm text-slate-400">
                      {category.skills.length} technologies
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <a
                      key={skillIndex}
                      href={skill.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/skill px-4 py-2 bg-slate-800 text-slate-200 rounded-lg text-sm font-medium hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-md flex items-center gap-2"
                    >
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className="w-5 h-5 group-hover/skill:scale-110 transition-transform duration-300"
                        style={{ filter: 'brightness(0.9)' }}
                      />
                      <span>{skill.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div
                className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br ${category.gradient}`}
                style={{
                  padding: '1px',
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
          className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <div className="text-center p-6 bg-slate-900 rounded-xl border border-slate-700">
            <div className="text-3xl font-bold text-blue-400 mb-2">{counts.technologies}+</div>
            <div className="text-sm text-slate-400">Technologies</div>
          </div>
          <div className="text-center p-6 bg-slate-900 rounded-xl border border-slate-700">
            <div className="text-3xl font-bold text-purple-400 mb-2">{counts.categories}+</div>
            <div className="text-sm text-slate-400">Categories</div>
          </div>
          <div className="text-center p-6 bg-slate-900 rounded-xl border border-slate-700">
            <div className="text-3xl font-bold text-green-400 mb-2">{counts.years}+</div>
            <div className="text-sm text-slate-400">Years Experience</div>
          </div>
          <div className="text-center p-6 bg-slate-900 rounded-xl border border-slate-700">
            <div className="text-3xl font-bold text-cyan-400 mb-2">{counts.projects}+</div>
            <div className="text-sm text-slate-400">Projects Completed</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
