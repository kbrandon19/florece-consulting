// import React from "react";
// import { motion } from "framer-motion";

// interface Props {
//   children: React.ReactNode;
// }

// export default function Transition({ children }: Props) {

//   return (
//     <div>

//         <motion.div
//           initial={{ opacity: 0, }}
//           animate={{ opacity: 1, }}
//           transition={{ ease: "easeIn", duration: 0.75, }}
//         >
//           {children}
//         </motion.div>

//     </div>
//   );
// }

"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

const Transition: React.FC<Props> = ({ children }) => {
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
    <div>
      <header
        className={`w-full h-auto fixed top-0 z-10 transition-colors duration-300 ${
          header ? "bg-seaSalt text-charcoal" : "bg-transparent"
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeIn", duration: 0.75 }}
        >
          {children}
        </motion.div>
      </header>
    </div>
  );
};

export default Transition;
