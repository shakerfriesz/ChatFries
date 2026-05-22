type CreatorCardProps = {
  handle: string;
  idea: string;
  role: string;
  color: string;
};

export function CreatorCard({ handle, idea, role, color }: CreatorCardProps) {
  return (
    <article className="rounded-[1.75rem] bg-white p-5 shadow-soft">
      <div className={`h-44 rounded-[1.25rem] bg-gradient-to-br ${color} p-4`}>
        <div className="grid h-full place-items-center rounded-full bg-white/35 text-5xl font-black text-white shadow-inner">
          {handle.slice(1, 2).toUpperCase()}
        </div>
      </div>
      <p className="mt-5 text-sm font-black uppercase tracking-[0.14em] text-mcdRed">{handle}</p>
      <h3 className="mt-2 text-xl font-black text-ink">{idea}</h3>
      <p className="mt-3 leading-7 text-stone-700">{role}</p>
    </article>
  );
}
