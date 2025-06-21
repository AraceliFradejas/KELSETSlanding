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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {t.testimonials.items.map((testimonial, index) => (
            <div 
              key={index}
              className="testimonial-card scroll-animate"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Profile Image */}
              <div className="flex items-center mb-6">
                <div className="relative">
                  <img 
                    src={testimonial.image || `/api/placeholder/80/80`}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-gray-100"
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=ff6b47&color=fff&size=80`;
                    }}
                  />
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-lg text-gray-900">{testimonial.name}</h4>
                  <p className="text-chiefs-red-500 font-medium">{testimonial.role}</p>
                </div>
              </div>

              {/* Stars Rating */}
              <div className="flex items-center mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-gray-700 italic text-lg leading-relaxed mb-4">
                "{testimonial.text}"
              </blockquote>

              {/* Quote Icon */}
              <div className="flex justify-end">
                <svg className="w-8 h-8 text-coral-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
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
