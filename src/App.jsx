import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import SocialMediaWidget from './components/SocialMediaWidget';
import Values from './components/Values';
import Testimonials from './components/Testimonials';
import AIAssistant from './components/AIAssistant';
import Contact from './components/Contact';
import Footer from './components/Footer';
import OurStory from './components/OurStory';
import ScrollToTop from './components/ScrollToTop';
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

  const HomePage = () => (
    <>
      <Hero t={t} />
      <Values t={t} />
      <Testimonials t={t} />
      <AIAssistant t={t} />
      <Contact t={t} />
    </>
  );

  return (
    <Router>
      <ScrollToTop />
      <div className="font-sans bg-white text-black overflow-x-hidden">
        <Header 
          language={language} 
          setLanguage={setLanguage} 
          isScrolled={isScrolled}
          t={t}
        />
        
        <SocialMediaWidget t={t} />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/our-story" element={<OurStory language={language} />} />
        </Routes>
        
        <Footer t={t} />
      </div>
    </Router>
  );
}

export default App;
