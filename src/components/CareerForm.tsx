import { useState } from "react";
import { motion } from "framer-motion";
import { Upload, Send, CheckCircle2 } from "lucide-react";

/**
 * ============================================================================
 * 👉 CAREER FORM DESTINATION EMAIL
 *    Change this single constant to update where applications are sent.
 *    Later, swap the `mailto:` handler below for an API endpoint (fetch POST).
 * ============================================================================
 */
const CAREERS_EMAIL = "divyaenco@gmail.com";

const POSITIONS = [
  "Site Engineer",
  "Project Manager",
  "Mechanical Engineer",
  "Civil Engineer",
  "Safety Officer",
  "Welder / Fitter",
  "Other",
];

export function CareerForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    position: POSITIONS[0],
    message: "",
  });

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // --- mailto handler (default) ---------------------------------------
    // To use an API instead, replace everything below with a fetch() POST
    // to your backend endpoint and keep CAREERS_EMAIL on the server side.
    const subject = encodeURIComponent(`Job Application — ${form.position} — ${form.name}`);
    const body = encodeURIComponent(
      `Full Name: ${form.name}\n` +
        `Email: ${form.email}\n` +
        `Phone: ${form.phone}\n` +
        `Position: ${form.position}\n\n` +
        `Cover Letter:\n${form.message}\n\n` +
        `(Please attach your resume to this email.)`,
    );
    window.location.href = `mailto:${CAREERS_EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const fieldClass =
    "w-full rounded-md border border-border bg-background/70 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass-strong mx-auto max-w-2xl rounded-3xl p-8 md:p-10"
    >
      {submitted ? (
        <div className="flex flex-col items-center py-10 text-center">
          <CheckCircle2 size={56} className="text-primary" />
          <h3 className="mt-4 text-2xl font-bold text-foreground">Application Ready!</h3>
          <p className="mt-2 max-w-sm text-sm text-muted-foreground">
            Your email client should have opened with the details pre-filled. Attach your resume and
            hit send — we look forward to reviewing it.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-6 glass rounded-xl px-5 py-2.5 text-sm font-semibold text-foreground transition-transform hover:scale-105"
          >
            Submit Another
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">Full Name</label>
              <input
                required
                value={form.name}
                onChange={update("name")}
                placeholder="Jane Doe"
                className={fieldClass}
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">Email</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={update("email")}
                placeholder="jane@email.com"
                className={fieldClass}
              />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">Phone</label>
              <input
                required
                type="tel"
                value={form.phone}
                onChange={update("phone")}
                placeholder="+91 00000 00000"
                className={fieldClass}
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">
                Position Applied For
              </label>
              <select value={form.position} onChange={update("position")} className={fieldClass}>
                {POSITIONS.map((p) => (
                  <option key={p} value={p} className="bg-card text-foreground">
                    {p}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-foreground">
              Cover Letter / Message
            </label>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={update("message")}
              placeholder="Tell us about your experience and why you'd like to join Divya Enco..."
              className={fieldClass}
            />
          </div>

          {/* Resume upload placeholder — wire to storage/API when backend is added */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-foreground">Resume (PDF)</label>
            <label className="glass flex cursor-pointer items-center justify-center gap-2 rounded-xl border-dashed px-4 py-6 text-sm text-muted-foreground transition hover:text-foreground">
              <Upload size={18} />
              <span>Click to upload your resume</span>
              <input type="file" accept=".pdf,.doc,.docx" className="hidden" />
            </label>
            <p className="mt-1.5 text-xs text-muted-foreground">
              Note: with the default mailto setup, please attach your resume in the email that opens.
            </p>
          </div>

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.02]"
            style={{ backgroundImage: "var(--gradient-accent)" }}
          >
            Submit Application <Send size={16} />
          </button>
        </form>
      )}
    </motion.div>
  );
}
