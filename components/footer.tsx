"use client";

import React from "react";
import { Linkedin, Github, Instagram } from "lucide-react";
import LogoFullDark from "@/public/assets/logo/logo-full-dark.png";
import Image from "next/image";

const TiktokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#1c1c1c] text-gray-400 px-6 md:px-12 pt-24 pb-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-[2fr_1fr_1fr] gap-16 md:gap-12">
        {/* Brand */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Image
              src={LogoFullDark}
              alt="Flair Tech Logo"
              className="w-auto h-14"
            />
          </div>

          <p className="text-base leading-relaxed max-w-sm">
            Transforming businesses through innovative technology solutions.
          </p>
          <div className="mt-8 text-base">
            <p className="text-white font-semibold text-lg mb-3">Office</p>
            <p className="leading-relaxed opacity-80 max-w-sm">
              NO. 31, ABIGAIL OLALEYE STREET OFF MARTIN'S, AKUTE, OGUN STATE,
              NIGERIA
            </p>
          </div>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-6">Company</h4>
          <ul className="space-y-4 text-base">
            <li className="hover:text-white transition-colors cursor-pointer">About Us</li>
            <li className="hover:text-white transition-colors cursor-pointer">Careers</li>
            <li className="hover:text-white transition-colors cursor-pointer">Blog</li>
            <li className="hover:text-white transition-colors cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-6">Connect</h4>
          <div className="flex gap-6">
            <a
              href="https://x.com/flairtechlabs"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (formerly Twitter)"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <XIcon className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/flair.tech.labs?igsh=MWR5aTF0ZzczNTY4cw=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://www.tiktok.com/@flairtechlabs"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <TiktokIcon className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-20 pt-8 text-center text-base text-gray-500">
        © 2026 Flair Technologies. All rights reserved.
      </div>
    </footer>
  );
}
