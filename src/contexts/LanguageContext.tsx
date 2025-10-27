import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ru' | 'kk';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Hero
    'hero.title1': 'Make Your Brand',
    'hero.title2': 'Impossible to Miss',
    'hero.description': 'Professional advertising solutions that capture attention. From LED displays to outdoor banners, we bring your vision to life.',
    'hero.viewWork': 'View Our Work',
    'hero.getInTouch': 'Get in Touch',
    
    // Services
    'services.title': 'What We Create',
    'services.description': 'Professional solutions tailored to make your brand stand out',
    'services.led.title': 'LED Displays',
    'services.led.description': 'Eye-catching digital displays that shine bright',
    'services.outdoor.title': 'Outdoor Banners',
    'services.outdoor.description': 'Weather-resistant and impossible to ignore',
    'services.interior.title': 'Interior Signs',
    'services.interior.description': 'Premium signage for any indoor space',
    'services.facade.title': 'Facade Solutions',
    'services.facade.description': 'Transform buildings into brand landmarks',
    
    // Portfolio
    'portfolio.title': 'Our Portfolio',
    'portfolio.description': 'Real projects that made real impact',
    
    // Trusted By
    'trusted.title': 'Trusted By Leading Brands',
    
    // Contact
    'contact.title': "Let's Work Together",
    'contact.description': "Ready to make your brand impossible to miss? Drop us a message.",
    'contact.name': 'Your Name',
    'contact.email': 'Email Address',
    'contact.message': 'Tell us about your project',
    'contact.send': 'Send Message',
    
    // Footer
    'footer.tagline': 'Making brands impossible to miss since 2008',
    'footer.rights': '© 2024 BrightSign Advertising. All rights reserved.',
  },
  ru: {
    // Hero
    'hero.title1': 'Сделайте Ваш Бренд',
    'hero.title2': 'Невозможным Не Заметить',
    'hero.description': 'Профессиональные рекламные решения, которые привлекают внимание. От LED-дисплеев до наружных баннеров, мы воплощаем ваше видение в жизнь.',
    'hero.viewWork': 'Наши Работы',
    'hero.getInTouch': 'Связаться',
    
    // Services
    'services.title': 'Что Мы Создаём',
    'services.description': 'Профессиональные решения для выделения вашего бренда',
    'services.led.title': 'LED Дисплеи',
    'services.led.description': 'Яркие цифровые экраны, которые притягивают взгляды',
    'services.outdoor.title': 'Наружные Баннеры',
    'services.outdoor.description': 'Устойчивые к погоде и невозможные игнорировать',
    'services.interior.title': 'Интерьерные Вывески',
    'services.interior.description': 'Премиальные вывески для любого помещения',
    'services.facade.title': 'Фасадные Решения',
    'services.facade.description': 'Превращаем здания в визитные карточки бренда',
    
    // Portfolio
    'portfolio.title': 'Наше Портфолио',
    'portfolio.description': 'Реальные проекты с реальным результатом',
    
    // Trusted By
    'trusted.title': 'Нам Доверяют Ведущие Бренды',
    
    // Contact
    'contact.title': 'Давайте Работать Вместе',
    'contact.description': 'Готовы сделать ваш бренд невозможным не заметить? Напишите нам.',
    'contact.name': 'Ваше Имя',
    'contact.email': 'Email Адрес',
    'contact.message': 'Расскажите о вашем проекте',
    'contact.send': 'Отправить',
    
    // Footer
    'footer.tagline': 'Делаем бренды невозможными не заметить с 2008 года',
    'footer.rights': '© 2024 BrightSign Advertising. Все права защищены.',
  },
  kk: {
    // Hero
    'hero.title1': 'Брендіңізді',
    'hero.title2': 'Байқамау Мүмкін Емес Етіңіз',
    'hero.description': 'Назар аударатын кәсіби жарнама шешімдері. LED дисплейлерден сыртқы баннерлерге дейін, біз сіздің көрегеніңізді өмірге келтіреміз.',
    'hero.viewWork': 'Біздің Жұмыстар',
    'hero.getInTouch': 'Хабарласу',
    
    // Services
    'services.title': 'Біз Не Жасаймыз',
    'services.description': 'Брендіңізді ерекшелендіруге арналған кәсіби шешімдер',
    'services.led.title': 'LED Дисплейлер',
    'services.led.description': 'Назар аударатын жарқын цифрлық дисплейлер',
    'services.outdoor.title': 'Сыртқы Баннерлер',
    'services.outdoor.description': 'Ауа райына төзімді және елемеуге болмайтын',
    'services.interior.title': 'Ішкі Белгілер',
    'services.interior.description': 'Кез келген ішкі кеңістік үшін сапалы белгілер',
    'services.facade.title': 'Фасад Шешімдері',
    'services.facade.description': 'Ғимараттарды бренд белгілеріне айналдырамыз',
    
    // Portfolio
    'portfolio.title': 'Біздің Портфолио',
    'portfolio.description': 'Нақты нәтижемен нақты жобалар',
    
    // Trusted By
    'trusted.title': 'Жетекші Брендтер Бізге Сенеді',
    
    // Contact
    'contact.title': 'Бірге Жұмыс Істейік',
    'contact.description': 'Брендіңізді байқамау мүмкін емес етуге дайынсыз ба? Бізге жазыңыз.',
    'contact.name': 'Сіздің Атыңыз',
    'contact.email': 'Email Мекенжайы',
    'contact.message': 'Жобаңыз туралы айтыңыз',
    'contact.send': 'Жіберу',
    
    // Footer
    'footer.tagline': '2008 жылдан бері брендтерді байқамау мүмкін емес етеміз',
    'footer.rights': '© 2024 BrightSign Advertising. Барлық құқықтар қорғалған.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
