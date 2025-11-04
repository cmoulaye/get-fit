import React from 'react';
import SectionWrapper from './SectionWrapper';
import { coaches } from '../constants';

const TeamSection: React.FC = () => {
  return (
    <SectionWrapper
      id="team"
      title="Nos Coachs"
      subtitle="Une équipe d'experts passionnés pour vous guider."
      className="bg-emerald-950"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {coaches.map((coach) => (
          <div key={coach.name} className="group relative overflow-hidden rounded-lg shadow-lg text-left">
            <img src={coach.imageUrl} alt={coach.name} className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 text-white w-full">
              <h3 className="text-xl font-bold">{coach.name}</h3>
              <p className="text-amber-500 font-semibold">{coach.specialty}</p>
              <div className="max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 mt-2">
                 <p className="text-gray-300 text-sm">{coach.bio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default TeamSection;