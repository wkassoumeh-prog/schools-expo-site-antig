import { copyEn } from './copy.en';
import { copyAr } from './copy.ar';

export type Locale = 'en' | 'ar';

/** Copy type derived from English – components use copy.section.key */
export type Copy = typeof copyEn;

const copies = { en: copyEn, ar: copyAr } as unknown as Record<Locale, Copy>;

export function getCopy(locale: Locale): Copy {
  return copies[locale];
}
