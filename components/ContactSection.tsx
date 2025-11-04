import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically handle form submission (e.g., API call)
    alert('Merci pour votre message ! Nous vous répondrons bientôt.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <SectionWrapper
      id="contact"
      title="Contactez-nous"
      subtitle="Nous sommes là pour répondre à toutes vos questions."
      className="bg-emerald-950"
    >
      <div className="grid md:grid-cols-2 gap-12 text-left">
        {/* Contact Form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-gray-300 mb-2">Nom</label>
              <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="w-full bg-emerald-800 border border-emerald-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-amber-500" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-gray-300 mb-2">Email</label>
              <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="w-full bg-emerald-800 border border-emerald-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-amber-500" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-bold text-gray-300 mb-2">Message</label>
              <textarea name="message" id="message" rows={5} required value={formData.message} onChange={handleChange} className="w-full bg-emerald-800 border border-emerald-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"></textarea>
            </div>
            <button type="submit" className="w-full bg-amber-500 text-white font-bold py-3 px-8 rounded-full uppercase tracking-wider hover:bg-amber-600 transition-colors duration-300">
              Envoyer
            </button>
          </form>
        </div>

        {/* Contact Info & Map */}
        <div className="space-y-8">
          <div className="space-y-4 text-gray-300">
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-emerald-500 text-2xl" />
              <span>Quartier Maarif, Casablanca, Maroc</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhone className="text-emerald-500 text-2xl" />
              <span>+212 5 22 00 00 00</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-emerald-500 text-2xl" />
              <span>contact@getfit.ma</span>
            </div>
          </div>
          <div className="h-80 w-full rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13297.23356073711!2d-7.643909795056158!3d33.57147775532506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d3ab45136891%3A0x196a604c8f2b3803!2sMa%C3%A2rif%2C%20Casablanca!5e0!3m2!1sen!2sma!4v1689599580451!5m2!1sen!2sma"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Get Fit Location"
            ></iframe>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;