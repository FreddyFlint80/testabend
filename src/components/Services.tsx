import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface LanguageCardProps {
  name: string;
  color: string;
  icon: string;
}

const LanguageCard: React.FC<LanguageCardProps> = ({ name, color, icon }) => {
  return (
    <div className={`${color} p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}>
      <div className="text-center">
        <div className="text-3xl mb-2">{icon}</div>
        <h3 className="text-xl font-semibold">{name}</h3>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const { t } = useLanguage();

  const languages = [
    { 
      name: t('services.german'), 
      color: 'bg-red-50 text-red-800', 
      icon: '🇩🇪' 
    },
    { 
      name: t('services.english'), 
      color: 'bg-blue-50 text-blue-800', 
      icon: '🇬🇧' 
    },
    { 
      name: t('services.french'), 
      color: 'bg-indigo-50 text-indigo-800', 
      icon: '🇫🇷' 
    },
    { 
      name: t('services.spanish'), 
      color: 'bg-yellow-50 text-yellow-800', 
      icon: '🇪🇸' 
    },
    { 
      name: t('services.italian'), 
      color: 'bg-green-50 text-green-800', 
      icon: '🇮🇹' 
    },
    { 
      name: t('services.latin'), 
      color: 'bg-purple-50 text-purple-800', 
      icon: '📜' 
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {languages.map((language, index) => (
            <LanguageCard
              key={index}
              name={language.name}
              color={language.color}
              icon={language.icon}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <p className="text-gray-700">
            {t('services.description')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;