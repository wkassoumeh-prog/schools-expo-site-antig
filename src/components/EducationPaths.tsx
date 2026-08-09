'use client';

import { motion } from 'framer-motion';
import { BookOpen, Laptop, Clock, Award } from 'lucide-react';
import NextImage from 'next/image';
import type { Copy, Locale } from 'content/getCopy';

type Props = {
  locale: Locale;
  copy: Copy;
};

const STEP_KEYS = ['saveTime', 'accurateInfo', 'compareSchools', 'exclusiveOffers'] as const;

export const EducationPaths = ({ locale, copy }: Props) => {
  const steps = STEP_KEYS.map((key) => {
    const step = copy.whyParents[key];
    const images = [
      'https://images.unsplash.com/photo-1753715613651-749ef230482c?q=80&w=2070',
      '/images/accurate-information.jpg',
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070',
      'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=2070',
    ];
    const icons = [<Clock className="w-8 h-8" />, <BookOpen className="w-8 h-8" />, <Laptop className="w-8 h-8" />, <Award className="w-8 h-8" />];
    const idx = STEP_KEYS.indexOf(key);
    return { ...step, image: images[idx], icon: icons[idx] };
  });

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 block"
            >
              {copy.whyParents.label}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
            >
              {copy.whyParents.title} <br />
              <span className="text-blue-600">{copy.whyParents.titleHighlight}</span>
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="group"
            >
              <div className="relative h-64 mb-8 rounded-3xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:-translate-y-4">
                <NextImage
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-blue-600/20 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute bottom-6 left-6 p-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl text-blue-600">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const ImageBanner = ({ copy }: Props) => {
  return (
    <section id="about" className="py-12 sm:py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative min-h-[460px] sm:min-h-[500px] md:h-[600px] rounded-2xl sm:rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.1)] flex items-end"
        >
          <NextImage
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070"
            alt="EDUGATE EXPO"
            fill
            className="object-cover transition-transform duration-[2s] hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent" />
          <div className="relative z-10 w-full p-4 sm:p-8 md:p-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-black/40 md:bg-white/10 backdrop-blur-xl border border-white/20 p-5 sm:p-8 md:p-12 rounded-2xl sm:rounded-[2rem] max-w-3xl"
            >
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-6 leading-tight">
                {copy.aboutExpo.title}
              </h2>
              <p className="text-sm sm:text-lg md:text-xl text-gray-100 sm:text-gray-200 leading-relaxed">
                {copy.aboutExpo.description}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
