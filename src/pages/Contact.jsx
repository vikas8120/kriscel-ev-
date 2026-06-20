import { motion } from 'framer-motion';
import { Instagram, Linkedin, Mail, MapPin, Phone, Globe } from 'lucide-react';
import { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import FAQAccordion from '../components/FAQAccordion';
import { faqs } from '../data/vehicles';

export default function Contact() {
  const [status, setStatus] = useState('');

  const submit = (e) => {
    e.preventDefault();
    setStatus('Thanks! Your message has been captured in the frontend demo.');
    e.currentTarget.reset();
  };

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <section className="section-shell section-gap">
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk business automation and digital growth."
          subtitle="Reach Kriscel Tech for web development, SEO, e-commerce, automation, and digital marketing support."
        />
        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <form onSubmit={submit} className="premium-card space-y-4 p-6">
            {[
              ['name', 'Name', 'text'],
              ['email', 'Email', 'email'],
            ].map(([name, label, type]) => (
              <label key={name} className="block space-y-2">
                <span className="text-sm font-semibold">{label}</span>
                <input type={type} required className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-brand-blue" />
              </label>
            ))}
            <label className="block space-y-2">
              <span className="text-sm font-semibold">Message</span>
              <textarea rows="5" required className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-brand-blue" />
            </label>
            <button className="magnetic rounded-full bg-slate-950 px-6 py-3 font-semibold text-white">Send Message</button>
            {status ? <div className="rounded-2xl bg-emerald-50 p-4 text-sm text-emerald-700">{status}</div> : null}
          </form>

          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ['Delhi, India', 'Headquarters and business communication.', <MapPin className="h-4 w-4" />],
                ['Call / WhatsApp', '+91 8985419420', <Phone className="h-4 w-4" />],
                ['Email', 'info@kriscel.com', <Mail className="h-4 w-4" />],
                ['Website', 'kriscel.com', <Globe className="h-4 w-4" />],
              ].map(([city, text, icon]) => (
                <div key={city} className="premium-card p-5">
                  <div className="flex items-center gap-3 font-semibold">
                    <span className="text-brand-blue">{icon}</span>
                    {city}
                  </div>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{text}</p>
                </div>
              ))}
            </div>
            <FAQAccordion faqs={faqs} />
            <div className="premium-card p-5">
              <div className="text-sm font-semibold text-slate-900">Social</div>
              <div className="mt-3 flex gap-3 text-slate-500">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100"><Instagram className="h-4 w-4" /></span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100"><Linkedin className="h-4 w-4" /></span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100"><Mail className="h-4 w-4" /></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.main>
  );
}
