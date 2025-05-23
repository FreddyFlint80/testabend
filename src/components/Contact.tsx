import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Send, Check } from 'lucide-react';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    language: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        message: '',
        language: '',
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
              {t('contact.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('contact.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-blue-800 text-white rounded-xl p-8 shadow-lg flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-6">{t('hero.title')}</h3>
              <div className="space-y-6">
                <p className="flex items-start space-x-2">
                  <span className="text-2xl">📧</span>
                  <span>info@cnbslanguages.com</span>
                </p>
                <p className="flex items-start space-x-2">
                  <span className="text-2xl">📱</span>
                  <span>+49 123 456 7890</span>
                </p>
                <p className="flex items-start space-x-2">
                  <span className="text-2xl">🌐</span>
                  <span>www.cnbslanguages.com</span>
                </p>
                
                <div className="pt-6">
                  <button 
                    className="px-6 py-3 rounded-lg bg-white text-blue-800 font-medium hover:bg-blue-50 transition-all inline-flex items-center space-x-2"
                  >
                    <span>{t('contact.consult')}</span>
                    <Send size={16} />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              {isSubmitted ? (
                <div className="h-full flex items-center justify-center text-center p-6">
                  <div>
                    <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <Check size={32} className="text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {t('contact.success')}
                    </h3>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('contact.name')} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('contact.email')} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="language" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('contact.language')}
                    </label>
                    <select
                      id="language"
                      name="language"
                      value={formData.language}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">{t('contact.language')}</option>
                      <option value="german">{t('services.german')}</option>
                      <option value="english">{t('services.english')}</option>
                      <option value="french">{t('services.french')}</option>
                      <option value="spanish">{t('services.spanish')}</option>
                      <option value="italian">{t('services.italian')}</option>
                      <option value="latin">{t('services.latin')}</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('contact.message')} *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    ></textarea>
                  </div>
                  
                  {error && (
                    <div className="text-red-600 text-sm">
                      {error}
                    </div>
                  )}
                  
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all flex items-center justify-center space-x-2 ${
                        isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                      }`}
                    >
                      <span>{t('contact.submit')}</span>
                      {isSubmitting ? (
                        <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                      ) : (
                        <Send size={16} />
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;