'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

/** Syncs html dir/lang with current locale on client-side navigation (prevents sticky RTL/LTR) */
export function DocumentDirSync() {
  const pathname = usePathname();

  useEffect(() => {
    const locale = pathname?.startsWith('/ar') ? 'ar' : 'en';
    const isRtl = locale === 'ar';
    const html = document.documentElement;

    html.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
    html.setAttribute('lang', locale === 'ar' ? 'ar' : 'en');
  }, [pathname]);

  return null;
}
