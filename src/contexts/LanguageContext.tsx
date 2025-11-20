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
    
    // Navigation
    'nav.about': 'About Us',
    'nav.services': 'What We Do',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Contact',
    
    // About
    'about.title': 'About Us',
    'about.subtitle': 'Professional advertising production company since 2008',
    'about.history.title': 'Our History',
    'about.history.description': 'BAGG\'s advertising production company began its operations in April 2008, with the goal of serving corporate sector clients.',
    'about.presence.title': 'Our Presence',
    'about.presence.description': 'We have our own representatives and partners in all major cities of Kazakhstan, production facilities and BAGG\'s office are located in Almaty.',
    'about.expertise.title': 'Our Expertise',
    'about.expertise.description': 'In creating BAGG\'s, we adopted the technologies and innovations of leading companies in this field, learned the experience of interaction with transnational and national corporations.',
    'about.team.title': 'Our Team',
    'about.team.description': 'BAGG\'s employees undergo regular internships and professional development at factories and offices of foreign partners.',
    'about.divisions.title': 'Structural Divisions BAGG\'S',
    'about.divisions.architecture': 'Architectural and design department - provides development and support of creative concepts.',
    'about.divisions.electrical': 'Electrician-assembler workshop - provides launch of electrical equipment, lighting, LED equipment and accompanying.',
    'about.divisions.metal': 'Metal products workshop - provides production and assembly of metal structures.',
    'about.divisions.production': 'Production workshop - provides production and assembly of light structures made of wire.',
    'about.divisions.carpentry': 'Carpentry workshop - provides production and assembly of structures, elements, sets of wood.',
    'about.divisions.plastic': 'Plastic and plastic workshop - provides production and assembly of structures, elements, sets of synthetic polymers.',
    'about.divisions.printing': 'Printing workshop - provides high-precision direct printing of images on any type of material and structures.',
    'about.divisions.logistics': 'Logistics and installation department - provides delivery and installation of finished products throughout the territory of Kazakhstan.',
    'about.logistics.title': 'Logistics and Installation',
    'about.logistics.partnerships': 'We have strong partnerships with logistics companies in Kazakhstan and Russia.',
    'about.logistics.advantages': 'Thanks to a developed transport infrastructure, we can provide delivery through our logistics center to any point in the world, in large volumes, and in the shortest possible time.',
    
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
    
    // Navigation
    'nav.about': 'О Нас',
    'nav.services': 'Что Мы Делаем',
    'nav.portfolio': 'Портфолио',
    'nav.contact': 'Контакты',
    
    // About
    'about.title': 'О Нас',
    'about.subtitle': 'Профессиональная рекламно-производственная компания с 2008 года',
    'about.history.title': 'Наша История',
    'about.history.description': 'Рекламно-производственная компания BAGG\'s начала свою деятельность в апреле 2008 года, с целью обслуживания клиентов корпоративного сектора.',
    'about.presence.title': 'Наше Присутствие',
    'about.presence.description': 'Мы имеем своих представителей и партнеров во всех крупных городах Казахстана, производственные мощности и офис BAGG\'s дислоцируются в г. Алматы.',
    'about.expertise.title': 'Наш Опыт',
    'about.expertise.description': 'При создании BAGG\'s, мы переняли технологии и инновации ведущих компаний в данной сфере, изучили опыт взаимодействия с транснациональными и национальными корпорациями.',
    'about.team.title': 'Наша Команда',
    'about.team.description': 'Работники BAGG\'s проходят регулярную стажировку и повышение квалификации на заводах и офисах зарубежных партнеров.',
    'about.divisions.title': 'Структурные Подразделения BAGG\'S',
    'about.divisions.architecture': 'Архитектурно-дизайнерский отдел – обеспечивает разработку и сопровождение креативных концепций.',
    'about.divisions.electrical': 'Цех электрика-монтажника – обеспечивает пуско наладку электрического оборудования, освещения, LED- оборудования и комплектующих.',
    'about.divisions.metal': 'Цех металлических изделий – обеспечивает производство и сборку металлоконструкций.',
    'about.divisions.production': 'Производный цех – обеспечивает производство и сборку легких конструкций из проволоки.',
    'about.divisions.carpentry': 'Деревообрабатывающий цех – обеспечивает производство и сборку конструкций, элементов, комплектующих из дерева.',
    'about.divisions.plastic': 'Цех пластмассовых изделий – обеспечивает производство и сборку конструкций, элементов, комплектующих из синтетических полимеров.',
    'about.divisions.printing': 'Печатный цех – обеспечивает высокоточную прямую печать изображений на любых видах материалов и конструкциях.',
    'about.divisions.logistics': 'Отдел логистики и установки– обеспечивает доставку и монтаж продукции по всей территории РК.',
    'about.logistics.title': 'Логистика и Монтаж',
    'about.logistics.partnerships': 'Мы имеем прочные партнерские взаимоотношения с логистическими компаниями на территории РК и РФ.',
    'about.logistics.advantages': 'Благодаря развитой транспортной инфраструктуре мы можем обеспечить доставку через логистический центр в любую точку мира, в больших объемах, и в кратчайшие сроки и минимальную себестоимость.',
    
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
    
    // Navigation
    'nav.about': 'Біз Туралы',
    'nav.services': 'Не Жасаймыз',
    'nav.portfolio': 'Портфолио',
    'nav.contact': 'Байланыс',
    
    // About
    'about.title': 'Біз Туралы',
    'about.subtitle': '2008 жылдан бері кәсіби жарнама өндіріс компаниясы',
    'about.history.title': 'Біздің Тарихымыз',
    'about.history.description': 'Рекламно-производственная компания BAGG\'s начала свою деятельность в апреле 2008 года, с целью обслуживания клиентов корпоративного сектора.',
    'about.presence.title': 'Біздің Қатысуымыз',
    'about.presence.description': 'Мы имеем своих представителей и партнеров во всех крупных городах Казахстана, производственные мощности и офис BAGG\'s дислоцируются в г. Алматы.',
    'about.expertise.title': 'Біздің Тәжірибеміз',
    'about.expertise.description': 'При создании BAGG\'s, мы переняли технологии и инновации ведущих компаний в данной сфере, изучили опыт взаимодействия с транснациональными и национальными корпорациями.',
    'about.team.title': 'Біздің Командамыз',
    'about.team.description': 'Работники BAGG\'s проходят регулярную стажировку и повышение квалификации на заводах и офисах зарубежных партнеров.',
    'about.divisions.title': 'BAGG\'S Құрылымдық Бөлімшелері',
    'about.divisions.architecture': 'Архитектурно-дизайнерский отдел – обеспечивает разработку и сопровождение креативных концепций.',
    'about.divisions.electrical': 'Электр-монтажник цехы – электр жабдықтарын, жарықтандыруды, LED- жабдықтар мен толықтырғыштарын іске қосуды қамтамасыз етеді.',
    'about.divisions.metal': 'Металл бұйымдар цехы – металл құрылымдарды өндіруді және құрастыруды қамтамасыз етеді.',
    'about.divisions.production': 'Өндірістік цех – сымнан жеңіл құрылымдарды өндіруді және құрастыруды қамтамасыз етеді.',
    'about.divisions.carpentry': 'Ағаш өңдеу цехы – ағаштан құрылымдарды, элементтерді, толықтырғыштарды өндіруді және құрастыруды қамтамасыз етеді.',
    'about.divisions.plastic': 'Пластмасса бұйымдар цехы – синтетикалық полимерлерден құрылымдарды, элементтерді, толықтырғыштарды өндіруді және құрастыруды қамтамасыз етеді.',
    'about.divisions.printing': 'Баспа цехы – кез келген материалдар мен құрылымдарда кескіндерді жоғары дәлдіктегі тікелей басуды қамтамасыз етеді.',
    'about.divisions.logistics': 'Логистика және орнату бөлімі – ҚР аумағында өнімді жеткізуді және монтаждауды қамтамасыз етеді.',
    'about.logistics.title': 'Логистика және Монтаж',
    'about.logistics.partnerships': 'Біз ҚР және РФ аумағындағы логистикалық компаниялармен берік серіктестік қарым-қатынастарымыз бар.',
    'about.logistics.advantages': 'Дамыған көлік инфрақұрылымының арқасында біз логистикалық орталық арқылы әлемнің кез келген нүктесіне, үлкен көлемде және ең қысқа мерзімде жеткізуді қамтамасыз ете аламыз.',
    
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
