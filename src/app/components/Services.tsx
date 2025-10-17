import React from "react";
import Image from "next/image";

export default function Services() {
  return (
    <div
      id="services"
      className="flex flex-col justify-center items-center mt-15 lg:mt-20"
    >
      <p className="font-jak font-extrabold opacity-75 text-[24px] bg-gradient-to-r from-white to-grey1 bg-clip-text text-transparent tracking-tighter mt-3">
        NOS SERVICES
      </p>

      <Image
        className="hidden lg:flex -mt-30"
        src="/Services-wide.png"
        alt="Logo"
        width={1100}
        height={200}
      />

      <div className=" flex flex-col justify-center items-center relative lg:hidden">
        <Image
          className="absolute top-10  left-5"
          src="/ellipse-8.png"
          alt="Logo"
          width={550}
          height={200}
        />

        <Image
          className="absolute top-70"
          src="/ellipse-9.png"
          alt="Logo"
          width={500}
          height={200}
        />

        <Image
          className="absolute top-150"
          src="/ellipse-10.png"
          alt="Logo"
          width={400}
          height={200}
        />

        <Image
          className="absolute top-190"
          src="/ellipse-12.png"
          alt="Logo"
          width={400}
          height={200}
        />

        <div className="relative">
          <div className="bg-[#E8E8E8] h-60 w-72 opacity-5 rounded-2xl mt-10"></div>
          <p className="font-jak font-extrabold opacity-70 text-[16px] bg-gradient-to-r from-white to-grey1 bg-clip-text text-transparent tracking-tighter -mt-56 ml-7">
            Signaux Précis
          </p>
          <p className="font-jak font-regular leading-5.5 text-white text-[9.5px] max-w-53 ml-7 opacity-50 mt-2">
            Des signaux fiables sur l’or (XAU/USD) basés sur une analyse
            technique solide et des années d’expérience. Chaque signal inclut
            entrée, objectifs et stop loss pour trader sereinement.
          </p>

          <Image
            className="-mt-6 ml-10"
            src="/service-1.png"
            alt="Logo"
            width={200}
            height={200}
          />
        </div>

        <div className="relative">
          <div className="bg-[#E8E8E8] h-60 w-72 opacity-5 rounded-2xl mt-4"></div>
          <p className="font-jak font-extrabold opacity-70 text-[16px] bg-gradient-to-r from-white to-grey1 bg-clip-text text-transparent tracking-tighter -mt-56 ml-7">
            Analyse Technique
          </p>
          <p className="font-jak font-regular leading-5.5 text-white text-[9.5px] max-w-56 ml-7 opacity-50 mt-2">
            Profitez d’une lecture experte des marchés, appuyée par des
            indicateurs précis et une compréhension approfondie des tendances de
            l’or. Cette expertise vous permet d’anticiper les mouvements clés et
            de prendre des décisions plus éclairées.
          </p>

          <Image
            className="-mt-35 ml-0 opacity-5"
            src="/service-2.png"
            alt="Logo"
            width={286}
            height={200}
          />
        </div>

        <div className="relative">
          <div className="bg-[#E8E8E8] h-60 w-72 opacity-5 rounded-2xl mt-4"></div>
          <p className="font-jak font-extrabold opacity-70 text-[16px] bg-gradient-to-r from-white to-grey1 bg-clip-text text-transparent tracking-tighter -mt-56 ml-7">
            Consulting Stratégique
          </p>
          <p className="font-jak font-regular leading-5.5 text-white text-[9.5px] max-w-56 ml-7 opacity-50 mt-2">
            Bénéficiez d’un accompagnement personnalisé, que vous soyez trader,
            investisseur ou porteur de projet. Je vous aide à structurer votre
            approche du marché, définir des objectifs clairs et adopter une
            gestion du risque professionnelle.
          </p>

          <Image
            className="-mt-50 ml-0 opacity-80"
            src="/service-3.png"
            alt="Logo"
            width={286}
            height={200}
          />
        </div>

        <div className="relative">
          <div className="bg-[#E8E8E8] h-60 w-72 opacity-5 rounded-2xl -mt-27"></div>
          <p className="font-jak font-extrabold opacity-70 text-[16px] bg-gradient-to-r from-white to-grey1 bg-clip-text text-transparent tracking-tighter -mt-56 ml-7">
            Performance & Confiance
          </p>
          <p className="font-jak font-regular leading-5.5 text-white text-[9.5px] max-w-56 ml-7 opacity-50 mt-2">
            Améliorez vos résultats grâce à des méthodes éprouvées et un suivi
            sur mesure. Mon objectif est de vous permettre d’optimiser vos
            performances tout en tradant dans un cadre sûr et confiant.
          </p>

          <Image
            className="-mt-11 ml-0 opacity-80"
            src="/service-4.png"
            alt="Logo"
            width={286}
            height={200}
          />
        </div>
      </div>
    </div>
  );
}
