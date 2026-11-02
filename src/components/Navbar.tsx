import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BRAND_CONFIG, CONTENT_TRANSLATIONS, buildWhatsAppUrl } from '../data/content';
import { Globe, Menu, X, ArrowUpRight, ChevronDown, Check } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { lang, setLang, toggleLang, isRtl } = useLanguage();
  const t = CONTENT_TRANSLATIONS[lang];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(e.target as Node)) {
        setLangDropdownOpen(false);
      }
    };
    if (langDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [langDropdownOpen]);

  const navLinks = [
    { href: '#home', label: t.nav.home, isActive: true },
    { href: '#rooms', label: t.nav.rooms },
    { href: '#facilities', label: t.nav.facilities },
    { href: '#location', label: t.nav.location },
    { href: '#about', label: t.nav.about },
    { href: '#contact', label: t.nav.contact },
  ];

  const handleBookNow = () => {
    const url = buildWhatsAppUrl({ lang });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* Floating Container Header matching Reference Screenshot */}
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-3 sm:px-6 pt-0 sm:pt-3">
        <div className="max-w-7xl mx-auto bg-white/95 backdrop-blur-md rounded-b-2xl sm:rounded-2xl border border-brand-border/70 shadow-sm px-4 sm:px-7 py-3">
          <div className="flex items-center justify-between">
            {/* Logo: Architectural Arch Motif in Rounded Box + Brand Name & Arabic */}
            <a
              href="#home"
              className="flex items-center gap-2 sm:gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-xl shrink-0"
            >
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-brand-cream-alt border border-brand-border/80 flex items-center justify-center text-brand-gold group-hover:border-brand-gold transition-colors shrink-0 shadow-2xs">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 sm:w-6 sm:h-6 fill-none stroke-current stroke-2 stroke-linecap-round stroke-linejoin-round"
                >
                  <path d="M4 21V11C4 7 7.5 3 12 3C16.5 3 20 7 20 11V21" />
                  <path d="M8 21V13C8 10.5 9.8 8.5 12 8.5C14.2 8.5 16 10.5 16 13V21" />
                  <circle cx="12" cy="6" r="0.7" fill="currentColor" />
                </svg>
              </div>

              <div className="leading-tight">
                <span className="block font-serif font-bold text-[14px] sm:text-lg md:text-xl text-brand-dark tracking-tight">
                  {BRAND_CONFIG.nameEn}
                </span>
                <span className="block text-[10px] sm:text-xs font-arabic text-brand-muted/90 font-medium">
                  {BRAND_CONFIG.nameAr}
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-6 rtl:space-x-reverse text-sm font-medium text-brand-dark/85">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative py-1 transition-colors hover:text-brand-gold ${
                    link.isActive ? 'text-brand-dark font-semibold' : 'text-brand-dark/80'
                  }`}
                >
                  {link.label}
                  {link.isActive && (
                    <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-6 h-[2.5px] bg-brand-gold rounded-full" />
                  )}
                </a>
              ))}
            </nav>

            {/* Right Controls: Language Selector & Golden Book Now Button */}
            <div className="hidden sm:flex items-center gap-4">
              {/* Elegant Language Dropdown */}
              <div ref={langDropdownRef} className="relative">
                <button
                  type="button"
                  onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                  aria-expanded={langDropdownOpen}
                  aria-label="Select language"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-brand-border/80 bg-brand-cream/40 hover:bg-white hover:border-brand-gold text-xs font-medium text-brand-dark transition-all cursor-pointer shadow-2xs"
                >
                  <Globe className="w-3.5 h-3.5 text-brand-gold" />
                  <span className={lang === 'ar' ? 'font-arabic font-bold' : 'font-semibold'}>
                    {lang === 'en' ? 'English' : 'العربية'}
                  </span>
                  <ChevronDown
                    className={`w-3 h-3 text-brand-muted transition-transform duration-200 ${
                      langDropdownOpen ? 'rotate-180 text-brand-gold' : ''
                    }`}
                  />
                </button>

                {langDropdownOpen && (
                  <div className="absolute right-0 rtl:right-auto rtl:left-0 top-full mt-2 w-36 bg-white/98 backdrop-blur-md rounded-2xl border border-brand-border/90 shadow-elevated p-1 z-50 animate-in fade-in zoom-in-95 duration-150">
                    <button
                      type="button"
                      onClick={() => {
                        setLang('en');
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full px-3 py-2 rounded-xl text-left rtl:text-right flex items-center justify-between text-xs transition-colors cursor-pointer ${
                        lang === 'en'
                          ? 'bg-brand-gold-light/60 text-brand-dark font-bold'
                          : 'text-brand-dark/80 hover:bg-brand-cream hover:text-brand-dark'
                      }`}
                    >
                      <span>English</span>
                      {lang === 'en' && <Check className="w-3.5 h-3.5 text-brand-gold" />}
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setLang('ar');
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full px-3 py-2 rounded-xl text-left rtl:text-right flex items-center justify-between text-xs font-arabic transition-colors cursor-pointer ${
                        lang === 'ar'
                          ? 'bg-brand-gold-light/60 text-brand-dark font-bold'
                          : 'text-brand-dark/80 hover:bg-brand-cream hover:text-brand-dark'
                      }`}
                    >
                      <span>العربية</span>
                      {lang === 'ar' && <Check className="w-3.5 h-3.5 text-brand-gold" />}
                    </button>
                  </div>
                )}
              </div>

              {/* Book Your Stay CTA Button */}
              <button
                onClick={handleBookNow}
                type="button"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-brand-gold hover:bg-brand-gold-hover text-white text-sm font-medium shadow-sm transition-all hover:shadow hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>{t.nav.bookNow}</span>
                <ArrowUpRight className={`w-4 h-4 ${isRtl ? 'rotate-[-90deg]' : ''}`} />
              </button>
            </div>

            {/* Mobile Menu & Language Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={toggleLang}
                type="button"
                className="px-2.5 py-1.5 text-xs font-semibold rounded-lg border border-brand-border bg-brand-cream text-brand-forest"
                aria-label="Toggle language"
              >
                {lang === 'en' ? 'العربية' : 'English'}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                type="button"
                className="p-2 rounded-lg text-brand-forest hover:bg-black/5 focus:outline-none"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="fixed top-20 inset-x-3 sm:inset-x-6 bg-white rounded-2xl border border-brand-border p-6 shadow-xl animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-base font-medium text-brand-forest hover:bg-brand-sand/40 transition-colors"
                >
                  {link.label}
                </a>
              ))}

              <div className="pt-4 border-t border-brand-border flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleBookNow();
                  }}
                  type="button"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-brand-gold text-white font-medium shadow-sm"
                >
                  <span>{t.nav.bookNow}</span>
                  <ArrowUpRight className={`w-4 h-4 ${isRtl ? 'rotate-[-90deg]' : ''}`} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
