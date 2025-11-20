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
    'services.description': 'Full-cycle advertising production from design to installation',
    'services.led.title': 'POSM Materials',
    'services.led.description': 'Point-of-sale advertising materials custom-made for your brand',
    'services.outdoor.title': 'Facade Design',
    'services.outdoor.description': 'Stunning facade solutions with LED technology',
    'services.interior.title': 'Promo Equipment',
    'services.interior.description': 'Exhibition and promotional display equipment',
    'services.facade.title': 'Retail Spaces',
    'services.facade.description': 'Complete retail space design and decoration',
    'services.laser.title': 'Laser Cutting',
    'services.laser.description': 'Precision laser cutting for intricate designs and custom shapes',
    
    // Portfolio
    'portfolio.title': 'Our Portfolio',
    'portfolio.description': 'Real projects that made real impact',
    'portfolio.pantene.title': 'Pantene Mall Display',
    'portfolio.pantene.category': 'Outdoor Advertising',
    'portfolio.ritz.title': 'Ritz-Carlton Outdoor Billboard',
    'portfolio.ritz.category': 'Outdoor Advertising',
    'portfolio.cocacola.title': 'Coca-Cola Christmas Display',
    'portfolio.cocacola.category': 'POSM & Seasonal',
    'portfolio.gilletteSoccer.title': 'Gillette Soccer Campaign',
    'portfolio.gilletteSoccer.category': 'POSM',
    'portfolio.pampers.title': 'Pampers Retail Displays',
    'portfolio.pampers.category': 'POSM',
    'portfolio.giftbox.title': 'Gift Box Display',
    'portfolio.giftbox.category': 'Seasonal POSM',
    'portfolio.oldspice.title': 'Old Spice Retail Display',
    'portfolio.oldspice.category': 'POSM',
    'portfolio.gillette.title': 'Gillette Retail Displays',
    'portfolio.gillette.category': 'POSM',
    'portfolio.duracell.title': 'Duracell Retail Display',
    'portfolio.duracell.category': 'POSM',
    'portfolio.retailstand.title': 'Retail Product Stand',
    'portfolio.retailstand.category': 'POSM',
    'portfolio.headshoulders.title': 'Head & Shoulders Display',
    'portfolio.headshoulders.category': 'POSM',
    'portfolio.herbal.title': 'Herbal Essences Retail Displays',
    'portfolio.herbal.category': 'POSM',
    'portfolio.always.title': 'Always Retail Displays',
    'portfolio.always.category': 'POSM',
    'portfolio.naturella.title': 'Naturella Retail Display',
    'portfolio.naturella.category': 'POSM',
    'portfolio.fairy.title': 'Fairy Retail Displays',
    'portfolio.fairy.category': 'POSM',
    'portfolio.ariel.title': 'Ariel Retail Arch',
    'portfolio.ariel.category': 'POSM',
    
    // Trusted By
    'trusted.title': 'Trusted By Leading Brands',
    
    // Contact
    'contact.title': "Let's Work Together",
    'contact.description': "Ready to make your brand impossible to miss? Drop us a message.",
    'contact.name': 'Your Name',
    'contact.email': 'Email Address',
    'contact.message': 'Tell us about your project',
    'contact.send': 'Send Message',
    'contact.emailUs': 'Email Us',
    'contact.callUs': 'Call Us',
    'contact.visitUs': 'Visit Us',
    
    // Footer
    'footer.tagline': 'Making brands impossible to miss since 2008',
    'footer.rights': '© 2024 BAGG\'s Advertising. All rights reserved.',
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
    'services.description': 'Полный цикл рекламного производства от дизайна до монтажа',
    'services.led.title': 'POS-Материалы',
    'services.led.description': 'Рекламные материалы для точек продаж под ваш бренд',
    'services.outdoor.title': 'Оформление Фасадов',
    'services.outdoor.description': 'Современные фасадные решения с LED-технологией',
    'services.interior.title': 'Промо Оборудование',
    'services.interior.description': 'Выставочное и промо оборудование',
    'services.facade.title': 'Торговые Площади',
    'services.facade.description': 'Комплексное оформление торговых площадей',
    'services.laser.title': 'Лазерная Резка',
    'services.laser.description': 'Высокоточная лазерная резка для сложных дизайнов и нестандартных форм',
    
    // Portfolio
    'portfolio.title': 'Наше Портфолио',
    'portfolio.description': 'Реальные проекты с реальным результатом',
    'portfolio.pantene.title': 'Витрина Pantene в торговом центре',
    'portfolio.pantene.category': 'Наружная реклама',
    'portfolio.ritz.title': 'Наружный билборд Ritz-Carlton',
    'portfolio.ritz.category': 'Наружная реклама',
    'portfolio.cocacola.title': 'Рождественская витрина Coca-Cola',
    'portfolio.cocacola.category': 'POS-материалы и сезонные',
    'portfolio.gilletteSoccer.title': 'Футбольная кампания Gillette',
    'portfolio.gilletteSoccer.category': 'POS-материалы',
    'portfolio.pampers.title': 'Торговые витрины Pampers',
    'portfolio.pampers.category': 'POS-материалы',
    'portfolio.giftbox.title': 'Подарочная витрина',
    'portfolio.giftbox.category': 'Сезонные POS-материалы',
    'portfolio.oldspice.title': 'Торговая витрина Old Spice',
    'portfolio.oldspice.category': 'POS-материалы',
    'portfolio.gillette.title': 'Торговые витрины Gillette',
    'portfolio.gillette.category': 'POS-материалы',
    'portfolio.duracell.title': 'Торговая витрина Duracell',
    'portfolio.duracell.category': 'POS-материалы',
    'portfolio.retailstand.title': 'Стенд для торговой точки',
    'portfolio.retailstand.category': 'POS-материалы',
    'portfolio.headshoulders.title': 'Витрина Head & Shoulders',
    'portfolio.headshoulders.category': 'POS-материалы',
    'portfolio.herbal.title': 'Торговые витрины Herbal Essences',
    'portfolio.herbal.category': 'POS-материалы',
    'portfolio.always.title': 'Торговые витрины Always',
    'portfolio.always.category': 'POS-материалы',
    'portfolio.naturella.title': 'Торговая витрина Naturella',
    'portfolio.naturella.category': 'POS-материалы',
    'portfolio.fairy.title': 'Торговые витрины Fairy',
    'portfolio.fairy.category': 'POS-материалы',
    'portfolio.ariel.title': 'Торговая арка Ariel',
    'portfolio.ariel.category': 'POS-материалы',
    
    // Trusted By
    'trusted.title': 'Нам Доверяют Ведущие Бренды',
    
    // Contact
    'contact.title': 'Давайте Работать Вместе',
    'contact.description': 'Готовы сделать ваш бренд невозможным не заметить? Напишите нам.',
    'contact.name': 'Ваше Имя',
    'contact.email': 'Email Адрес',
    'contact.message': 'Расскажите о вашем проекте',
    'contact.send': 'Отправить',
    'contact.emailUs': 'Напишите Нам',
    'contact.callUs': 'Позвоните Нам',
    'contact.visitUs': 'Посетите Нас',
    
    // Footer
    'footer.tagline': 'Делаем бренды невозможными не заметить с 2008 года',
    'footer.rights': '© 2024 BAGG\'s Advertising. Все права защищены.',
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
    'services.description': 'Дизайннан монтажға дейін толық цикл жарнама өндірісі',
    'services.led.title': 'POS-Материалдар',
    'services.led.description': 'Брендіңізге арналған сату нүктелеріндегі жарнама материалдары',
    'services.outdoor.title': 'Фасадты Безендіру',
    'services.outdoor.description': 'LED технологиясымен заманауи фасад шешімдері',
    'services.interior.title': 'Промо Жабдықтар',
    'services.interior.description': 'Көрме және промо жабдықтар',
    'services.facade.title': 'Сауда Алаңдары',
    'services.facade.description': 'Сауда алаңдарын кешенді безендіру',
    'services.laser.title': 'Лазерлік Кесу',
    'services.laser.description': 'Күрделі дизайндар мен теңдессіз пішіндер үшін жоғары дәлдіктегі лазерлік кесу',
    
    // Portfolio
    'portfolio.title': 'Біздің Портфолио',
    'portfolio.description': 'Нақты нәтижемен нақты жобалар',
    'portfolio.pantene.title': 'Сауда орталығындағы Pantene витринасы',
    'portfolio.pantene.category': 'Сыртқы жарнама',
    'portfolio.ritz.title': 'Ritz-Carlton сыртқы билборды',
    'portfolio.ritz.category': 'Сыртқы жарнама',
    'portfolio.cocacola.title': 'Coca-Cola Рождество витринасы',
    'portfolio.cocacola.category': 'POS-материалдар және маусымдық',
    'portfolio.gilletteSoccer.title': 'Gillette футбол науқаны',
    'portfolio.gilletteSoccer.category': 'POS-материалдар',
    'portfolio.pampers.title': 'Pampers сауда витриналары',
    'portfolio.pampers.category': 'POS-материалдар',
    'portfolio.giftbox.title': 'Сыйлық витринасы',
    'portfolio.giftbox.category': 'Маусымдық POS-материалдар',
    'portfolio.oldspice.title': 'Old Spice сауда витринасы',
    'portfolio.oldspice.category': 'POS-материалдар',
    'portfolio.gillette.title': 'Gillette сауда витриналары',
    'portfolio.gillette.category': 'POS-материалдар',
    'portfolio.duracell.title': 'Duracell сауда витринасы',
    'portfolio.duracell.category': 'POS-материалдар',
    'portfolio.retailstand.title': 'Сауда нүктесіне арналған стенд',
    'portfolio.retailstand.category': 'POS-материалдар',
    'portfolio.headshoulders.title': 'Head & Shoulders витринасы',
    'portfolio.headshoulders.category': 'POS-материалдар',
    'portfolio.herbal.title': 'Herbal Essences сауда витриналары',
    'portfolio.herbal.category': 'POS-материалдар',
    'portfolio.always.title': 'Always сауда витриналары',
    'portfolio.always.category': 'POS-материалдар',
    'portfolio.naturella.title': 'Naturella сауда витринасы',
    'portfolio.naturella.category': 'POS-материалдар',
    'portfolio.fairy.title': 'Fairy сауда витриналары',
    'portfolio.fairy.category': 'POS-материалдар',
    'portfolio.ariel.title': 'Ariel сауда арка',
    'portfolio.ariel.category': 'POS-материалдар',
    
    // Trusted By
    'trusted.title': 'Жетекші Брендтер Бізге Сенеді',
    
    // Contact
    'contact.title': 'Бірге Жұмыс Істейік',
    'contact.description': 'Брендіңізді байқамау мүмкін емес етуге дайынсыз ба? Бізге жазыңыз.',
    'contact.name': 'Сіздің Атыңыз',
    'contact.email': 'Email Мекенжайы',
    'contact.message': 'Жобаңыз туралы айтыңыз',
    'contact.send': 'Жіберу',
    'contact.emailUs': 'Бізге Жазыңыз',
    'contact.callUs': 'Бізге Қоңырау Шалыңыз',
    'contact.visitUs': 'Бізге Келіңіз',
    
    // Footer
    'footer.tagline': '2008 жылдан бері брендтерді байқамау мүмкін емес етеміз',
    'footer.rights': '© 2024 BAGG\'s Advertising. Барлық құқықтар қорғалған.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('ru');

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
