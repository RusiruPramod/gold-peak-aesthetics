import { Button } from "@/components/ui/button";
import logo from "@/assets/ceylon-logo.png";
import { ReactNode } from "react";

interface HeaderProps {
  cartDrawer?: ReactNode;
}

export const Header = ({ cartDrawer }: HeaderProps) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Ceylon Supplement" className="h-12 w-12 object-contain" />
            <span className="text-2xl font-bold bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
              CEYLON SUPPLEMENT
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('products')}
              className="text-foreground hover:text-gold transition-colors font-medium"
            >
              Products
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-gold transition-colors font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-gold transition-colors font-medium"
            >
              Contact
            </button>
          </div>
          
          <div className="flex items-center gap-4">
            {cartDrawer}
            <Button 
              variant="default" 
              size="lg" 
              className="hidden sm:flex bg-gradient-to-r from-gold to-gold-light hover:from-gold-light hover:to-gold text-primary-foreground font-bold shadow-[var(--shadow-gold)]"
              onClick={() => scrollToSection('products')}
            >
              Shop Now
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};