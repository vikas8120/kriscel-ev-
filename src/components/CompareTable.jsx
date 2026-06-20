export default function CompareTable({ left, right, title = 'Comparison' }) {
  if (!left || !right) {
    return (
      <div className="premium-card p-8 text-center text-slate-600">
        Select two vehicles to view comparison.
      </div>
    );
  }

  const rows = [
    ['Range', `${left.range} KM`, `${right.range} KM`, left.range > right.range ? 'left' : right.range > left.range ? 'right' : 'tie'],
    ['Speed', `${left.speed} km/h`, `${right.speed} km/h`, left.speed > right.speed ? 'left' : right.speed > left.speed ? 'right' : 'tie'],
    ['Battery', left.battery, right.battery, left.battery.length > right.battery.length ? 'left' : right.battery.length > left.battery.length ? 'right' : 'tie'],
    ['Charging Time', `${left.chargingTime} min`, `${right.chargingTime} min`, left.chargingTime < right.chargingTime ? 'left' : right.chargingTime < left.chargingTime ? 'right' : 'tie'],
    ['Warranty', left.warranty, right.warranty, left.warranty > right.warranty ? 'left' : right.warranty > left.warranty ? 'right' : 'tie'],
    ['Price', `₹${left.price.toLocaleString('en-IN')}`, `₹${right.price.toLocaleString('en-IN')}`, left.price < right.price ? 'left' : right.price < left.price ? 'right' : 'tie'],
  ];

  const cell = (side, winner, value) => (
    <div
      className={`rounded-2xl px-4 py-3 text-sm ${
        winner === side ? 'bg-brand-blue/10 text-slate-950 ring-1 ring-brand-blue/20' : 'bg-slate-50 text-slate-700'
      }`}
    >
      {value}
    </div>
  );

  return (
    <div className="premium-card overflow-hidden">
      <div className="border-b border-slate-200 px-6 py-4 font-semibold">{title}</div>
      <div className="grid gap-3 p-4">
        <div className="grid grid-cols-[1fr_1fr_1fr] gap-3 rounded-2xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white">
          <div>Spec</div>
          <div>{left.name}</div>
          <div>{right.name}</div>
        </div>
        {rows.map(([spec, a, b, winner]) => (
          <div key={spec} className="grid grid-cols-[1fr_1fr_1fr] gap-3">
            <div className="rounded-2xl bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-900">{spec}</div>
            {cell('left', winner, a)}
            {cell('right', winner, b)}
          </div>
        ))}
      </div>
    </div>
  );
}
