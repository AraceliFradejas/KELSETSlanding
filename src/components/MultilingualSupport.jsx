import React from 'react';

const MultilingualSupport = ({ t }) => {
  const euLanguages = [
    { code: 'bg', name: 'Bulgarian', flag: '🇧🇬' },
    { code: 'hr', name: 'Croatian', flag: '🇭🇷' },
    { code: 'cs', name: 'Czech', flag: '🇨🇿' },
    { code: 'da', name: 'Danish', flag: '🇩🇰' },
    { code: 'nl', name: 'Dutch', flag: '🇳🇱' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'et', name: 'Estonian', flag: '🇪🇪' },
    { code: 'fi', name: 'Finnish', flag: '🇫🇮' },
    { code: 'fr', name: 'French', flag: '🇫🇷' },
    { code: 'de', name: 'German', flag: '🇩🇪' },
    { code: 'el', name: 'Greek', flag: '🇬🇷' },
    { code: 'hu', name: 'Hungarian', flag: '🇭🇺' },
    { code: 'ga', name: 'Irish', flag: '🇮🇪' },
    { code: 'it', name: 'Italian', flag: '🇮🇹' },
    { code: 'lv', name: 'Latvian', flag: '🇱🇻' },
    { code: 'lt', name: 'Lithuanian', flag: '🇱🇹' },
    { code: 'mt', name: 'Maltese', flag: '🇲🇹' },
    { code: 'pl', name: 'Polish', flag: '🇵🇱' },
    { code: 'pt', name: 'Portuguese', flag: '🇵🇹' },
    { code: 'ro', name: 'Romanian', flag: '🇷🇴' },
    { code: 'sk', name: 'Slovak', flag: '🇸🇰' },
    { code: 'sl', name: 'Slovenian', flag: '🇸🇮' },
    { code: 'es', name: 'Spanish', flag: '🇪🇸' },
    { code: 'sv', name: 'Swedish', flag: '🇸🇪' }
  ];

  return (
    <section id="multilingual" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="order-2 lg:order-1">
            <div className="mb-8">
              <h2 className="section-title text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t.multilingual.title}
              </h2>
              <p className="text-chiefs-red-600 font-semibold text-lg mb-6">
                {t.multilingual.subtitle}
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                {t.multilingual.description}
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg border-2 border-chiefs-red-100 hover:border-chiefs-red-300 transition-all duration-300">
                <div className="text-3xl mb-2">🌍</div>
                <div className="text-2xl font-bold text-chiefs-red-600 mb-1">{t.multilingual.languages}</div>
                <div className="text-sm text-gray-600">Official EU Languages</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg border-2 border-chiefs-gold-100 hover:border-chiefs-gold-300 transition-all duration-300">
                <div className="text-3xl mb-2">🤖</div>
                <div className="text-2xl font-bold text-chiefs-gold-600 mb-1">{t.multilingual.availability}</div>
                <div className="text-sm text-gray-600">AI-Powered Support</div>
              </div>
            </div>

            {/* Language Grid */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Supported Languages:</h3>
              <div className="grid grid-cols-6 md:grid-cols-8 gap-2">
                {euLanguages.map((lang, index) => (
                  <div 
                    key={lang.code}
                    className="text-center p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="text-2xl mb-1">{lang.flag}</div>
                    <div className="text-xs text-gray-600">{lang.code.toUpperCase()}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <button className="bg-gradient-to-r from-chiefs-red-500 to-chiefs-gold-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              {t.multilingual.ctaText}
            </button>
          </div>

          {/* Image Side */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-chiefs-red-400/20 to-chiefs-gold-400/20 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white p-4 rounded-3xl shadow-xl">
                <img 
                  src="/3.png" 
                  alt="Multilingual AI Customer Support" 
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-chiefs-red-500 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg float-animation">
                AI
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-chiefs-gold-500 rounded-full flex items-center justify-center text-white text-xl shadow-lg float-animation" style={{ animationDelay: '1s' }}>
                24
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MultilingualSupport;
