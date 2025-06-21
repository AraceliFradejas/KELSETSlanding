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
        <div className="max-w-4xl mx-auto">
          {/* Content */}
          <div className="text-center">
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-2xl mx-auto">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default MultilingualSupport;
