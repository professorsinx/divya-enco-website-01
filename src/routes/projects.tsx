import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { ProjectGallery } from "../components/ProjectGallery";
import { PhotoGallery } from "../components/PhotoGallery";

type MachineEntry = {
  number: string;
  title: string;
  detail: string;
  images: string[];
};

const INFRASTRUCTURE: MachineEntry[] = [
  {
    number: "01",
    title: "vertical Turret Lathe / VTL (SURAJ)",
    detail: "Ø1.8 m / Table size 1500 mm / Height 1.5 m / Motor 15 HP, 3 HP & 3 HP",
    images: ["real-machine-17.webp"],
  },
  {
    number: "02",
    title: "Horizontal Boring Machine KARAM Ø100",
    detail: "Ø100 / Table size 1030 × 1375 mm / Motor 5.0 HP & 3.0 HP",
    images: ["real-machine-15.webp","real-machine-18.webp"],
  },
  {
    number: "03",
    title: "Heavy Duty Lathes",
    detail: "Between Centre 3500 mm / Centre Height 350 mm / Swing Dia 600 mm / Motor 7.50 HP",
    images: ["real-machine-11.webp"],
  },
  {
    number: "04",
    title: "Radial Drilling Machine (AGRO)",
    detail: "Spindle Size 65 mm / Travel 2000 mm / Motor 3.0 HP & 2.0 HP",
    images: ["real-machine-10.webp","real-machine-14.webp"],
  },
  {
    number: "05",
    title: "Universal Milling Machine",
    detail: "General milling and surface preparation",
    images: ["real-machine-09.webp"],
  },
  {
    number: "06",
    title: "CNC Oxy Fuel Cutting Machines",
    detail: "CNC oxy-fuel profile cutting (Plasma 20mm, Gas 100mm)",
    images: ["real-machine-03.webp", "real-machine-08.webp"],
  },
  {
    number: "07",
    title: "Shaping Machine",
    detail: "18 inch stroke / Motor 3.0 HP",
    images: ["real-machine-07.webp"],
  },
  {
    number: "08",
    title: "Bandsaw Machine",
    detail: "Cutting size Ø325 mm",
    images: ["real-machine-12.webp"],
  },
  {
    number: "09",
    title: "Welding Invertors",
    detail: "400 Amp / RILON / ULTRA ARC",
    images: ["real-machine-05.webp","real-machine-02.webp"],
  },
  {
    number: "10",
    title: "7 Ft VEEKAY Brand Lathe",
    detail: "Between Centre 1100 mm / Centre Height 300 mm / Swing Dia 800 mm / Motor 5.0 HP",
    images: ["real-machine-13.webp"],
  },
  {
    number: "11",
    title: "6 Ft ACME Brand Lathe",
    detail: "Between Centre 900 mm / Centre Height 220 mm / Swing Dia 600 mm / Motor 3.0 HP",
    images: ["real-machine-16.webp"],
  },
  {
    number: "12",
    title: "Single Girder Overhead EOT & Gantry Cranes",
    detail: "EOT crane / Safe working load 15 tons / Gantry crane / Safe working load 5 tons",
    images: ["real-machine-21.webp", "real-machine-22.webp"],
  },
];

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
      {
        property: "og:description",
        content: "Machining, fabrication, welding, assembly and industrial components.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

function MachineRow({ machine }: { machine: MachineEntry }) {
  const previewRef = useRef<HTMLDivElement>(null);
  const [previewPlacement, setPreviewPlacement] = useState<"above" | "below">("above");

  const updatePreviewPlacement = () => {
    const preview = previewRef.current;
    if (!preview || window.innerWidth < 768) return;

    const row = preview.parentElement?.getBoundingClientRect();
    if (!row) return;

    const previewHeight = preview.offsetHeight + 8;
    const spaceAbove = row.top;
    const spaceBelow = window.innerHeight - row.bottom;
    setPreviewPlacement(
      spaceAbove >= previewHeight || spaceAbove >= spaceBelow ? "above" : "below",
    );
  };

  const previewPositionClass =
    previewPlacement === "above"
      ? "bottom-full mb-2 translate-y-2 group-hover:translate-y-0"
      : "top-full mt-2 -translate-y-2 group-hover:translate-y-0";

  return (
    <div
      className="group relative border-b border-background/15"
      onMouseEnter={updatePreviewPlacement}
    >
      <div className="grid grid-cols-[42px_1fr] gap-4 py-4 transition-colors group-hover:bg-background/10">
        <span className="font-mono text-xs text-primary">{machine.number}</span>
        <div>
          <p className="font-bold">{machine.title}</p>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-background/50">
            {machine.detail}
          </p>
        </div>
      </div>
      {machine.images.length > 0 && (
        <div
          ref={previewRef}
          className={`pointer-events-none absolute left-0 z-20 hidden w-[32rem] max-w-[calc(100vw-3rem)] scale-[0.97] overflow-hidden border border-border bg-card p-3 text-foreground opacity-0 shadow-[var(--shadow-elevated)] transition duration-200 group-hover:scale-100 group-hover:opacity-100 md:block ${previewPositionClass}`}
        >
          <div
            className={`grid gap-2 ${machine.images.length === 1 ? "grid-cols-1" : "grid-cols-2"}`}
          >
            {machine.images.map((image, imageIndex) => (
              <img
                key={image}
                src={`/machines/${image}`}
                alt={`${machine.title} view ${imageIndex + 1}`}
                className="aspect-[4/3] w-full object-cover"
              />
            ))}
          </div>
          <div className="mt-3 border-l-2 border-primary bg-background px-3 py-2">
            <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-primary">
              {machine.title}
            </p>
            <p className="mt-1 text-sm font-semibold leading-snug text-foreground">
              {machine.detail}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

function MachineList({ machines }: { machines: MachineEntry[] }) {
  return (
    <div className="flex flex-col gap-0">
      {machines.map((machine) => (
        <MachineRow key={machine.number} machine={machine} />
      ))}
    </div>
  );
}

function ProjectsPage() {
  return (
    <section className="px-4 pb-20 pt-32 md:pt-40">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="mx-auto max-w-4xl">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
              Capabilities / product profile
            </span>
            <h1 className="mt-4 text-5xl font-black leading-[0.98] tracking-tight text-foreground md:text-7xl">
              The shop floor behind the requirement.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              From contract fabrication and machining to specialised industrial components, Divya
              Enco combines people, process and equipment to deliver reliable engineering work.
            </p>
          </div>
        </motion.div>

        <div className="mt-16">
          <ProjectGallery />
        </div>
        <section
          className="mt-20 border-y border-border bg-foreground px-6 py-10 text-background md:px-10 md:py-14"
          aria-labelledby="infrastructure-title"
        >
          <div className="flex flex-col justify-between gap-5 border-b border-background/15 pb-8 md:flex-row md:items-end">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
                Infrastructure
              </span>
              <h2
                id="infrastructure-title"
                className="mt-3 text-3xl font-black tracking-tight md:text-5xl"
              >
                Capability is measurable.
              </h2>
            </div>
          </div>

          <div className="mt-8 grid gap-x-8 md:grid-cols-2">
            <MachineList machines={INFRASTRUCTURE.slice(0, 6)} />
            <MachineList machines={INFRASTRUCTURE.slice(6)} />
          </div>
        </section>

        <div id="photo-gallery" className="mt-20 border-t border-border pt-12">
          <PhotoGallery />
        </div>
      </div>
    </section>
  );
}
