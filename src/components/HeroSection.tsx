import { useRef } from "react";
import { Button } from "@/components/ui/button";
import premiumCollectionBanner from "@/assets/premium-collection-banner.jpg";
import muscletechMass from "@/assets/products/muscletech-mass.jpg";
import dymatizeSuper from "@/assets/products/dymatize-super.jpg";
import musclemedsCarnivor from "@/assets/products/musclemeds-carnivor.jpg";
import levroneAnabolic from "@/assets/products/levrone-anabolic.jpg";
import levroneGold from "@/assets/products/levrone-gold.jpg";
import appliedCritical from "@/assets/products/applied-critical.jpg";
import ronnieKing from "@/assets/products/ronnie-king.jpg";
import innerArmour from "@/assets/products/inner-armour.jpg";
import nutrexMass from "@/assets/products/nutrex-mass.jpg";
import coreChamps from "@/assets/products/core-champs.jpg";
import { ArrowRight, Zap, Award, TrendingUp, ShoppingCart } from "lucide-react";

import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";

export interface Product {
  id: string;
  name: string;
  brand: string;
  image: string;
  price: number;
  rating: number;
  description: string;
}

export const products: Product[] = [
  { id: "1", name: "Mass-Tech Extreme 2000", brand: "MuscleTech", image: muscletechMass, price: 12500, rating: 4.8, description: "Advanced muscle building formula with 80g protein per serving" },
  { id: "2", name: "Super Mass Gainer", brand: "Dymatize", image: dymatizeSuper, price: 11900, rating: 4.7, description: "High-calorie mass gainer with BCAAs and creatine" },
  { id: "3", name: "Carnivor Mass", brand: "MuscleMeds", image: musclemedsCarnivor, price: 13500, rating: 4.9, description: "Beef protein isolate mass gainer for lean muscle" },
  { id: "4", name: "Anabolic Mass", brand: "Kevin Levrone", image: levroneAnabolic, price: 12000, rating: 4.6, description: "Premium anabolic mass formula for extreme gains" },
  { id: "5", name: "Gold Lean Mass", brand: "Kevin Levrone", image: levroneGold, price: 14500, rating: 4.9, description: "Gold standard lean mass gainer with minimal fat" },
  { id: "6", name: "Critical Mass Professional", brand: "Applied Nutrition", image: appliedCritical, price: 11500, rating: 4.5, description: "Professional-grade mass gainer for serious athletes" },
  { id: "7", name: "King Mass", brand: "Ronnie Coleman", image: ronnieKing, price: 15000, rating: 5.0, description: "King of mass gainers with 60g protein per serving" },
  { id: "8", name: "Hard Mass Gainer", brand: "Inner Armour", image: innerArmour, price: 10500, rating: 4.4, description: "Hard-hitting mass gainer for explosive growth" },
  { id: "9", name: "Mass Infusion", brand: "Nutrex", image: nutrexMass, price: 12200, rating: 4.7, description: "Advanced mass infusion technology for rapid gains" },
  { id: "10", name: "MASS Gainer", brand: "CORE CHAMPS", image: coreChamps, price: 10800, rating: 4.6, description: "Champion formula mass gainer with optimal nutrition" },
];

interface HeroSectionProps {
  onProductClick: (product: Product) => void;
}

export const HeroSection = ({ onProductClick }: HeroSectionProps) => {
  const statsRef = useRef<HTMLDivElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);

  // useInView without once: true -> triggers every scroll
  const statsInView = useInView(statsRef, { margin: "-120px" });
  const gridInView = useInView(gridRef, { margin: "-120px" });

  return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden bg-background">
      {/* Background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-gold/10 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      />

      <div className="container mx-auto px-6">
        {/* Header Section */}
        <motion.div
          className="text-center space-y-8 mb-16 z-10 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }} // repeated animation
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-2 mx-auto"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.5 }}
          >
            <Award className="h-4 w-4 text-gold" />
            <span className="text-sm font-semibold text-foreground">Premium Quality Supplements</span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold leading-tight"
            variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.8 }}
          >
            Unleash Your
            <span className="block bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
              True Potential
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.8 }}
          >
            Premium bodybuilding supplements crafted for champions. Experience unmatched quality 
            with Ceylon Supplement&apos;s gold standard formulations.
          </motion.p>

          <motion.div className="flex flex-wrap justify-center gap-4" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}>
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <Button size="lg" className="bg-gradient-to-r from-gold to-gold-light hover:from-gold-light hover:to-gold text-primary-foreground font-bold shadow-[var(--shadow-gold)] group">
                Shop Now
                <ShoppingCart className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              </Button>
            </motion.div>
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <Button size="lg" variant="outline" className="border-2 border-gold text-foreground hover:bg-gold/10 font-semibold">
                View Catalog
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <div ref={statsRef}>
            <motion.div className="grid grid-cols-3 gap-6 pt-8 max-w-2xl mx-auto" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.16 } } }}>
              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Zap className="h-5 w-5 text-gold" />
                  <span className="text-2xl font-bold text-foreground">
                    {statsInView ? <CountUp end={100} duration={1.6} suffix="%" redraw /> : "0%"}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">Pure Quality</p>
              </motion.div>

              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Award className="h-5 w-5 text-gold" />
                  <span className="text-2xl font-bold text-foreground">
                    {statsInView ? <CountUp end={50000} duration={1.8} separator="," redraw /> : "0"}
                    <span className="align-top">+</span>
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">Happy Athletes</p>
              </motion.div>

              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                <div className="flex items-center justify-center gap-2 mb-1">
                  <TrendingUp className="h-5 w-5 text-gold" />
                  <span className="text-2xl font-bold text-foreground">
                    {statsInView ? <CountUp end={1} duration={1.4} redraw /> : "0"}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">In Sri Lanka</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Premium Banner */}
        <motion.div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-premium)] mb-12"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gold/20 via-transparent to-gold/10 pointer-events-none z-10" />
          <img src={premiumCollectionBanner} alt="Premium Collection" className="w-full h-[500px] object-cover" />
          <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-background via-background/90 to-transparent z-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
                Premium Supplement Collection
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Kevin Levrone, Goldline & Ceylon Supplement Gold Series
            </p>
          </div>
        </motion.div>

        {/* Product Grid */}
        <motion.h2 className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
            Mass Gainer Family
          </span>
        </motion.h2>

        <motion.div ref={gridRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-120px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {products.map(product => (
            <motion.div key={product.id} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.6 }}
              className="group relative bg-card rounded-xl overflow-hidden border border-border/50 hover:border-gold/50 transition-all duration-300 hover:shadow-[var(--shadow-gold)] hover:scale-105"
            >
              <div className="aspect-square p-4 bg-gradient-to-br from-background to-muted/30 flex items-center justify-center">
                <img src={product.image} alt={`${product.brand} ${product.name}`} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="p-4 bg-card-foreground/5 border-t border-border/30">
                <p className="text-xs font-semibold text-gold mb-1">{product.brand}</p>
                <h3 className="text-sm font-bold text-foreground line-clamp-2 mb-3">{product.name}</h3>
                <Button size="sm" className="w-full bg-gradient-to-r from-gold to-gold-light hover:from-gold-light hover:to-gold text-primary-foreground font-semibold text-xs" onClick={() => onProductClick(product)}>
                  View Details
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
