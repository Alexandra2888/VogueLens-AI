import { SignInButton } from '@clerk/nextjs';
import { motion } from 'motion/react';

const StyledSignInButton = ({ isMobile = false }) => {
  return (
    <SignInButton mode="modal">
      <motion.button
        className="rounded-xl bg-brand-red px-5 py-2 text-sm font-medium text-white shadow-sm shadow-brand-red/20 transition-all hover:bg-brand-red-dark hover:shadow-md hover:shadow-brand-red/30"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {isMobile ? 'Sign In' : 'Get Started'}
      </motion.button>
    </SignInButton>
  );
};

export default StyledSignInButton;
