// ANAWAK content in English and Japanese.
// Source: the ANAWAK site (jwd/src/locales/en.json + ja.json, data/content.ts), the Japanese deck copy (CONTENT.md)
// and the Côte d'Azur reference page. Strings marked "(translated)" had no Japanese in those sources.
import { T, type Txt } from "./i18n";

export type Property = {
  slug: string;
  name: string;
  tagline: Txt;
  /** Short unit description shown on the residences list */
  unit: Txt;
  price: string;
  image: string;
  /** Text colour on the card (matches the brightness of the photo) */
  theme: "white" | "black";
  gallery: string[];
  videos: string[];
  documents: { label: Txt; href: string }[];
  specs?: { floorArea: Txt; floorPlan: Txt; bedrooms: Txt; investment: Txt; additional: Txt };
};

const g = (slug: string, n: number) => Array.from({ length: n }, (_, i) => `/properties/${slug}/${i + 1}.jpg`);

const brochure = T("Property Brochure", "物件ブローシャー");

export const properties: Property[] = [
  {
    slug: "seahorse",
    name: "SEAHORSE",
    tagline: T("Floating villas anchored above a private lagoon.", "プライベートラグーンに浮かぶ、水上の邸宅。"),
    unit: T("2 bedrooms · 3 levels", "寝室2 · 3層構造"),
    price: "$10,600,000",
    image: "/properties/seahorse/8.jpg",
    theme: "white",
    gallery: g("seahorse", 13),
    videos: ["/properties/seahorse/video-1.mp4", "/properties/seahorse/video-2.mp4"],
    documents: [
      { label: brochure, href: "/properties/seahorse/documents/seahorse-honeymoon-island-brochure.pdf" },
      { label: T("Factsheet", "ファクトシート"), href: "/properties/seahorse/documents/seahorse-factsheet.pdf" },
      { label: T("Floor Plan", "フロアプラン"), href: "/properties/seahorse/documents/seahorse-floor-plan.pdf" },
      { label: T("Location Plan", "ロケーションプラン"), href: "/properties/seahorse/documents/seahorse-st-petersburg-plan.pdf" },
    ],
    specs: {
      floorArea: T("4,004 sq ft / ≈372 m² total configured area (272 m² living area)", "総面積 372㎡　居住面積 272㎡"),
      floorPlan: T("3 levels — underwater, sea, and upper", "3層構造（水中フロア・海面フロア・上層フロア）"),
      bedrooms: T("2", "2"),
      investment: T("Both bedrooms are underwater — the villa's defining feature", "2つのベッドルームはいずれも水中階に配置 — このヴィラ最大の特徴です。"),
      additional: T(
        "Underwater level 141 m² (80 m² indoor + 61 m² coral garden) · Sea level ≈152 m² (76 m² indoor + 76 m² deck) · Upper level 79 m² (37 m² indoor + 42 m² deck)",
        "水中階：141㎡（室内 80㎡ ＋ コーラルガーデン 61㎡）\n海面階：152㎡（室内 76㎡ ＋ デッキ 76㎡）\n上層階：79㎡（室内 37㎡ ＋ デッキ 42㎡）",
      ),
    },
  },
  {
    slug: "portofino",
    name: "PORTOFINO",
    tagline: T("Mediterranean-inspired waterfront living, reimagined.", "ドバイで再解釈された、地中海風のウォーターフロントライフ。"),
    unit: T("Studio – 2 bedrooms", "スタジオ〜2ベッドルーム"),
    price: "$845,000 – $1,256,214",
    image: "/properties/portofino/1.jpg",
    theme: "black",
    gallery: g("portofino", 8),
    videos: ["/properties/portofino/video-1.mp4", "/properties/portofino/video-2.mp4"],
    documents: [{ label: brochure, href: "/properties/portofino/documents/portofino-intercontinental-brochure.pdf" }],
    specs: {
      floorArea: T("55 – 258 m²", "55 – 258 m²"),
      floorPlan: T("Studio, 1BR (Types A–D), and 2BR (Types A–B)", "スタジオ、1ベッドルーム（タイプA～D）、2ベッドルーム（タイプA～B）"),
      bedrooms: T("Studio – 2", "スタジオ – 2"),
      investment: T(
        "The broadest size range of the three Heart of Europe hotel developments",
        "Heart of Europeの3つのホテル開発の中で最も広い客室サイズを展開",
      ),
      additional: T(
        "489 sea-view suites, including rooftop villas with private plunge pools; family-oriented design with an integrated children's bedroom/playroom in the original Princess, Queen, and Royal Suites",
        "全489室のオーシャンビュー・スイート、プライベート・プランジプールを備えたルーフトップ・ヴィラを含む。\nまた、ファミリー層を意識した設計となっており、オリジナルのPrincess Suite、Queen Suite、Royal Suiteには、子ども用ベッドルームとプレイルームを一体化した専用スペースが設けられている。",
      ),
    },
  },
  {
    slug: "germany-island",
    name: "GERMANY ISLAND",
    tagline: T("A private island retreat within the World Islands archipelago.", "ザ・ワールド・アイランド群島に佇む、プライベートアイランドの隠れ家。"),
    unit: T("Lagoon Villa", "ラグーン・ヴィラ"),
    price: "$8,170,000",
    image: "/properties/germany-island/8.jpg",
    theme: "black",
    gallery: g("germany-island", 17),
    videos: [],
    documents: [
      { label: brochure, href: "/properties/germany-island/documents/germany-island-brochure.pdf" },
      { label: T("Private Guided Tour", "プライベートガイドツアー"), href: "/properties/germany-island/documents/germany-island-private-guided-tour.pdf" },
    ],
    specs: {
      floorArea: T("417 m² built-up area (plot 327 – 341 m²)", "建築面積：417㎡　敷地面積：327～341㎡"),
      floorPlan: T("Lagoon Villa — ground floor", "Lagoon Villa（ラグーン・ヴィラ）― 1階"),
      bedrooms: T("—", "—"),
      investment: T(
        "Private villa plots within the World Islands archipelago",
        "ドバイのWorld Islands（ワールド・アイランズ）内に位置する専用敷地を備えたプライベート・ヴィラ。",
      ),
      additional: T(
        "Ground floor: Kitchen 19 m² · Maid's Room 15 m² · Living & Dining 67 m² · Ground floor size 240 m²",
        "グランドフロア（１F）\nキッチン：19㎡\nメイドルーム：15㎡\nリビング＆ダイニング：67㎡\n1階面積：240㎡",
      ),
    },
  },
  {
    slug: "cote-dazur",
    name: "CÔTE D'AZUR",
    tagline: T("The glamour of the French Riviera, set on the Arabian Gulf.", "アラビア湾に再現された、フレンチリビエラの華麗な魅力。"),
    unit: T("Nice · St. Tropez", "ニース · セントロペス"),
    price: "$681,000 – $860,000",
    image: "/properties/cote-dazur/2.jpg",
    theme: "white",
    gallery: g("cote-dazur", 11),
    videos: ["/properties/cote-dazur/video-1.mp4", "/properties/cote-dazur/video-2.mp4", "/properties/cote-dazur/video-3.mp4"],
    documents: [],
  },
];

export const benefits: Txt[] = [
  T("☆Rental guarantee (4% annually for 12 years)", "☆家賃保証付き（年間4%×12年間）"),
  T("☆4 complimentary nights per year", "☆年間4泊無料宿泊権"),
  T("☆No management fees", "☆管理費無料"),
  T("☆DEWA (utilities) free", "☆DEWA(光熱費)無料"),
  T("☆No reserve fund contributions", "☆修繕積立金無料"),
  T("☆Furnished (All Bentley branded furnitures)", "☆家具付き(全てベントレー社製）"),
];

export const groupSites = [
  {
    name: "Japan Worldlink DWC",
    description: T(
      "The founding company connecting Japanese vision with the most distinguished addresses.",
      "日本の理念と、最も名高い邸宅を結ぶ、JWDグループの創業母体。", // (translated — trimmed to match the English)
    ),
    url: "https://worldlinkdwc.com/",
    image: "/anawak/group-wdwc.jpg",
  },
  {
    name: "JWD INVESTMENT",
    description: T(
      "Strategic capital and asset management behind the group's most ambitious ventures.",
      "グループの野心的な事業を支える、戦略的な資本と資産運用。",
    ),
    url: "https://jwdinvestment.com/",
    image: "/anawak/group-invest.jpg",
  },
  {
    name: "JWD Luna Travel & Tourism LLC",
    description: T("Curated travel and tourism experiences.", "厳選された旅行・観光体験。"),
    url: "https://www.dubai-trip.ae/",
    image: "/anawak/group-luna.jpg",
  },
];

export const navLinks = [
  { label: T("Residences", "レジデンス"), href: "/properties" },
  { label: T("How it works", "ご購入までの歩み"), href: "/how-it-works" },
  { label: T("Concierge", "コンシェルジュ"), href: "/concierge" }, // (translated)
  { label: T("Lifestyle", "ライフスタイル"), href: "/lifestyle" },
  { label: T("Legacy", "レガシー"), href: "/legacy" },
  { label: T("About us", "ANAWAKについて"), href: "/about" }, // (translated)
];

export const companyProfile = {
  lead: T(
    "ANAWAK is operated by a licensed real estate entity registered in Dubai, United Arab Emirates — regulated by the Dubai Land Department (DLD) and the Real Estate Regulatory Agency (RERA).",
    "ANAWAKは、アラブ首長国連邦（UAE）ドバイに登記された不動産事業者により運営されています。ドバイ土地局（DLD）および不動産規制庁（RERA）の監督のもと、事業を行っています。",
  ),
  fields: [
    { k: T("Company Name", "商号"), v: T("ANAWAK REAL ESTATE L.L.C.", "ANAWAK REAL ESTATE L.L.C.") },
    { k: T("Trade License No.", "商業ライセンス番号"), v: T("1124264", "1124264") },
    { k: T("Licensing Authority", "ライセンス発行機関"), v: T("Dubai Department of Economy and Tourism (DET)", "ドバイ経済観光庁（DET）") },
    { k: T("RERA / ORN No.", "RERA / ORN番号"), v: T("1162605", "1162605") },
    {
      k: T("Regulated By", "監督機関"),
      v: T("Dubai Land Department (DLD)\nReal Estate Regulatory Agency (RERA)", "ドバイ土地局（DLD）\n不動産規制庁（RERA）"),
    },
    { k: T("Capital", "資本金"), v: T("USD 483,500 (JPY 75,000,000)", "USD 483,500（75,000,000円）") },
    { k: T("Total Assets", "総資産額"), v: T("USD 46,500,000 (JPY 7,200,000,000)", "USD 46,500,000（7,200,000,000円）") },
    { k: T("Representative", "代表者"), v: T("Hamit Gurbuz", "ハミット・ギュルビュズ") },
    { k: T("Registered Address", "登記住所"), v: T("Office M34, AL MAMZAR BLDG, Hor Al Anz, Dubai, UAE", "Office M34, AL MAMZAR BLDG, Hor Al Anz, Dubai, UAE") },
  ],
};

export const interests: Txt[] = [
  T("Waterfront Villas / Investment Pattern A", "ウォーターフロント・ヴィラ / 投資パターンA"),
  T("Marina Residences / Investment Pattern B", "マリーナ・レジデンス / 投資パターンB"),
  T("Inspection Tour", "不動産視察ツアー"),
  T("General Consultation & Inquiries", "一般的な相談・その他のお問い合わせ"),
];

export const pillars = [
  {
    n: "01",
    title: T("Trust", "信頼"),
    body: T(
      "Professional expertise and transparent advice, built on long-term relationships and unwavering financial confidence. Guidance you can rely on across generations.",
      "長期的な関係性と確固たる財務的信頼に基づいたプロフェッショナルな専門知識と透明性の高いアドバイス。世代を超えて信頼できるガイダンスを提供します。",
    ),
    points: [
      T("Professional expertise", "プロフェッショナルな専門知識"),
      T("Transparent advice", "透明性の高いアドバイス"),
      T("Long-term relationships", "長期的な関係性の構築"),
      T("Financial confidence", "財務的な安心と信頼"),
    ],
    image: "/anawak/tower.jpg",
  },
  {
    n: "02",
    title: T("Lifestyle", "ライフスタイル"),
    body: T(
      "Beautiful architecture, world-class amenities, and healthy living. Family happiness within a truly global community, on some of the world's most serene waterfronts.",
      "美しい建築、世界クラスのアメニティ、健康的な暮らし。世界で最も穏やかなウォーターフロントで真のグローバルコミュニティに囲まれた家族の幸せを育みます。",
    ),
    points: [
      T("Beautiful architecture", "洗練された美しい建築"),
      T("World-class amenities", "世界水準のアメニティ"),
      T("Family happiness", "家族が輝く幸せな時間"),
      T("Global community", "国際的なコミュニティ"),
    ],
    image: "/anawak/bikini_image.webp",
  },
  {
    n: "03",
    title: T("Legacy", "レガシー"),
    body: T(
      "Wealth preservation for future generations through international diversification and timeless value. Assets chosen not for a season, but for a century.",
      "国際的な分散投資と時代を超越した価値による、次世代への資産継承。一時の流行ではなく、100年先を見据えて選び抜かれた資産です。",
    ),
    points: [
      T("Wealth preservation", "確実な資産保全"),
      T("Future generations", "次世代への継承"),
      T("International diversification", "グローバルな分散投資"),
      T("Timeless value", "時代を超越する価値"),
    ],
    image: "/anawak/pillar-legacy.jpg",
  },
];

export const journey = [
  {
    n: "01",
    title: T("Private Consultation", "プライベート相談"),
    body: T(
      "An unhurried conversation — in English or Japanese — to understand your family, your goals, and the life you envision.",
      "ご家族のこと、目標、そして思い描く人生を理解するために、英語または日本語でじっくりとお話を伺います。",
    ),
    image: "/anawak/terrace.jpg",
  },
  {
    n: "02",
    title: T("Curated Selection", "厳選されたセレクション"),
    body: T(
      "A shortlist of residences chosen for architecture, waterfront, and enduring value. Never a catalogue — always a curation.",
      "建築、ウォーターフロントの立地、そして永続的な価値に基づいて選定されたレジデンスの候補リスト。単なるカタログではなく、常にお客様のために厳選されます。",
    ),
    image: "/properties/seahorse/8.jpg",
  },
  {
    n: "03",
    title: T("Seamless Acquisition", "シームレスな取得手続き"),
    body: T(
      "Legal, financial, and residency guidance handled with private-banking precision, from first viewing to final signature.",
      "最初の内覧から最終的な署名まで、プライベートバンキング並みの正確さで法務、財務、居住権取得のガイダンスをサポートします。",
    ),
    image: "/anawak/interior.jpg",
  },
  {
    n: "04",
    title: T("Enduring Stewardship", "永続的な管理・サポート"),
    body: T(
      "Management, advisory, and legacy planning that continues long after the keys are yours — across generations.",
      "鍵をお渡しした後も、世代を超えて末永く続く管理、アドバイザリー、およびレガシープランニングを提供します。",
    ),
    image: "/anawak/lifestyle-pool.jpg",
  },
];

// Support pillars from the Japanese deck (CONTENT.md §12)
export const services = [
  { title: T("Purchase Support", "購入支援"), body: T("Support from property selection through contract, via a local entity.", "現地法人として物件選定から契約までサポート") },
  { title: T("Operations Support", "運用支援"), body: T("Assistance confirming matters related to hotel operation and rental management.", "ホテル運営・賃貸運用に関する確認を支援") },
  { title: T("Financing Consultation", "融資相談"), body: T("Consultation on funding plans that leverage domestic Japanese real estate.", "日本国内不動産を活用した資金計画を相談") },
  { title: T("Professional Coordination", "専門家連携"), body: T("Guidance on a confirmation framework involving tax accountants and lawyers.", "税理士・弁護士との確認体制を案内") },
];

export const lifestyle = [
  { label: T("Resort Living", "リゾートリビング"), image: "/anawak/bikini_image.webp" },
  { label: T("Waterfront Calm", "穏やかな水辺"), image: "/anawak/lifestyle-pool.jpg" },
  { label: T("Elegant Interiors", "エレガントなインテリア"), image: "/anawak/interior.jpg" },
  { label: T("Family Moments", "家族の大切な瞬間"), image: "/anawak/terrace.jpg" },
];

export const tour = {
  badge: T("Departs Every Sunday", "毎週日曜日発"),
  title: T("Walk the city before you own it.", "所有する前に、街を歩く。"),
  desc: T(
    "Six days in Dubai — seminars, private property tours, and a taste of the life you're considering. Round-trip flights included, every Sunday.",
    "6日間のドバイ滞在で、セミナーと専用車での物件視察、これから始まる暮らしを体感する。往復航空券込み、毎週日曜日出発。",
  ),
  facts: [
    { k: T("Tour Price", "ツアー代金"), v: T("¥550,000 per person, tax included", "550,000円 お一人様・税込") },
    { k: T("Duration", "旅程"), v: T("6 Days, 5 Nights", "5泊6日") },
    { k: T("Departure", "出発"), v: T("Every Sunday — Narita, Haneda, or Kansai", "毎週日曜日発（成田・羽田・関西）") },
    { k: T("Airfare", "航空券"), v: T("Round-trip, economy class, included", "往復エコノミークラス、料金に含む") },
    { k: T("Additional Guest", "1名追加ごと"), v: T("+¥440,000 per person", "440,000円追加（税込）") },
  ],
  note: T(
    "Round-trip airfare is included in the tour price — nothing more to book before you land.",
    "飛行機代金もツアー代金に含まれます — 現地までの手配は一切不要です。",
  ),
  how: [
    T("Fly to Dubai", "飛行機でドバイへ"),
    T("Sightsee & Experience", "観光＆体験"),
    T("Tour the Real Estate", "不動産を視察"),
    T("Take the First Step", "投資への第一歩"),
  ],
  days: [
    {
      label: T("Day 1", "1日目"),
      title: T("Arrival & the Desert", "到着とデザートサファリ"),
      image: "/anawak/day1.jpg",
      body: T(
        "Arrive in Dubai and settle in with a half-day tour of Al Seef, the Gold Souk, and the Spice Souk. By afternoon, check into ROVE Downtown or Paramount Hotel, then head into the dunes for a 4x4 desert safari — dune bashing, belly dancing, a fire show, and a Bedouin BBQ dinner under the stars.",
        "ドバイに到着後、アル・シーフ、ゴールド・スーク、スパイス・スークを巡る半日観光へ。午後は【ROVE Downtown Hotel】または【Paramount Hotel】にチェックインし、夕方から砂漠へ。4WDでのデューンバッシングやベリーダンス、ファイヤーショーを楽しみながら、満天の星の下でベドウィン式BBQディナーをお楽しみください。",
      ),
    },
    {
      label: T("Day 2", "2日目"),
      title: T("Seminar & Property Tours", "セミナーと物件視察"),
      image: "/anawak/day2.jpg",
      body: T(
        "A four-hour morning seminar covers Dubai's market, tax position, and ownership structures, lunch included. In the afternoon, tour developer showrooms and shortlisted properties with our advisors, then close the day with dinner overlooking the Dubai Fountain's illuminated show.",
        "午前中は4時間のセミナーでドバイの市場動向・税制・所有形態についてご説明し、ランチも含みます。午後はデベロッパーのショールームや候補物件をアドバイザーとともに視察。夜はドバイ・ファウンテンのイルミネーションショーを望むディナーで一日を締めくくります。",
      ),
    },
    {
      label: T("Day 3", "3日目"),
      title: T("A Day at Your Own Pace", "自由な一日"),
      image: "/anawak/day3.jpg",
      body: T(
        "An open day to explore Dubai on your own terms — the view from Burj Khalifa, an afternoon at The Dubai Mall, or, for those further along, time set aside with our team to move toward a contract.",
        "終日フリータイム。ブルジュ・ハリファの展望台やドバイモールでのお買い物のほか、ご検討が進んでいる方にはスタッフとの契約に向けたお時間もご用意しています。",
      ),
    },
    {
      label: T("Day 4", "4日目"),
      title: T("Marina Cruise & Departure Prep", "マリーナクルーズと帰国準備"),
      image: "/anawak/day4.jpg",
      body: T(
        "Check out at midday, with the afternoon free for an optional tour or final paperwork. In the evening, a dinner cruise aboard a traditional dhow through Dubai Marina, before a late private transfer to the airport for the overnight flight home.",
        "正午にチェックアウト。午後はオプショナルツアーや最終的な書類手続きにお使いいただけます。夜はドバイ・マリーナを進む伝統的なダウ船でのディナークルーズへ。その後、深夜に専用車で空港へ向かい、帰国便にご搭乗いただきます。",
      ),
    },
    {
      label: T("Day 5", "5日目"),
      title: T("Home", "帰国"),
      image: "/anawak/day5.jpg",
      body: T(
        "Touch down back in Japan — at Narita, Haneda, or Kansai — six days after you left, with a clear, first-hand sense of what ownership in Dubai could mean for you.",
        "出発から6日後、成田・羽田・関西の各空港へ帰国。ドバイでの資産所有という選択肢を、確かな実感とともにお持ち帰りいただけます。",
      ),
    },
  ],
  included: [
    T("Round-trip airfare (economy class)", "往復航空券（エコノミークラス）"),
    T("5 nights' hotel accommodation with breakfast", "ホテル宿泊5泊（朝食付き）"),
    T("Private car transfers (airport ⇄ hotel and more)", "専用車送迎（空港⇔ホテル間ほか）"),
    T("Dubai seminar, lunch included", "ドバイセミナー（ランチ込み）"),
    T("Real estate tour of developer showrooms", "デベロッパーショールームでの不動産視察"),
    T("Dinner cruise aboard a Marina dhow", "マリーナ・ダウ船でのディナークルーズ"),
    T("Desert safari with BBQ dinner", "BBQディナー付きデザートサファリ"),
    T("Japanese-speaking guide support throughout", "日本語ガイドによる終日サポート"),
    T("On-trip support, including contract assistance", "契約サポートを含む、旅程中のサポート"),
  ],
  excluded: [
    T("Optional tours", "オプショナルツアー代"),
    T("Some lunches and dinners", "一部のランチ・ディナー代"),
    T("Personal food, drink, and souvenir expenses", "個人的な飲食代・お土産代"),
    T("Overseas travel insurance (optional but recommended)", "海外旅行保険（任意）"),
  ],
  footnote: T(
    "Flight times vary by season. The same price applies for twin or double occupancy.",
    "フライトスケジュールは季節により変動する場合があります。2名1室をご希望の場合も同一料金となります。",
  ),
};

/** Côte d'Azur is made up of two hotels — Nice and St. Tropez. Figures are from the ANAWAK reference page (Japanese). */
export const coteDazur = {
  label: T("Boutique Hotel Residence", "BOUTIQUE HOTEL RESIDENCE"),
  brand: "IHG Hotels & Resorts",
  description: T(
    "A hotel with the atmosphere of the south of France. ANAWAK handles 5 rooms in this hotel, with owner benefits such as a 12-year owner benefit and 14 free nights a year.",
    "南仏の雰囲気を纏うホテル。ANAWAK はこのホテル内の 5部屋を取り扱います。12年間のオーナー優待、年14日間の無料滞在など、オーナーならではの特典が付帯します。",
  ),
  price: "$681,000 – $860,000",
  units: T("5 rooms / Furnished", "5部屋 / 家具付き"),
  benefit: T("12-year rental guarantee (4% annually)", "12年間家賃保証（年間4%）"),
  types: [
    ["Type 1", "$681,000"],
    ["Type 2", "$681,000"],
    ["Type 3", "$739,000"],
    ["Type 4", "$817,000"],
    ["Type 5", "$860,000"],
  ] as [string, string][],
  hotels: [
    {
      slug: "nice",
      name: T("NICE", "ニース"),
      hotel: T("VOCO Dubai Nice Heart of Europe", "VOCOドバイ・ニース・ハート・オブ・ヨーロッパ"),
      image: "/properties/cote-dazur/2.jpg",
    },
    {
      slug: "st-tropez",
      name: T("ST. TROPEZ", "セントロペス"),
      hotel: T("VOCO Dubai St. Tropez Heart of Europe", "VOCOドバイ・セントロペス・ハート・オブ・ヨーロッパ"),
      image: "/properties/cote-dazur/9.jpg",
    },
  ],
  offerImage: "/properties/cote-dazur/7.jpg",
};
