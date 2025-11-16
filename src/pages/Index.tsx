import { useState } from "react";
import { Header } from "../../../Header";
import { HeroSection, products, Product } from "@/components/HeroSection";
import { ProductModal } from "@/components/ProductModal";
import { CartDrawer } from "@/components/CartDrawer";
import { FilterSection } from "@/components/FilterSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Footer } from "@/components/Footer";
import { toast } from "sonner";

interface CartItem {
  id: string;
  name: string;
  brand: string;
  image: string;
  price: number;
  quantity: number;
}

const Index = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  // Get unique brands
  const brands = Array.from(new Set(products.map(p => p.brand))).sort();

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleAddToCart = () => {
    if (!selectedProduct) return;

    const existingItem = cartItems.find(item => item.id === selectedProduct.id);
    
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === selectedProduct.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
      toast.success(`Increased ${selectedProduct.name} quantity!`);
    } else {
      setCartItems([...cartItems, {
        id: selectedProduct.id,
        name: selectedProduct.name,
        brand: selectedProduct.brand,
        image: selectedProduct.image,
        price: selectedProduct.price,
        quantity: 1
      }]);
      toast.success(`Added ${selectedProduct.name} to cart!`);
    }
    
    setIsModalOpen(false);
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity } : item
    ));
  };

  const handleRemoveItem = (id: string) => {
    const item = cartItems.find(item => item.id === id);
    setCartItems(cartItems.filter(item => item.id !== id));
    if (item) {
      toast.success(`Removed ${item.name} from cart`);
    }
  };

  const handleCheckout = () => {
    toast.success("Proceeding to checkout...", {
      description: "You'll be redirected to our secure payment page"
    });
  };

  const handleBrandToggle = (brand: string) => {
    setSelectedBrands(prev =>
      prev.includes(brand)
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header cartDrawer={
        <CartDrawer
          items={cartItems}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
          onCheckout={handleCheckout}
        />
      } />
      
      <div className="container mx-auto px-6 pt-24">
        <FilterSection
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          sortBy={sortBy}
          onSortChange={setSortBy}
          selectedBrands={selectedBrands}
          onBrandToggle={handleBrandToggle}
          brands={brands}
        />
      </div>

      <HeroSection onProductClick={handleProductClick} />

      <FeaturesSection />

      <TestimonialsSection />

      <Footer />

      <ProductModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        product={selectedProduct}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
};

export default Index;
