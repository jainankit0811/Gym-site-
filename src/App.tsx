import { useEffect } from 'react';
import useAnimations from './animations/useAnimations';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Pricing from './components/Pricing';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Trainers from './components/Trainers';

function App() {
  useAnimations();

  useEffect(() => {
    document.title = 'FitZone Gym - Transform Your Body, Transform Your Life';
  }, []);

  return (
    <>
      <div className="font-sans">
        <Navbar />
        <Hero />
        <Services />
        <About />
        <Trainers />
        <Testimonials />
        <Pricing />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;