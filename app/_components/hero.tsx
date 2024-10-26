'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '../../components/ui/button';

const HERO_IMAGES = [
  {
    src: 'https://res.cloudinary.com/dnpjmrdik/image/upload/v1729791776/img1_rz1swm.avif',
    alt: 'Fashion model 1',
    width: 800,
    height: 1200,
  },
  {
    src: 'https://res.cloudinary.com/dnpjmrdik/image/upload/v1729791785/img3_cimgii.avif',
    alt: 'Fashion model 2',
    width: 640,
    height: 960,
  },
  {
    src: 'https://res.cloudinary.com/dnpjmrdik/image/upload/v1729791781/img2_s6uhka.avif',
    alt: 'Fashion model 3',
    width: 480,
    height: 720,
  },
];

const MainHeroImage = ({ image, onLoad }) => (
  <div
    className="absolute overflow-hidden rounded-lg border border-zinc-200 shadow-lg"
    style={{
      width: '70%',
      height: '90%',
      zIndex: 3,
      right: '0%',
      top: '0%',
    }}
  >
    <Image
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      className="h-full w-full object-cover"
      priority={true}
      loading="eager"
      fetchPriority="high"
      sizes="(max-width: 768px) 100vw, 800px"
      onLoad={onLoad}
    />
  </div>
);

const AnimatedHeroImage = ({
  image,
  index,
  isHovered,
  onMouseEnter,
  onMouseLeave,
}) => (
  <motion.div
    className="absolute overflow-hidden rounded-lg border border-zinc-200 shadow-lg"
    style={{
      width: `${70 - index * 10}%`,
      height: `${90 - index * 10}%`,
      zIndex: isHovered ? 10 : index + 1,
      right: `${index * 10}%`,
      top: `${index * 10}%`,
    }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.3, delay: index * 0.1 }}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    whileHover={{ scale: 1.05 }}
  >
    <Image
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      className="h-full w-full object-cover"
      sizes={
        index === 0
          ? '(max-width: 768px) 100vw, 800px'
          : '(max-width: 768px) 100vw, 480px'
      }
      loading="lazy"
    />
  </motion.div>
);

const Hero = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleMainImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <section className="flex justify-center overflow-hidden pt-12 lg:pt-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter text-primary sm:text-5xl xl:text-6xl/none">
                Your AI Fashion Stylist
              </h1>
              <p className="max-w-[600px] text-primary/50 md:text-xl">
                Get personalized fashion advice, outfit recommendations and
                style tips from our AI-powered chatbot.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium">
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
          </div>

          <div className="relative pt-8 lg:pl-10 lg:pt-0">
            <div className="relative h-[400px] w-full lg:h-[600px]">
              {/* Static main image loads first */}
              <MainHeroImage
                image={HERO_IMAGES[0]}
                onLoad={handleMainImageLoad}
              />

              {/* Animated images appear after main image loads */}
              {isLoaded &&
                HERO_IMAGES.slice(1).map((image, index) => (
                  <AnimatedHeroImage
                    key={index}
                    image={image}
                    index={index + 1} // Add 1 since we're skipping the first image
                    isHovered={hoveredIndex === index + 1}
                    onMouseEnter={() => setHoveredIndex(index + 1)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
