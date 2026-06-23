import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const DEFAULT_VIDEO_SOURCES = ['/assets/ev-hero-video.mp4'];
const VIDEO_STORAGE_KEY = 'kriscel-hero-video-index';

function getInitialVideo(videoSources) {
  if (typeof window === 'undefined' || !videoSources.length) {
    return videoSources[0] || DEFAULT_VIDEO_SOURCES[0];
  }

  const storedIndex = Number(window.localStorage.getItem(VIDEO_STORAGE_KEY) || 0);
  const currentIndex = Number.isFinite(storedIndex) ? storedIndex % videoSources.length : 0;
  return videoSources[currentIndex] || videoSources[0] || DEFAULT_VIDEO_SOURCES[0];
}

export default function VideoHero({ title, subtitle, actions, stats = [], videoSources = DEFAULT_VIDEO_SOURCES }) {
  const [activeVideo, setActiveVideo] = useState(() => getInitialVideo(videoSources));
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    if (!videoSources.length || typeof window === 'undefined') return;
    if (window.__kriscelHeroVideoAdvancedThisLoad) return;

    const storedIndex = Number(window.localStorage.getItem(VIDEO_STORAGE_KEY) || 0);
    const currentIndex = Number.isFinite(storedIndex) ? storedIndex % videoSources.length : 0;
    const nextIndex = (currentIndex + 1) % videoSources.length;

    setActiveVideo(videoSources[currentIndex] || videoSources[0] || DEFAULT_VIDEO_SOURCES[0]);
    setVideoFailed(false);
    window.localStorage.setItem(VIDEO_STORAGE_KEY, String(nextIndex));
    window.__kriscelHeroVideoAdvancedThisLoad = true;
  }, [videoSources]);

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        {!videoFailed ? (
          <video
            key={activeVideo}
            className="h-full w-full object-cover opacity-100"
            autoPlay
            muted
            loop
            playsInline
            poster="/assets/ev-scooty-hero.jpg"
            onError={() => setVideoFailed(true)}
          >
            <source src={activeVideo} type="video/mp4" />
          </video>
        ) : null}
      </div>
      <div className="absolute inset-0 bg-transparent" />

      <div className="relative section-shell flex min-h-[78vh] items-end py-12 sm:items-center md:min-h-[92vh] md:py-16">
        <div className="max-w-4xl space-y-6 md:space-y-8">
          <div className="inline-flex rounded-full border border-white/30 bg-white/15 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm sm:px-4 sm:py-2 sm:text-sm">
            Premium electric scooties and bikes
          </div>
          <div className="space-y-4 md:space-y-5">
            <h1 className="editorial-title max-w-4xl text-4xl font-semibold tracking-tight text-white drop-shadow-[0_4px_24px_rgba(15,23,42,0.5)] sm:text-5xl md:text-7xl">
              {title}
            </h1>
            <p className="max-w-xl text-sm leading-7 text-white/90 drop-shadow-[0_2px_14px_rgba(15,23,42,0.35)] sm:text-base md:max-w-2xl md:text-lg md:leading-8">
              {subtitle}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {actions}
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {stats.map((item) => (
              <div key={item.label} className="rounded-[1.5rem] border border-white/20 bg-white/10 p-3 text-white backdrop-blur-sm sm:p-4">
                <div className="text-[10px] uppercase tracking-[0.28em] text-white/70">{item.label}</div>
                <div className="mt-2 text-lg font-bold sm:text-xl">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
