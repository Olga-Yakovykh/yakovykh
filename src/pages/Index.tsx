import { useLanguage } from '@/contexts/LanguageContext';
import { Send, Gavel, Heart, Users, Car, Briefcase, Scale } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import heroImage from '@/assets/9.png';

import { Link } from 'react-router-dom';
import { useRef, useEffect, useState } from 'react';

const practiceIcons = {
  criminal: Gavel,
  family:   Heart,
  civil:    Users,
  traffic:  Car,
  business: Briefcase,
};

const practiceBgs = {
  criminal: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800',
  family:   '/family.png',
  civil:    'https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=800',
  traffic:  '/src/assets/car.png',
  business: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800',
};

const PracticeCard = ({
  area,
  bg,
  language,
}: {
  area: { key: string; title: string; description: string };
  bg: string;
  language: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const isTouch = useRef(
    typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches
  );

  useEffect(() => {
    if (!isTouch.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.32) setActive(true);
        else if (entry.intersectionRatio < 0.08) setActive(false);
      },
      { threshold: [0.08, 0.32] }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const onEnter = () => { if (!isTouch.current) setActive(true); };
  const onLeave = () => { if (!isTouch.current) setActive(false); };

  const Icon = practiceIcons[area.key as keyof typeof practiceIcons];
  const ease = 'cubic-bezier(0.16, 1, 0.3, 1)';

  return (
    <div
      ref={ref}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="relative bg-[#F4F1EA] overflow-hidden flex flex-col justify-between min-h-[460px] md:min-h-[520px] cursor-default"
    >
      <div
        className="absolute inset-0 z-0"
        style={{ opacity: active ? 1 : 0, transition: `opacity 1400ms ${ease}` }}
      >
        <img
          src={bg}
          alt=""
          className="w-full h-full object-cover"
          style={{
            transform: active ? 'scale(1.0)' : 'scale(1.08)',
            filter: active ? 'grayscale(0.2) sepia(0.12) contrast(1.04)' : 'grayscale(0.2) sepia(0.12) contrast(1.04) blur(4px)',
            transition: `transform 2200ms ${ease}, filter 1600ms ${ease}`,
          }}
        />
      </div>

      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: 'linear-gradient(to bottom, rgba(4,30,25,0.88) 0%, rgba(4,30,25,0.52) 50%, rgba(4,30,25,0.84) 100%)',
          opacity: active ? 1 : 0,
          transition: `opacity 1200ms ${ease}`,
        }}
      />

      <div
        className="absolute bottom-0 left-0 z-[2] h-[1px] bg-gradient-to-r from-transparent via-[#b08d57] to-transparent"
        style={{ width: active ? '100%' : '0%', transition: `width 1000ms ${ease} 400ms` }}
      />

      <div className="relative z-10 p-8 md:p-12 lg:p-14 flex flex-col justify-between h-full">
        <div>
          <Icon
            size={36}
            style={{
              strokeWidth: 1,
              marginBottom: '2.5rem',
              color: '#B08D57',
              transform: active ? 'translateY(-4px)' : 'translateY(0)',
              transition: `transform 700ms ${ease}`,
            }}
          />
          <h3
            className="text-2xl md:text-3xl uppercase tracking-tight font-light mb-5"
            style={{
              color: active ? '#ffffff' : '#041E19',
              transition: `color 700ms ${ease} 100ms`,
            }}
          >
            {area.title}
          </h3>
          <p
            className="text-sm leading-relaxed italic font-light line-clamp-4"
            style={{
              color: active ? 'rgba(255,255,255,0.7)' : 'rgba(4,30,25,0.5)',
              transform: active ? 'translateY(0)' : 'translateY(6px)',
              opacity: active ? 1 : 0.8,
              transition: `color 800ms ${ease} 150ms, transform 800ms ${ease} 150ms, opacity 800ms ${ease} 150ms`,
            }}
          >
            {area.description}
          </p>
        </div>

        <div className="pt-10 mt-auto">
          <div
            className="inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] font-semibold font-sans"
            style={{ color: '#B08D57', transition: `color 700ms ${ease} 200ms` }}
          >
            <span>{language === 'uk' ? 'Докладніше' : 'Details'}</span>
            <div
              className="h-px bg-current"
              style={{ width: active ? '3rem' : '1.5rem', transition: `width 900ms ${ease} 200ms` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const wordVariants = {
  hidden: { y: '110%', opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 1, delay: 0.3 + i * 0.12, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

const Index = () => {
  const { t, language } = useLanguage();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const heroParallax = useTransform(scrollY, [0, 700], [0, 160]);

  const practiceAreas = [
    { key: 'criminal', ...t.practice.areas.criminal },
    { key: 'family',   ...t.practice.areas.family },
    { key: 'civil',    ...t.practice.areas.civil },
    { key: 'traffic',  ...t.practice.areas.traffic },
    { key: 'business', ...t.practice.areas.business },
  ];

  return (
    <div className="bg-[#F4F1EA] text-[#041E19] font-serif selection:bg-[#B08D57]/20 overflow-x-hidden antialiased">

      {/* ── HERO ── */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden border-b border-[#B08D57]/20">
        {/* Parallax photo */}
        <motion.div
          className="absolute inset-0 z-0 scale-110"
          style={{ y: heroParallax }}
        >
          <img src={heroImage} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#041e19]/80" />
        </motion.div>

        <div className="container mx-auto px-6 relative z-10 text-center">

          {/* Eyebrow */}
          <motion.span
            initial={{ opacity: 0, letterSpacing: '0.8em' }}
            animate={{ opacity: 1, letterSpacing: '0.4em' }}
            transition={{ duration: 1.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[#B08D57] text-[12px] uppercase tracking-[0.4em] mb-10 block font-sans font-bold"
          >
            EST. 2004 — ODESSA, UKRAINE
          </motion.span>

          {/* Word-by-word reveal */}
          <h1 className="text-5xl sm:text-6xl md:text-8xl uppercase tracking-tighter font-light text-white leading-none mb-10 overflow-hidden">
            {t.hero.name.split(' ').map((word, i) => (
              <span key={i} className="inline-block overflow-hidden mr-[0.25em] last:mr-0">
                <motion.span
                  className="inline-block"
                  custom={i}
                  variants={wordVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          {/* Gold line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="w-24 h-px bg-[#B08D57] mx-auto mb-12 origin-left"
          />

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center"
          >
            <a
              href="https://t.me/+380504922225"
              target="_blank"
              rel="noopener noreferrer"
              className="neo-btn-gold w-full sm:w-auto"
            >
              <Send size={13} strokeWidth={1.5} />
              {t.hero.cta}
            </a>
            <Link to="/practice" className="neo-btn-ghost w-full sm:w-auto justify-center">
              {language === 'uk' ? 'Напрямки діяльності' : 'Practice Areas'}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── ПРО ОБ'ЄДНАННЯ ── */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1.2 }}
            className="grid lg:grid-cols-2 gap-20 items-center group"
          >
            {/* Photo */}
            <div className="aspect-[4/5] bg-[#E0DCCE] overflow-hidden relative">
              <img
                src="/src/assets/20.png"
                alt="About"
                className="w-full h-full object-cover object-right transition-transform duration-[2000ms] ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-[#041e19]/65 pointer-events-none" />
              <div className="absolute bottom-0 left-0 h-[2px] bg-[#B08D57] w-0 group-hover:w-full transition-all duration-700 ease-out" />
              <div className="absolute bottom-0 left-0 w-[2px] bg-[#B08D57] h-0 group-hover:h-16 transition-all duration-700 delay-100 ease-out" />
            </div>

            {/* Text */}
            <div>
              <div className="flex items-center gap-4 mb-6 overflow-hidden">
                <div className="h-px bg-[#B08D57]/30 w-0 group-hover:w-10 transition-all duration-700 ease-out" />
                <span className="text-[#B08D57] text-[9px] uppercase tracking-[0.5em] font-sans font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                  {language === 'uk' ? 'Про Бюро' : 'About Firm'}
                </span>
              </div>

              <h2 className="text-5xl font-light uppercase tracking-tight mb-8">
                {t.home.about.title}
              </h2>

              <div className="h-px bg-[#B08D57]/25 w-12 mb-8 group-hover:w-24 transition-all duration-700 ease-out" />

              <p className="text-xl leading-relaxed text-[#041e19]/70 italic border-l-2 border-[#B08D57]/40 pl-8 mb-10 group-hover:border-[#B08D57] group-hover:text-[#041e19]/85 transition-all duration-500">
                {t.home.about.description}
              </p>

              <Link to="/about" className="neo-btn-outline inline-flex">
                {language === 'uk' ? 'Наша історія' : 'Our Story'}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── НАПРЯМКИ ДІЯЛЬНОСТІ ── */}
      <section className="py-32 bg-[#F4F1EA] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center">
          <Scale size={900} />
        </div>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="text-center mb-20"
          >
            <span className="text-[#B08D57] text-[10px] uppercase tracking-[0.5em] font-sans font-bold block mb-4">
              {language === 'uk' ? 'Спеціалізація' : 'Specialization'}
            </span>
            <h2 className="text-5xl font-light uppercase tracking-tighter">
              {t.home.practice.title}
            </h2>
            <div className="w-24 h-px bg-[#B08D57] mx-auto mt-6" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#B08D57]/15 border border-[#B08D57]/15">
            {practiceAreas.map((area) => (
              <PracticeCard
                key={area.key}
                area={area}
                bg={practiceBgs[area.key as keyof typeof practiceBgs]}
                language={language}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/practice" className="neo-btn-outline inline-flex mx-auto">
              {language === 'uk' ? 'Всі напрямки' : 'All practice areas'}
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-32 md:py-48 bg-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center">
          <Scale size={700} strokeWidth={0.5} />
        </div>
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
              href="https://t.me/+380504922225"
              target="_blank"
              rel="noopener noreferrer"
              className="neo-btn-gold inline-flex mx-auto"
            >
              <Send size={13} strokeWidth={1.5} />
              {language === 'uk' ? 'Надіслати запит' : 'Send Inquiry'}
            </a>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20 pt-16 border-t border-[#B08D57]/10 max-w-3xl mx-auto">
              <div className="space-y-2">
                <p className="text-[9px] uppercase tracking-[0.4em] text-[#B08D57] font-bold font-sans">Call</p>
                <a href="tel:+380504922225" className="text-base hover:text-[#B08D57] transition-colors duration-300 font-light font-serif">+380 50 492 22 25</a>
              </div>
              <div className="space-y-2">
                <p className="text-[9px] uppercase tracking-[0.4em] text-[#B08D57] font-bold font-sans">Email</p>
                <a href="mailto:e.yakovykh@gmail.com" className="text-base hover:text-[#B08D57] transition-colors duration-300 font-light italic font-serif">e.yakovykh@gmail.com</a>
              </div>
              <div className="space-y-2">
                <p className="text-[9px] uppercase tracking-[0.4em] text-[#B08D57] font-bold font-sans">Office</p>
                <p className="text-base font-light font-serif">{language === 'uk' ? 'Одеса, Айзенберга 2' : 'Odessa, Aizenberga 2'}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="h-1.5 w-full bg-[#b08d57]" />
    </div>
  );
};

export default Index;
