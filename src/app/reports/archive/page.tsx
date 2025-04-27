import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Archive } from 'lucide-react';
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';


export default function ArchiveReportPage() {
  return (
     <div className="flex min-h-screen flex-col">
       <Header />
       <main className="flex-1 section-padding bg-secondary">
        <div className="container flex max-w-2xl flex-col items-center">
           <Card className="w-full">
             <CardHeader className="text-center">
                <Archive className="mx-auto h-10 w-10 text-primary mb-4" />
               <CardTitle className="text-2xl md:text-3xl">Archived Reports</CardTitle>
               <CardDescription>
                 Browse through past monthly financial and operational reports.
               </CardDescription>
             </CardHeader>
             <CardContent className="text-center space-y-6">
                <p className="text-muted-foreground">
                   Our archive of past reports is currently under construction.
                </p>
                <p className="font-semibold">
                   Soon, you will be able to access all historical reports here to review our financial transparency over time.
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
