import aerialPlots from "@/assets/project-aerial-plots.jpg";
import avenueRoads from "@/assets/project-avenue-roads.jpg";
import gatedEntrance from "@/assets/project-gated-entrance.jpg";
import heroAerial from "@/assets/hero-aerial-layout.jpg";
import residence from "@/assets/project-residence.jpg";

export type ProjectStatus = "Plots Available" | "Ready to Register" | "Ready to Move";

export type Project = {
  slug: string;
  name: string;
  locality: string;
  area: string;
  type: "Residential Plots" | "Residential";
  status: ProjectStatus;
  price: string;
  landArea?: string;
  units?: string;
  plotSizes?: string;
  summary: string;
  description: string;
  highlights: string[];
  amenities: string[];
  nearby: { place: string; distance: string }[];
  mapQuery: string;
  images: string[];
};

const commonAmenities = [
  "Black-top internal roads",
  "Underground drainage",
  "Street lights",
  "Water & electricity connections",
  "Avenue plantation",
  "Compound wall & gated entry",
];

export const PROJECTS: Project[] = [
  {
    slug: "janasena-maruthi-enclave",
    name: "Janasena Maruthi Enclave",
    locality: "Devanahalli",
    area: "North Bengaluru",
    type: "Residential Plots",
    status: "Ready to Register",
    price: "₹19.8 L – ₹39.6 L",
    landArea: "4 Acres",
    units: "126 Plots",
    plotSizes: "1,200 – 2,400 sq.ft",
    summary: "126 residential plots across 4 acres in Devanahalli, ready for registration.",
    description:
      "Janasena Maruthi Enclave is a plotted residential layout in Devanahalli, the fastest-growing airport corridor of North Bengaluru. Spread across 4 acres with 126 plots from 1,200 to 2,400 sq.ft, it offers ready-to-register plots for families who want to build their own home close to Kempegowda International Airport.",
    highlights: ["126 plots on 4 acres", "Plot sizes 1,200 – 2,400 sq.ft", "Ready to register", "Bank loan assistance"],
    amenities: commonAmenities,
    nearby: [
      { place: "Kempegowda International Airport", distance: "≈ 10 km" },
      { place: "Devanahalli Town", distance: "≈ 3 km" },
      { place: "NH 44 (Bellary Road)", distance: "≈ 4 km" },
      { place: "Yelahanka", distance: "≈ 22 km" },
    ],
    mapQuery: "Devanahalli, Bengaluru, Karnataka",
    images: [aerialPlots, avenueRoads, gatedEntrance],
  },
  {
    slug: "janasena-siri-enclave",
    name: "Janasena Siri Enclave",
    locality: "Rajanukunte Main Road",
    area: "Yelahanka – Doddaballapur Road",
    type: "Residential Plots",
    status: "Plots Available",
    price: "Price on request",
    landArea: "2.5 Acres",
    units: "63 Plots",
    summary: "63 plots across 2.5 acres right on Rajanukunte Main Road.",
    description:
      "Janasena Siri Enclave is located on Rajanukunte Main Road off the Yelahanka – Doddaballapur Road (SH-9). The 2.5-acre layout has 63 well-planned plots surrounded by established schools, engineering colleges and the Yelahanka retail hub, making it ideal both for building a home and for long-term investment.",
    highlights: ["63 plots on 2.5 acres", "Main road frontage", "Close to Yelahanka", "End-to-end registration support"],
    amenities: commonAmenities,
    nearby: [
      { place: "Yelahanka New Town", distance: "≈ 12 km" },
      { place: "BMS Institute of Technology", distance: "≈ 7 km" },
      { place: "Kempegowda International Airport", distance: "≈ 25 km" },
      { place: "Rajanukunte Railway Station", distance: "≈ 3 km" },
    ],
    mapQuery: "Rajanukunte, Bengaluru, Karnataka 560064",
    images: [avenueRoads, gatedEntrance, aerialPlots],
  },
  {
    slug: "janasena-sri-sai-urvi-enclave",
    name: "Janasena Sri Sai Urvi Enclave",
    locality: "Rajanukunte",
    area: "North Bengaluru",
    type: "Residential Plots",
    status: "Plots Available",
    price: "Price on request",
    summary: "A peaceful plotted community in Rajanukunte with quick access to Yelahanka.",
    description:
      "Janasena Sri Sai Urvi Enclave is a residential plotted development in Rajanukunte, North Bengaluru (PIN 560119). It combines a calm, green setting with fast access to Yelahanka, Doddaballapur Road and the airport via the STRR, and is backed by Janasena's hassle-free purchase and registration assistance.",
    highlights: ["Green, peaceful surroundings", "Near Doddaballapur Road (SH-9)", "Clear titles & documentation", "Site visits on request"],
    amenities: commonAmenities,
    nearby: [
      { place: "Doddaballapur Road (SH-9)", distance: "≈ 2 km" },
      { place: "Yelahanka New Town", distance: "≈ 13 km" },
      { place: "Nitte Meenakshi Institute of Technology", distance: "≈ 9 km" },
      { place: "Kempegowda International Airport", distance: "≈ 26 km" },
    ],
    mapQuery: "13.16941,77.55575",
    images: [gatedEntrance, avenueRoads, heroAerial],
  },
  {
    slug: "bhumika-north-city",
    name: "Bhumika North City",
    locality: "Near KIA Trumpet Flyover",
    area: "Airport Road, North Bengaluru",
    type: "Residential Plots",
    status: "Plots Available",
    price: "Price on request",
    summary: "Strategically located just 2 km from the airport trumpet flyover.",
    description:
      "Bhumika North City, presented by Janasena Properties, is strategically located just 2 km from the trumpet flyover of Kempegowda International Airport. Its location in the airport growth corridor makes it one of the most promising plotted investments in North Bengaluru.",
    highlights: ["2 km from KIA trumpet flyover", "Airport growth corridor", "Ideal for investment", "Loan assistance available"],
    amenities: commonAmenities,
    nearby: [
      { place: "KIA Trumpet Flyover", distance: "≈ 2 km" },
      { place: "Kempegowda International Airport", distance: "≈ 6 km" },
      { place: "Devanahalli", distance: "≈ 8 km" },
      { place: "Hebbal Flyover", distance: "≈ 28 km" },
    ],
    mapQuery: "Trumpet Flyover, Kempegowda International Airport Road, Bengaluru",
    images: [heroAerial, aerialPlots, avenueRoads],
  },
  {
    slug: "janasena-sri-durga-elite",
    name: "Janasena Sri Durga Elite",
    locality: "Kodigehalli",
    area: "Bengaluru",
    type: "Residential",
    status: "Ready to Move",
    price: "Price on request",
    summary: "An affordable, ready-to-move residential project in Kodigehalli off NH 44.",
    description:
      "Janasena Sri Durga Elite is an affordable, ready-to-move residential project in Kodigehalli, well connected by major roads including NH 44. It offers quick access to Hebbal, Manyata Tech Park and the airport road, with schools, hospitals and daily needs close by.",
    highlights: ["Ready to move", "Well connected via NH 44", "Close to Hebbal & Manyata", "Affordable pricing"],
    amenities: ["Covered parking", "Power backup", "24×7 water supply", "Lift", "Security", "Close to daily needs"],
    nearby: [
      { place: "NH 44 (Bellary Road)", distance: "≈ 1 km" },
      { place: "Hebbal Flyover", distance: "≈ 5 km" },
      { place: "Manyata Tech Park", distance: "≈ 6 km" },
      { place: "Kempegowda International Airport", distance: "≈ 28 km" },
    ],
    mapQuery: "Kodigehalli, Bengaluru, Karnataka",
    images: [residence, gatedEntrance, avenueRoads],
  },
];

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}

export const PROJECT_STATUSES: ProjectStatus[] = ["Plots Available", "Ready to Register", "Ready to Move"];

export const MAX_COMPARE = 3;

/** Toggles a project in the compare list, never exceeding MAX_COMPARE entries. */
export function toggleCompare(list: string[], slug: string): string[] {
  if (list.includes(slug)) return list.filter((s) => s !== slug);
  if (list.length >= MAX_COMPARE) return list;
  return [...list, slug];
}
