import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Camera } from "lucide-react";
import product1 from "../../Images/webp/product 1.webp";
import product2 from "../../Images/webp/product 2.webp";
import product3 from "../../Images/webp/product 3.webp";
import product4 from "../../Images/webp/product 4.webp";
import product5 from "../../Images/webp/product 5.webp";
import product6 from "../../Images/webp/product 6.webp";
import product7 from "../../Images/webp/product 7.webp";

const PRODUCT_PHOTOS = [
  {
    image: product1,
    title: "DIFFUSER",
    location: "Process / Air Distribution",
    usage: "Diffuser profile used for controlled outlet flow integration and product-air balancing.",
  },
  {
    image: product2,
    title: "EVENER BEAM IN ASSEMBLY",
    location: "Nuclear / Assembly Line",
    usage: "Evener beam assembly used for balancing and alignment in nuclear service manufacturing.",
  },
  {
    image: product3,
    title: "INLET GUIDE VANE",
    location: "Flow Control / Aero Module",
    usage: "Inlet guide vane produced for flow-control adjustment and aerodynamic performance.",
  },
  {
    image: product4,
    title: "SHOP FLOOR",
    location: "Manufacturing Cell",
    usage: "Shop-floor production activity showing the engineering environment and fabrication workflow.",
  },
  {
    image: product5,
    title: "MIXING BOX ASSEMBLY",
    location: "Process / Assembly",
    usage: "Mixing box assembly used for process integration and plant-side system preparation.",
  },
  {
    image: product6,
    title: "ASSEMBLED AIR CYLINDERS",
    location: "Power Plant / QCNR",
    usage: "Air cylinders assembled for QCNR mechanism support and power-plant operating systems.",
  },
  {
    image: product7,
    title: "ASSEMBLED AIR CYLINDERS",
    location: "Power Plant / QCNR",
    usage: "Air cylinders assembled for QCNR mechanism support and power-plant operating systems.",
  },
];

export function PhotoGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activePhoto = PRODUCT_PHOTOS[activeIndex];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % PRODUCT_PHOTOS.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section aria-labelledby="photo-gallery-title">
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-primary">
            Photo gallery
          </span>
          <h2
            id="photo-gallery-title"
            className="mt-3 text-3xl font-black tracking-tight text-foreground md:text-5xl"
          >
            Engineering brought to life.
          </h2>
        </div>
        <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
          <Camera size={15} className="text-primary" />
          <span>
            Product {activeIndex + 1} / {PRODUCT_PHOTOS.length}
          </span>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-5xl overflow-hidden border border-border bg-card">
        <div className="grid min-h-[420px] grid-cols-1 gap-0 md:grid-cols-[minmax(420px,1.5fr)_minmax(220px,0.9fr)]">
          <div className="relative aspect-[16/9] min-h-[340px] overflow-hidden bg-secondary/60 md:aspect-auto md:min-h-[420px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={activePhoto.image}
                src={activePhoto.image}
                alt={activePhoto.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.1, ease: "easeInOut" }}
                className="absolute inset-0 h-full w-full object-contain p-4 md:p-6"
              />
            </AnimatePresence>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
            <span className="absolute left-5 top-5 font-mono text-[10px] uppercase tracking-[0.18em] text-white/75">
              DE / PRODUCT 0{activeIndex + 1}
            </span>
          </div>

          <div className="flex flex-col justify-between border-t border-border bg-background px-5 py-5 md:border-l md:border-t-0">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.20em] text-primary">
                {activePhoto.title}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                {activeIndex + 1} / {PRODUCT_PHOTOS.length}
              </span>
            </div>

            <div className="mt-4 flex-1">
              <div className="border-l-2 border-primary bg-card px-3 py-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.20em] text-muted-foreground">
                  Location
                </span>
                <p className="mt-2 text-sm font-bold uppercase leading-relaxed text-foreground">
                  {activePhoto.location}
                </p>
              </div>

              <div className="mt-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.20em] text-muted-foreground">
                  Use / reason
                </span>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {activePhoto.usage}
                </p>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between gap-4 border-t border-border pt-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                Engineering product profile
              </p>
              <div className="flex items-center gap-2" aria-label="Select product photo">
                {PRODUCT_PHOTOS.map((photo, index) => (
                  <button
                    key={photo.title}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Show ${photo.title}`}
                    aria-current={index === activeIndex ? "true" : undefined}
                    className={`h-1.5 transition-all ${index === activeIndex ? "w-8 bg-primary" : "w-1.5 bg-border hover:bg-primary/60"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
