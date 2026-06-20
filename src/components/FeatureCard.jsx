import { motion } from 'framer-motion';

export default function FeatureCard({ title, description, icon }) {
  return (
    <motion.div
      whileHover={{ y: -6, rotateX: 4, rotateY: -4 }}
      className="premium-card tilt-anchor tilt-glow p-6"
    >
      <div className="tilt-surface space-y-4">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/90 shadow-lg ring-1 ring-slate-200">
          {icon}
        </div>
        <h3 className="font-display text-xl font-semibold">{title}</h3>
        <p className="text-sm leading-7 text-slate-600">{description}</p>
      </div>
    </motion.div>
  );
}
