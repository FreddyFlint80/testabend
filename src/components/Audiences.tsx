import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { User, GraduationCap, Briefcase } from 'lucide-react';

interface AudienceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const AudienceCard: React.FC<AudienceCardProps> = ({ title, description, icon, color }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl border-t-4 border-blue-600">
      <div className={`${color} w-14 h-14 rounded-full flex items-center justify-center mb-6`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

const Audiences: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="audiences" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
            {t('audiences.title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('audiences.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <AudienceCard
            title={t('audiences.adults.title')}
            description={t('audiences.adults.description')}
            icon={<User size={24} className="text-blue-600" />}
            color="bg-blue-100"
          />
          <AudienceCard
            title={t('audiences.teens.title')}
            description={t('audiences.teens.description')}
            icon={<GraduationCap size={24} className="text-blue-600" />}
            color="bg-blue-100"
          />
          <AudienceCard
            title={t('audiences.business.title')}
            description={t('audiences.business.description')}
            icon={<Briefcase size={24} className="text-blue-600" />}
            color="bg-blue-100"
          />
        </div>
      </div>
    </section>
  );
};

export default Audiences;