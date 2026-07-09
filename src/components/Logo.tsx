type LogoProps = {
  className?: string;
  markClassName?: string;
  textClassName?: string;
  variant?: "dark" | "light";
};

export function Logo({
  textClassName = "text-lg",
  variant = "dark",
}: LogoProps) {
  const isLight = variant === "light";
  return (
    <div
      className={`font-display font-semibold uppercase tracking-[0.08em] leading-none ${textClassName} ${
        isLight ? "text-cream" : "text-ink"
      }`}
    >
      Atlantis Homes III
    </div>
  );
}
