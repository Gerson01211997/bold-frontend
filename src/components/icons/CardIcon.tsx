import { memo } from "react";

function CardIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <title>Icono de Tarjeta</title>

      <rect x="2" y="5" width="20" height="14" rx="3" ry="3" />

      <line
        x1="2"
        y1="8"
        x2="22"
        y2="8"
        strokeWidth="3"
        fill="#2D3748"
        stroke="#2D3748"
      />

      <rect
        x="5"
        y="11"
        width="4"
        height="3"
        rx="1"
        ry="1"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1"
      />

      <path d="M16 13a2 2 0 0 1 2 2" />
      <path d="M16 10a5 5 0 0 1 5 5" />
    </svg>
  );
}

export default memo(CardIcon);
