import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface CounterProps {
  target: number;
  suffix?: string;
  label: string;
}

const CounterItem = ({ target, suffix = "", label }: CounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const duration = 2000;
          const startTime = Date.now();
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          animate();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-4xl md:text-5xl font-bold text-primary">
        {count}{suffix}
      </p>
      <p className="text-muted-foreground mt-2 text-sm font-medium">{label}</p>
    </div>
  );
};

const StatsCounter = () => {
  const stats = [
    { target: 500, suffix: "+", label: "Happy Clients" },
    { target: 8, suffix: "+", label: "Years Experience" },
    { target: 1200, suffix: "+", label: "Homes Secured" },
    { target: 2000, suffix: "+", label: "Projects Completed" },
  ];

  return (
    <section className="py-16 md:py-24 gradient-soft">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-6 md:p-8 shadow-card"
            >
              <CounterItem {...stat} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
