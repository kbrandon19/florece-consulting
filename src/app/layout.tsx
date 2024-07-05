import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Providers from "../lib/providers";
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Florece Consulting",
  description:
    "Florece Consulting offers expert communication services for progressive, women, and BIPOC organizations, including strategic communications planning, media relations, op-ed writing, crisis communication management, and DEI training. Empowering voices and driving change for over five years.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Header/> */}
        <Providers>
          {children}
          <SpeedInsights />
        </Providers>
        {/* <Footer/> */}
        </body>
    </html>
  );
}
