import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import Layout from "@/components/Layout";
import { CALL_LINK } from "@/lib/constants";

import balconyDay from "@/assets/balcony-day.png";
import windowGrills from "@/assets/window-grills.png";
import serviceStaircase from "@/assets/service-staircase.jpg";
import servicePet from "@/assets/service-pet.jpg";
import hero2 from "@/assets/hero-2.jpg";
import serviceCommercial from "@/assets/service-commercial.jpg";
import serviceSports from "@/assets/service-sports.jpg";

const services = [
  { image: balconyDay, title: "Balcony Invisible Grills", desc: "Strong and stylish invisible grills for balconies ensuring child safety, bird protection, and modern appearance with rust-free stainless steel cables." },
  { image: windowGrills, title: "Window Invisible Grills", desc: "Protect your home from pigeons and accidents without blocking your view or airflow. Crystal clear visibility with maximum safety." },
  { image: serviceStaircase, title: "Staircase Invisible Grills", desc: "Safety grills for staircases to prevent accidental falls. Ideal for homes with children and elderly family members." },
  { image: servicePet, title: "Invisible Grills for Pet Safety", desc: "Keep your furry friends safe on balconies and windows. Our grills prevent pets from falling while maintaining openness." },
  { image: hero2, title: "Invisible Grills for Child Safety", desc: "Designed especially for children safety with premium tension cables and professional installation for complete peace of mind." },
  { image: serviceCommercial, title: "Commercial High-Rise Solutions", desc: "Professional invisible grill installations for commercial buildings, offices, and high-rise complexes with industrial-grade materials." },
  { image: serviceSports, title: "Sports & Stadium Nets", desc: "High-quality safety nets for sports facilities, stadiums, and practice areas. Durable and professional installation." },
];

const Services = () => {
  return (
    <Layout>
      <section className="gradient-hero text-primary-foreground py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-display text-3xl md:text-5xl font-bold mb-6">
            Our Services
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Complete range of invisible grill solutions for every need
          </motion.p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all group"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{service.desc}</p>
                  <a href={CALL_LINK} className="inline-flex items-center gap-2 gradient-cta text-primary-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity">
                    <Phone size={16} /> Call Now
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
