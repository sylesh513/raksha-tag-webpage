import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"; // Import Toaster

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Raksha Tag - Emergency Safety & Contact System',
  description: 'Raksha Tag is a public service initiative providing QR-based ID tags linking to emergency contacts for instant help in emergencies.',
  keywords: [
    'Raksha Tag',
    'Emergency Contact',
    'QR Code ID',
    'Safety Tag',
    'Personal Safety',
    'Emergency Alert',
    'Lost and Found',
    'Medical ID',
    'Child Safety',
    'Senior Safety',
    'Pet Tag',
    'Contactless ID',
    'Emergency Response',
    'Identity Tag',
    'Safety Solution',
    'Public Safety',
    'Quick Response Code',
    'Digital ID Tag',
    'Family Safety',
    'Help Tag'
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Toaster /> {/* Add Toaster */}
      </body>
    </html>
  );
}
