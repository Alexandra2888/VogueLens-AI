import { SignInButton, UserButton, Show } from '@clerk/nextjs';
import { motion } from 'motion/react';

const AuthNavButton = ({ isMobile = false }) => {
  return (
    <>
      <Show when="signed-out">
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
      </Show>
      <Show when="signed-in">
        <UserButton
          appearance={{
            elements: { avatarBox: isMobile ? 'w-8 h-8' : 'w-10 h-10' },
          }}
        />
      </Show>
    </>
  );
};

export default AuthNavButton;
