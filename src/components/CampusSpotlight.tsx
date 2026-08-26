'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import type { Copy, Locale } from 'content/getCopy';

type Props = {
  locale: Locale;
  copy: Copy;
};

const SPOTLIGHT_KEYS = ['languageCenters', 'eLearning', 'specialNeeds', 'virtualSchools'] as const;

export const CampusSpotlight = ({ copy }: Props) => {
  const items = SPOTLIGHT_KEYS.map((key) => copy.campusSpotlight[key]);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative h-[320px] sm:h-[450px] md:h-[600px] rounded-2xl sm:rounded-[3rem] overflow-hidden shadow-2xl z-10">
              <Image
                src={copy.media.campus1}
                alt="Campus spotlight"
                fill
                className="object-cover"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="absolute -bottom-12 -right-12 h-64 w-64 rounded-3xl overflow-hidden border-8 border-white shadow-2xl z-20 hidden md:block rtl:right-auto rtl:left-[-3rem]"
            >
              <Image
                src={copy.media.campus2}
                alt="Collaboration"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-bold text-sm uppercase tracking-widest border border-blue-100">
                {copy.campusSpotlight.badge}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-6 leading-tight">
                {copy.campusSpotlight.title} <br />
                <span className="text-blue-600">{copy.campusSpotlight.titleHighlight}</span>
              </h2>
              <p className="text-xl text-gray-600 mt-6 leading-relaxed">
                {copy.campusSpotlight.description}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              {items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 * i }}
                  className="p-6 bg-gray-50 rounded-2xl group hover:bg-blue-600 transition-colors duration-500"
                >
                  <h4 className="font-bold text-gray-900 group-hover:text-white transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 group-hover:text-blue-100 mt-2 transition-colors">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
