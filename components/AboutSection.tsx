import React from 'react';
import SectionWrapper from './SectionWrapper';

const AboutSection: React.FC = () => {
  return (
    <SectionWrapper
      id="about"
      title="Notre Histoire"
      subtitle="Plus qu'une salle de sport, une communauté."
      className="bg-emerald-950"
    >
      <div className="max-w-4xl mx-auto text-left grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>
            Bienvenue chez <strong>Get Fit</strong>, votre sanctuaire de fitness au cœur du quartier Maarif à Casablanca. Notre mission est simple : vous inspirer à devenir la meilleure version de vous-même, physiquement et mentalement.
          </p>
          <p>
            Nous croyons en la puissance de la communauté. Chez Get Fit, vous ne trouverez pas seulement des équipements de pointe, mais aussi une famille de passionnés et de coachs dévoués, prêts à vous soutenir à chaque étape de votre parcours.
          </p>
          <p>
            Nos valeurs sont la détermination, le respect et le dépassement de soi. Chaque jour est une nouvelle opportunité de grandir, de se renforcer et de célébrer vos victoires, petites et grandes.
          </p>
        </div>
        <div>
          <img src="https://source.unsplash.com/500x600/?gym,interior" alt="Intérieur de la salle de sport Get Fit" className="rounded-lg shadow-2xl w-full h-full object-cover" />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;