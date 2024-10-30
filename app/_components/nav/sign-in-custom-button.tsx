import { SignInButton } from '@clerk/nextjs';
import { motion } from 'framer-motion';

const StyledSignInButton = ({ isMobile = false }) => {
  return (
    <SignInButton mode="modal">
      <motion.div
        className={`relative font-medium text-foreground transition-colors hover:text-secondary-hover ${
          isMobile ? 'text-base' : 'text-xl'
        }`}
        whileHover={{ y: -2 }}
        transition={{ duration: 0.2 }}
      >
        Sign In
        <motion.div
          className={`absolute left-0 h-[2px] bg-secondary-hover ${
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
