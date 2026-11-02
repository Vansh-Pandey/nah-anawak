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
  specs: { floorArea: string; floorPlan: string; bedrooms: string; investment: string; additional: string };
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
    price: "$610,000 – $1,220,000",
    image: "/properties/cote-dazur/2.jpg",
    theme: "white",
    gallery: g("cote-dazur", 11),
    videos: ["/properties/cote-dazur/video-1.mp4", "/properties/cote-dazur/video-2.mp4", "/properties/cote-dazur/video-3.mp4"],
    documents: [],
    specs: {
      floorArea: "38 – 172 m²",
      floorPlan: "Studio, Standard Room / 1BR, and End Suite / 2BR",
      bedrooms: "Studio – 2",
      investment:
        "Four hotel concepts — Monaco, Nice, Cannes, and St. Tropez — sharing one resort/beach environment; unit layouts vary by concept",
      additional: "Standard studios 38–45 m² · 1BR 73–172 m² · End Suite 2BR 142–144 m²",
    },
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
  { label: "Lifestyle", href: "/#standard" },
  { label: "Legacy", href: "/#journey" },
  { label: "JWD Group", href: "/#jwd" },
  { label: "Company Profile", href: "/company-profile" },
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
