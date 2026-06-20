import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function TestimonialCarousel({ testimonials = [] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 5000);
    return () => window.clearInterval(id);
  }, [testimonials.length]);

  const current = testimonials[index];

  if (!current) return null;

  return (
    <div className="premium-card overflow-hidden p-6 md:p-8">
      <div className="mb-5 flex items-center justify-between">
        <div className="text-xs font-bold uppercase tracking-[0.3em] text-brand-blue">Testimonials</div>
        <div className="flex gap-2">
          <button
            onClick={() => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={current.name}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          className="space-y-4"
        >
          <Quote className="h-8 w-8 text-brand-blue" />
          <p className="max-w-3xl text-xl leading-9 text-slate-900 md:text-2xl">“{current.quote}”</p>
          <div>
            <div className="font-semibold">{current.name}</div>
            <div className="text-sm text-slate-500">{current.role}</div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
