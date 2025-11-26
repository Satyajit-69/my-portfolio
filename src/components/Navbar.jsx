import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'education', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-5 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 
      w-11/12 sm:w-10/12 md:w-9/12 lg:w-8/12 
      rounded-3xl px-4 shadow-xl backdrop-blur-md
      ${isScrolled 
        ? 'bg-black/40 dark:bg-black/40 border border-white/20 shadow-2xl' 
        : 'bg-gray-800/50 dark:bg-gray-900/50 border border-gray-700/40'}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          {/* Desktop Menu - Centered */}
          <ul className="hidden md:flex space-x-8 text-white font-medium mx-auto">
            {['home', 'about', 'education', 'skills', 'contact'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item}`}
                  className="relative capitalize transition-colors duration-300 hover:text-cyan-400 dark:hover:text-cyan-400 hover:text-yellow-400 pb-1"
                >
                  {item}
                  {/* Underline for active section */}
                  {activeSection === item && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 dark:from-cyan-400 dark:via-blue-500 dark:to-purple-500 rounded-full" />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Theme Toggle - Right side */}
          <div className="hidden md:block absolute right-6">
            <ThemeToggle />
          </div>

          {/* Mobile: Theme Toggle + Menu Button */}
          <div className="md:hidden flex items-center gap-3 ml-auto">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-1 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="pb-4 pt-2">
            <ul className="space-y-2 text-white">
              {['home', 'about', 'education', 'skills', 'contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item}`}
                    onClick={closeMenu} 
                    className="block py-2 px-3 rounded-lg hover:bg-white/10 transition-all duration-200 capitalize relative"
                  >
                    {item}
                    {/* Underline for active section on mobile */}
                    {activeSection === item && (
                      <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 dark:from-cyan-400 dark:via-blue-500 dark:to-purple-500 rounded-full" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;