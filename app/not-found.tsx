'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Logo from './_components/logo/logo';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md space-y-8 text-center"
      >
        <div className="flex items-center justify-center" data-testid="logo-container">
          <Logo />
        </div>
        <motion.h1
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="mt-6 text-9xl font-extrabold text-gray-900"
        >
          404
        </motion.h1>

        <p className="mt-2 text-2xl font-medium text-gray-600">
          Oops! Page not found.
        </p>
        <p className="mt-2 text-lg text-gray-500">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <div className="mt-6">
          <Link
            href="/"
            className="inline-flex items-center rounded-md border border-transparent bg-text-secondary-light px-6 py-3 text-base font-medium text-white transition-colors duration-300 hover:bg-text-secondary-dark hover:text-black focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Return Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
