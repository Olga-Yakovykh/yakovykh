export type Language = 'uk' | 'en';

export const translations = {
  uk: {
    nav: {
      home: 'Головна',
      about: 'Про нас',
      practice: 'Напрямки діяльності',
      contacts: 'Контакти',
    },
    hero: {
      title: 'Адвокатське об\'єднання',
      name: '«Якових та партнери»',
      subtitle: 'Понад 20 років досвіду на ринку правових послуг',
      cta: 'Зв\'язатися з нами',
    },
    home: {
      about: {
        title: 'Про об\'єднання',
        description: 'Адвокатське об\'єднання «Якових та партнери» — це команда досвідчених адвокатів, яка понад два десятиліття надає професійну правову допомогу в Одесі. Наша діяльність базується на принципах професіоналізму, етичності та відповідальності перед клієнтами.',
      },
      founder: {
        title: 'Керівництво',
        name: 'Євгеній Якових',
        role: 'Засновник та Голова адвокатського об\'єднання',
      },
      practice: {
        title: 'Напрямки діяльності',
        viewAll: 'Детальніше',
      },
      contact: {
        title: 'Зв\'яжіться з нами',
        description: 'Ми готові надати консультацію з будь-яких правових питань',
        telegram: 'Написати в Telegram',
      },
    },
    about: {
      hero: {
        title: 'Про об\'єднання',
        subtitle: 'Історія, принципи та команда',
      },
      history: {
        title: 'Історія та досвід',
        p1: 'Адвокатське об\'єднання «Якових та партнери» було засновано в Одесі і вже понад 20 років успішно працює на ринку правових послуг України.',
        p2: 'За роки діяльності об\'єднання заслужило репутацію надійного партнера для бізнесу та приватних клієнтів, завдяки професійному підходу та глибокому розумінню правової системи.',
        p3: 'Сьогодні до складу об\'єднання входять п\'ять практикуючих адвокатів, кожен з яких має значний досвід у своїй спеціалізації.',
      },
      structure: {
        title: 'Готові захистити ваші інтереси',
        description: 'Об\'єднання очолює Засновник та Голова, який забезпечує загальне стратегічне та професійне керівництво. Кожен адвокат об\'єднання спеціалізується на певних напрямках права, що дозволяє надавати клієнтам комплексну правову допомогу.',
      },
      principles: {
        title: 'Принципи роботи',
        items: [
          {
            title: 'Професіоналізм',
            description: 'Глибоке знання законодавства та постійне вдосконалення',
          },
          {
            title: 'Конфіденційність',
            description: 'Абсолютна захищеність інформації клієнтів',
          },
          {
            title: 'Відповідальність',
            description: 'Персональна відповідальність за результат',
          },
          {
            title: 'Етичність',
            description: 'Дотримання найвищих стандартів адвокатської етики',
          },
        ],
      },
    },
    practice: {
      hero: {
        title: 'Напрямки діяльності',
        subtitle: 'Сфери нашої правової практики',
      },
      areas: {
        criminal: {
          title: 'Кримінальне право',
          description: 'Захист прав та інтересів клієнтів у кримінальному провадженні на всіх етапах: від досудового розслідування до судового розгляду та апеляційного оскарження. Представництво інтересів потерпілих та свідків.',
        },
        family: {
          title: 'Сімейне право',
          description: 'Правова допомога у справах про розлучення, поділ майна подружжя, встановлення батьківства, стягнення аліментів, визначення місця проживання дітей та інших сімейних спорах.',
        },
        civil: {
          title: 'Цивільне право',
          description: 'Представництво інтересів клієнтів у цивільних справах: спори щодо майна, договірні зобов\'язання, відшкодування шкоди, захист честі та гідності, спадкові справи.',
        },
        traffic: {
          title: 'Справи про ДТП',
          description: 'Захист прав учасників дорожньо-транспортних пригод: відшкодування матеріальної та моральної шкоди, представництво в страхових спорах, захист у справах про адміністративні правопорушення.',
        },
        business: {
          title: 'Правовий супровід бізнесу',
          description: 'Комплексне правове обслуговування підприємств та підприємців: корпоративне право, договірна робота, трудові відносини, податкові питання, представництво в господарських спорах.',
        },
      },
    },
    contacts: {
      hero: {
        title: 'Контакти',
        subtitle: 'Зв\'яжіться з нами',
      },
      address: {
        title: 'Адреса',
        value: '65012, м. Одеса, провулок Бориса Айзенберга, 2, офіс 9',
      },
      phone: {
        title: 'Телефон',
        value: '+38 (050) 492-22-25',
      },
      telegram: {
        title: 'Telegram',
        cta: 'Написати в Telegram',
      },
      founder: {
        title: 'Засновник та Голова',
        name: 'Євгеній Якових',
      },
    },
    footer: {
      rights: '© 2024 Адвокатське об\'єднання «Якових та партнери». Усі права захищені.',
      address: '65012, м. Одеса, провулок Бориса Айзенберга, 2, офіс 9',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      practice: 'Practice Areas',
      contacts: 'Contacts',
    },
    hero: {
      title: 'Law Association',
      name: '"Yakovykh and Partners"',
      subtitle: 'Over 20 years of experience in legal services',
      cta: 'Contact Us',
    },
    home: {
      about: {
        title: 'About the Association',
        description: 'Law Association "Yakovykh and Partners" is a team of experienced lawyers that has been providing professional legal assistance in Odessa for over two decades. Our work is based on the principles of professionalism, ethics, and responsibility to our clients.',
      },
      founder: {
        title: 'Leadership',
        name: 'Yevhenii Yakovykh',
        role: 'Founder and Head of the Law Association',
      },
      practice: {
        title: 'Practice Areas',
        viewAll: 'Learn More',
      },
      contact: {
        title: 'Contact Us',
        description: 'We are ready to provide consultation on any legal matters',
        telegram: 'Message on Telegram',
      },
    },
    about: {
      hero: {
        title: 'About the Association',
        subtitle: 'History, principles, and team',
      },
      history: {
        title: 'History and Experience',
        p1: 'Law Association "Yakovykh and Partners" was founded in Odessa and has been successfully operating in the Ukrainian legal services market for over 20 years.',
        p2: 'Over the years, the association has earned a reputation as a reliable partner for businesses and private clients, thanks to its professional approach and deep understanding of the legal system.',
        p3: 'Today, the association includes five practicing lawyers, each with significant experience in their specialization.',
      },
      structure: {
        title: 'Ready to Protect Your Interests',
        description: 'The association is headed by the Founder and Head, who provides overall strategic and professional leadership. Each lawyer in the association specializes in specific areas of law, enabling comprehensive legal assistance to clients.',
      },
      principles: {
        title: 'Working Principles',
        items: [
          {
            title: 'Professionalism',
            description: 'Deep knowledge of legislation and continuous improvement',
          },
          {
            title: 'Confidentiality',
            description: 'Absolute protection of client information',
          },
          {
            title: 'Responsibility',
            description: 'Personal accountability for results',
          },
          {
            title: 'Ethics',
            description: 'Adherence to the highest standards of legal ethics',
          },
        ],
      },
    },
    practice: {
      hero: {
        title: 'Practice Areas',
        subtitle: 'Areas of our legal practice',
      },
      areas: {
        criminal: {
          title: 'Criminal Law',
          description: 'Protection of clients\' rights and interests in criminal proceedings at all stages: from pre-trial investigation to court hearings and appeals. Representation of victims and witnesses.',
        },
        family: {
          title: 'Family Law',
          description: 'Legal assistance in divorce cases, division of marital property, paternity establishment, alimony claims, determination of children\'s residence, and other family disputes.',
        },
        civil: {
          title: 'Civil Law',
          description: 'Representation of clients\' interests in civil cases: property disputes, contractual obligations, compensation for damages, protection of honor and dignity, inheritance matters.',
        },
        traffic: {
          title: 'Traffic Accident Cases',
          description: 'Protection of rights for traffic accident participants: compensation for material and moral damages, representation in insurance disputes, defense in administrative offense cases.',
        },
        business: {
          title: 'Business Legal Support',
          description: 'Comprehensive legal services for enterprises and entrepreneurs: corporate law, contract work, labor relations, tax issues, representation in commercial disputes.',
        },
      },
    },
    contacts: {
      hero: {
        title: 'Contacts',
        subtitle: 'Get in touch with us',
      },
      address: {
        title: 'Address',
        value: '65012, Odessa, Borysa Aizenberha Lane, 2, office 9',
      },
      phone: {
        title: 'Phone',
        value: '+38 (050) 492-22-25',
      },
      telegram: {
        title: 'Telegram',
        cta: 'Message on Telegram',
      },
      founder: {
        title: 'Founder and Head',
        name: 'Yevhenii Yakovykh',
      },
    },
    footer: {
      rights: '© 2024 Law Association "Yakovykh and Partners". All rights reserved.',
      address: '65012, Odessa, Borysa Aizenberha Lane, 2, office 9',
    },
  },
};
