import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import CookieBanner from '@/components/cookie-banner';
import ClientConsentAnalytics from '@/components/client-consent-analytics';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TailorCVs - AI Resume Tailoring',
  description: 'Tailor your resume to any job description with AI-powered analysis and suggestions.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        {/* Consent-aware analytics: loaded only when user accepts cookies */}
      </head>
      <body className={inter.className} suppressHydrationWarning>
        {/* Client-side consent-aware analytics loader */}
        <ClientConsentAnalytics />
        <div className="min-h-screen flex flex-col">
          <div className="flex-grow">{children}</div>
          <footer className="w-full border-t py-4">
            <div className="container mx-auto px-4 text-sm text-muted-foreground flex items-center justify-center gap-4">
              <a className="underline" href="/about">About</a>
              <a className="underline" href="/blog">Blog</a>
              <a className="underline" href="/privacy">Privacy</a>
              <a className="underline" href="/terms">Terms</a>
              <a className="underline" href="/contact">Contact</a>
            </div>
          </footer>
          <Toaster />
          <CookieBanner />
        </div>
      </body>
    </html>
  );
}
