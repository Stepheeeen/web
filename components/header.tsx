'use client'

import { useEffect, useMemo, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import Image from 'next/image'
import LogoFullDark from '@/public/assets/logo/logo-full-dark.png'
import LogoFullLight from '@/public/assets/logo/logo-full-light.png'
import Logo from '@/public/assets/logo/logo-short.png'
import { useTheme } from 'next-themes'
import { GradientButton } from './gradient-button'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('services')

  const sectionIds = useMemo(
    () => ['services', 'products', 'team', 'contact'],
    [],
  )
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]?.target?.id) {
          setActiveLink(visible[0].target.id)
        }
      },
      {
        root: null,
        rootMargin: '-20% 0px -60% 0px',
        threshold: [0.1, 0.25, 0.5, 0.75],
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [sectionIds])

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-[#080E1D] border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src={theme === 'light' ? LogoFullLight : LogoFullDark}
              alt="Flair Tech Logo"
              className="w-auto h-14 hidden md:block"
            />
            <Image
              src={Logo}
              alt="Flair Tech Logo"
              className="w-auto h-10 block md:hidden"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#services"
              onClick={() => setActiveLink('services')}
              aria-current={activeLink === 'services' ? 'page' : undefined}
              className={`transition inline-flex items-center rounded-full px-3 py-1 text-sm ${activeLink === 'services'
                ? 'bg-black text-white dark:bg-white dark:text-black'
                : 'text-foreground hover:text-primary'
                }`}
            >
              Services
            </a>
            <a
              href="#products"
              onClick={() => setActiveLink('products')}
              aria-current={activeLink === 'products' ? 'page' : undefined}
              className={`transition inline-flex items-center rounded-full px-3 py-1 text-sm ${activeLink === 'products'
                ? 'bg-black text-white dark:bg-white dark:text-black'
                : 'text-foreground hover:text-primary'
                }`}
            >
              About us
            </a>
            <a
              href="#contact"
              onClick={() => setActiveLink('contact')}
              aria-current={activeLink === 'contact' ? 'page' : undefined}
              className={`transition inline-flex items-center rounded-full px-3 py-1 text-sm ${activeLink === 'contact'
                ? 'bg-black text-white dark:bg-white dark:text-black'
                : 'text-foreground hover:text-primary'
                }`}
            >
              FAQs
            </a>
          </nav>

          {/* CTA Button and Theme Toggle */}
          <div className="hidden md:flex items-center gap-3">
            <Button className="bg-[#FFC078] hover:bg-[#FFB96B] rounded-full text-black text-sm">
              Get Started
            </Button>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-foreground"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-border">
            <nav className="flex flex-col gap-4 py-4">
              <a
                href="#services"
                onClick={() => setActiveLink('services')}
                aria-current={activeLink === 'services' ? 'page' : undefined}
                className={`transition inline-flex items-center rounded-full px-3 py-1 ${activeLink === 'services'
                  ? 'bg-black text-white dark:bg-white dark:text-black'
                  : 'text-foreground hover:text-primary'
                  }`}
              >
                Services
              </a>
              <a
                href="#products"
                onClick={() => setActiveLink('products')}
                aria-current={activeLink === 'products' ? 'page' : undefined}
                className={`transition inline-flex items-center rounded-full px-3 py-1 ${activeLink === 'products'
                  ? 'bg-black text-white dark:bg-white dark:text-black'
                  : 'text-foreground hover:text-primary'
                  }`}
              >
                Products
              </a>
              <a
                href="#team"
                onClick={() => setActiveLink('team')}
                aria-current={activeLink === 'team' ? 'page' : undefined}
                className={`transition inline-flex items-center rounded-full px-3 py-1 ${activeLink === 'team'
                  ? 'bg-black text-white dark:bg-white dark:text-black'
                  : 'text-foreground hover:text-primary'
                  }`}
              >
                Team
              </a>
              <a
                href="#contact"
                onClick={() => setActiveLink('contact')}
                aria-current={activeLink === 'contact' ? 'page' : undefined}
                className={`transition inline-flex items-center rounded-full px-3 py-1 ${activeLink === 'contact'
                  ? 'bg-black text-white dark:bg-white dark:text-black'
                  : 'text-foreground hover:text-primary'
                  }`}
              >
                Contact
              </a>
              <GradientButton className="px-8 py-6 text-lg dark:text-black">
                Get Started
              </GradientButton>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
