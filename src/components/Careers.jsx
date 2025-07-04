import { Link } from 'react-router-dom';

const Careers = ({ language = 'en' }) => {
  const translations = {
    en: {
      title: 'How We Design the Future',
      subtitle: 'Dare to walk with us?',
      loverEraTitle: '🎤 Welcome to Your Lover Era (Kelce Version)',
      loverEraDescription: `At Kelce TS we live by eras. We have our intense periods (<em>Reputation Era</em> in production), our acoustic phases (<em>folklore</em> in research), our euphoric launches (<em>1989</em>) and even moments of introspection (<em>Evermore</em> when it's time for balance).<br><br>But everything we do has something in common: ✨ We design so people feel good from their feet to their soul.`,
      values: [
        '💡 Radical creativity',
        '🤝 Unfiltered empathy', 
        '🧠 AI with purpose',
        '💬 Emotional communication',
        '🎶 Rhythm at work'
      ],
      rolesTitle: 'See yourself here? Spoiler: yes.',
      rolesDescription: 'You might not see your exact role among our openings, but if you vibe with our energy, we want you close.',
      roles: [
        {
          title: 'UX Designer',
          description: 'You\'ll design emotions, not just screens'
        },
        {
          title: 'Data Scientist', 
          description: 'You\'ll find patterns where others only see numbers'
        },
        {
          title: 'Content Creator',
          description: 'You\'ll tell stories that stick in minds and on TikTok'
        },
        {
          title: 'Product Manager',
          description: 'You\'ll care for the product like a signed vinyl'
        },
        {
          title: 'AI Developer',
          description: 'You\'ll teach machines to have sensitivity'
        }
      ],
      viewRolesBtn: '🔎 View open roles',
      onboardingTitle: '✨ Your Kelce Era starts with a song... and with AI',
      onboardingDescription: `From the moment you complete your application, our system automatically detects you as part of the team. 🎯 No scripts. No waiting.<br><br>📡 An autonomous artificial intelligence agent, trained by our team with care <em>(and a little bit of folklore)</em>, activates for you.`,
      onboardingFeatures: [
        '📩 A personalized email by <strong>tAilor</strong>, our glitter AI',
        '👯 Your onboarding <em>buddy</em>, automatically chosen according to your profile',
        '🗓️ Your first week\'s schedule',
        '🎧 A playlist with your <em>onboarding Era</em> (yes, it includes <em>Cruel Summer</em>)'
      ],
      onboardingNote: 'And if you have questions... <strong>tAilor</strong> awaits you on our website to respond with love, efficiency and sparkling emojis ✨',
      discoverBtn: '🎟️ Discover how your Kelce Era begins',
      backToHome: 'Back to Home'
    },
    es: {
      title: 'Diseñamos Cómo Se Pisa el Futuro',
      subtitle: '¿Te atreves a caminar con nosotras?',
      loverEraTitle: '🎤 Bienvenida a tu Lover Era (versión Kelce)',
      loverEraDescription: `En Kelce TS vivimos por eras. Tenemos nuestras épocas intensas (<em>Reputation Era</em> en producción), nuestras fases acústicas (<em>folklore</em> en investigación), nuestros lanzamientos eufóricos (<em>1989</em>) y hasta momentos de introspección (<em>Evermore</em> cuando toca balance).<br><br>Pero todo lo que hacemos tiene algo en común: ✨ Diseñamos para que la gente se sienta bien desde los pies hasta el alma.`,
      values: [
        '💡 Creatividad radical',
        '🤝 Empatía sin filtros',
        '🧠 IA con propósito', 
        '💬 Comunicación emocional',
        '🎶 Ritmo en el trabajo'
      ],
      rolesTitle: '¿Te ves aquí? Spoiler: sí.',
      rolesDescription: 'Puedes no ver tu rol exacto entre nuestras vacantes, pero si vibras con nuestra energía, te queremos cerca.',
      roles: [
        {
          title: 'UX Designer',
          description: 'Diseñarás emociones, no solo pantallas'
        },
        {
          title: 'Data Scientist',
          description: 'Encontrarás patrones donde otros solo ven números'
        },
        {
          title: 'Content Creator', 
          description: 'Contarás historias que se quedan en la mente y en TikTok'
        },
        {
          title: 'Product Manager',
          description: 'Cuidarás del producto como de un vinilo firmado'
        },
        {
          title: 'AI Developer',
          description: 'Enseñarás a las máquinas a tener sensibilidad'
        }
      ],
      viewRolesBtn: '🔎 Ver roles abiertos',
      onboardingTitle: '✨ Tu Era Kelce empieza con una canción… y con IA',
      onboardingDescription: `Desde el momento en que completas tu inscripción, nuestro sistema te detecta automáticamente como parte del team. 🎯 Sin scripts. Sin esperas.<br><br>📡 Un agente autónomo de inteligencia artificial, entrenado por nuestro equipo con mimo <em>(y un poquito de folklore)</em>, se activa para ti.`,
      onboardingFeatures: [
        '📩 Un email personalizado por <strong>tAilor</strong>, nuestra IA glitter',
        '👯 Tu <em>buddy</em> de onboarding, elegido automáticamente según tu perfil',
        '🗓️ La agenda de tu primera semana',
        '🎧 Una playlist con tu <em>Era onboarding</em> (sí, incluye <em>Cruel Summer</em>)'
      ],
      onboardingNote: 'Y si tienes dudas… <strong>tAilor</strong> te espera en nuestra web para responder con amor, eficiencia y emojis brillantes ✨',
      discoverBtn: '🎟️ Descubre cómo empieza tu Era Kelce',
      backToHome: 'Volver al Inicio'
    }
  };

  const t = translations[language];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white min-h-screen">
      {/* Hero Header */}
      <header className="relative bg-gradient-to-r from-chiefs-red-500 to-lavender-500 text-white py-16 sm:py-20 lg:py-24 px-4">
        {/* Hero Image Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src="/hero_carreer.png" 
            alt="Career Hero" 
            className="w-full h-full object-cover opacity-30 object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-chiefs-red-500/80 to-lavender-500/80"></div>
        </div>
        
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 leading-tight">
            {t.title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>
      </header>

      {/* Lover Era Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-chiefs-red-500">
                {t.loverEraTitle}
              </h2>
              <div 
                className="text-base sm:text-lg leading-relaxed mb-8 text-gray-300"
                dangerouslySetInnerHTML={{ __html: t.loverEraDescription }}
              />
              <ul className="space-y-3 sm:space-y-4 text-base sm:text-lg">
                {t.values.map((value, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <span className="text-lavender-400">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="order-first md:order-last">
              <img 
                src="/1-carreer.png" 
                alt="Lover Era at KelceTS" 
                className="w-full h-auto rounded-2xl shadow-2xl border-2 border-chiefs-red-500/30"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-last md:order-first">
              <img 
                src="/2-carreer.png" 
                alt="Join our team" 
                className="w-full h-auto rounded-2xl shadow-2xl border-2 border-lavender-500/30"
              />
            </div>
            
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-chiefs-red-500">
                {t.rolesTitle}
              </h2>
              <p className="text-base sm:text-lg leading-relaxed mb-8 sm:mb-12 text-gray-300">
                {t.rolesDescription}
              </p>
              
              <div className="grid gap-6 sm:gap-8 mb-8 sm:mb-12">
                {t.roles.map((role, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 sm:p-8 border border-white/20 hover:border-chiefs-red-500/50 transition-all duration-300">
                    <h3 className="text-lg sm:text-xl font-bold text-lavender-400 mb-2 sm:mb-3">
                      {role.title}
                    </h3>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                      {role.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="text-center md:text-left">
                <a 
                  href="#roles" 
                  className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-chiefs-red-500 to-lavender-500 text-white font-bold rounded-full text-base sm:text-lg hover:from-chiefs-red-600 hover:to-lavender-600 transition-all duration-300 transform hover:scale-105"
                >
                  {t.viewRolesBtn}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Onboarding Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-r from-lavender-500/10 to-chiefs-red-500/10">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-chiefs-red-500">
                {t.onboardingTitle}
              </h2>
              <div 
                className="text-base sm:text-lg leading-relaxed mb-8 text-gray-300"
                dangerouslySetInnerHTML={{ __html: t.onboardingDescription }}
              />
              
              <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-12">
                {t.onboardingFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-base sm:text-lg text-gray-300" dangerouslySetInnerHTML={{ __html: feature }} />
                  </li>
                ))}
              </ul>

              <div 
                className="text-base sm:text-lg mb-8 sm:mb-12 text-gray-300"
                dangerouslySetInnerHTML={{ __html: t.onboardingNote }}
              />
            </div>
            
            <div className="order-first md:order-last">
              <img 
                src="/3-carreer.png" 
                alt="KelceTS Onboarding Experience" 
                className="w-full h-auto rounded-2xl shadow-2xl border-2 border-chiefs-red-500/30 rotate-3 hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="text-center space-y-6">
            <a 
              href="#welcome" 
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-chiefs-red-500 to-lavender-500 text-white font-bold rounded-full text-base sm:text-lg hover:from-chiefs-red-600 hover:to-lavender-600 transition-all duration-300 transform hover:scale-105"
            >
              {t.discoverBtn}
            </a>
            
            <div>
              <Link 
                to="/"
                className="inline-flex items-center space-x-2 text-base sm:text-lg underline hover:text-chiefs-red-500 transition-colors"
              >
                <span>{t.backToHome}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
