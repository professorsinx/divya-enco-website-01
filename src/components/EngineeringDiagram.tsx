type DiagramKind = "lathe" | "cylinder" | "guide-vane";

export function EngineeringDiagram({
  kind = "lathe",
  label,
  className = "",
}: {
  kind?: DiagramKind;
  label: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 640 420"
      role="img"
      aria-label={label}
      className={`h-auto w-full ${className}`}
    >
        <defs>
          <pattern id="section-hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
            <path d="M0 0v8" className="stroke-accent/35" strokeWidth="2" />
          </pattern>
          <marker id="arrow" markerWidth="8" markerHeight="8" refX="5" refY="4" orient="auto">
            <path d="M0 0 8 4 0 8" className="fill-none stroke-accent" strokeWidth="1.5" />
          </marker>
        </defs>
      <g className="fill-none stroke-primary [stroke-linecap:round] [stroke-linejoin:round]">
          <path className="stroke-muted-foreground/40 [stroke-dasharray:7_9]" strokeWidth="1.5" d="M42 210h556M320 28v364" />
        {kind === "lathe" && (
          <>
              <path strokeWidth="3" d="M112 278h416M145 278V153h96v125M399 278V136h93v142M180 153V95h68v58M419 136V82h55v54" />
              <path className="fill-section-hatch" fill="url(#section-hatch)" strokeWidth="2" d="M218 153h164v74H218z" />
              <circle cx="300" cy="190" r="86" strokeWidth="3" />
              <circle cx="300" cy="190" r="48" strokeWidth="2" />
              <circle cx="300" cy="190" r="8" strokeWidth="2" />
              <circle cx="300" cy="190" r="72" className="stroke-accent/60 [stroke-dasharray:3_7]" strokeWidth="1.5" />
              <path strokeWidth="2" d="M300 104v-34M300 276v34M214 190h-34M386 190h34" />
              <path className="stroke-accent" strokeWidth="3" d="M145 323h347M145 318v10M492 318v10" />
              <path className="stroke-accent" strokeWidth="2" d="M246 76h108M246 71v10M354 71v10" markerEnd="url(#arrow)" />
              <path className="stroke-accent" strokeWidth="1.5" d="M386 142 505 82h66M386 142h75" />
          </>
        )}
        {kind === "cylinder" && (
          <>
              <path strokeWidth="3" d="M126 164h350l38 46-38 46H126l-38-46 38-46Z" />
              <path fill="url(#section-hatch)" strokeWidth="2" d="M164 164h50v92h-50zM388 164h50v92h-50z" />
              <path strokeWidth="2" d="M164 164v92M438 164v92M214 164v92M388 164v92" />
              <path strokeWidth="3" d="M126 186H66v48h60M476 186h52v48h-52" />
              <path className="stroke-accent" strokeWidth="3" d="M256 210h116M358 194l16 16-16 16" markerEnd="url(#arrow)" />
              <path className="stroke-accent" strokeWidth="2" d="M88 310h402M88 304v12M490 304v12M214 136v-34h174v34" />
              <path className="stroke-accent" strokeWidth="1.5" d="M438 164 536 96h45M438 256 536 302h45" />
          </>
        )}
        {kind === "guide-vane" && (
          <>
            <circle cx="320" cy="210" r="122" strokeWidth="3" />
            <circle cx="320" cy="210" r="35" strokeWidth="2" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
              <path
                key={angle}
                strokeWidth="3"
                transform={`rotate(${angle} 320 210)`}
                d="M320 175c56-6 87-27 108-59-48 8-85 28-108 68"
              />
            ))}
            <circle cx="320" cy="210" r="94" className="stroke-accent/60 [stroke-dasharray:2_8]" strokeWidth="1.5" />
            <path className="stroke-accent" strokeWidth="1.5" d="M320 88v-35h82M442 210h86v-25" />
            <path className="stroke-accent" strokeWidth="1.5" d="M285 210h-98v86h-54" />
            <path className="stroke-accent" strokeWidth="2" d="M118 350h404M118 344v12M522 344v12" />
          </>
        )}
      </g>
      <g className="fill-current text-muted-foreground">
        <text x="48" y="52" className="font-mono text-[13px] tracking-[0.16em]">DE / TECHNICAL STUDY</text>
        <text x="505" y="79" className="font-mono text-[10px] tracking-[0.12em]">DATUM A</text>
        <text x="535" y="181" className="font-mono text-[10px] tracking-[0.12em]">01</text>
        <text x="130" y="307" className="font-mono text-[10px] tracking-[0.12em]">SECTION B-B</text>
        <text x="48" y="382" className="font-mono text-[12px] tracking-[0.12em]">NOT TO SCALE / ENGINEERING DETAIL</text>
      </g>
      <g className="fill-none stroke-muted-foreground/55" strokeWidth="1">
        <rect x="438" y="330" width="150" height="54" />
        <path d="M438 348h150M438 366h150M515 330v54" />
      </g>
      <g className="fill-current text-muted-foreground">
        <text x="445" y="343" className="font-mono text-[8px] tracking-[0.1em]">DIVYA ENCO</text>
        <text x="445" y="361" className="font-mono text-[8px] tracking-[0.1em]">DWG / {kind.toUpperCase()}</text>
        <text x="522" y="343" className="font-mono text-[8px] tracking-[0.1em]">REV 01</text>
        <text x="522" y="361" className="font-mono text-[8px] tracking-[0.1em]">SCALE NTS</text>
        <text x="522" y="378" className="font-mono text-[8px] tracking-[0.1em]">SHEET 01</text>
      </g>
    </svg>
  );
}