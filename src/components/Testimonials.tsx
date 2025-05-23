import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  name: string;
  language: string;
  text: string;
  stars: number;
}

const Testimonials: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  // Sample testimonials - in a real app, these would come from a database
  const testimonials: Testimonial[] = language === 'de' ? [
    {
      name: 'Sabine K.',
      language: 'Englisch',
      text: 'Der Unterricht mit Christian hat mir sehr geholfen, mein Business-Englisch zu verbessern. Seine geduldige Art und die individuell angepassten Lehrmaterialien machen das Lernen effektiv und angenehm.',
      stars: 5
    },
    {
      name: 'Michael R.',
      language: 'Spanisch',
      text: 'Nach nur drei Monaten Spanischunterricht konnte ich mich im Urlaub schon gut verständigen. Christian geht auf individuelle Bedürfnisse ein und macht den Unterricht interessant und abwechslungsreich.',
      stars: 5
    },
    {
      name: 'Lisa M.',
      language: 'Französisch',
      text: 'Als Schülerin hatte ich immer Probleme mit Französisch, aber dank Christians Hilfe habe ich meine Abiturprüfung mit einer guten Note bestanden. Er erklärt komplizierte Grammatik auf verständliche Weise.',
      stars: 5
    }
  ] : [
    {
      name: 'Sarah T.',
      language: 'German',
      text: 'Learning German with Christian has been a wonderful experience. His approach is structured yet flexible, and he adapts to my learning pace perfectly.',
      stars: 5
    },
    {
      name: 'David L.',
      language: 'Spanish',
      text: 'I needed to learn Spanish quickly for a business trip, and Christian\'s focused teaching method helped me achieve my goals in record time. Highly recommended!',
      stars: 5
    },
    {
      name: 'Emma W.',
      language: 'French',
      text: 'Christian makes learning French enjoyable and practical. I appreciate how he incorporates real-life conversations and cultural aspects into our lessons.',
      stars: 5
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('testimonials.subtitle')}
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-blue-50 rounded-xl p-8 md:p-12 shadow-md">
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[activeIndex].stars)].map((_, i) => (
                <Star key={i} size={24} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            
            <blockquote className="text-lg md:text-xl text-gray-700 text-center mb-8 italic">
              "{testimonials[activeIndex].text}"
            </blockquote>
            
            <div className="text-center">
              <p className="font-semibold text-gray-900">{testimonials[activeIndex].name}</p>
              <p className="text-blue-600">{testimonials[activeIndex].language}</p>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-blue-100 text-blue-700 hover:bg-blue-200 transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-blue-100 text-blue-700 hover:bg-blue-200 transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;