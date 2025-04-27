import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, HandCoins } from 'lucide-react';
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';


export default function SupportPage() {
  return (
     <div className="flex min-h-screen flex-col">
       <Header />
       <main className="flex-1 section-padding bg-secondary">
        <div className="container flex max-w-2xl flex-col items-center">
           <Card className="w-full">
             <CardHeader className="text-center">
               <HandCoins className="mx-auto h-10 w-10 text-primary mb-4" />
               <CardTitle className="text-2xl md:text-3xl">Support RakshaTag</CardTitle>
               <CardDescription>
                  Help us sustain and expand this public safety service.
               </CardDescription>
             </CardHeader>
             <CardContent className="text-center space-y-6">
                <p className="text-muted-foreground">
                   Raksha Tag is a public service initiative sustained by registration fees and the generosity of supporters like you.
                   We are currently setting up our donation system.
                </p>
                 <p className="font-semibold">
                   Registration fees cover the cost of materials and processing. Donations help us expand our reach and cover operational costs derived from investment interest.
                 </p>
                 <p className="text-sm text-muted-foreground">
                   All funds (registration fees and donations) are managed transparently and reported on our website monthly.
                 </p>
                 <Button asChild variant="outline">
                   <Link href="/">
                     <ArrowLeft className="mr-2 h-4 w-4" /> Go Back to Homepage
                   </Link>
                 </Button>
             </CardContent>
           </Card>
         </div>
       </main>
       <Footer />
     </div>
  );
}
