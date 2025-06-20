import { useState } from 'react';

const AIAssistant = ({ t }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-chiefs-red-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-lavender-400/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-animate">
          <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-6 py-3 mb-6">
            <svg className="w-6 h-6 text-chiefs-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-medium text-white/80">
              {t.assistant.title === "Meet Our Smart Assistant" ? "Powered by Microsoft Copilot Studio" : "Impulsado por Microsoft Copilot Studio"}
            </span>
          </div>

          <h2 className="section-title text-4xl md:text-5xl font-bold mb-6">
            {t.assistant.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            {t.assistant.subtitle}
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {t.assistant.description}
          </p>
        </div>

        {/* AI Assistant Interface */}
        <div className="max-w-4xl mx-auto scroll-animate">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
            {/* Assistant Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-chiefs-red-500 to-lavender-400 rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold">KelceTS Assistant</h3>
                  <p className="text-green-400 text-sm flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                    {t.assistant.title === "Meet Our Smart Assistant" ? "Online" : "En línea"}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-white/60 hover:text-white transition-colors duration-300"
              >
                <svg className={`w-6 h-6 transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* Sample Conversation */}
            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm">👤</span>
                </div>
                <div className="bg-white/10 rounded-2xl rounded-tl-none p-4 max-w-md">
                  <p className="text-sm">
                    {t.assistant.title === "Meet Our Smart Assistant" 
                      ? "What sizes do you have available?"
                      : "¿Qué tallas tienen disponibles?"
                    }
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 justify-end">
                <div className="bg-gradient-to-r from-chiefs-red-500 to-lavender-400 rounded-2xl rounded-tr-none p-4 max-w-md">
                  <p className="text-sm text-white">
                    {t.assistant.title === "Meet Our Smart Assistant" 
                      ? "We have sizes from 6 to 14 (US) available in all our models! Would you like me to help you find your perfect fit? 👟"
                      : "¡Tenemos tallas de la 36 a la 48 (EU) disponibles en todos nuestros modelos! ¿Te gustaría que te ayude a encontrar tu talla perfecta? 👟"
                    }
                  </p>
                </div>
                <div className="w-8 h-8 bg-gradient-to-br from-chiefs-red-500 to-lavender-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm">🤖</span>
                </div>
              </div>
            </div>

            {/* Microsoft Copilot Studio Embed */}
            <div className={`transition-all duration-500 overflow-hidden ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="border-t border-white/20 pt-6">
                {/* Placeholder for the actual Microsoft Copilot Studio iframe */}
                <div className="bg-white/5 rounded-2xl p-6 text-center border-2 border-dashed border-white/20">
                  <svg className="w-12 h-12 text-white/40 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <p className="text-white/60 mb-4">
                    {t.assistant.title === "Meet Our Smart Assistant" 
                      ? "Microsoft Copilot Studio integration will be embedded here"
                      : "La integración de Microsoft Copilot Studio se incrustará aquí"
                    }
                  </p>
                  {/* 
                  Uncomment this when you have the actual iframe URL from Microsoft Copilot Studio:
                  
                  <iframe 
                    src="https://copilotstudio.microsoft.com/embed/your-agent-id" 
                    className="w-full h-80 rounded-xl border-0" 
                    title="KelceTS Assistant"
                    allow="microphone"
                  />
                  */}
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="bg-gradient-to-r from-chiefs-red-500 to-lavender-400 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300 btn-hover-effect"
              >
                {isExpanded 
                  ? (t.assistant.title === "Meet Our Smart Assistant" ? "Close Assistant" : "Cerrar Asistente")
                  : t.assistant.ctaText
                }
              </button>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center scroll-animate">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-chiefs-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-lg mb-2">24/7 {t.assistant.title === "Meet Our Smart Assistant" ? "Available" : "Disponible"}</h4>
              <p className="text-gray-400">
                {t.assistant.title === "Meet Our Smart Assistant" 
                  ? "Get instant help anytime, anywhere"
                  : "Obtén ayuda instantánea en cualquier momento"
                }
              </p>
            </div>

            <div className="text-center scroll-animate">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-lavender-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h4 className="font-bold text-lg mb-2">{t.assistant.title === "Meet Our Smart Assistant" ? "Smart Answers" : "Respuestas Inteligentes"}</h4>
              <p className="text-gray-400">
                {t.assistant.title === "Meet Our Smart Assistant" 
                  ? "AI-powered responses tailored to your needs"
                  : "Respuestas potenciadas por IA adaptadas a tus necesidades"
                }
              </p>
            </div>

            <div className="text-center scroll-animate">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h4 className="font-bold text-lg mb-2">{t.assistant.title === "Meet Our Smart Assistant" ? "Multilingual" : "Multiidioma"}</h4>
              <p className="text-gray-400">
                {t.assistant.title === "Meet Our Smart Assistant" 
                  ? "Supports English and Spanish"
                  : "Soporta inglés y español"
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAssistant;
