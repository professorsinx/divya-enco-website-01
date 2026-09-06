import { motion } from "framer-motion";
import { Camera } from "lucide-react";
import bridgePhoto from "../assets/proj-bridge.jpg";
import machineryPhoto from "../assets/proj-machinery.jpg";
import pipelinePhoto from "../assets/proj-pipeline.jpg";
import steelPhoto from "../assets/proj-steel.jpg";

const PHOTO_SLOTS = [
  { image: machineryPhoto, title: "Machining / shop floor", meta: "Photo 01 / replace with VTL image" },
  { image: steelPhoto, title: "Fabrication / welded assembly", meta: "Photo 02 / replace with fabrication image" },
  { image: pipelinePhoto, title: "Industrial component work", meta: "Photo 03 / replace with component image" },
  { image: bridgePhoto, title: "Completed engineering work", meta: "Photo 04 / replace with delivery image" },
];

function PhotoSlot({ image, title, meta, index }: (typeof PHOTO_SLOTS)[number] & { index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="group relative overflow-hidden border border-border bg-card"
    >
      <div className="aspect-[4/3] overflow-hidden bg-secondary">
        <img src={image} alt={title} className="h-full w-full object-cover grayscale-[35%] transition duration-500 group-hover:scale-105 group-hover:grayscale-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/65 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-[0.18em] text-white/70">DE / GALLERY 0{index + 1}</span>
        <span className="absolute bottom-4 left-4 text-sm font-bold text-white">{title}</span>
      </div>
      <div className="flex items-center justify-between gap-3 border-t border-border px-4 py-3">
        <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">{meta}</span>
        <Camera size={15} className="shrink-0 text-primary" />
      </div>
    </motion.article>
  );
}

export function PhotoGallery() {
  return (
    <section aria-labelledby="photo-gallery-title">
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-primary">Photo gallery / upload bay</span>
          <h2 id="photo-gallery-title" className="mt-3 text-3xl font-black tracking-tight text-foreground md:text-5xl">Show the work. Leave room for the next job.</h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">A dedicated image surface for shop-floor, machine, component and completed-work photography.</p>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {PHOTO_SLOTS.map((slot, index) => <PhotoSlot key={slot.title} {...slot} index={index} />)}
      </div>
    </section>
  );
}
