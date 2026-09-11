import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { ProjectGallery } from "../components/ProjectGallery";
import { PhotoGallery } from "../components/PhotoGallery";

type MachineEntry = {
  number: string;
  title: string;
  detail: string;
  image: string;
};

const INFRASTRUCTURE: MachineEntry[] = [
  {
    number: "01",
    title: "Vertical Boring Machine / VTL (SURAJ)",
    detail: "Ø1.8 m / Table size 1500 mm / Height 1.5 m / Motor 15 HP, 3 HP & 3 HP",
    image: "/machines/01-vertical-boring-machine-vtl-suraj.jpg",
  },
  {
    number: "02",
    title: "Horizontal Boring Machine KARAMO Ø100",
    detail: "Ø100 / Table size 1030 × 1375 mm ; Motor 5.0 HP & 3.0 HP",
    image: "/machines/02-horizontal-boring-machine-karamo-100.jpg",
  },
  {
    number: "03",
    title: "Heavy Duty Lathes",
    detail: "Between Centre 3500 mm / Centre Height 350 mm / Swing Dia 600 mm / Motor 7.50 HP",
    image: "/machines/03-heavy-duty-lathes.jpg",
  },
  {
    number: "04",
    title: "Radial Drilling Machine (AGRO)",
    detail: "Spindle Size 65 mm / Travel 2000 mm / Motor 3.0 HP & 2.0 HP",
    image: "/machines/04-radial-drilling-machine-agro.jpg",
  },
  {
    number: "05",
    title: "Universal Milling Machine",
    detail: "General milling and surface preparation",
    image: "/machines/05-universal-milling-machine.jpg",
  },
  {
    number: "06",
    title: "Horizontal / Vertical Milling Machine",
    detail: "Size III / Taper ISO 40 / Motor 5.0 HP",
    image: "/machines/06-horizontal-vertical-milling-machine.jpg",
  },
  {
    number: "07",
    title: "CNC Oxy Fuel Cutting Machines",
    detail: "CNC Oxy Fuel Cutting Machines",
    image: "/machines/07-cnc-oxy-fuel-cutting-machines.jpg",
  },
  {
    number: "08",
    title: "Shaping Machine",
    detail: "18 inch stroke / Motor 3.0 HP",
    image: "/machines/08-shaping-machine.jpg",
  },
  {
    number: "09",
    title: "Bandsaw Machine",
    detail: "Cutting Size Ø325 mm",
    image: "/machines/09-bandsaw-machine.jpg",
  },
  {
    number: "10",
    title: "Welding Invertors",
    detail: "400 Amp / RILON / ULTRA ARC",
    image: "/machines/10-welding-invertors.jpg",
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

function MachineImagePopup({
  machine,
  machineIndex,
  onClose,
  onNext,
  onPrevious,
}: {
  machine: MachineEntry;
  machineIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="machine-viewer-title"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/75 p-4 backdrop-blur-sm sm:p-8"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-full w-full max-w-4xl flex-col items-center gap-3 bg-background shadow-2xl sm:p-5"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex w-full items-center justify-between gap-4 border-b border-border px-4 py-3">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary">
              MACHINE {machine.number}/{INFRASTRUCTURE.length}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onPrevious}
              aria-label="Previous machine"
              className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-foreground hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={onNext}
              aria-label="Next machine"
              className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-foreground hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <ChevronRight size={18} />
            </button>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md text-foreground hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Close machine viewer"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        <div className="w-full overflow-hidden">
          <img
            src={machine.image}
            alt={machine.title}
            className="max-h-[calc(100vh-16rem)] w-full object-cover"
          />
        </div>

        <div className="w-full bg-white px-3 py-2 text-foreground">
          <div className="flex flex-wrap items-center justify-between gap-1">
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              {machine.title}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              {machineIndex + 1} / {INFRASTRUCTURE.length}
            </span>
          </div>
          <div className="mt-1 w-full">
            <div className="w-full rounded-none border-l-2 border-primary bg-background px-3 py-2">
              <p className="text-sm font-semibold leading-snug text-foreground">
                {machine.detail || machine.title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectsPage() {
  const [activeMachine, setActiveMachine] = useState<MachineEntry | null>(null);

  useEffect(() => {
    if (!activeMachine) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveMachine(null);
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [activeMachine]);

  const leftMachines = INFRASTRUCTURE.slice(0, Math.ceil(INFRASTRUCTURE.length / 2));
  const rightMachines = INFRASTRUCTURE.slice(Math.ceil(INFRASTRUCTURE.length / 2));
  const activeMachineIndex = activeMachine ? INFRASTRUCTURE.findIndex((machine) => machine.number === activeMachine.number) : -1;

  const showPreviousMachine = () => {
    if (!activeMachine) return;

    const currentIndex = INFRASTRUCTURE.findIndex((machine) => machine.number === activeMachine.number);
    const previousIndex = currentIndex <= 0 ? INFRASTRUCTURE.length - 1 : currentIndex - 1;
    setActiveMachine(INFRASTRUCTURE[previousIndex]);
  };

  const showNextMachine = () => {
    if (!activeMachine) return;

    const currentIndex = INFRASTRUCTURE.findIndex((machine) => machine.number === activeMachine.number);
    const nextIndex = currentIndex >= INFRASTRUCTURE.length - 1 ? 0 : currentIndex + 1;
    setActiveMachine(INFRASTRUCTURE[nextIndex]);
  };

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

          <div className="mt-8 grid gap-x-8 gap-y-6 md:grid-cols-2">
            <div className="flex flex-col gap-0">
              {leftMachines.map((machine) => (
                <button
                  key={machine.number}
                  type="button"
                  onClick={() => {
                    setActiveMachine(machine);
                  }}
                  className="grid w-full grid-cols-[42px_1fr] gap-4 border-b border-background/15 py-4 text-left transition-colors hover:bg-background/10"
                >
                  <span className="font-mono text-xs text-primary">{machine.number}</span>
                  <div>
                    <p className="font-bold">{machine.title}</p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-background/50">
                      {machine.detail}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            <div className="flex flex-col gap-0">
              {rightMachines.map((machine) => (
                <button
                  key={machine.number}
                  type="button"
                  onClick={() => {
                    setActiveMachine(machine);
                  }}
                  className="grid w-full grid-cols-[42px_1fr] gap-4 border-b border-background/15 py-4 text-left transition-colors hover:bg-background/10"
                >
                  <span className="font-mono text-xs text-primary">{machine.number}</span>
                  <div>
                    <p className="font-bold">{machine.title}</p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-background/50">
                      {machine.detail}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {activeMachine && (
            <MachineImagePopup
              machine={activeMachine}
              machineIndex={activeMachineIndex}
              onClose={() => setActiveMachine(null)}
              onPrevious={showPreviousMachine}
              onNext={showNextMachine}
            />
          )}
        </section>

        <div className="mt-20 border-t border-border pt-12">
          <PhotoGallery />
        </div>
      </div>
    </section>
  );
}
