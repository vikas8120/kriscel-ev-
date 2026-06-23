import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import KriscelMark from './KriscelMark';

export default function Footer() {
  return (
    <footer className="border-t border-[#d8d3cd] bg-[#fbf7f0]">
      <div className="section-shell section-gap grid gap-10 lg:grid-cols-[1.3fr_0.8fr_0.8fr]">
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <KriscelMark className="h-12 w-12 rounded-2xl bg-white p-1.5 shadow-lg ring-1 ring-[#d8d3cd]" />
            <div className="font-display text-2xl font-bold leading-none">Kriscel Tech</div>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-600">
            Business automation and digital growth partner for web development, SEO, e-commerce,
            CRM-style workflows, and performance-led digital marketing.
          </p>
          <div className="flex items-center gap-3 text-slate-500">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-soft">
              <Instagram className="h-4 w-4" />
            </span>
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-soft">
              <Facebook className="h-4 w-4" />
            </span>
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-soft">
              <Linkedin className="h-4 w-4" />
            </span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">Explore</div>
          <div className="grid gap-3 text-sm text-slate-600">
            {[
              ['About', '/about'],
              ['Contact', '/contact'],
              ['Technology', '/technology'],
              ['Test Ride', '/test-ride'],
            ].map(([label, to]) => (
              <NavLink key={to} to={to} className="hover:text-slate-900">
                {label}
              </NavLink>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">Contact</div>
          <div className="space-y-3 text-sm text-slate-600">
            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-brand-blue" />
              Delhi, India
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-brand-blue" />
              +91 8985419420
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-brand-blue" />
              info@kriscel.com
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
