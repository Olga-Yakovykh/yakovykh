import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Phone, Send, Landmark, Scale } from 'lucide-react';

const Footer = () => {
  const { language, t } = useLanguage();

  const navItems = [
    { path: '/', label: t.nav.home },
    { path: '/about', label: t.nav.about },
    { path: '/practice', label: t.nav.practice },
    { path: '/contacts', label: t.nav.contacts },
  ];

  return (
    <footer className="bg-[#041e19] text-[#fdfcf0] border-t-4 border-[#b08d57]">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-24">

          {/* Column 1: Brand - Центрирование на мобилках */}
          <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-4 mb-8">
              <div className="relative border border-[#b08d57]/30 p-2 bg-[#031814]/50">
                <img
                  src="/yakovykh.svg"
                  alt="Yakovykh"
                  className="w-8 h-8 object-contain filter brightness-0 invert"
                />
                <div className="absolute -top-1 -left-1 w-1.5 h-1.5 border-t border-l border-[#b08d57]" />
                <div className="absolute -bottom-1 -right-1 w-1.5 h-1.5 border-b border-r border-[#b08d57]" />
              </div>
              <div>
                <p className="font-serif text-xl md:text-2xl font-light uppercase tracking-tight leading-none">
                  {language === 'uk' ? 'Якових та партнери' : 'Yakovykh & Partners'}
                </p>
                <p className="text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-[#b08d57] mt-1.5 font-sans font-bold">
                  {language === 'uk' ? "Адвокатське об'єднання" : 'Law Association'}
                </p>
              </div>
            </div>

            <p className="text-sm text-[#fdfcf0]/50 max-w-sm leading-relaxed mb-8 italic font-serif">
              {language === 'uk'
                ? 'Понад два десятиліття бездоганної юридичної практики. Захист ваших інтересів на засадах професійної етики.'
                : 'Over two decades of impeccable legal practice. Protecting your interests based on professional ethics.'}
            </p>
            
            <div className="flex gap-6 opacity-20">
              <Scale size={18} strokeWidth={1.5} />
              <Landmark size={18} strokeWidth={1.5} />
            </div>
          </div>

          {/* Column 2: Directory - Системный шрифт навигации */}
          <div className="md:col-span-3 flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-[10px] tracking-[0.4em] uppercase text-[#b08d57] font-bold mb-10 border-b border-[#b08d57]/20 pb-4 w-full md:w-auto">
              {language === 'uk' ? 'Навігація' : 'Directory'}
            </h4>
            <nav className="flex flex-col gap-5">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-[11px] uppercase tracking-[0.2em] text-[#fdfcf0]/60 hover:text-[#b08d57] transition-all duration-300 font-sans font-bold"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Communication */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-[10px] tracking-[0.4em] uppercase text-[#b08d57] font-bold mb-10 border-b border-[#b08d57]/20 pb-4 w-full md:w-auto">
              {language === 'uk' ? 'Кореспонденція' : 'Communication'}
            </h4>
            <div className="flex flex-col gap-6 font-serif italic">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
                <MapPin className="w-4 h-4 text-[#b08d57] shrink-0 md:mt-1" />
                <span className="text-sm text-[#fdfcf0]/80 leading-relaxed">
                  {t.contacts.address.value}
                </span>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-3 group">
                <Phone className="w-4 h-4 text-[#b08d57] shrink-0" />
                <a
                  href="tel:+380504922225"
                  className="text-lg text-[#fdfcf0] hover:text-[#b08d57] transition-colors font-light"
                >
                  {t.contacts.phone.value}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href="https://t.me/+380504922225"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#b08d57] text-[#fdfcf0] px-8 py-4 text-[10px] uppercase tracking-[0.3em] font-sans font-bold hover:bg-[#fdfcf0] hover:text-[#062c24] transition-all duration-500 shadow-xl"
                >
                  <Send className="w-3.5 h-3.5" />
                  Telegram Channel
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar - Мелкий системный текст */}
      <div className="bg-[#031814] py-10 border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-[9px] text-[#fdfcf0]/20 text-center tracking-[0.5em] uppercase font-sans font-bold">
              © MMIV — MMXXVI {t.hero.name} <br className="md:hidden" />
              <span className="hidden md:inline mx-2">•</span> 
              Private Chambers • Odessa
            </p>
            <div className="flex gap-10 text-[9px] uppercase tracking-[0.3em] text-[#fdfcf0]/20 font-sans font-bold">
              <button className="hover:text-[#b08d57] transition-colors">Privacy Policy</button>
              <button className="hover:text-[#b08d57] transition-colors">Terms of Counsel</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;