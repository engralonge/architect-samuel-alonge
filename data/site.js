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
  approved: false,
  description: filename === "samuel-alonge-profile.jpg"
    ? "Crystal Stairs Ltd cropped logo; not a portrait"
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
  "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=2200&q=85";

export const gloryDomeImages = [
  {
    src: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1600&q=85",
    alt: "Placeholder aerial architectural image for Dunamis Glory Dome"
  },
  {
    src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1400&q=85",
    alt: "Placeholder monumental entrance image"
  },
  {
    src: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=1400&q=85",
    alt: "Placeholder exterior facade image"
  }
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

export const selectedVisuals = [
  {
    title: "Design Excellence",
    caption: "Modern architectural clarity and disciplined form.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85"
  },
  {
    title: "Creator-Led Practice",
    caption: "Personal accountability, vision, and craft in every project conversation.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=85"
  },
  {
    title: "Monumental Presence",
    caption: "Scale, arrival, visibility, and long-term value.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=85"
  }
];

export const projectCategories = ["All", "Worship", "Residential", "Commercial", "Advisory"];

export const projects = [
  {
    title: "Dunamis Glory Dome",
    category: "Worship",
    location: "Abuja, Nigeria",
    year: "Flagship",
    image: gloryDomeImages[0].src
  },
  {
    title: "Private Residence Concept",
    category: "Residential",
    location: "Nigeria",
    year: "Placeholder",
    image: selectedVisuals[0].image
  },
  {
    title: "Commercial Identity Study",
    category: "Commercial",
    location: "Nigeria",
    year: "Placeholder",
    image: selectedVisuals[2].image
  },
  {
    title: "Worship Campus Advisory",
    category: "Advisory",
    location: "West Africa",
    year: "Placeholder",
    image: gloryDomeImages[1].src
  },
  {
    title: "Luxury Home Design Review",
    category: "Residential",
    location: "Nigeria",
    year: "Placeholder",
    image: selectedVisuals[1].image
  },
  {
    title: "Landmark Feasibility Session",
    category: "Advisory",
    location: "Nigeria",
    year: "Placeholder",
    image: gloryDomeImages[2].src
  }
];

export const people = [
  {
    name: "Architect Samuel Alonge",
    role: "Lead Architect / Consultant",
    bio: "Design leadership for homes, worship spaces, and ambitious public architecture."
  },
  {
    name: "Crystal Stairs Studio",
    role: "Design & Advisory Team",
    bio: "Placeholder team profile for architectural design, construction thinking, and project coordination."
  },
  {
    name: "Delivery Partners",
    role: "Project Consultants",
    bio: "Placeholder profile for engineers, builders, and specialist collaborators supporting each project."
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
  { label: "Instagram", href: "https://www.instagram.com/crystalstairs_ltd/" },
  // Add LinkedIn, YouTube, or Facebook when confirmed.
  { label: "LinkedIn", href: "#" },
  { label: "YouTube", href: "#" }
];
