"use client";

import { useEffect } from "react";

type VideoModalProps = {
  src: string;
  poster: string;
  open: boolean;
  onClose: () => void;
};

export function VideoModal({ src, poster, open, onClose }: VideoModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm animate-[fade-up_0.3s_ease-out]"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <button
        type="button"
        aria-label="Close video"
        onClick={onClose}
        className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-cream/40 text-cream transition-colors hover:bg-cream hover:text-ink"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
        </svg>
      </button>
      <div
        className="aspect-video w-full max-w-4xl overflow-hidden rounded-lg shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <video
          src={src}
          poster={poster}
          controls
          autoPlay
          playsInline
          className="h-full w-full bg-black object-cover"
        />
      </div>
    </div>
  );
}
