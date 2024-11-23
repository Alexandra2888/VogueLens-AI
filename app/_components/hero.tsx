'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

import { images } from '../../data/data';

const Hero = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // @ts-ignore
  return (
    <section className="container mx-auto flex max-w-7xl items-center justify-center overflow-hidden pt-12 lg:pt-28">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_500px] xl:grid-cols-[1fr_550px]">
          <motion.div
            className="flex flex-col justify-center space-y-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter text-primary sm:text-5xl xl:text-6xl/none">
                Your AI Fashion Stylist
              </h1>
              <p className="max-w-[600px] text-primary/50 md:text-xl">
                Get personalized fashion advice, outfit recommendations and
                style tips from our AI-powered chatbot.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-secondary hover:bg-secondary-hover">
                  Try Now
                </Button>
                <Button
                  variant="outline"
                  className="inline-flex h-10 items-center justify-center rounded-md border px-8 text-sm font-medium"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="relative pt-8 lg:pl-10 lg:pt-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative h-[400px] w-full lg:h-[600px]">
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  className="absolute rounded-lg border border-zinc-200 shadow-lg"
                  style={{
                    width: `${70 - index * 10}%`,
                    height: `${90 - index * 10}%`,
                    objectFit: 'cover',
                    zIndex: hoveredIndex === index ? 10 : index + 1,
                    right: `${index * 10}%`,
                    top: `${index * 10}%`,
                  }}
                  //@ts-ignore
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
