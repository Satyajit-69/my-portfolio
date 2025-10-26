import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
      w-10/12 md:w-9/12 lg:w-8/12 
      rounded-3xl px-4 shadow-xl backdrop-blur-sm 
      ${isScrolled ? 'bg-black/30 border border-white/20 shadow-2xl' : 'bg-gray-800/40 border border-gray-700/40'}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">

      
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-white font-medium text-center">
            <li>
              <a href="#home" className="hover:text-blue-400 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-400 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#education" className="hover:text-blue-400 transition-colors">
                Education
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-blue-400 transition-colors">
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-400 transition-colors">
                Contact
              </a>
            </li>
          </ul>

          {/* Desktop Theme Toggle */}
          <div className="hidden md:block">
            <ThemeToggle />
          </div>

          {/* Mobile: Theme Toggle + Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white"
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
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 text-white">
            <ul className="space-y-3">
              <li>
                <a href="#home" onClick={closeMenu} className="block hover:text-blue-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={closeMenu} className="block hover:text-blue-400 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" onClick={closeMenu} className="block hover:text-blue-400 transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" onClick={closeMenu} className="block hover:text-blue-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
