import { Link } from "react-router-dom";
import { Phone, MapPin, Mail } from "lucide-react";
import { BUSINESS_NAME, LOCATION, PHONE_1, PHONE_2, CALL_LINK, WHATSAPP_LINK, GOOGLE_MAPS_LINK } from "@/lib/constants";

const Footer = () => {
  return (
    <footer className="gradient-hero text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="font-display text-xl font-bold mb-4">{BUSINESS_NAME}</h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Trusted invisible grill installation service in Vijayawada providing premium safety solutions for homes, apartments, and commercial buildings.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Services", path: "/services" },
                { label: "Gallery", path: "/gallery" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <Link key={link.path} to={link.path} className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Our Services</h4>
            <div className="flex flex-col gap-2">
              {["Balcony Invisible Grills", "Window Invisible Grills", "Children Safety Grills", "Bird Protection Grills", "Staircase Safety Grills", "Pet Safety Grills"].map((s) => (
                <Link key={s} to="/services" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
                  {s}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact Info</h4>
            <div className="flex flex-col gap-3">
              <a href={CALL_LINK} className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
                <Phone size={16} /> +91 {PHONE_1}
              </a>
              <a href={`tel:+91${PHONE_2}`} className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
                <Phone size={16} /> +91 {PHONE_2}
              </a>
              <a href={GOOGLE_MAPS_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
                <MapPin size={16} /> {LOCATION}
              </a>
              <a href={`mailto:shivasakthi.grills@gmail.com`} className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
                <Mail size={16} /> shivasakthi.grills@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved. | {LOCATION}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
