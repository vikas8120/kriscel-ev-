import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQAccordion({ faqs = [] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-3">
      {faqs.map((item, index) => {
        const open = openIndex === index;
        return (
          <div key={item.q} className="premium-card overflow-hidden">
            <button
              onClick={() => setOpenIndex(open ? -1 : index)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="font-semibold text-slate-900">{item.q}</span>
              <ChevronDown className={`h-5 w-5 transition ${open ? 'rotate-180' : ''}`} />
            </button>
            {open ? <div className="px-5 pb-5 text-sm leading-7 text-slate-600">{item.a}</div> : null}
          </div>
        );
      })}
    </div>
  );
}
