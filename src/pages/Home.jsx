import { useLayoutEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link, useNavigate } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import VideoHero from '../components/VideoHero';
import FeatureCard from '../components/FeatureCard';
import BookingForm from '../components/BookingForm';
import CompareTable from '../components/CompareTable';
import TestimonialCarousel from '../components/TestimonialCarousel';
import SmartImage from '../components/SmartImage';
import KriscelMark from '../components/KriscelMark';
import { featureHighlights, testimonials, vehicles } from '../data/vehicles';
import { useLocalStorage } from '../hooks/useLocalStorage';

gsap.registerPlugin(ScrollTrigger);

const statCards = [
  { label: 'Range', value: '160 KM' },
  { label: 'Charge', value: '45 Min' },
  { label: 'App', value: 'Smart Control' },
  { label: 'Impact', value: 'Zero Emission' },
];

function SectionAction({ to, label, tone = 'dark' }) {
  return (
    <Link
      to={to}
      className={`magnetic inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold ${
        tone === 'dark' ? 'bg-slate-950 text-white' : 'bg-white text-slate-950 ring-1 ring-slate-200'
      }`}
    >
      {label}
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
}

function HorizontalShowcase() {
  const wrapRef = useRef(null);
  const trackRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const section = wrapRef.current;
      const track = trackRef.current;
      if (!section || !track) return;

      const cards = gsap.utils.toArray('[data-showcase-card]');
      const distance = track.scrollWidth - section.clientWidth;
      if (distance <= 0) return;

      gsap.to(track, {
        x: () => -distance,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${distance + window.innerHeight}`,
          scrub: 1,
          pin: true,
        },
      });

      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { y: 36, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: card,
              start: 'left 80%',
              end: 'left 55%',
              scrub: true,
              containerAnimation: ScrollTrigger.getById?.('showcase'),
            },
            delay: index * 0.04,
          },
        );
      });
    }, wrapRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={wrapRef} className="relative overflow-hidden bg-slate-950 py-20 text-white">
      <div className="section-shell mb-10 flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          eyebrow="Vehicle showcase"
          title="A sculpted lineup with presence."
          subtitle="Scroll sideways through the flagship scooties and bikes, each presented like a luxury product reveal."
        />
        <div className="text-sm text-slate-300">GSAP horizontal scroll • 3D hover • cinematic reveal</div>
      </div>

      <div className="overflow-hidden">
        <div ref={trackRef} className="flex gap-6 px-4 pb-8 md:px-6 lg:px-8">
              {vehicles.map((vehicle) => (
                <article
                  key={vehicle.id}
                  data-showcase-card
                  className="w-[320px] shrink-0 rounded-[2rem] border border-white/10 bg-white/10 p-5 backdrop-blur-xl md:w-[420px]"
                >
                  <div className="relative overflow-hidden rounded-[1.6rem] bg-gradient-to-br from-slate-100 to-sky-50">
                    <SmartImage
                      src={vehicle.heroImage || vehicle.image}
                      alt={vehicle.name}
                      fallbackLabel={vehicle.name}
                      imgClassName="h-[260px] w-full object-contain p-4 transition duration-700 hover:scale-105"
                    />
                    <div className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-slate-900">
                      {vehicle.type}
                    </div>
                  </div>
                  <div className="mt-5 space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-display text-2xl font-semibold">{vehicle.name}</h3>
                        <p className="mt-1 text-sm leading-6 text-slate-300">{vehicle.description}</p>
                      </div>
                      <div className="rounded-2xl bg-white px-3 py-2 text-right text-slate-950">
                        <div className="text-[10px] uppercase tracking-[0.25em] text-slate-500">Price</div>
                        <div className="text-lg font-semibold">Rs. {vehicle.price.toLocaleString('en-IN')}</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-sm text-slate-950">
                      {[
                        ['Range', `${vehicle.range} KM`],
                        ['Speed', `${vehicle.speed} km/h`],
                        ['Charge', `${vehicle.chargingTime} min`],
                      ].map(([k, v]) => (
                        <div key={k} className="rounded-2xl bg-white/90 p-3">
                          <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">{k}</div>
                          <div className="mt-1 font-semibold">{v}</div>
                        </div>
                      ))}
                    </div>

                    <Link
                      to={vehicle.type === 'Scooty' ? '/scooters' : '/bikes'}
                      className="inline-flex items-center gap-2 rounded-full bg-brand-cyan px-5 py-3 text-sm font-semibold text-slate-950"
                    >
                      View Details
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              ))}
        </div>
      </div>
    </section>
  );
}

function Home() {
  const navigate = useNavigate();
  const [bookings, setBookings] = useLocalStorage('voltedge-bookings', []);
  const [wishlist] = useLocalStorage('voltedge-wishlist', []);

  const compareLeft = vehicles[0];
  const compareRight = vehicles[3];

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="overflow-hidden">
      <VideoHero
        title={
          <>
            Ride the Future with <span className="text-gradient">Kriscel EV</span>
          </>
        }
        subtitle="Premium electric scooters and bikes built for speed, comfort, and smart city mobility."
        actions={[
          <SectionAction key="scooters" to="/scooters" label="Explore Scooters" />,
          <SectionAction key="bikes" to="/bikes" label="Explore Bikes" tone="light" />,
          <button
            key="book"
            onClick={() => navigate('/test-ride')}
            className="magnetic inline-flex items-center justify-center gap-2 rounded-full bg-brand-blue px-5 py-3 text-sm font-semibold text-white"
          >
            Book Test Ride
          </button>,
        ]}
        stats={statCards}
      />

      <HorizontalShowcase />

      <section className="section-shell section-gap">
        <SectionHeading
          eyebrow="Premium features"
          title="Smart engineering, crafted like jewelry."
          subtitle="Every touchpoint feels upscale, from battery intelligence to the security and app ecosystem."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {featureHighlights.map((title, index) => (
            <FeatureCard
              key={title}
              title={title}
              description="A luxury-grade feature built for confidence, convenience, and smooth daily riding."
              icon={<KriscelMark />}
            />
          ))}
        </div>
      </section>

      <section className="section-shell section-gap grid gap-8 lg:grid-cols-2">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="premium-card overflow-hidden p-4"
        >
          <SmartImage
            src="/assets/kriscel-s1-red.png"
            alt="Kriscel S1 Red"
            fallbackLabel="Kriscel S1 Red"
            imgClassName="h-[420px] w-full rounded-[1.5rem] object-cover"
          />
        </motion.div>
        <div className="flex flex-col justify-center space-y-6">
          <SectionHeading
            eyebrow="Battery technology"
            title="Zoom into the intelligence powering every mile."
            subtitle="Lithium chemistry, smart BMS, thermal safeguards, and fast-charge architecture work together for durable performance."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {['Lithium battery', 'Smart BMS', 'Thermal protection', 'Fast charging'].map((item) => (
              <div key={item} className="premium-card p-5">
                <div className="text-sm font-semibold text-slate-950">{item}</div>
                <p className="mt-2 text-sm leading-7 text-slate-600">Built to stay efficient, protected, and reliable over long usage cycles.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell section-gap grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <SectionHeading
            eyebrow="Scooty spotlight"
            title="Elegant, compact, and city ready."
            subtitle="An approachable premium scooter with hot-spot feature callouts, ready for smooth urban storytelling."
          />
          <div className="grid grid-cols-2 gap-3 text-sm">
            {['Battery', 'Dashboard', 'LED Light', 'Smart Lock', 'Comfort Seat'].map((item) => (
              <div key={item} className="premium-card p-4">{item}</div>
            ))}
          </div>
          <SectionAction to="/scooters" label="View Scooties" />
        </div>
        <motion.div whileInView={{ scale: 1 }} initial={{ scale: 0.9 }} className="premium-card overflow-hidden p-4">
          <SmartImage
            src="/assets/kriscel-scooty-blue.png"
            alt="Kriscel Scooty Blue"
            fallbackLabel="Kriscel Scooty Blue"
            imgClassName="h-[520px] w-full rounded-[1.5rem] object-cover"
          />
        </motion.div>
      </section>

      <section className="section-shell section-gap grid gap-8 lg:grid-cols-2">
        <motion.div whileInView={{ scale: 1 }} initial={{ scale: 0.9 }} className="premium-card overflow-hidden p-4 lg:order-2">
          <SmartImage
            src="/assets/kriscel-bike-x-pro.png"
            alt="Kriscel Bike X Pro"
            fallbackLabel="Kriscel Bike X Pro"
            imgClassName="h-[520px] w-full rounded-[1.5rem] object-cover"
          />
        </motion.div>
        <div className="space-y-6 lg:order-1">
          <SectionHeading
            eyebrow="Bike spotlight"
            title="Sporty, powerful, and unmistakably premium."
            subtitle="A muscular electric bike presentation with performance language and premium motion cues."
          />
          <div className="grid grid-cols-2 gap-3 text-sm">
            {['Performance Motor', 'Disc Brake', 'Battery Pack', 'Digital Console', 'Sport Mode'].map((item) => (
              <div key={item} className="premium-card p-4">{item}</div>
            ))}
          </div>
          <SectionAction to="/bikes" label="View Bikes" />
        </div>
      </section>

      <section className="section-shell section-gap">
        <SectionHeading
          eyebrow="Compare models"
          title="A quick side-by-side preview."
          subtitle="See the premium specs of the flagship scooters and bikes before opening the full compare page."
        />
        <div className="mt-10">
          <CompareTable left={compareLeft} right={compareRight} title="Kriscel recommendation" />
        </div>
        <div className="mt-6 flex justify-end">
          <SectionAction to="/compare" label="Full Compare" />
        </div>
      </section>

      <section className="section-shell section-gap grid gap-8 lg:grid-cols-2">
        <div className="premium-card overflow-hidden p-4">
          <SmartImage
            src="/assets/kriscel-charging-scooter.png"
            alt="Kriscel Charging Scooter"
            fallbackLabel="Kriscel Charging Scooter"
            imgClassName="h-[420px] w-full rounded-[1.5rem] object-cover"
          />
        </div>
        <div className="flex flex-col justify-center space-y-6">
          <SectionHeading
            eyebrow="Charging"
            title="Charge with confidence."
            subtitle="The charging section uses a polished progress animation and a premium station visual language."
          />
          <div className="premium-card p-5">
            <div className="mb-3 flex items-center justify-between text-sm">
              <span>Plug in</span>
              <span>Fast charge</span>
              <span>Ride again</span>
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-slate-100">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-brand-blue via-brand-cyan to-slate-900"
                initial={{ width: '15%' }}
                whileInView={{ width: '92%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.4 }}
              />
            </div>
          </div>
          <SectionAction to="/charging" label="Open Charging Page" />
        </div>
      </section>

      <section className="section-shell section-gap">
        <BookingForm
          vehicles={vehicles}
          onSubmitBooking={(booking) => setBookings([booking, ...bookings])}
        />
      </section>

      <section className="section-shell section-gap grid gap-8 lg:grid-cols-[1fr_0.8fr]">
        <TestimonialCarousel testimonials={testimonials} />
        <div className="space-y-6">
          <SectionHeading
            eyebrow="Live data"
            title="Stored interactions, ready to revisit."
            subtitle="Bookings and wishlist entries are saved in localStorage so the frontend feels practical and complete."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="premium-card p-6">
              <div className="text-xs uppercase tracking-[0.3em] text-slate-500">Bookings saved</div>
              <div className="mt-2 text-4xl font-bold">{bookings.length}</div>
            </div>
            <div className="premium-card p-6">
              <div className="text-xs uppercase tracking-[0.3em] text-slate-500">Wishlist items</div>
              <div className="mt-2 text-4xl font-bold">{wishlist.length}</div>
            </div>
          </div>
          <SectionAction to="/test-ride" label="Open Test Ride" />
        </div>
      </section>

      <section className="section-shell section-gap">
        <div className="premium-card overflow-hidden bg-slate-950 p-8 text-white md:p-12">
          <div className="max-w-3xl space-y-5">
            <div className="text-xs font-bold uppercase tracking-[0.35em] text-brand-cyan">Final CTA</div>
            <h2 className="font-display text-3xl font-bold md:text-5xl">Your electric journey starts here.</h2>
            <p className="text-slate-300">
              Book a ride, compare the lineup, and explore premium EV mobility that feels forward-looking and polished.
            </p>
            <div className="flex flex-wrap gap-3">
              <SectionAction to="/test-ride" label="Book Test Ride" tone="light" />
              <SectionAction to="/contact" label="Contact Us" tone="light" />
            </div>
          </div>
        </div>
      </section>
    </motion.main>
  );
}

export default Home;
