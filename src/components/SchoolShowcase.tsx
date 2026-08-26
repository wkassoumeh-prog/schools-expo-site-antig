'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { MapPin, Star, Award } from 'lucide-react';
import { LogoChip } from '@/components/LogoChip';
import type { Copy, Locale } from 'content/getCopy';

type Props = {
  locale: Locale;
  copy: Copy;
};

export const SchoolShowcase = ({ copy }: Props) => {
  if (copy.schools.layout === 'logos') {
    return (
      <section id="schools" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">{copy.schools.title}</h2>
            <p className="text-gray-600">{copy.schools.subtitle}</p>
          </div>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-7 sm:gap-x-8 sm:gap-y-8">
            {copy.schools.items.map((school, index) => (
              <motion.div
                key={school.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group w-[134px] sm:w-[182px]"
              >
                <LogoChip name={school.name} logo={school.logo} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="schools" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">{copy.schools.title}</h2>
            <p className="text-gray-600">{copy.schools.subtitle}</p>
          </div>
          <button className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-2 transition-colors">
            {copy.schools.viewAll} →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {copy.schools.items.map((school, index) => (
            <motion.div
              key={school.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group rounded-2xl overflow-hidden bg-white border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden bg-gray-100">
                {school.image ? (
                  <Image
                    src={school.image}
                    alt={school.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : null}
                {school.type ? (
                  <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4">
                    <span className="px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm text-gray-900 text-xs font-semibold shadow-sm">
                      {school.type}
                    </span>
                  </div>
                ) : null}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{school.name}</h3>
                  {school.rating != null ? (
                    <div className="flex items-center gap-1 text-sm font-bold text-gray-900">
                      <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                      {school.rating}
                    </div>
                  ) : null}
                </div>
                {school.location ? (
                  <div className="flex items-center gap-2 text-gray-600 text-sm mb-6">
                    <MapPin className="w-4 h-4" />
                    {school.location}
                  </div>
                ) : null}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm">
                    <Award className="w-4 h-4" />
                    {copy.schools.scholarships}
                  </div>
                  <button className="px-4 py-2 bg-blue-50 hover:bg-blue-600 hover:text-white text-blue-600 rounded-lg text-sm font-semibold transition-all">
                    {copy.schools.details}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
