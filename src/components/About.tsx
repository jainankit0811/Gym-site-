import React from 'react';
import { Check } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    "24/7 access to all facilities",
    "State-of-the-art equipment",
    "Certified professional trainers",
    "Clean and spacious workout areas",
    "Nutritional counseling services",
    "Variety of group fitness classes",
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-12">
          <div className="lg:w-1/2">
            <img 
              src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
              alt="Modern gym facility" 
              className="object-cover w-full h-[400px] rounded-lg shadow-lg"
            />
          </div>
          
          <div className="mt-8 lg:mt-0 lg:w-1/2">
            <h2 className="mb-6 text-3xl font-bold">About FitZone Gym</h2>
            
            <p className="mb-6 text-gray-600">
              Founded in 2015, FitZone Gym has been committed to helping people achieve their fitness goals in a supportive and motivating environment. Our state-of-the-art facilities and expert trainers ensure that you get the most out of every workout.
            </p>
            
            <p className="mb-8 text-gray-600">
              Whether you're just starting your fitness journey or looking to take your training to the next level, FitZone has everything you need to succeed.
            </p>
            
            <div className="mb-8 space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <Check className="flex-shrink-0 w-5 h-5 mr-2 text-red-500" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            
            <a href="#join" className="btn btn-primary">
              Join Our Community
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;