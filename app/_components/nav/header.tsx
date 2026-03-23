'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import {
  motion,
  AnimatePresence,
  useMotionValueEvent,
  useScroll,
} from 'motion/react';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { ThemeToggle } from './theme-toggle';
import Logo from '../logo/logo';
import MinimalLogo from '../logo/minimal-logo';
import { Show, UserButton } from '@clerk/nextjs';
import SignInCustomButton from './sign-in-custom-button';
import { LanguageSwitcher } from '@/components/language-switcher';

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
  // Match ignoring locale prefix: /en/chat and /ro/chat both match /chat
  const pathWithoutLocale = pathname.replace(/^\/(en|ro)/, '') || '/';
  const isActive = pathWithoutLocale === href || pathname === href;

  return (
    <Link
      href={href}
      className="relative inline-block"
      onClick={onClick}
      aria-current={isActive ? 'page' : undefined}
      data-testid={`nav-link-${label.toLowerCase()}${isMobile ? '-mobile' : '-desktop'}`}
    >
      <motion.div
        className={`relative font-medium transition-colors ${
          isActive
            ? 'text-brand-red'
            : 'text-foreground/70 hover:text-foreground'
        } ${isMobile ? 'text-lg' : 'text-sm tracking-wide uppercase'}`}
        whileHover={{ y: -1 }}
        transition={{ duration: 0.2 }}
      >
        {label}
        <motion.div
          className={`bg-brand-red absolute left-0 h-[2px] rounded-full ${
            isMobile ? 'bottom-0 w-[60%]' : '-bottom-1 w-full'
          }`}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isActive ? 1 : 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.2 }}
          style={{ originX: 0 }}
        />
      </motion.div>
    </Link>
  );
};

const MockUserButton = ({ isMobile = false }: { isMobile?: boolean }) => (
  <div
    className={`bg-brand-red/20 rounded-full ${isMobile ? 'h-8 w-8' : 'h-10 w-10'}`}
    data-testid={`mock-user-button${isMobile ? '-mobile' : '-desktop'}`}
  />
);

export default function Header() {
  const t = useTranslations('nav');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  const navItems = [
    { href: '/', label: t('home') },
    { href: '/chat', label: t('chat') },
    { href: '/wardrobe', label: t('wardrobe') },
    { href: '/profile', label: t('profile') },
  ];

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 20);
  });

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const renderAuthButtons = (isMobile: boolean) => {
    if (isTestEnvironment) {
      return <MockUserButton isMobile={isMobile} />;
    }

    return (
      <>
        <Show when="signed-out">
          <SignInCustomButton
            isMobile={isMobile}
            data-testid={`sign-in-button${isMobile ? '-mobile' : '-desktop'}`}
          />
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

  return (
    <motion.header
      className={`fixed z-50 w-full transition-all duration-500 ${
        scrolled
          ? 'bg-background/80 shadow-sm shadow-black/3 backdrop-blur-2xl dark:shadow-white/2'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0, 1] }}
      data-testid="header"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Link href="/" className="hidden md:block" data-testid="desktop-logo">
            <Logo />
          </Link>
          <Link href="/" className="block md:hidden" data-testid="mobile-logo">
            <MinimalLogo />
          </Link>
        </motion.div>

        <nav
          className="hidden items-center gap-8 md:flex"
          data-testid="desktop-nav"
        >
          {navItems.map((item, i) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.05 }}
            >
              <NavLink href={item.href} label={item.label} />
            </motion.div>
          ))}

          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <div className="bg-border h-5 w-px" />
            {renderAuthButtons(false)}
            <LanguageSwitcher />
            <ThemeToggle />
          </motion.div>
        </nav>

        <div
          className="flex items-center gap-3 md:hidden"
          data-testid="mobile-nav"
        >
          {renderAuthButtons(true)}
          <LanguageSwitcher />
          <ThemeToggle />
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-foreground relative z-50 flex h-10 w-10 items-center justify-center rounded-xl"
            aria-label={t('toggleMenu')}
            whileTap={{ scale: 0.9 }}
            aria-expanded={isMenuOpen ? 'true' : 'false'}
            data-testid="mobile-menu-button"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-5 w-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-5 w-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className="bg-background/95 fixed inset-0 z-40 flex items-center justify-center backdrop-blur-2xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            data-testid="mobile-menu"
          >
            <div className="flex flex-col items-center gap-8">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: i * 0.08, duration: 0.3 }}
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
        )}
      </AnimatePresence>
    </motion.header>
  );
}
