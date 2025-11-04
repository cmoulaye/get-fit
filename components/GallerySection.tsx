import React from 'react';
import SectionWrapper from './SectionWrapper';

const galleryImages = [
  'https://source.unsplash.com/600x400/?gym,weights',
  'https://source.unsplash.com/600x400/?fitness,class',
  'https://source.unsplash.com/600x400/?yoga,pose',
  'https://source.unsplash.com/600x400/?swimming,pool,indoors',
  'https://source.unsplash.com/600x400/?person,lifting',
  'https://source.unsplash.com/600x400/?gym,interior,modern',
  'https://source.unsplash.com/600x400/?running,treadmill',
  'https://source.unsplash.com/600x400/?healthy,food,meal',
];

const GallerySection: React.FC = () => {
  return (
    <SectionWrapper
      id="gallery"
      title="Notre Galerie"
      subtitle="Un aperçu de notre espace et de notre communauté."
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {galleryImages.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg group">
            <img 
              src={src} 
              alt={`Galerie Get Fit ${index + 1}`} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default GallerySection;
