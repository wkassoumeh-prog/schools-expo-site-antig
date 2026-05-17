'use client';

import { cn } from '@/lib/utils';

type LtrTextProps = {
  value: string;
  className?: string;
};

/** Wrap LTR content (phones, emails, URLs, Latin names) inside RTL for correct display */
export function LtrText({ value, className }: LtrTextProps) {
  return (
    <span dir="ltr" style={{ unicodeBidi: 'embed' }} className={cn('ltr-in-rtl', className)}>
      {value}
    </span>
  );
}
