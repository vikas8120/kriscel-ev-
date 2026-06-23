import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import ChargingCalculator from '../components/ChargingCalculator';
import SmartImage from '../components/SmartImage';
import { vehicles } from '../data/vehicles';

export default function Charging() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-45"
          style={{ backgroundImage: "url('/assets/charging-background.jpg')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f7f2e7]/55 via-[#f7f2e7]/20 to-[#f7f2e7]/70" aria-hidden="true" />
        <div className="section-shell section-gap relative z-10">
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
                imgClassName="h-[320px] w-full rounded-[1.5rem] object-contain p-3 sm:h-[380px] md:h-[420px] md:object-cover md:p-0"
              />
            </div>
            <ChargingCalculator vehicles={vehicles} />
          </div>
        </div>
      </section>
    </motion.main>
  );
}
