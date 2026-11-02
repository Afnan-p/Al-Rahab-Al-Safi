import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FACILITIES_DATA, CONTENT_TRANSLATIONS, buildWhatsAppUrl } from '../data/content';
import { 
  Wifi, 
  Wind, 
  ArrowUpDown, 
  Users, 
  Sparkles, 
  Luggage, 
  Clock, 
  Utensils, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export const FacilitiesSection: React.FC = () => {
  const { lang, isRtl } = useLanguage();
  const t = CONTENT_TRANSLATIONS[lang];

  // Map icon names to Lucide icon components
  const renderIcon = (name: string) => {
    const props = { className: "w-6 h-6 stroke-[1.75]" };
    switch (name) {
      case 'Wifi': return <Wifi {...props} />;
      case 'Wind': return <Wind {...props} />;
      case 'ArrowUpDown': return <ArrowUpDown {...props} />;
      case 'Users': return <Users {...props} />;
      case 'Sparkles': return <Sparkles {...props} />;
      case 'Luggage': return <Luggage {...props} />;
      case 'Clock': return <Clock {...props} />;
      case 'Utensils': return <Utensils {...props} />;
      default: return <ShieldCheck {...props} />;
    }
  };

  const handleEnquireFacilities = () => {
    const url = buildWhatsAppUrl({ lang });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="facilities" className="py-20 bg-brand-cream border-t border-brand-border/40 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header (Matching Screenshot Layout) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-3">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-forest">
                {t.facilities.title}
              </h2>
              <span className="w-12 h-[2px] bg-brand-gold hidden sm:inline-block rounded-full"></span>
            </div>
            <p className="mt-2 text-sm sm:text-base text-brand-muted max-w-xl">
              {t.facilities.subtitle}
            </p>
          </div>

          <button
            onClick={handleEnquireFacilities}
            type="button"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-gold hover:text-brand-gold-hover transition-colors group"
          >
            <span>{t.facilities.moreInfo}</span>
            <ArrowRight className={`w-4 h-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform ${isRtl ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* 8-Icon Grid (Matching Screenshot Reference) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6">
          {FACILITIES_DATA.map((item) => {
            const name = lang === 'ar' ? item.nameAr : item.nameEn;
            const desc = lang === 'ar' ? item.descAr : item.descEn;

            return (
              <div
                key={item.id}
                className="group p-4 sm:p-5 rounded-2xl bg-white border border-brand-border/80 hover:border-brand-gold/60 shadow-2xs hover:shadow-card transition-all duration-300 flex flex-col items-center text-center cursor-default"
                title={desc}
              >
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-2xl bg-brand-cream-alt/70 group-hover:bg-brand-gold/10 text-brand-forest group-hover:text-brand-gold flex items-center justify-center transition-all duration-300 mb-3 border border-brand-border/40 group-hover:border-brand-gold/30">
                  {renderIcon(item.iconName)}
                </div>

                {/* Label */}
                <h3 className="text-xs sm:text-sm font-semibold text-brand-dark group-hover:text-brand-forest transition-colors leading-tight">
                  {name}
                </h3>
              </div>
            );
          })}
        </div>

        {/* Hygiene Guarantee Banner */}
        <div className="mt-12 p-4 rounded-xl bg-white/70 border border-brand-border flex items-center justify-center gap-3 text-xs sm:text-sm text-brand-muted text-center">
          <ShieldCheck className="w-4 h-4 text-brand-gold shrink-0" />
          <span>{t.facilities.note}</span>
        </div>
      </div>
    </section>
  );
};
