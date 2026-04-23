import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '@/lib/utils';
import { NavLink } from '../NavLink';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Блокировка скролла при открытом меню
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  // Закрытие при смене маршрута
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { path: '/', label: t.nav.home },
    { path: '/about', label: t.nav.about },
    { path: '/practice', label: t.nav.practice },
    { path: '/contacts', label: t.nav.contacts },
  ];

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ease-in-out border-b',
          scrolled
            ? 'bg-[#041e19]/95 backdrop-blur-md py-3 shadow-2xl border-[#b08d57]/10'
            : 'bg-[#041e19] py-6 border-white/5 shadow-lg'
        )}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-4 group">
              <div className="relative">
                <img
                  src="/yakovykh.svg"
                  alt="Logo"
                  className="w-8 h-8 md:w-10 md:h-10 object-contain filter brightness-0 invert"
                />
                <div className="absolute inset-0 bg-[#b08d57]/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-serif text-lg md:text-2xl text-[#F8F7F5] leading-none tracking-tight uppercase font-light">
                  {language === 'uk' ? 'Якових та партнери' : 'Yakovykh & Partners'}
                </span>
                <span className="text-[7px] md:text-[9px] tracking-[0.2em] uppercase text-[#b08d57] mt-1.5 font-bold opacity-80">
                  {language === 'uk' ? "Адвокатське об'єднання" : 'Law Association'}
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-10">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className="relative font-sans text-[11px] font-bold uppercase tracking-[0.15em] text-[#F8F7F5]/70 hover:text-[#b08d57] transition-all duration-500 group"
                  activeClassName="text-[#b08d57]"
                >
                  {item.label}
                  <span className={cn(
                    'absolute -bottom-2 left-1/2 w-0 h-[1px] bg-[#b08d57] transition-all duration-500 group-hover:w-full group-hover:left-0',
                    location.pathname === item.path ? 'w-full left-0' : ''
                  )} />
                </NavLink>
              ))}
            </nav>

            {/* Right: language + burger */}
            <div className="flex items-center gap-8">
              <div className="hidden md:flex items-center gap-4 text-[10px] font-bold tracking-widest">
                <button
                  onClick={() => setLanguage('uk')}
                  className={cn('transition-all duration-500 hover:text-[#b08d57]', language === 'uk' ? 'text-[#b08d57]' : 'text-[#F8F7F5]/40')}
                >
                  UA
                </button>
                <div className="w-px h-3 bg-[#b08d57]/20" />
                <button
                  onClick={() => setLanguage('en')}
                  className={cn('transition-all duration-500 hover:text-[#b08d57]', language === 'en' ? 'text-[#b08d57]' : 'text-[#F8F7F5]/40')}
                >
                  EN
                </button>
              </div>

              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 text-[#b08d57] hover:scale-110 transition-transform focus:outline-none"
                aria-label="Open menu"
              >
                <Menu size={28} strokeWidth={1} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile overlay — портал в document.body, вне header */}
      {createPortal(
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 bg-[#041e19] z-[9999] flex flex-col justify-center items-center"
            >
              {/* Кнопка закрытия */}
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="absolute top-5 right-6 p-2 text-[#b08d57] hover:scale-110 transition-transform focus:outline-none"
                aria-label="Close menu"
              >
                <X size={28} strokeWidth={1} />
              </button>

              {/* Ссылки */}
              <nav className="flex flex-col items-center gap-8">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + index * 0.08, ease: [0.16, 1, 0.3, 1], duration: 0.7 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        'text-4xl font-serif italic tracking-tight transition-colors duration-300',
                        location.pathname === item.path ? 'text-[#b08d57]' : 'text-[#F8F7F5]/60 hover:text-[#F8F7F5]'
                      )}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Язык */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="absolute bottom-12 flex gap-6 text-xs tracking-[0.4em] text-[#b08d57] font-bold"
              >
                <button onClick={() => { setLanguage('uk'); setMobileMenuOpen(false); }}>UA</button>
                <div className="w-px h-4 bg-[#b08d57]/30" />
                <button onClick={() => { setLanguage('en'); setMobileMenuOpen(false); }}>EN</button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};

export default Header;
