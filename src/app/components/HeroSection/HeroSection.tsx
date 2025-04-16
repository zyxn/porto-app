"use client";
import { Image } from "@nextui-org/react";
import Navbar from "../common/Navbar";

export default function HeroSection() {
  return (
    <>
      <div
        className="bg-[url('/img/bg1.jpg')] bg-cover bg-center opacity-55 absolute inset-0 z-0 bg-fixed"
        id="main"
      ></div>
      <Navbar />
      <section className="z-10 relative h-[90vh] flex">
        <div className="grid grid-cols-2 mx-auto my-auto gap-20 -translate-y-1/4">
          <div className="my-auto font-bold text-4xl">
            <h1>Hello,</h1>
            <h1>
              I am <span className="text-[#27AE8E] italic">Zadosaadi</span>
            </h1>
            <h1>Data Scientist</h1>
          </div>
          <div>
            <Image
              src="/img/intro-face.png"
              alt="Profile"
              width={400}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
    </>
  );
}
