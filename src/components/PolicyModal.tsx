import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CONTENT_TRANSLATIONS } from '../data/content';
import { X, ShieldCheck, Clock, CalendarX, HeartHandshake } from 'lucide-react';

interface PolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ isOpen, onClose }) => {
  const { lang } = useLanguage();
  const t = CONTENT_TRANSLATIONS[lang];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity" 
        onClick={onClose}
      />

      <div className="flex min-h-full items-center justify-center p-4 sm:p-6 text-center">
        <div 
          className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white text-left rtl:text-right align-middle shadow-elevated transition-all border border-brand-border animate-in fade-in zoom-in-95 duration-200 p-6 sm:p-8"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-brand-border">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-forest">
              {t.policiesModal.title}
            </h3>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-brand-cream hover:bg-brand-sand/50 text-brand-dark flex items-center justify-center transition-colors"
              aria-label={t.policiesModal.close}
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Content Sections */}
          <div className="py-6 space-y-6 text-sm text-brand-dark/80">
            {/* Booking Notice */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-brand-gold/15 text-brand-gold flex items-center justify-center shrink-0 mt-0.5">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-brand-forest mb-1">
                  {t.policiesModal.bookingTitle}
                </h4>
                <p className="leading-relaxed text-brand-muted text-xs sm:text-sm">
                  {t.policiesModal.bookingDesc}
                </p>
              </div>
            </div>

            {/* Cancellation */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-brand-gold/15 text-brand-gold flex items-center justify-center shrink-0 mt-0.5">
                <CalendarX className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-brand-forest mb-1">
                  {t.policiesModal.cancelTitle}
                </h4>
                <p className="leading-relaxed text-brand-muted text-xs sm:text-sm">
                  {t.policiesModal.cancelDesc}
                </p>
              </div>
            </div>

            {/* Check-in Times */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-brand-gold/15 text-brand-gold flex items-center justify-center shrink-0 mt-0.5">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-brand-forest mb-1">
                  {t.policiesModal.checkinTitle}
                </h4>
                <p className="leading-relaxed text-brand-muted text-xs sm:text-sm">
                  {t.policiesModal.checkinDesc}
                </p>
              </div>
            </div>

            {/* Guest Respect & Harmony */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-brand-gold/15 text-brand-gold flex items-center justify-center shrink-0 mt-0.5">
                <HeartHandshake className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-brand-forest mb-1">
                  {lang === 'ar' ? 'بيئة هادئة ومحترمة' : 'Atmosphere of Tranquility'}
                </h4>
                <p className="leading-relaxed text-brand-muted text-xs sm:text-sm">
                  {lang === 'ar' 
                    ? 'نحرص على توفير أجواء تعبدية وهادئة تناسب روحانية المدينة المنورة وقدسيتها، ويرجى مراعاة الهدوء في الممرات والغرف.'
                    : 'We uphold a peaceful, respectful environment appropriate for the sanctuary of Madinah. Quiet hours are observed for everyone’s comfort.'
                  }
                </p>
              </div>
            </div>
          </div>

          {/* Footer Action */}
          <div className="pt-4 border-t border-brand-border flex justify-end">
            <button
              onClick={onClose}
              type="button"
              className="px-6 py-2.5 rounded-lg bg-brand-gold hover:bg-brand-gold-hover text-white text-sm font-medium transition-colors"
            >
              {t.policiesModal.close}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
