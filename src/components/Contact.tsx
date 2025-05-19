import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <h3 className="mb-6 text-2xl font-bold">Get In Touch</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <MapPin className="flex-shrink-0 w-5 h-5 mt-1 mr-3 text-red-500" />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-gray-600">123 Fitness Avenue, Workout City, WC 12345</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="flex-shrink-0 w-5 h-5 mt-1 mr-3 text-red-500" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-gray-600">(555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="flex-shrink-0 w-5 h-5 mt-1 mr-3 text-red-500" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-600">info@fitzgym.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="flex-shrink-0 w-5 h-5 mt-1 mr-3 text-red-500" />
                <div>
                  <p className="font-medium">Hours</p>
                  <p className="text-gray-600">Monday-Friday: 5am-11pm</p>
                  <p className="text-gray-600">Saturday-Sunday: 7am-9pm</p>
                </div>
              </div>
            </div>
            
            <h3 className="mb-4 text-xl font-bold">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="p-2 text-red-500 bg-red-100 rounded-full hover:bg-red-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 text-red-500 bg-red-100 rounded-full hover:bg-red-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 text-red-500 bg-red-100 rounded-full hover:bg-red-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 text-red-500 bg-red-100 rounded-full hover:bg-red-200">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="mb-6 text-2xl font-bold">Send Us a Message</h3>
            
            <form id="join" className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                    placeholder="Your email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block mb-1 text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                  placeholder="Your phone number"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block mb-1 text-sm font-medium text-gray-700">
                  Subject
                </label>
                <select
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                >
                  <option value="">Select a subject</option>
                  <option value="membership">Membership Inquiry</option>
                  <option value="training">Personal Training</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-1 text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full btn btn-primary"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;