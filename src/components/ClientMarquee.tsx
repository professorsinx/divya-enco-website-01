import bhelLogo from "../assets/bhel.png";

const CLIENTS = [
  { name: "BHEL", location: "Trichy / Ranipet", logo: bhelLogo },
  { name: "Loesche India", location: "", logo: "" },
  { name: "GEECO Enercon Pvt Ltd", location: "", logo: "" },
  { name: "ATS Engineering Industries, Salem", location: "", logo: "" },
  { name: "Sreewari Engineers Pvt Ltd", location: "", logo: "" },
];

function ClientMark({ name, location, logo }: (typeof CLIENTS)[number]) {
  return (
    <div className="glass mx-3 flex h-20 w-56 shrink-0 items-center gap-4 rounded-xl px-5">
      <div className="flex h-12 items-center">
        {logo ? (
          <img
            src={logo}
            alt={`${name} logo`}
            className="max-h-10 w-auto max-w-[150px] object-contain"
          />
        ) : (
          <span className="font-black tracking-[0.06em] text-foreground/75">{name}</span>
        )}
      </div>
      {location && (
        <p className="ml-auto max-w-[92px] font-mono text-xs uppercase tracking-[0.1em] text-muted-foreground">
          {location}
        </p>
      )}
    </div>
  );
}

export function ClientMarquee() {
  const loop = [...CLIENTS, ...CLIENTS];

  return (
    <section className="border-b border-border bg-card/45 px-4 py-12 md:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-primary">
            Customers & relationships
          </p>
          <h2 className="mt-3 text-2xl font-black tracking-tight text-foreground md:text-3xl">
            Built on long-term customer relationships
          </h2>
        </div>
        <div className="relative mt-9 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-card/45 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-card/45 to-transparent" />
          <div className="flex w-max animate-marquee">
            {loop.map((client, index) => (
              <ClientMark key={`${client.name}-${index}`} {...client} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
