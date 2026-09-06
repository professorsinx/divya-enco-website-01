import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Heart, Rocket, GraduationCap, Users, BadgeCheck, ShieldCheck, HeartPulse } from "lucide-react";
import { CareerForm } from "../components/CareerForm";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Join the Divya Enco Team" },
      {
        name: "description",
        content:
          "Build your career with Divya Enco, a fast-growing engineering and construction company. Apply today.",
      },
      { property: "og:title", content: "Careers — Join the Divya Enco Team" },
      {
        property: "og:description",
        content: "Grow with one of India's fastest-growing engineering and construction firms.",
      },
    ],
  }),
  component: CareersPage,
});

const PERKS = [
  { Icon: Rocket, title: "Rapid Growth", desc: "Grow fast with an expanding industrial leader." },
  { Icon: GraduationCap, title: "Skill Development", desc: "On-site training and mentorship." },
  { Icon: Heart, title: "Safety & Care", desc: "A culture that puts your wellbeing first." },
  { Icon: Users, title: "Strong Teams", desc: "Work alongside seasoned engineering experts." },
  { Icon: BadgeCheck, title: "PF", desc: "Provident Fund benefits for eligible employees." },
  { Icon: ShieldCheck, title: "ESI", desc: "Employee State Insurance coverage for eligible employees." },
  { Icon: HeartPulse, title: "Health Insurance", desc: "Additional support for your health and wellbeing." },
];

function CareersPage() {
  return (
    <section className="px-4 pt-36 pb-10 md:pt-44">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Careers
          </span>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-foreground md:text-6xl">
            Join the <span className="text-gradient">Divya Enco</span> Team
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            We&apos;re always looking for driven engineers, skilled trades and project leaders to
            help us build the future of industry across India.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-sm font-semibold text-foreground">
            Divya Enco is an equal opportunity employer. We welcome talent from every background
            and are committed to a respectful, inclusive workplace.
          </p>
        </motion.div>

        <div className="relative mt-12 overflow-hidden py-1">
          <div className="flex w-max animate-marquee gap-4">
            {[...PERKS, ...PERKS].map((p, i) => (
              <motion.div
                key={`${p.title}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % PERKS.length) * 0.08 }}
                className="glass w-64 shrink-0 rounded-2xl p-5"
              >
                <p.Icon className="text-accent" size={24} />
                <h3 className="mt-3 font-bold text-foreground">{p.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <h2 className="mb-6 text-center text-2xl font-bold text-foreground">
            Apply Now
          </h2>
          <CareerForm />
        </div>
      </div>
    </section>
  );
}
