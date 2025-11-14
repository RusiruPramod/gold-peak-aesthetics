# Ceylon Supplement - Premium Fitness E-Commerce Platform

A modern, fully-featured e-commerce platform for premium bodybuilding supplements built with React, TypeScript, and Tailwind CSS.

## 🌟 Features

### Core Functionality
- **Product Catalog**: Comprehensive display of 11+ premium mass gainer products from top brands
- **Product Search & Filters**: Real-time search with brand filtering and multiple sort options
- **Product Details Modal**: Rich product information with ratings, pricing, and specifications
- **Shopping Cart**: Full cart management with quantity controls and price calculations
- **Responsive Design**: Mobile-first approach with seamless desktop experience

### UI Components
- **Dynamic Product Grid**: Interactive product cards with hover effects and animations
- **Premium Banner**: Showcase banner featuring Kevin Levrone, Goldline, and Ceylon Supplement products
- **Customer Testimonials**: Social proof section with ratings and reviews
- **Features Section**: Highlight key benefits (authentic products, fast delivery, 24/7 support)
- **Newsletter Signup**: Email subscription for marketing campaigns
- **Comprehensive Footer**: Contact information, quick links, and social media

### Technical Features
- **TypeScript**: Full type safety across the application
- **Component Architecture**: Modular, reusable components following best practices
- **State Management**: React hooks for cart and modal state
- **Toast Notifications**: User feedback for cart actions
- **Design System**: Consistent color palette with gold accents and semantic tokens
- **Animations**: Smooth transitions and hover effects
- **SEO Optimized**: Meta tags, semantic HTML, and proper heading hierarchy

## 🛠️ Tech Stack

- **Framework**: React 18 with Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom Design System
- **UI Components**: Shadcn/ui
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **State**: React Hooks
- **Notifications**: Sonner

## 🎨 Design System

### Color Palette
- **Primary Gold**: `hsl(45, 100%, 50%)`
- **Gold Light**: `hsl(45, 100%, 60%)`
- **Gold Dark**: `hsl(45, 90%, 40%)`
- **Background**: Pure white `hsl(0, 0%, 100%)`
- **Foreground**: Dark charcoal `hsl(0, 0%, 10%)`

### Design Principles
- Luxury and premium aesthetic with gold accents
- Clean white backgrounds for product focus
- Consistent spacing and typography
- Smooth animations and transitions
- Accessible color contrast ratios

## 📦 Product Brands

The platform features premium supplements from:
- MuscleTech (Mass-Tech Extreme 2000)
- Dymatize (Super Mass Gainer)
- MuscleMeds (Carnivor Mass)
- Kevin Levrone (Anabolic Mass, Gold Lean Mass)
- Applied Nutrition (Critical Mass Professional)
- Ronnie Coleman (King Mass)
- Inner Armour (Hard Mass Gainer)
- Nutrex (Mass Infusion)
- CORE CHAMPS (MASS Gainer)
- Labrada (Muscle Mass Gainer)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Open your browser to `http://localhost:8080`

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/              # Shadcn UI components
│   ├── Header.tsx       # Main navigation header with cart
│   ├── HeroSection.tsx  # Hero banner and product grid
│   ├── ProductModal.tsx # Product detail modal
│   ├── CartDrawer.tsx   # Shopping cart drawer
│   ├── FilterSection.tsx # Search and filter controls
│   ├── FeaturesSection.tsx # Key features display
│   ├── TestimonialsSection.tsx # Customer reviews
│   └── Footer.tsx       # Site footer
├── pages/
│   ├── Index.tsx        # Main landing page
│   └── NotFound.tsx     # 404 error page
├── assets/
│   ├── ceylon-logo.png  # Brand logo
│   ├── premium-collection-banner.jpg # Hero banner
│   └── products/        # Product images
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
└── index.css            # Design system and global styles
```

## 🎯 Key Components

### ProductModal
Rich product detail view with:
- High-resolution product images
- Star ratings and reviews count
- Pricing with discount display
- Key features list
- Product specifications
- Add to cart functionality

### CartDrawer
Comprehensive shopping cart featuring:
- Product list with thumbnails
- Quantity controls (+/-)
- Individual item removal
- Subtotal calculation
- Shipping cost calculation (free over LKR 5,000)
- Checkout button

### FilterSection
Advanced filtering system with:
- Real-time search across product names and brands
- Multi-select brand filtering
- Sort options (Featured, Name A-Z/Z-A, Price Low-High/High-Low)
- Mobile-responsive filter drawer

## 💡 Features to Implement

Future enhancements could include:
- User authentication and accounts
- Order history and tracking
- Wishlist functionality
- Product reviews system
- Payment gateway integration
- Admin dashboard
- Inventory management
- Email notifications
- Multi-language support
- Blog section for fitness tips

## 🔒 SEO & Meta Tags

The application includes comprehensive SEO optimization:
- Semantic HTML structure
- Optimized meta descriptions
- Open Graph tags for social sharing
- Twitter Card integration
- Canonical URLs
- Proper heading hierarchy
- Alt text for all images
- Mobile-friendly viewport

## 📱 Responsive Design

Breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px
- Large Desktop: > 1400px

## 🎨 Customization

### Updating Colors
Edit `src/index.css` to modify the design system:
```css
:root {
  --gold: 45 100% 50%;
  --gold-light: 45 100% 60%;
  /* ... other colors */
}
```

### Adding Products
Update `src/components/HeroSection.tsx`:
```typescript
export const products: Product[] = [
  {
    id: "12",
    name: "Your Product Name",
    brand: "Brand Name",
    image: yourProductImage,
    price: 12000,
    rating: 4.8,
    description: "Product description..."
  }
];
```

## 🤝 Contributing

This is a Lovable-generated project. For modifications:
1. Use Lovable's chat interface for AI-assisted development
2. Or edit files locally and push to the connected Git repository

## 📄 License

All rights reserved © Ceylon Supplement

## 🌐 Deployment

Deploy using Lovable's built-in deployment:
1. Click "Publish" in Lovable
2. Your site will be live at your Lovable subdomain
3. Connect a custom domain in Project Settings

## 📞 Support

For support or inquiries:
- Email: info@ceylonsupplement.com
- Phone: +94 11 234 5678
- Address: 123 Main Street, Colombo 00700, Sri Lanka

---

Built with ❤️ using [Lovable](https://lovable.dev)
