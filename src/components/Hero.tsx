import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowRight, Check } from "lucide-react";

const PRINCIPLES = [
  "Optimum cost",
  "Quality",
  "In-time delivery",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-32 md:pb-24 md:pt-40">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[34rem] bg-gradient-to-b from-secondary/70 to-transparent" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 border-l-2 border-primary pl-3 text-xs font-bold uppercase tracking-[0.24em] text-primary">
            Engineering manufacturing / Mathur, Tamil Nadu
          </span>

          <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[0.98] tracking-tight text-foreground sm:text-7xl lg:text-[6.5rem]">
            Engineering Excellence
            <span className="block text-primary">for the Future.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            At Divya Enco, quality is our commitment and customer satisfaction is our priority. We
            deliver precision machining and fabrication solutions with reliability, integrity, and
            continuous improvement. Our vision is to evolve into a technology-driven engineering
            company, creating value through innovation and excellence.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5"
            >
              View Our Projects <ArrowRight size={17} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-background/70 px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Send a requirement <ArrowDownRight size={17} />
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            {PRINCIPLES.map((label) => (
              <div key={label} className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <Check size={16} className="text-primary" />
                {label}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }} className="hidden lg:block">
          <div className="ml-auto max-w-md border-l-2 border-primary/40 pl-8">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">Built around the requirement</p>
            <p className="mt-5 text-3xl font-black leading-tight text-foreground">Reliable people. Disciplined processes. Better engineering.</p>
            <div className="mt-8 grid grid-cols-2 gap-3 text-xs uppercase tracking-[0.16em] text-muted-foreground">
              <span className="border-t border-border pt-3">Machining</span><span className="border-t border-border pt-3">Fabrication</span><span className="border-t border-border pt-3">Welding</span><span className="border-t border-border pt-3">Assembly</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
