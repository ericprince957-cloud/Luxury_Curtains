import { useState, useEffect } from 'react';
import {
  Phone,
  MapPin,
  Star,
  CheckCircle,
  ChevronDown,
  Menu,
  X,
  ShoppingBag,
  Truck,
  Shield,
  MessageCircle,
  ExternalLink,
} from 'lucide-react';

// Product data with provided images
const products = [
  {
    id: 1,
    title: 'Turkey Curtain Design 1',
    price: '₦2,000',
    image: 'https://i.supaimg.com/9dc6f57b-5162-43a8-b5c4-fe09a230e15b/5f6ace8f-bfa4-40ae-93f9-7fe9e9a08ab7.jpg',
    description: 'Elegant sheer curtains with modern patterns',
  },
  {
    id: 2,
    title: 'Turkey Curtain Design 2',
    price: '₦2,500',
    image: 'https://i.supaimg.com/9dc6f57b-5162-43a8-b5c4-fe09a230e15b/3fb399c3-aae1-4510-b128-a5146eb84637.jpg',
    description: 'Luxury blackout curtains for bedrooms',
  },
  {
    id: 3,
    title: 'Turkey Curtain Design 3',
    price: '₦3,000',
    image: 'https://i.supaimg.com/9dc6f57b-5162-43a8-b5c4-fe09a230e15b/d2e9a384-27a6-4a3e-b0fa-bfebc7594b5c.jpg',
    description: 'Premium velvet curtains for living rooms',
  },
  {
    id: 4,
    title: 'Turkey Curtain Design 4',
    price: '₦2,000',
    image: 'https://i.supaimg.com/9dc6f57b-5162-43a8-b5c4-fe09a230e15b/1acc2752-81b6-4e65-8c1a-a47968fd1e6c.jpg',
    description: 'Classic embroidered curtain sets',
  },
  {
    id: 5,
    title: 'Turkey Curtain Design 5',
    price: '₦3,500',
    image: 'https://i.supaimg.com/9dc6f57b-5162-43a8-b5c4-fe09a230e15b/264ca7f4-e3d5-40d7-a591-dcbc65cd43ce.jpg',
    description: 'Designer print curtains with tassels',
  },
  {
    id: 6,
    title: 'Turkey Curtain Design 6',
    price: '₦2,500',
    image: 'https://i.supaimg.com/9dc6f57b-5162-43a8-b5c4-fe09a230e15b/a2db19db-ff8e-4fa5-b078-0b1ae52dfbbc.jpg',
    description: 'Modern minimalist curtains',
  },
  {
    id: 7,
    title: 'Turkey Curtain Design 7',
    price: '₦4,000',
    image: 'https://i.supaimg.com/9dc6f57b-5162-43a8-b5c4-fe09a230e15b/9203dcee-51e8-4835-9152-091ddaf89ef3.jpg',
    description: 'Royal gold-trim curtains',
  },
];

const WHATSAPP_BASE = 'https://wa.me/2347026368261';

function getWhatsAppLink(message: string) {
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;
}

// Header Component
function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex flex-col">
            <h1 className="text-lg sm:text-xl font-bold text-dark tracking-wide uppercase">
              <span className="text-gold">LUXURY</span> CURTAINS
            </h1>
            <p className="text-[10px] sm:text-xs text-dark-light flex items-center gap-1">
              <MapPin size={10} className="text-gold" />
              Ariaria Int'l Market, Opposite UBA Bank, Aba
            </p>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#collection"
              className="text-dark hover:text-gold font-medium transition-colors"
            >
              Collection
            </a>
            <a
              href="#contact"
              className="text-dark hover:text-gold font-medium transition-colors"
            >
              Contact
            </a>
            <a
              href={getWhatsAppLink('Hi, I would like to know more about your curtains.')}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold hover:bg-gold-dark text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-all hover:shadow-lg flex items-center gap-2"
            >
              <Phone size={14} />
              Call/WhatsApp Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-dark"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100">
            <div className="flex flex-col gap-3 pt-4">
              <a
                href="#collection"
                onClick={() => setMobileMenuOpen(false)}
                className="text-dark hover:text-gold font-medium py-2"
              >
                Collection
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-dark hover:text-gold font-medium py-2"
              >
                Contact
              </a>
              <a
                href={getWhatsAppLink('Hi, I would like to know more about your curtains.')}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold text-white px-5 py-3 rounded-full font-semibold text-sm text-center flex items-center justify-center gap-2"
              >
                <Phone size={14} />
                Call/WhatsApp Us
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-white to-cream">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-32 right-10 w-20 h-20 sm:w-32 sm:h-32 rounded-full bg-gold/5 animate-float" />
      <div className="absolute bottom-32 left-10 w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-gold/5 animate-float" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gold/10 text-gold px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star size={14} fill="currentColor" />
            Premium Turkey Curtains in Aba
          </div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-dark leading-tight mb-4">
            Quality & Style
            <br />
            <span className="gold-shimmer">For Your Home</span>
          </h2>

          {/* Sub-headline */}
          <p className="text-lg sm:text-xl text-dark-light max-w-2xl mx-auto mb-4">
            Premium Turkey Curtains in Aba – Quality & Style.
          </p>
          <p className="text-base sm:text-lg text-dark-light max-w-2xl mx-auto mb-8">
            Starting from just <span className="font-bold text-gold">₦2,000</span>. 
            Bulk Cartons Available <span className="font-bold text-gold">(₦82,500)</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#collection"
              className="w-full sm:w-auto bg-gold hover:bg-gold-dark text-white px-8 py-4 rounded-full font-semibold text-base transition-all hover:shadow-xl hover:shadow-gold/20 flex items-center justify-center gap-2"
            >
              <ShoppingBag size={18} />
              View Collection
            </a>
            <a
              href={getWhatsAppLink('Hi, I am interested in your curtains. Please send me more details.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto border-2 border-gold text-gold hover:bg-gold hover:text-white px-8 py-4 rounded-full font-semibold text-base transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="mt-16 animate-bounce">
            <ChevronDown size={28} className="mx-auto text-gold/60" />
          </div>
        </div>
      </div>
    </section>
  );
}

// Product Card Component
function ProductCard({ product }: { product: typeof products[0] }) {
  return (
    <div className="product-card bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100">
      {/* Image */}
      <div className="relative overflow-hidden aspect-[3/4]">
        <img
          src={product.image}
          alt={product.title}
          className="product-image w-full h-full object-cover"
          loading="lazy"
        />
        {/* Price Badge */}
        <div className="absolute top-3 right-3 bg-gold text-white px-3 py-1.5 rounded-full text-sm font-bold shadow-lg">
          From {product.price}
        </div>
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5">
        <h3 className="font-bold text-dark text-base sm:text-lg mb-1">{product.title}</h3>
        <p className="text-dark-light text-sm mb-4">{product.description}</p>
        <a
          href={getWhatsAppLink(
            `Hi, I'm interested in this curtain design: "${product.title}" (${product.price}). Please send me more details and availability.`
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-gold hover:bg-gold-dark text-white py-3 rounded-xl font-semibold text-sm transition-all hover:shadow-lg flex items-center justify-center gap-2"
        >
          <MessageCircle size={16} />
          Order This Design
        </a>
      </div>
    </div>
  );
}

// Product Gallery Section
function ProductGallery() {
  return (
    <section id="collection" className="py-16 sm:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-gold/10 text-gold px-4 py-2 rounded-full text-sm font-medium mb-4">
            <ShoppingBag size={14} />
            Our Collection
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-4">
            Our Latest Designs
          </h2>
          <p className="text-dark-light text-base sm:text-lg max-w-2xl mx-auto">
            Browse our premium selection of Turkey curtains. Each piece is carefully curated for quality and elegance.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Bulk Order CTA */}
        <div className="mt-12 sm:mt-16 text-center bg-white rounded-2xl p-8 sm:p-12 shadow-md border border-gold/20">
          <h3 className="text-2xl sm:text-3xl font-bold text-dark mb-3">
            Need Bulk Orders?
          </h3>
          <p className="text-dark-light mb-6 max-w-lg mx-auto">
            Get full cartons at wholesale prices. Perfect for retailers and interior decorators. 
            Starting from <span className="font-bold text-gold">₦82,500 per carton</span>.
          </p>
          <a
            href={getWhatsAppLink(
              'Hi, I am interested in buying curtains in bulk/cartons. Please share wholesale prices and available designs.'
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-white px-8 py-4 rounded-full font-semibold transition-all hover:shadow-xl"
          >
            <Truck size={18} />
            Order in Bulk
          </a>
        </div>
      </div>
    </section>
  );
}

// Why Choose Us Section
function WhyChooseUs() {
  const features = [
    {
      icon: <CheckCircle size={32} className="text-gold" />,
      title: 'Best Prices in Aba',
      description: 'We offer the most competitive prices for premium Turkey curtains in the entire Aba market.',
    },
    {
      icon: <Shield size={32} className="text-gold" />,
      title: 'High-Quality Turkey Fabric',
      description: 'All our curtains are made from genuine, high-quality Turkish fabric that lasts for years.',
    },
    {
      icon: <Truck size={32} className="text-gold" />,
      title: 'Bulk & Retail Available',
      description: 'Whether you need one curtain or full cartons, we have you covered at great prices.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-4">
            Why Choose Us?
          </h2>
          <p className="text-dark-light text-base sm:text-lg max-w-2xl mx-auto">
            Trusted by hundreds of customers across Aba and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 sm:p-8 rounded-2xl bg-cream hover:bg-gold/5 transition-colors duration-300 border border-transparent hover:border-gold/20"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">{feature.title}</h3>
              <p className="text-dark-light">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-dark-light">
          <div className="flex items-center gap-2">
            <Star size={18} className="text-gold" fill="currentColor" />
            <span className="text-sm font-medium">500+ Happy Customers</span>
          </div>
          <div className="flex items-center gap-2">
            <Star size={18} className="text-gold" fill="currentColor" />
            <span className="text-sm font-medium">100+ Designs Available</span>
          </div>
          <div className="flex items-center gap-2">
            <Star size={18} className="text-gold" fill="currentColor" />
            <span className="text-sm font-medium">5+ Years in Business</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// Location & Contact Section
function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-gold/10 text-gold px-4 py-2 rounded-full text-sm font-medium mb-4">
            <MapPin size={14} />
            Find Us
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-4">
            Visit Our Shop
          </h2>
          <p className="text-dark-light text-base sm:text-lg max-w-2xl mx-auto">
            Come see our full collection in person at Ariaria International Market.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Address Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                  <MapPin size={22} className="text-gold" />
                </div>
                <div>
                  <h3 className="font-bold text-dark text-lg mb-1">Our Address</h3>
                  <p className="text-dark-light">
                    Ariaria International Market, Aba,
                    <br />
                    Opposite UBA Bank.
                  </p>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                  <Phone size={22} className="text-gold" />
                </div>
                <div>
                  <h3 className="font-bold text-dark text-lg mb-1">Phone Number</h3>
                  <p className="text-dark-light text-lg font-medium">0702 636 8261</p>
                  <a
                    href="tel:+2347026368261"
                    className="text-gold hover:text-gold-dark text-sm font-medium mt-1 inline-flex items-center gap-1"
                  >
                    <ExternalLink size={12} />
                    Tap to Call
                  </a>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                  <Star size={22} className="text-gold" />
                </div>
                <div>
                  <h3 className="font-bold text-dark text-lg mb-1">Business Hours</h3>
                  <p className="text-dark-light">Monday – Saturday: 8AM – 6PM</p>
                  <p className="text-dark-light">Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Big WhatsApp Button */}
            <a
              href={getWhatsAppLink(
                'Hi, I would like to place an order. Please assist me.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-pulse w-full bg-[#25D366] hover:bg-[#1da851] text-white py-5 rounded-2xl font-bold text-lg transition-all hover:shadow-xl flex items-center justify-center gap-3"
            >
              <MessageCircle size={24} />
              Send Order Now
            </a>
          </div>

          {/* Google Maps Embed */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 h-[400px] lg:h-auto min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.123456789!2d7.3667!3d5.1067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069ceb!2sAriaria+International+Market!5e0!3m2!1sen!2sng!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Luxury Curtains Location - Ariaria Market, Aba"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-dark text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-3">
              <span className="text-gold">LUXURY</span> CURTAINS
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted source for premium Turkey curtains in Aba, Nigeria. Quality fabric, unbeatable prices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#collection" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Our Collection
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Visit Our Shop
                </a>
              </li>
              <li>
                <a
                  href={getWhatsAppLink('Hi, I need help choosing curtains.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  WhatsApp Us
                </a>
              </li>
              <li>
                <a href="tel:+2347026368261" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Call: 0702 636 8261
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-gold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <MapPin size={14} className="text-gold flex-shrink-0" />
                Ariaria Int'l Market, Aba
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-gold flex-shrink-0" />
                0702 636 8261
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle size={14} className="text-gold flex-shrink-0" />
                WhatsApp Available
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © 2026 Luxury Curtains. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs">
            Ariaria International Market, Aba, Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
}

// Floating WhatsApp Button
function FloatingWhatsApp() {
  return (
    <a
      href={getWhatsAppLink('Hi, I saw your website and I am interested in your curtains.')}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1da851] text-white w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110 whatsapp-pulse"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
}

// Main App Component
export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ProductGallery />
        <WhyChooseUs />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
