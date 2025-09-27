import { useState, useEffect } from 'react';
import TypewriterText from '../../public/utils/TyperwriterText';
const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Component mount hone ke baad animation start karo
    setLoaded(true);
  }, []);

  return (
    <section id="home" className="pt-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center">
          {/* Text Section */}
          <div 
            className="w-full md:w-1/2 text-center md:text-left py-10"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0px)' : 'translateY(30px)',
              transition: 'all 0.8s ease-in-out'
            }}
          >
            <h2 className="text-4xl font-bold mb-4">Hi, I'm Satyajit</h2>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-600">
              I am a <TypewriterText />
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto md:mx-0 mb-6">
              I build pages filled by love and complemented by ur smile 
            </p>
            
            <div 
              className="flex justify-center md:justify-start gap-4"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? 'translateY(0px)' : 'translateY(20px)',
                transition: 'all 1s ease-in-out',
                transitionDelay: '0.3s' // Text ke baad buttons animate honge
              }}
            >
              <a
                href="#contact"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
              >
                Hire Me
              </a>
              <a
                href="#portfolio"
                className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg shadow-md hover:bg-gray-300 transition ease-in-out duration-300"
              >
                View Portfolio
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div 
            className="w-full md:w-1/2 flex justify-center"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateX(0px)' : 'translateX(30px)',
              transition: 'all 0.8s ease-in-out',
              transitionDelay: '0.2s' // Slight delay for staggered effect
            }}
          >
            <img
              src="/header2.svg"
              alt="Developer Activity Animation"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;