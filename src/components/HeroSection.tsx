import { Button } from "@/components/ui/button";
import heroAthlete from "@/assets/hero-athlete.jpg";
import productsShowcase from "@/assets/products-showcase.jpg";
import { ArrowRight, Zap, Award, TrendingUp } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden bg-background">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-gold/10 pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 z-10">
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-2">
              <Award className="h-4 w-4 text-gold" />
              <span className="text-sm font-semibold text-foreground">Premium Quality Supplements</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Unleash Your
              <span className="block bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
                True Potential
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              Premium bodybuilding supplements crafted for champions. Experience unmatched quality 
              with Ceylon Supplement's gold standard formulations.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-gradient-to-r from-gold to-gold-light hover:from-gold-light hover:to-gold text-primary-foreground font-bold shadow-[var(--shadow-gold)] group">
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-gold text-foreground hover:bg-gold/10 font-semibold">
                Learn More
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Zap className="h-5 w-5 text-gold" />
                  <span className="text-2xl font-bold text-foreground">100%</span>
                </div>
                <p className="text-sm text-muted-foreground">Pure Quality</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Award className="h-5 w-5 text-gold" />
                  <span className="text-2xl font-bold text-foreground">50K+</span>
                </div>
                <p className="text-sm text-muted-foreground">Happy Athletes</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <TrendingUp className="h-5 w-5 text-gold" />
                  <span className="text-2xl font-bold text-foreground">#1</span>
                </div>
                <p className="text-sm text-muted-foreground">In Sri Lanka</p>
              </div>
            </div>
          </div>
          
          {/* Right Content - Images */}
          <div className="relative">
            {/* Athlete Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-premium)] mb-8">
              <img 
                src={heroAthlete} 
                alt="Athlete training" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent" />
            </div>
            
            {/* Products Showcase */}
            <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-premium)] transform hover:scale-105 transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/20 via-transparent to-gold/10 pointer-events-none z-10" />
              <img 
                src={productsShowcase} 
                alt="Gold Creatine Products" 
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background via-background/80 to-transparent z-20">
                <h3 className="text-2xl font-bold mb-2">
                  <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
                    Gold Creatine Series
                  </span>
                </h3>
                <p className="text-sm text-muted-foreground">Maximum strength, premium results</p>
              </div>
            </div>
            
            {/* Decorative gold glow */}
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-radial from-gold/30 to-transparent blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-radial from-gold/20 to-transparent blur-3xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};
