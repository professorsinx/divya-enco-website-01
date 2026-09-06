import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ProjectGallery } from "../components/ProjectGallery";
import { PhotoGallery } from "../components/PhotoGallery";

const INFRASTRUCTURE = [
  ["01", "Vertical turning lathe", "1500 mm table diameter / 1500 mm height"],
  ["02", "Horizontal boring machine", "100 mm spindle size"],
  ["03", "Radial drilling machine", "65 mm spindle size"],
  ["04", "Lathes", "Various sizes"],
  ["05", "CNC oxy-fuel cutting", "Profile cutting capability"],
  ["06", "Plasma cutting", "Profile cutting capability"],
  ["07", "CO2 welding machines", "Fabrication and assembly"],
  ["08", "Arc welding machines", "Fabrication and repair"],
  ["09", "Gas cutting & grinding", "Preparation and finishing"],
  ["10", "Measuring instruments", "Inspection and verification"],
] as const;

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Capabilities — Divya Enco Engineering" },
      {
        name: "description",
        content:
          "Explore Divya Enco's documented product profile and engineering capabilities: machining, fabrication, welding, assembly and industrial components.",
      },
      { property: "og:title", content: "Capabilities — Divya Enco Engineering" },
      { property: "og:description", content: "Machining, fabrication, welding, assembly and industrial components." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <section className="px-4 pb-20 pt-32 md:pt-40">
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center">
          <div className="mx-auto max-w-4xl">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Capabilities / product profile</span>
            <h1 className="mt-4 text-5xl font-black leading-[0.98] tracking-tight text-foreground md:text-7xl">The shop floor behind the requirement.</h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">From contract fabrication and machining to specialised industrial components, Divya Enco combines people, process and equipment to deliver reliable engineering work.</p>
          </div>
        </motion.div>

        <div className="mt-16"><ProjectGallery /></div>

        <section className="mt-20 border-y border-border bg-foreground px-6 py-10 text-background md:px-10 md:py-14" aria-labelledby="infrastructure-title">
          <div className="flex flex-col justify-between gap-5 border-b border-background/15 pb-8 md:flex-row md:items-end">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary">Infrastructure / equipment register</span>
              <h2 id="infrastructure-title" className="mt-3 text-3xl font-black tracking-tight md:text-5xl">Capability is measurable.</h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-background/60">The complete equipment profile from the Divya Enco material, formatted for a quick technical read.</p>
          </div>
          <div className="mt-8 grid gap-x-8 md:grid-cols-2">
            {INFRASTRUCTURE.map(([number, title, detail]) => (
              <div key={number} className="grid grid-cols-[42px_1fr] gap-4 border-b border-background/15 py-4">
                <span className="font-mono text-xs text-primary">{number}</span>
                <div>
                  <p className="font-bold">{title}</p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-background/50">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-20 border-t border-border pt-12">
          <PhotoGallery />
        </div>

      </div>
    </section>
  );
}