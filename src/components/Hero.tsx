import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative flex items-center min-h-screen text-white bg-cover bg-center"
      style={{ 
        backgroundImage: 'url("https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750")'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      
      <div className="container relative z-10">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Transform Your Body,<br />Transform Your Life
          </h1>
          
          <p className="mb-8 text-lg text-gray-200 md:text-xl">
            Join FitZone Gym today for expert training & nutrition plans tailored to help you achieve your fitness goals.
          </p>
          
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <a href="#join" className="btn btn-primary">
              Join Now
            </a>
            
            <a href="#services" className="btn btn-outline">
              Explore Services <ChevronRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;