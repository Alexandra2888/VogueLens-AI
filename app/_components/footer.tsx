'use client';

import Link from 'next/link';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import MinimalLogo from './logo/minimal-logo';

import { footerLinks, socialLinks } from '../../data/data';

const FooterLink = ({ href, label }: { href: string; label: string }) => {
  return (
    <Link
      href={href}
      className="text-sm text-foreground/50 transition-colors duration-300 hover:text-foreground"
    >
      {label}
    </Link>
  );
};

const SocialLink = ({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: React.ElementType;
  label: string;
}) => {
  return (
    <Link href={href} aria-label={label}>
      <motion.div
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="flex h-9 w-9 items-center justify-center rounded-xl text-foreground/40 transition-colors duration-300 hover:bg-foreground/5 hover:text-foreground"
      >
        <Icon className="h-4 w-4" />
      </motion.div>
    </Link>
  );
};

const Footer = () => {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, margin: '-50px' });

  return (
    <footer
      className="relative border-t border-border/50 px-6 py-12"
      ref={footerRef}
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Link href="/" aria-label="Home">
            <MinimalLogo />
          </Link>

          <nav className="flex items-center gap-8">
            {footerLinks.map((link) => (
              <FooterLink key={link.href} {...link} />
            ))}
          </nav>

          <div className="flex items-center gap-1">
            {socialLinks.map((link) => (
              <SocialLink key={link.label} {...link} />
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-10 flex flex-col items-center gap-4 border-t border-border/30 pt-8 sm:flex-row sm:justify-between"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-xs text-foreground/30">
            &copy; {new Date().getFullYear()} VogueLens AI. All rights
            reserved.
          </p>
          <p className="text-xs text-foreground/30">
            Crafted with AI &middot; Designed for you
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
