import { AnimatePresence, motion } from 'framer-motion';
import { X, CheckCircle2 } from 'lucide-react';
import SmartImage from './SmartImage';

export default function VehicleModal({ vehicle, open, onClose, onWishlist, wished }) {
  return (
    <AnimatePresence>
      {open && vehicle ? (
        <motion.div className="fixed inset-0 z-[70] flex items-end justify-center bg-brand-ink/45 p-4 backdrop-blur-sm md:items-center">
          <motion.div
            initial={{ y: 40, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 30, opacity: 0, scale: 0.98 }}
            className="premium-card w-full max-w-4xl overflow-hidden"
          >
            <div className="grid gap-0 md:grid-cols-[1.1fr_0.9fr]">
              <div className="relative bg-gradient-to-br from-brand-soft to-brand-sage p-6 md:p-8">
                <button
                  onClick={onClose}
                  className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#fbf7f0] shadow"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
                <div className="aspect-[4/3] rounded-[2rem] bg-[#fbf7f0] p-4 shadow-inner">
                  <SmartImage
                    src={vehicle.image}
                    alt={vehicle.name}
                    fallbackLabel={vehicle.name}
                    imgClassName="h-full w-full object-contain p-2 sm:p-0"
                  />
                </div>
              </div>
              <div className="space-y-6 p-6 md:p-8">
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.3em] text-brand-blue">{vehicle.type}</div>
                  <h3 className="mt-3 font-display text-3xl font-bold">{vehicle.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{vehicle.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    ['Range', `${vehicle.range} KM`],
                    ['Speed', `${vehicle.speed} km/h`],
                    ['Battery', vehicle.battery],
                    ['Charge', `${vehicle.chargingTime} min`],
                  ].map(([k, v]) => (
                    <div key={k} className="rounded-2xl bg-brand-soft p-4">
                      <div className="text-[10px] uppercase tracking-[0.25em] text-slate-500">{k}</div>
                      <div className="mt-1 font-semibold">{v}</div>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <div className="text-sm font-semibold text-slate-900">Highlights</div>
                  <div className="grid gap-2">
                    {vehicle.features.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle2 className="h-4 w-4 text-brand-blue" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={onWishlist}
                    className={`rounded-full px-5 py-3 text-sm font-semibold ${
                      wished ? 'bg-brand-blue text-white' : 'bg-brand-soft text-slate-900'
                    }`}
                  >
                    {wished ? 'Added to Wishlist' : 'Add to Wishlist'}
                  </button>
                  <button
                    onClick={onClose}
                    className="rounded-full bg-brand-gray px-5 py-3 text-sm font-semibold text-white"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
