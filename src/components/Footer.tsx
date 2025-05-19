import React from 'react';
import { Dumbbell } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center mb-4">
              <Dumbbell className="w-6 h-6 mr-2 text-red-500" />
              <span className="text-xl font-bold">FitZone Gym</span>
            </div>
            <p className="text-gray-400 mb-4">
              Transforming lives through fitness since 2015. Join our community and start your journey today.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#trainers" className="text-gray-400 hover:text-white transition-colors">Trainers</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Personal Training</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Group Classes</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Nutrition Planning</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Fitness Assessment</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Weight Loss Programs</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for fitness tips and special offers.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 text-gray-800 bg-gray-100 rounded-l-md focus:outline-none focus:ring-1 focus:ring-red-500"
              />
              <button
                type="submit"
                className="px-4 py-2 text-white bg-red-500 rounded-r-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} FitZone Gym. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;