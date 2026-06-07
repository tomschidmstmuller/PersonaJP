interface EnsoIconProps {
  imperfect?: boolean;
  className?: string;
  size?: number;
}

const EnsoIcon = ({ imperfect = true, className = "", size = 100 }: EnsoIconProps) => (
  <svg
    viewBox="0 0 100 100"
    width={size}
    height={size}
    className={className}
    aria-hidden="true"
  >
    <path
      d={
        imperfect
          ? "M 20 50 C 20 25, 35 15, 50 15 C 70 15, 80 30, 80 50 C 80 72, 68 85, 48 85 C 28 85, 18 70, 22 52"
          : "M 20 50 A 30 30 0 1 1 80 50 A 30 30 0 1 1 20 50"
      }
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.6"
    />
  </svg>
);

export default EnsoIcon;
