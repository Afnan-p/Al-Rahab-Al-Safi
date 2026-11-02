import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CONTENT_TRANSLATIONS, buildWhatsAppUrl } from '../data/content';
import { ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

export const BookingCtaSection: React.FC = () => {
  const { lang, isRtl } = useLanguage();
  const t = CONTENT_TRANSLATIONS[lang];

  const handleWhatsApp = () => {
    const url = buildWhatsAppUrl({ lang });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleContactScroll = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-brand-forest-deep text-white overflow-hidden py-16 lg:py-20">
      {/* Background with Madinah Umbrellas Aesthetic on Left */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1600&q=80"
          alt="Madinah umbrellas"
          className="w-full h-full object-cover object-left"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-forest-deep via-brand-forest-deep/95 to-brand-forest-deep" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Text Content */}
          <div className="max-w-2xl text-center lg:text-left rtl:lg:text-right">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-3">
              {t.ctaBanner.title}
            </h2>
            <p className="text-sm sm:text-base text-brand-sand/80 font-normal leading-relaxed">
              {t.ctaBanner.subtitle}
            </p>
          </div>

          {/* Action Buttons (Matching Screenshot Reference) */}
          <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
            {/* White WhatsApp Button */}
            <button
              onClick={handleWhatsApp}
              type="button"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-white hover:bg-white/90 text-brand-forest font-semibold text-sm sm:text-base shadow-lg transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
              <span>{t.ctaBanner.chatWhatsapp}</span>
            </button>

            {/* Dark Outline Contact Button */}
            <button
              onClick={handleContactScroll}
              type="button"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-brand-forest/60 hover:bg-brand-forest text-white border border-white/20 font-medium text-sm sm:text-base transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>{t.ctaBanner.contactUs}</span>
              <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
