import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star, Package, Zap, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ProductModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  product: {
    name: string;
    brand: string;
    image: string;
    price: number;
    rating?: number;
    description?: string;
  } | null;
  onAddToCart?: () => void;
}

export const ProductModal = ({ open, onOpenChange, product, onAddToCart }: ProductModalProps) => {
  if (!product) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            <span className="text-gold">{product.brand}</span>
            <br />
            {product.name}
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-8 mt-4">
          {/* Product Image */}
          <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-background to-muted/30 p-8">
            <img 
              src={product.image} 
              alt={`${product.brand} ${product.name}`}
              className="w-full h-full object-contain"
            />
            <div className="absolute top-4 right-4">
              <Badge className="bg-gold text-primary-foreground font-bold">
                Premium Quality
              </Badge>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-5 w-5 ${i < (product.rating || 4.5) ? 'fill-gold text-gold' : 'text-muted'}`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {product.rating || 4.5}/5 (250+ reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-bold bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
                LKR {product.price.toLocaleString()}
              </span>
              <span className="text-lg text-muted-foreground line-through">
                LKR {Math.round(product.price * 1.2).toLocaleString()}
              </span>
            </div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed">
              {product.description || `Premium ${product.name} formulated for serious athletes and bodybuilders. Experience maximum muscle growth with our scientifically advanced formula. Each serving delivers optimal protein and nutrients for peak performance.`}
            </p>

            {/* Key Features */}
            <div className="space-y-3">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <Award className="h-5 w-5 text-gold" />
                Key Features
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Zap className="h-4 w-4 text-gold mt-1 flex-shrink-0" />
                  <span className="text-sm">High-quality protein blend for muscle growth</span>
                </li>
                <li className="flex items-start gap-2">
                  <Zap className="h-4 w-4 text-gold mt-1 flex-shrink-0" />
                  <span className="text-sm">Enhanced with BCAAs and essential amino acids</span>
                </li>
                <li className="flex items-start gap-2">
                  <Zap className="h-4 w-4 text-gold mt-1 flex-shrink-0" />
                  <span className="text-sm">Supports rapid recovery and muscle repair</span>
                </li>
                <li className="flex items-start gap-2">
                  <Zap className="h-4 w-4 text-gold mt-1 flex-shrink-0" />
                  <span className="text-sm">Premium quality ingredients, lab tested</span>
                </li>
              </ul>
            </div>

            {/* Product Info */}
            <div className="grid grid-cols-2 gap-4 p-4 bg-muted/30 rounded-lg">
              <div className="flex items-center gap-2">
                <Package className="h-5 w-5 text-gold" />
                <div>
                  <p className="text-xs text-muted-foreground">Size</p>
                  <p className="font-semibold">3kg / 6.6lbs</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Package className="h-5 w-5 text-gold" />
                <div>
                  <p className="text-xs text-muted-foreground">Servings</p>
                  <p className="font-semibold">40 servings</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button 
                size="lg" 
                className="flex-1 bg-gradient-to-r from-gold to-gold-light hover:from-gold-light hover:to-gold text-primary-foreground font-bold shadow-[var(--shadow-gold)]"
                onClick={onAddToCart}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-gold hover:bg-gold/10"
              >
                Buy Now
              </Button>
            </div>

            {/* Guarantee Badge */}
            <div className="flex items-center justify-center gap-2 p-3 bg-gold/10 border border-gold/20 rounded-lg">
              <Award className="h-5 w-5 text-gold" />
              <span className="text-sm font-semibold">100% Authentic Guarantee</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
