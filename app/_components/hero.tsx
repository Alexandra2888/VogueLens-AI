'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const images = [
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

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <section className="flex justify-center overflow-hidden py-12 lg:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
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
                  className="absolute overflow-hidden rounded-lg border border-zinc-200 shadow-lg"
                  style={{
                    width: `${70 - index * 10}%`,
                    height: `${90 - index * 10}%`,
                    zIndex: hoveredIndex === index ? 10 : index + 1,
                    right: `${index * 10}%`,
                    top: `${index * 10}%`,
                  }}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index === 0}
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
