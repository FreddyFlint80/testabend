import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { BookOpen, MessageCircle, Lightbulb } from 'lucide-react';

const Instructor: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="instructor" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
                {t('instructor.title')}
              </h2>
              <h3 className="text-2xl font-semibold text-blue-600 mb-6">
                {t('instructor.name')}
              </h3>
              
              <p className="text-lg text-gray-800 mb-6">
                {t('instructor.intro')}
              </p>
              
              <p className="text-gray-700 mb-8">
                {t('instructor.description')}
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-2 bg-blue-100 rounded-full text-blue-600">
                    <BookOpen size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">
                      {t('instructor.approach')}
                    </h4>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-2 bg-blue-100 rounded-full text-blue-600">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">
                      {t('audiences.teens.description')}
                    </h4>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-2 bg-blue-100 rounded-full text-blue-600">
                    <Lightbulb size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">
                      {t('audiences.business.description')}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-full z-0"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-200 rounded-full z-0"></div>
                <img 
                  src="https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Language teacher" 
                  className="rounded-lg shadow-xl z-10 relative"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructor;