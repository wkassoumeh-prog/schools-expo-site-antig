'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { cityPath, REGISTER_URL, type City, type Copy, type Locale } from 'content/getCopy';
import { CityToggle } from '@/components/CityToggle';
import { LtrText } from './LtrText';

type Props = {
  locale: Locale;
  city: City;
  copy: Copy;
};

/**
 * Each layer mirrors the poster outwards from one edge and stretches it 20x, so only a
 * thin sliver of that edge stays visible. The result is a frame that continues the
 * video's own border colours instead of a flat backdrop behind it.
 * Order matters: top/bottom paint last and therefore own the corners on tall viewports,
 * while left/right reach further out on wide ones.
 */
const HERO_FRAME_EDGES = [
  { key: 'left', origin: 'left center', transform: 'translateX(2px) scale(-20, 1.15)' },
  { key: 'right', origin: 'right center', transform: 'translateX(-2px) scale(-20, 1.15)' },
  { key: 'top', origin: 'center top', transform: 'translateY(2px) scale(1.15, -20)' },
  { key: 'bottom', origin: 'center bottom', transform: 'translateY(-2px) scale(1.15, -20)' },
];

export const Hero = ({ locale, city, copy }: Props) => {
  const base = cityPath(locale, city);
  const heroPoster = copy.media.heroPoster || copy.media.heroImage;

  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden bg-gray-900 pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="absolute inset-0 z-0">
        {copy.media.heroVideo ? (
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            {/* 2:1 box sized like object-contain at 90%, so the frame layers lock to the video edges */}
            <div className="relative w-[min(90vw,180dvh)] aspect-[2/1]">
              {HERO_FRAME_EDGES.map((edge) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={edge.key}
                  src={heroPoster}
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 h-full w-full object-fill"
                  style={{ transform: edge.transform, transformOrigin: edge.origin }}
                />
              ))}
              <video
                className="relative h-full w-full object-fill"
                autoPlay
                muted
                loop
                playsInline
                poster={heroPoster}
              >
                <source src={copy.media.heroVideo} type="video/mp4" />
              </video>
            </div>
          </div>
        ) : (
          <Image
            src={copy.media.heroImage}
            alt="EDUGATE EXPO"
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <CityToggle locale={locale} city={city} copy={copy} variant="dark" size="large" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 border border-white/25 text-xs sm:text-sm font-medium backdrop-blur-md mb-6"
          >
            <Sparkles className="w-4 h-4 text-amber-400 flex-shrink-0" />
            <span className="text-white">{copy.hero.badge}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 text-white leading-tight"
          >
            {copy.hero.title}{locale === 'ar' ? <br /> : ' '}
            <span className="text-white underline decoration-blue-500 decoration-4 underline-offset-8">
              {copy.hero.titleHighlight}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg font-bold text-white/90 mb-8 leading-relaxed max-w-xl"
          >
            {copy.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-start gap-4"
          >
            <Link
              href={`${base}#schedule`}
              className="group px-7 py-3.5 bg-blue-600 text-white rounded-xl font-bold text-base flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/20 transform hover:-translate-y-0.5"
            >
              {copy.hero.visitExpo}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform rtl:group-hover:-translate-x-1 rtl:rotate-180" />
            </Link>
            <Link
              href={REGISTER_URL}
              className="px-7 py-3.5 bg-white/10 border border-white/20 hover:border-white/40 text-white rounded-xl font-bold text-base text-center transition-all backdrop-blur-md hover:bg-white/20"
            >
              {copy.registration.visitorPrimary ? copy.registration.registerVisitor : copy.hero.exhibitorReg}
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
            className="mt-12 sm:mt-16 md:mt-20 flex items-center justify-between gap-2 sm:gap-6 md:gap-12 max-w-lg md:max-w-none"
          >
            <div className="flex flex-col items-center sm:items-start text-center sm:text-start flex-1 min-w-0">
              <span className="text-xl sm:text-3xl md:text-4xl font-bold text-white whitespace-nowrap">
                {copy.hero.openingDate}
              </span>
              <span className="text-xs sm:text-sm uppercase tracking-widest font-semibold mt-1 text-white/90">{copy.hero.openingDay}</span>
            </div>
            <div className="w-px h-10 md:h-12 bg-white/40 flex-shrink-0" />
            <div className="flex flex-col items-center sm:items-start text-center sm:text-start flex-1 min-w-0">
              <span className="text-xl sm:text-3xl md:text-4xl font-bold text-white">
                <LtrText value={copy.hero.exhibitorsCount} />
              </span>
              <span className="text-xs sm:text-sm uppercase tracking-widest font-semibold mt-1 text-white/90">{copy.hero.exhibitors}</span>
            </div>
            <div className="w-px h-10 md:h-12 bg-white/40 flex-shrink-0" />
            <div className="flex flex-col items-center sm:items-start text-center sm:text-start flex-1 min-w-0">
              <span className="text-xl sm:text-3xl md:text-4xl font-bold text-white">{copy.hero.freeEntry}</span>
              <span className="text-xs sm:text-sm uppercase tracking-widest font-semibold mt-1 text-white/90">{copy.hero.entryFee}</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white/90 to-transparent" />
    </section>
  );
};
