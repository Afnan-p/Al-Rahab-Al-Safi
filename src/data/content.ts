// Configuration for Hostel Al-Rahab Al-Safi (نزل الرحاب الصافي)
// Easily edit brand names, contact info, and WhatsApp number here
export const BRAND_CONFIG = {
  nameEn: 'Hostel Al-Rahab Al-Safi',
  nameAr: 'نزل الرحاب الصافي',
  taglineEn: 'Comfort • Peace • Hospitality',
  taglineAr: 'راحة • سكينة • ضيافة طيبة',
  whatsappNumber: '918891003031',
  displayPhone: '+91 88910 03031',
  email: 'stay@nozolhostel.com',
  addressEn: 'Al Suqya District, Madinah 42315, Saudi Arabia',
  addressAr: 'حي السقيا، المدينة المنورة 42315، المملكة العربية السعودية',
  googleMapsUrl: 'https://maps.app.goo.gl/eTaFyyQAUsz8tqG97',
  coordinates: {
    lat: 24.4658058,
    lng: 39.601641,
  },
  plusCode: 'FJ82+8MC Madinah',
};

export interface RoomPricing {
  weekday: number | null; // e.g. 150 (SAR/night)
  weekend: number | null; // e.g. 180 (SAR/night)
  eid: number | null;     // e.g. 220 (SAR/night)
  season: number | null;  // e.g. 250 (SAR/night)
}

export interface RoomItem {
  id: string;
  nameEn: string;
  nameAr: string;
  category: 'double' | 'triple' | 'four' | 'five';
  descriptionEn: string;
  descriptionAr: string;
  capacityEn: string;
  capacityAr: string;
  bedConfigEn: string;
  bedConfigAr: string;
  specialNoteEn?: string;
  specialNoteAr?: string;
  image: string;
  startingPriceEn: string;
  startingPriceAr: string;
  pricing: RoomPricing;
}

export interface RoomFacility {
  id: string;
  nameEn: string;
  nameAr: string;
  iconName: 'Bath' | 'Wind' | 'Droplets' | 'Bed' | 'Sparkles';
}

export const COMMON_ROOM_FACILITIES: RoomFacility[] = [
  { id: 'bathroom', nameEn: 'Private Attached Bathroom', nameAr: 'دورة مياه خاصة داخل الغرفة', iconName: 'Bath' },
  { id: 'ac', nameEn: 'Air Conditioning', nameAr: 'تكييف هواء', iconName: 'Wind' },
  { id: 'heater', nameEn: 'Water Heater / Hot Water', nameAr: 'سخان مياه / ماء ساخن', iconName: 'Droplets' },
  { id: 'beds', nameEn: 'Comfortable Single Beds', nameAr: 'أسرة مفردة مريحة', iconName: 'Bed' },
  { id: 'linen', nameEn: 'Clean Bedding', nameAr: 'مفارش نظيفة ومعقمة', iconName: 'Sparkles' },
];

export const ROOMS_DATA: RoomItem[] = [
  {
    id: 'double-bed-room',
    nameEn: 'Double Bed Room',
    nameAr: 'غرفة بسريرين مفردين',
    category: 'double',
    descriptionEn: 'Comfortable private room with 2 single beds that can be placed together upon request.',
    descriptionAr: 'غرفة مريحة مجهزة بسريرين مفردين يمكن ضمهما وتنسيقهما معاً عند الطلب.',
    capacityEn: 'Up to 2 Guests',
    capacityAr: 'حتى ضيفين (٢)',
    bedConfigEn: '2 Single Beds',
    bedConfigAr: 'سريران مفردان (٢)',
    specialNoteEn: 'The two single beds can be placed together upon request.',
    specialNoteAr: 'يمكن ضم السريرين المفردين معاً وتنسيقهما عند الطلب.',
    image: '/images/rooms/double-bed.jpg',
    startingPriceEn: 'SAR 150',
    startingPriceAr: '١٥٠ ر.س',
    pricing: {
      weekday: 150,
      weekend: 180,
      eid: 220,
      season: 250,
    },
  },
  {
    id: 'triple-bed-room',
    nameEn: 'Triple Bed Room',
    nameAr: 'غرفة بثلاثة أسرة',
    category: 'triple',
    descriptionEn: 'Spacious room accommodating up to 3 guests with dedicated comfortable single beds.',
    descriptionAr: 'غرفة متسعة ومرتبة تناسب حتى ٣ ضيوف بأسرة مفردة مريحة تلبي احتياجات الزوار.',
    capacityEn: 'Up to 3 Guests',
    capacityAr: 'حتى ٣ ضيوف',
    bedConfigEn: '3 Single Beds',
    bedConfigAr: '٣ أسرة مفردة',
    image: '/images/rooms/triple-bed.jpg',
    startingPriceEn: 'SAR 170',
    startingPriceAr: '١٧٠ ر.س',
    pricing: {
      weekday: 170,
      weekend: 200,
      eid: 240,
      season: 270,
    },
  },
  {
    id: 'four-bed-room',
    nameEn: 'Four Bed Room',
    nameAr: 'غرفة بأربعة أسرة',
    category: 'four',
    descriptionEn: 'Practical accommodation offering 4 single beds for pilgrim groups and families.',
    descriptionAr: 'إقامة عملية ومريحة توفر ٤ أسرة مفردة لوفود المعتمرين والمجموعات العائلية.',
    capacityEn: 'Up to 4 Guests',
    capacityAr: 'حتى ٤ ضيوف',
    bedConfigEn: '4 Single Beds',
    bedConfigAr: '٤ أسرة مفردة',
    image: '/images/rooms/four-bed.jpg',
    startingPriceEn: 'SAR 180',
    startingPriceAr: '١٨٠ ر.س',
    pricing: {
      weekday: 180,
      weekend: 220,
      eid: 260,
      season: 290,
    },
  },
  {
    id: 'five-bed-room',
    nameEn: 'Five Bed Room',
    nameAr: 'غرفة بخمسة أسرة',
    category: 'five',
    descriptionEn: 'Generous multi-bed room designed for larger pilgrim groups seeking value and comfort.',
    descriptionAr: 'غرفة متعددة الأسرة متسعة ومصممة لوفود ومجموعات الزوار الباحثين عن الراحة والقيمة.',
    capacityEn: 'Up to 5 Guests',
    capacityAr: 'حتى ٥ ضيوف',
    bedConfigEn: '5 Single Beds',
    bedConfigAr: '٥ أسرة مفردة',
    image: '/images/rooms/five-bed.jpg',
    startingPriceEn: 'Contact for Price',
    startingPriceAr: 'تواصل لمعرفة السعر',
    pricing: {
      weekday: null,
      weekend: null,
      eid: null,
      season: null,
    },
  },
];

export const FACILITIES_DATA = [
  {
    id: 'wifi',
    nameEn: 'Free High-Speed Wi-Fi',
    nameAr: 'واي فاي مجاني وسريع',
    descEn: 'Stay seamlessly connected with loved ones and your travel plans throughout the hostel.',
    descAr: 'اتصال إنترنت عالي السرعة في جميع مرافق وغرف النزل لتواصل سهل ودائم.',
    iconName: 'Wifi',
  },
  {
    id: 'ac',
    nameEn: 'Air Conditioning',
    nameAr: 'تكييف هواء هادئ',
    descEn: 'Individual temperature controls in every room for a cool, refreshing rest.',
    descAr: 'تحكم فردي في درجات الحرارة لضمان نوم عميق وراحة منعشة.',
    iconName: 'Wind',
  },
  {
    id: 'elevator',
    nameEn: 'Modern Elevator',
    nameAr: 'مصعد حديث وسريع',
    descEn: 'Easy floor access for all guests, families with strollers, and luggage.',
    descAr: 'وصول مريح لجميع الأدوار لراحة كبار السن والعائلات ونقل الأمتعة بسهولة.',
    iconName: 'ArrowUpDown',
  },
  {
    id: 'family',
    nameEn: 'Family-Friendly',
    nameAr: 'بيئة مناسبة للعائلات',
    descEn: 'A respectful, quiet, and peaceful environment welcomed by families and pilgrims alike.',
    descAr: 'بيئة هادئة ومحترمة ودافئة توفر الراحة والخصوصية للعائلات والزوار.',
    iconName: 'Users',
  },
  {
    id: 'housekeeping',
    nameEn: 'Daily Housekeeping',
    nameAr: 'نظافة وعناية يومية',
    descEn: 'Dedicated daily cleaning, sanitization, and fresh linen supply.',
    descAr: 'تنظيف يومي دقيق، وتعقيم منتظم ومفارش نظيفة ومريحة.',
    iconName: 'Sparkles',
  },
  {
    id: 'luggage',
    nameEn: 'Luggage Storage',
    nameAr: 'حفظ ومساعدة الأمتعة',
    descEn: 'Safe luggage holding before check-in or after check-out while you visit the Haram.',
    descAr: 'إمكانية حفظ الأمتعة بأمان قبل موعد تسجيل الدخول أو بعد المغادرة لزيارة الحرم براحة.',
    iconName: 'Luggage',
  },
  {
    id: 'reception',
    nameEn: 'Attentive Help Desk',
    nameAr: 'استقبال وخدمة مستمرة',
    descEn: 'Friendly staff ready to assist with directions, taxi services, and inquiries.',
    descAr: 'طاقم ضيافة ودود في خدمتكم للمساعدة في الإرشادات والمواصلات والاستفسارات.',
    iconName: 'Clock',
  },
  {
    id: 'restaurants',
    nameEn: 'Nearby Restaurants & Markets',
    nameAr: 'مطاعم وأسواق مجاورة',
    descEn: 'Convenient proximity to local dining, supermarkets, and essential pharmacy services.',
    descAr: 'قريب من محلات التموينات والمطاعم المتنوعة والصيدليات والخدمات اليومية.',
    iconName: 'Utensils',
  },
];

export const CONTENT_TRANSLATIONS = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      rooms: 'Rooms',
      facilities: 'Facilities',
      about: 'About',
      location: 'Location',
      contact: 'Contact',
      bookNow: 'Book Your Stay',
      language: 'English',
      switchLang: 'العربية',
    },
    // Hero
    hero: {
      eyebrow: 'YOUR STAY IN MADINAH',
      title: 'Find Your Comfort in Madinah',
      subtitle: 'A welcoming place to rest, recharge, and feel at home. Clean and comfortable accommodation for pilgrims, families, groups and all travellers.',
      exploreRooms: 'Explore Rooms',
      enquireWhatsapp: 'Enquire on WhatsApp',
      highlights: {
        comfortableRooms: 'Comfortable Rooms',
        comfortableRoomsSub: 'For individuals, families & groups',
        convenientLocation: 'Convenient Location',
        convenientLocationSub: 'Easy access to Masjid an-Nabawi',
        welcomingHospitality: 'Welcoming Hospitality',
        welcomingHospitalitySub: 'A peaceful stay for every traveller',
      },
      searchWidget: {
        title: 'Check Availability & Rates',
        checkIn: 'Check-In',
        checkInPlaceholder: 'Select date',
        checkOut: 'Check-Out',
        checkOutPlaceholder: 'Select date',
        guests: 'Guests',
        guests1: '1 Guest',
        guests2: '2 Guests',
        guests3: '3 Guests',
        guests4: '4+ Guests (Family / Group)',
        btn: 'Check Availability',
        disclaimer: 'Instant WhatsApp enquiry • No advance payment required online',
        dateError: 'Check-out date must be after check-in date.',
      }
    },
    // Rooms Section
    rooms: {
      title: 'Our Rooms',
      subtitle: 'Comfortable and clean accommodation equipped with single beds, tailored for pilgrims, families, and groups.',
      viewAll: 'View All Rooms',
      allTab: 'All Rooms',
      doubleTab: 'Double Bed',
      tripleTab: 'Triple Bed',
      fourTab: 'Four Bed',
      fiveTab: 'Five Bed',
      startingFrom: 'Starting from',
      perNight: '/ night',
      contactForPrice: 'Contact for Price',
      rateNote: 'Rates may vary during weekends, Eid holidays, and seasonal periods. Contact us for special rates and availability.',
      viewDetails: 'View Details',
      enquire: 'Enquire on WhatsApp',
      bedsLabel: 'Single Beds',
      capacityLabel: 'Capacity',
      modal: {
        details: 'Room Specifications',
        beds: 'Bed Configuration',
        capacity: 'Maximum Capacity',
        pricingTitle: 'Official Seasonal Rates',
        pricingSubtitle: 'Rates in Saudi Riyals (SAR) per night',
        weekdays: 'Weekdays',
        weekend: 'Weekend',
        eid: 'Eid Holidays',
        season: 'Season',
        perNightUnit: 'SAR / night',
        commonFacilities: 'Included Room Facilities',
        commonFacilitiesSubtitle: 'Standard confirmed amenities across all rooms',
        doubleBedsJoinedNote: 'The two single beds can be placed together upon request.',
        customGroupRateNote: 'Official pricing for five-bed rooms is customized based on group size and season. Contact us directly on WhatsApp for real-time rates and availability.',
        close: 'Close',
        enquireNow: 'Enquire for this Room on WhatsApp',
        guaranteeNote: 'Direct booking assistance via WhatsApp with our on-ground team in Madinah.',
      }
    },
    // Facilities Section
    facilities: {
      title: 'Facilities & Services',
      subtitle: 'Everything you need for a comfortable, clean, and peaceful stay during your visit to Madinah.',
      moreInfo: 'More Facilities',
      badge: 'Guest Amenities',
      note: 'All amenities are maintained daily to ensure high hygiene and guest satisfaction.',
    },
    // About Section
    about: {
      badge: 'ABOUT US',
      title: 'A Peaceful Stay in the Heart of Madinah',
      p1: 'Welcome to Hostel Al-Rahab Al-Safi (نزل الرحاب الصافي), where we provide clean, comfortable, and well-maintained accommodation for visitors to the blessed city of Madinah.',
      p2: 'Whether you are arriving for Hajj, Umrah, or personal travel, our goal is to offer a tranquil, trustworthy home away from home with genuine Saudi hospitality and caring service.',
      feature1Title: 'Clean & Well Maintained',
      feature1Desc: 'Strict hygiene protocols and fresh linens in every room.',
      feature2Title: 'Convenient Location',
      feature2Desc: 'Close to transit, local dining, and easy access to Al-Masjid an-Nabawi.',
      feature3Title: 'Suitable for All Visitors',
      feature3Desc: 'Accommodating solo pilgrims, couples, families, and tour groups.',
      learnMore: 'Contact Our Team',
    },
    // Location Section
    location: {
      title: 'Location & Accessibility',
      subtitle: 'Located in the historic Al Suqya district in Madinah with convenient access to Al-Masjid an-Nabawi, transportation, shops, and restaurants.',
      viewGoogleMaps: 'Open in Google Maps',
      ourLocationTitle: 'Hostel Al-Rahab Al-Safi',
      ourLocationSub: 'Al Suqya District, Madinah 42315',
      centralArea: 'Al Suqya District, Madinah',
      addressLine: 'Al Suqya, Madinah 42315, Saudi Arabia',
      plusCode: 'FJ82+8MC Madinah',
      disclaimer: 'Verified Location: Situated in Al Suqya district with easy direct transport access to Al-Masjid an-Nabawi and major historic landmarks in Madinah.',
      nearbyPoints: {
        haram: 'Al-Masjid an-Nabawi',
        haramSub: 'Approx. 5-7 mins drive / easy transit',
        pharmacy: 'Pharmacies & Groceries',
        pharmacySub: 'Within short walking distance',
        taxis: 'Taxis & Public Transport',
        taxisSub: 'Readily available along main roads',
      }
    },
    // Booking CTA Banner
    ctaBanner: {
      title: 'Ready to Book Your Stay?',
      subtitle: 'Get in touch with us for availability, special seasonal packages, and group discounts.',
      chatWhatsapp: 'Chat on WhatsApp',
      contactUs: 'Contact Us',
    },
    // Contact Section
    contact: {
      badge: 'GET IN TOUCH',
      title: 'Direct Reservation Enquiry',
      subtitle: 'Have questions or want to check dates? Send us an inquiry and our team will get back to you promptly.',
      form: {
        fullName: 'Full Name',
        fullNamePlaceholder: 'Enter your name',
        phone: 'Phone / WhatsApp Number',
        phonePlaceholder: '+966 50 123 4567',
        checkIn: 'Check-in Date',
        checkOut: 'Check-out Date',
        roomType: 'Preferred Room Type',
        roomPlaceholder: 'Select room type',
        guests: 'Number of Guests',
        specialRequests: 'Special Requests / Notes',
        specialRequestsPlaceholder: 'Any specific requirements, estimated arrival time, etc.',
        submitWhatsapp: 'Send Enquiry via WhatsApp',
        submitDirect: 'Submit Direct Message',
        notice: 'Note: This enquiry is not a confirmed reservation. Our team will verify room availability and reply with final confirmation.',
      },
      info: {
        title: 'Contact Information',
        addressLabel: 'Location',
        phoneLabel: 'Phone & WhatsApp',
        emailLabel: 'Email',
        hoursLabel: 'Front Desk Hours',
        hoursVal: '24 Hours / 7 Days a week',
        quickHelp: 'For immediate assistance during Umrah season, WhatsApp is our fastest channel.',
      }
    },
    // Footer
    footer: {
      aboutText: 'A welcoming, clean, and reliable budget accommodation in Madinah, Saudi Arabia. Dedicated to serving pilgrims and guests with warmth and care.',
      quickLinks: 'Quick Links',
      accommodations: 'Accommodations',
      policies: 'Hostel Policies',
      privacyPolicy: 'Privacy Policy',
      bookingPolicy: 'Booking & Cancellation Terms',
      guestRules: 'Guest Guidelines',
      copyright: 'All rights reserved.',
      disclaimer: 'Official accommodation platform for Hostel Al-Rahab Al-Safi (نزل الرحاب الصافي), Madinah, Saudi Arabia.',
    },
    // Policies Modal
    policiesModal: {
      title: 'Hostel Policies & Terms',
      bookingTitle: 'Booking & Payment Notice',
      bookingDesc: 'Enquiries submitted through this website are preliminary requests. A reservation is only confirmed once our front desk team verifies availability and contacts you via WhatsApp or phone.',
      cancelTitle: 'Cancellation & Modification',
      cancelDesc: 'Guests may cancel or reschedule their booking by notifying us via WhatsApp at least 48 hours prior to the check-in date without penalty (subject to seasonal peak terms).',
      checkinTitle: 'Check-In & Check-Out Times',
      checkinDesc: 'Standard check-in is from 3:00 PM and check-out is before 12:00 PM. Early check-in or late check-out is subject to room availability on the day.',
      close: 'Got It',
    }
  },
  ar: {
    // Navigation
    nav: {
      home: 'الرئيسية',
      rooms: 'الغرف',
      facilities: 'المرافق والخدمات',
      about: 'عن النزل',
      location: 'الموقع',
      contact: 'تواصل معنا',
      bookNow: 'احجز إقامتك',
      language: 'العربية',
      switchLang: 'English',
    },
    // Hero
    hero: {
      eyebrow: 'إقامتك في المدينة المنورة',
      title: 'اكتشف راحتك وسكينتك في رحاب المدينة المنورة',
      subtitle: 'مكان هادئ ومريح للسكينة والاسترخاء والشعور بالدفء والاطمئنان. إقامة نظيفة ومريحة لضيوف الرحمن، العائلات، والمجموعات في مدينة رسول الله صلى الله عليه وسلم.',
      exploreRooms: 'استكشف الغرف',
      enquireWhatsapp: 'استفسر عبر واتساب',
      highlights: {
        comfortableRooms: 'غرف مريحة ومتنوعة',
        comfortableRoomsSub: 'للأفراد والعائلات والمجموعات',
        convenientLocation: 'موقع ملائم ومميز',
        convenientLocationSub: 'سهولة الوصول للمسجد النبوي الشريف',
        welcomingHospitality: 'ضيافة وترحيب دافئ',
        welcomingHospitalitySub: 'إقامة هادئة ومطمئنة لكل زائر',
      },
      searchWidget: {
        title: 'تحقق من التوفر والأسعار',
        checkIn: 'تاريخ الوصول',
        checkInPlaceholder: 'اختر التاريخ',
        checkOut: 'تاريخ المغادرة',
        checkOutPlaceholder: 'اختر التاريخ',
        guests: 'عدد الضيوف',
        guests1: 'ضيف واحد',
        guests2: 'ضيفان (٢)',
        guests3: '٣ ضيوف',
        guests4: '٤ ضيوف أو أكثر (عائلة / مجموعة)',
        btn: 'تحقق من التوفر',
        disclaimer: 'استفسار فوري عبر واتساب • لا يلزم دفع مسبق عبر الموقع',
        dateError: 'يجب أن يكون تاريخ المغادرة بعد تاريخ الوصول.',
      }
    },
    // Rooms Section
    rooms: {
      title: 'خيارات الغرف والإقامة',
      subtitle: 'إقامة نظيفة ومريحة مجهزة بأسرة فردية، مصممة بعناية لتناسب ضيوف الرحمن، العائلات، والمجموعات.',
      viewAll: 'عرض جميع الغرف',
      allTab: 'جميع الغرف',
      doubleTab: 'سريرين',
      tripleTab: '٣ أسرة',
      fourTab: '٤ أسرة',
      fiveTab: '٥ أسرة',
      startingFrom: 'تبدأ من',
      perNight: '/ ليلة',
      contactForPrice: 'تواصل لمعرفة السعر',
      rateNote: 'قد تختلف الأسعار خلال عطلات نهاية الأسبوع ومواسم الأعياد والمواسم الخاصة. تواصل معنا لمعرفة الأسعار والتوفر.',
      viewDetails: 'عرض التفاصيل',
      enquire: 'استفسر عبر واتساب',
      bedsLabel: 'الأسرة المفردة',
      capacityLabel: 'السعة الاستيعابية',
      modal: {
        details: 'تفاصيل ومواصفات الغرفة',
        beds: 'توزيع الأسرة',
        capacity: 'أقصى سعة استيعابية',
        pricingTitle: 'جدول الأسعار المعتمد',
        pricingSubtitle: 'جميع الأسعار بالريال السعودي (ر.س) لكل ليلة',
        weekdays: 'الأيام العادية',
        weekend: 'عطلة نهاية الأسبوع',
        eid: 'مواسم الأعياد',
        season: 'المواسم',
        perNightUnit: 'ر.س / ليلة',
        commonFacilities: 'المرافق والتجهيزات المتوفرة',
        commonFacilitiesSubtitle: 'مرافق أساسية موحدة ومؤكدة لجميع فئات الغرف',
        doubleBedsJoinedNote: 'يمكن ضم السريرين المفردين معاً وتنسيقهما عند الطلب.',
        customGroupRateNote: 'لا تتضمن وثيقة الأسعار المعتمدة تسعيرة ثابتة لغرفة الخمسة أسرة. يرجى التواصل معنا عبر الواتساب لمعرفة العروض والتوفر.',
        close: 'إغلاق',
        enquireNow: 'استفسر عن هذه الغرفة عبر واتساب',
        guaranteeNote: 'تواصل مباشر مع فريق الاستقبال بالمدينة المنورة لتأكيد التوفر وتسهيل إقامتكم.',
      }
    },
    // Facilities Section
    facilities: {
      title: 'المرافق والخدمات',
      subtitle: 'كل ما تحتاجه لإقامة هادئة، مريحة، ونظيفة طوال فترة زيارتك للمدينة المنورة.',
      moreInfo: 'المزيد من الخدمات',
      badge: 'راحة ضيوفنا',
      note: 'تتم متابعة وتعقيم كافة المرافق يومياً لضمان أعلى مستويات الراحة والنظافة.',
    },
    // About Section
    about: {
      badge: 'عن النزل',
      title: 'إقامة هادئة ومطمئنة في قلب المدينة المنورة',
      p1: 'أهلاً بكم في نزل الرحاب الصافي (Hostel Al-Rahab Al-Safi)، وجهتكم لإقامة مريحة، نظيفة، وموثوقة لضيوف وزوار مدينة رسول الله صلى الله عليه وسلم.',
      p2: 'سواء كنتم في زيارة لأداء مناسك العمرة، أو الحج، أو رحلة خاصة مع العائلة، نحرص على تقديم ضيافة سعودية أصيلة، وبيئة هادئة ومرتبة تشعركم بالدفء والراحة.',
      feature1Title: 'نظافة وعناية مستمرة',
      feature1Desc: 'إجراءات تعقيم دقيقة وتغيير دوري للمفارش وتجهيزات الحمام.',
      feature2Title: 'موقع متميز وميسر',
      feature2Desc: 'قريب من الخدمات والمطاعم وسهولة الانتقال للمسجد النبوي الشريف.',
      feature3Title: 'مناسب لجميع الضيوف',
      feature3Desc: 'خيارات متعددة للأفراد والعائلات وحملات المعتمرين بأسعار مناسبة.',
      learnMore: 'تواصل مع فريقنا',
    },
    // Location Section
    location: {
      title: 'الموقع وسهولة الوصول',
      subtitle: 'يقع النزل في حي السقيا العريق بالمدينة المنورة، مع سهولة وسرعة الوصول إلى المسجد النبوي الشريف والمطاعم والخدمات.',
      viewGoogleMaps: 'فتح في خرائط جوجل',
      ourLocationTitle: 'نزل الرحاب الصافي',
      ourLocationSub: 'حي السقيا، المدينة المنورة 42315',
      centralArea: 'حي السقيا، المدينة المنورة',
      addressLine: 'حي السقيا، المدينة المنورة 42315، المملكة العربية السعودية',
      plusCode: 'FJ82+8MC المدينة المنورة',
      disclaimer: 'موقع معتمد: يقع في حي السقيا بالقرب من المسجد النبوي الشريف وسهولة التنقل لجميع المعالم التاريخية بالمدينة.',
      nearbyPoints: {
        haram: 'المسجد النبوي الشريف',
        haramSub: 'حوالي ٥ إلى ٧ دقائق بالسيارة / مواصلات ميسرة',
        pharmacy: 'صيدليات ومتاجر تموينية',
        pharmacySub: 'على بعد خطوات مشياً',
        taxis: 'مواقف سيارات الأجرة والحافلات',
        taxisSub: 'متوفرة على الطرق الرئيسية بسهولة',
      }
    },
    // Booking CTA Banner
    ctaBanner: {
      title: 'جاهز لحجز إقامتك في المدينة؟',
      subtitle: 'تواصل معنا مباشرة عبر واتساب لمعرفة التوفر وأفضل الأسعار الموسمية وعروض المجموعات.',
      chatWhatsapp: 'محادثة عبر واتساب',
      contactUs: 'تواصل معنا',
    },
    // Contact Section
    contact: {
      badge: 'تواصل مباشر',
      title: 'طلب استفسار وحجز',
      subtitle: 'لديك أي سؤال أو ترغب في الاستفسار عن التواريخ المناسبة؟ أرسل لنا تفاصيلك وسيسعدنا الرد عليك فوراً.',
      form: {
        fullName: 'الاسم الكامل',
        fullNamePlaceholder: 'اكتب اسمك الكريم',
        phone: 'رقم الجوال / الواتساب',
        phonePlaceholder: '+966 50 123 4567',
        checkIn: 'تاريخ الوصول',
        checkOut: 'تاريخ المغادرة',
        roomType: 'نوع الغرفة المفضل',
        roomPlaceholder: 'اختر نوع الغرفة',
        guests: 'عدد الضيوف',
        specialRequests: 'ملاحظات أو طلبات خاصة',
        specialRequestsPlaceholder: 'أي متطلبات محددة، وقت الوصول المتوقع، إلخ.',
        submitWhatsapp: 'إرسال الاستفسار عبر واتساب',
        submitDirect: 'إرسال رسالة مباشرة',
        notice: 'تنبيه: هذا النموذج مخصص للاستفسار وليس تأكيداً نهائياً للحجز. سيقوم فريقنا بمراجعة التوفر والرد عليكم لتأكيد الحجز.',
      },
      info: {
        title: 'بيانات التواصل',
        addressLabel: 'العنوان',
        phoneLabel: 'الهاتف والواتساب',
        emailLabel: 'البريد الإلكتروني',
        hoursLabel: 'ساعات الخدمة',
        hoursVal: 'على مدار الساعة / ٧ أيام',
        quickHelp: 'للحصول على رد فوري ومباشر خلال مواسم العمرة، يعد الواتساب خيارك الأسرع.',
      }
    },
    // Footer
    footer: {
      aboutText: 'إقامة هادئة، مريحة، واقتصادية في المدينة المنورة. نسعد بخدمة ضيوف الرحمن والزوار بكل اهتمام وحفاوة.',
      quickLinks: 'روابط سريعة',
      accommodations: 'خيارات الإقامة',
      policies: 'سياسات النزل',
      privacyPolicy: 'سياسة الخصوصية',
      bookingPolicy: 'شروط الحجز والإلغاء',
      guestRules: 'إرشادات النزلاء',
      copyright: 'جميع الحقوق محفوظة.',
      disclaimer: 'المنصة الرسمية لنزل الرحاب الصافي (Hostel Al-Rahab Al-Safi) في المدينة المنورة، المملكة العربية السعودية.',
    },
    // Policies Modal
    policiesModal: {
      title: 'سياسات وشروط النزل',
      bookingTitle: 'إشعار الحجز والدفع',
      bookingDesc: 'الطلبات المقدمة عبر الموقع هي استفسارات مبدئية، ولا يعد الحجز مؤكداً إلا بعد مراجعة التوفر والتواصل معكم رسمياً عبر الواتساب أو الهاتف من قِبل إدارة النزل.',
      cancelTitle: 'الإلغاء والتعديل',
      cancelDesc: 'يمكن للضيوف طلب إلغاء أو تعديل موعد الإقامة بالتواصل معنا عبر الواتساب قبل موعد الوصول بـ ٤٨ ساعة على الأقل دون أي رسوم (مع مراعاة مواسم الذروة).',
      checkinTitle: 'أوقات تسجيل الدخول والمغادرة',
      checkinDesc: 'يبدأ تسجيل الدخول من الساعة ٣:٠٠ مساءً، ويكون تسجيل المغادرة قبل الساعة ١٢:٠٠ ظهراً. الدخول المبكر أو المغادرة المتأخرة تخضع لتوفر الغرف في حينه.',
      close: 'فهمت ذلك',
    }
  }
};

export function buildWhatsAppUrl(params: {
  checkIn?: string;
  checkOut?: string;
  guests?: string;
  roomName?: string;
  bedConfig?: string;
  capacity?: string;
  roomRate?: string;
  specialNote?: string;
  roomDescription?: string;
  roomRef?: string;
  customerName?: string;
  message?: string;
  lang?: 'en' | 'ar';
}): string {
  const isAr = params.lang === 'ar';
  const hostelName = isAr ? BRAND_CONFIG.nameAr : BRAND_CONFIG.nameEn;
  
  let text = '';
  if (isAr) {
    text = `السلام عليكم ورحمة الله وبركاته،\nأود الاستفسار عن حجز وإتاحة *${params.roomName || 'غرفة'}* في *${hostelName}* بالمدينة المنورة:\n`;
    if (params.roomName) text += `• الفئة: *${params.roomName}*\n`;
    if (params.bedConfig) text += `• توزيع الأسرة: ${params.bedConfig}\n`;
    if (params.capacity) text += `• أقصى سعة: ${params.capacity}\n`;
    if (params.roomRate) text += `• السعر المعروض: ${params.roomRate}\n`;
    if (params.specialNote) text += `• ملاحظة: ${params.specialNote}\n`;
    if (params.customerName) text += `• الاسم: ${params.customerName}\n`;
    if (params.checkIn) text += `• تاريخ الوصول: ${params.checkIn}\n`;
    if (params.checkOut) text += `• تاريخ المغادرة: ${params.checkOut}\n`;
    if (params.guests) text += `• عدد الضيوف: ${params.guests}\n`;
    if (params.message) text += `• ملاحظات إضافية: ${params.message}\n`;
    text += `\nيرجى التكرم بإفادتي بتوفر الغرفة وتفاصيل الحجز. شكراً لكم!`;
  } else {
    text = `Hello, I am interested in booking a ${params.roomName || 'room'} at *${hostelName}* in Madinah.\n`;
    if (params.roomName) text += `• Room Category: *${params.roomName}*\n`;
    if (params.bedConfig) text += `• Bed Setup: ${params.bedConfig}\n`;
    if (params.capacity) text += `• Capacity: ${params.capacity}\n`;
    if (params.roomRate) text += `• Displayed Rate: ${params.roomRate}\n`;
    if (params.specialNote) text += `• Note: ${params.specialNote}\n`;
    if (params.customerName) text += `• Name: ${params.customerName}\n`;
    if (params.checkIn) text += `• Check-in: ${params.checkIn}\n`;
    if (params.checkOut) text += `• Check-out: ${params.checkOut}\n`;
    if (params.guests) text += `• Guests: ${params.guests}\n`;
    if (params.message) text += `• Special Notes: ${params.message}\n`;
    text += `\nPlease share availability and booking details. Thank you!`;
  }

  return `https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
