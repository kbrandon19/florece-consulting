import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Providers from "../lib/providers";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google"; 
import SmoothScroll from "@/components/SmoothScroll";

const poppins = Poppins({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700", "800"],
});


export const metadata: Metadata = {
  title: "Florece Consulting",
  description:
    "florece is a dynamic communications and advocacy consultancy with a steadfast commitment to partner with leaders who do the transformational work of justice and liberation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>

        <meta property='description' content='florece is a dynamic communications and advocacy consultancy with a steadfast commitment to partner with leaders who do the transformational work of justice and liberation.'/>
        <meta property='og:title' content='florece Consulting'/>
        <meta property='og:site_name' content='florece Consulting'/>
        <meta property='og:image' content='https://res.cloudinary.com/dujkjy2e2/image/upload/v1722490606/LinkedIn_eukyct.png'/>
        <meta property='og:description' content='florece is a dynamic communications and advocacy consultancy with a steadfast commitment to partner with leaders who do the transformational work of justice and liberation. '/>
        <meta property='og:url' content='//www.florececonsulting.com'/>
        <meta property='og:type' content='website'/>
        <meta property='og:image:width' content='1200' />
<meta property='og:image:height' content='627' />
      </head>
      <body className={poppins.className}>
        
        <Providers>
          <Header />
          <SmoothScroll>{children}</SmoothScroll>
          <GoogleAnalytics gaId="G-7YTPM3Z29P" />
          <SpeedInsights />
          <Footer />
        </Providers>
        
      </body>
    </html>
  );
}
