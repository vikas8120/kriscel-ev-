import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="section-shell flex min-h-[70vh] items-center justify-center">
      <div className="premium-card p-10 text-center">
        <div className="text-xs font-bold uppercase tracking-[0.3em] text-brand-blue">404</div>
        <h1 className="mt-3 font-display text-4xl font-bold">Page not found</h1>
        <p className="mt-3 text-slate-600">The route does not exist. Head back to the home page.</p>
        <Link to="/" className="mt-6 inline-flex rounded-full bg-brand-gray px-5 py-3 font-semibold text-white">
          Go Home
        </Link>
      </div>
    </div>
  );
}
