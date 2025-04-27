import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, FileCheck2 } from 'lucide-react';
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';

export default function TermsOfServicePage() {
  return (
     <div className="flex min-h-screen flex-col">
       <Header />
       <main className="flex-1 section-padding bg-secondary">
        <div className="container flex max-w-3xl flex-col items-center">
           <Card className="w-full">
             <CardHeader className="text-center">
                <FileCheck2 className="mx-auto h-10 w-10 text-primary mb-4" />
               <CardTitle className="text-2xl md:text-3xl">Terms of Service</CardTitle>
               <CardDescription>
                 Guidelines for using the RakshaTag service.
               </CardDescription>
             </CardHeader>
             <CardContent className="space-y-6">
                <h3 className="font-semibold text-lg">Service Description:</h3>
                 <p className="text-muted-foreground">RakshaTag provides a QR code and ID system linked to user-provided emergency contact information to facilitate communication during emergencies. It is a public service initiative which may involve a nominal registration fee to cover material and processing costs.</p>

                 <h3 className="font-semibold text-lg">User Responsibilities:</h3>
                 <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                    <li>You are responsible for providing accurate and up-to-date personal and emergency contact information.</li>
                    <li>You must obtain consent from your emergency contacts before providing their details.</li>
                    <li>You are responsible for the appropriate placement and use of the provided QR code stickers.</li>
                    <li>You agree to pay the applicable registration fee upon signup.</li>
                 </ul>

                 <h3 className="font-semibold text-lg">Limitations of Liability:</h3>
                 <p className="text-muted-foreground">RakshaTag aims to facilitate communication but does not guarantee successful contact or specific outcomes in an emergency. We are not responsible for the actions of individuals who scan the code or the response of emergency contacts. The effectiveness of the service depends on factors beyond our control (e.g., network availability, scanner functionality, responsiveness of contacts).</p>

                 <h3 className="font-semibold text-lg">Referral System:</h3>
                  <p className="text-muted-foreground">Rewards/commissions for referrals are offered as a token of appreciation and are subject to terms outlined separately. RakshaTag reserves the right to modify or discontinue the referral program.</p>

                 <h3 className="font-semibold text-lg">Service Availability:</h3>
                  <p className="text-muted-foreground">We strive to maintain service availability but do not guarantee uninterrupted access.</p>

                 <h3 className="font-semibold text-lg">Changes to Terms:</h3>
                  <p className="text-muted-foreground">We may update these terms. Changes will be posted on our website.</p>

                  <p className="text-center text-muted-foreground pt-4">This is a simplified overview. Full, legally compliant terms will be available upon launch.</p>

                 <div className="text-center pt-4">
                     <Button asChild variant="outline">
                       <Link href="/">
                         <ArrowLeft className="mr-2 h-4 w-4" /> Go Back to Homepage
                       </Link>
                     </Button>
                 </div>
             </CardContent>
           </Card>
         </div>
       </main>
       <Footer />
     </div>
  );
}
