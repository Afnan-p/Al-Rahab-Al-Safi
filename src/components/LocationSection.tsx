import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BRAND_CONFIG, CONTENT_TRANSLATIONS } from '../data/content';
import { MapPin, ArrowUpRight, Compass, CheckCircle2, Navigation } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const { lang, isRtl } = useLanguage();
  const t = CONTENT_TRANSLATIONS[lang];

  // Verified coordinates from official client Google Maps place link:
  // Place: دار الرحاب الصافي (Hostel Al-Rahab Al-Safi), Al Suqya, Madinah
  const mapEmbedUrl = `https://maps.google.com/maps?q=${BRAND_CONFIG.coordinates.lat},${BRAND_CONFIG.coordinates.lng}&hl=${lang === 'ar' ? 'ar' : 'en'}&z=16&output=embed`;

  return (
    <section id="location" className="py-20 lg:py-24 bg-brand-cream/60 border-t border-brand-border/40 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading, verified address card, and landmarks */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="flex items-center gap-3">
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-forest">
                  {t.location.title}
                </h2>
                <span className="w-12 h-[2px] bg-brand-gold hidden sm:inline-block rounded-full"></span>
              </div>
              <p className="mt-3 text-sm sm:text-base text-brand-muted leading-relaxed">
                {t.location.subtitle}
              </p>
            </div>

            {/* Verified Address Card */}
            <div className="p-5 rounded-2xl bg-white border border-brand-border shadow-soft space-y-3.5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-gold/15 text-brand-gold flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <h4 className="text-base font-bold text-brand-forest truncate">
                      {lang === 'ar' ? BRAND_CONFIG.nameAr : BRAND_CONFIG.nameEn}
                    </h4>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-semibold border border-emerald-200 shrink-0">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      <span>{lang === 'ar' ? 'موقع معتمد' : 'Verified'}</span>
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-brand-dark/80 mt-1 leading-relaxed">
                    {lang === 'ar' ? BRAND_CONFIG.addressAr : BRAND_CONFIG.addressEn}
                  </p>
                  <div className="mt-2 flex flex-wrap items-center gap-2 text-[11px] text-brand-muted font-mono">
                    <span className="bg-brand-sand/30 px-2 py-0.5 rounded-md border border-brand-border">
                      {BRAND_CONFIG.plusCode}
                    </span>
                  </div>
                </div>
              </div>

              {/* Proximity / Accessibility Note */}
              <div className="pt-3 border-t border-brand-border/60 text-xs text-brand-dark/80 space-y-2">
                <div className="flex items-center justify-between py-1 border-b border-brand-border/30">
                  <span className="text-brand-muted">{t.location.nearbyPoints.haram}:</span>
                  <span className="font-semibold text-brand-forest">{t.location.nearbyPoints.haramSub}</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-brand-border/30">
                  <span className="text-brand-muted">{t.location.nearbyPoints.pharmacy}:</span>
                  <span className="font-medium text-brand-dark">{t.location.nearbyPoints.pharmacySub}</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-brand-muted">{t.location.nearbyPoints.taxis}:</span>
                  <span className="font-medium text-brand-dark">{t.location.nearbyPoints.taxisSub}</span>
                </div>
              </div>
            </div>

            {/* Google Maps Actions */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={BRAND_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-gold hover:bg-brand-gold-hover text-white font-medium text-sm shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
              >
                <Navigation className="w-4 h-4" />
                <span>{t.location.viewGoogleMaps}</span>
                <ArrowUpRight className={`w-4 h-4 ${isRtl ? 'rotate-[-90deg]' : ''}`} />
              </a>
            </div>
          </div>

          {/* Right Column: Real Interactive Google Map */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden border border-brand-border shadow-card bg-brand-sand/20">
              {/* Top Floating Badge */}
              <div className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4 z-10 pointer-events-none flex flex-wrap gap-2 items-center justify-between">
                <div className="px-2.5 sm:px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-md shadow-soft border border-brand-border flex items-center gap-1.5 sm:gap-2 pointer-events-auto max-w-[65%] sm:max-w-none">
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                  <span className="text-[11px] sm:text-xs font-bold text-brand-forest truncate">
                    {lang === 'ar' ? BRAND_CONFIG.nameAr : BRAND_CONFIG.nameEn}
                  </span>
                </div>

                <div className="px-2.5 sm:px-3 py-1.5 rounded-xl bg-brand-forest/90 text-white backdrop-blur-md shadow-soft flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold pointer-events-auto shrink-0">
                  <Compass className="w-3.5 h-3.5 text-brand-gold" />
                  <span>{lang === 'ar' ? 'حي السقيا، المدينة' : 'Al Suqya, Madinah'}</span>
                </div>
              </div>

              {/* Real Interactive Google Maps Iframe */}
              <div className="relative h-[340px] sm:h-[420px] w-full">
                <iframe
                  title="Hostel Al-Rahab Al-Safi Location Map"
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale-[15%] contrast-[1.05]"
                />
              </div>

              {/* Bottom Quick-Action Bar */}
              <div className="p-3.5 bg-white border-t border-brand-border flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-brand-muted truncate mr-2 rtl:mr-0 rtl:ml-2">
                  <MapPin className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                  <span className="truncate">{lang === 'ar' ? BRAND_CONFIG.addressAr : BRAND_CONFIG.addressEn}</span>
                </div>
                <a
                  href={BRAND_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-brand-gold hover:text-brand-gold-hover shrink-0"
                >
                  <span>{lang === 'ar' ? 'فتح في تطبيق الخرائط' : 'Open in Maps App'}</span>
                  <ArrowUpRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-[-90deg]' : ''}`} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
