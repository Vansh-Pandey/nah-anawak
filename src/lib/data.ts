// ANAWAK content — taken verbatim from the ANAWAK site (jwd/src/locales/en.json, jwd/src/data/content.ts).

export type Property = {
  slug: string;
  name: string;
  tagline: string;
  price: string;
  /** Card poster / hero image */
  image: string;
  /** Text colour on the card (matches the brightness of the photo) */
  theme: "white" | "black";
  gallery: string[];
  videos: string[];
  documents: { label: string; href: string }[];
  specs?: { floorArea: string; floorPlan: string; bedrooms: string; investment: string; additional: string };
};

const g = (slug: string, n: number) => Array.from({ length: n }, (_, i) => `/properties/${slug}/${i + 1}.jpg`);

export const properties: Property[] = [
  {
    slug: "seahorse",
    name: "SEAHORSE",
    tagline: "Floating villas anchored above a private lagoon.",
    price: "$10,600,000",
    image: "/properties/seahorse/8.jpg",
    theme: "white",
    gallery: g("seahorse", 13),
    videos: ["/properties/seahorse/video-1.mp4", "/properties/seahorse/video-2.mp4"],
    documents: [
      { label: "Property Brochure", href: "/properties/seahorse/documents/seahorse-honeymoon-island-brochure.pdf" },
      { label: "Factsheet", href: "/properties/seahorse/documents/seahorse-factsheet.pdf" },
      { label: "Floor Plan", href: "/properties/seahorse/documents/seahorse-floor-plan.pdf" },
      { label: "Location Plan", href: "/properties/seahorse/documents/seahorse-st-petersburg-plan.pdf" },
    ],
    specs: {
      floorArea: "4,004 sq ft / ≈372 m² total configured area (272 m² living area)",
      floorPlan: "3 levels — underwater, sea, and upper",
      bedrooms: "2",
      investment: "Both bedrooms are underwater — the villa's defining feature",
      additional:
        "Underwater level 141 m² (80 m² indoor + 61 m² coral garden) · Sea level ≈152 m² (76 m² indoor + 76 m² deck) · Upper level 79 m² (37 m² indoor + 42 m² deck)",
    },
  },
  {
    slug: "portofino",
    name: "PORTOFINO",
    tagline: "Mediterranean-inspired waterfront living, reimagined.",
    price: "$845,000 – $1,256,214",
    image: "/properties/portofino/1.jpg",
    theme: "black",
    gallery: g("portofino", 8),
    videos: ["/properties/portofino/video-1.mp4", "/properties/portofino/video-2.mp4"],
    documents: [{ label: "Property Brochure", href: "/properties/portofino/documents/portofino-intercontinental-brochure.pdf" }],
    specs: {
      floorArea: "55 – 258 m²",
      floorPlan: "Studio, 1BR (Types A–D), and 2BR (Types A–B)",
      bedrooms: "Studio – 2",
      investment: "The broadest size range of the three Heart of Europe hotel developments",
      additional:
        "489 sea-view suites, including rooftop villas with private plunge pools; family-oriented design with an integrated children's bedroom/playroom in the original Princess, Queen, and Royal Suites",
    },
  },
  {
    slug: "germany-island",
    name: "GERMANY ISLAND",
    tagline: "A private island retreat within the World Islands archipelago.",
    price: "$8,170,000",
    image: "/properties/germany-island/8.jpg",
    theme: "black",
    gallery: g("germany-island", 17),
    videos: [],
    documents: [
      { label: "Property Brochure", href: "/properties/germany-island/documents/germany-island-brochure.pdf" },
      { label: "Private Guided Tour", href: "/properties/germany-island/documents/germany-island-private-guided-tour.pdf" },
    ],
    specs: {
      floorArea: "417 m² built-up area (plot 327 – 341 m²)",
      floorPlan: "Lagoon Villa — ground floor",
      bedrooms: "—",
      investment: "Private villa plots within the World Islands archipelago",
      additional: "Ground floor: Kitchen 19 m² · Maid's Room 15 m² · Living & Dining 67 m² · Ground floor size 240 m²",
    },
  },
  {
    slug: "cote-dazur",
    name: "CÔTE D'AZUR",
    tagline: "The glamour of the French Riviera, set on the Arabian Gulf.",
    price: "$681,000 – $860,000",
    image: "/properties/cote-dazur/2.jpg",
    theme: "white",
    gallery: g("cote-dazur", 11),
    videos: ["/properties/cote-dazur/video-1.mp4", "/properties/cote-dazur/video-2.mp4", "/properties/cote-dazur/video-3.mp4"],
    documents: [],
  },
];

export const benefits = [
  "☆Rental guarantee (4% annually for 12 years)",
  "☆4 complimentary nights per year",
  "☆No management fees",
  "☆DEWA (utilities) free",
  "☆No reserve fund contributions",
  "☆Furnished (All Bentley branded furnitures)",
];

export const groupSites = [
  {
    name: "Japan Worldlink DWC",
    description: "The founding company connecting Japanese vision with the most distinguished addresses.",
    url: "https://worldlinkdwc.com/",
    image: "/anawak/group-wdwc.jpg",
  },
  {
    name: "JWD INVESTMENT",
    description: "Strategic capital and asset management behind the group's most ambitious ventures.",
    url: "https://jwdinvestment.com/",
    image: "/anawak/group-invest.jpg",
  },
  {
    name: "JWD Luna Travel & Tourism LLC",
    description: "Curated travel and tourism experiences.",
    url: "https://www.dubai-trip.ae/",
    image: "/anawak/group-luna.jpg",
  },
];

export const navLinks = [
  { label: "Residences", href: "/properties" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Concierge", href: "/concierge" },
  { label: "Lifestyle", href: "/lifestyle" },
  { label: "Legacy", href: "/legacy" },
  { label: "About us", href: "/about" },
];

export const companyProfile = {
  lead:
    "ANAWAK is operated by a licensed real estate entity registered in Dubai, United Arab Emirates — regulated by the Dubai Land Department (DLD) and the Real Estate Regulatory Agency (RERA).",
  fields: [
    ["Company Name", "ANAWAK REAL ESTATE L.L.C."],
    ["Trade License No.", "1124264"],
    ["Licensing Authority", "Dubai Department of Economy and Tourism (DET)"],
    ["RERA / ORN No.", "1162605"],
    ["Regulated By", "Dubai Land Department (DLD)\nReal Estate Regulatory Agency (RERA)"],
    ["Capital", "USD 483,500 (JPY 75,000,000)"],
    ["Total Assets", "USD 46,500,000 (JPY 7,200,000,000)"],
    ["Representative", "Hamit Gurbuz"],
    ["Registered Address", "Office M34, AL MAMZAR BLDG, Hor Al Anz, Dubai, UAE"],
  ] as [string, string][],
};

export const interests = [
  "Waterfront Villas / Investment Pattern A",
  "Marina Residences / Investment Pattern B",
  "Inspection Tour",
  "General Consultation & Inquiries",
];

/** Côte d'Azur is made up of two hotels — Nice and St. Tropez. Figures are from the ANAWAK reference page (Japanese). */
export const coteDazur = {
  label: "Boutique Hotel Residence",
  brand: "IHG Hotels & Resorts",
  description:
    "A hotel with the atmosphere of the south of France. ANAWAK handles 5 rooms in this hotel, with owner benefits such as a 12-year owner benefit and 14 free nights a year.",
  price: "$681,000 – $860,000",
  units: "5 rooms / Furnished",
  benefit: "12-year rental guarantee (4% annually)",
  types: [
    ["Type 1", "$681,000"],
    ["Type 2", "$681,000"],
    ["Type 3", "$739,000"],
    ["Type 4", "$817,000"],
    ["Type 5", "$860,000"],
  ] as [string, string][],
  hotels: [
    { slug: "nice", name: "NICE", hotel: "VOCO Dubai Nice Heart of Europe", image: "/properties/cote-dazur/2.jpg" },
    { slug: "st-tropez", name: "ST. TROPEZ", hotel: "VOCO Dubai St. Tropez Heart of Europe", image: "/properties/cote-dazur/9.jpg" },
  ],
  offerImage: "/properties/cote-dazur/7.jpg",
};

/* ───────── Shared page content (ANAWAK site copy) ───────── */

export const pillars = [
  {
    n: "01",
    title: "Trust",
    body: "Professional expertise and transparent advice, built on long-term relationships and unwavering financial confidence. Guidance you can rely on across generations.",
    points: ["Professional expertise", "Transparent advice", "Long-term relationships", "Financial confidence"],
    image: "/anawak/tower.jpg",
  },
  {
    n: "02",
    title: "Lifestyle",
    body: "Beautiful architecture, world-class amenities, and healthy living. Family happiness within a truly global community, on some of the world's most serene waterfronts.",
    points: ["Beautiful architecture", "World-class amenities", "Family happiness", "Global community"],
    image: "/anawak/bikini_image.webp",
  },
  {
    n: "03",
    title: "Legacy",
    body: "Wealth preservation for future generations through international diversification and timeless value. Assets chosen not for a season, but for a century.",
    points: ["Wealth preservation", "Future generations", "International diversification", "Timeless value"],
    image: "/anawak/pillar-legacy.jpg",
  },
];

export const journey = [
  { n: "01", title: "Private Consultation", body: "An unhurried conversation — in English or Japanese — to understand your family, your goals, and the life you envision.", image: "/anawak/terrace.jpg" },
  { n: "02", title: "Curated Selection", body: "A shortlist of residences chosen for architecture, waterfront, and enduring value. Never a catalogue — always a curation.", image: "/properties/seahorse/8.jpg" },
  { n: "03", title: "Seamless Acquisition", body: "Legal, financial, and residency guidance handled with private-banking precision, from first viewing to final signature.", image: "/anawak/interior.jpg" },
  { n: "04", title: "Enduring Stewardship", body: "Management, advisory, and legacy planning that continues long after the keys are yours — across generations.", image: "/anawak/lifestyle-pool.jpg" },
];

export const services = [
  { title: "Purchase Support", body: "Support from property selection through contract, via a local entity." },
  { title: "Operations Support", body: "Assistance confirming matters related to hotel operation and rental management." },
  { title: "Financing Consultation", body: "Consultation on funding plans that leverage domestic Japanese real estate." },
  { title: "Professional Coordination", body: "Guidance on a confirmation framework involving tax accountants and lawyers." },
];

export const lifestyle = [
  { label: "Resort Living", image: "/anawak/bikini_image.webp" },
  { label: "Waterfront Calm", image: "/anawak/lifestyle-pool.jpg" },
  { label: "Elegant Interiors", image: "/anawak/interior.jpg" },
  { label: "Family Moments", image: "/anawak/terrace.jpg" },
];

export const tour = {
  badge: "Departs Every Sunday",
  title: "Walk the city before you own it.",
  desc: "Six days in Dubai — seminars, private property tours, and a taste of the life you're considering. Round-trip flights included, every Sunday.",
  facts: [
    ["Tour Price", "¥550,000 per person, tax included"],
    ["Duration", "6 Days, 5 Nights"],
    ["Departure", "Every Sunday — Narita, Haneda, or Kansai"],
    ["Airfare", "Round-trip, economy class, included"],
    ["Additional Guest", "+¥440,000 per person"],
  ] as [string, string][],
  note: "Round-trip airfare is included in the tour price — nothing more to book before you land.",
  how: ["Fly to Dubai", "Sightsee & Experience", "Tour the Real Estate", "Take the First Step"],
  days: [
    { label: "Day 1", title: "Arrival & the Desert", image: "/anawak/day1.jpg", body: "Arrive in Dubai and settle in with a half-day tour of Al Seef, the Gold Souk, and the Spice Souk. By afternoon, check into ROVE Downtown or Paramount Hotel, then head into the dunes for a 4x4 desert safari — dune bashing, belly dancing, a fire show, and a Bedouin BBQ dinner under the stars." },
    { label: "Day 2", title: "Seminar & Property Tours", image: "/anawak/day2.jpg", body: "A four-hour morning seminar covers Dubai's market, tax position, and ownership structures, lunch included. In the afternoon, tour developer showrooms and shortlisted properties with our advisors, then close the day with dinner overlooking the Dubai Fountain's illuminated show." },
    { label: "Day 3", title: "A Day at Your Own Pace", image: "/anawak/day3.jpg", body: "An open day to explore Dubai on your own terms — the view from Burj Khalifa, an afternoon at The Dubai Mall, or, for those further along, time set aside with our team to move toward a contract." },
    { label: "Day 4", title: "Marina Cruise & Departure Prep", image: "/anawak/day4.jpg", body: "Check out at midday, with the afternoon free for an optional tour or final paperwork. In the evening, a dinner cruise aboard a traditional dhow through Dubai Marina, before a late private transfer to the airport for the overnight flight home." },
    { label: "Day 5", title: "Home", image: "/anawak/day5.jpg", body: "Touch down back in Japan — at Narita, Haneda, or Kansai — six days after you left, with a clear, first-hand sense of what ownership in Dubai could mean for you." },
  ],
  included: [
    "Round-trip airfare (economy class)",
    "5 nights' hotel accommodation with breakfast",
    "Private car transfers (airport ⇄ hotel and more)",
    "Dubai seminar, lunch included",
    "Real estate tour of developer showrooms",
    "Dinner cruise aboard a Marina dhow",
    "Desert safari with BBQ dinner",
    "Japanese-speaking guide support throughout",
    "On-trip support, including contract assistance",
  ],
  excluded: [
    "Optional tours",
    "Some lunches and dinners",
    "Personal food, drink, and souvenir expenses",
    "Overseas travel insurance (optional but recommended)",
  ],
  footnote: "Flight times vary by season. The same price applies for twin or double occupancy.",
};

export const legacy = {
  title: "Secure your legacy.",
  body: "Protect wealth across generations while enjoying a world-class lifestyle today.",
  kicker: "For Generations to Come",
};

export const groupIntro = {
  title: "One group. Many extraordinary worlds.",
  desc: "ANAWAK stands within a constellation of destinations and partners that share one standard of quality.",
};

