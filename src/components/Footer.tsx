import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BRAND_CONFIG, CONTENT_TRANSLATIONS } from '../data/content';
import { Globe, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onOpenPolicies: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPolicies }) => {
  const { lang, toggleLang } = useLanguage();
  const t = CONTENT_TRANSLATIONS[lang];

  return (
    <footer className="bg-brand-forest-deep text-white/80 border-t border-brand-border/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-brand-gold/20 border border-brand-gold/40 flex items-center justify-center text-brand-gold">
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6 fill-none stroke-current stroke-2 stroke-linecap-round stroke-linejoin-round"
                >
                  <path d="M4 21V11C4 7 7.5 3 12 3C16.5 3 20 7 20 11V21" />
                  <path d="M8 21V13C8 10.5 9.8 8.5 12 8.5C14.2 8.5 16 10.5 16 13V21" />
                  <circle cx="12" cy="6" r="0.7" fill="currentColor" />
                </svg>
              </div>
              <div>
                <span className="block font-serif font-bold text-lg text-white">
                  {lang === 'ar' ? BRAND_CONFIG.nameAr : BRAND_CONFIG.nameEn}
                </span>
                <span className="block text-[11px] text-brand-sand/70 uppercase tracking-wider">
                  {lang === 'ar' ? BRAND_CONFIG.taglineAr : BRAND_CONFIG.taglineEn}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-brand-sand/70 leading-relaxed max-w-sm">
              {t.footer.aboutText}
            </p>

            <div className="pt-2">
              <button
                onClick={toggleLang}
                type="button"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 text-xs text-white transition-colors cursor-pointer"
              >
                <Globe className="w-3.5 h-3.5 text-brand-gold" />
                <span>{lang === 'en' ? 'التحويل إلى العربية' : 'Switch to English'}</span>
              </button>
            </div>
          </div>

          {/* Responsive 3 Boxes Wrapper: on mobile (< md) 3 stacked boxes, on tablet (md) 3 grid boxes, on desktop (lg) 8-col classic footer columns */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-8 gap-4 md:gap-5 lg:gap-10">
            {/* Box 1: Quick Links */}
            <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-5 lg:p-0 lg:rounded-none lg:bg-transparent lg:border-0 lg:col-span-2 space-y-3">
              <div className="flex items-center gap-2 pb-2.5 mb-1 border-b border-white/10 lg:border-b-0 lg:pb-0 lg:mb-0">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold lg:hidden"></span>
                <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider">
                  {t.footer.quickLinks}
                </h4>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <a href="#home" className="hover:text-brand-gold transition-colors inline-block py-0.5">
                    {t.nav.home}
                  </a>
                </li>
                <li>
                  <a href="#rooms" className="hover:text-brand-gold transition-colors inline-block py-0.5">
                    {t.nav.rooms}
                  </a>
                </li>
                <li>
                  <a href="#facilities" className="hover:text-brand-gold transition-colors inline-block py-0.5">
                    {t.nav.facilities}
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-brand-gold transition-colors inline-block py-0.5">
                    {t.nav.about}
                  </a>
                </li>
                <li>
                  <a href="#location" className="hover:text-brand-gold transition-colors inline-block py-0.5">
                    {t.nav.location}
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-brand-gold transition-colors inline-block py-0.5">
                    {t.nav.contact}
                  </a>
                </li>
              </ul>
            </div>

            {/* Box 2: Accommodations */}
            <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-5 lg:p-0 lg:rounded-none lg:bg-transparent lg:border-0 lg:col-span-3 space-y-3">
              <div className="flex items-center gap-2 pb-2.5 mb-1 border-b border-white/10 lg:border-b-0 lg:pb-0 lg:mb-0">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold lg:hidden"></span>
                <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider">
                  {t.footer.accommodations}
                </h4>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <a href="#rooms" className="hover:text-brand-gold transition-colors inline-block py-0.5">
                    {lang === 'ar' ? 'غرفة بسريرين مفردين (Double Bed)' : 'Double Bed Room'}
                  </a>
                </li>
                <li>
                  <a href="#rooms" className="hover:text-brand-gold transition-colors inline-block py-0.5">
                    {lang === 'ar' ? 'غرفة بثلاثة أسرة (Triple Bed)' : 'Triple Bed Room'}
                  </a>
                </li>
                <li>
                  <a href="#rooms" className="hover:text-brand-gold transition-colors inline-block py-0.5">
                    {lang === 'ar' ? 'غرفة بأربعة أسرة (Four Bed)' : 'Four Bed Room'}
                  </a>
                </li>
                <li>
                  <a href="#rooms" className="hover:text-brand-gold transition-colors inline-block py-0.5">
                    {lang === 'ar' ? 'غرفة بخمسة أسرة (Five Bed)' : 'Five Bed Room'}
                  </a>
                </li>
              </ul>
            </div>

            {/* Box 3: Policies & Compliance */}
            <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-5 lg:p-0 lg:rounded-none lg:bg-transparent lg:border-0 lg:col-span-3 space-y-3">
              <div className="flex items-center gap-2 pb-2.5 mb-1 border-b border-white/10 lg:border-b-0 lg:pb-0 lg:mb-0">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold lg:hidden"></span>
                <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider">
                  {t.footer.policies}
                </h4>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <button
                    type="button"
                    onClick={onOpenPolicies}
                    className="hover:text-brand-gold transition-colors text-left rtl:text-right py-0.5 cursor-pointer"
                  >
                    {t.footer.bookingPolicy}
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={onOpenPolicies}
                    className="hover:text-brand-gold transition-colors text-left rtl:text-right py-0.5 cursor-pointer"
                  >
                    {t.footer.guestRules}
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={onOpenPolicies}
                    className="hover:text-brand-gold transition-colors text-left rtl:text-right py-0.5 cursor-pointer"
                  >
                    {t.footer.privacyPolicy}
                  </button>
                </li>
              </ul>

              <div className="pt-2 text-xs text-brand-sand/70 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-brand-gold shrink-0" />
                <span>{lang === 'ar' ? 'استفسار آمن بدون عمولات وسيطة' : 'Direct Booking without booking fees'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Prototype Disclaimer Banner */}
        <div className="my-6 p-4 rounded-xl bg-white/5 border border-white/10 text-[11px] text-brand-sand/80 text-center">
          <p>{t.footer.disclaimer}</p>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-sand/60">
          <p>
            © {new Date().getFullYear()} {lang === 'ar' ? BRAND_CONFIG.nameAr : BRAND_CONFIG.nameEn}. {t.footer.copyright}
          </p>

          <p className="flex items-center gap-1">
            <span>{lang === 'ar' ? 'ضيافة مباركة في طيبة الطيبة' : 'Blessed hospitality in Madinah Al-Munawwarah'}</span>
            <Heart className="w-3.5 h-3.5 text-brand-gold inline" />
          </p>
        </div>
      </div>
    </footer>
  );
};
