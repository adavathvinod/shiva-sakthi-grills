import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Clock, Send } from "lucide-react";
import Layout from "@/components/Layout";
import { CALL_LINK, WHATSAPP_LINK, GOOGLE_MAPS_LINK, PHONE_1, PHONE_2, LOCATION } from "@/lib/constants";

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMsg = `Hi, I'm ${form.name}. My phone: ${form.phone}. ${form.message}`;
    window.open(`https://wa.me/916303758255?text=${encodeURIComponent(whatsappMsg)}`, "_blank");
    setSubmitted(true);
  };

  return (
    <Layout>
      <section className="gradient-hero text-primary-foreground py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-display text-3xl md:text-5xl font-bold mb-6">
            Contact Us
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Get in touch for a free site visit and quotation
          </motion.p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">Send Us a Message</h2>
              {submitted ? (
                <div className="bg-primary/10 rounded-2xl p-8 text-center">
                  <p className="text-primary font-semibold text-lg">✅ Thank you! We'll contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-5 py-4 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-5 py-4 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-5 py-4 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  />
                  <button type="submit" className="gradient-cta text-primary-foreground px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                    <Send size={18} /> Send Message
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-col gap-6">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">Get In Touch</h2>

              <div className="bg-card rounded-2xl p-6 shadow-card flex items-start gap-4">
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                  <Phone className="text-primary-foreground" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Phone Numbers</h3>
                  <a href={CALL_LINK} className="text-primary hover:underline block">+91 {PHONE_1}</a>
                  <a href={`tel:+91${PHONE_2}`} className="text-primary hover:underline block">+91 {PHONE_2}</a>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-6 shadow-card flex items-start gap-4">
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-primary-foreground" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Location</h3>
                  <p className="text-muted-foreground">{LOCATION}</p>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-6 shadow-card flex items-start gap-4">
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                  <Clock className="text-primary-foreground" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Business Hours</h3>
                  <p className="text-muted-foreground">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                  <p className="text-muted-foreground">Sunday: By Appointment</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mt-2">
                <a href={CALL_LINK} className="gradient-cta text-primary-foreground px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity">
                  <Phone size={16} /> 📞 Call Now
                </a>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="bg-[hsl(142,70%,45%)] text-primary-foreground px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity">
                  <MessageCircle size={16} /> 💬 WhatsApp
                </a>
                <a href={GOOGLE_MAPS_LINK} target="_blank" rel="noopener noreferrer" className="bg-accent text-accent-foreground px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity">
                  <MapPin size={16} /> 📍 Directions
                </a>
              </div>
            </motion.div>
          </div>

          {/* Map */}
          <div className="mt-16">
            <div className="rounded-2xl overflow-hidden shadow-card">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122513.53388484539!2d80.54348365!3d16.5061743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35eff9482d944b%3A0x939b7e84ab4a0265!2sVijayawada%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shiva Sakthi Invisible Grills Location"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
