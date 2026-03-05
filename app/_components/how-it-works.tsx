'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

import { steps } from '../../data/data';

export default function HowItWorks() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      className="relative py-32"
      ref={sectionRef}
      data-testid="how-it-works-section"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="container mx-auto max-w-7xl px-6">
        <div className="mb-20 text-center" data-testid="how-it-works-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-4 inline-block text-sm font-medium tracking-widest text-brand-teal-dark dark:text-brand-teal uppercase">
              How It Works
            </span>
            <h2
              className="mx-auto max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
              data-testid="how-it-works-title"
            >
              Get styled in{' '}
              <span className="gradient-text">four simple steps</span>
            </h2>
            <p
              className="mx-auto mt-6 max-w-xl text-lg text-foreground/50"
              data-testid="how-it-works-subtitle"
            >
              From conversation to confidence — your style journey starts here
            </p>
          </motion.div>
        </div>

        <div
          className="relative mx-auto max-w-4xl"
          data-testid="how-it-works-steps"
        >
          <motion.div
            className="absolute left-8 top-0 hidden h-full w-px md:left-1/2 md:block md:-translate-x-px"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, ease: [0.25, 0.1, 0, 1] }}
            style={{ originY: 0 }}
          >
            <div className="h-full w-full bg-gradient-to-b from-brand-red via-brand-red/50 to-brand-teal" />
          </motion.div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + index * 0.15,
                  ease: [0.25, 0.1, 0, 1],
                }}
                className="relative mb-16 last:mb-0"
                data-testid={`step-${index}`}
              >
                <div
                  className={`flex items-start gap-8 md:items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div
                    className={`hidden flex-1 md:block ${
                      isEven ? 'text-right' : 'text-left'
                    }`}
                  >
                    <motion.div
                      whileHover={{ x: isEven ? -4 : 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="mb-2 text-xs font-medium tracking-widest text-brand-red/60 uppercase">
                        Step {index + 1}
                      </div>
                      <h3
                        className="mb-3 text-xl font-semibold text-foreground"
                        data-testid={`step-title-${index}`}
                      >
                        {step.title}
                      </h3>
                      <p
                        className="text-foreground/50"
                        data-testid={`step-description-${index}`}
                      >
                        {step.description}
                      </p>
                    </motion.div>
                  </div>

                  <motion.div
                    className="relative z-10 flex-shrink-0"
                    whileHover={{ scale: 1.1 }}
                    transition={{
                      type: 'spring',
                      stiffness: 400,
                      damping: 15,
                    }}
                    data-testid={`step-icon-${index}`}
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-brand-red/20 bg-background shadow-lg shadow-brand-red/5 md:h-16 md:w-16">
                      <Icon className="h-6 w-6 text-brand-red md:h-7 md:w-7" />
                    </div>
                  </motion.div>

                  <div className="flex-1 md:hidden">
                    <div className="mb-1 text-xs font-medium tracking-widest text-brand-red/60 uppercase">
                      Step {index + 1}
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-sm text-foreground/50">
                      {step.description}
                    </p>
                  </div>

                  <div className="hidden flex-1 md:block" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
