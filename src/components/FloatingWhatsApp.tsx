import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { buildWhatsAppUrl } from '../data/content';
import { WhatsAppIcon } from './WhatsAppIcon';

export const FloatingWhatsApp: React.FC = () => {
  const { lang } = useLanguage();

  const handleClick = () => {
    const url = buildWhatsAppUrl({ lang });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 rtl:right-auto rtl:left-4 sm:rtl:left-6 z-40">
      <button
        onClick={handleClick}
        type="button"
        aria-label="WhatsApp Enquiry"
        className="group relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white flex items-center justify-center shadow-[0_6px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_8px_25px_rgba(37,211,102,0.55)] transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer"
      >
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/20 animate-ping pointer-events-none opacity-40 duration-1000" />
        <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white transition-transform group-hover:scale-110" />
      </button>
    </div>
  );
};
