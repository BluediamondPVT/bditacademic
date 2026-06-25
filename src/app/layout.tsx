import type { Metadata } from "next";
// Premium Font for Education & Modern UI
import { Plus_Jakarta_Sans, Poppins } from "next/font/google"; 
import "./globals.css";
import { Navbar } from "@/components/shared/Navbar";
import { SmoothScroll } from "@/components/sections/SmoothScroll"
import { Footer } from "@/components/shared/Footer";

// Font setup
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});



const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins", // Unique variable for poppins
});


export const metadata: Metadata = {
  title: "BDIT Academic | Premium Education",
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
  description: "BDIT Academic is a platform for students and faculty to access academic resources, manage coursework, and collaborate on projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <SmoothScroll>
          <Navbar />
          {/* Yahan se pt-24 hata diya hai taaki image top se shuru ho */}
          <main className="flex-1"> 
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}