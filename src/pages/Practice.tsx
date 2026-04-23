import { useLanguage } from '@/contexts/LanguageContext';
import { Heart, Users, Car, Briefcase, Gavel, Send } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const wordVariants = {
  hidden: { y: '110%', opacity: 0 },
  visible: (i: number) => ({
    y: 0, opacity: 1,
    transition: { duration: 1, delay: 0.3 + i * 0.12, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

const practiceIcons = {
  criminal: Gavel,
  family:   Heart,
  civil:    Users,
  traffic:  Car,
  business: Briefcase,
};

const practicePhotos: Record<string, string> = {
  criminal: '/15.webp',
  family:   '/8.webp',
  civil:    '/7.webp',
  traffic:  '/23.webp',
  business: '/22.webp',
};

const subServices: Record<string, { uk: string[]; en: string[] }> = {
  criminal: {
    uk: ['Захист на стадії досудового розслідування', 'Представництво в суді всіх інстанцій', 'Апеляційне та касаційне оскарження', 'Представництво потерпілих і свідків', 'Звернення до ЄСПЛ'],
    en: ['Defense at pre-trial investigation stage', 'Representation in courts of all instances', 'Appeals and cassation challenges', 'Representation of victims and witnesses', 'Applications to the ECHR'],
  },
  family: {
    uk: ['Розлучення та поділ спільного майна', 'Стягнення та перегляд розміру аліментів', 'Визначення місця проживання дітей', 'Встановлення та оспорювання батьківства', 'Питання опіки та усиновлення'],
    en: ['Divorce and division of marital property', 'Child support claims and modifications', "Determining children's place of residence", 'Paternity establishment and challenges', 'Guardianship and adoption matters'],
  },
  civil: {
    uk: ['Майнові та немайнові спори', 'Спадкові справи та оформлення спадщини', 'Відшкодування матеріальної та моральної шкоди', 'Захист честі, гідності та репутації', 'Визнання правочинів недійсними'],
    en: ['Property and non-property disputes', 'Inheritance cases and estate administration', 'Compensation for material and moral damages', 'Protection of honor, dignity, and reputation', 'Challenging the validity of transactions'],
  },
  traffic: {
    uk: ['Відшкодування збитків від ДТП', 'Спори зі страховими компаніями', 'Захист у справах про адміністративні правопорушення', 'Оскарження позбавлення права керування', 'Кримінальна відповідальність внаслідок ДТП'],
    en: ['Compensation for road traffic accident damages', 'Insurance disputes and claims', 'Defense in administrative traffic offenses', "Challenging driver's license revocation", 'Criminal liability arising from accidents'],
  },
  business: {
    uk: ['Корпоративне право та реєстрація бізнесу', 'Розробка та супровід договорів', 'Трудові спори та захист прав працівників', 'Представництво в господарських судах', 'Податкові питання та перевірки'],
    en: ['Corporate law and business registration', 'Contract drafting and management', 'Labor disputes and employee rights protection', 'Representation in commercial courts', 'Tax matters and compliance audits'],
  },
};

const Practice = () => {
  const { t, language } = useLanguage();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const heroParallax = useTransform(scrollY, [0, 600], [0, 140]);

  const practiceAreas = [
    { key: 'criminal', ...t.practice.areas.criminal },
    { key: 'family',   ...t.practice.areas.family },
    { key: 'civil',    ...t.practice.areas.civil },
    { key: 'traffic',  ...t.practice.areas.traffic },
    { key: 'business', ...t.practice.areas.business },
  ];

  return (
    <div className="bg-[#F8F7F5] text-[#041E19] font-serif selection:bg-[#B08D57]/15 overflow-x-hidden antialiased">

      {/* ── HERO ── */}
      <section ref={heroRef} className="relative h-[80vh] flex items-center justify-center overflow-hidden border-b border-[#B08D57]/15">
        <motion.div className="absolute inset-0 z-0 scale-110" style={{ y: heroParallax }}>
          <img src="/1500.webp" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#041e19]/65" />
        </motion.div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, letterSpacing: '0.8em' }}
            animate={{ opacity: 1, letterSpacing: '0.4em' }}
            transition={{ duration: 1.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[#B08D57] text-[12px] uppercase tracking-[0.4em] mb-10 block font-sans font-bold"
          >
            {language === 'uk' ? 'Спеціалізація' : 'Specialization'}
          </motion.span>

          <h1 className="text-5xl md:text-8xl uppercase tracking-tighter font-light text-white leading-none mb-10 overflow-hidden">
            {t.practice.hero.title.split(' ').map((word, i) => (
              <span key={i} className="inline-block overflow-hidden mr-[0.25em] last:mr-0">
                <motion.span className="inline-block" custom={i} variants={wordVariants} initial="hidden" animate="visible">
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="w-24 h-px bg-[#B08D57] mx-auto origin-left"
          />
        </div>
      </section>

      {/* ── AREAS ── */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          {practiceAreas.map((area, i) => {
            const Icon = practiceIcons[area.key as keyof typeof practiceIcons];
            const flip = i % 2 === 1;

            return (
              <motion.div
                key={area.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 1.2 }}
                className="grid lg:grid-cols-2 gap-20 items-center mb-32 last:mb-0"
              >
                {/* Photo */}
                <div className={`aspect-[4/5] bg-[#E0DCCE] overflow-hidden group relative ${flip ? 'lg:order-2' : ''}`}>
                  <img
                    src={practicePhotos[area.key]}
                    alt={area.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ filter: 'grayscale(0.2) sepia(0.12) contrast(1.04)' }}
                  />
                  <div className="absolute inset-0 bg-[#041e19]/40 pointer-events-none" />
                </div>

                {/* Content */}
                <div className={flip ? 'lg:order-1' : ''}>
                  <div className="flex items-center gap-3 mb-6">
                    <Icon size={15} strokeWidth={1.5} className="text-[#B08D57]" />
                    <span className="text-[#B08D57] text-[10px] uppercase tracking-[0.4em] font-sans font-bold">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h2 className="text-5xl font-light uppercase tracking-tight mb-8">
                    {area.title}
                  </h2>

                  <p className="text-xl leading-relaxed text-[#041e19]/70 italic border-l-2 border-[#B08D57] pl-8 mb-10">
                    {area.description}
                  </p>

                  <ul className="space-y-3 mb-10">
                    {subServices[area.key][language].map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-[#041e19]/60 text-sm font-sans leading-relaxed">
                        <span className="w-1 h-1 rounded-full bg-[#B08D57]/60 mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="https://t.me/e_yako26"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neo-btn-gold inline-flex"
                  >
                    <Send size={12} strokeWidth={1.5} />
                    {language === 'uk' ? 'Отримати консультацію' : 'Get consultation'}
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-32 md:py-48 bg-white text-center relative overflow-hidden border-t border-[#B08D57]/10">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-[#b08d57] text-[10px] uppercase tracking-[0.5em] font-sans font-bold mb-8 block">
              {language === 'uk' ? 'Приватна консультація' : 'Private Consultation'}
            </span>
            <h2 className="text-4xl md:text-6xl font-light mb-12 italic text-[#062c24] uppercase tracking-tight">
              {language === 'uk' ? 'Ми готові вам допомогти' : 'We are ready to help'}
            </h2>
            <a
              href="https://t.me/e_yako26"
              target="_blank"
              rel="noopener noreferrer"
              className="neo-btn-gold inline-flex mx-auto"
            >
              <Send size={13} strokeWidth={1.5} />
              {language === 'uk' ? 'Надіслати запит' : 'Send Inquiry'}
            </a>
          </motion.div>
        </div>
      </section>

      <div className="h-1.5 w-full bg-[#b08d57]" />
    </div>
  );
};

export default Practice;
