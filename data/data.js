import { Facebook, Instagram, Twitter } from 'lucide-react';

// Nav items — labels are now provided via translations in the header component

export const footerLinks = [{ href: '/terms' }, { href: '/privacy' }];

export const socialLinks = [
  { href: '#', icon: Instagram, label: 'Instagram' },
  { href: '#', icon: Facebook, label: 'Facebook' },
  { href: '#', icon: Twitter, label: 'Twitter' },
];

export const images = [
  {
    src: 'https://res.cloudinary.com/dblgunawk/image/upload/v1732728818/img3_cimgii_i3epvq.avif',
    alt: 'Fashion model 1',
    width: 400,
    height: 600,
  },
  {
    src: 'https://res.cloudinary.com/dblgunawk/image/upload/v1732728818/img2_s6uhka_xrf4nx.avif',
    alt: 'Fashion model 2',
    width: 320,
    height: 480,
  },
  {
    src: 'https://res.cloudinary.com/dblgunawk/image/upload/v1732728817/img1_rz1swm_l2gq9j.avif',
    alt: 'Fashion model 3',
    width: 240,
    height: 360,
  },
];

// Terms sections — text is now provided via translations (terms.sections in messages/*.json)
export const sections = [];
