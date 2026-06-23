import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import VehicleCard from '../components/VehicleCard';
import VehicleModal from '../components/VehicleModal';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { vehicles } from '../data/vehicles';

export default function Scooters() {
  const scooterVehicles = vehicles.filter((v) => v.type === 'Scooty');
  const [range, setRange] = useState(300);
  const [speed, setSpeed] = useState(140);
  const [price, setPrice] = useState(250000);
  const [selected, setSelected] = useState(null);
  const [wishlist, setWishlist] = useLocalStorage('voltedge-wishlist', []);

  const filtered = useMemo(
    () =>
      scooterVehicles.filter(
        (v) => v.range <= range && v.speed <= speed && v.price <= price,
      ),
    [range, price, scooterVehicles, speed],
  );

  const toggleWishlist = (id) => {
    setWishlist((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [id, ...prev]));
  };

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <section className="section-shell pt-8 pb-16 md:pt-10 md:pb-24">
        <SectionHeading
          eyebrow="EV scooters"
          title="Premium scooties with urban elegance."
          subtitle="Filter the lineup by range, speed, and price, then open a refined modal for deeper details."
        />
        <div className="mt-6 grid gap-4 rounded-[2rem] border border-[#d8d3cd] bg-[#fbf7f0] p-5 md:grid-cols-3">
          <label className="space-y-2">
            <span className="text-sm font-semibold text-slate-700">Max Range: {range} KM</span>
            <input type="range" min="120" max="260" value={range} onChange={(e) => setRange(Number(e.target.value))} className="w-full" />
          </label>
          <label className="space-y-2">
            <span className="text-sm font-semibold text-slate-700">Max Speed: {speed} km/h</span>
            <input type="range" min="60" max="120" value={speed} onChange={(e) => setSpeed(Number(e.target.value))} className="w-full" />
          </label>
          <label className="space-y-2">
            <span className="text-sm font-semibold text-slate-700">Max Price: Rs. {price.toLocaleString('en-IN')}</span>
            <input type="range" min="100000" max="250000" value={price} onChange={(e) => setPrice(Number(e.target.value))} className="w-full" />
          </label>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((vehicle) => (
            <VehicleCard
              key={vehicle.id}
              vehicle={vehicle}
              wished={wishlist.includes(vehicle.id)}
              onWishlist={() => toggleWishlist(vehicle.id)}
              onDetails={() => setSelected(vehicle)}
            />
          ))}
        </div>

        {filtered.length === 0 ? <div className="mt-8 text-center text-slate-500">No scooters match the current filters.</div> : null}
      </section>

      <VehicleModal
        open={!!selected}
        vehicle={selected}
        wished={selected ? wishlist.includes(selected.id) : false}
        onWishlist={() => selected && toggleWishlist(selected.id)}
        onClose={() => setSelected(null)}
      />
    </motion.main>
  );
}
