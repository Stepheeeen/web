'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">F</span>
            </div>
            <span className="font-bold text-foreground text-xl">Flair tech</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-foreground hover:text-primary transition">Services</a>
            <a href="#products" className="text-foreground hover:text-primary transition">Products</a>
            <a href="#team" className="text-foreground hover:text-primary transition">Team</a>
            <a href="#contact" className="text-foreground hover:text-primary transition">Contact</a>
          </nav>

          {/* CTA Button and Theme Toggle */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-foreground"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-border">
            <nav className="flex flex-col gap-4 py-4">
              <a href="#services" className="text-foreground hover:text-primary transition">Services</a>
              <a href="#products" className="text-foreground hover:text-primary transition">Products</a>
              <a href="#team" className="text-foreground hover:text-primary transition">Team</a>
              <a href="#contact" className="text-foreground hover:text-primary transition">Contact</a>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mt-2">
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
