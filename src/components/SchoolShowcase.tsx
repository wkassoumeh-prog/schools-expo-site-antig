'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { MapPin, Star, Award } from 'lucide-react';
import type { Copy, Locale } from 'content/getCopy';

type Props = {
  locale: Locale;
  copy: Copy;
};

const SCHOOL_KEYS = ['school1', 'school2', 'school3'] as const;
const IMAGES = [
  'https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?w=800&q=80',
  'https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80',
  'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80',
];

export const SchoolShowcase = ({ locale, copy }: Props) => {
  const schools = SCHOOL_KEYS.map((key, i) => ({
    ...copy.schools[key],
    rating: locale === 'en' ? 4.9 : 4.9,
    image: IMAGES[i],
  }));

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
          {schools.map((school, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group rounded-2xl overflow-hidden bg-white border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={school.image}
                  alt={school.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4">
                  <span className="px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm text-gray-900 text-xs font-semibold shadow-sm">
                    {school.type}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{school.name}</h3>
                  <div className="flex items-center gap-1 text-sm font-bold text-gray-900">
                    <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                    {school.rating}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-600 text-sm mb-6">
                  <MapPin className="w-4 h-4" />
                  {school.location}
                </div>
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
