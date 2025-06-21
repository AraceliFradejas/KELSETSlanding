const Testimonials = ({ t }) => {
  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <svg 
        key={i} 
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
        fill="currentColor" 
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-animate">
          <h2 className="section-title text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            {t.testimonials.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {t.testimonials.items.map((testimonial, index) => (
            <div 
              key={index}
              className="scroll-animate rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group overflow-hidden relative h-[500px] cursor-pointer"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Background Image */}
              <img 
                src={testimonial.image}
                alt={testimonial.name}
                className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e) => {
                  e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=ff6b47&color=fff&size=500`;
                }}
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                {/* Stars Rating */}
                <div className="flex items-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-2xl font-light mb-6 leading-snug">
                  <p>"{testimonial.text}"</p>
                </blockquote>

                {/* Author Info */}
                <div className="mt-auto">
                  <h4 className="font-bold text-xl">{testimonial.name}</h4>
                  <p className="text-base opacity-80 font-medium">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center scroll-animate">
          <p className="text-xl text-gray-600">
            {t.testimonials.title === "What Our Community Says" 
              ? "Join thousands of satisfied customers who trust KelceTS"
              : "Únete a miles de clientes satisfechos que confían en KelceTS"
            }
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 border-t pt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="scroll-animate">
              <div className="text-3xl font-bold text-chiefs-red-500 mb-2">5.0</div>
              <div className="text-gray-600">
                {t.testimonials.title === "What Our Community Says" ? "Average Rating" : "Calificación Promedio"}
              </div>
            </div>
            <div className="scroll-animate">
              <div className="text-3xl font-bold text-chiefs-red-500 mb-2">10K+</div>
              <div className="text-gray-600">
                {t.testimonials.title === "What Our Community Says" ? "Happy Customers" : "Clientes Felices"}
              </div>
            </div>
            <div className="scroll-animate">
              <div className="text-3xl font-bold text-chiefs-red-500 mb-2">99%</div>
              <div className="text-gray-600">
                {t.testimonials.title === "What Our Community Says" ? "Satisfaction Rate" : "Tasa de Satisfacción"}
              </div>
            </div>
            <div className="scroll-animate">
              <div className="text-3xl font-bold text-chiefs-red-500 mb-2">50+</div>
              <div className="text-gray-600">
                {t.testimonials.title === "What Our Community Says" ? "Countries" : "Países"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
