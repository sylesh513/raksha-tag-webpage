import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, ShieldAlert } from 'lucide-react';
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';


export default function PrivacyPolicyPage() {
  return (
     <div className="flex min-h-screen flex-col">
       <Header />
       <main className="flex-1 section-padding bg-secondary">
        <div className="container flex max-w-3xl flex-col items-center">
           <Card className="w-full">
             <CardHeader className="text-center">
                <ShieldAlert className="mx-auto h-10 w-10 text-primary mb-4" />
               <CardTitle className="text-2xl md:text-3xl">Privacy Policy</CardTitle>
               <CardDescription>
                 Understanding how we handle your information.
               </CardDescription>
             </CardHeader>
             <CardContent className="space-y-6">
                 <h3 className="font-semibold text-lg">Information We Collect:</h3>
                 <p className="text-muted-foreground">We collect personal details (Name, DOB, Address, Blood Group) and emergency contact numbers during registration solely for the purpose of providing the RakshaTag service.</p>

                 <h3 className="font-semibold text-lg">How We Use Information:</h3>
                 <p className="text-muted-foreground">Your information is used to generate your unique QR code/ID and to contact your designated emergency contacts in case the QR code is scanned or the ID is used during an emergency. We do not sell or share your personal data with third parties for marketing purposes.</p>

                 <h3 className="font-semibold text-lg">Data Security:</h3>
                 <p className="text-muted-foreground">We implement reasonable security measures to protect your data. However, no system is completely secure.</p>

                 <h3 className="font-semibold text-lg">Emergency Contact Consent:</h3>
                  <p className="text-muted-foreground">By providing emergency contact numbers, you affirm that you have obtained consent from those individuals to be contacted by RakshaTag in emergencies related to you.</p>

                 <h3 className="font-semibold text-lg">Transparency:</h3>
                  <p className="text-muted-foreground">Information regarding donations (name, amount, purpose) may be displayed publicly with consent, as part of our transparency commitment.</p>

                 <h3 className="font-semibold text-lg">Changes to Policy:</h3>
                  <p className="text-muted-foreground">We may update this policy. Changes will be posted on our website.</p>

                 <p className="text-center text-muted-foreground pt-4">This is a simplified overview. A full, legally compliant privacy policy will be available upon launch.</p>

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
