import { useMemo, useState } from "react";
import { ArrowRight, HeartHandshake, MessageCircleHeart, Share2, Sparkles } from "lucide-react";
import { Header } from "./components/Header";
import { SectionTitle } from "./components/SectionTitle";
import { FryBoxPreview } from "./components/FryBoxPreview";
import { MoodSelector } from "./components/MoodSelector";
import { FryCard } from "./components/FryCard";
import { CheckInCardBuilder } from "./components/CheckInCardBuilder";
import { Timeline } from "./components/Timeline";
import { CreatorCard } from "./components/CreatorCard";
import { ResourceCard } from "./components/ResourceCard";
import { Footer } from "./components/Footer";
import {
  activations,
  affirmations,
  creators,
  moods,
  resources,
  steps,
  ugcPosts,
  type FryAffirmation,
  type Mood,
} from "./data/campaignData";

function App() {
  const [selectedMood, setSelectedMood] = useState<Mood>("Overwhelmed");
  const [selectedFries, setSelectedFries] = useState<FryAffirmation[]>([]);
  const [toast, setToast] = useState("");

  const filteredFries = useMemo(
    () => affirmations.filter((fry) => fry.moods.includes(selectedMood)),
    [selectedMood],
  );

  const toggleFry = (fry: FryAffirmation) => {
    setToast("");
    setSelectedFries((current) => {
      if (current.some((item) => item.id === fry.id)) {
        return current.filter((item) => item.id !== fry.id);
      }
      if (current.length >= 5) {
        setToast("Your fry box can hold up to five affirmation fries.");
        return current;
      }
      return [...current, fry];
    });
  };

  const chooseMood = (mood: Mood) => {
    setSelectedMood(mood);
    setSelectedFries([]);
    setToast("");
  };

  return (
    <div id="top" className="min-h-screen text-ink">
      <Header />
      <main>
        <section className="relative overflow-hidden px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-black text-mcdRed shadow-soft">
                <Sparkles size={16} aria-hidden="true" />
                McDonald's Singapore Youth Mental Wellness Initiative 2026
              </div>
              <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[0.95] text-ink sm:text-6xl lg:text-7xl">
                Lovin' Me
              </h1>
              <p className="mt-6 max-w-2xl text-xl font-semibold leading-8 text-stone-700">
                A small reminder that you don't have to go through things alone.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#build" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-mcdRed px-6 py-4 text-base font-black text-white shadow-lift transition hover:-translate-y-0.5">
                  Build My Fry Box
                  <ArrowRight size={19} aria-hidden="true" />
                </a>
                <a href="#check-in" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-base font-black text-ink shadow-soft ring-1 ring-yellow-900/10 transition hover:-translate-y-0.5 hover:bg-mcdYellow">
                  Send a Check-In
                  <MessageCircleHeart size={19} aria-hidden="true" />
                </a>
              </div>
              <p className="mt-6 max-w-lg text-sm font-bold uppercase tracking-[0.16em] text-stone-500">
                One fry, one message, one person at a time.
              </p>
            </div>
            <div className="rounded-[2.5rem] bg-white/75 p-4 shadow-soft ring-1 ring-yellow-900/10 sm:p-8">
              <FryBoxPreview
                title="Today's gentle reminders"
                selectedFries={[
                  affirmations[0],
                  affirmations[1],
                  affirmations[2],
                  affirmations[4],
                ]}
              />
            </div>
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] bg-white p-6 shadow-soft sm:p-8 lg:grid-cols-[0.8fr_1.2fr] lg:p-10">
            <SectionTitle eyebrow="About the campaign" title="Small everyday moments of care." />
            <div className="grid gap-5 text-lg font-semibold leading-8 text-stone-700">
              <p>
                McDonald's is supporting youth mental wellness by turning familiar fries and shared meals into gentle emotional check-ins.
              </p>
              <p>
                Through small affirmations, friend-to-friend messages, and low-pressure meal moments, the campaign gives Singapore youths an easier way to start caring conversations.
              </p>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              align="center"
              eyebrow="How it works"
              title="A softer way to check in."
              copy="No heavy forms. No perfect words needed. Just pick, build, and share."
            />
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {steps.map((step, index) => (
                <article key={step.title} className="rounded-[1.75rem] bg-white p-6 shadow-soft">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-mcdYellow text-2xl font-black text-ink">
                    {index + 1}
                  </div>
                  <h3 className="mt-6 text-2xl font-black text-ink">{step.title}</h3>
                  <p className="mt-3 leading-7 text-stone-700">{step.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="build" className="bg-mcdYellow/35 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Build your fry box"
              title="Choose the fries that match today."
              copy="Pick a mood, select up to five affirmation fries, then preview your own mental wellness fry box."
            />
            <div className="mt-8 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="rounded-[2rem] bg-white p-5 shadow-soft sm:p-7">
                <MoodSelector moods={moods} selectedMood={selectedMood} onSelect={chooseMood} />
                <div className="mt-6 flex items-center justify-between gap-4">
                  <p className="text-sm font-black text-stone-600">
                    {selectedFries.length}/5 fries selected for {selectedMood}
                  </p>
                  <button
                    type="button"
                    onClick={() => setSelectedFries([])}
                    className="rounded-full px-4 py-2 text-sm font-black text-mcdRed transition hover:bg-red-50"
                  >
                    Clear
                  </button>
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {filteredFries.map((fry) => (
                    <FryCard
                      key={fry.id}
                      fry={fry}
                      selected={selectedFries.some((item) => item.id === fry.id)}
                      disabled={selectedFries.length >= 5}
                      onToggle={toggleFry}
                    />
                  ))}
                </div>
              </div>
              <aside className="rounded-[2rem] bg-white p-5 shadow-soft sm:p-7">
                <FryBoxPreview selectedFries={selectedFries} />
                <button
                  type="button"
                  onClick={() => setToast("Preview ready. In a live campaign, this would download or open native sharing.")}
                  className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-base font-black text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-mcdRed"
                >
                  <Share2 size={18} aria-hidden="true" />
                  Download / Share Preview
                </button>
                {toast ? (
                  <p className="mt-4 rounded-2xl bg-cream px-4 py-3 text-sm font-black text-ink" role="status">
                    {toast}
                  </p>
                ) : null}
              </aside>
            </div>
          </div>
        </section>

        <section id="check-in" className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Send a check-in"
              title="Make a message a little easier to send."
              copy="Write a short note, choose a card style, and preview something kind for a friend."
            />
            <div className="mt-8">
              <CheckInCardBuilder />
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle eyebrow="Campaign timeline" title="September to October 2026 rollout." />
            <div className="mt-8">
              <Timeline />
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <SectionTitle
              eyebrow="POLITE activation"
              title="Campus check-ins at ITEs and Polytechnics."
              copy="Build your mental wellness fry, collect affirmations, and leave a message for someone else."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {activations.map((activation) => (
                <article key={activation.location} className="rounded-[1.75rem] bg-cream p-6 shadow-soft">
                  <p className="text-sm font-black uppercase tracking-[0.16em] text-mcdRed">{activation.date}</p>
                  <h3 className="mt-3 text-2xl font-black text-ink">{activation.location}</h3>
                  <p className="mt-4 leading-7 text-stone-700">{activation.activity}</p>
                  <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-mcdYellow px-4 py-2 text-sm font-black text-ink">
                    <HeartHandshake size={16} aria-hidden="true" />
                    Campus pop-up
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              align="center"
              eyebrow="Creators"
              title="Youth voices make the message feel real."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {creators.map((creator) => (
                <CreatorCard key={creator.handle} {...creator} />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-mcdRed px-4 py-16 text-white sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              align="center"
              eyebrow="UGC wall"
              title="Shared reminders from the community."
              copy="#LovinMe #LovinYou #LovinUs #McDSG"
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {ugcPosts.map(([affirmation, caption, tag]) => (
                <article key={`${affirmation}-${caption}`} className="rounded-[1.5rem] bg-white p-5 text-ink shadow-soft">
                  <p className="text-2xl font-black leading-tight">"{affirmation}"</p>
                  <p className="mt-4 leading-7 text-stone-700">{caption}</p>
                  <p className="mt-5 text-sm font-black uppercase tracking-[0.16em] text-mcdRed">{tag}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="resources" className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2rem] bg-cream p-6 shadow-soft sm:p-8 lg:p-10">
            <SectionTitle
              eyebrow="Support resources"
              title="For moments that need more support."
              copy="If you or someone you know needs urgent support, please reach out to a trusted adult or professional support service."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {resources.map((resource) => (
                <ResourceCard key={resource.name} {...resource} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
