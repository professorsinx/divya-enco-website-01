import type { ReactNode } from "react";
import airCylinder from "../../Images/webp/Air  Oil Cylinder Assembly.webp";
import guideVane from "../../Images/webp/Inner Guide Vane Assy. – Cone type(Boiler Fan Component).webp";
import airPreheater from "../../Images/webp/AIR SEAL ASSY (APH).webp";
import evenerBeam from "../../Images/webp/Evener Beam for Nuclear Applications.webp";
import measuringPin from "../../Images/webp/Measuring Pin for Nuclear Applications.webp";
import gateAssembly from "../../Images/webp/22” Coal GATE ASSY.webp";
import hydraulicActuator from "../../Images/webp/ASM Actuator Assembly.webp";
import bearingHousing from "../../Images/webp/BEARING HOUSING.webp";
import coalFeeder from "../../Images/webp/Coal feeder component (Feeder Body) 2.webp";
import heatExchanger from "../../Images/webp/TUBE SHEET.webp";
import packingRetainer from "../../Images/webp/PACKING RETAINER ASSY WITH SPOOL (APH).webp";
import paperDrum from "../../Images/webp/PAPER COVER MAKING MACHINE DRUM.webp";
import machining from "../../Images/webp/VALVE BODY (HORIZ.BORING OPERATION.webp";

const PRODUCTS = [
  { title: "Pneumatic and Hydraulic Cylinders", image: airCylinder },
  { title: "Inlet Guide Vanes", image: guideVane },
  { title: "Air Preheater Components", image: airPreheater },
  { title: "Fabrication & Machining", image: machining },
  { title: "Evener Beam for Nuclear Applications", image: evenerBeam },
  { title: "Measuring Pin for Nuclear Applications", image: measuringPin },
  { title: "Gate Assembly", image: gateAssembly },
  { title: "Hydraulic Actuator (HPLP Bypass System)", image: hydraulicActuator },
  { title: "Bearing Housing", image: bearingHousing },
  { title: "Coal Feeder Component", image: coalFeeder },
  { title: "Heat Exchanger Component", image: heatExchanger },
  { title: "Packing Retainer Assembly", image: packingRetainer },
  { title: "Paper Making Drum Machine", image: paperDrum },
] as const;

export function MissionCriticalProducts({ action }: { action?: ReactNode }) {
  return (
    <ul className="mt-7 grid gap-x-6 border-t border-border sm:grid-cols-2 lg:grid-cols-3">
      {PRODUCTS.map((product, index) => (
        <li key={product.title} className="group relative border-b border-border">
          <div className="flex min-h-14 items-center gap-3 py-3 text-sm font-medium text-foreground">
            <span className="font-mono text-[10px] text-primary">{String(index + 1).padStart(2, "0")}</span>
            <span>{product.title}</span>
          </div>
          <div
            className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-2 hidden w-64 -translate-x-1/2 translate-y-2 scale-[0.97] overflow-hidden border border-border bg-card p-2 opacity-0 shadow-[var(--shadow-elevated)] transition duration-200 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 sm:block"
          >
            <img src={product.image} alt="" className="aspect-[4/3] w-full object-cover" />
            <span className="block px-1 pb-1 pt-2 font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
              Divya Enco / product profile
            </span>
          </div>
        </li>
      ))}
      {action && <li className="flex items-start pt-3 lg:col-start-3">{action}</li>}
    </ul>
  );
}