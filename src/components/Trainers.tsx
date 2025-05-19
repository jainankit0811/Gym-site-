  import React from 'react';
  import { Instagram, Twitter, Linkedin } from 'lucide-react';
  
  interface TrainerProps {
    name: string;
    role: string;
    bio: string;
    image: string;
  }
  
  const TrainerCard: React.FC<TrainerProps> = ({ name, role, bio, image }) => {
    return (
      <div className="overflow-hidden transition-all duration-300 bg-white rounded-lg shadow-md hover:shadow-xl">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-64"
        />
        
        <div className="p-6">
          <h3 className="mb-1 text-xl font-bold">{name}</h3>
          <p className="mb-3 text-red-500 font-medium">{role}</p>
          <p className="mb-4 text-gray-600">{bio}</p>
          
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-blue-500">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-pink-500">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-700">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  const Trainers: React.FC = () => {
    const trainers = [
      {
        name: "Alex Johnson",
        role: "Head Trainer",
        bio: "Certified personal trainer with 10+ years of experience specializing in strength and conditioning.",
        image: "https://images.pexels.com/photos/6456300/pexels-photo-6456300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
      },
      {
        name: "Sarah Williams",
        role: "Nutrition Specialist",
        bio: "Nutrition expert with a passion for helping clients achieve their goals through balanced diet plans.",
        image: "https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
      },
      {
        name: "Michael Chen",
        role: "Yoga Instructor",
        bio: "Experienced yoga instructor specializing in improving flexibility, core strength, and mental wellness.",
        image: "https://images.pexels.com/photos/7362670/pexels-photo-7362670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
      },
      {
        name: "Emma Rodriguez",
        role: "Cardio Specialist",
        bio: "Expert in high-intensity interval training and cardio workouts for maximum fat burning results.",
        image: "https://images.pexels.com/photos/6389075/pexels-photo-6389075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
      }
    ];
  
    return (
      <section id="trainers" className="section bg-gray-100">
        <div className="container">
          <h2 className="section-title">Meet Our Trainers</h2>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {trainers.map((trainer, index) => (
              <TrainerCard
                key={index}
                name={trainer.name}
                role={trainer.role}
                bio={trainer.bio}
                image={trainer.image}
              />
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Trainers;