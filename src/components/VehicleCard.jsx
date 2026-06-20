import { motion } from 'framer-motion';
import { ArrowRight, Heart, Zap } from 'lucide-react';

function buildFallbackSvg(name, type) {
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="900" height="640" viewBox="0 0 900 640">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#eff8ff"/>
        <stop offset="45%" stop-color="#d9f8ff"/>
        <stop offset="100%" stop-color="#f8fbff"/>
      </linearGradient>
      <linearGradient id="accent" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#1888ff"/>
        <stop offset="100%" stop-color="#46f3ff"/>
      </linearGradient>
    </defs>
    <rect width="900" height="640" rx="36" fill="url(#bg)"/>
    <circle cx="140" cy="110" r="80" fill="rgba(24,136,255,0.10)"/>
    <circle cx="780" cy="110" r="120" fill="rgba(70,243,255,0.16)"/>
    <rect x="100" y="120" width="700" height="380" rx="42" fill="white" stroke="rgba(15,23,42,0.08)"/>
    <path d="M220 360C270 280 370 245 470 245C580 245 645 292 700 340L655 420H245L220 360Z" fill="#10192d" opacity="0.92"/>
    <circle cx="300" cy="430" r="66" fill="#0f172a"/>
    <circle cx="620" cy="430" r="66" fill="#0f172a"/>
    <circle cx="300" cy="430" r="34" fill="url(#accent)"/>
    <circle cx="620" cy="430" r="34" fill="url(#accent)"/>
    <rect x="335" y="275" width="190" height="52" rx="26" fill="url(#accent)" opacity="0.95"/>
    <text x="450" y="620" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" fill="#0f172a">${name} • ${type}</text>
  </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

export default function VehicleCard({ vehicle, onDetails, onWishlist, wished = false }) {
  return (
    <motion.article
      whileHover={{ y: -8, rotateX: 5, rotateY: -5 }}
      className="premium-card tilt-anchor tilt-glow group overflow-hidden"
    >
      <div className="tilt-surface">
        <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-white to-sky-50">
          <img
            src={vehicle.image}
            alt={vehicle.name}
            onError={(e) => {
              e.currentTarget.src = buildFallbackSvg(vehicle.name, vehicle.type);
            }}
            className="h-full w-full object-contain p-4 transition-transform duration-700 ease-out will-change-transform group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
          <div className="absolute left-4 top-4 rounded-full border border-sky-200 bg-white/80 px-3 py-1 text-xs font-semibold text-slate-700 backdrop-blur">
            {vehicle.type}
          </div>
          <button
            onClick={onWishlist}
            className={`absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border ${
              wished ? 'border-brand-blue bg-brand-blue text-white' : 'border-white/70 bg-white/85 text-slate-800'
            } shadow-lg backdrop-blur`}
            aria-label="Wishlist"
          >
            <Heart className={`h-4 w-4 ${wished ? 'fill-white' : ''}`} />
          </button>
        </div>
        <div className="space-y-5 p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-display text-2xl font-semibold">{vehicle.name}</h3>
              <p className="mt-1 text-sm leading-6 text-slate-600 line-clamp-2">{vehicle.description}</p>
            </div>
            <div className="rounded-2xl bg-slate-950 px-3 py-2 text-right text-white">
              <div className="text-[10px] uppercase tracking-[0.25em] text-slate-400">Price</div>
              <div className="text-lg font-semibold">₹{vehicle.price.toLocaleString('en-IN')}</div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 text-sm">
            {[
              ['Range', `${vehicle.range} KM`],
              ['Top Speed', `${vehicle.speed} km/h`],
              ['Charge', `${vehicle.chargingTime} min`],
            ].map(([k, v]) => (
              <div key={k} className="rounded-2xl bg-slate-50 p-3">
                <div className="text-[10px] uppercase tracking-[0.22em] text-slate-500">{k}</div>
                <div className="mt-1 font-semibold text-slate-900">{v}</div>
              </div>
            ))}
          </div>

          <button
            onClick={onDetails}
            className="magnetic inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-blue"
          >
            View Details
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.article>
  );
}
