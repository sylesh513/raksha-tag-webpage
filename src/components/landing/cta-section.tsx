import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Gift, ArrowRight } from 'lucide-react';

export function CtaSection() {
  return (
    <section id="register" className="section-padding relative overflow-hidden bg-gradient-to-r from-primary to-blue-600 text-primary-foreground">
      {/* Overlay */}
      <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/60 backdrop-blur-sm">
        <div className="rounded-lg bg-background/20 p-6 text-center shadow-xl">
          <h3 className="text-4xl font-bold text-primary-foreground">
            Coming Soon...
          </h3>
           <p className="mt-2 text-lg text-primary-foreground/90">Registration opens shortly!</p>
        </div>
      </div>

      {/* Original Content (Visually obscured by overlay) */}
      <div className="container relative z-0 text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Ready to enhance your safety?
        </h2>
        <p className="mt-4 text-lg opacity-90">
          Register for your RakshaTag today. Join our community safety initiative.
        </p>
        <div className="mt-8 flex flex-col items-center space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <Button size="lg" variant="secondary" asChild className="group bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
            {/* Link is present but effectively disabled by overlay */}
            <Link href="/register">
              Register Now
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
             {/* Link is present but effectively disabled by overlay */}
            <Link href="/support">
               <Gift className="mr-2 h-5 w-5" />
              Support the Cause
            </Link>
          </Button>
        </div>
         <p className="mt-6 text-sm opacity-80">
           Refer friends and earn rewards for helping us grow this vital safety network!
         </p>
      </div>
    </section>
  );
}
