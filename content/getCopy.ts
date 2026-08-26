import { copyDamascusEn } from './damascus/copy.en';
import { copyDamascusAr } from './damascus/copy.ar';
import { copyAleppoEn } from './aleppo/copy.en';
import { copyAleppoAr } from './aleppo/copy.ar';

export type Locale = 'en' | 'ar';
export type City = 'damascus' | 'aleppo';

export const LOCALES: Locale[] = ['en', 'ar'];
export const CITIES: City[] = ['damascus', 'aleppo'];
export const DEFAULT_LOCALE: Locale = 'ar';
export const DEFAULT_CITY: City = 'aleppo';
export const REGISTER_URL = 'https://silah-tech.com/register/vulcan-1';

export type Copy = {
  cityToggle: { damascus: string; aleppo: string };
  header: {
    brand: string;
    brandHighlight: string;
    whyEduGate: string;
    exhibitors: string;
    visitInfo: string;
    faq: string;
    contactUs: string;
    registerNow: string;
  };
  hero: {
    badge: string;
    openingDate: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    visitExpo: string;
    exhibitorReg: string;
    openingDay: string;
    exhibitors: string;
    exhibitorsCount: string;
    freeEntry: string;
    entryFee: string;
  };
  aboutExpo: { title: string; description: string };
  whyParents: {
    label: string;
    title: string;
    titleHighlight: string;
    saveTime: { title: string; desc: string };
    accurateInfo: { title: string; desc: string };
    compareSchools: { title: string; desc: string };
    exclusiveOffers: { title: string; desc: string };
  };
  whyExpo: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    introduceParents: { title: string; desc: string };
    assistFamilies: { title: string; desc: string };
    fosterCompetition: { title: string; desc: string };
    showcaseLatest: { title: string; desc: string };
    networkingHub: { title: string; desc: string };
  };
  forExhibitors: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    strengthenPresence: { title: string; desc: string };
    reachThousands: { title: string; desc: string };
    increaseEnrollment: { title: string; desc: string };
    showExcellence: { title: string; desc: string };
    buildTrust: { title: string; desc: string };
  };
  whyParentsVisit: {
    label: string;
    saveTime: string;
    accurateInfo: string;
    compareEasily: string;
    exclusiveOffers: string;
    informedDecision: string;
  };
  duringVisit: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    activities: Array<{ time: string; title: string; location: string; desc: string }>;
  };
  campusSpotlight: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    languageCenters: { title: string; desc: string };
    eLearning: { title: string; desc: string };
    specialNeeds: { title: string; desc: string };
    virtualSchools: { title: string; desc: string };
  };
  schools: {
    layout: 'cards' | 'logos';
    title: string;
    subtitle: string;
    viewAll: string;
    scholarships: string;
    details: string;
    items: Array<{
      name: string;
      location?: string;
      type?: string;
      image?: string;
      logo?: string;
      rating?: number;
    }>;
  };
  sponsors: {
    label: string;
    title: string;
    subtitle: string;
    groups: Array<{
      label: string;
      items: Array<{ name: string; role: string; logo: string }>;
    }>;
  };
  sectors: {
    label: string;
    title: string;
    subtitle: string;
    items: Array<{ title: string; desc: string }>;
  };
  venue?: {
    label: string;
    title: string;
    mapEmbedUrl: string;
    mapTitle: string;
    rows: Array<{
      icon: 'address' | 'dates' | 'hours' | 'entry';
      label: string;
      value: string;
    }>;
  };
  gallery: { title: string; titleHighlight: string; subtitle: string };
  testimonials: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    t1: { quote: string; author: string; role: string };
    t2: { quote: string; author: string; role: string };
    t3: { quote: string; author: string; role: string };
  };
  faq: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    items: Array<{ q: string; a: string }>;
  };
  registration: {
    title: string;
    subtitle: string;
    registerVisitor: string;
    registerExhibitor: string;
    goldenExhibitor: string;
    silverExhibitor: string;
    standard: string;
    sponsorsPartners: string;
    showExhibitorTiers: boolean;
    visitorPrimary: boolean;
  };
  contact: {
    badge: string;
    title: string;
    description: string;
    phone: { title: string; number: string; copied: string };
    email: { title: string; address: string };
    facebook: { title: string; text: string };
    instagram: { title: string; text: string };
    whatsapp: { title: string; text: string };
    success: { title: string; message: string; sendAnother: string };
    form: {
      title: string;
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      subject: string;
      subjectPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      sending: string;
      submit: string;
    };
  };
  footer: {
    brand: string;
    tagline: string;
    openingDates: { days: string; month: string; year: string };
    eventTime: string;
    quickLinks: string;
    aboutExpo: string;
    forParents: string;
    forExhibitors: string;
    faq: string;
    venueTitle: string;
    dateTitle: string;
    contact: string;
    phone: string;
    address: string;
    email: string;
    organizer: string;
    organizerName: string;
    copyright: string;
    facebook: string;
    instagram: string;
  };
  media: {
    heroImage: string;
    heroVideo: string;
    heroPoster: string;
    aboutBanner: string;
    campus1: string;
    campus2: string;
    whyParents: [string, string, string, string];
  };
};

const copies: Record<City, Record<Locale, Copy>> = {
  damascus: { en: copyDamascusEn, ar: copyDamascusAr },
  aleppo: { en: copyAleppoEn, ar: copyAleppoAr },
};

export function parseLocale(value: string | undefined): Locale {
  return value === 'en' ? 'en' : 'ar';
}

export function parseCity(value: string | undefined): City {
  return value === 'damascus' ? 'damascus' : 'aleppo';
}

export function cityPath(locale: Locale, city: City, hash = ''): string {
  return `/${locale}/${city}${hash}`;
}

export function getCopy(locale: Locale, city: City): Copy {
  return copies[city][locale];
}
