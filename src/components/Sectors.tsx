'use client';

import { motion } from 'framer-motion';
import { BookOpen, Building2, GraduationCap, Laptop, Globe, Landmark } from 'lucide-react';
import type { Copy } from 'content/getCopy';

type Props = {
  copy: Copy;
};

const ICONS = [Globe, Laptop, BookOpen, Laptop, Building2, GraduationCap];

export const Sectors = ({ copy }: Props) => {
  if (!copy.sectors.items.length) return null;

  return (
    <section id="sectors" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 block">
            {copy.sectors.label}
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">{copy.sectors.title}</h2>
          {copy.sectors.subtitle ? (
            <p className="text-gray-600">{copy.sectors.subtitle}</p>
          ) : null}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {copy.sectors.items.map((item, i) => {
            const Icon = ICONS[i] ?? Landmark;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-8 rounded-2xl bg-white border border-gray-200 hover:shadow-lg hover:border-blue-200 transition-all group"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
