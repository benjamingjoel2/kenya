"use client";

// Temporary stub — full planner arrives in phase 3.
export function PlannerModal({ onClose }: { onClose: () => void }) {
  return (
    <div role="dialog" aria-modal="true" className="fixed inset-0 z-[80] grid place-items-center bg-charcoal/70">
      <button onClick={onClose} className="rounded-full bg-cream px-6 py-3">Close</button>
    </div>
  );
}
