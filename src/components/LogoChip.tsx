'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';

type Props = {
  name: string;
  logo?: string;
  subtitle?: string;
  logoScale?: number;
  className?: string;
};

export const LogoChip = ({ name, logo, subtitle, logoScale = 1, className }: Props) => {
  return (
    <div className={cn('flex flex-col items-center gap-3 sm:gap-4 text-center', className)}>
      <div className="w-[118px] sm:w-[140px] lg:w-[156px] aspect-square rounded-full bg-white border border-gray-200 shadow-[0_8px_26px_rgba(4,18,38,0.09)] p-4 sm:p-5 flex items-center justify-center overflow-hidden transition-[transform,box-shadow,border-color] duration-200 group-hover:-translate-y-1 group-hover:shadow-[0_16px_38px_rgba(4,18,38,0.16)] group-hover:border-blue-600/30">
        {logo ? (
          <div
            className="relative w-full h-full"
            style={logoScale !== 1 ? { transform: `scale(${logoScale})` } : undefined}
          >
            <Image src={logo} alt={name} fill className="object-contain object-center" />
          </div>
        ) : (
          <span className="text-sm font-bold text-gray-700 leading-snug px-2">{name}</span>
        )}
      </div>
      <div className="max-w-[182px]">
        <p className="text-sm font-semibold text-gray-900 leading-snug">{name}</p>
        {subtitle ? (
          <p className="text-[11.5px] uppercase tracking-wider text-orange-700 font-semibold mt-1">
            {subtitle}
          </p>
        ) : null}
      </div>
    </div>
  );
};
