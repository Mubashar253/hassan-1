
"use client";

import { motion } from "framer-motion";
import Button from "@/components/Button";

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-10">
      <div className="space-y-5 max-w-2xl">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold text-blue-700"
        >
          Welcome to My Digital Universe 🌍
        </motion.h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          I’m Malik Mubashar Hassan — an AI & Web Developer passionate about
          modern innovation, automation, and user-focused design.
        </p>
        <div className="flex gap-4">
          <Button label="View My Projects" href="/projects" />
          <Button label="Contact Me" href="/contact" variant="secondary" />
        </div>
      </div>

      <motion.img
        src="/malik.jpg"
        alt="Mubashar Hassan"
        className="w-64 h-64 rounded-full shadow-2xl border-4 border-blue-600"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />
    </div>
  );
}
