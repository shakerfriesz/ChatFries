type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
};

export function SectionTitle({ eyebrow, title, copy, align = "left" }: SectionTitleProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.18em] text-mcdRed">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-black leading-tight text-ink sm:text-4xl">{title}</h2>
      {copy ? <p className="mt-4 text-base leading-7 text-stone-700 sm:text-lg">{copy}</p> : null}
    </div>
  );
}
