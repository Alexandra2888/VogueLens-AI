'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from 'motion/react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

import { images } from '../../data/data';

const Hero = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.3], [0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 30;
    const yVal = (e.clientY - rect.top - rect.height / 2) / 30;
    mouseX.set(x);
    mouseY.set(yVal);
  };

  return (
    <motion.section
      className="relative flex min-h-[90vh] items-center overflow-hidden"
      style={{ opacity }}
      onMouseMove={handleMouseMove}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="bg-brand-red/5 dark:bg-brand-red/10 absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full blur-[120px]" />
        <div className="bg-brand-teal/5 dark:bg-brand-teal/10 absolute -right-20 -bottom-20 h-[400px] w-[400px] rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto max-w-7xl px-6">
        <motion.div
          style={{ y }}
          className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20"
        >
          <div className="relative z-10 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0, 1] }}
              className="mb-6"
            >
              <motion.div
                className="border-brand-red/20 bg-brand-red/5 text-brand-red dark:border-brand-red/30 dark:bg-brand-red/10 mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                <Sparkles className="h-3.5 w-3.5" />
                AI-Powered Fashion Intelligence
              </motion.div>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                <motion.span
                  className="text-foreground block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                >
                  Your Personal
                </motion.span>
                <motion.span
                  className="gradient-text mt-1 block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  AI Stylist
                </motion.span>
              </h1>
            </motion.div>

            <motion.p
              className="text-foreground/60 mb-10 max-w-lg text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Intelligent outfit recommendations, color coordination, and
              personalized style tips — all powered by advanced AI that
              understands your unique aesthetic.
            </motion.p>

            <motion.div
              className="flex flex-col gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Link href="/chat">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button className="group bg-brand-red shadow-brand-red/20 hover:bg-brand-red-dark hover:shadow-brand-red/30 h-12 rounded-xl px-8 text-sm font-medium text-white shadow-lg transition-all hover:shadow-xl">
                    Start Styling
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </motion.div>
              </Link>
              <Link href="#features">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    variant="outline"
                    className="border-border/50 hover:bg-foreground/5 h-12 rounded-xl px-8 text-sm font-medium backdrop-blur-sm"
                  >
                    Explore Features
                  </Button>
                </motion.div>
              </Link>
            </motion.div>

            <motion.div
              className="mt-12 flex items-center gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              {[
                { value: '10K+', label: 'Active Users' },
                { value: '50K+', label: 'Outfits Created' },
                { value: '4.9', label: 'User Rating' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.1, duration: 0.4 }}
                >
                  <div className="text-foreground text-xl font-bold">
                    {stat.value}
                  </div>
                  <div className="text-foreground/40 text-xs">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0, 1] }}
            style={{ x: springX, y: springY }}
          >
            <div className="relative h-[550px] w-full">
              <div className="from-brand-red/5 to-brand-teal/5 absolute inset-0 rounded-3xl bg-gradient-to-br via-transparent" />
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  className="absolute overflow-hidden rounded-2xl shadow-2xl shadow-black/10 dark:shadow-black/30"
                  style={{
                    width: `${65 - index * 8}%`,
                    height: `${85 - index * 8}%`,
                    zIndex: hoveredIndex === index ? 10 : images.length - index,
                    right: `${index * 12}%`,
                    top: `${index * 8}%`,
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  initial={{ opacity: 0, y: 40, rotate: index * 2 - 2 }}
                  animate={{ opacity: 1, y: 0, rotate: index * 2 - 2 }}
                  whileHover={{
                    scale: 1.05,
                    rotate: 0,
                    zIndex: 10,
                    transition: { duration: 0.3, ease: 'easeOut' },
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.5 + index * 0.15,
                    ease: [0.25, 0.1, 0, 1],
                  }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </motion.div>
              ))}

              <motion.div
                className="absolute -bottom-4 -left-4 z-20 rounded-2xl border border-white/20 bg-white/80 px-5 py-3 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-gray-900/80"
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5, ease: 'easeOut' }}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-brand-red/10 flex h-10 w-10 items-center justify-center rounded-xl">
                    <Sparkles className="text-brand-red h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-foreground text-sm font-semibold">
                      Style Match
                    </div>
                    <div className="text-foreground/50 text-xs">
                      98% Confidence
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
export default Hero;
