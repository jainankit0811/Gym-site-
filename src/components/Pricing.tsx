import React from 'react';
import { Check, X } from 'lucide-react';

interface PricingPlanProps {
  title: string;
  price: string;
  features: Array<{ text: string; included: boolean }>;
  isPopular?: boolean;
}

const PricingPlan: React.FC<PricingPlanProps> = ({ title, price, features, isPopular = false }) => {
  return (
    <div className={`relative p-6 bg-white rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2 ${
      isPopular ? 'border-2 border-red-500 shadow-lg' : ''
    }`}>
      {isPopular && (
        <div className="absolute top-0 right-0 px-3 py-1 text-xs font-semibold text-white transform translate-x-2 -translate-y-1/2 bg-red-500 rounded-full">
          Most Popular
        </div>
      )}
      
      <h3 className="mb-4 text-xl font-bold text-center">{title}</h3>
      
      <div className="mb-6 text-center">
        <span className="text-4xl font-bold">{price}</span>
        <span className="text-gray-500">/month</span>
      </div>
      
      <ul className="mb-8 space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            {feature.included ? (
              <Check className="flex-shrink-0 w-5 h-5 mr-2 text-green-500" />
            ) : (
              <X className="flex-shrink-0 w-5 h-5 mr-2 text-gray-400" />
            )}
            <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
              {feature.text}
            </span>
          </li>
        ))}
      </ul>
      
      <a
        href="#join"
        className={`block w-full py-2 text-center rounded-md transition-colors duration-300 ${
          isPopular
            ? 'bg-red-500 text-white hover:bg-red-600'
            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
        }`}
      >
        Choose Plan
      </a>
    </div>
  );
};

const Pricing: React.FC = () => {
  const plans = [
    {
      title: "Basic",
      price: "$29.99",
      features: [
        { text: "Gym access (6 AM - 10 PM)", included: true },
        { text: "Standard equipment usage", included: true },
        { text: "Locker access", included: true },
        { text: "1 Group class per week", included: true },
        { text: "Personal training sessions", included: false },
        { text: "Nutrition consultation", included: false },
        { text: "Access to premium areas", included: false },
      ],
    },
    {
      title: "Premium",
      price: "$49.99",
      features: [
        { text: "24/7 gym access", included: true },
        { text: "All equipment usage", included: true },
        { text: "Locker access", included: true },
        { text: "Unlimited group classes", included: true },
        { text: "2 Personal training sessions/month", included: true },
        { text: "Nutrition consultation", included: true },
        { text: "Access to premium areas", included: false },
      ],
      isPopular: true,
    },
    {
      title: "Elite",
      price: "$79.99",
      features: [
        { text: "24/7 gym access", included: true },
        { text: "All equipment usage", included: true },
        { text: "Premium locker access", included: true },
        { text: "Unlimited group classes", included: true },
        { text: "4 Personal training sessions/month", included: true },
        { text: "Monthly nutrition consultation", included: true },
        { text: "Full access to premium areas", included: true },
      ],
    },
  ];

  return (
    <section id="pricing" className="section bg-gray-100">
      <div className="container">
        <h2 className="section-title">Membership Plans</h2>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <PricingPlan
              key={index}
              title={plan.title}
              price={plan.price}
              features={plan.features}
              isPopular={plan.isPopular}
            />
          ))}
        </div>
        
        <div className="mt-12 p-6 bg-blue-900 rounded-lg text-center text-white">
          <h3 className="mb-4 text-2xl font-bold">Try FitZone Risk-Free</h3>
          <p className="mb-6">Start with a 7-day free trial. No credit card required.</p>
          <a href="#join" className="btn bg-white text-blue-900 hover:bg-gray-100">
            Start Free Trial
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;