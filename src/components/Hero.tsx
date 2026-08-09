'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { Copy, Locale } from 'content/getCopy';
import { LtrText } from './LtrText';

type Props = {
  locale: Locale;
  copy: Copy;
};

export const Hero = ({ locale, copy }: Props) => {
  const base = `/${locale}`;

  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden bg-gray-900 pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2070&auto=format&fit=crop"
          alt="Premium private school campus"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 border border-white/25 text-xs sm:text-sm font-medium mb-6 backdrop-blur-md"
          >
            <Sparkles className="w-4 h-4 text-amber-400 flex-shrink-0" />
            <span className="text-white">
              {copy.hero.badge}
            </span>
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
              href={`${base}#register`}
              className="px-7 py-3.5 bg-white/10 border border-white/20 hover:border-white/40 text-white rounded-xl font-bold text-base text-center transition-all backdrop-blur-md hover:bg-white/20"
            >
              {copy.hero.exhibitorReg}
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
