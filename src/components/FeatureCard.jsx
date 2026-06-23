import { motion } from 'framer-motion';

export default function FeatureCard({ title, description, icon, compact = false, className = '', style }) {
  return (
    <motion.div
      whileHover={{ y: -6, rotateX: 4, rotateY: -4 }}
      className={`premium-card tilt-anchor tilt-glow ${compact ? 'p-4' : 'p-6'} ${className}`.trim()}
      style={style}
    >
      <div className={`tilt-surface ${compact ? 'space-y-3' : 'space-y-4'}`}>
        <div
          className={`inline-flex items-center justify-center rounded-2xl bg-brand-soft shadow-lg ring-1 ring-[#d8d3cd] ${
            compact ? 'h-10 w-10' : 'h-12 w-12'
          }`}
        >
          {icon}
        </div>
        <h3 className={`font-display font-semibold ${compact ? 'text-lg' : 'text-xl'}`}>{title}</h3>
        <p className={`text-sm leading-7 text-slate-600 ${compact ? 'leading-6' : ''}`}>{description}</p>
      </div>
    </motion.div>
  );
}
