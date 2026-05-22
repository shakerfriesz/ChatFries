import type { Mood } from "../data/campaignData";

type MoodSelectorProps = {
  moods: Mood[];
  selectedMood: Mood;
  onSelect: (mood: Mood) => void;
};

export function MoodSelector({ moods, selectedMood, onSelect }: MoodSelectorProps) {
  return (
    <div className="flex gap-3 overflow-x-auto pb-2" role="list" aria-label="Choose your mood">
      {moods.map((mood) => (
        <button
          key={mood}
          type="button"
          onClick={() => onSelect(mood)}
          className={`min-w-fit rounded-full border-2 px-4 py-3 text-sm font-black transition hover:-translate-y-0.5 ${
            selectedMood === mood
              ? "border-ink bg-ink text-white shadow-soft"
              : "border-yellow-900/10 bg-white text-ink hover:border-mcdYellow"
          }`}
          aria-pressed={selectedMood === mood}
        >
          {mood}
        </button>
      ))}
    </div>
  );
}
