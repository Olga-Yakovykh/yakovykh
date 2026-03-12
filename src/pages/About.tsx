import { useLanguage } from '@/contexts/LanguageContext';
import { Send, FileText, Landmark, Scale, Shield } from 'lucide-react';
import aboutImage from '@/assets/ChatGPT Image 12 мар. 2026 г., 18_25_23.png'; 

const About = () => {
  const { t, language } = useLanguage();

  return (
    <div className="bg-[#fdfcf0] text-[#062c24] font-serif min-h-screen pt-24 md:pt-32 pb-12 selection:bg-[#b08d57]/30">
      
      {/* --- SECTION 1: HEADER (Адаптивные шрифты) --- */}
      <section className="container mx-auto px-6 md:px-12 lg:px-24 mb-12 md:mb-20">
        <div className="border-b-2 border-[#062c24] pb-6 md:pb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <p className="font-sans font-bold text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-[#b08d57] mb-2">
              Internal Archive / Dossier
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-6xl uppercase tracking-tighter font-medium leading-none">
              {t.about.hero.title}
            </h1>
          </div>
          <div className="text-left md:text-right font-sans text-[9px] md:text-[10px] uppercase tracking-widest leading-loose opacity-60">
            <p>Ref: AA-2004/ODS</p>
            <p>Date: {new Date().getFullYear()}</p>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: THE SUMMARY (Адаптивная сетка) --- */}
      <section className="container mx-auto px-6 md:px-12 lg:px-24 mb-20 md:mb-32">
        <div className="grid lg:grid-cols-12 gap-10 md:gap-12">
          
          {/* Executive Summary: На мобилках сверху, на десктопе сбоку */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-40 space-y-4">
              <div className="w-10 h-10 md:w-12 md:h-12 border border-[#b08d57] flex items-center justify-center bg-white/50">
                <Landmark size={20} className="text-[#b08d57]" />
              </div>
              <h2 className="text-xl italic border-b border-[#b08d57]/20 pb-2 mb-2 inline-block lg:block">Executive Summary</h2>
              <p className="text-xs md:text-sm font-sans uppercase tracking-wider leading-relaxed opacity-60 max-w-sm">
                {t.about.hero.subtitle}
              </p>
            </div>
          </div>

          {/* Нумерованный текст истории */}
          <div className="lg:col-span-8 space-y-12 md:space-y-16">
            <div className="space-y-8">
              <h3 className="text-2xl md:text-3xl italic mb-6">{t.about.history.title}</h3>
              
              <div className="relative pl-8 md:pl-12">
                <span className="absolute left-0 top-1 text-[#b08d57] font-sans font-bold text-[10px] md:text-xs">01.</span>
                <p className="text-base md:text-lg leading-relaxed italic text-[#062c24]/80">{t.about.history.p1}</p>
              </div>

              <div className="relative pl-8 md:pl-12">
                <span className="absolute left-0 top-1 text-[#b08d57] font-sans font-bold text-[10px] md:text-xs">02.</span>
                <p className="text-base md:text-lg leading-relaxed text-[#062c24]/80">{t.about.history.p2}</p>
              </div>

              {/* Картинка: Адаптация под мобильные экраны */}
              <div className="my-8 md:my-12 py-6 md:py-8 border-y border-[#b08d57]/20">
                <p className="text-[9px] md:text-[10px] font-sans font-bold uppercase tracking-widest mb-4 text-[#b08d57]">
                  Annex I: Interior Chambers
                </p>
                <div className="aspect-video overflow-hidden shadow-2xl border-4 border-white">
                  <img src={aboutImage} alt="Annex I" className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" />
                </div>
              </div>

              <div className="relative pl-8 md:pl-12">
                <span className="absolute left-0 top-1 text-[#b08d57] font-sans font-bold text-[10px] md:text-xs">03.</span>
                <p className="text-base md:text-lg leading-relaxed text-[#062c24]/80">{t.about.history.p3}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: THE CODE (Сетка 1 на мобилках / 4 на десктопе) --- */}
      <section className="bg-[#041e19] text-[#fdfcf0] py-20 md:py-32">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="mb-12 md:mb-20 flex flex-col sm:flex-row items-baseline justify-between border-b border-[#fdfcf0]/10 pb-6 md:pb-8 gap-2">
            <h2 className="text-3xl md:text-4xl italic">{t.about.principles.title}</h2>
            <span className="font-sans text-[9px] md:text-[10px] uppercase tracking-[0.4em] opacity-40 italic">Codex of Conduct</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
            {t.about.principles.items.map((principle, index) => (
              <div key={index} className="space-y-4 md:space-y-6 group">
                <div className="text-[#b08d57] text-[10px] md:text-xs font-sans font-bold border-l border-[#b08d57] pl-4">ART. 0{index + 1}</div>
                <h4 className="text-lg md:text-xl uppercase tracking-tighter group-hover:text-[#b08d57] transition-colors">{principle.title}</h4>
                <p className="text-xs md:text-sm opacity-60 leading-relaxed italic">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 4: THE STRUCTURE (Кнопка на всю ширину на мобилках) --- */}
      <section className="container mx-auto px-6 md:px-12 lg:px-24 py-20 md:py-32 text-center">
        <div className="max-w-2xl mx-auto border-t-2 border-[#062c24] pt-12">
          <h2 className="text-xl md:text-2xl mb-6 md:mb-8 uppercase tracking-widest">{t.about.structure.title}</h2>
          <p className="text-base md:text-lg italic opacity-70 mb-10 md:mb-12">
            {t.about.structure.description}
          </p>
          <a 
            href="https://t.me/+380504922225" 
            target="_blank"
            className="inline-flex w-full sm:w-auto justify-center items-center gap-4 bg-[#062c24] text-[#fdfcf0] px-10 md:px-12 py-4 md:py-5 hover:bg-[#b08d57] transition-all duration-500 group shadow-xl"
          >
            <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            <span className="font-sans font-bold text-[10px] md:text-xs uppercase tracking-[0.3em]">Affirm Consultation</span>
          </a>
        </div>
      </section>

      {/* --- FOOTER DECOR --- */}
      <footer className="text-center opacity-30 py-8">
        <div className="flex justify-center gap-10 mb-4 text-[#062c24]">
          <Scale size={18} strokeWidth={1} /> 
          <Shield size={18} strokeWidth={1} /> 
          <FileText size={18} strokeWidth={1} />
        </div>
        <p className="text-[9px] uppercase tracking-[0.6em] text-[#062c24] font-bold">Official Repository — Odessa</p>
      </footer>
    </div>
  );
};

export default About;