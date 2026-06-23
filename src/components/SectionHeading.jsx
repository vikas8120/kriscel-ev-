export default function SectionHeading({ eyebrow, title, subtitle, center = false }) {
  return (
    <div className={`${center ? 'mx-auto text-center' : ''} max-w-3xl space-y-4`}>
      {eyebrow ? (
        <div className="script-eyebrow">{eyebrow}</div>
      ) : null}
      <h2 className="editorial-title text-3xl tracking-tight text-brand-ink md:text-5xl">
        {title}
      </h2>
      {subtitle ? <p className="text-base leading-7 text-slate-600 md:text-lg">{subtitle}</p> : null}
    </div>
  );
}
