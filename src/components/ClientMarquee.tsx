import bhelLogo from "../assets/bhel.png";

const CLIENTS = [
  { name: "BHEL", location: "Trichy / Ranipet", logo: bhelLogo, url: "https://trichy.bhel.com/" },
  { name: "Loesche India", location: "", logo: "/Loesche logo.svg", url: "https://www.loesche.com/" },
  { name: "GEECO Enercon Pvt Ltd", location: "Trichy", logo: "/geeco.png", url: "https://www.geeco.in/" },
  {
    name: "ATS Engineering Industries",
    location: "Salem",
    logo: "/ats-logo.png",
    url: "https://atschem.in/",
  },
  {
    name: "Sreewari Engineers Pvt Ltd",
    location: "Chennai",
    logo: "/sreewari.jpg",
    url: "https://sreewariengineers.com/",
  },
  {
    name: "Guru Engineering Works",
    location: "Trichy",
    logo: "/guru logo.png",
    url: "https://guruengg.co.in",
  }, 
  {
    name: "Jindal Power",
    location: "",
    logo: "/jindal power logo.svg",
    url: "https://www.jindalpower.com/",
  },
    {
    name: "Sisco Energy Pvt. Ltd",
    location: "Pudukottai",
    logo: "/sisco-logo.jpeg",
    url: "https://www.siscoenergy.com/",
  }, 
    {
    name: "Tata Power - Maithon Mega Power Project",
    location: "Maithon",
    logo: "/tatapower.svg",
    url: "https://www.tatapower.com/energy-solutions/thermal-energy/maithon-plant",
  },   
];

function ClientMark({ name, location, logo, url }: (typeof CLIENTS)[number]) {
  const companyNameLength = Math.max(name.length, 8);
  const widthClass = companyNameLength > 22 ? "w-[260px]" : companyNameLength > 14 ? "w-[220px]" : "w-[180px]";

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className={`client-mark glass group mx-3 flex h-30 ${widthClass} shrink-0 flex-col items-center justify-center gap-1 rounded-xl px-5 py-3 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2`}
      aria-label={`Visit ${name} website`}
    >
      <div className="flex h-12 w-full items-center justify-center">
        {logo ? (
          <img
            src={logo}
            alt={`${name} logo`}
            className="max-h-10 w-auto max-w-[150px] rounded-[4px] object-contain"
          />
        ) : (
          <span className="h-8 w-8 rounded-full border border-border/70 bg-background/40 text-center font-mono text-[10px] uppercase leading-8 tracking-[0.14em] text-muted-foreground">
            {name.slice(0, 2)}
          </span>
        )}
      </div>

      <span className="text-center font-black text-[11px] uppercase leading-tight tracking-[0.06em] text-foreground/75 transition-colors duration-300 group-hover:text-foreground">
        {name}
      </span>

      {location && (
        <p className="max-w-[150px] text-center font-mono text-[9px] uppercase leading-relaxed tracking-[0.1em] text-muted-foreground transition-colors duration-300 group-hover:text-foreground/90">
          {location}
        </p>
      )}
    </a>
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
