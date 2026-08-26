type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }];
}

/** Locale layout – root layout handles html/body/lang/dir/fonts */
export default async function LocaleLayout({ children }: Props) {
  return <>{children}</>;
}
