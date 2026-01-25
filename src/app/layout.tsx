import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ChatButton from "@/components/ChatButton/ChatButton";

const siteUrl = "https://namithaimassage.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Thai Massage San Diego | Nami Thai Massage North Park",
    template: "%s | Nami Thai Massage",
  },
  description:
    "Expert Thai massage in North Park, San Diego. Personalized sessions blending traditional Thai techniques with sports therapy for pain relief, relaxation & athletic recovery. Book today.",
  keywords: [
    "Thai massage San Diego",
    "massage therapy North Park",
    "deep tissue massage San Diego",
    "sports massage San Diego",
    "Swedish massage North Park",
    "best massage therapist San Diego",
    "chronic pain massage therapy",
    "relaxation massage San Diego",
    "massage near me",
    "licensed massage therapist",
  ],
  authors: [{ name: "Nami Thai Massage" }],
  creator: "Nami Thai Massage",
  publisher: "Nami Thai Massage",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Thai Massage San Diego | Nami Thai Massage North Park",
    description:
      "Expert Thai massage blending traditional techniques with sports therapy. Personalized healing sessions in North Park, San Diego. Book your appointment today.",
    url: siteUrl,
    siteName: "Nami Thai Massage",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/nami-portrait.png",
        width: 1200,
        height: 630,
        alt: "Nami Thai Massage - Licensed Massage Therapist in North Park, San Diego",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thai Massage San Diego | Nami Thai Massage North Park",
    description:
      "Expert Thai massage blending traditional techniques with sports therapy. Book your personalized healing session in North Park, San Diego.",
    images: ["/images/nami-portrait.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "Health & Wellness",
};

// LocalBusiness + WebSite structured data
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#business`,
      name: "Nami Thai Massage",
      description:
        "Expert Thai massage therapist in North Park, San Diego. Personalized sessions blending traditional Thai massage techniques with modern sports therapy for pain relief, relaxation, and athletic recovery.",
      url: siteUrl,
      telephone: "",
      email: "",
      image: `${siteUrl}/images/nami-portrait.png`,
      logo: `${siteUrl}/logo.png`,
      priceRange: "$$",
      currenciesAccepted: "USD",
      paymentAccepted: "Cash, Credit Card",
      address: {
        "@type": "PostalAddress",
        addressLocality: "San Diego",
        addressRegion: "CA",
        addressCountry: "US",
        neighborhood: "North Park",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 32.7473,
        longitude: -117.1295,
      },
      areaServed: [
        {
          "@type": "City",
          name: "San Diego",
          sameAs: "https://en.wikipedia.org/wiki/San_Diego",
        },
        {
          "@type": "Neighborhood",
          name: "North Park",
        },
      ],
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "09:00",
        closes: "20:00",
      },
      sameAs: [],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Massage Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Thai Style Massage",
              description:
                "60 min Signature Massage + 15 min Head Massage + 15 min Traditional Thai Stretch",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Deep Tissue Massage",
              description:
                "Intense pressure targeting deep muscle layers for chronic tension relief",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Sports Massage",
              description:
                "Specialized massage for athletic performance and injury recovery",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Swedish Massage",
              description:
                "Classic relaxation massage to soothe muscles and revitalize the body",
            },
          },
        ],
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "50",
        bestRating: "5",
        worstRating: "1",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Nami Thai Massage",
      description:
        "Thai massage and therapeutic bodywork in North Park, San Diego",
      publisher: {
        "@id": `${siteUrl}/#business`,
      },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${siteUrl}/services?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <ChatButton />
      </body>
    </html>
  );
}
