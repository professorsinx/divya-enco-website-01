import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Heart, Rocket, GraduationCap, Users, BadgeCheck, ShieldCheck, HeartPulse, Home } from "lucide-react";
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
  { Icon: Home, title: "Free Dormitory", desc: "A safe space with all basic amenities, provided free of charge." },
];

const CAREER_SCHEMES = [
  {
    title: "Women in Heavy Engineering Training",
    desc: "We provide specialised training for women who are interested in learning to operate heavy machinery and related shop-floor equipment. Women with experience in agricultural or unskilled labour, along with the interest and openness to learn, are encouraged to join us. Candidates from villages surrounding our factory are especially welcome. Over the next two years, our goal is to achieve at least 33% women’s participation across our factories.",
  },
  {
    title: "Employee Referral Program",
    desc: "We believe our people are our best recruiters. When an employee refers a candidate who goes on to complete three months of service, the referring employee is rewarded with an incentive of ₹5,000.",
  },
  {
    title: "Back to Industry(For school/college dropouts)",
    desc: "An interrupted education should never mean an interrupted future. We welcome individuals who stepped away from formal education for reasons beyond their control and are ready to build a career in engineering. A genuine interest in learning matters far more to us than a certificate — even first-time beginners will find a place on our team.",
  },
  {
    title: "Career Returners Program",
    desc: "We welcome professionals returning to the workforce after a break — whether due to relocation, marriage, childbirth, exam preparation, medical reasons, or any other life circumstance. Prior experience is valued but never required. What matters most to us is the drive to learn and the willingness to work as part of a team.",
  },
  {
    title: "Home Away From Home",
    desc: "Tamil Nadu's industries have welcomed a significant movement of talent from across India, and Divya Enco is proud to be part of that diverse community. Employees relocating with their families are supported with family quarters, while those arriving individually — or as a group of friends — are welcome to stay in our dormitory facilities.",
  },
  {
    title: "Internship & Earn-While-You-Learn Program",
    desc: "We offer paid internships to candidates from ITIs, engineering colleges and business schools, pairing real-world industry training with free dormitory accommodation. Current students are also welcome to join us part-time — on weekends or evenings — to gain hands-on technical experience and earn while they continue their studies.",
  },
];

function CultureProgramMarquee() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % CAREER_SCHEMES.length);
    }, 10000);
    return () => clearInterval(id);
  }, []);

  const scheme = CAREER_SCHEMES[index];

  return (
    <div className="mx-auto max-w-3xl">
      <div className="relative min-h-[220px] overflow-hidden sm:min-h-[180px]">
        <AnimatePresence mode="wait">
          <motion.article
            key={scheme.title}
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -32 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="glass rounded-2xl p-6 text-center md:p-8"
          >
            <div className="flex items-center justify-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-primary">
                Our Employee Support Programs
              </span>
            </div>
            <h3 className="mt-4 text-xl font-black leading-tight text-foreground md:text-2xl">
              {scheme.title}
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {scheme.desc}
            </p>
          </motion.article>
        </AnimatePresence>
      </div>

      <div className="mt-5 flex items-center justify-center gap-2">
        {CAREER_SCHEMES.map((s, i) => (
          <button
            key={s.title}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Show ${s.title}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? "w-6 bg-primary" : "w-1.5 bg-muted-foreground/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

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

        <section className="mt-12">
          <div className="mb-5 flex items-center justify-center">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-primary">
              Skill & culture programs
            </span>
          </div>
          <CultureProgramMarquee />
        </section>

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
