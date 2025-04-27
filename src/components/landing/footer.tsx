import Link from 'next/link';
import { RakshaTagLogo } from '@/components/icons';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container py-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center space-x-2">
            {/* Adjust width/height if needed */}
            <RakshaTagLogo className="h-auto" width={100} height={33} />
             <p className="text-sm text-muted-foreground">&copy; {currentYear} Raksha Tag. All rights reserved.</p>
          </div>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <Link href="/privacy-policy" className="hover:text-primary">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-primary">Terms of Service</Link>
            <Link href="mailto:admin@rakshatag.com" className="hover:text-primary">Contact Us</Link>
          </div>
        </div>
        <div className="mt-6 text-center text-xs text-muted-foreground">
          <p>Raksha Tag is a public service initiative.</p>
           <p>QR Code and ID system designed for emergency contact facilitation.</p>
        </div>
      </div>
    </footer>
  );
}
