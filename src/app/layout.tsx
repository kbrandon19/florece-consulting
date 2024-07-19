import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Providers from "../lib/providers";
import { SpeedInsights } from "@vercel/speed-insights/next";

const poppins = Poppins({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700", "800"],
});

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
      <body className={poppins.className}>
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
