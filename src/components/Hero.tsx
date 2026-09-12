import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowRight, Check } from "lucide-react";

const PRINCIPLES = ["Optimum cost", "Quality", "In-time delivery"];

export function Hero({ runnerMessages }: { runnerMessages: string[] }) {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-28 md:pb-24 md:pt-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[34rem] bg-gradient-to-b from-secondary/70 to-transparent" />
      <div className="mx-auto mb-8 max-w-7xl overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-8">
          {[...runnerMessages, ...runnerMessages].map((message, index) => (
            <span
              key={`${message}-${index}`}
              className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground"
            >
              <span className="mr-2 text-primary">//</span>
              {message}
            </span>
          ))}
        </div>
      </div>
      <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex min-h-[35rem] justify-center pt-0"
        >
          <div className="w-full max-w-[38rem]">
            <span className="block h-4 border-l-2 border-primary pl-3 font-mono text-xs uppercase leading-4 tracking-[0.22em] text-primary">
              Engineering manufacturing
            </span>

            <h1 className="mt-6 w-full max-w-[35rem] text-left text-4xl font-black leading-[1.08] tracking-[-0.03em] text-foreground sm:text-5xl lg:text-[4.8rem] lg:pr-8">
              <span className="block">Precision Industrial</span>
              <span className="block">Fabrication &amp;</span>
              <span className="block text-primary">Heavy Engineering</span>
            </h1>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="hidden lg:block lg:pt-0"
        >
          <div className="flex min-h-[34rem] flex-col justify-center border-l-2 border-primary/40 pl-10 pt-0">
            <div className="mx-auto w-full max-w-xl text-left">
              <p className="h-4 font-mono text-xs uppercase leading-4 tracking-[0.22em] text-primary">
                Built around the requirement
              </p>
              <p className="mt-5 text-center text-[2rem] font-black leading-tight text-foreground">
                Reliable people. Disciplined processes. Better engineering.
              </p>

              <div className="mt-8 flex justify-center">
                <div className="grid w-[280px] max-w-full grid-cols-2 gap-3 text-center text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  <span className="border-t border-border pt-3">Machining</span>
                  <span className="border-t border-border pt-3">Fabrication</span>
                  <span className="border-t border-border pt-3">Welding</span>
                  <span className="border-t border-border pt-3">Assembly</span>
                </div>
              </div>

              <p className="mt-7 max-w-2xl text-[16px] leading-relaxed text-muted-foreground text-justify">
                At Divya Enco, quality is our commitment and customer satisfaction is our priority. We
                deliver precision machining and fabrication solutions with reliability, integrity, and
                continuous improvement. Our vision is to evolve into a technology-driven engineering
                company, creating value through innovation and excellence.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-xs font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5"
                >
                  View Our Projects <ArrowRight size={15} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-background/70 px-5 py-3 text-xs font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  Request a Quote <ArrowDownRight size={15} />
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
                {PRINCIPLES.map((label) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 text-sm font-medium text-muted-foreground"
                  >
                    <Check size={16} className="text-primary" />
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
