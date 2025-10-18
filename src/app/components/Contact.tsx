"use client";

import React from "react";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // animation runs once
      easing: "ease-in-out",
    });
  }, []);
  return (
    <div
      id="contact"
      className="mt-15 mb-20 flex flex-col justify-center items-center w-screen relative"
    >
      <div
        data-aos="fade-up"
        className="flex flex-col justify-center items-center"
      >
        {/* Title */}
        <p className="font-jak font-extrabold opacity-75 text-[24px] bg-gradient-to-r from-white to-grey1 bg-clip-text text-transparent tracking-tighter mt-3">
          CONTACT
        </p>

        {/* Description */}
        <p className="font-jak font-regular leading-6 text-white text-[9.5px] lg:text-[11px] max-w-80 sm:max-w-90 md:max-w-110 lg:max-w-140 opacity-50 mt-2 lg:mt-4 text-center">
          Rejoins mon canal Telegram, où je partage mes analyses, mes signaux en
          temps réel et mes conseils pour trader l’or avec efficacité. Tu y
          trouveras également des retours d’expérience, des résultats
          hebdomadaires, et une communauté active de traders passionnés.
        </p>

        {/* Telegram Button */}
        <a
          href="https://t.me/Davotradinggs" // link to your Telegram channel
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

        {/* Email Button */}
        <a
          href="mailto:Davotrading@protonmail.ch"
          className="group relative mt-5 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
        >
          <div className="bg-black-bg rounded-xl opacity-50 h-9 w-36 border-white border-[1px]"></div>
          <Image
            className="absolute top-[6px] left-[24px] opacity-65"
            src="/mail.png"
            alt="Email"
            width={20}
            height={20}
          />
          <p className="absolute top-[6px] left-[52px] font-jak font-extrabold text-white opacity-80 text-[14px]">
            Email
          </p>
        </a>

        {/* Decorative images */}
        <div>
          <Image
            className="absolute top-42 ml-30 opacity-85"
            src="/telegram-design.png"
            alt="Design"
            width={100}
            height={200}
          />

          <Image
            className="absolute ml-10 top-0 opacity-85"
            src="/ellipse-13.png"
            alt="Ellipse"
            width={400}
            height={200}
          />
        </div>
      </div>
    </div>
  );
}
