'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import type { Copy, Locale } from 'content/getCopy';

type Props = {
  locale: Locale;
  copy: Copy;
};

const MOMENTS = [
  {
    src: '/images/gallery-2.jpg',
    alt: 'Graduation cap thrown in air',
    span: 'col-span-1 md:col-span-2 row-span-2',
  },
  {
    src: '/images/gallery-1.jpg',
    alt: 'Student group studying',
    span: 'col-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80',
    alt: 'Students working on laptop',
    span: 'col-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80',
    alt: 'Teacher in classroom',
    span: 'col-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?w=800&q=80',
    alt: 'Exam hall',
    span: 'col-span-1 md:col-span-2',
  },
];

export const Gallery = ({ copy }: Props) => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-4 text-gray-900"
          >
            {copy.gallery.title}{' '}
            <span className="text-blue-600">{copy.gallery.titleHighlight}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            {copy.gallery.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px] grid-flow-dense">
          {MOMENTS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className={`relative rounded-2xl overflow-hidden shadow-lg group ${item.span}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
