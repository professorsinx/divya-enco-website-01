import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Camera, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

const IMAGES = import.meta.glob("../../Images/webp/*.webp", {
  eager: true,
  import: "default",
  query: "?url",
}) as Record<string, string>;
type Photo = { file: string; name: string; description: string };
const product = (file: string, name: string, description: string): Photo => ({
  file,
  name,
  description,
});
const PRODUCT_PHOTOS = [
  product(
    "22” Coal GATE ASSY.webp",
    "22” Coal Gate Assembly",
    "A 22-inch coal gate assembly controls or isolates the passage of fuel in a handling system. Secure operation supports safer maintenance and dependable fuel delivery to the boiler.",
  ),
  product(
    "36”YOKE  (VTL OPERATION).webp",
    "36” Yoke (VTL Operation)",
    "A 36-inch valve yoke keeps the valve stem and actuator accurately aligned while the valve opens or closes. Its rigidity supports repeatable travel and dependable flow control under demanding service.",
  ),
  product(
    "Air  Oil Cylinder Assembly.webp",
    "Air Oil Cylinder Assembly",
    "Air and oil cylinders convert regulated pressure into reliable linear motion. They operate gates, dampers and other critical mechanisms where responsive plant control is essential.",
  ),
  product(
    "Air  Oil Cylinder Assembly - 2.webp",
    "Air Oil Cylinder Assembly 2",
    "This air and oil cylinder assembly converts regulated pressure into reliable linear motion. Its controlled response supports dependable operation of gates, dampers and plant auxiliaries.",
  ),
  product(
    "AIR SEAL ASSY (APH).webp",
    "Air Seal Assembly (APH)",
    "An air-preheater seal limits leakage between hot flue gas and incoming combustion air. Reliable sealing protects boiler efficiency, reduces fan power demand and supports stable operation.",
  ),
  product(
    "ASM Actuator Assembly.webp",
    "ASM Actuator Assembly",
    "Actuator assemblies provide controlled movement for dampers, gates and other boiler auxiliaries. Their dependable response helps operators regulate air and gas flow during changing load conditions.",
  ),
  product(
    "Assembled Air Cylinders for QCNR Mechanism.webp",
    "Assembled Air Cylinders for QCNR Mechanism",
    "Assembled air cylinders provide the force to move gates, dampers and other plant mechanisms. Dependable actuation is essential when boiler operators need prompt, remote control of flow paths.",
  ),
  product(
    "Assembled Air Cylinders for QCNR Mechanism 2.webp",
    "Assembled Air Cylinders for QCNR Mechanism 2",
    "Assembled air cylinders provide the force to move gates, dampers and other plant mechanisms. Dependable actuation is essential when boiler operators need prompt, remote control of flow paths.",
  ),
  product(
    "BASE FRAME.webp",
    "Base Frame",
    "A fabricated base frame provides a level, rigid foundation for mounted equipment. Accurate alignment helps rotating and driven boiler auxiliaries operate with less vibration and wear.",
  ),
  product(
    "BASE FRAME (ASSY).webp",
    "Base Frame Assembly",
    "This fabricated base-frame assembly provides a level, rigid foundation for mounted equipment. Accurate alignment helps rotating and driven boiler auxiliaries operate with less vibration and wear.",
  ),
  product(
    "BEARING HOUSING.webp",
    "Bearing Housing",
    "A bearing housing supports rotating shafts while protecting the bearing from contamination and misalignment. Its precision directly affects vibration, service life and equipment reliability.",
  ),
  product(
    "BEARING HOUSING 2.webp",
    "Bearing Housing 2",
    "This bearing housing supports rotating shafts while protecting the bearing from contamination and misalignment. Accurate machining helps maintain service life and equipment reliability.",
  ),
  product(
    "BEARING INNER SET (BRASS).webp",
    "Bearing Inner Set (Brass)",
    "A brass bearing insert supports smooth, low-friction motion in a loaded mechanism. Correct clearances help prevent seizure and keep essential equipment available between maintenance intervals.",
  ),
  product(
    "Coal feeder component (Feeder Body) 2.webp",
    "Coal Feeder Component",
    "The feeder body supports the controlled delivery of coal to the mill or furnace. Its integrity is essential for consistent fuel flow, combustion stability and safe plant availability.",
  ),
  product(
    "DIFFUSER.webp",
    "Diffuser",
    "A diffuser profile guides and distributes air through a controlled flow path. In boiler-air systems, uniform distribution supports efficient combustion and reduces uneven loading on downstream equipment.",
  ),
  product(
    "DISH END (VTL OPERATION).webp",
    "Dish End (VTL Operation)",
    "Dished ends close pressure vessels and process equipment with a shape designed to distribute load. Careful machining supports safe pressure containment and consistent assembly fit.",
  ),
  product(
    "DISHED HEAD.webp",
    "Dished Head",
    "Dished heads close pressure vessels and process equipment with a shape designed to distribute load. Careful machining supports safe pressure containment and consistent assembly fit.",
  ),
  product(
    "EP MACHING FOR STEAM FLOW PIPE (1000).webp",
    "EP Machining for Steam Flow Pipe",
    "Machined steam-flow piping components must maintain accurate dimensions and sealing faces. This protects high-temperature steam circuits from leakage and unplanned downtime.",
  ),
  product(
    "EP MACHING FOR STEAM FLOW PIPE (1000) 2.webp",
    "EP Machining for Steam Flow Pipe 2",
    "This steam-flow pipe machining operation maintains accurate dimensions and sealing faces. Precision protects high-temperature circuits from leakage and unplanned downtime.",
  ),
  product(
    "Evener Beam for Nuclear Applications.webp",
    "Evener Beam for Nuclear Applications",
    "An evener beam shares a lifting or assembly load across multiple connection points. It improves safe handling and alignment of large boiler components during manufacture and maintenance.",
  ),
  product(
    "FORMER FOR PIPE ROLLING.webp",
    "Former for Pipe Rolling",
    "A pipe-rolling former sets the required bend and profile during fabrication. Consistent forming helps piping fit correctly in high-temperature steam and process installations.",
  ),
  product(
    "Girder pin connection.webp",
    "Girder Pin Connection",
    "Pin connections join structural members while allowing the intended assembly movement or alignment. Sound fabrication helps supports and equipment structures carry operational loads reliably.",
  ),
  product(
    "ILLUMINATOR BOX ASSY. (Valves Water Level Assembly).webp",
    "Illuminator Box Assembly",
    "This assembly supports visibility and indication around a water-level valve arrangement. Clear level monitoring is a vital boiler-safety function, helping operators respond before conditions become hazardous.",
  ),
  product(
    "Inner Guide Vane Assy. – Circular type(Boiler Fan Component).webp",
    "Circular Inlet Guide Vane Assembly",
    "Guide vanes regulate the air entering a boiler fan before it reaches the blades. Accurate movement improves fan efficiency and gives operators responsive airflow control.",
  ),
  product(
    "Inner Guide Vane Assy. – Cone type(Boiler Fan Component).webp",
    "Cone Inlet Guide Vane Assembly",
    "Guide vanes regulate the air entering a boiler fan before it reaches the blades. Accurate movement improves fan efficiency and gives operators responsive airflow control.",
  ),
  product(
    "ISO_cert.webp",
    "ISO Certification",
    "This certificate documents the quality-management system supporting controlled manufacturing processes. Traceable processes and inspections are fundamental when components serve critical energy and process equipment.",
  ),
  product(
    "ISO.GATE AIR CYLINDER.webp",
    "ISO Gate Air Cylinder",
    "Pneumatic gate cylinders provide dependable opening and closing force for isolation equipment. Their performance is important for safe control and maintenance of process flow paths.",
  ),
  product(
    "Measuring Pin for Nuclear Applications.webp",
    "Measuring Pin for Nuclear Applications",
    "A measuring pin supports precise inspection and alignment in nuclear-equipment manufacture. Its dimensional accuracy helps confirm fit, position and repeatability in critical assemblies.",
  ),
  product(
    "Mixing Box Assembly.webp",
    "Mixing Box Assembly",
    "A mixing-box assembly combines or directs separate air and gas streams in a controlled path. Sound fabrication helps thermal systems maintain the intended flow, temperature and pressure balance.",
  ),
  product(
    "MOTOR BASE FRAME.webp",
    "Motor Base Frame",
    "A motor base frame supports and aligns a motor with its driven equipment. A rigid, accurately fabricated base helps control vibration and maintain reliable power transmission.",
  ),
  product(
    "OBSERVATION PORT ASSY..webp",
    "Observation Port Assembly",
    "An observation port provides a protected viewing point into a process enclosure. In combustion equipment, it lets operators inspect flame and furnace conditions without opening the system.",
  ),
  product(
    "PACKING RETAINER ASSY WITH SPOOL (APH).webp",
    "Packing Retainer Assembly with Spool",
    "This assembly retains sealing elements within an air-preheater mechanism. It helps maintain alignment and leakage control where high temperatures and continuous rotation demand dependable fit-up.",
  ),
  product(
    "PAPER COVER MAKING MACHINE DRUM.webp",
    "Paper Cover Making Machine Drum",
    "A precision drum provides the stable rotating surface needed in paper-cover manufacturing. Correct geometry and balance help deliver uniform output and reduce wear in continuous production.",
  ),
  product(
    "PNEUMATIC CYLINDER WITH SOLINOID SYSTEM 1.webp",
    "Pneumatic Cylinder with Solenoid System",
    "A solenoid-controlled pneumatic cylinder provides fast, repeatable actuation from an electrical command. It supports reliable remote operation of dampers, valves and gates.",
  ),
  product(
    "PNEUMATIC CYLINDER WITH SOLINOID SYSTEM 2.webp",
    "Pneumatic Cylinder with Solenoid System 2",
    "A solenoid-controlled pneumatic cylinder provides fast, repeatable actuation from an electrical command. It supports reliable remote operation of dampers, valves and gates.",
  ),
  product(
    "Inlet Guide Vane.webp",
    "Inlet Guide Vane",
    "An inlet guide vane adjusts the air admitted to a fan before the air reaches the impeller. This enables efficient combustion-air control as boiler demand rises or falls.",
  ),
  product(
    "QCNRV BODY (DRILLING OPERATION).webp",
    "QCNRV Body (Drilling Operation)",
    "A non-return valve body forms the pressure boundary for one-way flow control. Precise drilling and machining support secure sealing and prevent reverse flow from upsetting a critical process circuit.",
  ),
  product(
    "SEPARATOR PLATE.webp",
    "Separator Plate",
    "Separator plates divide or guide internal flow paths in equipment assemblies. Their dimensions and surface condition help maintain the intended flow distribution and assembly clearances.",
  ),
  product(
    "SHELL (used for Mines).webp",
    "Shell for Mining",
    "This fabricated shell is intended for mining equipment rather than a thermal boiler. Its heavy-duty construction provides containment and structural strength in abrasive material-handling service.",
  ),
  product(
    "Shop Floor.webp",
    "Shop Floor",
    "This shop-floor image shows the controlled fabrication environment behind critical industrial components. Skilled handling, inspection and process discipline turn raw material into dependable plant equipment.",
  ),
  product(
    "Spool seal Assy.  (APH).webp",
    "Spool Seal Assembly (APH)",
    "Spool seal assemblies help control air leakage within rotating air-preheater equipment. Effective sealing preserves combustion-air temperature and contributes to thermal efficiency.",
  ),
  product(
    "TROMMEL FOR MINING PROJECT.webp",
    "Trommel for Mining Project",
    "A trommel is a rotating screening drum used to separate material by size in mining operations. This is industrial screening equipment, not a thermal-boiler component.",
  ),
  product(
    "TUBE SHEET.webp",
    "Tube Sheet",
    "Tube sheets locate and seal heat-exchanger tubes between process chambers. Their machining accuracy is critical to prevent cross-leakage and sustain efficient heat transfer under pressure.",
  ),
  product(
    "VALVE BODY (HORIZ.BORING OPERATION.webp",
    "Valve Body (Horizontal Boring Operation)",
    "A valve body contains the flow passage and pressure boundary of a control or isolation valve. Accurate boring supports secure seating and dependable operation in high-energy process lines.",
  ),
  product(
    "VALVE YOKE (MILLING OPERATION.webp",
    "Valve Yoke (Milling Operation)",
    "A valve yoke joins the valve body to its operating mechanism, keeping the stem correctly guided. Careful milling protects alignment and reliable valve travel during process control.",
  ),
].map((photo) => ({ ...photo, image: IMAGES[`../../Images/webp/${photo.file}`] }));

export function PhotoGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const activePhoto = PRODUCT_PHOTOS[activeIndex];
  const previous = () =>
    setActiveIndex((index) => (index - 1 + PRODUCT_PHOTOS.length) % PRODUCT_PHOTOS.length);
  const next = () => setActiveIndex((index) => (index + 1) % PRODUCT_PHOTOS.length);
  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(
      () => setActiveIndex((index) => (index + 1) % PRODUCT_PHOTOS.length),
      6500,
    );
    return () => window.clearInterval(timer);
  }, [isPaused]);
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
                alt={activePhoto.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.1, ease: "easeInOut" }}
                className="absolute inset-0 h-full w-full object-contain p-4 md:p-6"
              />
            </AnimatePresence>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
            <span className="absolute left-5 top-5 font-mono text-[10px] uppercase tracking-[0.18em] text-white/75">
              DE / PRODUCT {String(activeIndex + 1).padStart(2, "0")}
            </span>
            <button
              type="button"
              onClick={() => setIsPaused((paused) => !paused)}
              aria-label={isPaused ? "Resume photo gallery" : "Pause photo gallery"}
              aria-pressed={isPaused}
              title={isPaused ? "Resume photo gallery" : "Pause photo gallery"}
              className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center border border-white/15 bg-foreground/20 text-background opacity-35 transition hover:border-white/40 hover:bg-foreground/45 hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary md:right-6"
            >
              {isPaused ? <Play size={14} fill="currentColor" /> : <Pause size={14} />}
            </button>
            <div className="absolute inset-x-4 top-1/2 flex -translate-y-1/2 items-center justify-between md:inset-x-6">
              <button
                type="button"
                onClick={previous}
                aria-label="Show previous product photo"
                className="flex h-9 w-9 items-center justify-center border border-white/25 bg-foreground/65 text-background transition-colors hover:border-primary hover:bg-foreground"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Show next product photo"
                className="flex h-9 w-9 items-center justify-center border border-white/25 bg-foreground/65 text-background transition-colors hover:border-primary hover:bg-foreground"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-between border-t border-border bg-background px-5 py-5 md:border-l md:border-t-0">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.20em] text-primary">
                {activePhoto.name}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                {activeIndex + 1} / {PRODUCT_PHOTOS.length}
              </span>
            </div>
            <div className="mt-4 flex-1">
              <div className="border-l-2 border-primary bg-card px-3 py-3">
                <p className="text-sm font-bold uppercase leading-relaxed text-foreground">
                  {activePhoto.name}
                </p>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {activePhoto.description}
              </p>
            </div>
            <div className="mt-6 flex items-center justify-between gap-4 border-t border-border pt-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                Engineering product profile
              </p>
              <div className="flex items-center gap-2" aria-label="Select product photo">
                {PRODUCT_PHOTOS.map((photo, index) => (
                  <button
                    key={photo.file}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Show ${photo.name}`}
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
