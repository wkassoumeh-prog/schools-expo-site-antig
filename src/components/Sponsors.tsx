'use client';

import { motion } from 'framer-motion';
import { LogoChip } from '@/components/LogoChip';
import type { Copy } from 'content/getCopy';

type Props = {
  copy: Copy;
};
function sponsorLogoScale(logo?: string) {
  return logo?.includes('halab-alyoum-tv') ? 0.7 : 1;
}
export const Sponsors = ({ copy }: Props) => {
  if (!copy.sponsors.groups.length) return null;

  return (
    <section id="sponsors" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 block">
            {copy.sponsors.label}
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">{copy.sponsors.title}</h2>
          {copy.sponsors.subtitle ? (
            <p className="text-gray-600">{copy.sponsors.subtitle}</p>
          ) : null}
        </div>

        <div className="space-y-14">
          {copy.sponsors.groups.map((group) => (
            <div key={group.label}>
              <h3 className="text-lg font-bold text-gray-900 mb-6 text-center">{group.label}</h3>
              <div className="flex flex-wrap justify-center gap-x-4 gap-y-7 sm:gap-x-8 sm:gap-y-8">
                {group.items.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="group w-[134px] sm:w-[182px]"
                  >
                    <LogoChip
                      name={item.name}
                      logo={item.logo}
                      subtitle={item.role}
                      logoScale={sponsorLogoScale(item.logo)}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
