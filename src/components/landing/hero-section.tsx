import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-background to-secondary">
      {/* Increased gap on md and lg screens */}
      <div className="container mx-auto grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
        {/* Text Content */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Stay Safe with <span className="text-primary">RakshaTag</span>
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            Your QR-Based Emergency Safety & Contact System. Helping good samaritans reach your loved ones instantly in emergencies.
          </p>
          {/* Buttons */}
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <Button size="lg" asChild className="group bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 transition-all duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
              <Link href="#register">
                Get Your RakshaTag
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#how-it-works">Learn More</Link>
            </Button>
          </div>
          {/* Badge */}
           <div className="flex items-center space-x-2 pt-4 text-sm text-muted-foreground">
             <ShieldCheck className="h-5 w-5 text-primary" />
             <span>A Public Service Initiative</span>
           </div>
        </div>
        {/* Image - Added left padding on md+ screens to shift slightly right */}
        <div className="relative w-full lg:max-w-none md:pl-4 lg:pl-8">
           <Image
             src='/assets/full-logo.png' // Changed image seed
             alt="RakshaTag QR Code Example"
             width={600}
             height={400}
             className="rounded-lg shadow-xl w-full object-cover aspect-video" // Added w-full and object-cover
             priority // Load the hero image faster
           />
           <div className="absolute -bottom-4 -right-4 hidden rounded-lg bg-accent p-3 text-accent-foreground shadow-lg md:block">
             <p className="text-sm font-semibold">Scan in Emergency</p>
           </div>
         </div>
      </div>
    </section>
  );
}
