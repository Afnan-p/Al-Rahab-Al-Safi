import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { RoomItem, COMMON_ROOM_FACILITIES, CONTENT_TRANSLATIONS, buildWhatsAppUrl } from '../data/content';
import { X, Users, Bed, Bath, Wind, Droplets, Sparkles, Calendar, BookmarkCheck } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

interface RoomModalProps {
  room: RoomItem | null;
  onClose: () => void;
}

export const RoomModal: React.FC<RoomModalProps> = ({ room, onClose }) => {
  const { lang } = useLanguage();
  const t = CONTENT_TRANSLATIONS[lang];

  useEffect(() => {
    if (room) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [room]);

  if (!room) return null;

  const roomName = lang === 'ar' ? room.nameAr : room.nameEn;
  const description = lang === 'ar' ? room.descriptionAr : room.descriptionEn;
  const capacity = lang === 'ar' ? room.capacityAr : room.capacityEn;
  const bedConfig = lang === 'ar' ? room.bedConfigAr : room.bedConfigEn;
  const roomRate = lang === 'ar' ? room.startingPriceAr : room.startingPriceEn;
  const specialNote = lang === 'ar' ? room.specialNoteAr : room.specialNoteEn;

  const handleEnquireWhatsApp = () => {
    const url = buildWhatsAppUrl({
      roomName,
      bedConfig,
      capacity,
      roomRate,
      specialNote,
      roomDescription: description,
      roomRef: room.id,
      lang,
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const getFacilityIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bath':
        return <Bath className="w-4 h-4 text-brand-gold" />;
      case 'Wind':
        return <Wind className="w-4 h-4 text-brand-gold" />;
      case 'Droplets':
        return <Droplets className="w-4 h-4 text-brand-gold" />;
      case 'Bed':
        return <Bed className="w-4 h-4 text-brand-gold" />;
      case 'Sparkles':
      default:
        return <Sparkles className="w-4 h-4 text-brand-gold" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity" 
        onClick={onClose}
      />

      <div className="flex min-h-full items-center justify-center p-3 sm:p-6 text-center">
        <div 
          className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white text-left rtl:text-right align-middle shadow-elevated transition-all border border-brand-border animate-in fade-in zoom-in-95 duration-200 my-6"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Image */}
          <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-brand-sand/30">
            <img
              src={room.image}
              alt={roomName}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 rtl:right-auto rtl:left-4 w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors focus:outline-none cursor-pointer"
              aria-label={t.rooms.modal.close}
            >
              <X className="w-5 h-5" />
            </button>

            {/* Bilingual Room Title on Image */}
            <div className="absolute bottom-4 left-5 right-5 text-white">
              <div className="flex flex-col gap-0.5">
                <span className="text-xs text-brand-sand/80 font-medium">
                  {lang === 'ar' ? room.nameEn : room.nameAr}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold">
                  {roomName}
                </h3>
              </div>
            </div>
          </div>

          {/* Modal Content Body */}
          <div className="p-5 sm:p-7 space-y-6 max-h-[calc(85vh-16rem)] overflow-y-auto">
            {/* Description */}
            <p className="text-brand-dark/85 text-sm sm:text-base leading-relaxed">
              {description}
            </p>

            {/* Double Bed Room Specific Join Note */}
            {room.category === 'double' && (
              <div className="p-3.5 rounded-xl bg-brand-sand/25 border border-brand-gold/30 flex items-start gap-3">
                <BookmarkCheck className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm font-medium text-brand-forest leading-relaxed">
                  {t.rooms.modal.doubleBedsJoinedNote}
                </p>
              </div>
            )}

            {/* Confirmed Room Specifications: Beds & Capacity */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-brand-cream border border-brand-border/80">
                <div className="w-10 h-10 rounded-lg bg-brand-gold/15 text-brand-gold flex items-center justify-center shrink-0">
                  <Bed className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[11px] text-brand-muted font-medium">{t.rooms.modal.beds}</span>
                  <span className="text-sm font-semibold text-brand-forest">{bedConfig}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-brand-cream border border-brand-border/80">
                <div className="w-10 h-10 rounded-lg bg-brand-gold/15 text-brand-gold flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[11px] text-brand-muted font-medium">{t.rooms.modal.capacity}</span>
                  <span className="text-sm font-semibold text-brand-forest">{capacity}</span>
                </div>
              </div>
            </div>

            {/* Official Seasonal Pricing Table */}
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <h4 className="font-serif font-bold text-base text-brand-forest flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-brand-gold" />
                  <span>{t.rooms.modal.pricingTitle}</span>
                </h4>
                <span className="text-[11px] text-brand-muted">{t.rooms.modal.pricingSubtitle}</span>
              </div>

              {room.pricing.weekday !== null ? (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {/* Weekdays */}
                  <div className="p-3 rounded-xl bg-white border border-brand-border/80 shadow-2xs text-center">
                    <span className="block text-[11px] text-brand-muted font-medium mb-1">
                      {t.rooms.modal.weekdays}
                    </span>
                    <span className="block font-serif text-base sm:text-lg font-bold text-brand-forest">
                      SAR {room.pricing.weekday}
                    </span>
                    <span className="block text-[10px] text-brand-muted mt-0.5">{t.rooms.perNight}</span>
                  </div>

                  {/* Weekend */}
                  <div className="p-3 rounded-xl bg-white border border-brand-border/80 shadow-2xs text-center">
                    <span className="block text-[11px] text-brand-muted font-medium mb-1">
                      {t.rooms.modal.weekend}
                    </span>
                    <span className="block font-serif text-base sm:text-lg font-bold text-brand-forest">
                      SAR {room.pricing.weekend}
                    </span>
                    <span className="block text-[10px] text-brand-muted mt-0.5">{t.rooms.perNight}</span>
                  </div>

                  {/* Eid Holidays */}
                  <div className="p-3 rounded-xl bg-brand-sand/15 border border-brand-gold/30 shadow-2xs text-center">
                    <span className="block text-[11px] text-brand-muted font-medium mb-1">
                      {t.rooms.modal.eid}
                    </span>
                    <span className="block font-serif text-base sm:text-lg font-bold text-brand-gold">
                      SAR {room.pricing.eid}
                    </span>
                    <span className="block text-[10px] text-brand-muted mt-0.5">{t.rooms.perNight}</span>
                  </div>

                  {/* Season */}
                  <div className="p-3 rounded-xl bg-brand-sand/15 border border-brand-gold/30 shadow-2xs text-center">
                    <span className="block text-[11px] text-brand-muted font-medium mb-1">
                      {t.rooms.modal.season}
                    </span>
                    <span className="block font-serif text-base sm:text-lg font-bold text-brand-gold">
                      SAR {room.pricing.season}
                    </span>
                    <span className="block text-[10px] text-brand-muted mt-0.5">{t.rooms.perNight}</span>
                  </div>
                </div>
              ) : (
                <div className="p-4 rounded-xl bg-brand-sand/20 border border-brand-border/80 text-center">
                  <p className="text-xs sm:text-sm font-semibold text-brand-forest mb-1">
                    {t.rooms.contactForPrice}
                  </p>
                  <p className="text-xs text-brand-muted">
                    {t.rooms.modal.customGroupRateNote}
                  </p>
                </div>
              )}
            </div>

            {/* Common Facilities – Confirmed for All Rooms */}
            <div>
              <div className="mb-2.5">
                <h4 className="font-serif font-bold text-base text-brand-forest">
                  {t.rooms.modal.commonFacilities}
                </h4>
                <p className="text-[11px] text-brand-muted">{t.rooms.modal.commonFacilitiesSubtitle}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {COMMON_ROOM_FACILITIES.map((facility) => {
                  const facilityName = lang === 'ar' ? facility.nameAr : facility.nameEn;
                  return (
                    <div 
                      key={facility.id} 
                      className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg bg-brand-cream/60 border border-brand-border/60 text-xs sm:text-sm text-brand-dark/90"
                    >
                      <div className="w-7 h-7 rounded-md bg-white border border-brand-border/60 flex items-center justify-center shrink-0">
                        {getFacilityIcon(facility.iconName)}
                      </div>
                      <span className="font-medium">{facilityName}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Guarantee Note */}
            <p className="text-xs text-brand-muted text-center pt-1">
              {t.rooms.modal.guaranteeNote}
            </p>
          </div>

          {/* Modal Actions: Warm Gold WhatsApp Button + Close Button (Never green) */}
          <div className="p-5 sm:p-6 border-t border-brand-border bg-brand-cream/30 flex flex-col sm:flex-row items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-brand-border hover:bg-brand-sand/40 text-brand-forest text-sm font-medium transition-colors cursor-pointer"
            >
              {t.rooms.modal.close}
            </button>

            <button
              type="button"
              onClick={handleEnquireWhatsApp}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-brand-gold hover:bg-brand-gold-hover text-white text-sm font-medium shadow-xs transition-all hover:shadow hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current" />
              <span>{t.rooms.modal.enquireNow}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
