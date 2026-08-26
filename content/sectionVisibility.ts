import type { City } from './getCopy';

export type SectionVisibility = {
  educationPaths: boolean;
  imageBanner: boolean;
  features: boolean;
  sponsors: boolean;
  sectors: boolean;
  schoolShowcase: boolean;
  campusSpotlight: boolean;
  schedule: boolean;
  venue: boolean;
  gallery: boolean;
  testimonials: boolean;
  faq: boolean;
  registrationCTA: boolean;
};

export const sectionVisibilityByCity: Record<City, SectionVisibility> = {
  damascus: {
    educationPaths: true,
    imageBanner: true,
    features: true,
    sponsors: false,
    sectors: false,
    schoolShowcase: true,
    campusSpotlight: true,
    schedule: true,
    venue: false,
    gallery: false,
    testimonials: false,
    faq: true,
    registrationCTA: true,
  },
  aleppo: {
    educationPaths: true,
    imageBanner: true,
    features: true,
    sponsors: true,
    sectors: true,
    schoolShowcase: true,
    campusSpotlight: false,
    schedule: true,
    venue: true,
    gallery: false,
    testimonials: false,
    faq: true,
    registrationCTA: true,
  },
};

export function getSectionVisibility(city: City): SectionVisibility {
  return sectionVisibilityByCity[city];
}
