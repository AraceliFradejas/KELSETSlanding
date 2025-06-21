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
          {t.values.items.map((value, index) => {
            // Mapping values to specific images
            let imageSrc = '';
            if (value.title.toLowerCase().includes('technology') || value.title.toLowerCase().includes('tecnología')) {
              imageSrc = '/3.png';
            } else if (value.title.toLowerCase().includes('style') || value.title.toLowerCase().includes('estilo')) {
              imageSrc = '/10.png';
            } else if (value.title.toLowerCase().includes('trust') || value.title.toLowerCase().includes('confianza')) {
              imageSrc = '/4.png';
            } else if (value.title.toLowerCase().includes('culture') || value.title.toLowerCase().includes('cultura')) {
              imageSrc = '/8.png';
            }

            return (
              <div 
                key={index}
                className="scroll-animate rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group overflow-hidden relative h-96 cursor-pointer"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Background Image */}
                <img 
                  src={imageSrc} 
                  alt={value.title}
                  className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                  <h3 className="text-3xl font-bold mb-2">
                    {value.title}
                  </h3>
                  <p className="text-base opacity-95 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Content */}
        <div className="mt-20 text-center scroll-animate">
          <div className="bg-gradient-to-r from-chiefs-red-400 to-chiefs-gold-400 rounded-3xl p-12 text-white max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">
              {t.values.title === "Our Values" ? "Join the Revolution" : "Únete a la Revolución"}
            </h3>
            <p className="text-xl opacity-90">
              {t.values.title === "Our Values" 
                ? "Every step with KelceTS is a step towards the future. Experience the perfect combination of innovation and style."
                : "Cada paso con KelceTS es un paso hacia el futuro. Experimenta la combinación perfecta de innovación y estilo."
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
