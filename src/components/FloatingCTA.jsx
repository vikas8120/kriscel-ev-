import { motion } from 'framer-motion';
import { MessageCircleMore } from 'lucide-react';

export default function FloatingCTA() {
  return (
    <motion.a
      href="/contact"
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.8 }}
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-full border border-sky-200 bg-white/90 px-4 py-3 text-sm font-semibold text-slate-900 shadow-luxe backdrop-blur-xl magnetic"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-brand-cyan text-white">
        <MessageCircleMore className="h-4 w-4" />
      </span>
      Book Test Ride
    </motion.a>
  );
}
