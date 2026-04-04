"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import morningglory from "../public/flowers/morning-glory.png";
import mexicanaster from "../public/flowers/morning-glory.png";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "resume",
        "skills",
        "projects",
        "certificates",
        "contact",
      ];

      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#resume", label: "Resume" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#certificates", label: "Certificates" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    // <nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
    <nav className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-4 pt-3 sm:pt-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-blue-100 dark:border-slate-800 rounded-2xl md:rounded-full shadow-lg transition-all">
          <div className="flex justify-between items-center h-16 px-6 md:px-8">
            {/* Brand */}
            <Link
              href="#home"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 text-xl font-bold"
            >
              {/* <Image src={morningglory} alt="flower" width={24} height={24} /> */}
              <Image src={mexicanaster} alt="flower" width={24} height={24} />
              <span className="bg-gradient-to-r from-blue-500 to-sky-400 bg-clip-text text-transparent">
                S K
              </span>

              {/* <Image src={mexicanaster} alt="flower" width={24} height={24} /> */}
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-md font-medium transition-all duration-300 ${
                    activeSection === link.href.slice(1)
                      ? "text-blue-600"
                      : "text-gray-600 dark:text-gray-300 hover:text-blue-500"
                  }`}
                >
                  {link.label}

                  {/* Active underline animation */}
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 bg-gradient-to-r from-blue-500 to-sky-400 transition-all duration-300 ${
                      activeSection === link.href.slice(1)
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              ))}

              {/* Dark Mode Toggle */}
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="ml-4 p-2 rounded-full cursor-pointer bg-blue-50 dark:bg-slate-800 hover:scale-110 transition-all"
                >
                  {theme === "dark" ? (
                    <Sun className="w-4 h-4 text-blue-500" />
                  ) : (
                    <Moon className="w-4 h-4 text-blue-500" />
                  )}
                </button>
              )}
            </div>

            {/* Mobile */}
            <div className="md:hidden flex items-center space-x-2">
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="p-2 rounded-full bg-blue-50 dark:bg-slate-800"
                >
                  {theme === "dark" ? (
                    <Sun className="w-4 h-4 text-blue-500" />
                  ) : (
                    <Moon className="w-4 h-4 text-blue-500" />
                  )}
                </button>
              )}

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-full bg-blue-50 dark:bg-slate-800"
              >
                {isOpen ? (
                  <X className="w-5 h-5 text-blue-600" />
                ) : (
                  <Menu className="w-5 h-5 text-blue-600" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden px-6 pb-4 pt-2 border-t border-blue-100 dark:border-slate-800">
              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-sm font-medium transition ${
                      activeSection === link.href.slice(1)
                        ? "text-blue-600"
                        : "text-gray-600 dark:text-gray-300 hover:text-blue-500"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
