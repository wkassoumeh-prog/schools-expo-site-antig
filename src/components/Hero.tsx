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
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gray-900 pt-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2070&auto=format&fit=crop"
          alt="Premium private school campus"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-medium mb-6 backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-white">
              <LtrText value={copy.hero.badge} />
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white leading-tight"
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
            className="text-lg font-bold text-white/90 mb-8 leading-relaxed max-w-xl"
          >
            {copy.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <Link
              href={`${base}#schedule`}
              className="group px-7 py-3.5 bg-blue-600 text-white rounded-xl font-bold text-base flex items-center gap-2 hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/20 transform hover:-translate-y-0.5"
            >
              {copy.hero.visitExpo}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform rtl:group-hover:-translate-x-1 rtl:rotate-180" />
            </Link>
            <Link
              href={`${base}#register`}
              className="px-7 py-3.5 bg-white/10 border border-white/20 hover:border-white/40 text-white rounded-xl font-bold text-base transition-all backdrop-blur-md hover:bg-white/20"
            >
              {copy.hero.exhibitorReg}
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
            className="mt-20 flex items-center gap-12"
          >
            <div className="flex flex-col">
              <span className="text-4xl font-bold text-white">
                {locale === 'ar' ? (
                  copy.hero.openingDate
                ) : (
                  <LtrText value={copy.hero.openingDate} />
                )}
              </span>
              <span className="text-sm uppercase tracking-widest font-semibold mt-1 text-white/90">{copy.hero.openingDay}</span>
            </div>
            <div className="w-px h-12 bg-white/40" />
            <div className="flex flex-col">
              <span className="text-4xl font-bold text-white">
                <LtrText value={copy.hero.exhibitorsCount} />
              </span>
              <span className="text-sm uppercase tracking-widest font-semibold mt-1 text-white/90">{copy.hero.exhibitors}</span>
            </div>
            <div className="w-px h-12 bg-white/40" />
            <div className="flex flex-col">
              <span className="text-4xl font-bold text-white">{copy.hero.freeEntry}</span>
              <span className="text-sm uppercase tracking-widest font-semibold mt-1 text-white/90">{copy.hero.entryFee}</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white/90 to-transparent" />
    </section>
  );
};
