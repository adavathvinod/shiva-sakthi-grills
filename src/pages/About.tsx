import { motion } from "framer-motion";
import { Shield, Eye, Award, Users, Target, Heart } from "lucide-react";
import Layout from "@/components/Layout";
import StatsCounter from "@/components/StatsCounter";
import logo from "@/assets/logo.jpeg";

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero text-primary-foreground py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-display text-3xl md:text-5xl font-bold mb-6">
            About Us
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Trusted invisible grill installation service in Vijayawada
          </motion.p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src={logo} alt="Shiva Sakthi Invisible Grills" className="rounded-2xl shadow-card-hover w-full max-w-md mx-auto" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-6">Who We Are</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Shiva Sakthi Invisible Grills is a trusted invisible grill installation service in Vijayawada providing premium safety solutions for homes, apartments, and commercial buildings. We focus on quality materials, professional installation, and customer satisfaction.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                With over 8 years of experience and 2000+ completed projects, we have become the go-to choice for families who want to keep their loved ones safe without compromising on aesthetics.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision */}
      <section className="py-16 md:py-24 gradient-soft">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Our Mission", desc: "To provide the highest quality invisible grill solutions that ensure safety for every family in Vijayawada and beyond." },
              { icon: Eye, title: "Our Vision", desc: "To be the most trusted and preferred invisible grill installation company in Andhra Pradesh." },
              { icon: Heart, title: "Our Values", desc: "Quality craftsmanship, customer-first approach, transparent pricing, and professional installation at every project." },
            ].map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-8 shadow-card text-center"
              >
                <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-6">
                  <item.icon className="text-primary-foreground" size={28} />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-4">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <StatsCounter />

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: "Premium Materials", desc: "We use only high-grade 316 stainless steel cables that are rust-free and durable." },
              { icon: Award, title: "Expert Installation", desc: "Our trained technicians ensure precise and professional installation every time." },
              { icon: Users, title: "500+ Happy Clients", desc: "We have a proven track record of satisfied customers across Vijayawada." },
              { icon: Eye, title: "Invisible Design", desc: "Our grills are nearly invisible, maintaining the beauty of your home." },
              { icon: Target, title: "Free Site Visit", desc: "We offer free consultation and site visit before any project commitment." },
              { icon: Heart, title: "After-Sales Support", desc: "Our relationship doesn't end at installation. We provide ongoing support." },
            ].map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow"
              >
                <item.icon className="text-primary mb-4" size={32} />
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
