'use client';

import { motion } from 'framer-motion';
import { MessageSquare, Search, Lightbulb, Sparkles } from 'lucide-react';

const steps = [
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
};

export default function HowItWorks() {
  return (
    <section className="my-24 w-full" data-testid="how-it-works-section">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mx-auto max-w-7xl"
        >
          <div className="mb-16 text-center" data-testid="how-it-works-header">
            <h2
              className="mb-4 text-4xl font-bold text-primary md:text-5xl"
              data-testid="how-it-works-title"
            >
              How It Works
            </h2>
            <p
              className="mx-auto max-w-3xl text-xl text-primary/60"
              data-testid="how-it-works-subtitle"
            >
              Experience fashion advice like never before with our easy-to-use
              AI chat app
            </p>
          </div>

          <div className="relative" data-testid="how-it-works-steps">
            <div
              className="absolute left-1/2 hidden h-full w-0.5 -translate-x-1/2 bg-zinc-200 md:block"
              aria-hidden="true"
            ></div>
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative mb-16 flex items-start last:mb-0 md:items-center"
                  data-testid={`step-${index}`}
                >
                  <div className="flex-1 md:pr-24 md:text-right">
                    <h3
                      className="mb-3 text-xl font-semibold text-primary md:text-2xl"
                      data-testid={`step-title-${index}`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-base text-primary/70 md:text-lg"
                      data-testid={`step-description-${index}`}
                    >
                      {step.description}
                    </p>
                  </div>
                  <div
                    className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white shadow-lg md:absolute md:left-1/2 md:h-16 md:w-16 md:-translate-x-1/2"
                    data-testid={`step-icon-${index}`}
                  >
                    <Icon className="h-6 w-6 text-highlight md:h-8 md:w-8" />
                  </div>
                  <div className="hidden flex-1 md:block md:pl-24"></div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
