import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { RakshaTagLogo } from '@/components/icons';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            {/* Adjust width/height if needed, otherwise defaults from component apply */}
            <RakshaTagLogo className="h-auto" width={120} height={40} />
          </Link>
        </div>
        {/* Mobile Logo */}
        <div className="flex flex-1 items-center justify-between space-x-2 md:hidden">
          <Link href="/" className="flex items-center space-x-2">
             {/* Adjust width/height if needed */}
             <RakshaTagLogo className="h-auto" width={120} height={40} />
          </Link>
        </div>
         {/* Desktop Nav / Right side */}
        <div className="hidden flex-1 items-center justify-end space-x-2 md:flex">
           <Button asChild>
             <Link href="#register">Register Now</Link>
           </Button>
        </div>
         {/* Mobile Nav Trigger (optional, if needed later) */}
         {/* <button className="flex items-center space-x-2 md:hidden">
           <Menu className="h-6 w-6" />
         </button> */}
      </div>
    </header>
  );
}
