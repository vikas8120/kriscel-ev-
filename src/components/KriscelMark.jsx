export default function KriscelMark({ className = '', priority = false }) {
  return (
    <img
      src="/assets/kriscel-ev-logo.png"
      alt="Kriscel EV logo"
      className={`block object-contain ${className}`.trim()}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
    />
  );
}
