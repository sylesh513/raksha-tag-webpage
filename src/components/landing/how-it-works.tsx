import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScanLine, UserPlus, PhoneCall, Send, HelpCircle } from 'lucide-react';

export function HowItWorksSection() {
  const steps = [
    {
      icon: UserPlus,
      title: 'Register',
      description: 'Sign up easily using your mobile number and provide essential details & emergency contacts.',
    },
    {
      icon: ScanLine,
      title: 'Receive Your Tag',
      description: 'Get a unique QR code and ID. We mail two stickers to your address.',
    },
     {
       icon: HelpCircle,
       title: 'Apply the Tag',
       description: 'Stick the QR code on vehicles, school bags, helmets, or personal belongings.',
     },
    {
      icon: PhoneCall,
      title: 'Emergency Scan',
      description: 'Anyone can scan the QR or call us with the ID in an emergency situation.',
    },
    {
      icon: Send,
      title: 'Instant Alerts',
      description: 'Our system instantly notifies your emergency contacts via call and SMS.',
    },
  ];

  return (
    <section id="how-it-works" className="section-padding bg-background">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">How RakshaTag Works</h2>
          <p className="mt-4 text-lg text-muted-foreground">A simple process for your safety and peace of mind.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {steps.map((step, index) => (
            <Card key={index} className="text-center transition-shadow duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <step.icon className="h-6 w-6" />
                </div>
                <CardTitle>{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
