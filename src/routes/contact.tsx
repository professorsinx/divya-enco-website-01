import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ExternalLink, MapPin, Mail, Phone, Clock } from "lucide-react";

const MAPS_URL = "https://share.google/cZrdSYVdYsBsmT9Ji";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Divya Enco Engineering" },
      {
        name: "description",
        content:
          "Contact Divya Enco for machining, fabrication, welding, assembly and industrial component requirements.",
      },
      { property: "og:title", content: "Contact — Divya Enco Engineering" },
      {
        property: "og:description",
        content: "Reach Divya Enco's engineering manufacturing and fabrication team.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const DETAILS = [
  {
    Icon: MapPin,
    title: "Visit Us",
    lines: ["101/2, 102 Rasipuram Road", "Mathur, Pudukottai – 622 515", "Tamil Nadu, India"],
    isLocation: true,
  },
  { Icon: Mail, title: "Email Us", lines: ["divyaenco@gmail.com", "operations@divyaenco.com"] },
  { Icon: Phone, title: "Call Us", lines: ["+91 86818 80006"] },
  { Icon: Clock, title: "Working Hours", lines: ["Mon – Sat", "9:00 AM – 6:00 PM"] },
];

function ContactPage() {
  const fieldClass =
     "w-full rounded-md border border-border bg-background/70 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30";

  return (
    <section className="px-4 pt-36 pb-10 md:pt-44">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Get in Touch
          </span>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-foreground md:text-6xl">
            Let&apos;s talk <span className="text-gradient">projects</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Tell us about your industrial requirements and our team will get back to
            you promptly.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-1">
            {DETAILS.map((d) => (
              <div key={d.title} className="glass flex gap-4 rounded-2xl p-5">
                <div
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-xl text-primary-foreground"
                  style={{ backgroundImage: "var(--gradient-accent)" }}
                >
                  <d.Icon size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">{d.title}</h3>
                  {d.lines.map((l, idx) => (
                    d.isLocation ? (
                      <a key={l} href={MAPS_URL} target="_blank" rel="noreferrer" className="block text-sm text-muted-foreground transition-colors hover:text-primary">
                        {l}
                      </a>
                    ) : (
                      <p key={l} className="text-sm text-muted-foreground">
                        {l}
                      </p>
                    )
                  ))}
                </div>
              </div>
            ))}
            <a href={MAPS_URL} target="_blank" rel="noreferrer" className="group flex items-center justify-between rounded-2xl border border-primary/35 bg-primary/5 p-5 transition-colors hover:border-primary hover:bg-primary/10">
              <span><span className="block text-sm font-bold text-foreground">Open location in Google Maps</span><span className="mt-1 block text-xs text-muted-foreground">Get directions to Divya Enco, Mathur</span></span>
              <ExternalLink size={18} className="text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          <div className="glass-strong rounded-3xl p-8 lg:col-span-3">
            {/* Demo contact form — wire to an API/email service when backend is added. */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = "mailto:divyaenco@gmail.com,operations@divyaenco.com?subject=Project Inquiry";
              }}
              className="space-y-5"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">First name</label>
                  <input required placeholder="First name" className={fieldClass} />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Last name</label>
                  <input required placeholder="Last name" className={fieldClass} />
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Email ID</label>
                  <input required type="email" placeholder="you@email.com" className={fieldClass} />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Phone number</label>
                  <input type="tel" placeholder="+91" className={fieldClass} />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">Company name</label>
                <input placeholder="Your company" className={fieldClass} />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">Company address</label>
                <input placeholder="Company address" className={fieldClass} />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">Comments / questions</label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell us about your project..."
                  className={fieldClass}
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-xl px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.02]"
                style={{ backgroundImage: "var(--gradient-accent)" }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
