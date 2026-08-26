import { redirect } from 'next/navigation';
import { cityPath, parseLocale, DEFAULT_CITY } from 'content/getCopy';

type Props = {
  params: Promise<{ locale: string }>;
};

/** /en and /ar redirect to the default city */
export default async function LocaleIndexPage({ params }: Props) {
  const { locale } = await params;
  redirect(cityPath(parseLocale(locale), DEFAULT_CITY));
}
