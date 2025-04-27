import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';


export default function RegisterPage() {
  return (
     <div className="flex min-h-screen flex-col">
       <Header />
       <main className="flex-1 section-padding bg-secondary">
        <div className="container flex max-w-2xl flex-col items-center">
           <Card className="w-full">
             <CardHeader className="text-center">
               <CardTitle className="text-2xl md:text-3xl">Register for RakshaTag</CardTitle>
               <CardDescription>
                 Join our community safety initiative. Registration is currently under development.
               </CardDescription>
             </CardHeader>
             <CardContent className="text-center space-y-6">
                <p className="text-muted-foreground">
                  We are working hard to bring the full registration process online soon.
                  This will include mobile OTP verification, details collection, payment, and QR code generation.
                </p>
                <p className="font-semibold">Thank you for your interest and patience!</p>
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
