// Centralized business information for NAP consistency across the site
export const businessInfo = {
  name: "Nami Thai Massage",
  address: {
    street: "3055 University Avenue",
    city: "San Diego",
    state: "CA",
    zip: "92104",
    full: "3055 University Avenue, San Diego, CA 92104",
  },
  neighborhood: "North Park",
  neighborhoods: [
    "North Park",
    "Hillcrest",
    "University Heights",
    "Normal Heights",
    "South Park",
    "Balboa Park Area",
  ],
  instagram: "naomi_nam246",
  instagramUrl: "https://www.instagram.com/naomi_nam246/",
  hours: "9am - 8pm, 7 days a week",
  hoursShort: "9am - 8pm Daily",
  bookingUrl: "https://bookme.pocketsuite.io/book/nami-thai-massage",
  siteUrl: "https://namithaimassage.com",
  geo: {
    latitude: 32.7473,
    longitude: -117.1295,
  },
} as const;

// Service page slugs for internal linking
export const servicePages = [
  { slug: "thai-massage-benefits", name: "Thai Massage" },
  { slug: "deep-tissue-massage", name: "Deep Tissue Massage" },
  { slug: "swedish-massage", name: "Swedish Massage" },
  { slug: "sports-massage", name: "Sports Massage" },
  { slug: "hot-stone-massage", name: "Hot Stone Massage" },
  { slug: "prenatal-massage", name: "Prenatal Massage" },
] as const;

// Location page slugs for internal linking
export const locationPages = [
  { slug: "massage-north-park", name: "North Park" },
  { slug: "massage-hillcrest", name: "Hillcrest" },
  { slug: "massage-university-heights", name: "University Heights" },
  { slug: "massage-normal-heights", name: "Normal Heights" },
  { slug: "massage-balboa-park", name: "Balboa Park" },
] as const;

// Audience page slugs for internal linking
export const audiencePages = [
  { slug: "massage-for-athletes", name: "Athletes" },
  { slug: "massage-for-office-workers", name: "Office Workers" },
  { slug: "massage-for-chronic-pain", name: "Chronic Pain" },
  { slug: "massage-for-stress-relief", name: "Stress Relief" },
  { slug: "massage-for-seniors", name: "Seniors" },
] as const;
