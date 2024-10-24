'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

import { ThemeToggle } from './theme-toggle';
import Logo from '../logo/logo';
import MinimalLogo from '../logo/minimal-logo';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/chat', label: 'Chat' },
  { href: '/wardrobe', label: 'Wardrobe' },
];

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

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full border-b border-border bg-background/95 backdrop-blur-md transition-colors">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link href="/" className="hidden md:block">
            <Logo />
          </Link>
          <Link href="/" className="block md:hidden" data-testid="mobile-logo">
            <MinimalLogo />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
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
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-foreground hover:text-secondary-hover"
            aria-label="Toggle menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-expanded={isMenuOpen ? 'true' : 'false'}
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
        className="border-t border-border bg-background md:hidden"
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isMenuOpen ? 'auto' : 0,
          opacity: isMenuOpen ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
          ease: 'easeInOut',
        }}
      >
        <div className="mx-auto max-w-7xl space-y-4 px-4 py-4">
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
