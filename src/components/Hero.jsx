import React from 'react';

const Hero = ({ t }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      <div className="container mx-auto h-full">
        <div className="grid lg:grid-cols-2 h-full">
          {/* Video Column - Left Side */}
          <div className="relative overflow-hidden">
            {/* VIDEO LOCAL ACTIVADO */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                objectFit: 'cover',
                objectPosition: 'center'
              }}
            >
              <source src="/video/0620.mp4" type="video/mp4" />
              Tu navegador no soporta videos HTML5.
            </video>
            
            {/* IFRAME DE SYNTHESIA (desactivado) */}
            {/* 
            <iframe 
              src="https://share.synthesia.io/1bef5265-8b18-4cc3-8ee1-9a5d9e7f75ca?autoplay=1&loop=1&muted=1" 
              loading="eager" 
              title="Synthesia video player - Kelce TS" 
              allowFullScreen 
              allow="autoplay; encrypted-media; fullscreen;" 
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                border: 'none'
              }}
            />
            */}
          </div>

          {/* Content Column - Right Side */}
          <div className="relative flex items-center justify-center bg-gradient-to-br from-chiefs-red-600 via-chiefs-red-500 to-chiefs-gold-500 text-white">
            <div className="max-w-lg mx-auto px-8 text-center lg:text-left animate-fadeIn">
              <div className="mb-8">
                {/* Main Slogan */}
                <h1 className="hero-text text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  {t.hero.slogan}
                </h1>
                
                {/* Subtitle */}
                <p className="text-lg md:text-xl mb-8 text-gray-100 font-light">
                  {t.hero.subtitle}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button 
                  onClick={() => scrollToSection('values')}
                  className="btn-hover-effect bg-white text-chiefs-red-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
                >
                  {t.hero.cta}
                </button>
                
                <button 
                  onClick={() => scrollToSection('testimonials')}
                  className="btn-hover-effect border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-chiefs-red-600 transition-all duration-300"
                >
                  {t.hero.ctaSecondary}
                </button>
              </div>
            </div>

            {/* Floating Elements for visual interest */}
            <div className="absolute top-20 right-20 w-4 h-4 bg-chiefs-gold-400 rounded-full opacity-60 float-animation hidden lg:block" />
            <div className="absolute bottom-32 left-20 w-6 h-6 bg-white rounded-full opacity-40 float-animation hidden lg:block" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/3 left-10 w-3 h-3 bg-chiefs-gold-300 rounded-full opacity-50 float-animation hidden lg:block" style={{ animationDelay: '2s' }} />
          </div>
        </div>

        {/* Scroll Indicator - Mobile */}
        <div className="lg:hidden absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection('values')}
            className="text-white hover:text-chiefs-gold-400 transition-colors duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
