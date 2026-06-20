import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import SmartImage from '../components/SmartImage';

const stats = [
  ['Core focus', 'Business automation'],
  ['Growth partner', 'Digital marketing'],
  ['Execution', 'Web + e-commerce'],
  ['Delivery', 'AI-powered systems'],
];

export default function About() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <section className="section-shell section-gap">
        <SectionHeading
          eyebrow="About Kriscel Tech"
          title="Business automation and digital growth, presented with clarity."
          subtitle="Kriscel Tech helps businesses build web presence, streamline operations, improve marketing performance, and scale with automation-driven systems."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="premium-card overflow-hidden p-4">
            <SmartImage
              src="/assets/kriscel-about-tech.png"
              alt="Brand story"
              fallbackLabel="Kriscel Tech"
              imgClassName="h-full min-h-[420px] w-full rounded-[1.5rem] object-cover"
            />
          </div>
          <div className="space-y-6">
            <div className="premium-card p-6">
              <h3 className="font-display text-2xl font-bold">Mission</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                To help businesses automate repetitive work, strengthen their digital presence, and
                unlock growth with practical, modern technology solutions.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {stats.map(([label, value]) => (
                <div key={label} className="premium-card p-5">
                  <div className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500">{label}</div>
                  <div className="mt-2 text-2xl font-bold text-slate-950">{value}</div>
                </div>
              ))}
            </div>
            <div className="premium-card p-6">
              <h3 className="font-display text-2xl font-bold">What Kriscel Tech does</h3>
              <div className="mt-4 space-y-4">
                {[
                  'Business automation systems',
                  'Digital marketing and SEO',
                  'E-commerce scaling and support',
                  'Website development and design',
                ].map((item, index) => (
                  <div key={item} className="flex gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-blue text-sm font-bold text-white">
                      {index + 1}
                    </div>
                    <div>
                      <div className="font-semibold">{item}</div>
                      <div className="text-sm leading-7 text-slate-600">
                        Built to reduce manual effort and improve business efficiency.
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.main>
  );
}
