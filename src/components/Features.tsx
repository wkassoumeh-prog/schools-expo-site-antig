'use client';

import { motion } from 'framer-motion';
import {
  Users,
  Target,
  TrendingUp,
  Search,
  Award,
  Laptop,
} from 'lucide-react';
import type { Copy, Locale } from 'content/getCopy';

type Props = {
  locale: Locale;
  copy: Copy;
};

const WHY_KEYS = ['showcaseLatest', 'fosterCompetition', 'introduceParents', 'assistFamilies', 'networkingHub'] as const;
const EXHIBITOR_KEYS = ['strengthenPresence', 'reachThousands', 'increaseEnrollment'] as const;
const WHY_ICONS = [Search, Target, TrendingUp, Laptop, Users];
const EXHIBITOR_ICONS = [Award, Users, TrendingUp];

export const Features = ({ copy }: Props) => {
  const whyExpo = WHY_KEYS.map((key, i) => {
    const Icon = WHY_ICONS[i];
    return { ...copy.whyExpo[key], icon: <Icon className="w-6 h-6" /> };
  });

  const exhibitorBenefits = EXHIBITOR_KEYS.map((key, i) => {
    const Icon = EXHIBITOR_ICONS[i];
    return { ...copy.forExhibitors[key], icon: <Icon className="w-6 h-6" /> };
  });

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div id="why-expo" className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              {copy.whyExpo.title}{' '}
              <span className="text-blue-600">{copy.whyExpo.titleHighlight}</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{copy.whyExpo.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {whyExpo.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-white border border-gray-200 hover:shadow-lg hover:border-blue-200 transition-all group"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{f.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div id="exhibitors">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              {copy.forExhibitors.title}{' '}
              <span className="text-blue-600">{copy.forExhibitors.titleHighlight}</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto" style={{ whiteSpace: 'pre-line' }}>
              {copy.forExhibitors.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {exhibitorBenefits.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className="p-8 rounded-2xl bg-white border border-gray-200 hover:shadow-lg hover:border-blue-200 transition-all group"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{f.title}</h3>
                <p className="text-gray-600 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
