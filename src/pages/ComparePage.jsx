import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import CompareTable from '../components/CompareTable';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { vehicles } from '../data/vehicles';

export default function ComparePage() {
  const [selectedIds, setSelectedIds] = useLocalStorage('voltedge-compare', ['s1', 'x']);
  const [leftId, setLeftId] = useState(selectedIds[0]);
  const [rightId, setRightId] = useState(selectedIds[1]);

  useEffect(() => {
    setSelectedIds([leftId, rightId]);
  }, [leftId, rightId, setSelectedIds]);

  const left = useMemo(() => vehicles.find((v) => v.id === leftId), [leftId]);
  const right = useMemo(() => vehicles.find((v) => v.id === rightId), [rightId]);

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <section className="section-shell section-gap">
        <SectionHeading
          eyebrow="Compare"
          title="Choose any two vehicles."
          subtitle="The selected pair is saved in localStorage and the comparison highlights the stronger spec in each row."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <label className="premium-card p-5">
            <div className="mb-2 text-sm font-semibold">Left Vehicle</div>
            <select value={leftId} onChange={(e) => setLeftId(e.target.value)} className="w-full rounded-2xl border border-[#d8d3cd] bg-[#fbf7f0] px-4 py-3">
              {vehicles.map((v) => (
                <option key={v.id} value={v.id}>
                  {v.name}
                </option>
              ))}
            </select>
          </label>
          <label className="premium-card p-5">
            <div className="mb-2 text-sm font-semibold">Right Vehicle</div>
            <select value={rightId} onChange={(e) => setRightId(e.target.value)} className="w-full rounded-2xl border border-[#d8d3cd] bg-[#fbf7f0] px-4 py-3">
              {vehicles.map((v) => (
                <option key={v.id} value={v.id}>
                  {v.name}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="mt-8">
          <CompareTable left={left} right={right} title="Full model comparison" />
        </div>
      </section>
    </motion.main>
  );
}
