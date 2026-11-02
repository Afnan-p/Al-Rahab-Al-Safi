import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CONTENT_TRANSLATIONS, buildWhatsAppUrl } from '../data/content';
import { Sparkles, MapPin, Users, ArrowRight } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { lang, isRtl } = useLanguage();
  const t = CONTENT_TRANSLATIONS[lang];

  const handleLearnMore = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    } else {
      const url = buildWhatsAppUrl({ lang });
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="about" className="py-20 bg-white border-t border-brand-border/40 scroll-mt-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Building Exterior Photo (Matching Screenshot) */}
          <div className="relative group">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-card border border-brand-border">
              <img
                src="/about-building.jpg"
                alt="Hostel Al-Rahab Al-Safi Building Exterior and Architecture"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              
              {/* Bottom decorative badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/40 shadow-soft">
                <p className="text-xs font-semibold text-brand-forest uppercase tracking-wider mb-0.5">
                  {lang === 'ar' ? 'نزل الرحاب الصافي' : 'Hostel Al-Rahab Al-Safi Accommodation'}
                </p>
                <p className="text-[11px] text-brand-muted">
                  {lang === 'ar' ? 'المدينة المنورة • ضيافة ترقى لتطلعاتكم' : 'Madinah, Saudi Arabia • Welcoming all travelers'}
                </p>
              </div>
            </div>

            {/* Subtle decorative gold border frame behind image */}
            <div className="hidden sm:block absolute -inset-3 rounded-3xl border-2 border-brand-gold/20 -z-10 translate-x-3 translate-y-3" />
          </div>

          {/* Right Column: Narrative & Values */}
          <div>
            {/* Tag */}
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-gold mb-3">
              {t.about.badge}
            </span>

            {/* Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-forest leading-[1.2] mb-6">
              {t.about.title}
            </h2>

            {/* Paragraphs */}
            <p className="text-sm sm:text-base text-brand-dark/80 leading-relaxed mb-4">
              {t.about.p1}
            </p>
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed mb-8">
              {t.about.p2}
            </p>

            {/* CTA Button */}
            <div className="mb-10">
              <button
                type="button"
                onClick={handleLearnMore}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-gold hover:bg-brand-gold-hover text-white font-medium text-sm shadow-sm transition-all hover:shadow-md"
              >
                <span>{t.about.learnMore}</span>
                <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* 3 Micro-Features Row (Matching Screenshot Reference) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-brand-border">
              {/* Feature 1 */}
              <div className="flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-brand-gold/15 text-brand-gold flex items-center justify-center shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-brand-forest leading-tight">
                    {t.about.feature1Title}
                  </h3>
                  <p className="text-[11px] text-brand-muted mt-1 leading-snug">
                    {t.about.feature1Desc}
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-brand-gold/15 text-brand-gold flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-brand-forest leading-tight">
                    {t.about.feature2Title}
                  </h3>
                  <p className="text-[11px] text-brand-muted mt-1 leading-snug">
                    {t.about.feature2Desc}
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-brand-gold/15 text-brand-gold flex items-center justify-center shrink-0 mt-0.5">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-brand-forest leading-tight">
                    {t.about.feature3Title}
                  </h3>
                  <p className="text-[11px] text-brand-muted mt-1 leading-snug">
                    {t.about.feature3Desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
