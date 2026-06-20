function fallbackSvg(label) {
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="1400" height="900" viewBox="0 0 1400 900">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#f7fbff"/>
        <stop offset="45%" stop-color="#dff7ff"/>
        <stop offset="100%" stop-color="#eef5ff"/>
      </linearGradient>
      <linearGradient id="glow" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#1888ff"/>
        <stop offset="100%" stop-color="#46f3ff"/>
      </linearGradient>
    </defs>
    <rect width="1400" height="900" rx="48" fill="url(#bg)"/>
    <circle cx="240" cy="170" r="160" fill="rgba(24,136,255,0.12)"/>
    <circle cx="1180" cy="150" r="220" fill="rgba(70,243,255,0.14)"/>
    <rect x="140" y="160" width="1120" height="580" rx="56" fill="white" stroke="rgba(15,23,42,0.08)" />
    <path d="M280 520C360 390 520 340 680 340C852 340 980 408 1080 500L1030 600H320L280 520Z" fill="#10192d"/>
    <circle cx="420" cy="610" r="90" fill="#0f172a"/>
    <circle cx="980" cy="610" r="90" fill="#0f172a"/>
    <circle cx="420" cy="610" r="44" fill="url(#glow)"/>
    <circle cx="980" cy="610" r="44" fill="url(#glow)"/>
    <rect x="560" y="380" width="280" height="80" rx="40" fill="url(#glow)"/>
    <text x="700" y="820" text-anchor="middle" font-family="Arial, sans-serif" font-size="34" fill="#0f172a">${label}</text>
  </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

export default function SmartImage({ src, alt, fallbackLabel, className = '', imgClassName = '', style }) {
  return (
    <div className={`overflow-hidden ${className}`.trim()} style={style}>
      <img
        src={src}
        alt={alt}
        className={`transition-transform duration-700 ease-out will-change-transform hover:scale-105 ${imgClassName}`.trim()}
        onError={(e) => {
          e.currentTarget.src = fallbackSvg(fallbackLabel || alt || 'Kriscel EV');
        }}
      />
    </div>
  );
}
