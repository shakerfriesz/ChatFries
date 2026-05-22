import { Check } from "lucide-react";
import type { FryAffirmation } from "../data/campaignData";

type FryCardProps = {
  fry: FryAffirmation;
  selected: boolean;
  disabled: boolean;
  onToggle: (fry: FryAffirmation) => void;
};

export function FryCard({ fry, selected, disabled, onToggle }: FryCardProps) {
  return (
    <button
      type="button"
      onClick={() => onToggle(fry)}
      disabled={disabled && !selected}
      aria-pressed={selected}
      className={`group flex min-h-28 w-full items-stretch rounded-[1.5rem] border-2 p-2 text-left shadow-soft transition hover:-translate-y-1 ${
        selected
          ? "border-mcdRed bg-mcdYellow"
          : "border-yellow-900/10 bg-white hover:border-mcdYellow"
      } ${disabled && !selected ? "cursor-not-allowed opacity-50" : ""}`}
    >
      <span className="fry-shape flex w-12 shrink-0 items-center justify-center bg-mcdYellow text-xs font-black text-ink shadow-inner">
        Fry
      </span>
      <span className="flex flex-1 items-center justify-between gap-3 px-3 py-2">
        <span className="text-base font-black leading-snug text-ink">{fry.message}</span>
        <span
          className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border ${
            selected ? "border-mcdRed bg-mcdRed text-white" : "border-stone-300 bg-white text-transparent"
          }`}
          aria-hidden="true"
        >
          <Check size={16} />
        </span>
      </span>
    </button>
  );
}
