'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import Image from 'next/image';
import type { Copy, Locale } from 'content/getCopy';

type Props = {
  locale: Locale;
  copy: Copy;
};

const TESTIMONIAL_KEYS = ['t1', 't2', 't3'] as const;
const IMAGES = [
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80',
  'https://images.unsplash.com/photo-1531123414780-f74242c2b052?w=150&q=80',
];

export const Testimonials = ({ copy }: Props) => {
  const testimonials = TESTIMONIAL_KEYS.map((key, i) => ({
    ...copy.testimonials[key],
    image: IMAGES[i],
  }));

  return (
    <section className="py-24 bg-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            {copy.testimonials.title}{' '}
            <span className="text-blue-600">{copy.testimonials.titleHighlight}</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{copy.testimonials.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-blue-100 hover:shadow-md transition-shadow relative"
            >
              <Quote className="w-10 h-10 text-blue-100 absolute top-6 right-6 rtl:right-auto rtl:left-6" />
              <p className="text-gray-700 italic mb-6 relative z-10">&quot;{t.quote}&quot;</p>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={t.image}
                    alt={t.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-gray-900">{t.author}</div>
                  <div className="text-sm text-blue-600">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
