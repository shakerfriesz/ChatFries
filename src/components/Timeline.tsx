import { timeline } from "../data/campaignData";

export function Timeline() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {timeline.map(([phase, title, date, copy]) => (
        <article key={phase} className="rounded-[1.5rem] border border-yellow-900/10 bg-white p-5 shadow-soft">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-mcdRed">{phase}</p>
          <h3 className="mt-3 text-xl font-black text-ink">{title}</h3>
          <p className="mt-1 text-sm font-black text-stone-600">{date}</p>
          <p className="mt-4 leading-7 text-stone-700">{copy}</p>
        </article>
      ))}
    </div>
  );
}
