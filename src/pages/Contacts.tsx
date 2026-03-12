import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Phone, Send, User, Clock, Landmark } from 'lucide-react';
import heroImage from '@/assets/contacts.webp';

const Contacts = () => {
  const { t, language } = useLanguage();

  return (
    <div className="bg-[#fdfcf0] text-[#062c24] font-serif">
      
      {/* --- HERO SECTION: FORMAL HEADER --- */}
      <section 
        className="relative h-[60vh] flex items-center border-b-[8px] border-[#b08d57] overflow-hidden"
      >
        <div 
          className="absolute inset-0 bg-cover grayscale brightness-50"
          style={{ 
            backgroundImage: `url(${heroImage})`,
            backgroundPosition: 'right bottom',
          }}
        />
        <div className="absolute inset-0 bg-[#062c24]/80 mix-blend-multiply" />
        
        <div className="container mx-auto px-8 lg:px-20 relative z-10">
          <div className="max-w-4xl border-l-[3px] border-[#b08d57] pl-10 py-2">
            <p className="text-[#b08d57] uppercase tracking-[0.4em] text-[10px] mb-4 font-sans font-bold">
              {language === 'uk' ? 'Зв’язок' : 'Correspondence'}
            </p>
            <h1 className="text-5xl md:text-7xl text-[#fdfcf0] mb-6 font-light tracking-tight leading-none uppercase">
              {t.contacts.hero.title}
            </h1>
            <div className="h-px w-24 bg-[#b08d57] mb-8" />
            <p className="text-lg md:text-xl text-slate-300 italic opacity-80 max-w-xl">
              {t.contacts.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* --- CONTACT INFO SECTION --- */}
      <section className="py-32 bg-[#fdfcf0]">
        <div className="container mx-auto px-8 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
              
              {/* Left Column: Formal Cards */}
              <div className="lg:col-span-7 space-y-8">
                
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Address */}
                  <div className="bg-white p-8 border-t-2 border-[#b08d57] shadow-sm hover:shadow-md transition-shadow">
                    <MapPin className="text-[#b08d57] mb-6" size={24} strokeWidth={1.5} />
                    <h3 className="font-sans font-bold text-[10px] uppercase tracking-[0.2em] text-[#b08d57] mb-3">
                      {t.contacts.address.title}
                    </h3>
                    <p className="text-[#062c24] leading-relaxed italic">
                      {t.contacts.address.value}
                    </p>
                  </div>

                  {/* Phone */}
                  <div className="bg-white p-8 border-t-2 border-[#b08d57] shadow-sm hover:shadow-md transition-shadow">
                    <Phone className="text-[#b08d57] mb-6" size={24} strokeWidth={1.5} />
                    <h3 className="font-sans font-bold text-[10px] uppercase tracking-[0.2em] text-[#b08d57] mb-3">
                      {t.contacts.phone.title}
                    </h3>
                    <a 
                      href="tel:+380504922225" 
                      className="text-xl text-[#062c24] hover:text-[#b08d57] transition-colors"
                    >
                      {t.contacts.phone.value}
                    </a>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Founder */}
                  <div className="bg-white p-8 border-t-2 border-[#b08d57] shadow-sm hover:shadow-md transition-shadow">
                    <User className="text-[#b08d57] mb-6" size={24} strokeWidth={1.5} />
                    <h3 className="font-sans font-bold text-[10px] uppercase tracking-[0.2em] text-[#b08d57] mb-3">
                      {t.contacts.founder.title}
                    </h3>
                    <p className="text-[#062c24] font-medium tracking-tight">
                      {t.contacts.founder.name}
                    </p>
                  </div>

                  {/* Hours */}
                  <div className="bg-white p-8 border-t-2 border-[#b08d57] shadow-sm hover:shadow-md transition-shadow">
                    <Clock className="text-[#b08d57] mb-6" size={24} strokeWidth={1.5} />
                    <h3 className="font-sans font-bold text-[10px] uppercase tracking-[0.2em] text-[#b08d57] mb-3">
                      {language === 'uk' ? 'Години прийому' : 'Visiting Hours'}
                    </h3>
                    <p className="text-[#062c24] italic">
                      {language === 'uk' ? 'Пн — Пт: 09:00 - 18:00' : 'Mon — Fri: 9:00 AM - 6:00 PM'}
                    </p>
                  </div>
                </div>

                {/* Location Note */}
                <div className="pt-12 border-t border-[#062c24]/5">
                  <div className="flex items-center gap-4 text-[#062c24]/50 italic text-sm">
                    <Landmark size={18} />
                    <p>
                      {language === 'uk' 
                        ? 'Офіс розташований в історичній будівлі в самому серці Одеси.'
                        : 'Our chambers are situated in a historic landmark in the heart of Odessa.'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Telegram Priority Communication */}
              <div className="lg:col-span-5">
                <div className="bg-[#062c24] p-10 md:p-14 h-full relative overflow-hidden border-double border-4 border-[#b08d57]/30 shadow-2xl">
                  {/* Decorative background icon */}
                  <Send className="absolute -bottom-10 -right-10 text-white opacity-[0.03]" size={300} strokeWidth={1} />
                  
                  <div className="relative z-10">
                    <div className="w-14 h-14 border border-[#b08d57] flex items-center justify-center mb-10">
                      <Send className="w-6 h-6 text-[#b08d57]" />
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl text-[#fdfcf0] mb-6 font-light italic leading-tight">
                      {t.contacts.telegram.title}
                    </h3>
                    
                    <div className="w-16 h-[1px] bg-[#b08d57] mb-8" />
                    
                    <p className="text-[#fdfcf0]/70 mb-12 leading-relaxed font-light italic text-lg">
                      {language === 'uk' 
                        ? 'Прямий канал зв’язку для термінових юридичних питань. Конфіденційність гарантована.'
                        : 'Direct communication line for urgent legal matters. Privacy is strictly maintained.'}
                    </p>
                    
                    <a 
                      href="https://t.me/+380504922225" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block w-full text-center bg-[#b08d57] hover:bg-[#fdfcf0] hover:text-[#062c24] text-[#fdfcf0] py-6 font-sans text-xs font-bold uppercase tracking-[0.4em] transition-all duration-700"
                    >
                      {t.contacts.telegram.cta}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER DECOR --- */}
      <footer className="bg-[#fdfcf0] py-12 text-center border-t border-[#062c24]/5">
        <div className="flex justify-center gap-4 mb-6 text-[#b08d57]">
          <div className="w-1 h-1 rounded-full bg-current" />
          <div className="w-1 h-1 rounded-full bg-current" />
          <div className="w-1 h-1 rounded-full bg-current" />
        </div>
        <p className="text-[10px] uppercase tracking-[0.5em] text-[#062c24]/40 font-sans font-bold">
          © MMIV — MMXXVI {t.hero.name} <br />
          Odessa • Ukraine
        </p>
      </footer>
    </div>
  );
};

export default Contacts;