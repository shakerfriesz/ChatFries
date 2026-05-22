import { useMemo, useState } from "react";
import { Send, Sparkles } from "lucide-react";
import { cardDesigns } from "../data/campaignData";

const designClasses = {
  "Sunshine Yellow": "bg-mcdYellow text-ink",
  "Warm Red": "bg-mcdRed text-white",
  "Soft Cream": "bg-white text-ink",
};

export function CheckInCardBuilder() {
  const [friendName, setFriendName] = useState("Jamie");
  const [message, setMessage] = useState("No need to reply fast. Just wanted you to know I'm here.");
  const [design, setDesign] = useState<(typeof cardDesigns)[number]>("Sunshine Yellow");
  const [ready, setReady] = useState(false);

  const previewName = friendName.trim() || "friend";
  const previewMessage = useMemo(
    () => message.trim() || "Sending a small reminder that you matter.",
    [message],
  );

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-stretch">
      <form
        className="rounded-[2rem] bg-white p-5 shadow-soft sm:p-7"
        onSubmit={(event) => {
          event.preventDefault();
          setReady(true);
        }}
      >
        <div className="grid gap-5">
          <label className="grid gap-2 text-sm font-black text-ink">
            Friend's name
            <input
              value={friendName}
              onChange={(event) => setFriendName(event.target.value)}
              className="rounded-2xl border border-yellow-900/15 bg-cream px-4 py-3 text-base font-semibold text-ink"
              placeholder="e.g. Jamie"
            />
          </label>
          <label className="grid gap-2 text-sm font-black text-ink">
            Your message
            <textarea
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              rows={5}
              maxLength={180}
              className="resize-none rounded-2xl border border-yellow-900/15 bg-cream px-4 py-3 text-base font-semibold leading-7 text-ink"
              placeholder="Write a short, kind check-in..."
            />
            <span className="text-xs font-semibold text-stone-600">{message.length}/180 characters</span>
          </label>
          <fieldset className="grid gap-3">
            <legend className="text-sm font-black text-ink">Choose an affirmation card design</legend>
            <div className="grid gap-3 sm:grid-cols-3">
              {cardDesigns.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setDesign(option)}
                  className={`rounded-2xl border-2 px-4 py-3 text-left text-sm font-black transition hover:-translate-y-0.5 ${
                    design === option ? "border-ink bg-ink text-white" : "border-yellow-900/10 bg-cream text-ink"
                  }`}
                  aria-pressed={design === option}
                >
                  {option}
                </button>
              ))}
            </div>
          </fieldset>
          <p className="rounded-2xl bg-cream px-4 py-3 text-sm font-semibold leading-6 text-stone-700">
            This is a supportive message, not a replacement for professional help.
          </p>
          <button
            type="submit"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-mcdRed px-5 py-3 text-base font-black text-white shadow-lift transition hover:-translate-y-0.5"
          >
            <Send size={18} aria-hidden="true" />
            Prepare Check-In Card
          </button>
          {ready ? (
            <p className="rounded-2xl bg-green-50 px-4 py-3 text-sm font-black text-green-800" role="status">
              Your check-in card is ready to share.
            </p>
          ) : null}
        </div>
      </form>
      <article className={`rounded-[2rem] p-7 shadow-soft ${designClasses[design]}`} aria-label="Live check-in card preview">
        <div className="flex items-center justify-between gap-4">
          <span className="rounded-full bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-mcdRed">
            Lovin' You
          </span>
          <Sparkles size={24} aria-hidden="true" />
        </div>
        <div className="mt-16">
          <p className="text-lg font-black">Hey {previewName},</p>
          <p className="mt-5 text-3xl font-black leading-tight sm:text-4xl">"{previewMessage}"</p>
          <p className="mt-10 text-sm font-black uppercase tracking-[0.16em] opacity-80">
            One fry, one message, one person at a time.
          </p>
        </div>
      </article>
    </div>
  );
}
