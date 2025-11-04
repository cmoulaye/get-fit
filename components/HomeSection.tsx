import React from 'react';

const HomeSection: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center text-white">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('https://source.unsplash.com/1920x1080/?fitness,gym')` }}>
        <div className="absolute inset-0 bg-emerald-950/70"></div>
      </div>
      <div className="relative z-10 p-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-wider leading-tight animate-fade-in-down">
          Transforme ton corps, <br /> transforme ta vie avec <span className="text-amber-500">Get Fit</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-gray-300 animate-fade-in-up">
          Rejoignez la meilleure salle de sport à Casablanca et commencez votre transformation dès aujourd'hui.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <a href="#services" className="w-full sm:w-auto bg-amber-500 text-white font-bold py-3 px-8 rounded-full uppercase tracking-wider hover:bg-amber-600 transition-transform transform hover:scale-105 duration-300">
            S'inscrire maintenant
          </a>
          <a href="#services" className="w-full sm:w-auto bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300">
            Découvrir nos offres
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;