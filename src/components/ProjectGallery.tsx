import { motion } from "framer-motion";
import { ArrowUpRight, Cog, Flame, Ruler, ScanLine } from "lucide-react";
import airCylinder from "../../Images/webp/Air  Oil Cylinder Assembly.webp";
import guideVane from "../../Images/webp/Inner Guide Vane Assy. – Cone type(Boiler Fan Component).webp";
import airPreheater from "../../Images/webp/AIR SEAL ASSY (APH).webp";
import machining from "../../Images/webp/VALVE BODY (HORIZ.BORING OPERATION.webp";

const WORKSTREAMS = [
  { title: "Pneumatic and hydraulic cylinders", tag: "Product profile", Icon: Cog, image: airCylinder, description: "Manufacturing components for demanding industrial systems with controlled processes and inspection." },
  { title: "Inlet guide vanes", tag: "Product profile", Icon: Ruler, image: guideVane, description: "Machining and fabrication capability for engineered flow-control components." },
  { title: "Air preheater components", tag: "Product profile", Icon: ScanLine, image: airPreheater, description: "Reliable components supported by traceability, testing and a quality-first workflow." },
  { title: "Contract fabrication & machining", tag: "Core capability", Icon: Flame, image: machining, description: "A flexible shop floor combining cutting, welding, machining, assembly and measurement." },
];

function WorkstreamCard({ workstream, index }: { workstream: (typeof WORKSTREAMS)[number]; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      className="group relative border border-border bg-card/70 p-6 transition-colors hover:border-primary"
    >
      <div className="flex items-start justify-between">
        <div className="grid h-12 w-12 place-items-center border border-primary/40 bg-primary/5 text-primary">
          <workstream.Icon size={22} strokeWidth={1.5} />
        </div>
        <span className="font-mono text-xs text-muted-foreground">0{index + 1}</span>
      </div>
      <p className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-primary">{workstream.tag}</p>
      <div className="mt-2 flex items-start justify-between gap-3">
        <h3 className="text-xl font-bold text-foreground">{workstream.title}</h3>
        <ArrowUpRight size={19} className="shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{workstream.description}</p>
      <div className="pointer-events-none absolute bottom-full right-0 z-20 mb-2 hidden w-56 translate-y-2 scale-[0.97] overflow-hidden border border-border bg-card p-2 opacity-0 shadow-[var(--shadow-elevated)] transition duration-200 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 md:block">
        <img src={workstream.image} alt="" className="aspect-[4/3] w-full object-cover" />
        <span className="block px-1 pb-1 pt-2 font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
          Divya Enco / product profile
        </span>
      </div>
    </motion.article>
  );
}

export function ProjectGallery() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {WORKSTREAMS.map((workstream, index) => (
        <WorkstreamCard key={workstream.title} workstream={workstream} index={index} />
      ))}
    </div>
  );
}