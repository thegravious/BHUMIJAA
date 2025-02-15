import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';


export const metadata = {
  title: "Bhumijaa",
  description: `Inspired by Maa Sita, our plant store brings nature’s purity to your home. We offer a carefully curated selection of plants that embody resilience, beauty, and serenity—just as she did. Explore our collection and nurture life with every leaf.`

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}<Analytics/></body>
    </html>
  );
}
