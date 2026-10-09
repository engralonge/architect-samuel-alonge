// Replace these placeholder image URLs with licensed Samuel Alonge / Crystal Stairs Ltd
// photography when available. These public-source placeholders are for layout only.
// Recovered from the deployed static site. Rights and identity need owner approval.
// Archive entries are not automatically published as portfolio photography.
export const legacyAssets = [
  "glory-dome-aerial.png", "glory-dome-entrance.png", "glory-dome-exterior.png",
  "instagram-post-1-DV0dnjFDAr1.jpg", "instagram-post-2-DVq14V9DCJI.jpg",
  "instagram-post-3-DV0gHzRjBvV.jpg", "instagram-post-4-DVvHDyMDKA7.jpg",
  "instagram-post-5-DVuO86SjHMp.jpg", "instagram-post-6-DVq7AynDA6q.jpg",
  "instagram-post-7-DVq6spcjJXQ.jpg", "instagram-post-8-DVq2uhjjAp2.jpg",
  "samuel-alonge-profile.jpg"
].map((filename) => ({
  src: `/legacy/assets/${filename}`,
  approved: filename.startsWith("glory-dome-"),
  description: filename === "samuel-alonge-profile.jpg"
    ? "Crystal Stairs Ltd cropped logo; not a portrait"
    : filename.startsWith("glory-dome-") ? "Dunamis Glory Dome; usage permission granted by owner"
    : "Legacy asset; TODO: confirm photography rights and image description"
}));

export const flagship = {
  title: "Dunamis Glory Dome",
  location: "Abuja, Nigeria",
  summary: "A 100,000+ seat, pillar-free sanctuary in Abuja. Its scale demands clarity around movement, structure, visibility, dignity, maintenance, and long-term value.",
  source: "Crystal Stairs Ltd public Instagram, carried over from the static site",
  role: null, // TODO: owner-approved description of Samuel's exact role.
  videoUrl: "https://www.youtube.com/watch?v=7cbPOU5sHNk"
};

export const navItems = [
  { label: "Profile", href: "/#profile" },
  { label: "Work", href: "/#work" },
  { label: "Insights", href: "/#insights" },
  { label: "Services", href: "/#services" },
  { label: "Contact", href: "/#contact" }
];

export const heroImage =
  "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=3840&q=85";

export const heroImageAlt = "Illustrative architectural study, not a Crystal Stairs project";
export const contactDetails = {
  email: "Stairways2023@gmail.com",
  phone: "+2349050000040",
  phoneDisplay: "0905 000 0040",
  whatsapp: "2349050000040",
  address: null // TODO: verified office address.
};
export const profile = {
  copy: "We bring disciplined design and meticulous construction thinking to buildings that balance presence with practical function. We help clients make clear decisions before drawings, budgets, contractors, and site pressures define the outcome.",
  brandLine: "Award-level architectural designs. Meticulous craftsmanship in construction. Timeless spaces, functional beauty.",
  portrait: "/images/portrait_Sam.png"
};

// Usage permission granted. TODO: higher-resolution originals for retina project heroes.
export const gloryDomeImages = [
  { src: "/legacy/assets/glory-dome-aerial.png", alt: "Aerial view of Dunamis Glory Dome and its gold roof", width: 721, height: 384 },
  { src: "/legacy/assets/glory-dome-entrance.png", alt: "Dunamis Glory Dome entrance with red carpet stairs", width: 723, height: 340 },
  { src: "/legacy/assets/glory-dome-exterior.png", alt: "Dunamis Glory Dome exterior with arched facade", width: 722, height: 343 }
];

// TODO: owner verification of these claims. Retain existing copy until confirmed.
export const claimsToVerify = [
  { claim: "Award-level", status: "awaiting owner verification" },
  { claim: "100,000+ seat", status: "awaiting owner verification" }
];

export const insights = [
  {
    number: "01",
    title: "Brief Intelligence",
    copy: "Translate ambition, ministry or business needs, site limits, and budget pressure into a usable architectural brief."
  },
  {
    number: "02",
    title: "Asset Value",
    copy: "Shape spaces that keep value over time through durable identity, flexible use, construction realism, and maintenance clarity."
  },
  {
    number: "03",
    title: "Human Experience",
    copy: "Study arrival, circulation, visibility, comfort, ceremony, and memory so the building works for people first."
  }
];

export const sectors = [
  {
    title: "Worship",
    copy: "Sanctuaries, auditoriums, ministry campuses, and high-capacity gathering spaces."
  },
  {
    title: "Residential",
    copy: "Private homes, luxury residences, renovations, and design direction for family estates."
  },
  {
    title: "Commercial",
    copy: "Mixed-use, office, retail, hospitality, and client-facing spaces with memorable presence."
  },
  {
    title: "Advisory",
    copy: "Second opinions, concept reviews, site decisions, and construction-phase design protection."
  }
];

export const services = [
  {
    number: "01",
    title: "Architectural Design",
    copy: "Concept design, spatial planning, facade direction, presentation visuals, and design development for distinctive buildings.",
    points: ["Design brief development", "Concept and layout options", "Visual language and facade direction"]
  },
  {
    number: "02",
    title: "Construction Advisory",
    copy: "Buildability review, material direction, site coordination, and craftsmanship oversight so details survive construction.",
    points: ["Drawing and detail review", "Contractor coordination input", "Material and finish guidance"]
  },
  {
    number: "03",
    title: "Landmark Strategy",
    copy: "Consulting for worship centers, civic projects, estates, and private developments that need a strong architectural identity.",
    points: ["Vision and feasibility sessions", "Stakeholder presentation support", "Long-term project identity"]
  }
];

export const processSteps = [
  {
    title: "Clarify the ambition",
    copy: "Define purpose, project type, site realities, budget direction, stakeholders, and the decisions that matter first."
  },
  {
    title: "Shape the concept",
    copy: "Develop the spatial idea, architectural language, and a credible path from inspiration to buildable design."
  },
  {
    title: "Coordinate the build",
    copy: "Align drawings, consultants, contractors, materials, and site decisions around the approved vision."
  },
  {
    title: "Protect the details",
    copy: "Review execution so the finished space retains its beauty, function, and intended presence."
  }
];

// TODO: approved project captions, identity and photography rights.
export const selectedVisuals = [];

export const projectCategories = ["All", "Worship", "Residential", "Commercial", "Advisory"];

export const projects = [
  {
    slug: "dunamis-glory-dome",
    title: flagship.title,
    sector: "Worship",
    category: "Worship",
    location: flagship.location,
    year: null, // TODO: approved completion year.
    client: null, // TODO: approved client attribution.
    status: null, // TODO: approved status.
    role: flagship.role,
    image: gloryDomeImages[0].src,
    images: gloryDomeImages,
    keyFacts: { capacity: "100,000+ seats", type: "Worship", floorArea: null },
    credits: [], // TODO: approved role, engineers and contractor.
    summary: flagship.summary,
    body: [] // TODO: approved narrative and specifications.
  }
];

export const people = [
  {
    name: "Architect Samuel Alonge",
    role: "Lead Architect / Consultant",
    bio: "Design leadership for homes, worship spaces, and ambitious public architecture."
  }
];

export const consultationTypes = [
  "Private residence",
  "Worship or assembly building",
  "Commercial development",
  "Interior or renovation",
  "Second opinion or advisory"
];

export const socialLinks = [
  // Replace with the confirmed Crystal Stairs Ltd Instagram URL if it changes.
  { label: "Instagram", href: "https://www.instagram.com/crystalstairs_ltd/" }
];
