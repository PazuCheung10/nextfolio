import type { Metadata } from "next";
import Header from '@/components/nav/Header'
import Footer from '@/components/nav/Footer'
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: '%s | Nextfolio - Frontend Developer',
    default: 'Nextfolio - Frontend Developer',
  },
  description: 'I craft responsive, interactive web experiences with React & Next.js. Specializing in modern frontend development and user experience design.',
  keywords: ['frontend developer', 'react', 'nextjs', 'typescript', 'tailwind', 'web development'],
  authors: [{ name: 'Fung' }],
  creator: 'Fung',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nextfolio.dev',
    siteName: 'Nextfolio - Frontend Developer',
    title: 'Nextfolio - Frontend Developer',
    description: 'I craft responsive, interactive web experiences with React & Next.js.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nextfolio - Frontend Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nextfolio - Frontend Developer',
    description: 'I craft responsive, interactive web experiences with React & Next.js.',
    images: ['/og-image.jpg'],
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
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-950 text-slate-200 antialiased font-sans">
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}