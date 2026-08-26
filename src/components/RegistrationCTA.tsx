'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { REGISTER_URL, type City, type Copy, type Locale } from 'content/getCopy';

type Props = {
  locale: Locale;
  city: City;
  copy: Copy;
};

const EXHIBITOR_TIERS = ['goldenExhibitor', 'silverExhibitor', 'standard'] as const;

export const RegistrationCTA = ({ locale, city, copy }: Props) => {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <section id="register" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto bg-gradient-to-br from-blue-600 to-blue-700 p-12 md:p-16 rounded-3xl shadow-2xl text-white text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full mix-blend-overlay blur-3xl transform translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full mix-blend-overlay blur-3xl transform -translate-x-1/2 translate-y-1/2" />
          </div>

          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              {copy.registration.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-xl text-blue-50 mb-10 max-w-2xl mx-auto"
            >
              {copy.registration.subtitle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center gap-4"
            >
              {copy.registration.visitorPrimary ? (
                <Link
                  href={REGISTER_URL}
                  className="px-10 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  {copy.registration.registerVisitor}
                </Link>
              ) : null}
              {copy.registration.showExhibitorTiers ? (
                <>
                  <button
                    onClick={() => setShowOptions((v) => !v)}
                    className={
                      copy.registration.visitorPrimary
                        ? 'px-10 py-4 bg-white/10 border border-white/30 text-white rounded-xl font-bold text-lg hover:bg-white/20 transition-all'
                        : 'px-10 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1'
                    }
                  >
                    {copy.registration.registerExhibitor}
                  </button>
                  <AnimatePresence>
                    {showOptions && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex flex-col gap-3 w-full max-w-sm overflow-hidden"
                      >
                        {EXHIBITOR_TIERS.map((key) => (
                          <button
                            key={key}
                            className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/30 rounded-xl font-medium text-white text-start transition-colors"
                          >
                            {copy.registration[key]}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : null}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
