import { SignInButton } from '@clerk/nextjs';
import { motion } from 'motion/react';

const StyledSignInButton = ({ isMobile = false }) => {
  return (
    <SignInButton mode="modal">
      <motion.button
        className="bg-brand-red shadow-brand-red/20 hover:bg-brand-red-dark hover:shadow-brand-red/30 rounded-xl px-5 py-2 text-sm font-medium text-white shadow-sm transition-all hover:shadow-md"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {isMobile ? 'Sign In' : 'Get Started'}
      </motion.button>
    </SignInButton>
  );
};

export default StyledSignInButton;
