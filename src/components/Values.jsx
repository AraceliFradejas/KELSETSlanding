const Values = ({ t }) => {
  return (
    <section id="values" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-animate">
          <h2 className="section-title text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            {t.values.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.values.subtitle}
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {t.values.items.map((value, index) => (
            <div 
              key={index}
              className="scroll-animate bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Icon */}
              <div className="value-icon group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">{value.icon}</span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-chiefs-red-500 transition-colors duration-300">
                {value.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>

              {/* Decorative element */}
              <div className="mt-6 w-12 h-1 bg-gradient-to-r from-chiefs-red-400 to-chiefs-gold-400 rounded-full mx-auto group-hover:w-16 transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Additional Content */}
        <div className="mt-20 text-center scroll-animate">
          <div className="bg-gradient-to-r from-chiefs-red-400 to-chiefs-gold-400 rounded-3xl p-12 text-white max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">
              {t.values.title === "Our Values" ? "Join the Revolution" : "Únete a la Revolución"}
            </h3>
            <p className="text-xl mb-8 opacity-90">
              {t.values.title === "Our Values" 
                ? "Every step with KelceTS is a step towards the future. Experience the perfect combination of innovation and style."
                : "Cada paso con KelceTS es un paso hacia el futuro. Experimenta la combinación perfecta de innovación y estilo."
              }
            </p>
            <button className="bg-white text-chiefs-red-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 btn-hover-effect">
              {t.values.title === "Our Values" ? "Explore Collection" : "Explorar Colección"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
