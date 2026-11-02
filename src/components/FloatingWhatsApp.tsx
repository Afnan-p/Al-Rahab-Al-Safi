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
    <div className="fixed bottom-6 right-6 rtl:right-auto rtl:left-6 z-40">
      <button
        onClick={handleClick}
        type="button"
        aria-label="WhatsApp Enquiry"
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] border-2 border-white/80 shadow-elevated text-white flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95 ring-4 ring-[#25D366]/20"
      >
        <WhatsAppIcon className="w-7 h-7 text-white drop-shadow-xs" />
      </button>
    </div>
  );
};
