import { Heart, Menu } from "lucide-react";

const navItems = [
  ["How it works", "#how-it-works"],
  ["Build", "#build"],
  ["Check-in", "#check-in"],
  ["Resources", "#resources"],
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-yellow-900/10 bg-cream/88 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8" aria-label="Main navigation">
        <a href="#top" className="flex items-center gap-2 rounded-full text-sm font-black text-ink">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-mcdRed text-white shadow-soft">
            <Heart size={18} fill="currentColor" aria-hidden="true" />
          </span>
          <span>Lovin' Us</span>
        </a>
        <div className="hidden items-center gap-6 md:flex">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} className="text-sm font-bold text-stone-700 transition hover:text-mcdRed">
              {label}
            </a>
          ))}
        </div>
        <a href="#build" className="hidden rounded-full bg-ink px-5 py-3 text-sm font-black text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-mcdRed md:inline-flex">
          Build My Fry Box
        </a>
        <a href="#build" className="grid h-11 w-11 place-items-center rounded-full bg-mcdYellow text-ink md:hidden" aria-label="Open build section">
          <Menu size={21} aria-hidden="true" />
        </a>
      </nav>
    </header>
  );
}
