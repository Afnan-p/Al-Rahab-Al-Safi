import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BRAND_CONFIG, CONTENT_TRANSLATIONS, buildWhatsAppUrl } from '../data/content';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Calendar, 
  Users, 
  Send,
  AlertCircle,
  ShieldCheck,
  Bed
} from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { CustomSelect, SelectOption } from './CustomSelect';

export const ContactSection: React.FC = () => {
  const { lang, isRtl } = useLanguage();
  const t = CONTENT_TRANSLATIONS[lang];

  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const futureDay = new Date(today);
  futureDay.setDate(today.getDate() + 3);

  const formatDate = (d: Date) => d.toISOString().split('T')[0];

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [checkIn, setCheckIn] = useState(formatDate(tomorrow));
  const [checkOut, setCheckOut] = useState(formatDate(futureDay));
  const [roomType, setRoomType] = useState('Double Bed Room');
  const [guests, setGuests] = useState('2 Guests');
  const [notes, setNotes] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (checkIn && checkOut && new Date(checkOut) <= new Date(checkIn)) {
      setError(t.hero.searchWidget.dateError);
      return;
    }
    setError(null);

    const url = buildWhatsAppUrl({
      customerName: fullName,
      roomName: roomType,
      checkIn,
      checkOut,
      guests,
      message: notes,
      lang,
    });

    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const roomOptions: SelectOption[] = [
    {
      value: 'Double Bed Room',
      label: lang === 'ar' ? 'غرفة بسريرين مفردين' : 'Double Bed Room',
      sublabel: lang === 'ar' ? '٢ سرير مفرد · حتى ضيفين' : '2 Single Beds · Up to 2 Guests',
      badge: lang === 'ar' ? 'سريرين' : '2 Beds',
      icon: <Bed className="w-4 h-4" />,
    },
    {
      value: 'Triple Bed Room',
      label: lang === 'ar' ? 'غرفة بثلاثة أسرة' : 'Triple Bed Room',
      sublabel: lang === 'ar' ? '٣ أسرة مفردة · حتى ٣ ضيوف' : '3 Single Beds · Up to 3 Guests',
      badge: lang === 'ar' ? '٣ أسرة' : '3 Beds',
      icon: <Bed className="w-4 h-4" />,
    },
    {
      value: 'Four Bed Room',
      label: lang === 'ar' ? 'غرفة بأربعة أسرة' : 'Four Bed Room',
      sublabel: lang === 'ar' ? '٤ أسرة مفردة · حتى ٤ ضيوف' : '4 Single Beds · Up to 4 Guests',
      badge: lang === 'ar' ? '٤ أسرة' : '4 Beds',
      icon: <Bed className="w-4 h-4" />,
    },
    {
      value: 'Five Bed Room',
      label: lang === 'ar' ? 'غرفة بخمسة أسرة' : 'Five Bed Room',
      sublabel: lang === 'ar' ? '٥ أسرة مفردة · حتى ٥ ضيوف' : '5 Single Beds · Up to 5 Guests',
      badge: lang === 'ar' ? '٥ أسرة' : '5 Beds',
      icon: <Bed className="w-4 h-4" />,
    },
  ];

  const guestOptions: SelectOption[] = [
    {
      value: '1 Guest',
      label: t.hero.searchWidget.guests1,
      icon: <Users className="w-4 h-4" />,
    },
    {
      value: '2 Guests',
      label: t.hero.searchWidget.guests2,
      icon: <Users className="w-4 h-4" />,
    },
    {
      value: '3 Guests',
      label: t.hero.searchWidget.guests3,
      icon: <Users className="w-4 h-4" />,
    },
    {
      value: '4+ Guests',
      label: t.hero.searchWidget.guests4,
      icon: <Users className="w-4 h-4" />,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-brand-cream/30 border-t border-brand-border/40 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-gold mb-2">
            {t.contact.badge}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-forest">
            {t.contact.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-brand-muted">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Reservation Enquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 shadow-soft border border-brand-border">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="full-name" className="block text-xs font-semibold text-brand-forest uppercase tracking-wider mb-2">
                    {t.contact.form.fullName} *
                  </label>
                  <input
                    id="full-name"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder={t.contact.form.fullNamePlaceholder}
                    className="w-full px-4 py-3 rounded-xl border border-brand-border focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 text-sm text-brand-dark bg-brand-cream/30 transition-all outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="phone-number" className="block text-xs font-semibold text-brand-forest uppercase tracking-wider mb-2">
                    {t.contact.form.phone} *
                  </label>
                  <input
                    id="phone-number"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={t.contact.form.phonePlaceholder}
                    className="w-full px-4 py-3 rounded-xl border border-brand-border focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 text-sm text-brand-dark bg-brand-cream/30 transition-all outline-none"
                  />
                </div>
              </div>

              {/* Check-in & Check-out Dates */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-check-in" className="block text-xs font-semibold text-brand-forest uppercase tracking-wider mb-2">
                    {t.contact.form.checkIn} *
                  </label>
                  <div className="relative">
                    <input
                      id="contact-check-in"
                      type="date"
                      required
                      value={checkIn}
                      onChange={(e) => {
                        setCheckIn(e.target.value);
                        setError(null);
                      }}
                      className="w-full px-4 py-3 rounded-xl border border-brand-border focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 text-sm text-brand-dark bg-brand-cream/30 transition-all outline-none cursor-pointer"
                    />
                    <Calendar className="w-4 h-4 text-brand-gold absolute right-3 rtl:right-auto rtl:left-3 top-3.5 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-check-out" className="block text-xs font-semibold text-brand-forest uppercase tracking-wider mb-2">
                    {t.contact.form.checkOut} *
                  </label>
                  <div className="relative">
                    <input
                      id="contact-check-out"
                      type="date"
                      required
                      value={checkOut}
                      onChange={(e) => {
                        setCheckOut(e.target.value);
                        setError(null);
                      }}
                      className="w-full px-4 py-3 rounded-xl border border-brand-border focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 text-sm text-brand-dark bg-brand-cream/30 transition-all outline-none cursor-pointer"
                    />
                    <Calendar className="w-4 h-4 text-brand-gold absolute right-3 rtl:right-auto rtl:left-3 top-3.5 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Room Type & Guests Custom Dropdowns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="room-type-select" className="block text-xs font-semibold text-brand-forest uppercase tracking-wider mb-2">
                    {t.contact.form.roomType}
                  </label>
                  <CustomSelect
                    id="room-type-select"
                    value={roomType}
                    onChange={setRoomType}
                    options={roomOptions}
                    icon={<Bed className="w-4 h-4" />}
                    ariaLabel={t.contact.form.roomType}
                  />
                </div>

                <div>
                  <label htmlFor="contact-guests-select" className="block text-xs font-semibold text-brand-forest uppercase tracking-wider mb-2">
                    {t.contact.form.guests}
                  </label>
                  <CustomSelect
                    id="contact-guests-select"
                    value={guests}
                    onChange={setGuests}
                    options={guestOptions}
                    icon={<Users className="w-4 h-4" />}
                    ariaLabel={t.contact.form.guests}
                  />
                </div>
              </div>

              {/* Notes */}
              <div>
                <label htmlFor="special-requests" className="block text-xs font-semibold text-brand-forest uppercase tracking-wider mb-2">
                  {t.contact.form.specialRequests}
                </label>
                <textarea
                  id="special-requests"
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={t.contact.form.specialRequestsPlaceholder}
                  className="w-full px-4 py-3 rounded-xl border border-brand-border focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 text-sm text-brand-dark bg-brand-cream/30 transition-all outline-none resize-none"
                />
              </div>

              {/* Date Error Display */}
              {error && (
                <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
                  <span>{error}</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 px-6 rounded-xl bg-[#25D366] hover:bg-[#20BA5A] text-white font-medium text-base shadow-md transition-all flex items-center justify-center gap-2"
              >
                <WhatsAppIcon className="w-5 h-5 text-white" />
                <span>{t.contact.form.submitWhatsapp}</span>
              </button>

              {/* Disclaimer */}
              <div className="p-3.5 rounded-xl bg-brand-cream-alt/60 border border-brand-border text-xs text-brand-muted flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <p className="leading-relaxed">{t.contact.form.notice}</p>
              </div>
            </form>
          </div>

          {/* Contact Details Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-brand-forest text-white rounded-3xl p-6 sm:p-8 shadow-card space-y-6">
              <h3 className="font-serif text-2xl font-bold">
                {t.contact.info.title}
              </h3>

              <div className="space-y-5 text-sm">
                {/* Location */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-brand-gold shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs text-brand-sand/70">{t.contact.info.addressLabel}</span>
                    <span className="text-white font-medium">
                      {lang === 'ar' ? BRAND_CONFIG.addressAr : BRAND_CONFIG.addressEn}
                    </span>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-brand-gold shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs text-brand-sand/70">{t.contact.info.phoneLabel}</span>
                    <a
                      href={`tel:${BRAND_CONFIG.phoneUrl}`}
                      className="text-white hover:text-brand-gold font-medium dir-ltr inline-block transition-colors"
                    >
                      {BRAND_CONFIG.displayPhone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-brand-gold shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs text-brand-sand/70">{t.contact.info.emailLabel}</span>
                    <span className="text-white font-medium">
                      {BRAND_CONFIG.email}
                    </span>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-brand-gold shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs text-brand-sand/70">{t.contact.info.hoursLabel}</span>
                    <span className="text-white font-medium">
                      {t.contact.info.hoursVal}
                    </span>
                  </div>
                </div>
              </div>

              {/* Fast Reply Notice */}
              <div className="p-4 rounded-2xl bg-white/10 border border-white/15 text-xs text-brand-sand leading-relaxed">
                {t.contact.info.quickHelp}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
