import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white pt-16"
    >
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-20"></div>
      
      <div className="container mx-auto px-4 z-10 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-blue-100">
            {t('hero.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToServices}
              className="px-8 py-3 rounded-lg bg-white text-blue-800 font-medium hover:bg-blue-50 transition-all transform hover:scale-105"
            >
              {t('hero.cta')}
            </button>
            <button 
              onClick={scrollToContact}
              className="px-8 py-3 rounded-lg bg-transparent border-2 border-white text-white font-medium hover:bg-white/10 transition-all"
            >
              {t('hero.consult')}
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <button 
          onClick={scrollToServices}
          className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-all"
        >
          <ChevronDown size={24} className="text-white" />
        </button>
      </div>
    </section>
  );
};

export default Hero;