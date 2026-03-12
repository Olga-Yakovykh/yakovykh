import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Send, FileText, Landmark, Scale, Gavel, Heart, Users, Car, Briefcase, Shield, Award, Clock, MapPin, Phone } from 'lucide-react';
import heroImage from '@/assets/hero-law-library.jpg';
import aboutImage from '@/assets/about.webp';

const practiceIcons = {
  criminal: Gavel,
  family: Heart,
  civil: Users,
  traffic: Car,
  business: Briefcase,
};

const Index = () => {
  const { t, language } = useLanguage();

  const practiceAreas = [
    { key: 'criminal', ...t.practice.areas.criminal },
    { key: 'family', ...t.practice.areas.family },
    { key: 'civil', ...t.practice.areas.civil },
    { key: 'traffic', ...t.practice.areas.traffic },
    { key: 'business', ...t.practice.areas.business },
  ];

  const stats = [
    { number: '20+', label: language === 'uk' ? 'Років досвіду' : 'Years Experience' },
    { number: '5', label: language === 'uk' ? 'Партнерів' : 'Partners' },
    { number: '1000+', label: language === 'uk' ? 'Справ' : 'Cases' },
    { number: '100%', label: language === 'uk' ? 'Конфіденційність' : 'Discretion' },
  ];

  return (
    <div className="bg-[#fdfcf0] text-[#062c24] font-serif selection:bg-[#b08d57]/20 overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[90vh] md:h-screen flex items-center overflow-hidden border-b-[8px] border-[#b08d57]">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10s] hover:scale-105"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-[#041e19]/65 mix-blend-multiply" />
        
        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10 pt-20">
          <div className="max-w-4xl border-l-[2px] md:border-l-[3px] border-[#b08d57] pl-6 md:pl-10 py-2">
            <p className="text-[#b08d57] uppercase tracking-[0.4em] text-[9px] md:text-xs mb-6 font-sans font-bold">
              {language === 'uk' ? 'Адвокатське об\'єднання' : 'Law Association'} — Est. 2004
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-8xl text-[#fdfcf0] mb-8 font-light tracking-tight leading-[1.1] uppercase">
              {t.hero.name}
            </h1>
            <p className="text-base md:text-xl lg:text-2xl text-[#fdfcf0]/90 mb-12 max-w-2xl leading-relaxed italic font-light">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 md:gap-8 items-stretch sm:items-center">
              <a 
                href="https://t.me/+380504922225" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-center bg-[#b08d57] hover:bg-[#fdfcf0] hover:text-[#062c24] text-[#fdfcf0] px-10 py-5 text-[11px] uppercase tracking-[0.3em] transition-all duration-700 font-sans font-bold shadow-2xl"
              >
                <Send className="w-4 h-4 mr-3 inline mb-0.5" />
                {t.hero.cta}
              </a>
              <Link 
                to="/practice"
                className="text-center text-[#fdfcf0] hover:text-[#b08d57] border border-[#fdfcf0]/30 sm:border-0 sm:border-b sm:border-[#b08d57]/40 px-6 py-4 sm:px-0 sm:py-2 text-[11px] uppercase tracking-[0.3em] font-sans transition-all"
              >
                {t.home.practice.viewAll}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- STATS BAR --- */}
      <section className="bg-[#041e19] py-16 md:py-24 border-b border-[#b08d57]/20">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group border-r last:border-0 border-white/5 px-4">
                <div className="text-4xl md:text-5xl lg:text-6xl text-[#b08d57] mb-2 font-light tracking-tighter">
                  {stat.number}
                </div>
                <div className="text-[10px] uppercase tracking-[0.4em] text-[#fdfcf0]/40 font-sans font-bold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section className="py-20 md:py-32 bg-[#fdfcf0]">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-24 items-start">
            <div className="space-y-6 md:space-y-0">
              <div className="relative mx-auto lg:mx-0 max-w-[450px]">
                <div className="aspect-[4/5] overflow-hidden border-[12px] border-white shadow-2xl relative z-10">
                  <img src={aboutImage} alt="Founder" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-[#b08d57] z-0" />
                <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-[#b08d57] z-0" />
              </div>
              <div className="lg:hidden bg-white border-l-4 border-[#b08d57] p-6 shadow-sm italic text-center">
                <h3 className="text-xl text-[#062c24] font-light italic">{t.home.founder.name}</h3>
                <p className="text-[#b08d57] font-sans text-[9px] uppercase tracking-[0.3em] font-bold">
                  {t.home.founder.role}
                </p>
              </div>
            </div>
            
            <div className="space-y-8">
              <span className="text-[#b08d57] text-[10px] uppercase tracking-[0.5em] font-sans font-bold block text-center lg:text-left">
                {language === 'uk' ? 'Про нас' : 'About Us'}
              </span>
              <h2 className="text-3xl md:text-5xl font-light text-[#062c24] leading-tight uppercase tracking-tight text-center lg:text-left">
                {t.home.about.title}
              </h2>
              <div className="w-20 h-px bg-[#b08d57] mx-auto lg:mx-0" />
              <p className="text-[#062c24]/80 text-base md:text-lg leading-relaxed italic text-center lg:text-left">
                {t.home.about.description}
              </p>
              
              <div className="hidden lg:block bg-white border-l-4 border-[#b08d57] p-8 shadow-sm">
                <h3 className="text-xl md:text-2xl mb-1 text-[#062c24] font-light italic">{t.home.founder.name}</h3>
                <p className="text-[#b08d57] font-sans text-[9px] uppercase tracking-[0.3em] font-bold">
                  {t.home.founder.role}
                </p>
              </div>

              <div className="flex justify-center lg:justify-start pt-4">
                <Link to="/about" className="w-full sm:w-auto text-center border border-[#062c24] px-10 py-4 text-[11px] uppercase tracking-[0.4em] font-sans font-bold hover:bg-[#062c24] hover:text-[#fdfcf0] transition-all duration-500">
                  {language === 'uk' ? 'Детальніше' : 'Full History'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PRACTICE AREAS --- */}
      <section className="py-24 md:py-32 bg-white border-y border-[#062c24]/5">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-20">
            <span className="text-[#b08d57] text-4xl mb-4 block font-light leading-none">§</span>
            <h2 className="text-3xl md:text-5xl font-light uppercase tracking-tighter text-[#062c24]">
              {t.home.practice.title}
            </h2>
            <div className="mt-8 flex justify-center gap-3">
                <div className="h-[1px] w-12 bg-[#b08d57]/30 self-center" />
                <div className="w-2 h-2 rotate-45 border border-[#b08d57]" />
                <div className="h-[1px] w-12 bg-[#b08d57]/30 self-center" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
            {practiceAreas.map((area) => {
              const Icon = practiceIcons[area.key as keyof typeof practiceIcons];
              return (
                <div key={area.key} className="group border-b border-[#062c24]/5 pb-12 transition-all duration-500 hover:border-[#b08d57]">
                  <Icon className="text-[#b08d57] mb-8 stroke-[1]" size={28} />
                  <h3 className="text-xl md:text-2xl mb-4 group-hover:text-[#b08d57] transition-colors duration-300 uppercase tracking-tight font-medium">
                    {area.title}
                  </h3>
                  <p className="text-[#062c24]/60 text-sm leading-relaxed italic mb-8 line-clamp-3">
                    {area.description}
                  </p>
                  <Link to="/practice" className="inline-block border border-[#b08d57]/40 px-6 py-2 text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-[#b08d57] hover:bg-[#b08d57] hover:text-white transition-all">
                    {language === 'uk' ? 'Докладніше' : 'Details'} +
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- ЗОЛОТАЯ ПОЛОСА ПЕРЕД БЛОКОМ СВЯЗИ --- */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#b08d57] to-transparent opacity-40" />
      <div className="w-full h-[4px] bg-[#b08d57] shadow-[0_0_20px_rgba(176,141,87,0.2)]" />

{/* --- CONTACT CTA SECTION: СИСТЕМНЫЕ РАЗМЕРЫ --- */}
<section className="relative py-24 md:py-32 bg-[#fdfcf0] overflow-hidden text-center">
        <div className="container mx-auto px-6 relative z-10">
          
          {/* Декор сверху */}
          <div className="flex justify-center gap-10 mb-10 opacity-20 text-[#062c24]">
            <Scale size={20} strokeWidth={1} /> 
            <Shield size={20} strokeWidth={1} /> 
            <FileText size={20} strokeWidth={1} />
          </div>

          <div className="max-w-3xl mx-auto border border-[#b08d57]/20 p-8 md:p-16 bg-white shadow-sm relative">
            {/* Уголки */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-[#b08d57]/40" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-[#b08d57]/40" />

            <h2 className="text-2xl md:text-4xl text-[#062c24] mb-6 font-light italic leading-tight uppercase tracking-tight">
              {t.home.contact.title}
            </h2>
            
            <p className="text-[#062c24]/40 font-sans text-[9px] md:text-[10px] tracking-[0.4em] uppercase mb-10">
              Privileged & Confidential
            </p>
            
            <div className="flex justify-center">
              <a 
                href="https://t.me/+380504922225" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#062c24] text-[#fdfcf0] px-8 py-4 text-[10px] md:text-[11px] font-sans font-bold uppercase tracking-[0.3em] transition-all duration-500 hover:bg-[#b08d57] hover:shadow-lg active:scale-95"
              >
                <Send className="w-3.5 h-3.5 mr-3" />
                {language === 'uk' ? 'Зв\'язатися' : 'Contact Counsel'}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- ЗОЛОТАЯ ЛИНИЯ-РАЗДЕЛИТЕЛЬ --- */}
      <div className="h-px w-full bg-[#b08d57]/30" />
      <div className="h-1.5 w-full bg-[#b08d57]" />

      {/* --- ФИНАЛЬНАЯ ЛИНИЯ НА СТЫКЕ С ФУТЕРОМ --- */}
      <div className="h-1.5 w-full bg-[#b08d57]" />
    </div>
  );
};

export default Index;