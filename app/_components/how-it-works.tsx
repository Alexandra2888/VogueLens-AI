'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { MessageSquare, Search, Lightbulb, Sparkles } from 'lucide-react';

const stepIcons = [MessageSquare, Search, Lightbulb, Sparkles];
const stepKeys = ['startChat', 'describeNeeds', 'receiveAdvice', 'refineStyle'] as const;

export default function HowItWorks() {
  const t = useTranslations('howItWorks');
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      className="relative py-32"
      ref={sectionRef}
      data-testid="how-it-works-section"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="via-border absolute top-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent to-transparent" />
      </div>

      <div className="container mx-auto max-w-7xl px-6">
        <div className="mb-20 text-center" data-testid="how-it-works-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand-teal-dark dark:text-brand-teal mb-4 inline-block text-sm font-medium tracking-widest uppercase">
              {t('label')}
            </span>
            <h2
              className="mx-auto max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
              data-testid="how-it-works-title"
            >
              {t('title')}{' '}
              <span className="gradient-text">{t('titleGradient')}</span>
            </h2>
            <p
              className="text-foreground/50 mx-auto mt-6 max-w-xl text-lg"
              data-testid="how-it-works-subtitle"
            >
              {t('subtitle')}
            </p>
          </motion.div>
        </div>

        <div
          className="relative mx-auto max-w-4xl"
          data-testid="how-it-works-steps"
        >
          <motion.div
            className="absolute top-0 left-8 hidden h-full w-px md:left-1/2 md:block md:-translate-x-px"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, ease: [0.25, 0.1, 0, 1] }}
            style={{ originY: 0 }}
          >
            <div className="from-brand-red via-brand-red/50 to-brand-teal h-full w-full bg-gradient-to-b" />
          </motion.div>

          {stepKeys.map((key, index) => {
            const Icon = stepIcons[index];
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={key}
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
                      <div className="text-brand-red/60 mb-2 text-xs font-medium tracking-widest uppercase">
                        {t('step')} {index + 1}
                      </div>
                      <h3
                        className="text-foreground mb-3 text-xl font-semibold"
                        data-testid={`step-title-${index}`}
                      >
                        {t(`steps.${key}.title`)}
                      </h3>
                      <p
                        className="text-foreground/50"
                        data-testid={`step-description-${index}`}
                      >
                        {t(`steps.${key}.description`)}
                      </p>
                    </motion.div>
                  </div>

                  <motion.div
                    className="relative z-10 flex-shrink-0"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                    data-testid={`step-icon-${index}`}
                  >
                    <div className="border-brand-red/20 bg-background shadow-brand-red/5 flex h-14 w-14 items-center justify-center rounded-2xl border shadow-lg md:h-16 md:w-16">
                      <Icon className="text-brand-red h-6 w-6 md:h-7 md:w-7" />
                    </div>
                  </motion.div>

                  <div className="flex-1 md:hidden">
                    <div className="text-brand-red/60 mb-1 text-xs font-medium tracking-widest uppercase">
                      {t('step')} {index + 1}
                    </div>
                    <h3 className="text-foreground mb-2 text-lg font-semibold">
                      {t(`steps.${key}.title`)}
                    </h3>
                    <p className="text-foreground/50 text-sm">
                      {t(`steps.${key}.description`)}
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
