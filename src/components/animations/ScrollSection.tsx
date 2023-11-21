import React, { useEffect, useRef, ReactNode } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';

// Redefine the variants to include only a simple bounce animation
const sectionVariants: Variants = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 20,
      duration: 0.8,
    },
  },
  initial: {
    opacity: 0, scale: 0.95
  },
};

type ScrollSectionProps = {
  children: React.ReactNode; // Use React.ReactNode for type correctness
};

// Updated functional component with simple bounce animation
export const ScrollSection: React.FC<ScrollSectionProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }} // Set the initial state
      animate="visible"
      variants={sectionVariants}
    >
      {children}
    </motion.div>
  );
};
