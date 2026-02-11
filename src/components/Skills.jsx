import { useEffect, useRef, useState, useMemo } from 'react';
import LogoScrolling from './LogoScroling';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [progressBars, setProgressBars] = useState({});
  const sectionRef = useRef(null);

  const skillsData = useMemo(() => [
    {
      id: 1,
      title: 'Frontend',
      icon: 'fas fa-code',
      skills: [
        { name: 'HTML', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', proficiency: 95 },
        { name: 'CSS', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', proficiency: 90 },
        { name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', proficiency: 92 },
        { name: 'React', url: 'https://react.dev/', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', proficiency: 88 },
        { name: 'Tailwind CSS', url: 'https://tailwindcss.com/', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', proficiency: 93 },
      ],
    },
    {
      id: 2,
      title: 'Backend',
      icon: 'fas fa-server',
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
      icon: 'fas fa-laptop-code',
      skills: [
        { name: 'JavaScript', url: 'https://www.javascript.com/', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', proficiency: 92 },
        { name: 'Java', url: 'https://www.java.com/', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', proficiency: 78 },
        { name: 'Python', url: 'https://www.python.org/', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', proficiency: 84 },
      ],
    },
    {
      id: 4,
      title: 'Tools & DevOps',
      icon: 'fas fa-tools',
      skills: [
        { name: 'Git', url: 'https://git-scm.com/', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', proficiency: 88 },
        { name: 'Docker', url: 'https://www.docker.com/', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', proficiency: 82 },
        { name: 'VS Code', url: 'https://code.visualstudio.com/', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', proficiency: 95 },
        { name: 'AWS', url: 'https://aws.amazon.com/', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf8ZwQVJ4EjnO8oWqjAZGEy-IbyqfLCcmYHg&s', proficiency: 75 },
      ],
    },
    {
      id: 5,
      title: 'Database',
      icon: 'fas fa-database',
      skills: [
        { name: 'MongoDB', url: 'https://www.mongodb.com/', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', proficiency: 82 },
        { name: 'MySQL', url: 'https://www.mysql.com/', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', proficiency: 77 },
        { name: 'Mongoose', url: 'https://mongoosejs.com/', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongoose/mongoose-original.svg', proficiency: 85 },
      ],
    },
    {
      id: 6,
      title: 'Gen AI',
      icon: 'fas fa-brain',
      skills: [
        { name: 'LLM Models', url: 'https://huggingface.co/', logo: 'https://huggingface.co/front/assets/huggingface_logo.svg', proficiency: 85 },
        { name: 'Prompt Engineering', url: 'https://www.promptingguide.ai/', logo: 'https://cdn-icons-png.flaticon.com/512/8637/8637099.png', proficiency: 88 },
        { name: 'RAG Agents', url: 'https://www.langchain.com/', logo: 'https://static.vecteezy.com/system/resources/previews/031/478/623/non_2x/rag-creative-icon-design-free-vector.jpg', proficiency: 82 },
      ],
    },
  ], []);

  const stats = useMemo(() => {
    const totalTech = skillsData.reduce((a, c) => a + c.skills.length, 0);
    return [
      { count: totalTech, label: 'Technologies', icon: 'fas fa-rocket' },
      { count: skillsData.length, label: 'Categories', icon: 'fas fa-layer-group' },
      { count: 3, label: 'Years Experience', icon: 'fas fa-clock' },
      { count: 50, label: 'Projects', icon: 'fas fa-project-diagram' }
    ];
  }, [skillsData]);

  // Reveal animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Progress bar animation
  useEffect(() => {
    if (isVisible) {
      const timeout = setTimeout(() => {
        const newProgress = {};
        skillsData.forEach(category => {
          category.skills.forEach(skill => {
            newProgress[`${category.id}-${skill.name}`] = skill.proficiency;
          });
        });
        setProgressBars(newProgress);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [isVisible, skillsData]);

  return (
    <section 
      id="skills" 
      className="py-16 md:py-20 min-h-screen bg-white dark:bg-black relative overflow-hidden" 
      ref={sectionRef}
    >
      {/* Font Awesome CDN */}
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" 
      />

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-black/10 dark:bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-black/10 dark:bg-white/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}>
            <span className="inline-block px-4 py-2 mb-4 bg-black dark:bg-white text-white dark:text-black text-sm font-semibold rounded-full">
              <i className="fas fa-code mr-2"></i>
              Technical Expertise
            </span>
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-4"
              style={{ fontFamily: "'Caveat', cursive" }}
            >
              Skills & Technologies
            </h2>
            <p 
              className="text-black/80 dark:text-white/80 max-w-2xl mx-auto text-base md:text-lg"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              Comprehensive expertise across the full stack development lifecycle
            </p>
          </div>
        </div>

        {/* Scrolling Logos */}
       
          {/* <div className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl border-2 border-black dark:border-white shadow-lg"> */}
            <LogoScrolling />
         
       

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillsData.map((category, index) => (
            <div
              key={category.id}
              className={`group bg-white dark:bg-black rounded-2xl border-2 border-black dark:border-white hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Top accent line */}
              <div className="h-1 bg-black dark:bg-white" />

              <div className="p-6 md:p-8">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-black dark:bg-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <i className={`${category.icon} text-xl text-white dark:text-black`}></i>
                  </div>
                  <div>
                    <h3 
                      className="text-xl md:text-2xl font-bold text-black dark:text-white"
                      style={{ fontFamily: "'Caveat', cursive" }}
                    >
                      {category.title}
                    </h3>
                    <p className="text-sm text-black/70 dark:text-white/70">
                      {category.skills.length} technologies
                    </p>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => {
                    const progressKey = `${category.id}-${skill.name}`;
                    const currentProgress = progressBars[progressKey] || 0;
                    
                    return (
                      <div key={skillIndex} className="group/skill">
                        <div className="flex items-center justify-between mb-2">
                          <a
                            href={skill.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 hover:gap-3 transition-all duration-300"
                          >
                            <img
                              src={skill.logo}
                              alt={skill.name}
                              className="w-6 h-6 group-hover/skill:scale-110 transition-transform duration-300"
                            />
                            <span 
                              className="text-black dark:text-white font-medium text-sm"
                              style={{ fontFamily: "'Raleway', sans-serif" }}
                            >
                              {skill.name}
                            </span>
                          </a>
                          <span className="text-black dark:text-white font-semibold text-sm">
                            {skill.proficiency}%
                          </span>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="h-2 bg-black/10 dark:bg-white/10 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-black dark:bg-white rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${currentProgress}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Footer */}
        <div
          className={`mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          {stats.map((stat, idx) => (
            <div 
              key={idx}
              className="text-center p-6 md:p-8 bg-white dark:bg-black rounded-2xl border-2 border-black dark:border-white hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <i className={`${stat.icon} text-3xl md:text-4xl mb-3 text-black dark:text-white`}></i>
              <div 
                className="text-3xl md:text-4xl font-bold mb-2 text-black dark:text-white"
                style={{ fontFamily: "'Pacifico', cursive" }}
              >
                {stat.count}+
              </div>
              <div 
                className="text-sm text-black/70 dark:text-white/70 font-medium"
                style={{ fontFamily: "'Raleway', sans-serif" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;