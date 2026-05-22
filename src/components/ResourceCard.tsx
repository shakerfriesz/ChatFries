import { ExternalLink } from "lucide-react";

type ResourceCardProps = {
  name: string;
  copy: string;
};

export function ResourceCard({ name, copy }: ResourceCardProps) {
  return (
    <article className="rounded-[1.5rem] border border-stone-200 bg-white p-5 shadow-soft">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-black text-ink">{name}</h3>
        <ExternalLink className="shrink-0 text-mcdRed" size={20} aria-hidden="true" />
      </div>
      <p className="mt-3 leading-7 text-stone-700">{copy}</p>
    </article>
  );
}
