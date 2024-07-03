// components/Transition.tsx


import React from "react";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

export default function Transition({ children }: Props) {

  return (
    <div>

        <motion.div
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeIn", duration: 0.5, delay: 0.25 }}
        >
          {children}
        </motion.div>

    </div>
  );
}
