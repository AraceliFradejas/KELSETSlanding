import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const OurStory = ({ language = 'en' }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 5;

  const translations = {
    en: {
      title: 'Our Story',
      heroDescription: 'Everything started with an <span class="font-semibold italic">"It\'s me, hi"</span> very <span class="text-pink-500 font-semibold">Swiftie</span> in 2023, the year my brother Diego and I were amazed at the cinema in Príncipe Pío, on October 13, 2023, in a packed theater watching <span class="font-semibold">The Eras Tour</span> movie. We thought that was as close as we\'d get to that spectacle, and that\'s when we both became Swifties.',
      mayTitle: 'May 2024 — "We hit the nail"',
      mayDescription: 'I had given up all hope. I didn\'t have a ticket and a magic Ticketmaster code arrived the same morning of the first concert, <strong>May 29, 2024</strong>. But I didn\'t see it until 4 PM, just as I was heading to my Generative AI class.<br><br>I desperately wanted to buy it, but my brother, more pragmatic than a bridge in <span class="italic">Cruel Summer</span>, reminded me that getting to the Bernabéu at the last second was impossible. That "no" became the biggest <span class="italic">Plot Twist</span> of my life: the spark of <span class="font-semibold">KelceTS</span> was born.',
      aiClassTitle: 'Generative AI Class — "You belong with AI"',
      aiClassDescription: 'That same afternoon I attended the course "Applications of Generative Artificial Intelligence" at Universidad Pontificia Comillas ICAI-ICADE.<br><br>The practice consisted of creating an agent with ChatGPT for a European sneaker startup. In my head, the pieces fit together with a crash worthy of <span class="italic">Style</span>. What if we mixed fashion, sports, and the epic <span class="italic">Swiftie</span> narrative? Thus <span class="font-semibold">KelceTS</span> was born, uniting the passion of <span class="font-semibold">Travis Kelce</span> and the storytelling of <span class="font-semibold">Taylor Swift</span>.',
      growthTitle: '2025 — Prompts, Python, Power Ups... a <span class="italic">Love Story</span> with AI',
      backLink: '«Back to December» (back to home)'
    },
    es: {
      title: 'Nuestra Historia',
      heroDescription: 'Todo empezó con un <span class="font-semibold italic">"It\'s me, hi"</span> muy <span class="text-pink-500 font-semibold">swiftie</span> en 2023, el año en que mi hermano Diego y yo alucinamos en el cine de Príncipe Pío, el 13 de octubre de 2023, en una sala abarrotada viendo la película de <span class="font-semibold">The Eras Tour</span>. Creíamos que eso era lo más cerca que estaríamos de aquel espectáculo, y fue ahí cuando nos hicimos swifties los dos.',
      mayTitle: 'Mayo 2024 — «dimos en el palo»',
      mayDescription: 'Aquí lo había dado todo por perdido. No tenía entrada y me llegó un código mágico de Ticketmaster la misma mañana del primer concierto, el <strong>29/05/2024</strong>. Pero no lo vi hasta las 16h, justo cuando iba a clase de IA generativa.<br><br>Como loca quería comprarlo, pero mi hermano, más pragmático que un puente en <span class="italic">Cruel Summer</span>, me recordó que llegar al Bernabéu en el último segundo era imposible. Ese «no» se convirtió en el mayor <span class="italic">Plot Twist</span> de mi vida: nacía la chispa de <span class="font-semibold">KelceTS</span>.',
      aiClassTitle: 'Clase de IA generativa — "You belong with AI"',
      aiClassDescription: 'Aquella misma tarde asistí al curso «Aplicaciones de la Inteligencia Artificial Generativa» en la Universidad Pontificia Comillas ICAI-ICADE.<br><br>La práctica consistía en crear un agente con ChatGPT para una startup de zapatillas europeas. En mi cabeza las piezas encajaron con un estruendo digno de <span class="italic">Style</span>. ¿Y si mezclábamos moda, deporte y la épica <span class="italic">swiftie</span>? Así nació <span class="font-semibold">KelceTS</span>, uniendo la pasión de <span class="font-semibold">Travis Kelce</span> y la narrativa de <span class="font-semibold">Taylor Swift</span>.',
      growthTitle: '2025 — Prompts, Python, Power Ups... una <span class="italic">Love Story</span> con la IA',
      backLink: '«Back to December» (vuelta al inicio)'
    }
  };

  const t = translations[language];

  const taylorImages = [
    '/taylor0.jpg',
    '/taylor1.avif',
    '/taylor2.jpeg',
    '/taylor3.jpg',
    '/taylor4.jpeg'
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Scroll animations
  useEffect(() => {
    const handleScrollAnimations = () => {
      const animatedElements = document.querySelectorAll('.scroll-animate');
      
      animatedElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('show');
        }
      });
    };

    window.addEventListener('scroll', handleScrollAnimations);
    handleScrollAnimations();
    
    return () => window.removeEventListener('scroll', handleScrollAnimations);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const growthDescriptionEN = `
    <p>Since that initial spark, KelceTS became my project laboratory: from <a class="underline hover:text-chiefs-red-500" href="https://medium.com/@araceli.fradejas/how-i-built-an-ai-assistant-to-analyze-customer-complaints-for-kelcets-s-l-93dbc59601d1" target="_blank" rel="noopener noreferrer">analyzing complaints with AI</a> to creating a multilingual <span class="italic">customer experience</span> system.</p>
    <p>I invented a story about how KelceTS emerged as a fictional company on <strong>Oxford Street, London</strong> —one of my favorite streets where I've lived unforgettable moments— and used it in the <strong>Capstone Project of the Master's in Business AI at IIA</strong> and in the <strong>Google Kaggle Competition</strong>.</p>
    <p>In 2025, KelceTS continued growing with me as I dove deep into the Copilot universe, creating conversational agents from scratch, orchestrating flows with LangGraph, and evaluating responses with RAGAS as part of my specialization in Generative AI. Between prompts, Python lines, and creative challenges, KelceTS was my testing ground, my portfolio, and my flag.</p>
    <p>Additionally, with the boost from the <strong>Microsoft Power Up</strong> course, I dared to integrate a real agent within our website for the first time, designing an entire end-to-end experience with React, Node.js, and automatic deployment on Vercel.</p>
    <p>Today, every challenge overcome and every app published sounds like a chorus of <span class="italic">The Man</span>, because although nobody bet on me... here I am, leading my own era.</p>
  `;

  const growthDescriptionES = `
    <p>Desde aquella chispa inicial, KelceTS se convirtió en mi laboratorio de proyectos: desde <a class="underline hover:text-chiefs-red-500" href="https://medium.com/@araceli.fradejas/how-i-built-an-ai-assistant-to-analyze-customer-complaints-for-kelcets-s-l-93dbc59601d1" target="_blank" rel="noopener noreferrer">analizar reclamaciones con IA</a> hasta crear un sistema multilingüe de <span class="italic">customer experience</span>.</p>
    <p>Me inventé una historia sobre cómo surgió KelceTS como empresa ficticia en <strong>Oxford Street, Londres</strong> —una de mis calles favoritas donde he vivido momentos inolvidables— y la utilicé en el <strong>Capstone Project del Máster en IA Empresarial del IIA</strong> y en el <strong>Concurso de Kaggle de Google</strong>.</p>
    <p>En 2025, KelceTS siguió creciendo conmigo mientras me sumergía de lleno en el universo Copilot, creando agentes conversacionales desde cero, orquestando flujos con LangGraph y evaluando respuestas con RAGAS como parte de mi especialización en IA Generativa. Entre prompts, líneas de Python y desafíos creativos, KelceTS fue mi campo de pruebas, mi portfolio y mi bandera.</p>
    <p>Además, con el impulso del curso <strong>Microsoft Power Up</strong>, me atreví a integrar por primera vez un agente real dentro de nuestra web, diseñando toda una experiencia end-to-end con React, Node.js y despliegue automático en Vercel.</p>
    <p>Hoy, cada reto superado y cada app publicada suena como un estribillo de <span class="italic">The Man</span>, porque aunque nadie apostaba por mí… aquí estoy, liderando mi propia era.</p>
  `;

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white min-h-screen">
      {/* Hero Section with Carousel */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6 sm:space-y-8 scroll-animate opacity-0 translate-y-8 transition-all duration-600">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 sm:mb-8">
              {t.title}
            </h1>
            
            {/* Taylor Swift Carousel */}
            <div className="max-w-4xl mx-auto mb-8">
              <div className="relative h-64 sm:h-80 md:h-96 lg:h-[28rem] overflow-hidden rounded-2xl">
                <div 
                  className="flex transition-transform duration-500 ease-in-out h-full"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {taylorImages.map((image, index) => (
                    <div key={index} className="min-w-full flex-shrink-0">
                      <img 
                        src={image} 
                        alt={`Taylor Swift Eras Tour ${index + 1}`} 
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  ))}
                </div>
                
                {/* Carousel Controls */}
                <button 
                  onClick={prevSlide}
                  className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
                >
                  &#8249;
                </button>
                <button 
                  onClick={nextSlide}
                  className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
                >
                  &#8250;
                </button>
                
                {/* Indicators */}
                <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
                        index === currentSlide ? 'bg-white' : 'bg-white/50 hover:bg-white/80'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <p 
              className="max-w-4xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed px-4"
              dangerouslySetInnerHTML={{ __html: t.heroDescription }}
            />
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 sm:py-16 px-4">
        <div className="container mx-auto max-w-6xl space-y-12 sm:space-y-16 lg:space-y-20">
          
          {/* May 2024 Story */}
          <div className="grid md:grid-cols-3 gap-8 items-center scroll-animate opacity-0 translate-y-8 transition-all duration-600">
            <div className="md:col-span-1">
              <img 
                src="/kelce1.avif" 
                alt="KelceTS Birth Moment" 
                className="w-full h-64 sm:h-72 md:h-80 object-cover object-center rounded-2xl shadow-lg"
              />
            </div>
            <div className="md:col-span-2 bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20">
              <h2 
                className="text-xl sm:text-2xl md:text-3xl font-bold mb-4"
                dangerouslySetInnerHTML={{ __html: t.mayTitle }}
              />
              <p 
                className="text-gray-300 leading-relaxed text-sm sm:text-base"
                dangerouslySetInnerHTML={{ __html: t.mayDescription }}
              />
            </div>
          </div>

          {/* AI Class */}
          <div className="grid md:grid-cols-3 gap-8 items-center scroll-animate opacity-0 translate-y-8 transition-all duration-600">
            <div className="md:col-span-1">
              <img 
                src="/ARACEL_1.JPG" 
                alt="AI Generative Class at Universidad Pontificia Comillas" 
                className="w-full h-64 sm:h-72 md:h-80 object-cover object-center rounded-2xl shadow-lg"
              />
            </div>
            <div className="md:col-span-2 bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20">
              <h2 
                className="text-xl sm:text-2xl md:text-3xl font-bold mb-4"
                dangerouslySetInnerHTML={{ __html: t.aiClassTitle }}
              />
              <p 
                className="text-gray-300 leading-relaxed text-sm sm:text-base"
                dangerouslySetInnerHTML={{ __html: t.aiClassDescription }}
              />
            </div>
          </div>

          {/* 2025 Growth */}
          <div className="grid md:grid-cols-3 gap-8 items-start scroll-animate opacity-0 translate-y-8 transition-all duration-600">
            <div className="md:col-span-1 space-y-4">
              {/* YouTube Video 1 */}
              <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                <iframe 
                  src="https://www.youtube.com/embed/W2kK3otzWX0" 
                  title="Kaggle Competition Video"
                  className="w-full h-full"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                />
              </div>
              {/* YouTube Video 2 */}
              <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                <iframe 
                  src="https://www.youtube.com/embed/8oreCBeRBVs" 
                  title="Capstone Project Video"
                  className="w-full h-full"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                />
              </div>
            </div>
            <div className="md:col-span-2 bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20">
              <h2 
                className="text-xl sm:text-2xl md:text-3xl font-bold mb-4"
                dangerouslySetInnerHTML={{ __html: t.growthTitle }}
              />
              <div 
                className="space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base"
                dangerouslySetInnerHTML={{ 
                  __html: language === 'en' ? growthDescriptionEN : growthDescriptionES 
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer Link */}
      <section className="py-12 sm:py-16 text-center px-4">
        <Link 
          to="/" 
          onClick={() => {
            // Scroll to top when navigating to home
            setTimeout(() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 100);
          }}
          className="inline-flex items-center space-x-2 text-base sm:text-lg underline hover:text-chiefs-red-500 transition-colors"
        >
          <span>{t.backLink}</span>
        </Link>
      </section>

      <style jsx>{`
        .scroll-animate.show {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </div>
  );
};

export default OurStory;
