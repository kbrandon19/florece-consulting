"use client";

import React, { useState, useEffect } from "react";

interface Props {
  children: React.ReactNode;
}

const LinkColor: React.FC<Props> = ({ children }) => {
  const [header, setHeader] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        const scrollLocation = window.scrollY;
        if (scrollLocation >= 97) {
          setHeader(true);
        } else {
          setHeader(false);
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <div className={` ${header ? "bg-white border-charcoal" : "border-white"}`}>
      {children}
    </div>
  );
};

export default LinkColor;
