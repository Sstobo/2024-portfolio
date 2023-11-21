import React, { useEffect, useRef, ReactNode } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';

// Redefine the variants to include only a simple bounce animation
const sectionVariants: Variants = {
  visible: {
    opacity: 1,
    translateX:0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 20,
      duration: 0.3,
    },
  },
  initial: {
    scale: 1,
    opacity: 0,
    translateX: -100,
  },
};

type ScrollSectionProps = {
  children: React.ReactNode; // Use React.ReactNode for type correctness
};

// Updated functional component with simple bounce animation
export const ScrollSection: React.FC<ScrollSectionProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0,  translateX: -100 }} // Set the initial state
      animate="visible"
      variants={sectionVariants}
    >
      {children}
    </motion.div>
  );
};
