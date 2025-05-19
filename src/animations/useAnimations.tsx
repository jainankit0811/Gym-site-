import { useEffect } from 'react';

export const useAnimations = () => {
  useEffect(() => {
    // Add the necessary CSS for animations
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fade-in {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      @keyframes slide-in-left {
        from { opacity: 0; transform: translateX(-100px); }
        to { opacity: 1; transform: translateX(0); }
      }
      
      @keyframes slide-in-right {
        from { opacity: 0; transform: translateX(100px); }
        to { opacity: 1; transform: translateX(0); }
      }
      
      @keyframes scale-in {
        from { opacity: 0; transform: scale(0.8); }
        to { opacity: 1; transform: scale(1); }
      }
      
      .animate-fade-in {
        animation: fade-in 1s ease forwards;
      }
      
      .animate-slide-in-left {
        animation: slide-in-left 1s ease forwards;
      }
      
      .animate-slide-in-right {
        animation: slide-in-right 1s ease forwards;
      }
      
      .animate-scale-in {
        animation: scale-in 0.6s ease forwards;
      }
      
      .animate-delay-100 {
        animation-delay: 100ms;
      }
      
      .animate-delay-200 {
        animation-delay: 200ms;
      }
      
      .animate-delay-300 {
        animation-delay: 300ms;
      }
      
      .animate-delay-400 {
        animation-delay: 400ms;
      }
      
      .animate-delay-500 {
        animation-delay: 500ms;
      }
    `;
    document.head.appendChild(style);

    // Implement scroll animations
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.scroll-animate:not(.animated)');
      
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isVisible = (rect.top <= window.innerHeight * 0.8 && rect.bottom >= 0);
        
        if (isVisible) {
          el.classList.add('animated');
          
          if (el.classList.contains('scroll-fade-in')) {
            el.classList.add('animate-fade-in');
          } else if (el.classList.contains('scroll-slide-in-left')) {
            el.classList.add('animate-slide-in-left');
          } else if (el.classList.contains('scroll-slide-in-right')) {
            el.classList.add('animate-slide-in-right');
          } else if (el.classList.contains('scroll-scale-in')) {
            el.classList.add('animate-scale-in');
          }
        }
      });
    };

    // Run once to animate elements already in view
    animateOnScroll();
    
    // Listen for scroll events
    window.addEventListener('scroll', animateOnScroll);
    
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
      document.head.removeChild(style);
    };
  }, []);
};

export default useAnimations;