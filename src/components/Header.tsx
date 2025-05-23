import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Globe, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const { language, changeLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = () => {
    changeLanguage(language === 'de' ? 'en' : 'de');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md
        ${isScrolled 
          ? 'bg-white/95 shadow-md py-2' 
          : 'bg-white/85 py-4'
        }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-blue-800">
            CNBS<span className="text-blue-600">Languages</span>
          </a>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('home')} className="nav-link font-medium">
            {t('nav.home')}
          </button>
          <button onClick={() => scrollToSection('services')} className="nav-link font-medium">
            {t('nav.services')}
          </button>
          <button onClick={() => scrollToSection('instructor')} className="nav-link font-medium">
            {t('nav.about')}
          </button>
          <button onClick={() => scrollToSection('audiences')} className="nav-link font-medium">
            {t('nav.audiences')}
          </button>
          <button onClick={() => scrollToSection('contact')} className="nav-link font-medium text-blue-600 hover:text-blue-800">
            {t('nav.contact')}
          </button>
          <button 
            onClick={toggleLanguage}
            className="flex items-center space-x-1 px-3 py-1 rounded bg-blue-50 hover:bg-blue-100 text-blue-600 transition-colors"
          >
            <Globe size={16} />
            <span className="uppercase font-medium">{language === 'de' ? 'EN' : 'DE'}</span>
          </button>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleLanguage}
            className="mr-4 flex items-center space-x-1 px-2 py-1 rounded bg-blue-50 hover:bg-blue-100 text-blue-600"
          >
            <Globe size={16} />
            <span className="uppercase font-medium">{language === 'de' ? 'EN' : 'DE'}</span>
          </button>
          <button onClick={toggleMenu} className="text-blue-800">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg py-4 px-6 flex flex-col space-y-4">
          <button onClick={() => scrollToSection('home')} className="nav-link-mobile font-medium">
            {t('nav.home')}
          </button>
          <button onClick={() => scrollToSection('services')} className="nav-link-mobile font-medium">
            {t('nav.services')}
          </button>
          <button onClick={() => scrollToSection('instructor')} className="nav-link-mobile font-medium">
            {t('nav.about')}
          </button>
          <button onClick={() => scrollToSection('audiences')} className="nav-link-mobile font-medium">
            {t('nav.audiences')}
          </button>
          <button onClick={() => scrollToSection('testimonials')} className="nav-link-mobile font-medium">
            {t('nav.testimonials')}
          </button>
          <button onClick={() => scrollToSection('faq')} className="nav-link-mobile font-medium">
            {t('nav.faq')}
          </button>
          <button onClick={() => scrollToSection('contact')} className="nav-link-mobile font-medium text-blue-600">
            {t('nav.contact')}
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;