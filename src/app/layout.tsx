import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Nami Thai Massage | Personalized Healing in North Park, San Diego",
  description:
    "Experience personalized healing at Nami Thai Massage. Specializing in traditional Thai massage blended with sports therapy techniques to relieve tension, restore balance, and promote wellness. Located in North Park, San Diego.",
  keywords: [
    "Thai massage",
    "massage therapy",
    "North Park",
    "San Diego",
    "sports massage",
    "deep tissue massage",
    "Swedish massage",
    "wellness",
    "relaxation",
  ],
  openGraph: {
    title: "Nami Thai Massage | Personalized Healing",
    description:
      "Traditional Thai massage blended with sports therapy techniques. Book your session in North Park, San Diego.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
