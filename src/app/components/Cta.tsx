"use client";

import React from "react";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Cta() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // animation runs once
      easing: "ease-in-out",
    });
  }, []);
  return (
    <div
      data-aos="fade-in"
      className="mt-15 md:mt-20 xl:mt-25 flex flex-col items-center relative"
    >
      <div className="mr-90">
        <Image
          className="absolute z-[-1] top-0"
          src="/ellipse-6.svg"
          alt="Logo"
          width={400}
          height={200}
        />
      </div>

      <p className="font-medium font-jack text-[22px] xl:text-[35px] text-center mx-11 bg-gradient-to-r from-white to-grey1 bg-clip-text text-transparent tracking-tight">
        Commence a gagner de l'argent
      </p>
      <p className="font-jak text-[10px] xl:text-[14px] text-white opacity-50 font-medium mt-1">
        Rejoins le Telegram et commence a gagner de l’argent
      </p>

      <a
        href="https://t.me/DAVOTRADING" // link to your Telegram channel
        target="_blank"
        rel="noopener noreferrer"
        className="group relative mt-10 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
      >
        <div className="bg-grey3 opacity-35 rounded-xl h-9 w-36"></div>
        <Image
          className="absolute top-[6px] left-[24px] opacity-85"
          src="/telegram-logo.png"
          alt="Telegram"
          width={20}
          height={20}
        />
        <p className="absolute top-[6px] left-[52px] font-jak font-extrabold text-white opacity-80 text-[14px]">
          Telegram
        </p>
      </a>
    </div>
  );
}
