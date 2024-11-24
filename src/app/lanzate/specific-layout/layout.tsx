import React from "react";
import Header from "../../../components/Header/Header-min";
import { GoogleAnalytics } from "@next/third-parties/google"; 

const SpecificLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <main>{children}
      <GoogleAnalytics gaId="G-7YTPM3Z29P" />
      </main>
    </div>
  );
};

export default SpecificLayout;
