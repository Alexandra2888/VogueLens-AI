'use client';

import { Instagram } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'motion/react';
import MinimalLogo from './logo/minimal-logo';

import { footerLinks, socialLinks } from '../../data/data';

const FooterLink = ({ href, label }: { href: string; label: string }) => {
  return (
    <Link
      href={href}
      className="text-md text-foreground hover:text-secondary-hover relative transition-colors md:text-xl"
    >
      <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
        {label}
        <motion.div
          className="bg-secondary-hover absolute -bottom-1 left-0 h-[2px] w-full"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
    </Link>
  );
};

const SocialLink = ({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: typeof Instagram;
  label: string;
}) => {
  return (
    <Link href={href} aria-label={label}>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="text-foreground hover:text-secondary-hover transition-colors"
      >
        <Icon className="h-5 w-5" />
      </motion.div>
    </Link>
  );
};

const Footer = () => {
  return (
    <footer className="border-border bg-background/95 border-t px-4 py-6 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 sm:flex-row sm:justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link href="/" aria-label="Home">
            <MinimalLogo />
          </Link>
        </motion.div>

        {/* Links */}
        <motion.nav
          className="flex gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {footerLinks.map((link) => (
            <FooterLink key={link.href} {...link} />
          ))}
        </motion.nav>

        {/* Social Links */}
        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          {socialLinks.map((link) => (
            <SocialLink key={link.label} {...link} />
          ))}
        </motion.div>
      </div>

      {/* Copyright */}
      <motion.div
        className="text-muted-foreground mt-6 text-center text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        © {new Date().getFullYear()} VogueLens AI. All rights reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
