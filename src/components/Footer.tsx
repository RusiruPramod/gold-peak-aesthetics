import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import logo from "@/assets/ceylon-logo.png";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0, transition: { duration: 1.1, ease: "easeOut" } },
};

export const Footer = () => {
  return (
    <footer id="contact" className="bg-muted/30 border-t border-border/50 mt-20">
      <div className="container mx-auto px-6 py-12">
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand Section */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeUp}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
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
              <Button size="icon" variant="outline" className="hover:border-gold hover:text-gold"><Facebook className="h-4 w-4" /></Button>
              <Button size="icon" variant="outline" className="hover:border-gold hover:text-gold"><Instagram className="h-4 w-4" /></Button>
              <Button size="icon" variant="outline" className="hover:border-gold hover:text-gold"><Twitter className="h-4 w-4" /></Button>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeUp}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="font-bold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              {["Products", "About Us", "Contact", "Blog", "FAQ"].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => {
                      const sectionId = item === 'Products' ? 'products' : 
                                      item === 'About Us' ? 'about' : 
                                      item === 'Contact' ? 'contact' : '';
                      if (sectionId) {
                        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-sm text-muted-foreground hover:text-gold transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Customer Service */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeUp}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="font-bold text-lg">Customer Service</h3>
            <ul className="space-y-2">
              {["Shipping Policy", "Returns & Refunds", "Privacy Policy", "Terms of Service", "Track Order"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-gold transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeUp}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="font-bold text-lg">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">123 Main Street, Colombo 00700, Sri Lanka</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-gold flex-shrink-0" />
                <a href="tel:+94112345678" className="text-sm text-muted-foreground hover:text-gold transition-colors">
                  +94 11 234 5678
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gold flex-shrink-0" />
                <a
                  href="mailto:info@ceylonsupplement.com"
                  className="text-sm text-muted-foreground hover:text-gold transition-colors"
                >
                  info@ceylonsupplement.com
                </a>
              </div>
            </div>
          </motion.div>

        </div>

        <Separator className="my-8" />

        {/* Newsletter */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeUp}
          transition={{ delay: 0.2 }}
          className="max-w-xl mx-auto text-center space-y-4 mb-8"
        >
          <h3 className="font-bold text-xl">Subscribe to Our Newsletter</h3>
          <p className="text-sm text-muted-foreground">Get exclusive deals, fitness tips, and product updates delivered to your inbox.</p>
          <div className="flex gap-2 max-w-md mx-auto">
            <Input placeholder="Enter your email" type="email" className="flex-1" />
            <Button className="bg-gradient-to-r from-gold to-gold-light hover:from-gold-light hover:to-gold font-bold">
              Subscribe
            </Button>
          </div>
        </motion.div>

        <Separator className="my-8" />

        {/* Copyright */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeUp}
          transition={{ delay: 0.1 }}
          className="text-center text-sm text-muted-foreground"
        >
          <p>© {new Date().getFullYear()} Ceylon Supplement. All rights reserved.</p>
          <p className="mt-2">
            Designed with <span className="text-gold">♥</span> in Sri Lanka
          </p>
        </motion.div>
      </div>
    </footer>
  );
};