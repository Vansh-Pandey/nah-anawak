// ANAWAK content — taken from the ANAWAK site (jwd/src/locales/en.json, jwd/src/data/content.ts).

export const properties = [
  { id: "seahorse", name: "SEAHORSE", tagline: "Floating villas anchored above a private lagoon.", price: "$10,600,000", unit: "2 BEDROOMS · 3 LEVELS", h: 195, hero: "/properties/seahorse/8.jpg", panel: "/properties/seahorse/5.jpg" },
  { id: "portofino", name: "PORTOFINO", tagline: "Mediterranean-inspired waterfront living, reimagined.", price: "$845,000 – $1,256,214", unit: "STUDIO – 2 BEDROOMS", h: 20, hero: "/properties/portofino/1.jpg", panel: "/properties/portofino/3.jpg" },
  { id: "germany-island", name: "GERMANY ISLAND", tagline: "A private island retreat within the World Islands archipelago.", price: "$8,170,000", unit: "LAGOON VILLA", h: 140, hero: "/properties/germany-island/8.jpg", panel: "/properties/germany-island/1.jpg" },
  { id: "cote-dazur", name: "CÔTE D'AZUR", tagline: "The glamour of the French Riviera, set on the Arabian Gulf.", price: "$610,000 – $1,220,000", unit: "STUDIO – 2 BEDROOMS", h: 215, hero: "/properties/cote-dazur/2.jpg", panel: "/properties/cote-dazur/9.jpg" },
];


export const slides = properties.map((p) => ({
  theme: "The Heart of Europe", title: p.name, note: p.tagline, cond: `Price: ${p.price}`, h: p.h,
}));

export const lineup = [
  ...properties.map((p) => ({ name: p.name, area: p.unit, concept: p.tagline, price: p.price, tag: "", h: p.h })),
  { name: "WATERFRONT VILLAS", area: "RESIDENCES", concept: "Where the sea becomes your garden.", price: "", tag: "", h: 175 },
  { name: "MARINA RESIDENCES", area: "RESIDENCES", concept: "The skyline, at your window.", price: "", tag: "", h: 230 },
  { name: "SIGNATURE ESTATES", area: "RESIDENCES", concept: "Architecture worthy of a legacy.", price: "", tag: "", h: 120 },
  { name: "INSPECTION TOUR", area: "6 DAYS, 5 NIGHTS", concept: "Walk the city before you own it.", price: "¥550,000", tag: "", h: 40 },
];

export const features = [
  { n: "01", title: "Private Consultation", desc: "An unhurried conversation — in English or Japanese — to understand your family, your goals, and the life you envision.", h: 160 },
  { n: "02", title: "Curated Selection", desc: "A shortlist of residences chosen for architecture, waterfront, and enduring value. Never a catalogue — always a curation.", h: 200 },
  { n: "03", title: "Seamless Acquisition", desc: "Legal, financial, and residency guidance handled with private-banking precision, from first viewing to final signature.", h: 40 },
  { n: "04", title: "Enduring Stewardship", desc: "Management, advisory, and legacy planning that continues long after the keys are yours — across generations.", h: 260 },
];

export const news = [
  "Day 1 — Arrival & the Desert", "Day 2 — Seminar & Property Tours", "Day 3 — A Day at Your Own Pace",
  "Day 4 — Marina Cruise & Departure Prep", "Day 5 — Home",
];
export const owners = [
  "“ANAWAK guided our family’s first overseas acquisition with a discretion and clarity we had not encountered before.”",
  "“More than a residence — they curated a lifestyle our children will inherit.”",
  "“The process felt like private banking: precise, unhurried, and deeply personal.”",
];
export const creators: [string, string][] = [
  ["Japan Worldlink DWC", "The founding company connecting Japanese vision with the most distinguished addresses."],
  ["JWD INVESTMENT", "Strategic capital and asset management behind the group’s most ambitious ventures."],
  ["JWD Luna Travel & Tourism LLC", "Curated travel and tourism experiences."],
];
export const movies = [
  { title: "Seahorse — Video 1", poster: "/properties/seahorse/11.jpg", src: "/properties/seahorse/video-1.mp4" },
  { title: "Seahorse — Video 2", poster: "/properties/seahorse/5.jpg", src: "/properties/seahorse/video-2.mp4" },
  { title: "Portofino — Video 1", poster: "/properties/portofino/2.jpg", src: "/properties/portofino/video-1.mp4" },
  { title: "Portofino — Video 2", poster: "/properties/portofino/3.jpg", src: "/properties/portofino/video-2.mp4" },
  { title: "Côte d'Azur — Video 1", poster: "/properties/cote-dazur/9.jpg", src: "/properties/cote-dazur/video-1.mp4" },
  { title: "Côte d'Azur — Video 2", poster: "/properties/cote-dazur/6.jpg", src: "/properties/cote-dazur/video-2.mp4" },
  { title: "Côte d'Azur — Video 3", poster: "/properties/cote-dazur/1.jpg", src: "/properties/cote-dazur/video-3.mp4" },
];

export const menus = {
  about: ["Trust", "Lifestyle", "Legacy", "The Ownership Journey", "The Inspection Tour", "Client Voices"],
  related: ["Japan Worldlink DWC", "JWD INVESTMENT", "JWD Luna Travel & Tourism LLC"],
  company: ["Company Profile", "About JWD Group", "Our Advisors", "Press", "Careers", "Consultation"],
};
export const legal = ["Company Profile", "About JWD Group", "Our Advisors", "Press", "Careers", "Consultation", "Privacy", "Terms"];
