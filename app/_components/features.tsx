'use client';

import { motion } from 'motion/react';

import { features } from '../../data/data';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
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
              className="text-primary my-12 text-4xl font-bold md:text-5xl"
              data-testid="features-title"
            >
              Features
            </h2>
            <p
              className="text-primary/60 mx-auto max-w-3xl text-xl"
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
            {features.map((feature: any, index: number) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative flex flex-col items-center rounded-2xl border border-zinc-200 p-8 text-center shadow-lg transition-shadow duration-300 hover:shadow-xl"
                  data-testid={`feature-card-${index}`}
                >
                  <div
                    className="group-hover:text-highlight mb-6 rounded-full bg-zinc-100 p-4 transition-colors duration-300"
                    data-testid={`feature-icon-${index}`}
                  >
                    <Icon className="text-secondary-hover h-8 w-8" />
                  </div>
                  <h3
                    className="text-primary mb-4 text-xl font-semibold"
                    data-testid={`feature-title-${index}`}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="text-primary/70 leading-relaxed"
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
