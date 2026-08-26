import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { EducationPaths, ImageBanner } from '@/components/EducationPaths';
import { Features } from '@/components/Features';
import { Sponsors } from '@/components/Sponsors';
import { Sectors } from '@/components/Sectors';
import { SchoolShowcase } from '@/components/SchoolShowcase';
import { CampusSpotlight } from '@/components/CampusSpotlight';
import { Schedule } from '@/components/Schedule';
import { Gallery } from '@/components/Gallery';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { RegistrationCTA } from '@/components/RegistrationCTA';
import { Footer } from '@/components/Footer';
import { Contact } from '@/components/Contact';
import { Venue } from '@/components/Venue';
import { CITIES, LOCALES, getCopy, parseCity, parseLocale } from 'content/getCopy';
import { getSectionVisibility } from 'content/sectionVisibility';

type Props = {
  params: Promise<{ locale: string; city: string }>;
};

export function generateStaticParams() {
  return LOCALES.flatMap((locale) => CITIES.map((city) => ({ locale, city })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, city } = await params;
  const copy = getCopy(parseLocale(locale), parseCity(city));
  return {
    title: copy.meta.title,
    description: copy.meta.description,
  };
}

export default async function CityPage({ params }: Props) {
  const { locale, city } = await params;
  const validLocale = parseLocale(locale);
  const validCity = parseCity(city);
  const copy = getCopy(validLocale, validCity);
  const sectionVisibility = getSectionVisibility(validCity);

  return (
    <main className="min-h-screen bg-white">
      <Navbar locale={validLocale} city={validCity} copy={copy} />
      <Hero locale={validLocale} city={validCity} copy={copy} />
      {sectionVisibility.educationPaths && (
        <EducationPaths locale={validLocale} copy={copy} />
      )}
      {sectionVisibility.imageBanner && <ImageBanner locale={validLocale} copy={copy} />}
      {sectionVisibility.features && <Features locale={validLocale} copy={copy} />}
      {sectionVisibility.sponsors && <Sponsors copy={copy} />}
      {sectionVisibility.sectors && <Sectors copy={copy} />}
      {sectionVisibility.schoolShowcase && (
        <SchoolShowcase locale={validLocale} copy={copy} />
      )}
      {sectionVisibility.campusSpotlight && (
        <CampusSpotlight locale={validLocale} copy={copy} />
      )}
      {sectionVisibility.schedule && <Schedule locale={validLocale} copy={copy} />}
      {sectionVisibility.venue && copy.venue && (
        <Venue locale={validLocale} copy={copy} />
      )}
      {sectionVisibility.gallery && <Gallery locale={validLocale} copy={copy} />}
      {sectionVisibility.testimonials && (
        <Testimonials locale={validLocale} copy={copy} />
      )}
      {sectionVisibility.faq && <FAQ locale={validLocale} copy={copy} />}
      {sectionVisibility.registrationCTA && (
        <RegistrationCTA locale={validLocale} city={validCity} copy={copy} />
      )}
      <Contact copy={copy} />
      <Footer locale={validLocale} city={validCity} copy={copy} />
    </main>
  );
}
