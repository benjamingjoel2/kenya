"use client";

import { motion } from "framer-motion";
import { whatsappHref } from "@/config/site";
import { WhatsAppIcon } from "@/components/ui/Icons";

export function WhatsAppFab() {
  return (
    <motion.a
      href={whatsappHref()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with a Safari Njema specialist on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.06 }}
      className="group fixed right-4 bottom-4 z-40 flex h-14 items-center gap-2 rounded-full bg-[#1f7a4d] pr-5 pl-4 text-white shadow-[0_10px_30px_-8px_rgba(0,0,0,0.45)] md:right-6 md:bottom-6"
    >
      <WhatsAppIcon className="h-6 w-6" />
      <span className="hidden text-sm font-medium sm:inline">Chat with us</span>
    </motion.a>
  );
}
