import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { EducationPaths, ImageBanner } from '@/components/EducationPaths';
import { Features } from '@/components/Features';
import { SchoolShowcase } from '@/components/SchoolShowcase';
import { CampusSpotlight } from '@/components/CampusSpotlight';
import { Schedule } from '@/components/Schedule';
import { Gallery } from '@/components/Gallery';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { RegistrationCTA } from '@/components/RegistrationCTA';
import { Footer } from '@/components/Footer';
import { Contact } from '@/components/Contact';
import { getCopy, type Locale } from 'content/getCopy';
import { sectionVisibility } from 'content/sectionVisibility';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function LocalePage({ params }: Props) {
  const { locale } = await params;
  const validLocale: Locale = locale === 'ar' ? 'ar' : 'en';
  const copy = getCopy(validLocale);

  return (
    <main className="min-h-screen bg-white">
      <Navbar locale={validLocale} copy={copy} />
      <Hero locale={validLocale} copy={copy} />
      {sectionVisibility.educationPaths && <EducationPaths locale={validLocale} copy={copy} />}
      {sectionVisibility.imageBanner && <ImageBanner locale={validLocale} copy={copy} />}
      {sectionVisibility.features && <Features locale={validLocale} copy={copy} />}
      {sectionVisibility.schoolShowcase && <SchoolShowcase locale={validLocale} copy={copy} />}
      {sectionVisibility.campusSpotlight && <CampusSpotlight locale={validLocale} copy={copy} />}
      {sectionVisibility.schedule && <Schedule locale={validLocale} copy={copy} />}
      {sectionVisibility.gallery && <Gallery locale={validLocale} copy={copy} />}
      {sectionVisibility.testimonials && <Testimonials locale={validLocale} copy={copy} />}
      {sectionVisibility.faq && <FAQ locale={validLocale} copy={copy} />}
      {sectionVisibility.registrationCTA && <RegistrationCTA locale={validLocale} copy={copy} />}
      <Contact locale={validLocale} copy={copy} />
      <Footer locale={validLocale} copy={copy} />
    </main>
  );
}
