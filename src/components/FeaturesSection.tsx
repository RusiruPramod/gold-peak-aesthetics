import { Shield, Truck, Award, HeadphonesIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "100% Authentic",
    description: "All products are genuine and directly sourced from authorized distributors"
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Free shipping on orders over LKR 5,000 with express delivery options"
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Lab-tested supplements meeting international quality standards"
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Expert customer service ready to assist you anytime, anywhere"
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-border/50 hover:border-gold/50 transition-all duration-300 group"
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 group-hover:bg-gold/20 transition-colors">
                  <feature.icon className="h-8 w-8 text-gold" />
                </div>
                <h3 className="font-bold text-lg">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
