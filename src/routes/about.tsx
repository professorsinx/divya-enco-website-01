import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const VALUES = [
  "Integrity",
  "Customer commitment",
  "Quality & reliability",
  "Respect for people",
  "Safety & responsibility",
  "Engineering & innovation",
  "Continuous improvement",
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Divya Enco Engineering" },
      {
        name: "description",
        content:
          "Discover Divya Enco's purpose, vision, mission and operating principles for building a trusted Indian engineering manufacturing institution.",
      },
      { property: "og:title", content: "About — Divya Enco Engineering" },
      {
        property: "og:description",
        content: "Purpose, vision, mission and values behind Divya Enco.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <section className="border-b border-border px-4 pb-20 pt-32 md:pt-40">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl"
        >
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
            About Divya Enco
          </span>
          <h1 className="mt-4 text-5xl font-black leading-[0.98] tracking-tight text-foreground md:text-7xl">
            A future built with purpose.
          </h1>
        </motion.div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              Purpose / vision / mission
            </p>
            <div className="mt-8 space-y-7">
              <div className="border-l-2 border-primary pl-5">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
                  Purpose
                </p>
                <p className="mt-2 text-lg font-bold leading-relaxed text-foreground">
                  To create lasting value for society, customers and employees by building an
                  ethical, technology-driven Indian engineering manufacturing institution.
                </p>
              </div>
              <div className="border-l-2 border-accent pl-5">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Vision</p>
                <p className="mt-2 text-lg font-bold leading-relaxed text-foreground">
                  To become a trusted Indian engineering and technology company, developing and
                  manufacturing advanced products and systems for mission-critical applications in
                  India and across the world.
                </p>
              </div>
              <div className="border-l-2 border-primary pl-5">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
                  Mission
                </p>
                <p className="mt-2 text-lg font-bold leading-relaxed text-foreground">
                  To engineer, manufacture and deliver reliable, high-quality products and systems
                  for demanding industrial applications by combining specialised manufacturing
                  capabilities, engineering expertise, advanced technology and skilled people.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-7 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              Values / operating principles
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {VALUES.map((value, index) => (
                <div
                  key={value}
                  className="flex items-center gap-3 border-b border-border py-4 text-sm font-semibold text-foreground"
                >
                  <span className="font-mono text-xs text-primary">0{index + 1}</span>
                  <ShieldCheck size={16} className="text-accent" />
                  {value}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
