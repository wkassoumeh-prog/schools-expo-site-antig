'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Ticket } from 'lucide-react';
import type { Copy, Locale } from 'content/getCopy';
import { LtrText } from '@/components/LtrText';

type Props = {
  locale: Locale;
  copy: Copy;
};

const ROW_ICONS = {
  address: MapPin,
  dates: Calendar,
  hours: Clock,
  entry: Ticket,
} as const;

export const Venue = ({ locale, copy }: Props) => {
  if (!copy.venue) return null;

  const mapSrc = copy.venue.mapEmbedUrl.replace(/hl=(ar|en)/, `hl=${locale}`);

  return (
    <section id="venue" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            {copy.venue.label}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900"
          >
            {copy.venue.title}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-12 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: locale === 'ar' ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-white min-h-[380px]"
          >
            <iframe
              src={mapSrc}
              title={copy.venue.mapTitle}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="w-full h-full min-h-[380px] border-0 saturate-[0.92]"
            />
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, x: locale === 'ar' ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid gap-px bg-gray-200 border border-gray-200 rounded-2xl overflow-hidden self-start"
          >
            {copy.venue.rows.map((row) => {
              const Icon = ROW_ICONS[row.icon];
              return (
                <li key={row.label} className="bg-white px-5 py-5 flex gap-4">
                  <Icon className="h-5 w-5 text-blue-600 shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                      {row.label}
                    </p>
                    <p className="mt-1 text-[15px] text-gray-900 leading-relaxed">
                      <LtrText value={row.value} />
                    </p>
                  </div>
                </li>
              );
            })}
          </motion.ul>
        </div>
      </div>
    </section>
  );
};
