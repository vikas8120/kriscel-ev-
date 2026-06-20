export default function SectionHeading({ eyebrow, title, subtitle, center = false }) {
  return (
    <div className={`${center ? 'mx-auto text-center' : ''} max-w-3xl space-y-4`}>
      {eyebrow ? (
        <div className="text-xs font-bold uppercase tracking-[0.35em] text-brand-blue">{eyebrow}</div>
      ) : null}
      <h2 className="font-display text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
        {title}
      </h2>
      {subtitle ? <p className="text-base leading-7 text-slate-600 md:text-lg">{subtitle}</p> : null}
    </div>
  );
}
