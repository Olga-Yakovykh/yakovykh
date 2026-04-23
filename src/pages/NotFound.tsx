import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Gavel, ArrowLeft } from "lucide-react";
import { Btn } from '@/components/Btn';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: Access denied or non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F8F7F5] text-[#062c24] font-serif p-6">
      {/* Декоративная тонкая рамка вокруг всего контента */}
      <div className="max-w-xl w-full border border-[#b08d57]/30 p-12 md:p-20 text-center relative">
        
        {/* Декоративные уголки */}
        <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-[#b08d57]" />
        <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-[#b08d57]" />

        <Gavel className="mx-auto text-[#b08d57] mb-8 w-12 h-12 stroke-[1]" />
        
        <h1 className="text-6xl md:text-8xl font-light mb-4 tracking-tighter text-[#062c24]">
          404
        </h1>
        
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="h-px w-8 bg-[#b08d57]" />
          <span className="text-[10px] uppercase tracking-[0.3em] font-sans font-bold text-[#b08d57]">
            Status: Misplaced
          </span>
          <div className="h-px w-8 bg-[#b08d57]" />
        </div>

        <h2 className="text-2xl mb-6 italic">
          Сторінку не знайдено
        </h2>
        
        <p className="mb-12 text-[#062c24]/60 font-sans text-sm leading-relaxed tracking-wide uppercase">
          Запитуваний документ відсутній в архівах асоціації або був переміщений.
        </p>

        <Btn to="/" variant="dark" size="md">
          <ArrowLeft className="w-4 h-4" />
          Повернутися на головну
        </Btn>

        {/* Подпись внизу */}
        <p className="mt-12 text-[9px] uppercase tracking-[0.4em] text-[#062c24]/30 font-sans">
          MMIV — MMXXVI • Private Chambers
        </p>
      </div>
    </div>
  );
};

export default NotFound;