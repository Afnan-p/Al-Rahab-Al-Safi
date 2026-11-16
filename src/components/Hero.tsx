import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CONTENT_TRANSLATIONS, buildWhatsAppUrl } from '../data/content';
import { 
  Bed, 
  MapPin, 
  Users, 
  ArrowRight 
} from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

export const Hero: React.FC = () => {
  const { lang, isRtl } = useLanguage();
  const t = CONTENT_TRANSLATIONS[lang];

  const handleWhatsAppGeneral = () => {
    const url = buildWhatsAppUrl({ lang });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="home" className="relative min-h-screen min-h-[100dvh] pt-28 pb-10 sm:pt-32 sm:pb-12 flex items-center overflow-hidden">
      {/* Background Image: Grand Hotel Building & Madinah Boulevard */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/images/hero-building.jpg"
          alt="Hostel Al-Rehab Al-Safi Building in Madinah"
          className="w-full h-full object-cover object-[center_52%] sm:object-[center_48%] lg:object-[center_50%] transition-transform duration-700 ease-in-out"
          loading="eager"
        />

        {/* Soft whitish shade on the text side only (left in EN, right in AR) - fades to transparent to keep the building crisp and vibrant */}
        <div 
          className={`absolute inset-0 pointer-events-none transition-all duration-700 ${
            isRtl 
              ? 'bg-gradient-to-l from-white/65 via-white/30 via-35% lg:via-28% to-transparent' 
              : 'bg-gradient-to-r from-white/65 via-white/30 via-35% lg:via-28% to-transparent'
          }`} 
        />
        {/* Subtle narrow bottom edge blend into next section */}
        <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-brand-cream/40 to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl py-2">
          {/* Large Serif Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-brand-dark tracking-tight leading-[1.18] mb-5 max-w-xl">
            {t.hero.title}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-brand-dark/90 font-normal leading-relaxed mb-8 max-w-xl">
            {t.hero.subtitle}
          </p>

          {/* Action Buttons: Same width on mobile, auto width on desktop */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3.5 mb-8 sm:mb-12">
            <a
              href="#rooms"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-brand-gold hover:bg-brand-gold-hover text-white font-medium text-sm sm:text-base shadow-sm transition-all hover:shadow hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>{t.hero.exploreRooms}</span>
              <ArrowRight className={`w-4 h-4 ml-2 rtl:mr-2 rtl:ml-0 ${isRtl ? 'rotate-180' : ''}`} />
            </a>

            <button
              onClick={handleWhatsAppGeneral}
              type="button"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white/95 hover:bg-white text-brand-dark border border-brand-border/80 font-medium text-sm sm:text-base shadow-2xs transition-all hover:shadow hover:-translate-y-0.5 active:translate-y-0"
            >
              <WhatsAppIcon className="w-4 h-4 mr-2 rtl:ml-2 rtl:mr-0 text-[#25D366]" />
              <span>{t.hero.enquireWhatsapp}</span>
            </button>
          </div>

          {/* 3 Highlight Cards: 3-column side-by-side compact tiles on mobile and desktop */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {/* Highlight 1: Comfortable Rooms */}
            <div className="flex flex-col sm:flex-row items-center text-center sm:text-left rtl:sm:text-right gap-1.5 sm:gap-3 p-2 sm:p-3.5 rounded-xl sm:rounded-2xl bg-brand-cream/90 backdrop-blur-xs border border-brand-border/80 shadow-2xs min-h-[84px] sm:min-h-0 justify-center">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-brand-sand/50 border border-brand-border flex items-center justify-center text-brand-gold shrink-0">
                <Bed className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <div className="min-w-0 w-full">
                <p className="text-[11px] sm:text-sm font-bold text-brand-dark leading-tight line-clamp-2 sm:truncate">
                  {t.hero.highlights.comfortableRooms}
                </p>
                <p className="hidden sm:block text-[11px] text-brand-muted truncate mt-0.5">
                  {t.hero.highlights.comfortableRoomsSub}
                </p>
              </div>
            </div>

            {/* Highlight 2: Convenient Location */}
            <div className="flex flex-col sm:flex-row items-center text-center sm:text-left rtl:sm:text-right gap-1.5 sm:gap-3 p-2 sm:p-3.5 rounded-xl sm:rounded-2xl bg-brand-cream/90 backdrop-blur-xs border border-brand-border/80 shadow-2xs min-h-[84px] sm:min-h-0 justify-center">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-brand-sand/50 border border-brand-border flex items-center justify-center text-brand-gold shrink-0">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <div className="min-w-0 w-full">
                <p className="text-[11px] sm:text-sm font-bold text-brand-dark leading-tight line-clamp-2 sm:truncate">
                  {t.hero.highlights.convenientLocation}
                </p>
                <p className="hidden sm:block text-[11px] text-brand-muted truncate mt-0.5">
                  {t.hero.highlights.convenientLocationSub}
                </p>
              </div>
            </div>

            {/* Highlight 3: Welcoming Hospitality */}
            <div className="flex flex-col sm:flex-row items-center text-center sm:text-left rtl:sm:text-right gap-1.5 sm:gap-3 p-2 sm:p-3.5 rounded-xl sm:rounded-2xl bg-brand-cream/90 backdrop-blur-xs border border-brand-border/80 shadow-2xs min-h-[84px] sm:min-h-0 justify-center">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-brand-sand/50 border border-brand-border flex items-center justify-center text-brand-gold shrink-0">
                <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <div className="min-w-0 w-full">
                <p className="text-[11px] sm:text-sm font-bold text-brand-dark leading-tight line-clamp-2 sm:truncate">
                  {t.hero.highlights.welcomingHospitality}
                </p>
                <p className="hidden sm:block text-[11px] text-brand-muted truncate mt-0.5">
                  {t.hero.highlights.welcomingHospitalitySub}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
