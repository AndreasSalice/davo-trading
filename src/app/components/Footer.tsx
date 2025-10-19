"use client";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative w-full px-6 lg:px-20 py-10 text-white overflow-hidden">
      {/* Background gradient overlay at bottom */}
      <div className="absolute h-300 inset-x-0 bg-gradient-to-t from-[#7A7AEA] to-[#04071000] pointer-events-none"></div>

      {/* Content */}
      <div className="relative flex flex-row justify-between items-start gap-8 z-10">
        {/* Left side: Logo and brand */}
        <div className="flex flex-col items-start gap-2">
          <a href="#home">
            <div className="flex items-center gap-2">
              <Image
                src="/davo.png"
                alt="Logo"
                width={35}
                height={35}
                className="opacity-80"
              />
              <span className="font-jak font-semibold text-[10px] tracking-widest opacity-90">
                DAVO TRADING
              </span>
            </div>
            <p className="font-jak text-[10px] mt-2 opacity-70">
              © 2025 Davo Trading - Tous droits réservés.
            </p>
          </a>
        </div>

        {/* Right side: Links */}
        <div className="flex flex-row gap-16 text-[11px] font-noto font-medium items-start">
          {/* Left column of links */}
          <ul className="space-y-2 text-left opacity-75">
            <li>
              <a href="#home" className="hover:text-orange1 transition">
                Accueil
              </a>
            </li>
            <li>
              <a href="#apropos" className="hover:text-orange1 transition">
                À Propos
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-orange1 transition">
                Mes Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-orange1 transition">
                Contact
              </a>
            </li>
          </ul>

          {/* Right column of links */}
          <ul className="space-y-2 text-left mt-0 opacity-75">
            <li>
              <a
                href="https://t.me/yourtelegram"
                target="_blank"
                className="hover:text-orange1 transition"
              >
                Telegram
              </a>
            </li>
            <li>
              <a
                href="mailto:youremail@example.com"
                className="hover:text-orange1 transition"
              >
                Email
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-white flex flex-col items-center text-center mt-10 opacity-75 mx-3">
        <p className="font-jak text-[10px] md:text-[11px] mt-2  ">
          Le trading comporte un risque élevé de perte en capital, et il est de
          la responsabilité de chaque utilisateur d'evaluer ses propres
          décisions avant toute prise de position sur le marché.{" "}
        </p>
        <p className="font-jak text-[10px] md:text-[11px] mt-2 ">
          Les performances passées ne garantissent pas les résultats futurs. En
          utilisant ce site ou en suivant les signaux, vous reconnaissez
          comprendre les risques liés au trading et acceptez de le faire sous
          votre entière responsabilité.{" "}
        </p>
      </div>
    </footer>
  );
}
