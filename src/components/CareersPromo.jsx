import { Link } from 'react-router-dom';

const CareersPromo = ({ language = 'en', translations }) => {
  const t = translations[language];

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 bg-gradient-to-r from-lavender-500/10 to-chiefs-red-500/10">
      <div className="container mx-auto max-w-6xl text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 sm:mb-8 bg-gradient-to-r from-chiefs-red-500 to-lavender-400 bg-clip-text text-transparent">
            {t.careersPromo.title}
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed mb-8 sm:mb-12">
            {t.careersPromo.subtitle}
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {t.careersPromo.highlights.map((highlight, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-chiefs-red-500/50 transition-all duration-300">
                <div className="text-3xl mb-4">{highlight.icon}</div>
                <h3 className="text-lg font-bold text-lavender-400 mb-2">{highlight.title}</h3>
                <p className="text-gray-400 text-sm">{highlight.description}</p>
              </div>
            ))}
          </div>

          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Link
              to="/careers"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-chiefs-red-500 to-lavender-500 text-white font-bold rounded-full text-lg hover:from-chiefs-red-600 hover:to-lavender-600 transition-all duration-300 transform hover:scale-105"
            >
              {t.careersPromo.joinBtn}
            </Link>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 border-2 border-chiefs-red-500 text-chiefs-red-500 font-bold rounded-full text-lg hover:bg-chiefs-red-500 hover:text-white transition-all duration-300"
            >
              {t.careersPromo.learnMoreBtn}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersPromo;
