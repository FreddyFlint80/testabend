import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t, language, changeLanguage } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="text-2xl font-bold mb-4">
              CNBS<span className="text-blue-400">Languages</span>
            </div>
            <p className="text-gray-300 mb-6">
              {language === 'de' 
                ? 'Ihr Sprachlehrer für flexiblen und persönlichen Unterricht.' 
                : 'Your language teacher for flexible and personal lessons.'}
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => changeLanguage('de')}
                className={`px-3 py-1 rounded ${
                  language === 'de' ? 'bg-blue-600' : 'bg-gray-700 hover:bg-gray-600'
                }`}
              >
                Deutsch
              </button>
              <button
                onClick={() => changeLanguage('en')}
                className={`px-3 py-1 rounded ${
                  language === 'en' ? 'bg-blue-600' : 'bg-gray-700 hover:bg-gray-600'
                }`}
              >
                English
              </button>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('nav.services')}</h3>
            <ul className="space-y-2 text-gray-300">
              <li>{t('services.german')}</li>
              <li>{t('services.english')}</li>
              <li>{t('services.french')}</li>
              <li>{t('services.spanish')}</li>
              <li>{t('services.italian')}</li>
              <li>{t('services.latin')}</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('nav.contact')}</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center space-x-2">
                <span>📧</span>
                <span>info@cnbslanguages.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>📱</span>
                <span>+49 123 456 7890</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            {t('footer.rights')}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">
              {t('footer.privacy')}
            </a>
            <a href="#" className="hover:text-white transition-colors">
              {t('footer.terms')}
            </a>
            <a href="#" className="hover:text-white transition-colors">
              {t('footer.imprint')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;