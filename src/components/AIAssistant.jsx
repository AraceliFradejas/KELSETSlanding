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
            {t.assistant.title === "Meet Our Smart Assistant" ? (
              <>
                Meet Our Smart Assistant: <span style={{fontFamily: 'Georgia, Times, serif'}}>tAilor</span>
              </>
            ) : (
              <>
                Conoce Nuestro Asistente Inteligente: <span style={{fontFamily: 'Georgia, Times, serif'}}>tAilor</span>
              </>
            )}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            {t.assistant.title === "Meet Our Smart Assistant" 
              ? "Have questions? Ask our smart assistant, powered by Microsoft Copilot Studio."
              : "¿Tienes preguntas? Pregunta a nuestro asistente inteligente, impulsado por Microsoft Copilot Studio."
            }
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {t.assistant.title === "Meet Our Smart Assistant" 
              ? "Get instant answers about our products, shipping, returns, and more. Our AI assistant is here to help you 24/7."
              : "Obtén respuestas instantáneas sobre nuestros productos, envíos, devoluciones y más. Nuestro asistente de IA está aquí para ayudarte 24/7."
            }
          </p>
        </div>

        {/* AI Assistant Interface */}
        <div className="max-w-4xl mx-auto scroll-animate">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20">
            
            {/* tAilor Introduction Card */}
            <div className="text-center mb-8">
              <div className="w-32 h-32 bg-gradient-to-br from-chiefs-red-500 to-lavender-400 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              
              <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-chiefs-red-500 to-lavender-400 bg-clip-text text-transparent" style={{fontFamily: 'Georgia, Times, serif'}}>
                tAilor ✨
              </h3>
              
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                {t.assistant.title === "Meet Our Smart Assistant" 
                  ? "Your Swift-inspired AI companion, ready to help you with style and intelligence! 🎵"
                  : "¡Tu compañero de IA inspirado en Swift, listo para ayudarte con estilo e inteligencia! 🎵"
                }
              </p>

              <div className="flex items-center justify-center space-x-3 mb-12">
                <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse shadow-lg" />
                <span className="text-green-400 font-semibold text-lg">
                  {t.assistant.title === "Meet Our Smart Assistant" ? "Online & Ready to Help" : "En línea y listo para ayudar"}
                </span>
              </div>

              {/* Main CTA Button */}
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="bg-gradient-to-r from-chiefs-red-500 to-lavender-400 text-white px-16 py-8 rounded-3xl font-bold text-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:from-chiefs-red-600 hover:to-lavender-500 flex items-center justify-center mx-auto space-x-4 mb-8"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span>
                  {isExpanded 
                    ? (t.assistant.title === "Meet Our Smart Assistant" ? (
                        <>Close <span style={{fontFamily: 'Georgia, Times, serif'}}>tAilor</span></>
                      ) : (
                        <>Cerrar <span style={{fontFamily: 'Georgia, Times, serif'}}>tAilor</span></>
                      ))
                    : (t.assistant.title === "Meet Our Smart Assistant" ? (
                        <>Start Conversation with <span style={{fontFamily: 'Georgia, Times, serif'}}>tAilor</span></>
                      ) : (
                        <>Iniciar Conversación con <span style={{fontFamily: 'Georgia, Times, serif'}}>tAilor</span></>
                      ))
                  }
                </span>
                <span className="text-2xl">🎵</span>
              </button>

              {!isExpanded && (
                <p className="text-gray-400 text-sm">
                  {t.assistant.title === "Meet Our Smart Assistant" 
                    ? "Click above to start chatting with our AI assistant"
                    : "Haz clic arriba para comenzar a chatear con nuestro asistente de IA"
                  }
                </p>
              )}
            </div>

            {/* Microsoft Copilot Studio Embed */}
            <div className={`transition-all duration-500 overflow-hidden ${isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="border-t border-white/20 pt-6">
                {/* Microsoft Copilot Studio iframe integration */}
                <div className="bg-white/5 rounded-2xl p-2 border border-white/20">
                  <iframe 
                    src="https://copilotstudio.microsoft.com/environments/Default-22426826-dc4c-401a-8d0e-7f97e64c0f99/bots/cr3d7_tAilorKelceTsAiAssistant_-3fN0x/webchat?__version__=2" 
                    className="w-full h-96 rounded-xl border-0" 
                    title="KelceTS Assistant"
                    allow="microphone"
                    style={{ minHeight: '400px' }}
                  />
                </div>
              </div>
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
                {/* Bandera de la UE */}
                <svg className="w-8 h-8" viewBox="0 0 24 16" fill="none">
                  <rect width="24" height="16" fill="#003399"/>
                  <g fill="#FFCC00">
                    <circle cx="12" cy="3" r="0.8"/>
                    <circle cx="15.5" cy="4" r="0.8"/>
                    <circle cx="17.5" cy="6.5" r="0.8"/>
                    <circle cx="17.5" cy="9.5" r="0.8"/>
                    <circle cx="15.5" cy="12" r="0.8"/>
                    <circle cx="12" cy="13" r="0.8"/>
                    <circle cx="8.5" cy="12" r="0.8"/>
                    <circle cx="6.5" cy="9.5" r="0.8"/>
                    <circle cx="6.5" cy="6.5" r="0.8"/>
                    <circle cx="8.5" cy="4" r="0.8"/>
                    <circle cx="12" cy="6" r="0.8"/>
                    <circle cx="12" cy="10" r="0.8"/>
                  </g>
                </svg>
              </div>
              <h4 className="font-bold text-lg mb-2">{t.assistant.title === "Meet Our Smart Assistant" ? "European Union" : "Unión Europea"}</h4>
              <p className="text-gray-400">
                {t.assistant.title === "Meet Our Smart Assistant" 
                  ? "We speak all European Union languages"
                  : "Hablamos todos los idiomas de la Unión Europea"
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
