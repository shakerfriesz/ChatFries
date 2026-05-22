import type { FryAffirmation } from "../data/campaignData";

type FryBoxPreviewProps = {
  selectedFries: FryAffirmation[];
  title?: string;
};

export function FryBoxPreview({ selectedFries, title = "My mental wellness fry box" }: FryBoxPreviewProps) {
  const previewFries = selectedFries.length
    ? selectedFries
    : [
        { id: "placeholder-1", message: "Choose a fry", moods: [] },
        { id: "placeholder-2", message: "Add a reminder", moods: [] },
        { id: "placeholder-3", message: "Share care", moods: [] },
      ];
  const visibleFries = previewFries.slice(0, 5);

  return (
    <div className="relative mx-auto min-h-[400px] max-w-sm" aria-label="Live fry box preview">
      <div className="absolute inset-x-6 top-14 z-10 flex items-end justify-center gap-2">
        {visibleFries.map((fry, index) => {
          const bubblePosition =
            index === 0
              ? "left-0 translate-x-0"
              : index === visibleFries.length - 1
                ? "right-0 translate-x-0"
                : "left-1/2 -translate-x-1/2";

          return (
          <div
            key={fry.id}
            className="group relative origin-bottom animate-pop hover:z-40 focus-within:z-40"
            style={{
              transform: `rotate(${[-8, 5, -2, 9, -6][index] ?? 0}deg) translateY(${[16, 0, 10, 4, 20][index] ?? 0}px)`,
            }}
          >
            <button
              type="button"
              className="relative flex min-h-[190px] w-12 items-start justify-center sm:w-14"
              aria-label={`Read affirmation: ${fry.message}`}
            >
              <span
                className={`pointer-events-none absolute top-2 z-50 w-44 rounded-2xl bg-white px-4 py-3 text-center text-sm font-black leading-snug text-ink opacity-0 shadow-soft ring-2 ring-mcdYellow transition duration-200 group-hover:-translate-y-16 group-hover:opacity-100 group-focus-within:-translate-y-16 group-focus-within:opacity-100 ${bubblePosition}`}
              >
                {fry.message}
              </span>
              <span className="fry-shape flex min-h-[190px] w-full items-start justify-center bg-mcdYellow px-2 pb-4 pt-5 text-center text-[11px] font-black leading-tight text-ink shadow-soft ring-2 ring-yellow-700/10 transition duration-300 ease-out group-hover:-translate-y-12 group-hover:shadow-lift group-focus-within:-translate-y-12 group-focus-within:shadow-lift">
                <span className="transition duration-200 group-hover:opacity-0 group-focus-within:opacity-0 [writing-mode:vertical-rl]">
                  {fry.message}
                </span>
              </span>
            </button>
          </div>
          );
        })}
      </div>
      <div className="fry-box-shape absolute inset-x-4 bottom-0 z-20 h-52 bg-mcdRed shadow-lift">
        <div className="absolute inset-x-8 top-8 rounded-full bg-white/20 py-3 text-center text-6xl font-black text-mcdYellow">
          M
        </div>
        <div className="absolute inset-x-6 bottom-8 rounded-3xl bg-white px-4 py-4 text-center shadow-soft">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-mcdRed">Lovin' Us</p>
          <p className="mt-1 text-lg font-black leading-tight text-ink">{title}</p>
        </div>
      </div>
    </div>
  );
}
