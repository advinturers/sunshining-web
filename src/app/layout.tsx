import './globals.css';
import type { Metadata, Viewport } from 'next';
import Link from 'next/link';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://sun-shining.com';
const SITE_NAME = 'Sunshining Professional Company Limited';
const OG_IMAGE = `${SITE_URL}/og-image.png`;

export const viewport: Viewport = {
  themeColor: '#0ea5e9',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_NAME, template: '%s | Sunshining' },
  description:
    'Innovation across technology & lifestyle projects — Advinturers and Drunk Bees. Based in Hong Kong.',
  applicationName: 'Sunshining',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'Sunshining',
    title: SITE_NAME,
    description:
      'Innovation across technology & lifestyle projects — Advinturers and Drunk Bees.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Sunshining — Technology & Lifestyle Projects' }],
    locale: 'en_HK',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description:
      'Innovation across technology & lifestyle projects — Advinturers and Drunk Bees.',
    images: [OG_IMAGE],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/apple-touch-icon.png' }],
  },
  keywords: ['Sunshining', 'Advinturers', 'Drunk Bees', 'wine app', 'Hong Kong', 'technology', 'lifestyle'],
  category: 'technology',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/sunshining-logo.svg`,
    sameAs: ['https://advinturers-web.vercel.app', 'https://www.drunkbees.com'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Room 5, 4/F., Energy Plaza, 92 Granville Road',
      addressLocality: 'Tsim Sha Tsui',
      addressRegion: 'Kowloon',
      addressCountry: 'HK',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        email: 'info@sun-shining.com',
        telephone: '+852 1234 5678',
        areaServed: 'HK',
        availableLanguage: ['en', 'zh-Hant'],
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        {/* Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* JSON-LD (Organization) */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      </head>
      <body>
        {/* Skip link for accessibility */}
        <a href="#main-content" className="sr-only-focusable" style={{ position: 'absolute', left: -9999 }}>
          Skip to content
        </a>

        <header className="header">
          <nav className="container nav" aria-label="Primary">
            <Link href="/" className="brand" aria-label="Sunshining Home">
              <span className="brandMark" aria-hidden="true" />
              <span className="brandName">Sunshining</span>
            </Link>
            <div className="navLinks">
              {/* 同頁錨點可維持 <a> 不會觸發 no-html-link-for-pages */}
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#values">Why Us</a>
              <a href="#contact">Contact</a>
            </div>
          </nav>
        </header>

        <main id="main-content" className="main">
          {children}
        </main>

        <footer className="footer" role="contentinfo">
          <div className="container footerInner">
            <div>© {new Date().getFullYear()} Sunshining Professional Company Limited</div>
            <div className="footerLinks">
              <a href="https://advinturers-web.vercel.app" target="_blank" rel="noreferrer">Advinturers</a>
              <span aria-hidden="true"> | </span>
              <a href="https://www.drunkbees.com" target="_blank" rel="noreferrer">Drunk Bees</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
