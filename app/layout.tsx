import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { t } from '@/lib/i18n';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const translations = t();

export const metadata: Metadata = {
  metadataBase: new URL('https://martijnvanhouten.com'),
  title: {
    default: translations.meta.siteTitle,
    template: `%s | Martijn van Houten`,
  },
  description: translations.meta.siteDescription,
  keywords: [
    'webontwikkelaar',
    'webdesign',
    'Next.js',
    'React',
    'TypeScript',
    'freelance',
    'Nederland',
  ],
  authors: [{ name: 'Martijn van Houten' }],
  creator: 'Martijn van Houten',
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: 'https://martijnvanhouten.com',
    siteName: 'Martijn van Houten',
    title: translations.meta.siteTitle,
    description: translations.meta.siteDescription,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Martijn van Houten - Webontwikkelaar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: translations.meta.siteTitle,
    description: translations.meta.siteDescription,
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
