import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: t.nav.home },
    { path: '/about', label: t.nav.about },
    { path: '/practice', label: t.nav.practice },
    { path: '/contacts', label: t.nav.contacts },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-[#b08d57]/20',
        scrolled 
          ? 'bg-[#041e19] py-2 shadow-2xl' 
          : 'bg-[#041e19] py-4' // Уменьшил стандартный отступ с py-6 до py-4
      )}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Logo Section - Сделали компактнее */}
          <Link to="/" className="flex items-center gap-4 group">
            <div className="relative border border-[#b08d57]/30 p-1.5 group-hover:bg-[#b08d57]/10 transition-all duration-500 bg-[#031814]/50">
               <img
                src="/yakovykh.svg"
                alt="Yakovykh"
                className="w-8 h-8 md:w-9 md:h-9 object-contain filter brightness-0 invert"
              />
              <div className="absolute -top-1 -left-1 w-1.5 h-1.5 border-t border-l border-[#b08d57]" />
              <div className="absolute -bottom-1 -right-1 w-1.5 h-1.5 border-b border-r border-[#b08d57]" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg md:text-xl text-[#fdfcf0] leading-tight tracking-tight uppercase font-light">
                {language === 'uk' ? 'Якових та партнери' : 'Yakovykh & Partners'}
              </span>
              <span className="text-[8px] md:text-[9px] tracking-[0.3em] uppercase text-[#b08d57] mt-0.5 font-sans font-bold">
                {language === 'uk' ? 'Адвокатське об\'єднання' : 'Law Association'}
              </span>
            </div>
          </Link>

          {/* Desktop Nav - Текст меню тоже сделали чуть меньше */}
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'relative font-sans text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 pb-1',
                  isActive(item.path)
                    ? 'text-[#b08d57] border-b border-[#b08d57]'
                    : 'text-[#fdfcf0]/60 hover:text-[#b08d57]'
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-6">
            <div className="hidden sm:flex items-center gap-3 text-[9px] font-sans font-bold tracking-widest text-[#fdfcf0]/40">
              <button
                onClick={() => setLanguage('uk')}
                className={cn(
                  'transition-all hover:text-[#b08d57]',
                  language === 'uk' ? 'text-[#b08d57]' : ''
                )}
              >
                UA
              </button>
              <span className="opacity-10">|</span>
              <button
                onClick={() => setLanguage('en')}
                className={cn(
                  'transition-all hover:text-[#b08d57]',
                  language === 'en' ? 'text-[#b08d57]' : ''
                )}
              >
                EN
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#b08d57]"
            >
              {mobileMenuOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Overlay */}
        {mobileMenuOpen && (
          <nav className="lg:hidden fixed inset-0 top-[80px] bg-[#041e19] z-[60] flex flex-col p-10 border-t border-[#b08d57]/10">
            <div className="flex flex-col gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    'text-2xl font-serif italic transition-all',
                    isActive(item.path) ? 'text-[#b08d57] pl-4 border-l-2 border-[#b08d57]' : 'text-[#fdfcf0]/50'
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;