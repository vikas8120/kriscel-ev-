import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const initial = {
  name: '',
  phone: '',
  email: '',
  city: '',
  vehicleType: 'Scooty',
  preferredDate: '',
};

export default function BookingForm({ vehicles = [], onSubmitBooking }) {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const vehicleOptions = useMemo(
    () =>
      vehicles.length
        ? vehicles
          : [
            { name: 'Kriscel S1', type: 'Scooty' },
            { name: 'Kriscel X', type: 'Bike' },
          ],
    [vehicles],
  );

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Name is required';
    if (!/^\d{10}$/.test(form.phone.replace(/\D/g, ''))) next.phone = 'Enter a valid 10-digit phone number';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Enter a valid email';
    if (!form.city.trim()) next.city = 'City is required';
    if (!form.preferredDate) next.preferredDate = 'Choose a date';
    return next;
  };

  const submit = (e) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length) return;
    const booking = { ...form, id: crypto.randomUUID(), createdAt: new Date().toISOString() };
    onSubmitBooking?.(booking);
    setSuccess(true);
    setForm(initial);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="premium-card p-6 md:p-8">
      <form onSubmit={submit} className="grid gap-4 md:grid-cols-2">
        <div className="md:col-span-2">
          <div className="text-xs font-bold uppercase tracking-[0.3em] text-brand-blue">Book a ride</div>
          <h3 className="mt-2 font-display text-2xl font-bold">Premium Test Ride Booking</h3>
        </div>
        {[
          ['name', 'Name', 'text'],
          ['phone', 'Phone', 'tel'],
          ['email', 'Email', 'email'],
          ['city', 'City', 'text'],
        ].map(([field, label, type]) => (
          <label key={field} className="space-y-2">
            <span className="text-sm font-semibold text-slate-700">{label}</span>
            <input
              type={type}
              value={form[field]}
              onChange={(e) => setForm((f) => ({ ...f, [field]: e.target.value }))}
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none ring-0 transition focus:border-brand-blue"
            />
            {errors[field] ? <p className="text-xs font-medium text-red-500">{errors[field]}</p> : null}
          </label>
        ))}

        <label className="space-y-2">
          <span className="text-sm font-semibold text-slate-700">Vehicle Type</span>
          <select
            value={form.vehicleType}
            onChange={(e) => setForm((f) => ({ ...f, vehicleType: e.target.value }))}
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-brand-blue"
          >
            <option>Scooty</option>
            <option>Bike</option>
          </select>
        </label>

        <label className="space-y-2">
          <span className="text-sm font-semibold text-slate-700">Preferred Date</span>
          <input
            type="date"
            value={form.preferredDate}
            onChange={(e) => setForm((f) => ({ ...f, preferredDate: e.target.value }))}
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-brand-blue"
          />
          {errors.preferredDate ? <p className="text-xs font-medium text-red-500">{errors.preferredDate}</p> : null}
        </label>

        <div className="md:col-span-2">
          <button
            type="submit"
            className="magnetic inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 font-semibold text-white"
          >
            Book Test Ride
          </button>
        </div>
      </form>

      {success ? (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 flex items-center gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-700"
        >
          <CheckCircle2 className="h-5 w-5" />
          Your test ride request has been saved successfully.
        </motion.div>
      ) : null}
    </div>
  );
}
