import { SignInButton } from '@clerk/nextjs';
import { motion } from 'motion/react';

const StyledSignInButton = ({ isMobile = false }) => {
  return (
    <SignInButton mode="modal">
      <motion.div
        className={`text-foreground hover:text-secondary-hover relative font-medium transition-colors ${
          isMobile ? 'text-base' : 'text-xl'
        }`}
        whileHover={{ y: -2 }}
        transition={{ duration: 0.2 }}
      >
        Sign In
        <motion.div
          className={`bg-secondary-hover absolute left-0 h-[2px] ${
            isMobile ? 'bottom-0 w-[60%]' : '-bottom-1 w-full'
          }`}
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
    </SignInButton>
  );
};

export default StyledSignInButton;
