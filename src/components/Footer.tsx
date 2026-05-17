'use client';

import Link from 'next/link';
import { GraduationCap } from 'lucide-react';
import { LtrText } from '@/components/LtrText';
import type { Copy, Locale } from 'content/getCopy';
type Props = {
  locale: Locale;
  copy: Copy;
};

export const Footer = ({ locale, copy }: Props) => {
  const base = `/${locale}`;

  return (
    <footer className="bg-slate-900 text-white py-20 border-t border-slate-800">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 border-b border-slate-800 pb-16">
          {/* 1. Brand */}
          <div>
            <div className="flex items-center mb-6 h-16">
              <Link href={base} className="flex items-center gap-2 font-bold text-2xl group">
                <div className="p-2 bg-blue-600 rounded-lg group-hover:bg-blue-700 transition-colors shadow-lg flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold transition-colors text-blue-600 whitespace-nowrap">
                  {copy.header.brand}{' '}
                  <span className="text-amber-500">{copy.header.brandHighlight}</span>
                </span>
              </Link>
            </div>
            <p className="text-slate-400 leading-relaxed">
              {copy.footer.tagline}
            </p>
          </div>

          {/* 2. Event venue */}
          <div>
            <div className="flex items-center mb-4 sm:mb-6 h-auto">
              <h4 className="text-lg font-bold text-white uppercase tracking-wider">{copy.footer.venueTitle}</h4>
            </div>
            <div className="text-slate-400 space-y-4">
              <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p style={{ whiteSpace: 'pre-line' }}>{copy.footer.address}</p>
              </div>
            </div>
          </div>

          {/* 3. Event date */}
          <div>
            <div className="flex items-center mb-4 sm:mb-6 h-auto">
              <h4 className="text-lg font-bold text-white uppercase tracking-wider">{copy.footer.dateTitle}</h4>
            </div>
            <div className="text-slate-400">
              <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10m-11 9h12a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v11a2 2 0 002 2z" />
                </svg>
                <p><LtrText value={copy.footer.openingDates} /></p>
              </div>
            </div>
          </div>

          {/* 4. Contact */}
          <div>
            <div className="flex items-center mb-4 sm:mb-6 h-auto">
              <h4 className="text-lg font-bold text-white uppercase tracking-wider">{copy.footer.contact}</h4>
            </div>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${copy.footer.email}`} className="hover:text-amber-500 transition-colors">
                  <LtrText value={copy.footer.email} />
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href={`tel:${copy.footer.phone.replace(/\s/g, '')}`} className="hover:text-amber-500 transition-colors">
                  <LtrText value={copy.footer.phone} />
                </a>
              </li>
            </ul>
          </div>

          {/* 5. Vulcan */}
          <div className="flex items-center sm:justify-center">
            <div className="flex items-center sm:mb-6 min-h-16">
              <img
                src="/Vulcan.png"
                alt={copy.footer.organizerName}
                className="h-[8.1rem] sm:h-[9.45rem] w-auto max-w-full object-contain object-start opacity-90"
              />
            </div>
          </div>
        </div>

        <div className="pt-10 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>{copy.footer.copyright}</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="https://www.facebook.com/profile.php?id=61586959178596" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              {copy.footer.facebook}
            </a>
            <a href="https://www.instagram.com/edugate2026?igsh=Z2thaGVrcDZ6ODE=" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              {copy.footer.instagram}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
