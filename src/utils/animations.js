// Animation utilities for scroll-based animations

export const initScrollAnimations = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, observerOptions);

  // Observe all elements with scroll-animate class
  document.querySelectorAll('.scroll-animate').forEach(el => {
    observer.observe(el);
  });

  return observer;
};

// Smooth scroll to section
export const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const headerHeight = 80; // Header height in pixels
    const targetPosition = element.offsetTop - headerHeight;
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
};

// Parallax effect for hero video
export const initParallax = () => {
  const video = document.querySelector('.parallax-video');
  if (!video) return;

  const handleScroll = () => {
    const scrolled = window.pageYOffset;
    const parallax = scrolled * 0.5;
    video.style.transform = `translateY(${parallax}px)`;
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  
  return () => window.removeEventListener('scroll', handleScroll);
};

// Typing animation effect
export const createTypingEffect = (element, text, speed = 50) => {
  if (!element) return;
  
  element.textContent = '';
  let i = 0;
  
  const typeWriter = () => {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  };
  
  typeWriter();
};

// Loading animation for images
export const handleImageLoad = (img, placeholder) => {
  img.onload = () => {
    img.style.opacity = '1';
    if (placeholder) {
      placeholder.style.opacity = '0';
      setTimeout(() => placeholder.remove(), 300);
    }
  };
  
  img.onerror = () => {
    if (placeholder) {
      placeholder.style.opacity = '1';
    }
  };
};

// Form validation utilities
export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const validateForm = (formData) => {
  const errors = {};
  
  if (!formData.name || formData.name.length < 2) {
    errors.name = 'Name must be at least 2 characters long';
  }
  
  if (!formData.email || !validateEmail(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }
  
  if (!formData.message || formData.message.length < 10) {
    errors.message = 'Message must be at least 10 characters long';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};
