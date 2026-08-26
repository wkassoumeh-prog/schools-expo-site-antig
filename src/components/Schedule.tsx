'use client';

import { motion } from 'framer-motion';
import { Clock, MapPin } from 'lucide-react';
import type { Copy, Locale } from 'content/getCopy';
import { LtrText } from './LtrText';

type Props = {
  locale: Locale;
  copy: Copy;
};

export const Schedule = ({ copy }: Props) => {
  const activities = copy.duringVisit.activities;

  return (
    <section id="schedule" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50" />
        <div className="absolute bottom-[20%] right-[-10%] w-96 h-96 bg-indigo-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4 text-gray-900"
          >
            {copy.duringVisit.title}{' '}
            <span className="text-blue-600">{copy.duringVisit.titleHighlight}</span>
          </motion.h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{copy.duringVisit.subtitle}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {activities.map((event, index) => (
            <motion.div
              key={`${event.time}-${event.title}`}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="relative pl-8 rtl:pl-0 rtl:pr-8 md:pl-0 md:rtl:pr-0"
            >
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-blue-100 -translate-x-1/2">
                <div className="absolute top-8 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white bg-blue-600 shadow-md transform scale-100" />
              </div>
              <div className="md:hidden absolute left-0 rtl:left-auto rtl:right-0 top-0 bottom-0 w-px bg-blue-100">
                <div className="absolute top-8 left-0 rtl:left-auto rtl:right-0 -translate-x-1/2 rtl:translate-x-1/2 w-4 h-4 rounded-full border-4 border-white bg-blue-600 shadow-md" />
              </div>

              <div
                className={`md:flex items-center justify-between mb-12 w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="hidden md:block w-5/12" />
                <div className="md:w-5/12 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center gap-2 text-blue-600 font-bold mb-2">
                    <Clock className="w-4 h-4" />
                    <LtrText value={event.time} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{event.desc}</p>
                  <div className="flex items-center gap-2 text-gray-500 text-xs font-semibold uppercase tracking-wider">
                    <MapPin className="w-3 h-3" />
                    {event.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
