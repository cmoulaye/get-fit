import React from 'react';

interface SectionWrapperProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, title, subtitle, children, className = 'bg-emerald-900' }) => {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-black uppercase">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
            {subtitle}
          </p>
        )}
        <div className="mt-12 md:mt-16">
          {children}
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper;