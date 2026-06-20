import { useMemo, useState } from 'react';

export default function ChargingCalculator({ vehicles }) {
  const [selected, setSelected] = useState(vehicles[0]?.id || '');
  const [battery, setBattery] = useState(25);

  const currentVehicle = useMemo(() => vehicles.find((v) => v.id === selected) || vehicles[0], [selected, vehicles]);

  const estimate = useMemo(() => {
    if (!currentVehicle) return 0;
    const remaining = Math.max(0, 100 - battery);
    const base = currentVehicle.chargingTime;
    return Math.round((remaining / 100) * base * 1.15);
  }, [battery, currentVehicle]);

  const fill = battery;

  return (
    <div className="premium-card p-6 md:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-4">
          <div className="text-xs font-bold uppercase tracking-[0.3em] text-brand-blue">Charging calculator</div>
          <h3 className="font-display text-2xl font-bold">Estimate your next fast charge</h3>
          <label className="block space-y-2">
            <span className="text-sm font-semibold text-slate-700">Vehicle</span>
            <select
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-brand-blue"
            >
              {vehicles.map((v) => (
                <option key={v.id} value={v.id}>
                  {v.name}
                </option>
              ))}
            </select>
          </label>
          <label className="block space-y-2">
            <span className="text-sm font-semibold text-slate-700">Current battery: {battery}%</span>
            <input type="range" min="0" max="100" value={battery} onChange={(e) => setBattery(Number(e.target.value))} className="w-full" />
          </label>
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-slate-50 p-4">
              <div className="text-[10px] uppercase tracking-[0.25em] text-slate-500">Estimated time</div>
              <div className="mt-1 text-2xl font-bold text-slate-950">{estimate} min</div>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <div className="text-[10px] uppercase tracking-[0.25em] text-slate-500">Full pack</div>
              <div className="mt-1 text-sm font-semibold text-slate-950">{currentVehicle?.battery}</div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-950 to-slate-800 p-6 text-white">
            <div className="text-sm text-slate-300">Charging progress</div>
            <div className="mt-4 h-4 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-brand-blue via-brand-cyan to-white transition-all duration-500"
                style={{ width: `${fill}%` }}
              />
            </div>
            <div className="mt-4 flex items-end justify-between">
              <div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-slate-400">Ready soon</div>
                <div className="text-3xl font-bold">{100 - battery}% remaining</div>
              </div>
              <div className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm">
                Fast-charge compatible
              </div>
            </div>
          </div>
          <p className="text-sm leading-7 text-slate-600">
            The calculator estimates time based on the selected model and current battery level, giving
            a quick premium UX for charging planning.
          </p>
        </div>
      </div>
    </div>
  );
}
