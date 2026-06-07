import Link from "next/link";

const EnsembleLogo = () => {
  return (
    <Link href="/" className="inline-flex items-center gap-3 group">
      <svg
        width="36"
        height="36"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 group-hover:scale-105"
      >
        <circle
          cx="32"
          cy="32"
          r="30"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          opacity="0.3"
        />
        <circle
          cx="32"
          cy="32"
          r="24"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          opacity="0.2"
        />
        {/* Stylized mountain peak */}
        <path
          d="M32 18 L20 42 L44 42 Z"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          className="text-vermilion"
        />
        {/* Mountain snow cap */}
        <path
          d="M32 18 L28 26 L36 26 Z"
          stroke="currentColor"
          strokeWidth="0.8"
          fill="none"
          opacity="0.4"
        />
        {/* Base line */}
        <line
          x1="16"
          y1="44"
          x2="48"
          y2="44"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.4"
        />
      </svg>
      <span className="font-heading text-sm tracking-[0.15em] hidden sm:inline">
        Yang Tuấn Anh
      </span>
    </Link>
  );
};

export default EnsembleLogo;
