import { useEffect, useRef, useState } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);

  const skillsData = [
    {
      id: 1,
      title: 'Frontend',
      icon: '</>',
      gradient: 'from-cyan-400 to-blue-500',
      color: 'cyan',
      skills: [
        { name: 'HTML', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML', icon: '🌐' },
        { name: 'CSS', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS', icon: '🎨' },
        { name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', icon: '⚡' },
        { name: 'React', url: 'https://react.dev/', icon: '⚛' },
        { name: 'Bootstrap', url: 'https://getbootstrap.com/', icon: '🅱' },
        { name: 'Material-UI', url: 'https://mui.com/', icon: '🎭' },
        { name: 'Tailwind CSS', url: 'https://tailwindcss.com/', icon: '💨' }
      ]
    },
    {
      id: 2,
      title: 'Backend',
      icon: '{ }',
      gradient: 'from-green-400 to-emerald-500',
      color: 'green',
      skills: [
        { name: 'Node.js', url: 'https://nodejs.org/', icon: '📗' },
        { name: 'Express.js', url: 'https://expressjs.com/', icon: '🚂' },
        { name: 'MongoDB', url: 'https://www.mongodb.com/', icon: '🍃' },
        { name: 'REST APIs', url: 'https://restfulapi.net/', icon: '🔌' }
      ]
    },
    {
      id: 3,
      title: 'Languages',
      icon: '<>',
      gradient: 'from-purple-400 to-pink-500',
      color: 'purple',
      skills: [
        { name: 'JavaScript', url: 'https://www.javascript.com/', icon: '🟨' },
        { name: 'Java', url: 'https://www.java.com/', icon: '☕' },
        { name: 'Python', url: 'https://www.python.org/', icon: '🐍' }
      ]
    },
    {
      id: 4,
      title: 'State & Tools',
      icon: '⚡',
      gradient: 'from-violet-400 to-purple-500',
      color: 'violet',
      skills: [
        { name: 'Redux', url: 'https://redux.js.org/', icon: '🔄' },
        { name: 'Git', url: 'https://git-scm.com/', icon: '📦' },
        { name: 'GitHub', url: 'https://github.com/', icon: '🐙' }
      ]
    },
    {
      id: 5,
      title: 'Database',
      icon: 'DB',
      gradient: 'from-blue-400 to-indigo-500',
      color: 'blue',
      skills: [
        { name: 'MongoDB', url: 'https://www.mongodb.com/', icon: '🍃' },
        { name: 'MySQL', url: 'https://www.mysql.com/', icon: '🐬' },
        { name: 'Mongoose', url: 'https://mongoosejs.com/', icon: '🦫' }
      ]
    }
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
        rootMargin: '0px 0px -200px 0px'
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
    <section 
      id="skills" 
      className="py-16 min-h-screen"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
       <div className="text-center mb-12">
          <h4 
            className={`text-2xl font-bold inline-block transition-all duration-700 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 -translate-y-4'
            }`}
          >
            Skills
            <div className="h-0.5 w-full mt-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full" style={{backgroundSize: '200% 100%'}}></div>
          </h4>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-12 gap-8 items-start">
          
          {/* Skills Grid */}
          <div className="col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {skillsData.map((category, index) => (
              <div 
                key={category.id}
                className={`bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700 shadow-lg transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${category.gradient} rounded-lg flex items-center justify-center`}>
                    <span className="text-white text-xl font-bold">{category.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white ml-4">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <a
                      key={skillIndex}
                      href={skill.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-3 py-1 bg-slate-700 text-${category.color}-400 rounded-full text-sm hover:bg-slate-600 transition-all duration-300 hover:scale-105 flex items-center gap-1.5 group`}
                    >
                      <span className="text-base group-hover:scale-110 transition-transform duration-300">{skill.icon}</span>
                      <span>{skill.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            ))}

          </div>    
        
        </div>
      </div>
    </section>
  );
};

export default Skills;