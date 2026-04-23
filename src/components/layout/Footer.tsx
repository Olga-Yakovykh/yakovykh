import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Scale, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { path: '/', label: Object.values(t.nav)[0] },
    { path: '/about', label: Object.values(t.nav)[1] },
    { path: '/practice', label: Object.values(t.nav)[2] },
    { path: '/contacts', label: Object.values(t.nav)[3] },
  ];

  return (
    <footer className="bg-[#041e19] border-t border-[#b08d57]/30">
      <div className="container mx-auto px-8 py-16 md:py-20">

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">

          {/* Left — Logo */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <Scale className="text-[#b08d57] shrink-0" size={22} strokeWidth={1} />
              <span className="font-serif text-base uppercase tracking-wider text-[#F8F7F5]/70 font-light leading-tight">
                {language === 'uk' ? 'Якових та партнери' : 'Yakovykh & Partners'}
              </span>
            </div>
            <p className="text-[10px] text-[#F8F7F5]/30 italic font-sans pl-[34px]">
              {language === 'uk'
                ? 'Адвокатське об\'єднання • Одеса'
                : 'Law Association • Odessa'}
            </p>
          </div>

          {/* Center — Navigation */}
          <nav className="flex flex-col gap-4">
            {navItems.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className="text-[10px] uppercase tracking-[0.4em] text-white/40 hover:text-[#b08d57] transition-colors duration-300 font-sans font-bold w-fit"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Right — Contacts */}
          <div className="flex flex-col gap-3.5">
            <a
              href="tel:+380504922225"
              className="flex items-center gap-2.5 text-sm text-white/40 italic hover:text-[#b08d57] transition-colors duration-300 font-serif"
            >
              <Phone size={12} className="text-[#b08d57]/50 shrink-0" strokeWidth={1.5} />
              +380 50 492 22 25
            </a>
            <a
              href="mailto:e.yakovykh@gmail.com"
              className="flex items-center gap-2.5 text-sm text-white/40 italic hover:text-[#b08d57] transition-colors duration-300 font-serif"
            >
              <Mail size={12} className="text-[#b08d57]/50 shrink-0" strokeWidth={1.5} />
              e.yakovykh@gmail.com
            </a>
            <div className="flex items-start gap-2.5 text-sm text-white/40 italic font-serif">
              <MapPin size={12} className="text-[#b08d57]/50 shrink-0 mt-0.5" strokeWidth={1.5} />
              {language === 'uk' ? 'Одеса, Айзенберга 2' : 'Odessa, Aizenberga 2'}
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-between">
          <p className="text-[9px] uppercase tracking-widest text-white/20 font-sans font-bold">
            © MMIV — MMXXVI
          </p>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setLanguage('uk')}
              className={`text-[9px] uppercase tracking-widest font-sans font-bold transition-colors duration-300 ${
                language === 'uk' ? 'text-[#b08d57]' : 'text-white/20 hover:text-white/40'
              }`}
            >
              UA
            </button>
            <span className="text-white/10 text-[9px]">/</span>
            <button
              onClick={() => setLanguage('en')}
              className={`text-[9px] uppercase tracking-widest font-sans font-bold transition-colors duration-300 ${
                language === 'en' ? 'text-[#b08d57]' : 'text-white/20 hover:text-white/40'
              }`}
            >
              EN
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
