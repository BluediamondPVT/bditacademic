import type { Metadata } from "next";
// Premium Font for Education & Modern UI
import { Plus_Jakarta_Sans, Poppins } from "next/font/google"; 
import "./globals.css";
import { Navbar } from "@/components/shared/Navbar";
// import { SmoothScroll } from "@/components/sections/SmoothScroll";
import dynamic from "next/dynamic";

const Footer = dynamic(() => import("@/components/shared/Footer").then((mod) => mod.Footer), {
  loading: () => <div className="min-h-[400px] bg-[#222222] w-full" />,
});

// Font setup
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
  variable: "--font-jakarta",
});



const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
  variable: "--font-poppins", // Unique variable for poppins
});


export const metadata: Metadata = {
  metadataBase: new URL("https://bditacademic.vercel.app/"),
  title: "BDIT Academic | Premium Education & Online Degrees",
  description: "Upgrade your qualification with UGC Recognised, flexible and affordable online degrees (MBA, MCA, BBA, BCA, M.Com, B.Com, MA, BA) from top-ranked universities at BDIT Academic.",
  keywords: [
    "Online Degree", 
    "UGC Recognised", 
    "MBA", 
    "MCA", 
    "UG Programs", 
    "PG Programs", 
    "BBA", 
    "BCA", 
    "M.Com", 
    "B.Com", 
    "Distance Learning", 
    "BDIT Academic", 
    "Premium Education"
  ],
  openGraph: {
    title: "BDIT Academic | Premium Education & Online Degrees",
    description: "Upgrade your qualification with UGC Recognised, flexible and affordable online degrees from top-ranked universities at BDIT Academic.",
    url: "https://bditacademic.vercel.app/",
    siteName: "BDIT Academic",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BDIT Academic - Premium Education & Online Degrees",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BDIT Academic | Premium Education & Online Degrees",
    description: "Upgrade your qualification with UGC Recognised, flexible and affordable online degrees from top-ranked universities.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: '/fav.png' },
      { url: '/fav.png', type: 'image/png', sizes: '32x32' },
      { url: '/fav.png', type: 'image/png', sizes: '192x192' },
    ],
    apple: [
      { url: '/fav.png' },
      { url: '/fav.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: ['/fav.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        {/* <SmoothScroll> */}
          <Navbar />
          {/* Yahan se pt-24 hata diya hai taaki image top se shuru ho */}
          <main className="flex-1"> 
            {children}
          </main>
          <Footer />
        {/* </SmoothScroll> */}
      </body>
    </html>
  );
}