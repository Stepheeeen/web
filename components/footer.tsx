"use client";

import React from "react";
import { Linkedin, Twitter, Github } from "lucide-react";
import LogoFullDark from '@/public/assets/logo/logo-full-dark.png'
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1c1c1c] text-gray-400 px-6 md:px-12 pt-20 pb-10">

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Image
              src={LogoFullDark}
              alt="Flair Tech Logo"
              className="w-auto h-14 "
            />
          </div>

          <p className="text-sm leading-relaxed max-w-xs">
            Transforming businesses through innovative technology solutions.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-medium mb-6">Services</h4>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-white cursor-pointer">Software Development</li>
            <li className="hover:text-white cursor-pointer">Cloud Solutions</li>
            <li className="hover:text-white cursor-pointer">Industry Apps</li>
            <li className="hover:text-white cursor-pointer">Blockchain</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white font-medium mb-6">Company</h4>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h4 className="text-white font-medium mb-6">Connect</h4>
          <div className="flex gap-4">
            <Linkedin className="w-5 h-5 hover:text-white cursor-pointer" />
            <Twitter className="w-5 h-5 hover:text-white cursor-pointer" />
            <Github className="w-5 h-5 hover:text-white cursor-pointer" />
          </div>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-16 pt-6 text-center text-sm text-gray-500">
        © 2026 Flair Technologies. All rights reserved.
      </div>

    </footer>
  );
}
