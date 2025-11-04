import React from 'react';
import SectionWrapper from './SectionWrapper';
import { services, subscriptionPlans } from '../constants';

const ServicesSection: React.FC = () => {
  return (
    <SectionWrapper
      id="services"
      title="Nos Services & Tarifs"
      subtitle="Des offres flexibles pour atteindre tous vos objectifs."
    >
      {/* Services Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-20">
        {services.map((service) => (
          <div key={service.name} className="flex flex-col items-center justify-center p-4 bg-emerald-800 rounded-lg transition-transform transform hover:-translate-y-2 duration-300">
            <service.icon className="text-emerald-500 text-5xl mb-3" />
            <h3 className="font-bold text-sm md:text-base">{service.name}</h3>
          </div>
        ))}
      </div>

      {/* Fitness Action Image */}
      <div className="max-w-5xl mx-auto mb-20 overflow-hidden rounded-lg shadow-2xl">
        <img 
          src="https://source.unsplash.com/1200x600/?woman,lifting,weights" 
          alt="Athlète féminine soulevant des poids avec détermination" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Subscription Plans */}
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {subscriptionPlans.map((plan, index) => (
          <div key={plan.title} className={`p-8 rounded-lg flex flex-col ${index === 2 ? 'bg-emerald-600 text-white' : 'bg-emerald-800 text-gray-300'} shadow-xl`}>
            <h3 className="text-2xl font-bold uppercase">{plan.title}</h3>
            <p className={`text-4xl font-black my-4 ${index === 2 ? 'text-white' : 'text-amber-500'}`}>{plan.price}</p>
            <ul className="space-y-3 text-left mb-8 flex-grow">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <a href="#contact" className={`w-full text-center font-bold py-3 px-8 rounded-full uppercase tracking-wider transition-all duration-300 ${index === 2 ? 'bg-white text-emerald-600 hover:bg-gray-200' : 'bg-amber-500 text-white hover:bg-amber-600'}`}>
              S'abonner
            </a>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ServicesSection;