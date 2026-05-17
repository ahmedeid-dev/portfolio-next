import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  /* config options here */
  i18n: {
    locales: ['en', 'ar'],
    defaultLocale: 'en',
    // direction: { ar: 'rtl' },
  },
};
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
