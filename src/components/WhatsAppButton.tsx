'use client';

import { motion } from 'framer-motion';
import { brand } from '@/lib/brand';

export default function WhatsAppButton() {
  return (
    <motion.a
      href={`https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(
        'Hello Gavirneni, I would like to know more about your services.'
      )}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.4, type: 'spring', stiffness: 220, damping: 16 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.94 }}
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 cursor-pointer place-items-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-emerald-500/30 ring-4 ring-white/80 sm:bottom-6 sm:right-6"
    >
      <span
        aria-hidden
        className="absolute inset-0 -z-10 rounded-full bg-[#25D366] opacity-60 animate-ping"
      />
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden>
        <path d="M19.11 17.3c-.27-.14-1.61-.79-1.86-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.07-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.6-1.5-1.87-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.02-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27 0 1.34.97 2.64 1.11 2.82.14.18 1.92 2.93 4.66 4.11.65.28 1.16.45 1.56.58.65.21 1.25.18 1.72.11.52-.08 1.61-.66 1.84-1.29.23-.63.23-1.18.16-1.29-.07-.11-.25-.18-.52-.32zM16.03 6.13c-5.46 0-9.9 4.44-9.9 9.9 0 1.74.46 3.44 1.32 4.94L6 26l5.18-1.36c1.45.79 3.08 1.21 4.84 1.21h.01c5.46 0 9.9-4.44 9.9-9.9 0-2.64-1.03-5.13-2.9-7-1.87-1.87-4.35-2.9-7-2.9zm0 17.95h-.01c-1.57 0-3.12-.42-4.47-1.22l-.32-.19-3.3.87.88-3.22-.21-.33a8.21 8.21 0 0 1-1.26-4.36c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.2 8.2 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24z" />
      </svg>
    </motion.a>
  );
}
