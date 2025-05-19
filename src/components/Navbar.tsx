import { Dumbbell, Menu, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

 

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container flex items-center justify-between">
        <a href="#home" className="flex items-center space-x-2">
          <Dumbbell className={`h-8 w-8 ${isScrolled ? `text-primary` : 'text-white'}`} />
          <span className={`text-xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
            FitZone Gym
          </span>
        </a>

        <div className="hidden md:flex md:items-center md:space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-300 ${
                isScrolled ? 'text-gray-700 hover:text-primary-' : 'text-white hover:text-primary-'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#join"
            className={`btn ${isScrolled ? 'text-gray-900' : 'text-white'}`}
          >
            Join Now
          </a>
        </div>

        <button 
          className="p-2 md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className={`h-6 w-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
          ) : (
            <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute left-0 right-0 bg-white shadow-lg md:hidden">
          <div className="container py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`block py-2 text-gray-700 hover:text-primary-`}
                onClick={toggleMenu}
              >
                {link.name}
              </a>
            ))}
            <div className="flex space-x-2 py-2">
            </div>
            <a
              href="#join"
              className={`block py-2 text-gray-900 hover:bg-opacity-90 rounded-md text-center mt-4`}
              onClick={toggleMenu}
            >
              Join Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;