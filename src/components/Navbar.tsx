'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Landmark, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import type { Copy, Locale } from 'content/getCopy';

type Props = {
  locale: Locale;
  copy: Copy;
};

const HEADER_OFFSET = 80;

function scrollToSection(hash: string) {
  if (!hash) return;
  const id = hash.startsWith('#') ? hash.slice(1) : hash;
  const el = document.getElementById(id);
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}

export const Navbar = ({ locale, copy }: Props) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setIsScrolledPastHero(window.scrollY > window.innerHeight - 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (pathname && window.location.hash) {
      scrollToSection(window.location.hash);
    }
  }, [pathname]);

  const base = `/${locale}`;
  const otherLocale: Locale = locale === 'en' ? 'ar' : 'en';
  const handleLocaleSwitch = () => {
    const hash = window.location.hash;
    router.push(`/${otherLocale}${hash}`);
    setIsMobileMenuOpen(false);
  };

  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    if (pathname === base) {
      e.preventDefault();
      scrollToSection(hash);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b',
        isScrolledPastHero
          ? 'bg-black/30 backdrop-blur-xl border-white/10 py-3 shadow-2xl'
          : isScrolled
          ? 'bg-black/20 backdrop-blur-xl border-white/10 py-3 shadow-xl'
          : 'bg-transparent border-transparent py-6'
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href={base} className="flex items-center gap-2 group">
          <div className="p-2 bg-blue-600 rounded-lg group-hover:bg-blue-700 transition-colors shadow-lg">
            <Landmark className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold transition-colors text-blue-600 whitespace-nowrap">
            {copy.header.brand}{' '}
            <span className="text-white">{copy.header.brandHighlight}</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href={`${base}#why-expo`} className="text-sm font-bold transition-colors text-white hover:text-blue-300" onClick={(e) => handleSectionClick(e, '#why-expo')}>
            {copy.header.whyEduGate}
          </Link>
          <Link href={`${base}#schools`} className="text-sm font-bold transition-colors text-white hover:text-blue-300" onClick={(e) => handleSectionClick(e, '#schools')}>
            {copy.header.exhibitors}
          </Link>
          <Link href={`${base}#schedule`} className="text-sm font-bold transition-colors text-white hover:text-blue-300" onClick={(e) => handleSectionClick(e, '#schedule')}>
            {copy.header.visitInfo}
          </Link>
          <Link href={`${base}#faq`} className="text-sm font-bold transition-colors text-white hover:text-blue-300" onClick={(e) => handleSectionClick(e, '#faq')}>
            {copy.header.faq}
          </Link>
          <Link href={`${base}#contact`} className="text-sm font-bold transition-colors text-white hover:text-blue-300" onClick={(e) => handleSectionClick(e, '#contact')}>
            {copy.header.contactUs}
          </Link>
          <button
            type="button"
            onClick={handleLocaleSwitch}
            className="text-sm font-bold transition-colors text-white/90 hover:text-white px-2 py-1 rounded border border-white/40"
          >
            {locale === 'en' ? 'العربية' : 'English'}
          </button>
          <Link
            href={`${base}#register`}
            className="px-6 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/40"
            onClick={(e) => handleSectionClick(e, '#register')}
          >
            {copy.header.registerNow}
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 transition-colors text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 p-6 flex flex-col gap-4 shadow-xl"
        >
          <Link href={`${base}#why-expo`} className="text-gray-900 font-semibold" onClick={(e) => handleSectionClick(e, '#why-expo')}>
            {copy.header.whyEduGate}
          </Link>
          <Link href={`${base}#schools`} className="text-gray-900 font-semibold" onClick={(e) => handleSectionClick(e, '#schools')}>
            {copy.header.exhibitors}
          </Link>
          <Link href={`${base}#schedule`} className="text-gray-900 font-semibold" onClick={(e) => handleSectionClick(e, '#schedule')}>
            {copy.header.visitInfo}
          </Link>
          <Link href={`${base}#faq`} className="text-gray-900 font-semibold" onClick={(e) => handleSectionClick(e, '#faq')}>
            {copy.header.faq}
          </Link>
          <Link href={`${base}#contact`} className="text-gray-900 font-semibold" onClick={(e) => handleSectionClick(e, '#contact')}>
            {copy.header.contactUs}
          </Link>
          <button
            type="button"
            onClick={handleLocaleSwitch}
            className="text-left text-gray-900 font-semibold w-full"
          >
            {locale === 'en' ? 'العربية' : 'English'}
          </button>
          <Link
            href={`${base}#register`}
            className="w-full py-3 bg-blue-600 text-white text-center rounded-lg font-bold"
            onClick={(e) => handleSectionClick(e, '#register')}
          >
            {copy.header.registerNow}
          </Link>
        </motion.div>
      )}
    </nav>
  );
};
