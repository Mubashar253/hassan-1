"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-3">
        <div className="flex items-center gap-3">
          <Image
            src="/hassan.jpg"
            alt="Malik Mubashar Hassan"
            width={50}
            height={50}
            className="rounded-full border-2 border-blue-500"
          />
          <h1 className="text-xl font-bold text-blue-600">Malik Mubashar Hassan</h1>
        </div>

        <nav>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl text-blue-600"
          >
            ☰
          </button>
          <ul
            className={`${
              isOpen ? "block" : "hidden"
            } md:flex gap-6 text-gray-800 font-semibold`}
          >
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/testimonials">Testimonials</Link></li>
            <li><Link href="/team">Team</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
