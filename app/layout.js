import "./globals.css";
import { Cinzel } from "next/font/google";
import OGMetaTags from "./components/common/metaData";

const inter = Cinzel({ subsets: ["latin"], weight: "400" });

export const metadata = {
  metadataBase: new URL("https://www.dkglassvelasco.com"),
  title: "Dk Glass & Velasco",
  description: "What you imagine in glass",
  image: "https://dk-glass.vercel.app/logo-full.svg",
  generator: "Next.js",
  applicationName: "DK Glass & Velasco",
  referrer: "origin-when-cross-origin",
  keywords: [
    "dk glass",
    "velasco",
    "velasco glass",
    "glass",
    "dk glass & velasco",
    "Residencial",
    "Patio Door",
    "Patio Enclosure",
    "Shower Glass Door",
    "Sliding Glass Door",
    "Mirrors",
    "Railing stairs",
    "Storefront",
    "Impact Storefront",
    "Office Partition",
    "Tempered glass",
    "velasco",
    "Huston",
    "Hustom",
    "hustom",
  ],
  authors: [
    { name: "Ricardo Basurto" },
    { name: "RPM Code", url: "https://www.rpmspeedcode.com/" },
  ],
  creator: "Ricardo Basurto",
  publisher: "DK Glass & Velasco",
  category: "glass",
  images: [
    {
      url: '/favicon.ico',
      width: 200, 
      height: 200,
      alt: 'Dk Glass & Velasco',
    },
  ],
  openGraph: {
    images: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <OGMetaTags />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
