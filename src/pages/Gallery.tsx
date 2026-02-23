import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, X } from "lucide-react";
import Layout from "@/components/Layout";
import { CALL_LINK } from "@/lib/constants";

import balconyNight from "@/assets/balcony-night.png";
import balconyDay from "@/assets/balcony-day.png";
import windowGrills from "@/assets/window-grills.png";
import apartmentGrills from "@/assets/apartment-grills.png";
import balconyView from "@/assets/balcony-view.png";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";
import serviceStaircase from "@/assets/service-staircase.jpg";
import servicePet from "@/assets/service-pet.jpg";
import serviceCommercial from "@/assets/service-commercial.jpg";
import serviceSports from "@/assets/service-sports.jpg";

const images = [
  { src: balconyNight, title: "Balcony Grills - Night View" },
  { src: balconyDay, title: "Balcony Grills - Day View" },
  { src: windowGrills, title: "Window Invisible Grills" },
  { src: apartmentGrills, title: "Apartment Installation" },
  { src: balconyView, title: "Balcony Safety Grills" },
  { src: hero1, title: "City View Balcony" },
  { src: hero2, title: "Family Safety" },
  { src: hero3, title: "Bird Protection" },
  { src: hero4, title: "Stainless Steel Cables" },
  { src: hero5, title: "Villa Installation" },
  { src: serviceStaircase, title: "Staircase Safety" },
  { src: servicePet, title: "Pet Safety" },
  { src: serviceCommercial, title: "Commercial Building" },
  { src: serviceSports, title: "Sports Nets" },
];

const Gallery = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <Layout>
      <section className="gradient-hero text-primary-foreground py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-display text-3xl md:text-5xl font-bold mb-6">
            Our Gallery
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            See our premium installations across Vijayawada
          </motion.p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="relative group cursor-pointer overflow-hidden rounded-xl aspect-square"
                onClick={() => setSelected(i)}
              >
                <img src={img.src} alt={img.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/50 transition-colors flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity text-center">
                    <p className="text-primary-foreground font-semibold text-sm mb-2">{img.title}</p>
                    <a href={CALL_LINK} onClick={(e) => e.stopPropagation()} className="inline-flex items-center gap-1 gradient-cta text-primary-foreground px-4 py-2 rounded-lg text-xs font-semibold">
                      <Phone size={12} /> Call Now
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <button onClick={() => setSelected(null)} className="absolute top-6 right-6 text-primary-foreground" aria-label="Close">
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={images[selected].src}
              alt={images[selected].title}
              className="max-w-full max-h-[85vh] object-contain rounded-xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Gallery;
