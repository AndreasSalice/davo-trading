"use client";
import { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <nav className="">
      {/* Background gradient behind navbar items */}
      <div className="absolute h-50 inset-0 bg-gradient-to-b from-[rgba(0,0,0,.8)] to-[#2F00FF00] pointer-events-none"></div>

      {/* Nav content */}
      <div className="relative flex items-center justify-between px-6 pt-6">
        {/* Logo */}
        <a href="#home">
          <div className="flex items-center gap-2 lg:scale-120">
            <Image
              className="h-6 opacity-70 mt-2"
              width={35}
              height={1}
              src="/davo.png"
              alt="Logo"
            />
            <span className="font-jak font-semibold opacity-90 text-[9px] bg-gradient-to-r from-white to-grey1 bg-clip-text text-transparent tracking-tighter mt-3">
              DAVO TRADING
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <ul className="hidden sm:flex gap-6 text-[10px] font-jak font-regular text-white pt-1 opacity-75">
          <li>
            <a href="#apropos" className="hover:text-orange1">
              À Propos
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-orange1">
              Nos Services
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-orange1">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="p-1 cursor-pointer sm:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <X className="h-6 w-6 text-white opacity-75" />
          ) : (
            <Menu className="h-6 w-6 text-white opacity-75" />
          )}
        </button>

        {/* Mobile Dropdown */}
        {open && (
          <div
            ref={dropdownRef}
            className="absolute top-14 right-6 bg-white opacity-95 rounded-lg shadow-lg border border-gray-200 p-4 w-40 z-50 sm:hidden"
          >
            <ul className="space-y-2 text-[12px] font-jak font-semibold text-black1">
              <li>
                <a
                  href="#apropos"
                  className="block hover:text-orange1"
                  onClick={() => setOpen(false)}
                >
                  À Propos
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="block hover:text-orange1"
                  onClick={() => setOpen(false)}
                >
                  Nos Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block hover:text-orange1"
                  onClick={() => setOpen(false)}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
