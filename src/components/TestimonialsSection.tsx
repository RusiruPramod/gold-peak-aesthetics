import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Kasun Perera",
    role: "Professional Bodybuilder",
    rating: 5,
    text: "Ceylon Supplement has transformed my training. The quality is unmatched, and I've seen incredible gains in just 3 months!",
    image: "👨‍💼"
  },
  {
    name: "Nimal Fernando",
    role: "Fitness Enthusiast",
    rating: 5,
    text: "Best supplements in Sri Lanka! Fast delivery, authentic products, and amazing customer service. Highly recommended!",
    image: "💪"
  },
  {
    name: "Rajesh Kumar",
    role: "Personal Trainer",
    rating: 5,
    text: "I recommend Ceylon Supplement to all my clients. The Kevin Levrone series is exceptional for serious athletes.",
    image: "🏋️"
  },
  {
    name: "Saman Silva",
    role: "Gym Owner",
    rating: 5,
    text: "We stock Ceylon Supplement products exclusively at our gym. Our members love the quality and results!",
    image: "⭐"
  }
];

// 🔥 Smooth fade-up animation
const fadeUp = {
  hidden: { opacity: 0, y: 50, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
      delay: i * 0.15,
    },
  }),
};

export const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">

        {/* ---- HEADER ---- */}
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
            What Our{" "}
            <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
              Champions
            </span>{" "}
            Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied athletes who trust Ceylon Supplement for their fitness journey
          </p>
        </motion.div>

        {/* ---- GRID ---- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }} // 🔥 triggers every scroll
              variants={fadeUp}
            >
              <Card className="border-border/50 hover:border-gold/50 transition-all duration-300 hover:shadow-[var(--shadow-gold)]">
                <CardContent className="p-6 space-y-4">
                  
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">{testimonial.image}</div>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>

                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                    ))}
                  </div>

                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 h-6 w-6 text-gold/20" />
                    <p className="text-sm text-muted-foreground leading-relaxed pl-4">
                      {testimonial.text}
                    </p>
                  </div>

                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
