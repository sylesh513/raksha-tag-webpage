import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, FileText } from 'lucide-react';
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';


export default function LatestReportPage() {
  return (
     <div className="flex min-h-screen flex-col">
       <Header />
       <main className="flex-1 section-padding bg-secondary">
        <div className="container flex max-w-2xl flex-col items-center">
           <Card className="w-full">
             <CardHeader className="text-center">
                <FileText className="mx-auto h-10 w-10 text-primary mb-4" />
               <CardTitle className="text-2xl md:text-3xl">Latest Financial Report</CardTitle>
               <CardDescription>
                 Access our most recent monthly financial and operational update.
               </CardDescription>
             </CardHeader>
             <CardContent className="text-center space-y-6">
                <p className="text-muted-foreground">
                  The latest report is currently being prepared and will be published here soon, typically within the first week of the month.
                </p>
                <p className="font-semibold">
                  Please check back shortly for detailed information on funds, expenditures, investments, and project progress.
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
