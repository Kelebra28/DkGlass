import "./globals.css";
import { Cinzel } from "next/font/google";
import { Metadata } from "next";
import OGMetaTags from "./components/common/metaData";

const inter = Cinzel({ subsets: ["latin"], weight: "400" });

export const metadata =  {
  metadataBase: new URL("https://www.dkglassvelasco.com"),
  title: "Dk Glass & Velasco",
  description: "What you imagine in glass",
  image: "/favicon.png",
  // icons: {
  //   icon: '',
  // },
  generator: "Next.js",
  applicationName: "Shower Patio Door Glass Mirrors Houston Texas",
  referrer: "origin-when-cross-origin",
  keywords: [
    "glass Houston",
    "baños de vidrio",
    "glass Shower",
    "shower glass",
    "texas Glass",
    "patio Doors houston",
    "puertas de vidrio houston",
    "empresas de vidrio Houston",
    "empresas de vidrio Texas",
    "glass company houston",
    "glass company Texas",
    "vidrios y espejos",
    "mirrors",
    "fabricas de vidrio en houston",
    "Railing stairs",
    "Storefront",
    "Impact Storefront",
    "Office Partition",
    "Tempered glass",
    "velasco",
    "Huston glass",
    "huston glass",
    "Hustom",
    "hustom",
    "templered glass us",
    "dk glass",
    "velasco glass",
    "glass velasco",
    "dk glass",
    "glass dk",
    "dk velasco",
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
      url: '/favicon.png',
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
