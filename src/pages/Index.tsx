import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Shield, Eye, Baby, Bird } from "lucide-react";
import { CALL_LINK, WHATSAPP_LINK, GOOGLE_MAPS_LINK } from "@/lib/constants";
import Layout from "@/components/Layout";
import HeroSlider from "@/components/HeroSlider";
import StatsCounter from "@/components/StatsCounter";

import balconyNight from "@/assets/balcony-night.png";
import balconyDay from "@/assets/balcony-day.png";
import windowGrills from "@/assets/window-grills.png";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const heroButtons = [
  { label: "📞 Call Now", href: CALL_LINK, className: "gradient-cta" },
  { label: "💬 WhatsApp", href: WHATSAPP_LINK, className: "bg-[hsl(142,70%,45%)]" },
  { label: "📍 Get Directions", href: GOOGLE_MAPS_LINK, className: "bg-accent" },
];

const contentSections = [
  {
    image: balconyNight,
    title: "Balcony Safety Invisible Grills",
    text: "We provide strong and stylish invisible grills for balconies ensuring child safety, bird protection, and modern appearance. Rust-free stainless steel cables with long durability.",
    reverse: false,
  },
  {
    image: windowGrills,
    title: "Window Invisible Grills",
    text: "Our window invisible grills protect your home from pigeons and accidents without blocking your view or airflow. Crystal clear visibility with maximum safety.",
    reverse: true,
  },
  {
    image: hero2,
    title: "Children Safety Grills",
    text: "Designed especially for children safety with premium tension cables and professional installation. Give your family the peace of mind they deserve.",
    reverse: false,
  },
  {
    image: hero3,
    title: "Bird Protection Grills",
    text: "Stop pigeon problems permanently with our invisible grill solutions. No more droppings, nesting, or damage to your beautiful home.",
    reverse: true,
  },
];

const testimonials = [
  { name: "Rajesh Kumar", location: "Vijayawada", text: "Excellent work! The invisible grills look amazing and my kids are safe now. Highly recommended!" },
  { name: "Priya Sharma", location: "Guntur", text: "Very professional installation. The grills are completely invisible and the quality is outstanding." },
  { name: "Venkat Rao", location: "Vijayawada", text: "Best invisible grill service in Vijayawada. Fair pricing and excellent workmanship. 5 stars!" },
];

const faqs = [
  { q: "What is the cost of invisible grills per square foot?", a: "The cost varies based on the type and quality of materials. Contact us for a free site visit and quotation." },
  { q: "How long does installation take?", a: "Typical installation takes 1-2 days depending on the area. We ensure quick and professional service." },
  { q: "Are invisible grills safe for children?", a: "Absolutely! Our grills use high-tension stainless steel cables that can withstand significant force, making them perfectly safe for children." },
  { q: "Do invisible grills block the view?", a: "No, that's the beauty of invisible grills. The thin cables are nearly invisible and don't obstruct your view or airflow." },
  { q: "What warranty do you provide?", a: "We provide a comprehensive warranty on our installation and materials. Contact us for specific warranty details." },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative gradient-hero text-primary-foreground py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            Shiva Sakthi Invisible Grills<br />
            <span className="text-accent">Safety with Style</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10"
          >
            Premium Invisible Grill Installation in Vijayawada for Homes & Apartments
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {heroButtons.map((btn) => (
              <a
                key={btn.label}
                href={btn.href}
                target={btn.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className={`${btn.className} text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity shadow-floating`}
              >
                {btn.label}
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Hero Slider */}
      <HeroSlider />

      {/* Stats Counter */}
      <StatsCounter />

      {/* Content Sections */}
      {contentSections.map((section, i) => (
        <section key={section.title} className={`py-16 md:py-24 ${i % 2 === 0 ? "bg-background" : "gradient-soft"}`}>
          <div className="container mx-auto px-4">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${section.reverse ? "lg:flex-row-reverse" : ""}`}>
              <motion.div
                initial={{ opacity: 0, x: section.reverse ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={section.reverse ? "lg:order-2" : ""}
              >
                <img src={section.image} alt={section.title} className="rounded-2xl shadow-card-hover w-full object-cover aspect-[4/3]" loading="lazy" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: section.reverse ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={section.reverse ? "lg:order-1" : ""}
              >
                <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-6">{section.title}</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">{section.text}</p>
                <a href={CALL_LINK} className="inline-flex items-center gap-2 gradient-cta text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity shadow-floating">
                  <Phone size={20} /> 📞 Call Now
                </a>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: "Premium Quality", desc: "High-grade stainless steel cables with anti-rust coating" },
              { icon: Eye, title: "Nearly Invisible", desc: "Thin cables that don't block your view or airflow" },
              { icon: Baby, title: "Child Safe", desc: "Engineered to withstand high tension for maximum safety" },
              { icon: Bird, title: "Bird Protection", desc: "Stop pigeons and birds from entering your space" },
            ].map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-primary-foreground/15 transition-colors"
              >
                <item.icon className="mx-auto mb-4" size={40} />
                <h3 className="font-display text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-primary-foreground/70 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-accent">★</span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{t.text}"</p>
                <div>
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-muted-foreground text-sm">{t.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 gradient-soft">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">Frequently Asked Questions</h2>
          <div className="flex flex-col gap-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="bg-card rounded-2xl shadow-card group">
                <summary className="cursor-pointer p-6 font-semibold text-foreground flex justify-between items-center">
                  {faq.q}
                  <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-6 pb-6 text-muted-foreground">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 gradient-cta text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Get Safety for Your Family Today</h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">Book your free site visit and get a no-obligation quotation</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={CALL_LINK} className="bg-primary-foreground text-foreground px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity">
              📞 Call Now
            </a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:bg-primary-foreground/10 transition-colors">
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
