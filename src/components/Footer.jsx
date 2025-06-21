const Footer = ({ t }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Main Footer Content - Inspired by SOS Expats */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-10">
          {/* Logo and Info - Left Column */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start">
            <div className="flex items-center mb-5">
              <img 
                src="/KelceTS_logo.png" 
                alt="KelceTS Logo" 
                className="w-12 h-12 object-contain"
              />
              <h3 className="text-3xl font-bold ml-2">KelceTS</h3>
            </div>
            <p className="text-gray-300 mb-6 text-center md:text-left">
              {t.footer.description}
            </p>
          </div>
          
          {/* Links - Middle Column */}
          <div className="md:col-span-4">
            <div className="grid grid-cols-1 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-5">{t.footer.links.company}</h4>
                <p className="text-gray-300 text-sm">
                  {t.footer.links.company === "Company" 
                    ? "More sections coming soon..." 
                    : "Más secciones próximamente..."
                  }
                </p>
              </div>
            </div>
          </div>
          
          {/* Social Links - Right Column */}
          <div className="md:col-span-4">
            <div className="bg-gradient-to-br from-chiefs-red-500 to-chiefs-gold-500 rounded-3xl p-6 shadow-lg">
              <div className="grid grid-cols-1 gap-3">
                <a 
                  href={t.footer.social.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group"
                  aria-label="GitHub"
                >
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 flex items-center space-x-3 hover:bg-white/30 hover:scale-105 transition-all duration-300 hover:shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span className="text-white font-medium">GitHub</span>
                  </div>
                </a>
                <a 
                  href={t.footer.social.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group"
                  aria-label="LinkedIn"
                >
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 flex items-center space-x-3 hover:bg-white/30 hover:scale-105 transition-all duration-300 hover:shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <span className="text-white font-medium">LinkedIn</span>
                  </div>
                </a>
                <a 
                  href={t.footer.social.youtube} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group"
                  aria-label="YouTube"
                >
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 flex items-center space-x-3 hover:bg-white/30 hover:scale-105 transition-all duration-300 hover:shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    <span className="text-white font-medium">YouTube</span>
                  </div>
                </a>
                <a 
                  href={t.footer.social.medium} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group"
                  aria-label="Medium"
                >
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 flex items-center space-x-3 hover:bg-white/30 hover:scale-105 transition-all duration-300 hover:shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                    </svg>
                    <span className="text-white font-medium">Medium</span>
                  </div>
                </a>
                <a 
                  href={t.footer.social.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group"
                  aria-label="X/Twitter"
                >
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 flex items-center space-x-3 hover:bg-white/30 hover:scale-105 transition-all duration-300 hover:shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                    <span className="text-white font-medium">X/Twitter</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Disclaimer Box - SOS Expats Style */}
        <div className="border-t border-gray-700 pt-8 pb-6">
          <div className="bg-gray-800/50 rounded-xl p-6 mb-8">
            <h4 className="text-lg font-medium mb-3 text-center text-gray-200">
              Microsoft Power Up - Copilot Studio
            </h4>
            <p className="text-gray-300 text-sm text-center leading-relaxed">
              {t.footer.disclaimer}
            </p>
          </div>
        </div>
        
        {/* Bottom Footer with Copyright and Small Links */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0 text-center md:text-left">
              {t.footer.copyright}
            </p>
            
            <div className="flex space-x-6 text-sm">
              <span className="text-gray-400">
                {t.footer.links.privacy}
              </span>
              <span className="text-gray-400">
                {t.footer.links.terms}
              </span>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-chiefs-red-500 to-chiefs-gold-500 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300 btn-hover-effect z-40"
          aria-label="Back to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
