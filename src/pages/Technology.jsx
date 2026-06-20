import { motion } from 'framer-motion';
import { Cpu, ShieldCheck, BatteryCharging, Smartphone, Gauge, Sparkles } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import FeatureCard from '../components/FeatureCard';

const items = [
  ['Battery system', 'Smart cell balancing and thermal-safe power delivery designed for premium durability.', <BatteryCharging className="h-5 w-5" />],
  ['Motor power', 'Smooth high-torque acceleration with refined response mapping for city and highway riding.', <Gauge className="h-5 w-5" />],
  ['Smart dashboard', 'A crisp digital cockpit with navigation, ride stats, and vehicle health insights.', <Cpu className="h-5 w-5" />],
  ['Mobile app', 'Remote lock, ride tracking, geo-fence alerts, and status monitoring in one experience.', <Smartphone className="h-5 w-5" />],
  ['Safety features', 'ABS, anti-theft, lighting intelligence, and stability tuning for a confident ride.', <ShieldCheck className="h-5 w-5" />],
  ['Regenerative braking', 'Energy recovery that extends range while enhancing control and efficiency.', <Sparkles className="h-5 w-5" />],
];

export default function Technology() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <section className="section-shell section-gap">
        <SectionHeading
          eyebrow="Technology"
          title="Elegant engineering under the hood."
          subtitle="An animated premium card grid and structured diagrams for the battery, motor, dashboard, mobile app, safety, and braking stack."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {items.map(([title, description, icon]) => (
            <FeatureCard key={title} title={title} description={description} icon={icon} />
          ))}
        </div>
        <div className="mt-10 premium-card overflow-hidden p-5">
          <div className="grid gap-5 lg:grid-cols-3">
            {['Battery to BMS', 'BMS to Motor Controller', 'Controller to Wheels'].map((item, index) => (
              <div key={item} className="rounded-[1.5rem] bg-slate-50 p-5">
                <div className="text-xs font-bold uppercase tracking-[0.3em] text-brand-blue">Step {index + 1}</div>
                <div className="mt-2 font-semibold">{item}</div>
                <div className="mt-2 text-sm leading-7 text-slate-600">
                  Visualized as a clean system block inside a premium technology story.
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.main>
  );
}
