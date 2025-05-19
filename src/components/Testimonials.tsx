import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface TestimonialProps {
  name: string;
  image: string;
  text: string;
  rating: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ name, image, text, rating }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md md:flex-row">
      <img
        src={image}
        alt={name}
        className="object-cover w-24 h-24 mb-4 rounded-full md:mb-0 md:mr-6"
      />
      
      <div>
        <div className="flex mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
            />
          ))}
        </div>
        
        <p className="mb-3 text-gray-600 italic">"{text}"</p>
        <p className="font-bold">{name}</p>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Jennifer Clark",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      text: "I've been a member for 6 months and lost over 30 pounds. The trainers are amazing and the facilities are always clean!",
      rating: 5
    },
    {
      name: "David Thompson",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      text: "FitZone has completely transformed my approach to fitness. The 24/7 access fits perfectly with my busy schedule.",
      rating: 5
    },
    {
      name: "Maria Lopez",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      text: "The nutrition counseling combined with personal training helped me reach my goals faster than I ever thought possible.",
      rating: 4
    },
    {
      name: "Robert Wilson",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      text: "Great atmosphere, friendly staff, and top-notch equipment. I recommend FitZone to all my friends!",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const showNext = () => {
    if (animating) return;
    setAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(testimonials.length / 2));
    setTimeout(() => setAnimating(false), 500);
  };

  const showPrev = () => {
    if (animating) return;
    setAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + Math.ceil(testimonials.length / 2)) % Math.ceil(testimonials.length / 2));
    setTimeout(() => setAnimating(false), 500);
  };

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">What Our Members Say</h2>
        
        <div className="relative">
          <div className="hidden md:grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <Testimonial
                key={index}
                name={testimonial.name}
                image={testimonial.image}
                text={testimonial.text}
                rating={testimonial.rating}
              />
            ))}
          </div>
          
          {/* Mobile slider */}
          <div className="relative md:hidden">
            <div 
              className={`transition-transform duration-500 ease-in-out ${animating ? 'opacity-50' : 'opacity-100'}`}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className={`w-full ${index === currentIndex ? 'block' : 'hidden'}`}
                >
                  <Testimonial
                    name={testimonial.name}
                    image={testimonial.image}
                    text={testimonial.text}
                    rating={testimonial.rating}
                  />
                </div>
              ))}
            </div>
            
            <button
              onClick={showPrev}
              className="absolute left-0 z-10 p-2 -translate-y-1/2 bg-white rounded-full shadow-md top-1/2"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            
            <button
              onClick={showNext}
              className="absolute right-0 z-10 p-2 -translate-y-1/2 bg-white rounded-full shadow-md top-1/2"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;