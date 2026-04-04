"use client";

import Link from "next/link";
import { Github, Linkedin, Facebook, Instagram } from "lucide-react";
import { FaTelegram, FaTiktok } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/sun kimly", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/Sun Kimly",
      label: "LinkedIn",
    },
    {
      icon: Facebook,
      href: "https://facebook.com/Millie Millie",
      label: "Facebook",
    },
    {
      icon: FaTiktok,
      href: "https://www.tiktok.com/Alibaba",
      label: "TikTok",
    },
    {
      icon: FaTelegram,
      href: "https://t.me/@Kimly_CS26",
      label: "Telegram",
    },
    {
      icon: Instagram,
      href: "https://instagram.com/Millie Millie",
      label: "Instagram",
    },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
          {/* Left - Info */}
          <div>
            <h2
              className="text-2xl font-bold mb-2 
 bg-linear-to-r from-blue-500 to-sky-400 bg-clip-text text-transparent
  "
            >
              Sun Kimly
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md ">
              App Developer passionate about building modern, responsive, and
              user-friendly applications.
            </p>
          </div>

          {/* Right - Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-100 hover:text-primary transition-colors p-2 rounded-lg hover:bg-slate-800"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 my-8" />

        {/* Bottom Section */}
        <div className="text-center">
          <p className="text-sm text-slate-400 ">
            © {currentYear}{" "}
            <span className="bg-gradient-to-r from-blue-500 to-sky-400 bg-clip-text text-transparent">
              Sun Kimly
            </span>{" "}
            | Built with Dart & Flutter
          </p>
        </div>
      </div>
    </footer>
  );
}
