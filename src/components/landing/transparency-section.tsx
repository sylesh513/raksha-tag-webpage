import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Archive, HandCoins, CalendarDays } from 'lucide-react';

export function TransparencySection() {
  return (
    <section id="transparency" className="section-padding bg-background">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Our Commitment to Transparency</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We believe in complete openness about our funding and operations.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
           <Card className="shadow-sm hover:shadow-md transition-shadow">
             <CardHeader>
               <HandCoins className="h-8 w-8 text-primary mb-2" />
               <CardTitle>Fund Management</CardTitle>
               <CardDescription>Registration fees and donations are securely invested. Only the interest earned funds our operations.</CardDescription>
             </CardHeader>
             <CardContent>
               <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                  <li>Employee Salaries</li>
                  <li>App & Website Maintenance</li>
                  <li>Office Infrastructure</li>
                  <li>Operational Needs</li>
               </ul>
             </CardContent>
           </Card>

          <Card className="shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
               <CalendarDays className="h-8 w-8 text-primary mb-2" />
               <CardTitle>Monthly Reports</CardTitle>
               <CardDescription>Access detailed financial and operational reports published every month on our website.</CardDescription>
            </CardHeader>
             <CardContent className="flex flex-col space-y-3">
                <p className="text-sm text-muted-foreground">Reports include funds received, expenditures, investments, and project progress.</p>
               <Button asChild variant="outline">
                  {/* Placeholder link - replace with actual link when available */}
                 <Link href="/reports/latest">
                   <FileText className="mr-2 h-4 w-4" /> View Latest Report
                 </Link>
               </Button>
             </CardContent>
          </Card>

          <Card className="shadow-sm hover:shadow-md transition-shadow">
             <CardHeader>
               <Archive className="h-8 w-8 text-primary mb-2" />
               <CardTitle>Archived Records</CardTitle>
               <CardDescription>All past monthly reports are archived and publicly available for review anytime.</CardDescription>
             </CardHeader>
             <CardContent className="flex flex-col space-y-3">
                 <p className="text-sm text-muted-foreground">Ensuring long-term accountability and transparency.</p>
                <Button asChild variant="outline">
                  {/* Placeholder link - replace with actual link when available */}
                 <Link href="/reports/archive">
                   <Archive className="mr-2 h-4 w-4" /> Access Archives
                 </Link>
                </Button>
             </CardContent>
          </Card>
        </div>
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Transparency is the backbone of Raksha Tag.
          </p>
        </div>
      </div>
    </section>
  );
}
