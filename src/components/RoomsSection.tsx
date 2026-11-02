import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ROOMS_DATA, RoomItem, CONTENT_TRANSLATIONS, buildWhatsAppUrl } from '../data/content';
import { RoomModal } from './RoomModal';
import { WhatsAppIcon } from './WhatsAppIcon';
import { Users, Bed, ArrowRight, Info } from 'lucide-react';

export const RoomsSection: React.FC = () => {
  const { lang, isRtl } = useLanguage();
  const t = CONTENT_TRANSLATIONS[lang];
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedRoom, setSelectedRoom] = useState<RoomItem | null>(null);

  const categories = [
    { id: 'all', label: t.rooms.allTab },
    { id: 'double', label: t.rooms.doubleTab },
    { id: 'triple', label: t.rooms.tripleTab },
    { id: 'four', label: t.rooms.fourTab },
    { id: 'five', label: t.rooms.fiveTab },
  ];

  const filteredRooms = activeCategory === 'all'
    ? ROOMS_DATA
    : ROOMS_DATA.filter((r) => r.category === activeCategory);

  const handleWhatsAppEnquiry = (room: RoomItem, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const roomName = lang === 'ar' ? room.nameAr : room.nameEn;
    const bedConfig = lang === 'ar' ? room.bedConfigAr : room.bedConfigEn;
    const capacity = lang === 'ar' ? room.capacityAr : room.capacityEn;
    const roomDescription = lang === 'ar' ? room.descriptionAr : room.descriptionEn;
    const roomRate = lang === 'ar' ? room.startingPriceAr : room.startingPriceEn;
    const specialNote = lang === 'ar' ? room.specialNoteAr : room.specialNoteEn;

    const url = buildWhatsAppUrl({
      roomName,
      bedConfig,
      capacity,
      roomRate,
      specialNote,
      roomDescription,
      roomRef: room.id,
      lang,
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="rooms" className="py-20 lg:py-24 bg-brand-cream/40 border-t border-brand-border/40 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-3">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-forest">
                {t.rooms.title}
              </h2>
              <span className="w-12 h-[2px] bg-brand-gold hidden sm:inline-block rounded-full"></span>
            </div>
            <p className="mt-2 text-sm sm:text-base text-brand-muted max-w-xl">
              {t.rooms.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setActiveCategory('all')}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-gold hover:text-brand-gold-hover transition-colors group cursor-pointer"
            >
              <span>{t.rooms.viewAll}</span>
              <ArrowRight className={`w-4 h-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform ${isRtl ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all border cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-brand-forest text-white border-brand-forest shadow-sm'
                  : 'bg-white text-brand-dark/75 hover:bg-brand-sand/40 border-brand-border/80'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Room Cards Grid: Desktop 4 columns, Tablet 2 columns, Mobile 1 column */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredRooms.map((room) => {
            const roomName = lang === 'ar' ? room.nameAr : room.nameEn;
            const description = lang === 'ar' ? room.descriptionAr : room.descriptionEn;
            const capacity = lang === 'ar' ? room.capacityAr : room.capacityEn;
            const bedConfig = lang === 'ar' ? room.bedConfigAr : room.bedConfigEn;
            const price = lang === 'ar' ? room.startingPriceAr : room.startingPriceEn;
            const isContactPrice = room.pricing.weekday === null;

            return (
              <div
                key={room.id}
                onClick={() => setSelectedRoom(room)}
                className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-brand-border hover:border-brand-gold/60 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Clean Room Photograph - 1 attractive photo per card */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-sand/20">
                    <img
                      src={room.image}
                      alt={roomName}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>

                  {/* Room Content */}
                  <div className="p-5">
                    <h3 className="font-serif text-lg font-bold text-brand-forest group-hover:text-brand-gold transition-colors">
                      {roomName}
                    </h3>
                    <p className="mt-1.5 text-xs text-brand-muted line-clamp-2 leading-relaxed min-h-[32px]">
                      {description}
                    </p>

                    {/* Room Specs: Single Beds and Guest Capacity Only */}
                    <div className="mt-4 pt-3.5 border-t border-brand-border/60 flex items-center justify-between text-xs text-brand-dark/80">
                      <div className="flex items-center gap-1.5" title={t.rooms.capacityLabel}>
                        <Users className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                        <span className="font-medium">{capacity}</span>
                      </div>
                      <div className="flex items-center gap-1.5" title={t.rooms.bedsLabel}>
                        <Bed className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                        <span className="font-medium truncate max-w-[110px]">{bedConfig}</span>
                      </div>
                    </div>

                    {/* Starting Price Display */}
                    <div className="mt-3.5 pt-3 border-t border-brand-border/40 flex items-baseline justify-between">
                      {!isContactPrice ? (
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-[11px] font-medium text-brand-muted">{t.rooms.startingFrom}</span>
                          <span className="font-serif text-lg font-bold text-brand-forest">
                            {price}
                          </span>
                          <span className="text-[11px] text-brand-muted">{t.rooms.perNight}</span>
                        </div>
                      ) : (
                        <div className="inline-flex items-center px-2.5 py-1 rounded-md bg-brand-sand/30 border border-brand-border text-xs font-semibold text-brand-forest">
                          {price}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Actions: Warm Gold View Details Button + Side-by-Side Muted Warm Gold WhatsApp Button (Never green) */}
                <div className="px-5 pb-5 pt-2 flex items-center justify-between gap-2.5">
                  <button
                    type="button"
                    onClick={() => setSelectedRoom(room)}
                    className="flex-1 h-10 inline-flex items-center justify-center gap-1.5 px-3 rounded-xl bg-brand-gold hover:bg-brand-gold-hover text-white text-xs sm:text-sm font-medium shadow-xs transition-all hover:shadow hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                  >
                    <span>{t.rooms.viewDetails}</span>
                    <ArrowRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-180' : ''}`} />
                  </button>

                  <button
                    type="button"
                    onClick={(e) => handleWhatsAppEnquiry(room, e)}
                    className="w-10 h-10 rounded-xl bg-brand-sand/40 hover:bg-brand-gold text-brand-gold hover:text-white border border-brand-gold/40 hover:border-brand-gold transition-all hover:-translate-y-0.5 active:translate-y-0 shrink-0 shadow-2xs flex items-center justify-center cursor-pointer"
                    title={t.rooms.enquire}
                    aria-label={t.rooms.enquire}
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-current" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Small Rates Note Below Room Cards (Client Specification) */}
        <div className="mt-8 max-w-3xl mx-auto flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/80 border border-brand-border/70 text-center shadow-2xs">
          <Info className="w-4 h-4 text-brand-gold shrink-0 hidden sm:inline-block" />
          <p className="text-xs sm:text-sm text-brand-dark/75 leading-relaxed">
            {t.rooms.rateNote}
          </p>
        </div>
      </div>

      {/* Polished Room Details Modal */}
      <RoomModal room={selectedRoom} onClose={() => setSelectedRoom(null)} />
    </section>
  );
};
