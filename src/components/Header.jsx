import { useState, useEffect } from 'react';

const Header = ({ language, setLanguage, isScrolled, t }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="./KelceTS_logo.png" 
              alt="KelceTS Logo" 
              className="w-10 h-10 object-contain"
            />
            <h1 className={`text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-black' : 'text-white'
            }`}>
              KelceTS
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className={`font-medium transition-colors duration-300 hover:text-chiefs-red-400 ${
                isScrolled ? 'text-black' : 'text-white'
              }`}
            >
              {t.nav.home}
            </button>
            <button 
              onClick={() => scrollToSection('values')}
              className={`font-medium transition-colors duration-300 hover:text-chiefs-red-400 ${
                isScrolled ? 'text-black' : 'text-white'
              }`}
            >
              {t.nav.values}
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className={`font-medium transition-colors duration-300 hover:text-chiefs-red-400 ${
                isScrolled ? 'text-black' : 'text-white'
              }`}
            >
              {t.nav.reviews}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`font-medium transition-colors duration-300 hover:text-chiefs-red-400 ${
                isScrolled ? 'text-black' : 'text-white'
              }`}
            >
              {t.nav.contact}
            </button>

            {/* Language Switcher */}
            <div className="flex items-center space-x-2 ml-4">
              <button 
                onClick={() => setLanguage('en')}
                className={`flex items-center space-x-1 px-3 py-1 rounded-full transition-all duration-300 hover:text-chiefs-red-400 ${
                  language === 'en' 
                    ? 'bg-chiefs-red-500 text-white' 
                    : `${isScrolled ? 'text-black hover:bg-gray-100' : 'text-white hover:bg-white/20'}`
                }`}
              >
                <span>🇺🇸</span>
                <span className="text-sm font-medium">EN</span>
              </button>
              <button 
                onClick={() => setLanguage('es')}
                className={`flex items-center space-x-1 px-3 py-1 rounded-full transition-all duration-300 hover:text-chiefs-red-400 ${
                  language === 'es' 
                    ? 'bg-chiefs-red-500 text-white' 
                    : `${isScrolled ? 'text-black hover:bg-gray-100' : 'text-white hover:bg-white/20'}`
                }`}
              >
                <span>🇪🇸</span>
                <span className="text-sm font-medium">ES</span>
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 transition-colors duration-300 ${
              isScrolled ? 'text-black' : 'text-white'
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
            <nav className="flex flex-col p-4 space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-left text-black font-medium hover:text-chiefs-red-400 transition-colors duration-300"
              >
                {t.nav.home}
              </button>
              <button 
                onClick={() => scrollToSection('values')}
                className="text-left text-black font-medium hover:text-chiefs-red-400 transition-colors duration-300"
              >
                {t.nav.values}
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-left text-black font-medium hover:text-chiefs-red-400 transition-colors duration-300"
              >
                {t.nav.reviews}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-black font-medium hover:text-chiefs-red-400 transition-colors duration-300"
              >
                {t.nav.contact}
              </button>
              
              {/* Mobile Language Switcher */}
              <div className="flex items-center space-x-2 pt-4 border-t">
                <button 
                  onClick={() => setLanguage('en')}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-full transition-all duration-300 ${
                    language === 'en' 
                      ? 'bg-chiefs-red-500 text-white' 
                      : 'text-black hover:bg-gray-100'
                  }`}
                >
                  <span>🇺🇸</span>
                  <span className="text-sm font-medium">EN</span>
                </button>
                <button 
                  onClick={() => setLanguage('es')}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-full transition-all duration-300 ${
                    language === 'es' 
                      ? 'bg-chiefs-red-500 text-white' 
                      : 'text-black hover:bg-gray-100'
                  }`}
                >
                  <span>🇪🇸</span>
                  <span className="text-sm font-medium">ES</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
