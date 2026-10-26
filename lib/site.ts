// Site-wide settings. Fill in the placeholders below when the details are ready.

export const site = {
  name: "SAMOTECH Services Inc.",
  tagline: "Experience. Vision. Impact.",
  title: "SAMOTECH Services Inc. | IT Governance, Transformation & AI Advisory",
  description:
    "SAMOTECH Services Inc. provides IT portfolio governance, digital transformation, and AI advisory led by a 25-year Government of Canada IM/IT executive.",

  // Path to the logo inside /public (e.g. "/logo.png"). Leave null to show an empty slot.
  logoSrc: null as string | null,
  // Path to the founder portrait inside /public (e.g. "/founder.jpg"). Leave null for the placeholder.
  founderPhotoSrc: null as string | null,

  contact: {
    email: "[EMAIL]",
    phone: "[PHONE]",
    location: "[CITY, PROVINCE]",
    linkedin: "[LINKEDIN URL]",
  },
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];
