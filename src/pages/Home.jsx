import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link, useNavigate } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import VideoHero from '../components/VideoHero';
import FeatureCard from '../components/FeatureCard';
import BookingForm from '../components/BookingForm';
import TestimonialCarousel from '../components/TestimonialCarousel';
import SmartImage from '../components/SmartImage';
import { featureHighlights, testimonials, vehicles } from '../data/vehicles';
import { useLocalStorage } from '../hooks/useLocalStorage';

gsap.registerPlugin(ScrollTrigger);

const statCards = [
  { label: 'Range', value: '160 KM' },
  { label: 'Charge', value: '45 Min' },
  { label: 'App', value: 'Smart Control' },
  { label: 'Impact', value: 'Zero Emission' },
];

const heroVideoSources = [
  '/assets/ev-hero-video.mp4',
  '/assets/electric-motorcycle-manufactured-video.mp4',
];

function SectionAction({ to, label, tone = 'dark' }) {
  return (
    <Link
      to={to}
      className={`magnetic inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold ${
        tone === 'dark' ? 'bg-brand-gray text-white' : 'bg-[#fbf7f0] text-brand-ink ring-1 ring-[#d8d3cd]'
      }`}
    >
      {label}
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
}

function ShowcaseCard({ vehicle }) {
  return (
    <article
      data-showcase-card
      className="mx-auto w-full max-w-[420px] shrink-0 rounded-[2rem] border border-white/15 bg-[#fbf7f0]/15 p-5 backdrop-blur-xl lg:mx-0 lg:w-[420px]"
    >
      <div className="relative overflow-hidden rounded-[1.6rem] bg-gradient-to-br from-brand-soft to-brand-sage">
        <SmartImage
          src={vehicle.heroImage || vehicle.image}
          alt={vehicle.name}
          fallbackLabel={vehicle.name}
          imgClassName="h-[260px] w-full object-contain p-4 transition-transform duration-700 ease-out hover:scale-110"
        />
        <div className="absolute left-4 top-4 rounded-full bg-[#fbf7f0]/85 px-3 py-1 text-xs font-semibold text-brand-ink">
          {vehicle.type}
        </div>
      </div>
      <div className="mt-5 space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-2xl font-semibold text-brand-ink">{vehicle.name}</h3>
            <p className="mt-1 text-sm leading-6 text-slate-700">{vehicle.description}</p>
          </div>
          <div className="rounded-2xl bg-[#fbf7f0] px-3 py-2 text-right text-brand-ink">
            <div className="text-[10px] uppercase tracking-[0.25em] text-slate-500">Price</div>
            <div className="text-lg font-semibold">Rs. {vehicle.price.toLocaleString('en-IN')}</div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 text-sm text-brand-ink">
          {[
            ['Range', `${vehicle.range} KM`],
            ['Speed', `${vehicle.speed} km/h`],
            ['Charge', `${vehicle.chargingTime} min`],
          ].map(([k, v]) => (
            <div key={k} className="rounded-2xl bg-[#fbf7f0]/90 p-3">
              <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">{k}</div>
              <div className="mt-1 font-semibold">{v}</div>
            </div>
          ))}
        </div>

        <Link
          to={vehicle.type === 'Scooty' ? '/scooters' : '/bikes'}
          className="inline-flex items-center gap-2 rounded-full bg-brand-cyan px-5 py-3 text-sm font-semibold text-brand-ink"
        >
          View Details
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}

function HorizontalShowcase() {
  const wrapRef = useRef(null);
  const trackRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener ? mq.addEventListener('change', update) : mq.addListener(update);
    return () => {
      mq.removeEventListener ? mq.removeEventListener('change', update) : mq.removeListener(update);
    };
  }, []);

  useLayoutEffect(() => {
    if (!isDesktop) return;
    const ctx = gsap.context(() => {
      const section = wrapRef.current;
      const track = trackRef.current;
      if (!section || !track) return;

      const cards = gsap.utils.toArray('[data-showcase-card]');
      const distance = track.scrollWidth - section.clientWidth;
      if (distance <= 0) return;

      const tween = gsap.to(track, {
        x: () => -distance,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${distance + window.innerHeight}`,
          scrub: 1,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          id: 'showcase',
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
              containerAnimation: tween,
              start: 'left 85%',
              end: 'left 55%',
              scrub: true,
              invalidateOnRefresh: true,
            },
            delay: index * 0.04,
          },
        );
      });

      ScrollTrigger.refresh();
    }, wrapRef);
    return () => ctx.revert();
  }, [isDesktop]);

  return (
    <section ref={wrapRef} className="palette-section palette-gray relative overflow-hidden py-16 text-white lg:py-20">
      <div className="section-shell mb-8 flex flex-wrap items-end justify-between gap-6 lg:mb-10">
        <SectionHeading
          eyebrow="Vehicle showcase"
          title="A sculpted lineup with presence."
          subtitle="Scroll sideways through the flagship scooties and bikes, each presented like a luxury product reveal."
        />
      </div>

      <div className="section-shell">
        <div className="grid gap-6 lg:hidden">
          {vehicles.map((vehicle) => (
            <ShowcaseCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </div>

      <div className="hidden overflow-hidden lg:block">
        <div ref={trackRef} className="flex gap-6 px-4 pb-8 md:px-6 lg:px-8">
          {vehicles.map((vehicle) => (
            <ShowcaseCard key={vehicle.id} vehicle={vehicle} />
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
        videoSources={heroVideoSources}
      />

      <HorizontalShowcase />

      <section className="palette-section palette-mint relative overflow-hidden">
        <div className="section-shell py-10 relative z-10 md:py-14">
          <SectionHeading
            eyebrow="Premium features"
            title="Smart engineering, crafted like jewelry."
            subtitle="Every touchpoint feels upscale, from battery intelligence to the security and app ecosystem."
          />
          <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {featureHighlights.map((title, index) => (
              <FeatureCard
                key={title}
                title={title}
                description="A luxury-grade feature built for confidence, convenience, and smooth daily riding."
                icon={
                  <span className="flex h-5 w-5 items-center justify-center rounded-md bg-gradient-to-br from-brand-blue to-brand-cyan text-white">
                    <Zap className="h-3 w-3" />
                  </span>
                }
                compact
                className="border-white/6 backdrop-blur-0"
                style={{
                  backgroundColor: 'transparent',
                  boxShadow: 'none',
                }}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="palette-section palette-cream">
        <div className="section-shell section-gap grid gap-8 lg:grid-cols-2">
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
              imgClassName="h-[320px] w-full rounded-[1.5rem] object-contain p-3 sm:h-[380px] md:h-[420px] md:object-cover md:p-0"
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
                  <div className="text-sm font-semibold text-brand-ink">{item}</div>
                  <p className="mt-2 text-sm leading-7 text-slate-600">Built to stay efficient, protected, and reliable over long usage cycles.</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="palette-section palette-beige">
        <div className="section-shell section-gap grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="order-2 space-y-6 lg:order-1">
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
          <motion.div whileInView={{ scale: 1 }} initial={{ scale: 0.9 }} className="order-1 premium-card overflow-hidden p-4 lg:order-2">
            <SmartImage
              src="/assets/kriscel-scooty-blue.png"
              alt="Kriscel Scooty Blue"
              fallbackLabel="Kriscel Scooty Blue"
              imgClassName="h-[260px] w-full rounded-[1.5rem] object-contain p-2 sm:h-[360px] md:h-[520px] md:object-cover md:p-0"
            />
          </motion.div>
        </div>
      </section>

      <section className="section-shell section-gap grid gap-8 lg:grid-cols-2 lg:items-center">
        <motion.div whileInView={{ scale: 1 }} initial={{ scale: 0.9 }} className="order-1 premium-card overflow-hidden p-4 lg:order-2">
          <SmartImage
            src="/assets/kriscel-bike-x-pro.png"
            alt="Kriscel Bike X Pro"
            fallbackLabel="Kriscel Bike X Pro"
            imgClassName="h-[260px] w-full rounded-[1.5rem] object-contain p-2 sm:h-[360px] md:h-[520px] md:object-cover md:p-0"
          />
        </motion.div>
        <div className="order-2 space-y-6 lg:order-1">
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

      <section className="palette-section palette-cream">
        <div className="section-shell section-gap grid gap-8 lg:grid-cols-2">
          <div className="premium-card overflow-hidden p-4">
            <SmartImage
              src="/assets/kriscel-charging-scooter.png"
              alt="Kriscel Charging Scooter"
              fallbackLabel="Kriscel Charging Scooter"
              imgClassName="h-[320px] w-full rounded-[1.5rem] object-contain p-3 sm:h-[380px] md:h-[420px] md:object-cover md:p-0"
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
              <div className="h-3 overflow-hidden rounded-full bg-brand-soft">
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
        </div>
      </section>

      <section className="palette-section palette-beige">
        <div className="section-shell section-gap">
          <BookingForm
            vehicles={vehicles}
            onSubmitBooking={(booking) => setBookings([booking, ...bookings])}
          />
        </div>
      </section>

      <section className="palette-section palette-mint">
        <div className="section-shell section-gap grid gap-8 lg:grid-cols-[1fr_0.8fr]">
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
        </div>
      </section>

      <section className="palette-section palette-gray">
        <div className="section-shell section-gap">
          <div className="premium-card-dark overflow-hidden p-8 text-[#fbf7f0] md:p-12">
            <div className="max-w-3xl space-y-5">
              <div className="text-xs font-bold uppercase tracking-[0.35em] text-white/65">Final CTA</div>
              <h2 className="editorial-title text-3xl text-[#fbf7f0] md:text-5xl">Your electric journey starts here.</h2>
              <p className="max-w-3xl text-white/75">
                Book a ride, compare the lineup, and explore premium EV mobility that feels forward-looking and polished.
              </p>
              <div className="flex flex-wrap gap-3">
                <SectionAction to="/test-ride" label="Book Test Ride" tone="light" />
                <SectionAction to="/contact" label="Contact Us" tone="light" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.main>
  );
}

export default Home;
