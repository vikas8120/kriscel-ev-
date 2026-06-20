export default function KriscelMark() {
  return (
    <svg viewBox="0 0 48 48" className="h-5 w-5" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="kriscel-mark-gradient" x1="6" y1="6" x2="42" y2="42" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1888FF" />
          <stop offset="1" stopColor="#46F3FF" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="44" height="44" rx="13" fill="url(#kriscel-mark-gradient)" />
      <path
        d="M15 12v24M15 24l15-12M15 24l16 12M31 12L22 21M24 28l7 8"
        stroke="#ffffff"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
