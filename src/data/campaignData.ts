export type Mood =
  | "Overwhelmed"
  | "Burnt Out"
  | "Anxious"
  | "Tired"
  | "Proud"
  | "Grateful"
  | "Need Support"
  | "Want to Support a Friend";

export type FryAffirmation = {
  id: string;
  message: string;
  moods: Mood[];
};

export const moods: Mood[] = [
  "Overwhelmed",
  "Burnt Out",
  "Anxious",
  "Tired",
  "Proud",
  "Grateful",
  "Need Support",
  "Want to Support a Friend",
];

export const affirmations: FryAffirmation[] = [
  {
    id: "enough",
    message: "You're doing enough.",
    moods: ["Overwhelmed", "Burnt Out", "Anxious"],
  },
  {
    id: "rest",
    message: "Rest is productive too.",
    moods: ["Burnt Out", "Tired", "Need Support"],
  },
  {
    id: "step",
    message: "One step at a time.",
    moods: ["Overwhelmed", "Anxious", "Need Support"],
  },
  {
    id: "today",
    message: "You don't have to fix everything today.",
    moods: ["Overwhelmed", "Anxious", "Tired"],
  },
  {
    id: "showing-up",
    message: "I'm proud of you for showing up.",
    moods: ["Proud", "Need Support", "Want to Support a Friend"],
  },
  {
    id: "little-love",
    message: "Send this to someone who needs a little love.",
    moods: ["Grateful", "Want to Support a Friend"],
  },
  {
    id: "breathe",
    message: "Take a breath. You are here.",
    moods: ["Anxious", "Overwhelmed"],
  },
  {
    id: "small-win",
    message: "Tiny wins still count.",
    moods: ["Proud", "Burnt Out", "Tired"],
  },
  {
    id: "not-alone",
    message: "You don't have to go through this alone.",
    moods: ["Need Support", "Anxious", "Overwhelmed"],
  },
  {
    id: "thank-you",
    message: "Thank you for being here.",
    moods: ["Grateful", "Want to Support a Friend"],
  },
  {
    id: "pace",
    message: "Your pace is still progress.",
    moods: ["Burnt Out", "Tired", "Proud"],
  },
  {
    id: "check-in",
    message: "I'm here if you want company.",
    moods: ["Need Support", "Want to Support a Friend"],
  },
];

export const steps = [
  {
    title: "Pick how you feel",
    copy: "Start with a mood. No long quiz, no pressure to explain.",
  },
  {
    title: "Choose affirmation fries",
    copy: "Tap up to five messages that feel right for today.",
  },
  {
    title: "Share your fry box",
    copy: "Save it for yourself or send a warm check-in to a friend.",
  },
];

export const timeline = [
  ["Phase 1", "Vox Pop Teaser", "Early September", "Campus prompts invite youths to finish: 'This week, I needed to hear...'"],
  ["Phase 2", "Campaign Launch", "Mid September", "Microsite and social launch with creator-led fry box reveals."],
  ["Phase 3", "Microsite Engagement", "September", "Students build fry boxes, send check-ins, and share affirmations."],
  ["Phase 4", "KOL Content", "Late September", "Creators model low-pressure conversations and peer support."],
  ["Phase 5", "POLITE Activation", "October", "On-ground fry-building booths at ITE and Polytechnic campuses."],
  ["Phase 6", "Campaign Wrap-Up", "Late October", "UGC highlights and collective message wall close the campaign."],
] as const;

export const activations = [
  {
    date: "4 Oct 2026",
    location: "Ngee Ann Polytechnic Atrium",
    activity: "Build-a-Fry affirmation booth and message wall",
  },
  {
    date: "11 Oct 2026",
    location: "ITE College Central",
    activity: "Mental wellness fry exchange and peer check-in cards",
  },
];

export const creators = [
  {
    handle: "@joellechecks",
    idea: "3 fries I needed this week",
    role: "Normalises honest, everyday mood check-ins.",
    color: "from-mcdYellow to-orange-300",
  },
  {
    handle: "@campuswithdan",
    idea: "Build my mental wellness meal with me",
    role: "Shows how meals can become softer conversation starters.",
    color: "from-mcdRed to-rose-300",
  },
  {
    handle: "@softstudyhours",
    idea: "A check-in I wish someone sent me",
    role: "Encourages supportive friend-to-friend messages.",
    color: "from-emerald-300 to-mcdYellow",
  },
];

export const ugcPosts = [
  ["Rest is productive too.", "Sent this to my project group after submission week.", "#LovinMe"],
  ["One step at a time.", "Needed this before my presentation.", "#LovinUs"],
  ["You're doing enough.", "For anyone who is quietly trying.", "#McDSG"],
  ["I'm here if you want company.", "A small check-in for my best friend.", "#LovinYou"],
  ["Tiny wins still count.", "Made it to class. Counting it.", "#LovinMe"],
  ["Thank you for being here.", "For the friend who always listens.", "#LovinUs"],
];

export const resources = [
  {
    name: "mindline.sg",
    copy: "Self-care tools and mental wellness resources for everyday support.",
  },
  {
    name: "Youthline",
    copy: "Youth-focused listening and emotional support resources.",
  },
  {
    name: "SOS",
    copy: "Crisis support for anyone who needs urgent emotional help.",
  },
  {
    name: "IMH emergency support",
    copy: "Professional emergency support for immediate mental health concerns.",
  },
];

export const cardDesigns = [
  "Sunshine Yellow",
  "Warm Red",
  "Soft Cream",
] as const;
