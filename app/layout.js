import { Cabin } from 'next/font/google';

import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import { ViewTransitions } from 'next-view-transitions';

import { BASE_URL } from '@/lib/constants';

import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

import './globals.css';

const cabin = Cabin({
  subsets: ['latin'],
  display: 'swap'
});
export const viewport = {
  colorScheme: 'only dark',
  themeColor: '#1A1F2A'
};
export async function generateMetadata() {
  return {
    referrer: 'origin',
    pageType: 'Portfolio',
    other: {
      'page-type': 'Portfolio',
      copyright: 'Mikka Ella Gabucan',
      audience: 'Everyone',
      'itemProp:name': 'Mikka Ella Gabucan | Networking Enthusiast',
      'itemProp:description':
        'Mikka Ella focuses on project managing and a networking enthusiast based in Iloilo, Philippines',
      'itemProp:image': `${BASE_URL}/opengraph-image.png`
    },
    metadataBase: new URL(BASE_URL),

    title: {
      default: 'Mikka Ella Gabucan | Networking Enthusiast',
      template: '%s | Mikka Ella Gabucan'
    },
    verification: {
      google: 'process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION'
    },

    description:
      'Building impactful web apps with React & Next.js. Passionate about open source, collaboration, and managing projects from idea to launch. Let’s connect and create something great!',

    applicationName: 'Mikka Ella Gabucan',

    keywords: [
      'Ella',
      'Ella uap',
      'Mikka Ella Gabucan',
      'Ella website',
      'Ella bd',
      'Ella portfolio',
      'networking enthusiast',
      'project managing',
      'React.js',
      'Next.js',
      'TailwindCSS',
      'Philippines',
      'open source contributor'
    ],
    authors: [{ name: 'Mikka Ella Gabucan', url: BASE_URL }],
    creator: 'Mikka Ella Gabucan',
    publisher: 'Mikka Ella Gabucan',

    openGraph: {
      title: 'Mikka Ella Gabucan',
      description:
        'Building impactful web apps with React & Next.js. Passionate about open source, collaboration, and managing projects from idea to launch. Let’s connect and create something great!',
      authors: ['Mikka Ella Gabucan'],
      url: BASE_URL,
      siteName: 'Mikka Ella Gabucan',
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: `${BASE_URL}/opengraph-image.png`,
          width: 1200,
          height: 630,
          alt: 'Mikka Ella Gabucan | Networking Enthusiast',
          type: 'image/png'
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Mikka Ella Gabucan',
      description:
        'Building impactful web apps with React & Next.js. Passionate about open source, collaboration, and managing projects from idea to launch. Let’s connect and create something great!',
      images: [`${BASE_URL}/opengraph-image.png`],
      creator: '@connectshafin',
      site: '@connectshafin',
      url: BASE_URL
    },
    icons: {
      icon: '/favicon.ico'
    },
    manifest: `${BASE_URL}/manifest.json`,
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false
      }
    },
    languages: {
      'en-US': '/en-US'
    }
  };
}

export default function RootLayout({ children }) {
  return (
    <ViewTransitions>
      <html lang="en" className={`${cabin.className} h-full scroll-smooth`}>
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GA_TRACKING_ID} />
        <body className="antialiased">
          <Navbar />
          <main className="relative isolate overflow-hidden">
            <div className="mx-auto min-h-svh w-full max-w-[50rem] px-5 py-3 pt-16 md:px-10 lg:px-0">
              {children}
            </div>
          </main>
          <Footer />
        </body>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_TRACKING_ID} />
      </html>
    </ViewTransitions>
  );
}
