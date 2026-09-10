import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Check, Factory, Gauge, Layers3, Wrench } from "lucide-react";
import { Hero } from "../components/Hero";
import { ClientMarquee } from "../components/ClientMarquee";
import isoCertificate from "../../Images/ISO_cert.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Divya Enco — Engineering Manufacturing & Fabrication" },
      {
        name: "description",
        content:
          "Divya Enco delivers quality engineering products and fabrication solutions through machining, welding, assembly and disciplined manufacturing in Tamil Nadu.",
      },
      { property: "og:title", content: "Divya Enco — Engineering Manufacturing & Fabrication" },
      {
        property: "og:description",
        content:
          "Quality products, in-time delivery and optimum cost for demanding industrial requirements.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const CAPABILITIES = [
  {
    Icon: Gauge,
    number: "01",
    title: "Precision machining",
    desc: "Machining for demanding requirements with vertical turning, horizontal boring, lathes and measuring instruments.",
  },
  {
    Icon: Layers3,
    number: "02",
    title: "Fabrication & welding",
    desc: "Contract fabrication, CO₂ welding, arc welding, gas cutting and grinding brought together under one roof.",
  },
  {
    Icon: Factory,
    number: "03",
    title: "Industrial components",
    desc: "Manufacturing air and oil cylinder inlets, inlet guide vanes and air preheater components.",
  },
  {
    Icon: Wrench,
    number: "04",
    title: "Assembly & delivery",
    desc: "Reliable products and systems delivered through controlled processes, inspection, testing and traceability.",
  },
];

function Index() {
  return (
    <>
      <Hero />
      <ClientMarquee />

      <section className="border-y border-border bg-card/50 px-4 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
              About Divya Enco
            </span>
            <h2 className="mt-4 max-w-xl text-4xl font-black leading-tight tracking-tight text-foreground md:text-5xl">
              A manufacturing partner built around the requirement.
            </h2>
            <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
              We are committed to delivering quality products, in-time delivery and optimum cost to
              our customers. Our approach is centred on understanding requirements, maintaining
              consistent quality and executing every assignment with discipline and responsibility.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-primary hover:gap-3"
            >
              Discuss a requirement <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {CAPABILITIES.map((capability, index) => (
              <motion.article
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="group border border-border bg-background/70 p-6 transition-colors hover:border-primary"
              >
                <div className="flex items-start justify-between">
                  <capability.Icon size={24} className="text-primary" strokeWidth={1.5} />
                  <span className="font-mono text-xs text-muted-foreground">
                    {capability.number}
                  </span>
                </div>
                <h3 className="mt-9 text-lg font-bold text-foreground">{capability.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {capability.desc}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="order-2 border-l-2 border-primary/40 py-4 pl-6 lg:order-1 md:pl-8">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              Product profile / 02
            </span>
            <p className="mt-5 max-w-md text-3xl font-black leading-tight text-foreground md:text-4xl">
              Industrial components made to perform under pressure.
            </p>
            <div className="mt-8 grid max-w-md grid-cols-2 gap-3 text-xs uppercase tracking-[0.15em] text-muted-foreground">
              <span className="border-t border-border pt-3">Air + oil systems</span>
              <span className="border-t border-border pt-3">Flow control</span>
              <span className="border-t border-border pt-3">Thermal systems</span>
              <span className="border-t border-border pt-3">Contract work</span>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
              Product profile
            </span>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-foreground md:text-5xl">
              Components for mission-critical applications.
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              We manufacture air and oil cylinder inlets, inlet guide vanes and air preheater
              components, alongside contract fabrication and machining for industrial customers.
            </p>
            <ul className="mt-7 space-y-3">
              {[
                "Air / oil cylinder inlets",
                "Inlet guide vanes",
                "Air preheater components",
                "Contract fabrication and machining",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm font-medium text-foreground"
                >
                  <Check size={16} className="text-primary" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 border border-primary/30 bg-primary/5 p-8 md:grid-cols-[minmax(0,1fr)_220px] md:items-center md:p-12">
          <div className="min-w-0">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              Quality system / ISO 9001 certified organisation
            </span>
            <h2 className="mt-4 max-w-2xl text-3xl font-black tracking-tight text-foreground md:text-4xl">
              Quality is built into every stage.
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              From customer requirements and engineering drawings through procurement,
              manufacturing, inspection, testing and final delivery.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground hover:bg-primary/90"
            >
              Talk to our team <ArrowRight size={17} />
            </Link>
          </div>
          <a
            href={isoCertificate}
            target="_blank"
            rel="noreferrer"
            className="group mx-auto block w-full max-w-[220px] overflow-hidden border border-white/70 bg-white/60 p-2 shadow-[var(--shadow-glass)] transition-transform hover:-translate-y-1"
            aria-label="Open the Divya Enco ISO 9001:2015 certificate"
          >
            <img
              src={isoCertificate}
              alt="Divya Enco ISO 9001:2015 certificate"
              className="aspect-[3/4] w-full object-cover object-top"
            />
            <span className="block px-1 pb-1 pt-2 text-center font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground group-hover:text-primary">
              ISO 9001:2015 / valid to 2028
            </span>
          </a>
        </div>
      </section>
    </>
  );
}
