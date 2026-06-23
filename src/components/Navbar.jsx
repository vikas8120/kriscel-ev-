import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import KriscelMark from './KriscelMark';

const links = [
  ['Home', '/'],
  ['Scooters', '/scooters'],
  ['Bikes', '/bikes'],
  ['Compare', '/compare'],
  ['Technology', '/technology'],
  ['Charging', '/charging'],
  ['Test Ride', '/test-ride'],
  ['About', '/about'],
  ['Contact', '/contact'],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#d8d3cd]/80 bg-[#fbf7f0]/85 backdrop-blur-xl">
      <div className="section-shell flex h-16 items-center justify-between md:h-20">
        <NavLink to="/" className="flex items-center gap-3 font-display text-base font-bold tracking-tight md:gap-4 md:text-lg">
          <KriscelMark className="h-10 w-10 shrink-0 rounded-2xl bg-white p-1 shadow-lg ring-1 ring-[#d8d3cd] md:h-12 md:w-12 md:p-1.5" priority />
          <span className="leading-none">
            Kriscel <span className="text-brand-blue">EV</span>
          </span>
        </NavLink>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map(([label, to]) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive ? 'bg-brand-blue text-white shadow-lg' : 'text-slate-600 hover:bg-brand-soft hover:text-brand-ink'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[#d8d3cd] bg-[#fbf7f0] text-brand-ink shadow-sm lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-[#d8d3cd] bg-[#fbf7f0] lg:hidden"
          >
            <div className="section-shell grid gap-2 py-4">
              {links.map(([label, to]) => (
                <NavLink
                  key={to}
                  to={to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded-2xl px-4 py-3 text-sm font-semibold ${
                      isActive ? 'bg-brand-blue text-white' : 'bg-brand-soft text-slate-700'
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
