type LogoMarkProps = {
  className?: string;
  ink?: string;
  paper?: string;
  rust?: string;
};

/** Geometric compass emblem, recreated from the brand mark. */
export function LogoMark({
  className,
  ink = "#2b1b14",
  paper = "#f9f9f5",
  rust = "#7e4527",
}: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 566.93 566.93"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g>
        <path
          d="M316.44 184.49s32.95 33.12.01 66.07l-32.94 32.94-33.04-33.04s-32.86-33.03.04-65.93l32.98-32.98z"
          fill={ink}
        />
        <path
          d="M309.26 191.6s25.82 25.95.01 51.76l-25.81 25.81-25.88-25.88s-25.74-25.88.03-51.65l25.84-25.84z"
          fill={paper}
        />
        <path
          d="M382.36 250.42s-33.12-32.95-66.07-.01l-32.94 32.94 33.04 33.04s33.03 32.86 65.93-.04l32.98-32.98z"
          fill={ink}
        />
        <path
          d="M375.26 257.6s-25.95-25.82-51.76-.01l-25.81 25.81 25.88 25.88s25.88 25.74 51.65-.03l25.84-25.84z"
          fill={paper}
        />
        <path
          d="M316.51 382.44s32.95-33.12.01-66.07l-32.94-32.94-33.04 33.04s-32.86 33.03.04 65.93l32.98 32.98z"
          fill={ink}
        />
        <path
          d="M309.33 375.33s25.82-25.95.01-51.76l-25.81-25.81-25.88 25.88s-25.74 25.88.03 51.65l25.84 25.84z"
          fill={paper}
        />
        <path
          d="M184.57 250.49s33.12-32.95 66.07-.01l32.94 32.94-33.04 33.04s-33.03 32.86-65.93-.04l-32.98-32.98z"
          fill={ink}
        />
        <path
          d="M191.67 257.67s25.95-25.82 51.76-.01l25.81 25.81-25.88 25.88s-25.88 25.74-51.65-.03l-25.84-25.84z"
          fill={paper}
        />
        <path
          d="M236.74 198.3s46.72.12 46.72 46.71v46.59h-46.72s-46.59-.12-46.59-46.65V198.3z"
          fill={rust}
        />
        <path
          d="M236.69 208.39s36.61.1 36.61 36.6v36.5h-36.61s-36.5-.09-36.5-36.55v-36.55z"
          fill={paper}
        />
        <path
          d="M329.98 198.3s-46.72.12-46.72 46.71v46.59h46.72s46.59-.12 46.59-46.65V198.3z"
          fill={rust}
        />
        <path
          d="M330.03 208.39s-36.61.1-36.61 36.6v36.5h36.61s36.5-.09 36.5-36.55v-36.55z"
          fill={paper}
        />
        <path
          d="M376.76 338.21s-.12-46.72-46.71-46.72h-46.59v46.72s.12 46.59 46.65 46.59h46.65z"
          fill={rust}
        />
        <path
          d="M366.66 338.26s-.1-36.61-36.6-36.61h-36.5v36.61s.09 36.5 36.55 36.5h36.55z"
          fill={paper}
        />
        <path
          d="M190.16 338.21s.12-46.72 46.71-46.72h46.59v46.72s-.12 46.59-46.65 46.59h-46.65z"
          fill={rust}
        />
        <path
          d="M200.26 338.26s.1-36.61 36.6-36.61h36.5v36.61s-.09 36.5-36.55 36.5h-36.55z"
          fill={paper}
        />
        <path
          d="M244.81 278.71s12.92-12.85 25.77 0l12.85 12.85-12.89 12.89s-12.88 12.82-25.71-.02l-12.87-12.87zm25.78-25.79s-12.85 12.92 0 25.77l12.85 12.85 12.89-12.89s12.82-12.88-.02-25.71l-12.87-12.87zm25.71 77.28s12.85-12.92 0-25.77l-12.85-12.85-12.89 12.89s-12.82 12.88.02 25.71l12.87 12.87z"
          fill={ink}
        />
        <path
          d="M322.04 304.38s-12.92 12.85-25.77 0l-12.85-12.85 12.89-12.89s12.88-12.82 25.71.02l12.87 12.87z"
          fill={ink}
        />
        <circle cx="283.44" cy="291.54" r="11.91" fill={paper} />
      </g>
    </svg>
  );
}

type LogoProps = {
  className?: string;
  markClassName?: string;
  textClassName?: string;
  variant?: "dark" | "light";
};

export function Logo({
  className,
  markClassName = "h-9 w-9",
  textClassName = "text-lg",
  variant = "dark",
}: LogoProps) {
  const isLight = variant === "light";
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <LogoMark
        className={markClassName}
        ink={isLight ? "#f9f9f5" : "#2b1b14"}
        paper={isLight ? "#2b1b14" : "#f9f9f5"}
        rust={isLight ? "#c98a5e" : "#7e4527"}
      />
      <span
        className={`font-display font-semibold uppercase tracking-[0.08em] leading-none ${textClassName} ${
          isLight ? "text-cream" : "text-ink"
        }`}
      >
        Atlantis Homes <span className="text-rust">III</span>
      </span>
    </span>
  );
}
