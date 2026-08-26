'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { cityPath, type City, type Copy, type Locale } from 'content/getCopy';

type Props = {
  locale: Locale;
  city: City;
  copy: Copy;
  variant?: 'light' | 'dark';
  shape?: 'rounded-lg' | 'rounded-full';
  size?: 'default' | 'large';
  className?: string;
};

export const CityToggle = ({
  locale,
  city,
  copy,
  variant = 'dark',
  shape = 'rounded-lg',
  size = 'default',
  className,
}: Props) => {
  const selected =
    variant === 'light' ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white';
  const idle =
    variant === 'light'
      ? 'text-gray-700 hover:text-gray-900'
      : 'text-white/80 hover:text-white';
  const wrap =
    variant === 'light'
      ? 'border-gray-200 bg-gray-100'
      : 'border-white/40 bg-white/10 backdrop-blur-md';
  const itemRadius = shape === 'rounded-full' ? 'rounded-full' : 'rounded-md';
  const sizeClasses =
    size === 'large'
      ? 'p-1 text-sm [&_a]:px-4 [&_a]:py-2'
      : 'p-0.5 text-xs [&_a]:px-3 [&_a]:py-1.5';

  return (
    <div
      className={cn(
        'inline-flex border font-bold',
        sizeClasses,
        shape === 'rounded-full' ? 'rounded-full' : 'rounded-lg',
        wrap,
        className
      )}
      role="group"
      aria-label="Expo city"
    >
      <Link
        href={cityPath(locale, 'damascus')}
        className={cn(
          'transition-colors whitespace-nowrap',
          itemRadius,
          city === 'damascus' ? selected : idle
        )}
        aria-current={city === 'damascus' ? 'page' : undefined}
      >
        {copy.cityToggle.damascus}
      </Link>
      <Link
        href={cityPath(locale, 'aleppo')}
        className={cn(
          'transition-colors whitespace-nowrap',
          itemRadius,
          city === 'aleppo' ? selected : idle
        )}
        aria-current={city === 'aleppo' ? 'page' : undefined}
      >
        {copy.cityToggle.aleppo}
      </Link>
    </div>
  );
};
