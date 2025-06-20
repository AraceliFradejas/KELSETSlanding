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
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-5">{t.footer.links.company}</h4>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-gray-300 hover:text-chiefs-red-500 transition-colors duration-300">
                      {t.footer.links.about}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-chiefs-red-500 transition-colors duration-300">
                      {t.footer.links.careers}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-chiefs-red-500 transition-colors duration-300">
                      {t.footer.links.press}
                    </a>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-5">{t.footer.links.support}</h4>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-gray-300 hover:text-chiefs-red-500 transition-colors duration-300">
                      {t.footer.links.help}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-chiefs-red-500 transition-colors duration-300">
                      {t.footer.links.shipping}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-chiefs-red-500 transition-colors duration-300">
                      {t.footer.links.returns}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Social Links - Right Column */}
          <div className="md:col-span-4">
            <h4 className="text-lg font-semibold mb-5 text-center md:text-left">
              {t.footer.social.follow}
            </h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <a 
                href={t.footer.social.twitter} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group"
                aria-label="Twitter"
              >
                <div className="w-11 h-11 bg-white/10 rounded-full flex items-center justify-center hover:bg-chiefs-red-500 transition-all duration-300">
                  <svg className="w-5 h-5 text-gray-300 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </div>
              </a>
              <a 
                href={t.footer.social.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group"
                aria-label="LinkedIn"
              >
                <div className="w-11 h-11 bg-white/10 rounded-full flex items-center justify-center hover:bg-chiefs-red-500 transition-all duration-300">
                  <svg className="w-5 h-5 text-gray-300 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
              </a>
              <a 
                href={t.footer.social.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group"
                aria-label="GitHub"
              >
                <div className="w-11 h-11 bg-white/10 rounded-full flex items-center justify-center hover:bg-chiefs-red-500 transition-all duration-300">
                  <svg className="w-5 h-5 text-gray-300 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
              </a>
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
              <a href="#" className="text-gray-400 hover:text-chiefs-red-500 transition-colors duration-300">
                {t.footer.links.privacy}
              </a>
              <a href="#" className="text-gray-400 hover:text-chiefs-red-500 transition-colors duration-300">
                {t.footer.links.terms}
              </a>
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
