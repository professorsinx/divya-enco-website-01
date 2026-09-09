import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Camera } from "lucide-react";
import product1 from "../../Images/product 1.jpg";
import product2 from "../../Images/product 2.jpg";
import product3 from "../../Images/product 3.jpg";
import product4 from "../../Images/product 4.jpg";
import product5 from "../../Images/product 5.jpg";
import product6 from "../../Images/product 6.jpg";
import product7 from "../../Images/product 7.jpg";

const PRODUCT_PHOTOS = [
  { image: product1, title: "Diffuser" },
  { image: product2, title: "Evener Beam in assembly for nuclear application" },
  { image: product3, title: "Inlet guide vane" },
  { image: product4, title: "Shop floor" },
  { image: product5, title: "Mixing Box assembly 5" },
  { image: product6, title: "Assembled Air Cylinders for QCNR mechanism in power plant 6" },
  { image: product7, title: "Assembled Air Cylinders for QCNR mechanism in power plant" },
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

      <div className="mt-8 overflow-hidden border border-border bg-card">
        <div className="relative aspect-[16/9] overflow-hidden bg-secondary/60">
          <AnimatePresence mode="wait">
            <motion.img
              key={activePhoto.image}
              src={activePhoto.image}
              alt={activePhoto.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.1, ease: "easeInOut" }}
              className="absolute inset-0 h-full w-full object-contain p-4 md:p-8"
            />
          </AnimatePresence>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
          <span className="absolute left-5 top-5 font-mono text-[10px] uppercase tracking-[0.18em] text-white/75">
            DE / PRODUCT 0{activeIndex + 1}
          </span>
          <span className="absolute bottom-5 left-5 text-sm font-bold text-white">
            {activePhoto.title}
          </span>
        </div>
        <div className="flex items-center justify-between gap-4 border-t border-border px-4 py-4 md:px-6">
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
    </section>
  );
}
