"use client";

import Image from "next/image";
import TradingViewWidget from "./TradingViewWidget";
import MiniChart from "./MiniChart";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // animation runs once
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="">
      <div
        id="home"
        className="flex justify-center items-center flex-col mt-4 relative "
      >
        <Image
          className="absolute z-[-1] -left-20 sm:-left-10 lg:left-20"
          src="/ellipse-1.png"
          alt="Logo"
          width={400}
          height={200}
        />

        <Image
          className="absolute z-[-1] top-20 left-10 sm:left-30 lg:left-70"
          src="/ellipse-2.png"
          alt="Logo"
          width={400}
          height={200}
        />

        <Image
          className="absolute z-[-1] top-100"
          src="/ellipse-3.svg"
          alt="Logo"
          width={400}
          height={200}
        />

        <Image
          className="absolute z-[-1] top-100"
          src="/ellipse-6.svg"
          alt="Logo"
          width={400}
          height={200}
        />
        <div data-aos="fade-in" className="flex flex-col items-center">
          <Image
            className="opacity-70"
            src="/davo.png"
            alt="Logo"
            width={50}
            height={200}
          />

          <p className="font-jak font-semibold opacity-75 text-[14px] bg-gradient-to-r from-white to-grey1 bg-clip-text text-transparent tracking-tighter mt-3">
            DAVO TRADING
          </p>

          <p className="font-medium font-jack text-[28px] lg:text-[38px] text-center mx-11 bg-gradient-to-r from-white to-grey1 bg-clip-text text-transparent tracking-tight leading-7.5 lg:leading-10 max-w-120 lg:max-w-150 lg:mt-3">
            Boostez vos gains en XAUUSD avec un trading précis et efficace
          </p>

          <div
            data-aos="fade-in"
            className="flex text-[8px] lg:text-[11px] font-medium text-white mt-4 lg:mt-6 gap-x-6 lg:gap-x-16 opacity-80"
          >
            <p>Performance optimale</p>
            <p>Stratégies fiables</p>
            <p>Accompagnement pro</p>
            <p>Croissance durable</p>
          </div>

          <a
            href="https://t.me/+bMVroc3B2-plYmVk"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-[#4E505D] h-12 px-5 rounded-3xl mt-9 md:mt-12 hover:scale-105 transition-transform duration-300 ease-in-out transform-gpu"
          >
            <Image
              src="/telegram-logo.png"
              alt="Telegram Logo"
              width={20}
              height={20}
            />
            <span className="ml-3 font-jak font-extrabold text-white text-[14px]">
              Rejoins le Telegram
            </span>
          </a>

          <p className="font-jak text-[10px] text-white opacity-50 font-medium mt-3">
            Plus de 10k followers!
          </p>
        </div>
      </div>

      <Image
        data-aos="fade-right"
        className="absolute top-103 sm:top-98 md:top-83 lg:top-95  scale-96 sm:scale-100 md:scale-110 lg:scale-120 xl:scale-135 sm:left-5 md:left-10 lg:left-25 xl:left-45 2xl:left-72"
        src="/profile-target.svg"
        alt=""
        width={200}
        height={200}
      />

      <Image
        data-aos="fade-right"
        className="absolute top-92 sm:top-88 md:top-70 lg:top-82 xl:top-80 sm:scale-108 md:scale-112 xl:scale-130  sm:left-5 lg:left-16 xl:left-30 2xl:left-52"
        src="/xauusd.svg"
        alt=""
        width={100}
        height={200}
      />

      <Image
        data-aos="fade-right"
        className="absolute top-[371px] sm:top-[354px] md:top-[283px] lg:top-[331px] xl:top-[323px] left-5.5 sm:left-10.5 lg:left-21 xl:left-34 2xl:left-56 opacity-70"
        src="/xauusd-logo.png"
        alt=""
        width={12}
        height={200}
      />

      <div
        data-aos="fade-left"
        className="w-90 absolute -right-21 sm:-right-17 md:-right-12 lg:-right-0 xl:right-20 2xl:right-48 top-76 md:top-58 lg:top-76 scale-50 sm:scale-55 md:scale-60 lg:scale-65 xl:scale-75 rounded-2xl overflow-hidden opacity-70"
      >
        <MiniChart></MiniChart>
      </div>

      <div
        data-aos="fade-up"
        className="flex justify-center  mt-4 md:-mt-5 lg:-mt-14 -ml-48 md:-ml-56 lg:-ml-66 xl:-ml-70"
      >
        <div className="scale-40 sm:scale-45 md:scale-50 lg:scale-55 xl:scale-60 w-120 opacity-70 lg:opacity-90">
          <TradingViewWidget />
        </div>
      </div>
    </div>
  );
}
