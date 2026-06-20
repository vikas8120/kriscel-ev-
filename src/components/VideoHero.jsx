import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function VideoHero({ title, subtitle, actions, stats = [] }) {
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    setVideoFailed(false);
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        {!videoFailed ? (
          <video
            className="h-full w-full object-cover opacity-100"
            autoPlay
            muted
            loop
            playsInline
            poster="/assets/ev-scooty-hero.jpg"
            onError={() => setVideoFailed(true)}
          >
            <source src="/assets/ev-hero-video.mp4" type="video/mp4" />
          </video>
        ) : null}
      </div>
      <div className="absolute inset-0 bg-transparent" />

      <div className="relative section-shell flex min-h-[92vh] items-center py-16">
        <div className="max-w-4xl space-y-8">
          <div className="inline-flex rounded-full border border-white/30 bg-white/15 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
            Premium electric scooties and bikes
          </div>
          <div className="space-y-5">
            <h1 className="max-w-4xl font-display text-5xl font-bold tracking-tight text-white drop-shadow-[0_4px_24px_rgba(15,23,42,0.5)] md:text-7xl">
              {title}
            </h1>
            <p className="max-w-2xl text-base leading-8 text-white/90 drop-shadow-[0_2px_14px_rgba(15,23,42,0.35)] md:text-lg">
              {subtitle}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {actions}
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((item) => (
              <div key={item.label} className="rounded-[1.5rem] border border-white/20 bg-white/10 p-4 text-white backdrop-blur-sm">
                <div className="text-[10px] uppercase tracking-[0.28em] text-white/70">{item.label}</div>
                <div className="mt-2 text-xl font-bold">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
