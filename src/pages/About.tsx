import { useLanguage } from '@/contexts/LanguageContext';
import { Send, Scale } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Btn } from '@/components/Btn';

const wordVariants = {
  hidden: { y: '110%', opacity: 0 },
  visible: (i: number) => ({
    y: 0, opacity: 1,
    transition: { duration: 1, delay: 0.3 + i * 0.12, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

const About = () => {
  const { t, language } = useLanguage();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const heroParallax = useTransform(scrollY, [0, 600], [0, 140]);

  const team = [
    { name: 'Тетяна Ткач',  role: language === 'uk' ? 'Партнер, адвокат' : 'Partner, Attorney',       img: '/1.webp', bio: 'Експерт у цивільному праві та складних судових спорах з фокусом на результат.' },
    { name: 'Анастасія Купенко', role: language === 'uk' ? 'Партнер, адвокат' : 'Partner, Attorney',       img: '/2.webp', bio: 'Захист у кримінальних провадженнях та представництво інтересів у ЄСПЛ.' },
    { name: 'Юлія Гореванова',       role: language === 'uk' ? 'Помічник адвоката' : 'Legal Assistant', img: '/3.webp', bio: 'Аналітична підтримка, підготовка складних процесуальних документів та запитів.' },
    { name: 'Яна Решетило',       role: language === 'uk' ? 'Помічник адвоката' : 'Legal Assistant', img: '/4.webp', bio: 'Правовий супровід та ефективна взаємодія з державними контрольними органами.' },
  ];

  const firmSections = [
    {
      label: language === 'uk' ? 'Засновник' : 'Founder',
      title: language === 'uk' ? 'Якових Володимир Ілліч' : 'Volodymyr Yakovykh',
      role: language === 'uk' ? 'Засновник адвокатського об\'єднання «Якових та партнери»' : 'Founder of Law Association "Yakovykh and Partners"',
      text: t.about.history.p1,
      img: '/head.webp',
    },
    {
      label: language === 'uk' ? 'Голова об\'єднання' : 'Head of Association',
      title: language === 'uk' ? 'Якових Євген Володимирович' : 'Yevhen Yakovykh',
      role: language === 'uk' ? 'Керуючий партнер та Голова адвокатського об\'єднання «Якових та партнери»' : 'Managing Partner and Head of Law Association "Yakovykh and Partners"',
      text: language === 'uk'
        ? 'Євген Якових очолює адвокатське об\'єднання та забезпечує стратегічне керівництво, представляє інтереси клієнтів у найскладніших справах і підтримує найвищі стандарти якості правової допомоги.'
        : 'Yevhen Yakovykh leads the law association, provides strategic leadership, represents clients in the most complex cases, and upholds the highest standards of legal assistance.',
      img: '/head_new.webp',
    },
  ];

  return (
    <div className="bg-[#F4F1EA] text-[#041e19] font-serif min-h-screen">

      {/* ── HERO ── */}
      <section ref={heroRef} className="relative h-[80vh] flex items-center justify-center overflow-hidden border-b border-[#8C734B]/20">
        <motion.div className="absolute inset-0 z-0 scale-110" style={{ y: heroParallax }}>
          <img src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2000" alt="Office" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#041e19]/65" />
        </motion.div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, letterSpacing: '0.8em' }}
            animate={{ opacity: 1, letterSpacing: '0.4em' }}
            transition={{ duration: 1.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[#B08D57] text-[12px] uppercase tracking-[0.4em] mb-10 block font-sans font-bold"
          >
            {language === 'uk' ? 'Команда та Історія' : 'Team & Legacy'}
          </motion.span>

          <h1 className="text-5xl md:text-8xl uppercase tracking-tighter font-light text-white leading-none mb-10 overflow-hidden">
            {t.about.hero.title.split(' ').map((word, i) => (
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

      {/* ── ПРО ОБ'ЄДНАННЯ / ПАРТНЕР ── */}
      <section className="py-16 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          {firmSections.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 1.2 }}
              className="grid lg:grid-cols-2 gap-10 md:gap-20 items-center mb-16 md:mb-32 last:mb-0 group"
            >
              {/* Photo */}
              <div className={`aspect-[4/5] bg-[#E0DCCE] overflow-hidden relative ${i === 1 ? 'lg:order-2' : ''}`}>
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-[2500ms] ease-out group-hover:scale-[1.05]"
                  style={{ filter: 'grayscale(0.2) sepia(0.12) contrast(1.04)' }}
                />

                {/* Static multiply overlay — only on founder photo */}
                {i === 0 && (
                  <div className="absolute inset-0 pointer-events-none" style={{ backgroundColor: '#041e19', opacity: 0.10, mixBlendMode: 'multiply' }} />
                )}

                {/* Gradient overlay — always on mobile, hover-only on desktop */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#041e19]/75 via-[#041e19]/20 to-transparent lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-700" />

                {/* Name + role — always visible on mobile, slides on desktop */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 lg:translate-y-4 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 transition-all duration-700 ease-out">
                  <span className="text-[#B08D57] text-[8px] uppercase tracking-[0.5em] font-sans font-bold block mb-2">
                    {item.label}
                  </span>
                  <p className="text-white text-xl md:text-2xl font-light uppercase tracking-tight leading-tight">
                    {item.title}
                  </p>
                </div>

                {/* Top-right gold corner */}
                <div className="absolute top-0 right-0 w-8 lg:w-0 h-[1px] bg-[#B08D57] lg:group-hover:w-12 transition-all duration-500 delay-200" />
                <div className="absolute top-0 right-0 w-[1px] h-8 lg:h-0 bg-[#B08D57] lg:group-hover:h-12 transition-all duration-500 delay-300" />

                {/* Bottom-left gold corner */}
                <div className="absolute bottom-0 left-0 h-[1px] bg-[#B08D57] w-8 lg:w-0 lg:group-hover:w-12 transition-all duration-500 delay-100" />
                <div className="absolute bottom-0 left-0 w-[1px] bg-[#B08D57] h-8 lg:h-0 lg:group-hover:h-12 transition-all duration-500 delay-200" />
              </div>

              {/* Text */}
              <div className={i === 1 ? 'lg:order-1' : ''}>
                {/* Eyebrow line — always visible on mobile */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px bg-[#B08D57]/30 w-8 lg:w-0 lg:group-hover:w-10 transition-all duration-700 ease-out" />
                  <span className="text-[#B08D57] text-[9px] uppercase tracking-[0.5em] font-sans font-bold whitespace-nowrap lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 delay-150">
                    {item.label}
                  </span>
                </div>

                <h2 className="text-3xl md:text-5xl font-light uppercase tracking-tight mb-4 transition-colors duration-500 group-hover:text-[#041e19]">
                  {item.title}
                </h2>

                <p className="text-[#B08D57] text-[10px] md:text-[11px] uppercase tracking-[0.35em] font-sans font-semibold mb-6 md:mb-8">
                  {item.role}
                </p>

                {/* Underline — wider on mobile */}
                <div className="h-px bg-[#B08D57]/25 w-20 lg:w-12 mb-6 md:mb-8 group-hover:w-24 transition-all duration-700 ease-out" />

                <p className="text-base md:text-xl leading-relaxed text-[#041e19]/70 italic border-l-2 border-[#B08D57] lg:border-[#B08D57]/40 lg:group-hover:border-[#B08D57] pl-6 md:pl-8 lg:group-hover:text-[#041e19]/85 transition-all duration-500">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── ФАХІВЦІ ── */}
      <section className="py-32 bg-[#F4F1EA] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center">
          <Scale size={800} />
        </div>
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="text-5xl font-light uppercase tracking-tighter mb-20 text-center"
          >
            {language === 'uk' ? 'Наші фахівці' : 'Our Specialists'}
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((person, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.8, delay: idx * 0.08 }}
                className="group cursor-default"
              >
                {/* Photo */}
                <div className="aspect-[3/4] overflow-hidden mb-6 bg-[#E0DCCE] relative">
                  <img
                    src={person.img}
                    alt={person.name}
                    className="w-full h-full object-cover transition-transform duration-[1800ms] ease-out group-hover:scale-[1.06]"
                    style={{ filter: 'grayscale(0.2) sepia(0.12) contrast(1.04)' }}
                  />
                  {/* Dark overlay — always on mobile */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#041e19]/70 via-transparent to-transparent lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-700" />
                  {/* Bio — always visible on mobile */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 lg:translate-y-full lg:group-hover:translate-y-0 transition-transform duration-700 ease-out">
                    <p className="text-white/85 text-[13px] italic leading-relaxed font-light">
                      {person.bio}
                    </p>
                  </div>
                  {/* Gold bottom line — always on mobile */}
                  <div className="absolute bottom-0 left-0 h-[2px] bg-[#B08D57] w-full lg:w-0 lg:group-hover:w-full transition-all duration-500 delay-100" />
                </div>

                {/* Name + role */}
                <h4 className="text-lg font-medium mb-1 text-[#B08D57] lg:text-[#041e19] lg:group-hover:text-[#B08D57] transition-colors duration-400">
                  {person.name}
                </h4>
                <span className="text-[#8C734B] text-[10px] uppercase tracking-[0.2em] font-bold block transition-opacity duration-400">
                  {person.role}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ПРИНЦИПИ ── */}
      <section className="bg-[#041e19] py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="mb-16 border-b border-[#F8F7F5]/10 pb-8">
            <h2 className="text-4xl md:text-5xl font-light uppercase tracking-tight text-[#F8F7F5]">
              {t.about.principles.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#b08d57]/15">
            {t.about.principles.items.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group bg-[#041e19] p-10 md:p-14 flex gap-8 hover:bg-[#062c24] transition-colors duration-700 relative overflow-hidden"
              >
                {/* Animated gold corner */}
                <div className="absolute top-0 left-0 w-0 h-[1px] bg-[#B08D57] group-hover:w-full transition-all duration-700 ease-out" />
                <div className="absolute top-0 left-0 h-0 w-[1px] bg-[#B08D57] group-hover:h-10 transition-all duration-500 delay-200 ease-out" />

                <span className="text-[#b08d57]/20 font-serif font-light text-6xl md:text-7xl leading-none shrink-0 group-hover:text-[#b08d57]/40 transition-colors duration-700 select-none">
                  0{index + 1}
                </span>
                <div className="pt-2 space-y-4">
                  <h4 className="text-lg md:text-xl uppercase tracking-tight text-[#F8F7F5] font-medium group-hover:text-[#b08d57] transition-colors duration-500">
                    {principle.title}
                  </h4>
                  <div className="w-8 h-px bg-[#b08d57]/30 group-hover:w-16 transition-all duration-700" />
                  <p className="text-[#F8F7F5]/50 text-sm md:text-base leading-relaxed italic font-light group-hover:text-[#F8F7F5]/75 transition-colors duration-700">
                    {principle.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-32 md:py-48 bg-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center">
          <Scale size={600} strokeWidth={0.5} />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <span className="text-[#b08d57] text-[10px] uppercase tracking-[0.5em] font-sans font-bold mb-8 block">
            {language === 'uk' ? 'Приватна консультація' : 'Private Consultation'}
          </span>
          <h2 className="text-4xl md:text-6xl font-light mb-12 italic text-[#062c24] uppercase tracking-tight">
            {t.about.structure.title}
          </h2>
          <Btn href="https://t.me/+380504922225" target="_blank" rel="noopener noreferrer" variant="dark" size="lg">
            <Send size={14} />
            {t.contacts.telegram.cta}
          </Btn>
        </div>
      </section>

      <div className="h-1.5 w-full bg-[#b08d57]" />
    </div>
  );
};

export default About;
