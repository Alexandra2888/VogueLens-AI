'use client';

import { motion } from 'motion/react';

const MinimalLogo = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      <motion.div
        className="relative flex h-7 w-7 items-center justify-center"
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 400, damping: 15 }}
      >
        <div className="bg-brand-red absolute inset-0 rounded-lg" />
        <svg viewBox="0 0 24 24" className="relative z-10 h-4 w-4" fill="none">
          <path
            d="M5 6L12 18L19 6"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>

      <div className="text-sm font-bold tracking-tight">
        <span className="text-foreground">VL</span>
        <span className="text-brand-teal ml-0.5 text-[10px] font-semibold tracking-wider uppercase">
          AI
        </span>
      </div>
    </div>
  );
};
export default MinimalLogo;
