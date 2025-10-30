"use client";

import Link from "next/link";

interface ButtonProps {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
}

export default function Button({ label, href, variant = "primary" }: ButtonProps) {
  const base =
    "px-6 py-3 rounded-lg font-semibold transition duration-300 shadow-md";
  const styles =
    variant === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-700"
      : "bg-gray-200 text-gray-800 hover:bg-gray-300";

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {label}
    </Link>
  );
}
