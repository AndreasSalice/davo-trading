"use client";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Propos() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // animation runs once
      easing: "ease-in-out",
    });
  }, []);
  return (
    <div
      id="apropos"
      className="-mt-25 lg:-mt-15 xl:-mt-5 ml-7 sm:-ml-12 md:-ml-20 lg:-ml-35 relative flex flex-col justify-items-center w-screen sm:flex-row sm:justify-center"
    >
      <Image
        className="absolute z-[-1] -right-30  top-30"
        src="/ellipse-4.svg"
        alt="Logo"
        width={550}
        height={200}
      />

      <Image
        className="absolute z-[-1] top-20 -left-40 md:-left-10"
        src="/ellipse-5.svg"
        alt="Logo"
        width={400}
        height={200}
      />

      <div>
        <p className="font-jak font-extrabold opacity-75 text-[24px] bg-gradient-to-r from-white to-grey1 bg-clip-text text-transparent tracking-tighter mt-3">
          À PROPOS
        </p>

        <div className="mt-6">
          <div className="bg-grey2 opacity-20 rounded-4xl h-36 w-78 md:w-85 xl:w-95"></div>
          <p className="font-jak leading-6.5 text-white text-[9.5px] xl:text-[11px] max-w-66 md:max-w-75 xl:max-w-85 -mt-31.5 ml-7 opacity-70">
            Je suis Davo,{" "}
            <span className="font-extrabold">trader professionnel</span>{" "}
            spécialisé sur l’or (XAU/USD). Mon objectif est de vous aider à
            comprendre, maîtriser et tirer profit des mouvements du marché de
            l’or, grâce à ma méthode claire, structurée et éprouvée.
          </p>

          <p className="font-jak leading-6.5 text-white text-[9.5px] xl:text-[11px] max-w-68 md:max-w-82 xl:max-w-94 ml-2 opacity-70 mt-12 xl:mt-15">
            J’ai commencé le trading en 2017, en testant mes premières
            stratégies sur un compte démo. Au fil des années, j’ai tout appris
            par moi-même, en observant le marché et en{" "}
            <span className="font-extrabold">
              perfectionnant mes analyses jour après jour.
            </span>{" "}
          </p>

          <p className="font-jak leading-6.5 text-white text-[9.5px] xl:text-[11px] max-w-48 md:max-w-83 xl:max-w-96 ml-2 opacity-70 mt-8 xl:mt-10">
            Aujourd’hui, je suis spécialisé dans le trading de l’or (XAU/USD),
            un actif que j’étudie et{" "}
            <span className="font-extrabold">maîtrise en profondeur.</span>{" "}
            Depuis plusieurs années, j’aide ma communauté sur mon canal
            Telegram, où je partage des signaux précis et cohérents. En 2022,
            j’ai partagé plus de 750 positions, dont 740 ont été gagnantes,
            preuve de la fiabilité et de la discipline de ma méthode.
          </p>

          <p className="font-jak leading-6.5 text-white text-[9.5px] xl:text-[11px] max-w-68 md:max-w-82 xl:max-w-95 ml-2 opacity-70 mt-8">
            Ma mission est de transmettre{" "}
            <span className="font-extrabold">mes signaux et analyses</span> les
            plus précis, pour permettre à chacun de profiter pleinement des
            meilleures opportunités sur le marché de l’or.
          </p>
        </div>
      </div>
      <Image
        data-aos="fade-left"
        className="absolute top-74 md:top-45 right-2 md:right-15 lg:right-36 xl:right-65  opacity-70 z-[-1] sm:flex sm:justify-center md:scale-110 lg:scale-125 xl:scale-160"
        src="/screenphone-mobile.png"
        alt="Logo"
        width={185}
        height={200}
      />
    </div>
  );
}
