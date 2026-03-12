import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Scale, Heart, Users, Car, Briefcase, Gavel, Send, BookOpen, Shield, FileText } from 'lucide-react';
import heroImage from '@/assets/hero-law-library.jpg';

const practiceIcons = {
  criminal: Gavel,
  family: Heart,
  civil: Users,
  traffic: Car,
  business: Briefcase,
};

const romanNumerals = ['I', 'II', 'III', 'IV', 'V'];

const Practice = () => {
  const { t, language } = useLanguage();

  const practiceAreas = [
    { key: 'criminal', ...t.practice.areas.criminal },
    { key: 'family', ...t.practice.areas.family },
    { key: 'civil', ...t.practice.areas.civil },
    { key: 'traffic', ...t.practice.areas.traffic },
    { key: 'business', ...t.practice.areas.business },
  ];

  return (
    <div className="bg-[#fdfcf0] text-[#062c24] font-serif selection:bg-[#b08d57]/20 overflow-x-hidden">
      
      {/* --- HERO SECTION: COMPACT --- */}
      <section className="relative min-h-[40vh] md:h-[60vh] flex items-center border-b-[6px] border-[#b08d57]">
        <div 
          className="absolute inset-0 bg-cover bg-center grayscale brightness-[0.4]"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-[#041e19]/80 mix-blend-multiply" />
        
        <div className="container mx-auto px-6 relative z-10 text-center pt-16 md:pt-20">
          <p className="text-[#b08d57] uppercase tracking-[0.4em] text-[9px] md:text-[10px] mb-4 font-sans font-bold">
            {language === 'uk' ? 'Спеціалізація' : 'Legal Departments'}
          </p>
          <h1 className="text-3xl md:text-7xl text-[#fdfcf0] mb-6 font-light tracking-tight leading-tight uppercase">
            {t.practice.hero.title}
          </h1>
          <div className="flex items-center justify-center gap-3 mb-6 opacity-40">
            <div className="h-px w-8 md:w-12 bg-[#b08d57]" />
            <BookOpen className="text-[#b08d57] w-4 h-4" />
            <div className="h-px w-8 md:w-12 bg-[#b08d57]" />
          </div>
          <p className="text-sm md:text-xl text-[#fdfcf0]/70 italic max-w-xl mx-auto leading-relaxed">
            {t.practice.hero.subtitle}
          </p>
        </div>
      </section>

      {/* --- PRACTICE AREAS: SYSTEMATIC ALIGNMENT --- */}
      <section className="py-16 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto">
            {practiceAreas.map((area, index) => {
              const Icon = practiceIcons[area.key as keyof typeof practiceIcons];
              return (
                <div 
                  key={area.key}
                  className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-16 py-12 md:py-20 border-b border-[#062c24]/5 last:border-0 items-start"
                >
                  {/* Left Column */}
                  <div className="md:col-span-3 flex flex-row md:flex-col items-center justify-between md:justify-start gap-4">
                    <span className="text-[#b08d57] font-sans font-bold text-[10px] tracking-[0.4em]">
                      SEC. {romanNumerals[index]}
                    </span>
                    <div className="w-14 h-14 md:w-20 md:h-20 border border-[#b08d57]/20 flex items-center justify-center group-hover:bg-[#062c24] group-hover:text-[#fdfcf0] transition-all duration-500 bg-[#fdfcf0]/50">
                      <Icon className="w-6 h-6 md:w-8 md:h-8 stroke-[1]" />
                    </div>
                  </div>
                  
                  {/* Right Column */}
                  <div className="md:col-span-9 text-left">
                    <h2 className="text-xl md:text-4xl font-light text-[#062c24] mb-4 tracking-tight uppercase">
                      {area.title}
                    </h2>
                    <div className="w-12 h-px bg-[#b08d57] mb-6 group-hover:w-24 transition-all duration-500" />
                    <p className="text-[#062c24]/70 leading-relaxed md:leading-[1.8] text-base md:text-lg italic">
                      {area.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION: RE-SCALED --- */}
      <section className="relative py-24 md:py-40 bg-[#041e19] text-center overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl mx-auto border border-[#b08d57]/20 p-8 md:p-20 bg-[#041e19]/50 backdrop-blur-sm">
            <Scale className="mx-auto text-[#b08d57] mb-6 w-10 h-10 md:w-12 md:h-12 stroke-[1] opacity-60" />
            <p className="text-[#b08d57] uppercase tracking-[0.3em] text-[9px] md:text-[10px] mb-4 font-sans font-bold">
              {language === 'uk' ? 'Консультація' : 'Inquiry'}
            </p>
            <h2 className="text-2xl md:text-5xl text-[#fdfcf0] font-light mb-8 italic leading-tight">
              {language === 'uk' ? 'Ми готові допомогти' : 'Prepared to Act'}
            </h2>
            <div className="flex justify-center">
              <a 
                href="https://t.me/+380504922225" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-[#b08d57] hover:bg-[#fdfcf0] hover:text-[#062c24] px-8 py-4 text-[10px] md:text-[11px] font-sans font-bold uppercase tracking-[0.3em] transition-all duration-500 shadow-xl"
              >
                <Send className="w-3.5 h-3.5 mr-3" />
                {t.home.contact.telegram}
              </a>
            </div>
          </div>
          
          <div className="flex justify-center gap-10 mt-16 md:mt-24 opacity-20 text-[#fdfcf0]">
            <Scale size={20} strokeWidth={1} /> 
            <Shield size={20} strokeWidth={1} /> 
            <FileText size={20} strokeWidth={1} />
          </div>
        </div>
      </section>

      <div className="h-1.5 w-full bg-[#b08d57]" />

      <footer className="bg-[#fdfcf0] py-10 text-center">
        <p className="text-[9px] md:text-[10px] uppercase tracking-[0.5em] text-[#062c24]/40 font-sans font-bold leading-loose">
          © MMIV — MMXXVI {t.hero.name} <br className="sm:hidden" /> • Private Records
        </p>
      </footer>
    </div>
  );
};

export default Practice;