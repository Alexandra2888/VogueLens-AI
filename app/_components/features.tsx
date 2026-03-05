'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

import { features } from '../../data/data';

export default function FeaturesSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      id="features"
      className="relative py-32"
      ref={sectionRef}
      data-testid="features-section"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="via-border absolute top-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent to-transparent" />
      </div>

      <div className="container mx-auto max-w-7xl px-6">
        <div className="mb-20 text-center" data-testid="features-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand-red mb-4 inline-block text-sm font-medium tracking-widest uppercase">
              Features
            </span>
            <h2
              className="mx-auto max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
              data-testid="features-title"
            >
              Everything you need to{' '}
              <span className="gradient-text">elevate your style</span>
            </h2>
            <p
              className="text-foreground/50 mx-auto mt-6 max-w-xl text-lg"
              data-testid="features-subtitle"
            >
              Powerful AI tools designed to transform how you think about
              fashion
            </p>
          </motion.div>
        </div>

        <div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
          data-testid="features-grid"
        >
          {features.map(
            (
              feature: {
                icon: React.ElementType;
                title: string;
                description: string;
              },
              index: number
            ) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: [0.25, 0.1, 0, 1],
                  }}
                  data-testid={`feature-card-${index}`}
                >
                  <motion.div
                    className="group border-border/50 bg-card/50 hover:border-brand-red/20 hover:bg-card relative flex h-full flex-col rounded-2xl border p-8 backdrop-blur-sm transition-colors duration-300"
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  >
                    <div className="from-brand-red/0 to-brand-teal/0 absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-[0.03]" />

                    <div
                      className="bg-brand-red/5 group-hover:bg-brand-red/10 dark:bg-brand-red/10 dark:group-hover:bg-brand-red/20 relative mb-6 flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-300"
                      data-testid={`feature-icon-${index}`}
                    >
                      <Icon className="text-brand-red h-6 w-6" />
                    </div>

                    <h3
                      className="text-foreground relative mb-3 text-lg font-semibold"
                      data-testid={`feature-title-${index}`}
                    >
                      {feature.title}
                    </h3>

                    <p
                      className="text-foreground/50 relative text-sm leading-relaxed"
                      data-testid={`feature-description-${index}`}
                    >
                      {feature.description}
                    </p>

                    <div className="text-brand-red mt-6 flex items-center text-sm font-medium opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      Learn more
                      <svg
                        className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </motion.div>
                </motion.div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}
