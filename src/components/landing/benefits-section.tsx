import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { HeartHandshake, Users, Plane, Car, Accessibility, Smile } from 'lucide-react'; // Changed Seniors to Accessibility

export function BenefitsSection() {
  const benefits = [
    { icon: Users, title: 'Children & Students', description: 'Ensure quick contact if your child gets lost or needs help.' },
    { icon: Accessibility, title: 'Senior Citizens', description: 'Provide vital info for seniors, especially those with medical conditions.' }, // Changed Seniors to Accessibility
    { icon: Plane, title: 'Travelers', description: 'Add a layer of safety during your journeys, home or abroad.' },
    { icon: Car, title: 'Vehicle Owners', description: 'Help identify owners in case of accidents or parking issues.' },
    { icon: HeartHandshake, title: 'Community Safety', description: 'Empower bystanders to help effectively in emergencies.' },
    { icon: Smile, title: 'Peace of Mind', description: 'Know that your loved ones can be reached quickly when needed.' },
  ];

  return (
    <section className="section-padding bg-secondary">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Who Can Benefit?</h2>
          <p className="mt-4 text-lg text-muted-foreground">RakshaTag provides crucial support for everyone.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <Card key={index} className="flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-md">
              <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                 <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
                   <benefit.icon className="h-5 w-5" />
                 </div>
                 <CardTitle className="text-lg">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
