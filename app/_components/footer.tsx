'use client';

import Link from 'next/link';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import MinimalLogo from './logo/minimal-logo';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const socialLinks = [
  { href: '#', icon: Instagram, label: 'Instagram' },
  { href: '#', icon: Facebook, label: 'Facebook' },
  { href: '#', icon: Twitter, label: 'Twitter' },
];

const FooterLink = ({ href, label }: { href: string; label: string }) => {
  return (
    <Link
      href={href}
      className="text-foreground/50 hover:text-foreground text-sm transition-colors duration-300"
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
        className="text-foreground/40 hover:bg-foreground/5 hover:text-foreground flex h-9 w-9 items-center justify-center rounded-xl transition-colors duration-300"
      >
        <Icon className="h-4 w-4" />
      </motion.div>
    </Link>
  );
};

const Footer = () => {
  const t = useTranslations('footer');
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, margin: '-50px' });

  const footerLinks = [
    { href: '/terms', label: t('links.terms') },
    { href: '/privacy', label: t('links.privacy') },
  ];

  return (
    <footer
      className="border-border/50 relative border-t px-6 py-12"
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
          className="border-border/30 mt-10 flex flex-col items-center gap-4 border-t pt-8 sm:flex-row sm:justify-between"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-foreground/30 text-xs">
            &copy; {new Date().getFullYear()} VogueLens AI. {t('rights')}
          </p>
          <p className="text-foreground/30 text-xs">{t('crafted')}</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
