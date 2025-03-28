import { BASE_URL } from '@/lib/constants';

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/'
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL
  };
}
