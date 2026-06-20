import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import ChargingCalculator from '../components/ChargingCalculator';
import SmartImage from '../components/SmartImage';
import { vehicles } from '../data/vehicles';

export default function Charging() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <section className="section-shell section-gap">
        <SectionHeading
          eyebrow="Charging"
          title="A premium charging experience."
          subtitle="Select a vehicle and battery level to estimate charging time with a polished progress bar and station visuals."
        />
        <div className="mt-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="premium-card overflow-hidden p-4">
            <SmartImage
              src="/assets/kriscel-charging-scooter.png"
              alt="Kriscel Charging Scooter"
              fallbackLabel="Kriscel Charging Scooter"
              imgClassName="h-[420px] w-full rounded-[1.5rem] object-cover"
            />
          </div>
          <ChargingCalculator vehicles={vehicles} />
        </div>
      </section>
    </motion.main>
  );
}
