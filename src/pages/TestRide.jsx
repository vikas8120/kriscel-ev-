import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Trash2 } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import BookingForm from '../components/BookingForm';
import { vehicles } from '../data/vehicles';
import { useLocalStorage } from '../hooks/useLocalStorage';

export default function TestRide() {
  const [bookings, setBookings] = useLocalStorage('voltedge-bookings', []);

  const ordered = useMemo(
    () => [...bookings].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)),
    [bookings],
  );

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <section className="section-shell section-gap">
        <SectionHeading
          eyebrow="Test ride"
          title="Book your premium ride."
          subtitle="The booking form validates input and saves submissions to localStorage so it behaves like a functioning frontend app."
        />
        <div className="mt-10 grid gap-8 lg:grid-cols-[1.02fr_0.98fr]">
          <BookingForm vehicles={vehicles} onSubmitBooking={(booking) => setBookings([booking, ...bookings])} />

          <div className="space-y-4">
            <div className="premium-card p-6">
              <div className="text-xs font-bold uppercase tracking-[0.3em] text-brand-blue">Saved bookings</div>
              <div className="mt-2 text-sm text-slate-600">Stored locally on this browser session.</div>
            </div>
            <div className="space-y-4">
              {ordered.length ? (
                ordered.map((booking) => (
                  <div key={booking.id} className="premium-card p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="font-semibold text-brand-ink">{booking.name}</div>
                        <div className="text-sm text-slate-600">
                          {booking.vehicleType} - {booking.city} - {booking.preferredDate}
                        </div>
                        <div className="mt-2 text-sm text-slate-500">{booking.phone} - {booking.email}</div>
                      </div>
                      <button
                        onClick={() => setBookings(bookings.filter((item) => item.id !== booking.id))}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-soft text-slate-700"
                        aria-label="Delete booking"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="premium-card p-6 text-sm text-slate-600">
                  No bookings yet. Submit the form to see saved test ride requests here.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </motion.main>
  );
}
