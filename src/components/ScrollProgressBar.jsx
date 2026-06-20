import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const width = useSpring(scrollYProgress, { stiffness: 120, damping: 25, mass: 0.2 });

  return (
    <motion.div
      className="fixed left-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-brand-blue via-brand-cyan to-slate-900"
      style={{ scaleX: width, width: '100%' }}
    />
  );
}
