import { Link } from "@tanstack/react-router";

/**
 * LogoPlaceholder
 * ----------------------------------------------------------------------------
 * The shared company logo slot now renders the supplied DivyaEnco SVG
 * by default, while keeping the legacy `src` override path intact.
 * ----------------------------------------------------------------------------
 */
export function LogoPlaceholder({
  src = "/divya-enco-logo.svg",
  alt = "Divya Enco",
  className = "",
}: {
  src?: string;
  alt?: string;
  className?: string;
}) {
  return (
    <Link to="/" className={`flex items-center gap-3 ${className}`} aria-label="Divya Enco home">
      <span className="logo-frame">
        <span className="logo-sheen" aria-hidden="true" />
        <img src={src} alt={alt} className="logo-image" />
      </span>

      <span className="flex flex-col leading-none">
        <span className="text-lg font-extrabold tracking-tight text-foreground">Divya Enco</span>
        <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Engineering &amp; Construction
        </span>
      </span>
    </Link>
  );
}
