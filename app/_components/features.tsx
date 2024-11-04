'use client';

import { motion } from 'framer-motion';
import { Sparkles, Palette, Zap, Shirt } from 'lucide-react';

const features = [
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function FeaturesSection() {
  return (
    <section className="my-36 max-h-full" data-testid="features-section">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mx-auto max-w-7xl"
        >
          <div className="mb-16 text-center" data-testid="features-header">
            <h2
              className="my-12 text-4xl font-bold text-primary md:text-5xl"
              data-testid="features-title"
            >
              Features
            </h2>
            <p
              className="mx-auto max-w-3xl text-xl text-primary/60"
              data-testid="features-subtitle"
            >
              Discover our powerful tools designed to enhance your fashion
              experience
            </p>
          </div>

          <div
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
            data-testid="features-grid"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative flex flex-col items-center rounded-2xl border border-zinc-200 p-8 text-center shadow-lg transition-shadow duration-300 hover:shadow-xl"
                  data-testid={`feature-card-${index}`}
                >
                  <div
                    className="mb-6 rounded-full bg-zinc-100 p-4 transition-colors duration-300 group-hover:text-highlight"
                    data-testid={`feature-icon-${index}`}
                  >
                    <Icon className="h-8 w-8 text-secondary-hover" />
                  </div>
                  <h3
                    className="mb-4 text-xl font-semibold text-primary"
                    data-testid={`feature-title-${index}`}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="leading-relaxed text-primary/70"
                    data-testid={`feature-description-${index}`}
                  >
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
