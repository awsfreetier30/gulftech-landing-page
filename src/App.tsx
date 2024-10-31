import React, { useState } from 'react';
import { CircuitBoard, Cpu } from 'lucide-react';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { Logo } from './components/Logo';
import { ContactInfo } from './components/ContactInfo';

function App() {
  const [language, setLanguage] = useState<'en' | 'ar'>('en');

  const content = {
    en: {
      underConstruction: "Under Construction",
      tagline: "We Transform Your Vision into Creative Results...",
      description: "Since 2010, Gulf Technology Co. Ltd has been a leading IT solutions provider in Saudi Arabia. We're currently undergoing a major digital transformation to bring you cutting-edge solutions.",
      upgradeMessage: "Our platform is being enhanced with state-of-the-art AI technologies to provide:",
      features: [
        "Advanced AI-driven analytics and insights",
        "Intelligent automation solutions",
        "Enhanced cloud infrastructure",
        "Next-generation security protocols"
      ],
      patience: "Thank you for your patience during this upgrade. We're working diligently to bring you an exceptional experience that will revolutionize how we serve you.",
      contact: "Contact Us",
      phone: "0567219999",
      email: "Info@thegulftech.com",
      address: "Prince Mahmoud Ibn Abd Al Aziz, Madinat Al Umal, Al Khobar 34442",
      comingSoon: "Transforming Tomorrow, Today",
      stayTuned: "Stay tuned for our enhanced digital experience",
    },
    ar: {
      underConstruction: "تحت الإنشاء",
      tagline: "نحول رؤيتك إلى نتائج إبداعية...",
      description: "منذ عام 2010، كانت شركة الخليج للتقنية المحدودة رائدة في تقديم حلول تكنولوجيا المعلومات في المملكة العربية السعودية. نحن حاليًا في مرحلة تحول رقمي كبير لتقديم حلول متطورة.",
      upgradeMessage: "يتم تحسين منصتنا بأحدث تقنيات الذكاء الاصطناعي لتوفير:",
      features: [
        "تحليلات ورؤى متقدمة مدعومة بالذكاء الاصطناعي",
        "حلول الأتمتة الذكية",
        "بنية تحتية سحابية محسنة",
        "بروتوكولات أمان من الجيل التالي"
      ],
      patience: "نشكركم على صبركم خلال هذا التطوير. نحن نعمل بجد لنقدم لكم تجربة استثنائية ستغير طريقة خدمتنا لكم.",
      contact: "اتصل بنا",
      phone: "٠٥٦٧٢١٩٩٩٩",
      email: "Info@thegulftech.com",
      address: "الأمير محمود بن عبد العزيز، مدينة العمال، الخبر ٣٤٤٤٢",
      comingSoon: "نصنع المستقبل، اليوم",
      stayTuned: "ترقبوا تجربتنا الرقمية المحسنة",
    }
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-[#003566] via-[#6B68AC] to-[#1ABBDF] ${language === 'ar' ? 'font-arabic' : ''}`}>
      <LanguageSwitcher language={language} onLanguageChange={setLanguage} />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20 min-h-screen flex flex-col items-center justify-center text-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <CircuitBoard className="absolute top-10 left-10 w-96 h-96 text-white/20" />
          <Cpu className="absolute bottom-10 right-10 w-96 h-96 text-white/20" />
        </div>

        {/* Glass Card */}
        <div className="relative w-full max-w-4xl backdrop-blur-lg bg-white/10 rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
          <Logo 
            tagline={content[language].tagline} 
            imagePath="/logo.png" // Once you add your logo, update this path
          />

          {/* Status Message */}
          <div className="text-center mb-12">
            <div className="inline-block px-6 py-2 rounded-full bg-white/10 backdrop-blur-md mb-4">
              <span className="text-sm uppercase tracking-wider">{content[language].underConstruction}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{content[language].comingSoon}</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
              {content[language].description}
            </p>
            
            {/* New Upgrade Message */}
            <div className="space-y-4 mb-8">
              <p className="text-lg font-semibold text-[#68C1C4]">
                {content[language].upgradeMessage}
              </p>
              <ul className="space-y-2">
                {content[language].features.map((feature, index) => (
                  <li key={index} className="text-white/80 flex items-center justify-center space-x-2">
                    <span className="w-2 h-2 bg-[#48C94F] rounded-full"></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <p className="text-white/80 italic mt-4">
                {content[language].patience}
              </p>
            </div>
          </div>

          <ContactInfo content={content[language]} />
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-white/60 text-sm">
          © 2024 Gulf Technology Co. Ltd. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default App;