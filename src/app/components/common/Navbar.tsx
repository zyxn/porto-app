"use client";

import Link from "next/link";
import { Image } from "@nextui-org/react";

export default function Navbar() {
  return (
    <nav className="grid grid-cols-3 h-[10vh] px-8 font-bold text-lg z-40 relative sticky top-0 backdrop-blur-sm">
      <ul className="h-full flex">
        <li className="my-auto">
          <Image src="/img/logo.png" alt="logo" />
        </li>
      </ul>
      <ul className="mx-auto flex gap-4 h-full">
        <li className="my-auto hover:text-[#27AE8E] duration-300">
          <Link href="#main">Main</Link>
        </li>
        <li className="my-auto hover:text-[#27AE8E] duration-300">
          <Link href="#about">About</Link>
        </li>
        <li className="my-auto hover:text-[#27AE8E] duration-300">
          <Link href="#projects">Projects</Link>
        </li>
        <li className="my-auto hover:text-[#27AE8E] duration-300">
          <Link href="#contacts">Contacts</Link>
        </li>
      </ul>
    </nav>
  );
}
