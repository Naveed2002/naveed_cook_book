import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import { CustomCursor } from '@/components/CustomCursor';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Naveed Ahamed | Flutter product developer',
  description:
    'Flutter app developer crafting mobile, SaaS and ERP products for startups and education businesses.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} bg-[#f6f3ee] font-sans text-black antialiased selection:bg-black selection:text-white`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
