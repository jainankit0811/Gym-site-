import React from 'react';
import { Dumbbell, Heart, UserCheck, Cog as Yoga, Utensils, Clock } from 'lucide-react';

interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceProps> = ({ icon, title, description }) => {
  return (
    <div className="p-6 transition-all duration-300 bg-white rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1">
      <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-white bg-red-500 rounded-full">
        {icon}
      </div>
      <h3 className="mb-3 text-xl font-bold text-center">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "Personal Training",
      description: "One-on-one sessions with certified trainers to achieve your specific fitness goals."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Cardio",
      description: "State-of-the-art cardio equipment and classes to improve your cardiovascular health."
    },
    {
      icon: <Dumbbell className="w-8 h-8" />,
      title: "Weight Training",
      description: "Comprehensive weight training facilities with expert guidance."
    },
    {
      icon: <Yoga className="w-8 h-8" />,
      title: "Yoga & Flexibility",
      description: "Yoga and stretching classes to improve flexibility and reduce stress."
    },
    {
      icon: <Utensils className="w-8 h-8" />,
      title: "Nutrition Plans",
      description: "Personalized nutrition plans to complement your fitness regimen."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Access",
      description: "Unlimited gym access with our premium membership packages."
    }
  ];

  return (
    <section id="services" className="section bg-gray-100">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;