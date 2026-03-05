'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import Logo from './_components/logo/logo';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0, 1] }}
        className="w-full max-w-md space-y-8 text-center"
      >
        <div
          className="flex items-center justify-center"
          data-testid="logo-container"
        >
          <Logo />
        </div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 200,
            damping: 20,
            delay: 0.1,
          }}
        >
          <span className="gradient-text text-[120px] font-bold leading-none tracking-tighter">
            404
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <p className="text-xl font-medium text-foreground">
            Page not found
          </p>
          <p className="mt-2 text-foreground/50">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-brand-red px-6 py-3 text-sm font-medium text-white shadow-lg shadow-brand-red/20 transition-all hover:bg-brand-red-dark hover:shadow-xl hover:shadow-brand-red/30"
          >
            <ArrowLeft className="h-4 w-4" />
            Return Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
