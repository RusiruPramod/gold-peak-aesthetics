import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import logo from "@/assets/ceylon-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border/50 mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Ceylon Supplement" className="h-12 w-12 object-contain" />
              <span className="text-xl font-bold bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
                CEYLON SUPPLEMENT
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Premium bodybuilding supplements for champions. Experience unmatched quality with our gold standard formulations.
            </p>
            <div className="flex gap-3">
              <Button size="icon" variant="outline" className="hover:border-gold hover:text-gold">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline" className="hover:border-gold hover:text-gold">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline" className="hover:border-gold hover:text-gold">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#products" className="text-sm text-muted-foreground hover:text-gold transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm text-muted-foreground hover:text-gold transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-muted-foreground hover:text-gold transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#blog" className="text-sm text-muted-foreground hover:text-gold transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#faq" className="text-sm text-muted-foreground hover:text-gold transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <a href="#shipping" className="text-sm text-muted-foreground hover:text-gold transition-colors">
                  Shipping Policy
                </a>
              </li>
              <li>
                <a href="#returns" className="text-sm text-muted-foreground hover:text-gold transition-colors">
                  Returns & Refunds
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-sm text-muted-foreground hover:text-gold transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="text-sm text-muted-foreground hover:text-gold transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#track" className="text-sm text-muted-foreground hover:text-gold transition-colors">
                  Track Order
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  123 Main Street, Colombo 00700, Sri Lanka
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-gold flex-shrink-0" />
                <a href="tel:+94112345678" className="text-sm text-muted-foreground hover:text-gold transition-colors">
                  +94 11 234 5678
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gold flex-shrink-0" />
                <a href="mailto:info@ceylonsupplement.com" className="text-sm text-muted-foreground hover:text-gold transition-colors">
                  info@ceylonsupplement.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Newsletter */}
        <div className="max-w-xl mx-auto text-center space-y-4 mb-8">
          <h3 className="font-bold text-xl">Subscribe to Our Newsletter</h3>
          <p className="text-sm text-muted-foreground">
            Get exclusive deals, fitness tips, and product updates delivered to your inbox.
          </p>
          <div className="flex gap-2 max-w-md mx-auto">
            <Input 
              placeholder="Enter your email"
              type="email"
              className="flex-1"
            />
            <Button className="bg-gradient-to-r from-gold to-gold-light hover:from-gold-light hover:to-gold text-primary-foreground font-bold">
              Subscribe
            </Button>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Copyright */}
        <div className="text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Ceylon Supplement. All rights reserved.</p>
          <p className="mt-2">
            Designed with <span className="text-gold">♥</span> in Sri Lanka
          </p>
        </div>
      </div>
    </footer>
  );
};
