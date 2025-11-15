import { Shield, Truck, Award, HeadphonesIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

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

// Smooth upscale fade-up variant
const fadeUp = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: "easeOut",
      delay: i * 0.15, // stagger items
    },
  }),
};

export const FeaturesSection = () => {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 1 } }
          }}
          className="text-center space-y-4 mb-12"
        >
          <h2 className="text-4xl font-bold">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
              Ceylon Supplement
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to providing the highest quality supplements with exceptional service
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }} // 🔥 re-trigger every scroll
              variants={fadeUp}
            >
              <Card 
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
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};