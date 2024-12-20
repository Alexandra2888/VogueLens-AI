'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

import { ThemeToggle } from './theme-toggle';
import Logo from '../logo/logo';
import MinimalLogo from '../logo/minimal-logo';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import SignInCustomButton from './sign-in-custom-button';

import { navItems } from '../../../data/data';

// Check for test environment
const isTestEnvironment = process.env.NEXT_PUBLIC_CLERK_BYPASS_AUTH === 'true';

const NavLink = ({
  href,
  label,
  isMobile = false,
  onClick,
}: {
  href: string;
  label: string;
  isMobile?: boolean;
  onClick?: () => void;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className="relative inline-block"
      onClick={onClick}
      aria-current={isActive ? 'page' : undefined}
      data-testid={`nav-link-${label.toLowerCase()}${isMobile ? '-mobile' : '-desktop'}`}
    >
      <motion.div
        className={`relative font-medium text-foreground transition-colors hover:text-secondary-hover ${
          isMobile ? 'text-base' : 'text-xl'
        }`}
        whileHover={{ y: -2 }}
        transition={{ duration: 0.2 }}
      >
        {label}
        <motion.div
          className={`absolute left-0 h-[2px] bg-secondary-hover ${
            isMobile ? 'bottom-0 w-[60%]' : '-bottom-1 w-full'
          }`}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isActive ? 1 : 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
    </Link>
  );
};

// Mock UserButton for testing
const MockUserButton = ({ isMobile = false }: { isMobile?: boolean }) => (
  <div
    className={`rounded-full bg-secondary ${isMobile ? 'h-8 w-8' : 'h-10 w-10'}`}
    data-testid={`mock-user-button${isMobile ? '-mobile' : '-desktop'}`}
  />
);

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const renderAuthButtons = (isMobile: boolean) => {
    if (isTestEnvironment) {
      return <MockUserButton isMobile={isMobile} />;
    }

    return (
      <>
        <SignedOut>
          <SignInCustomButton
            isMobile={isMobile}
            data-testid={`sign-in-button${isMobile ? '-mobile' : '-desktop'}`}
          />
        </SignedOut>
        <SignedIn>
          <UserButton
            appearance={{
              elements: {
                avatarBox: isMobile ? 'w-8 h-8' : 'w-10 h-10',
              },
            }}
          />
        </SignedIn>
      </>
    );
  };

  return (
    <header
      className="fixed z-50 w-full bg-background/95 transition-colors"
      data-testid="header"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between border-b border-border px-4 py-4">
        {/* Logo */}
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link href="/" className="hidden md:block" data-testid="desktop-logo">
            <Logo />
          </Link>
          <Link href="/" className="block md:hidden" data-testid="mobile-logo">
            <MinimalLogo />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-8 md:flex"
          data-testid="desktop-nav"
        >
          {navItems.map((item, i) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
            >
              <NavLink href={item.href} label={item.label} />
            </motion.div>
          ))}
          {renderAuthButtons(false)}
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <div
          className="flex items-center gap-4 md:hidden"
          data-testid="mobile-nav"
        >
          {renderAuthButtons(true)}
          <ThemeToggle />
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-foreground hover:text-secondary-hover"
            aria-label="Toggle menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-expanded={isMenuOpen ? 'true' : 'false'}
            data-testid="mobile-menu-button"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.nav
        className="fixed inset-0 top-14 z-40 bg-secondary dark:bg-primary md:hidden"
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isMenuOpen ? '100vh' : 0,
          opacity: isMenuOpen ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
          ease: 'easeInOut',
        }}
        data-testid="mobile-menu"
      >
        <div className="mx-auto mt-16 max-w-7xl space-y-4 px-4 py-4">
          {navItems.map((item, i) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="px-3 py-2"
            >
              <NavLink
                href={item.href}
                label={item.label}
                isMobile={true}
                onClick={() => setIsMenuOpen(false)}
              />
            </motion.div>
          ))}
        </div>
      </motion.nav>
    </header>
  );
}
