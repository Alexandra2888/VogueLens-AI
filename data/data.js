import {
  Facebook,
  Instagram,
  Lightbulb,
  MessageSquare,
  Palette,
  Search,
  Shirt,
  Sparkles,
  Twitter,
  Zap,
} from 'lucide-react';

export const navItems = [
  { href: '/', label: 'Home' },
  { href: '/chat', label: 'Chat' },
  { href: '/wardrobe', label: 'Wardrobe' },
  { href: '/profile', label: 'Profile' },
];

export const features = [
  {
    icon: Sparkles,
    title: 'AI-Powered Recommendations',
    description:
      'Get personalized fashion advice tailored to your style and preferences.',
  },
  {
    icon: Palette,
    title: 'Color Coordination',
    description:
      'Discover perfect color combinations that complement your wardrobe.',
  },
  {
    icon: Zap,
    title: 'Instant Styling Tips',
    description: 'Receive quick and practical styling advice for any occasion.',
  },
  {
    icon: Shirt,
    title: 'Outfit Generator',
    description:
      'Create complete outfits from your existing wardrobe or with new pieces.',
  },
];

export const footerLinks = [
  { href: '/terms', label: 'Terms of Service' },
  { href: '/privacy', label: 'Privacy' },
];

export const socialLinks = [
  { href: '#', icon: Instagram, label: 'Instagram' },
  { href: '#', icon: Facebook, label: 'Facebook' },
  { href: '#', icon: Twitter, label: 'Twitter' },
];

export const images = [
  {
    src: 'https://res.cloudinary.com/dnpjmrdik/image/upload/v1729791776/img1_rz1swm.avif',
    alt: 'Fashion model 1',
    width: 400,
    height: 600,
  },
  {
    src: 'https://res.cloudinary.com/dnpjmrdik/image/upload/v1729791785/img3_cimgii.avif',
    alt: 'Fashion model 2',
    width: 320,
    height: 480,
  },
  {
    src: 'https://res.cloudinary.com/dnpjmrdik/image/upload/v1729791781/img2_s6uhka.avif',
    alt: 'Fashion model 3',
    width: 240,
    height: 360,
  },
];

export const steps = [
  {
    icon: MessageSquare,
    title: 'Start a Chat',
    description:
      'Begin your fashion journey by starting a conversation with our AI assistant.',
  },
  {
    icon: Search,
    title: 'Describe Your Needs',
    description:
      'Tell us about your style preferences, body type, or specific fashion questions.',
  },
  {
    icon: Lightbulb,
    title: 'Receive Personalized Advice',
    description:
      'Get tailored recommendations and styling tips based on your input.',
  },
  {
    icon: Sparkles,
    title: 'Refine Your Style',
    description:
      'Iterate and explore different options to perfect your fashion choices.',
  },
];
