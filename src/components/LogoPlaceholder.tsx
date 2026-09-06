import { Link } from "@tanstack/react-router";

/**
 * LogoPlaceholder
 * ----------------------------------------------------------------------------
 * 👉 TO ADD THE COMPANY LOGO:
 *    Pass an image URL via the `src` prop, e.g.
 *        <LogoPlaceholder src="/logo.png" />
 *    or import an asset:  import logo from "@/assets/logo.png"
 *                         <LogoPlaceholder src={logo} />
 *
 *    When `src` is provided, the image is rendered. Otherwise a styled
 *    text/icon placeholder is shown so the layout never breaks.
 * ----------------------------------------------------------------------------
 */
export function LogoPlaceholder({
  src,
  alt = "Divya Enco",
  className = "",
}: {
  src?: string;
  alt?: string;
  className?: string;
}) {
  return (
    <Link to="/" className={`flex items-center gap-3 ${className}`} aria-label="Divya Enco home">
      {src ? (
        // Company logo image — swap the `src` prop to update.
        <img src={src} alt={alt} className="h-10 w-auto object-contain" />
      ) : (
        // Fallback placeholder (remove once a real logo `src` is supplied).
        <span
          className="grid h-10 w-10 place-items-center rounded-lg text-lg font-black text-primary-foreground"
          style={{ backgroundImage: "var(--gradient-accent)" }}
        >
          DE
        </span>
      )}
      <span className="flex flex-col leading-none">
        <span className="text-lg font-extrabold tracking-tight text-foreground">Divya Enco</span>
        <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Engineering & Construction
        </span>
      </span>
    </Link>
  );
}
