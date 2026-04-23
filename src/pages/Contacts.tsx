import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Phone, Send, User, Clock, Mail } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';

const wordVariants = {
  hidden: { y: '110%', opacity: 0 },
  visible: (i: number) => ({
    y: 0, opacity: 1,
    transition: { duration: 1, delay: 0.3 + i * 0.12, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

const Contacts = () => {
  const { t, language } = useLanguage();
  const [fields, setFields] = useState({ name: '', phone: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const heroParallax = useTransform(scrollY, [0, 600], [0, 140]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Ім'я: ${fields.name}\nТелефон: ${fields.phone}\nТема: ${fields.subject}\n\n${fields.message}`
    );
    window.open(`https://t.me/+380504922225?text=${msg}`, '_blank');
    setSent(true);
  };

  const contactRows = [
    { label: t.contacts.address.title, value: t.contacts.address.value, href: undefined as string | undefined, icon: MapPin, italic: true },
    { label: t.contacts.phone.title, value: t.contacts.phone.value, href: 'tel:+380504922225', icon: Phone, italic: false },
    { label: 'Email', value: 'e.yakovykh@gmail.com', href: 'mailto:e.yakovykh@gmail.com', icon: Mail, italic: true },
    { label: t.contacts.founder.title, value: t.contacts.founder.name, href: undefined, icon: User, italic: false },
    { label: language === 'uk' ? 'Години прийому' : 'Working Hours', value: language === 'uk' ? 'Пн — Пт: 09:00 — 18:00' : 'Mon — Fri: 9:00 AM — 6:00 PM', href: undefined, icon: Clock, italic: true },
  ];

  return (
    <div className="bg-[#F8F7F5] text-[#041E19] font-serif selection:bg-[#B08D57]/20 overflow-x-hidden antialiased">

      {/* ── HERO ── */}
      <section ref={heroRef} className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden border-b border-[#B08D57]/15">
        <motion.div className="absolute inset-0 z-0 scale-110" style={{ y: heroParallax }}>
          <img src="/11.png" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#041e19]/65" />
        </motion.div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, letterSpacing: '0.8em' }}
            animate={{ opacity: 1, letterSpacing: '0.4em' }}
            transition={{ duration: 1.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[#B08D57] text-[12px] uppercase tracking-[0.4em] mb-10 block font-sans font-bold"
          >
            {language === 'uk' ? "Зв'язок" : 'Correspondence'}
          </motion.span>

          <h1 className="text-5xl md:text-8xl uppercase tracking-tighter font-light text-white leading-none mb-10 overflow-hidden">
            {t.contacts.hero.title.split(' ').map((word, i) => (
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

      {/* ── ФОРМА ЗАПИТУ ── */}
      <section className="py-24 md:py-36 bg-white border-b border-[#B08D57]/10">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid lg:grid-cols-2 gap-20 items-start">

            {/* Left: heading */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <span className="text-[#B08D57] text-[10px] uppercase tracking-[0.5em] font-bold font-sans block mb-6">
                {language === 'uk' ? 'Записатися на консультацію' : 'Book a consultation'}
              </span>
              <h2 className="text-4xl md:text-6xl font-light uppercase tracking-tighter text-[#041e19] leading-[0.9] mb-8">
                {language === 'uk'
                  ? <>Залишити<br /><span className="italic text-[#B08D57] lowercase">запит</ span></>
                  : <>Leave a<br /><span className="italic text-[#B08D57] lowercase">request</span></>}
              </h2>
              <div className="w-12 h-px bg-[#B08D57]/40 mb-8" />
              <p className="text-[#041e19]/55 italic font-light leading-relaxed border-l-2 border-[#B08D57]/30 pl-6 text-lg">
                {language === 'uk'
                  ? 'Заповніть форму — ми зв\'яжемося з вами протягом одного робочого дня. Вся інформація є конфіденційною.'
                  : 'Fill in the form — we will contact you within one business day. All information is strictly confidential.'}
              </p>
            </motion.div>

            {/* Right: form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.15 }}
            >
              {sent ? (
                <div className="flex flex-col gap-6 py-16">
                  <div className="w-12 h-px bg-[#B08D57]" />
                  <p className="text-2xl md:text-3xl font-light italic text-[#041e19]/70">
                    {language === 'uk' ? 'Дякуємо. Ми зв\'яжемося з вами найближчим часом.' : 'Thank you. We will be in touch shortly.'}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-0">
                  <div className="grid md:grid-cols-2 gap-x-10">
                    <div className="relative group border-b border-[#041E19]/20">
                      <input
                        required type="text"
                        placeholder={language === 'uk' ? "Ім'я та прізвище" : 'Full name'}
                        value={fields.name}
                        onChange={e => setFields(f => ({ ...f, name: e.target.value }))}
                        className="w-full bg-transparent py-4 text-base font-light text-[#041E19] placeholder:text-[#041E19]/30 outline-none font-serif"
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#B08D57] scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500 origin-left" />
                    </div>
                    <div className="relative group border-b border-[#041E19]/20">
                      <input
                        type="tel"
                        placeholder={language === 'uk' ? 'Телефон' : 'Phone'}
                        value={fields.phone}
                        onChange={e => setFields(f => ({ ...f, phone: e.target.value }))}
                        className="w-full bg-transparent py-4 text-base font-light text-[#041E19] placeholder:text-[#041E19]/30 outline-none font-serif"
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#B08D57] scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500 origin-left" />
                    </div>
                  </div>

                  <div className="relative group border-b border-[#041E19]/20 mt-8">
                    <input
                      type="text"
                      placeholder={language === 'uk' ? 'Тема звернення' : 'Subject'}
                      value={fields.subject}
                      onChange={e => setFields(f => ({ ...f, subject: e.target.value }))}
                      className="w-full bg-transparent py-4 text-base font-light text-[#041E19] placeholder:text-[#041E19]/30 outline-none font-serif"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-[#B08D57] scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500 origin-left" />
                  </div>

                  <div className="relative group border-b border-[#041E19]/20 mt-8">
                    <textarea
                      required rows={5}
                      placeholder={language === 'uk' ? 'Коротко опишіть вашу ситуацію...' : 'Briefly describe your situation...'}
                      value={fields.message}
                      onChange={e => setFields(f => ({ ...f, message: e.target.value }))}
                      className="w-full bg-transparent py-4 text-base font-light text-[#041E19] placeholder:text-[#041E19]/30 outline-none font-serif resize-none"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-[#B08D57] scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500 origin-left" />
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-12 border-t border-[#041E19]/8 mt-10">
                    <p className="text-[9px] uppercase tracking-[0.35em] text-[#041E19]/30 font-sans max-w-xs leading-relaxed">
                      {language === 'uk'
                        ? 'Вся інформація охороняється адвокатською таємницею'
                        : 'All information is protected by attorney-client privilege'}
                    </p>
                    <button type="submit" className="neo-btn-gold shrink-0">
                      <Send size={13} strokeWidth={1.5} />
                      {language === 'uk' ? 'Надіслати запит' : 'Send Request'}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── КОНТАКТИ ── */}
      <section className="py-24 md:py-36 bg-[#F8F7F5]">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">

            {/* Contact rows */}
            <div className="lg:col-span-7">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }} className="mb-14">
                <span className="text-[#B08D57] text-[10px] uppercase tracking-[0.5em] font-bold font-sans block mb-5 opacity-70">
                  {language === 'uk' ? 'Реквізити' : 'Details'}
                </span>
                <h2 className="text-4xl md:text-6xl font-light uppercase tracking-tighter text-[#041E19] leading-[0.9]">
                  {language === 'uk' ? 'Наші контакти' : 'Our contacts'}
                </h2>
              </motion.div>

              <div className="border-t border-[#B08D57]/15">
                {contactRows.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ duration: 0.7, delay: i * 0.08 }}
                      className="group border-b border-[#B08D57]/15 py-7 md:py-8 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-10 hover:bg-white -mx-6 px-6 transition-colors duration-400"
                    >
                      <div className="flex items-center gap-3 sm:w-44 shrink-0">
                        <Icon size={14} strokeWidth={1.5} className="text-[#B08D57] shrink-0" />
                        <span className="text-[9px] uppercase tracking-[0.4em] text-[#B08D57] font-bold font-sans">{item.label}</span>
                      </div>
                      {item.href ? (
                        <a href={item.href} className={`text-lg md:text-xl font-light text-[#041E19]/70 hover:text-[#B08D57] transition-colors duration-400 ${item.italic ? 'italic' : ''}`}>
                          {item.value}
                        </a>
                      ) : (
                        <p className={`text-lg md:text-xl font-light text-[#041E19]/70 ${item.italic ? 'italic' : ''}`}>{item.value}</p>
                      )}
                      <div className="ml-auto h-px w-0 bg-[#B08D57]/40 group-hover:w-8 transition-all duration-500 hidden sm:block shrink-0" />
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Telegram CTA */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5"
            >
              <div className="bg-[#041e19] p-10 md:p-14 relative overflow-hidden">
                <div className="absolute -bottom-12 -right-12 opacity-[0.04] pointer-events-none">
                  <Send size={280} strokeWidth={0.5} className="text-[#B08D57]" />
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 border border-[#B08D57]/40 flex items-center justify-center mb-12">
                    <Send size={16} strokeWidth={1} className="text-[#B08D57]" />
                  </div>
                  <span className="text-[#B08D57] text-[9px] uppercase tracking-[0.4em] font-bold font-sans block mb-5 opacity-70">
                    {language === 'uk' ? 'Прямий зв\'язок' : 'Direct contact'}
                  </span>
                  <h3 className="text-3xl md:text-4xl text-white font-light italic leading-[1.1] mb-6 tracking-tight">
                    {t.contacts.telegram.title}
                  </h3>
                  <div className="w-12 h-px bg-[#B08D57]/40 mb-8" />
                  <p className="text-white/50 mb-12 leading-[1.9] font-light italic text-base font-serif">
                    {language === 'uk'
                      ? 'Прямий канал для термінових юридичних питань. Конфіденційність гарантована.'
                      : 'Direct channel for urgent legal matters. Strict confidentiality guaranteed.'}
                  </p>
                  <a href="https://t.me/+380504922225" target="_blank" rel="noopener noreferrer" className="neo-btn-gold w-full justify-center">
                    <Send size={13} strokeWidth={1.5} />
                    {t.contacts.telegram.cta}
                  </a>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── КАРТА ── */}
      <section className="bg-white py-24 md:py-32 border-t border-[#B08D57]/10">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12"
          >
            <div>
              <span className="text-[#B08D57] text-[10px] uppercase tracking-[0.5em] font-bold font-sans block mb-4 opacity-70">
                {language === 'uk' ? 'Місцезнаходження' : 'Location'}
              </span>
              <h2 className="text-3xl md:text-5xl font-light uppercase tracking-tighter text-[#041E19] leading-[0.9]">
                {language === 'uk' ? 'Як нас знайти' : 'How to find us'}
              </h2>
            </div>
            <p className="text-[#041E19]/50 italic font-light text-base md:text-lg max-w-sm leading-relaxed border-l border-[#B08D57]/20 pl-6">
              {t.contacts.address.value}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="w-full h-[420px] md:h-[500px] overflow-hidden relative"
          >
            <iframe
              src="https://maps.google.com/maps?q=провулок+Бориса+Айзенберга+2+Одеса+Україна&t=&z=17&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(0.35) contrast(1.05)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office location"
            />
            <div className="absolute inset-0 pointer-events-none border border-[#B08D57]/20" />
          </motion.div>
        </div>
      </section>

      <div className="h-1.5 w-full bg-[#b08d57]" />
    </div>
  );
};

export default Contacts;
