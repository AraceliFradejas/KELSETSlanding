import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Values from './components/Values';
import Testimonials from './components/Testimonials';
import AIAssistant from './components/AIAssistant';
import MultilingualSupport from './components/MultilingualSupport';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { translations } from './data/translations';

function App() {
  const [language, setLanguage] = useState('en');
  const [isScrolled, setIsScrolled] = useState(false);

  // Manejar scroll para animaciones
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Animaciones al hacer scroll
      const elements = document.querySelectorAll('.scroll-animate');
      elements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          el.classList.add('animate');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = translations[language];

  return (
    <div className="font-sans bg-white text-black overflow-x-hidden">
      <Header 
        language={language} 
        setLanguage={setLanguage} 
        isScrolled={isScrolled}
        t={t}
      />
      
      <Hero t={t} />
      
      <Values t={t} />
      
      <Testimonials t={t} />
      
      <AIAssistant t={t} />
      
      <MultilingualSupport t={t} />
      
      <Contact t={t} />
      
      <Footer t={t} />
    </div>
  );
}

export default App;
