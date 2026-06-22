import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Phone, Copy, Check } from 'lucide-react'

const WhatsappIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.729-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.59 2.052 14.124 1.07 11.5 1.07c-5.44 0-9.865 4.371-9.869 9.802-.001 1.77.475 3.497 1.38 5.025L2.006 21.65l6.05-1.586zm11.567-5.282c-.313-.156-1.854-.915-2.131-1.016-.277-.1-.478-.15-.678.15-.2.3-.778.98-.954 1.18-.176.2-.352.226-.665.07-1.32-.656-2.18-1.127-3.03-2.583-.1-.176.1-.164.294-.556.096-.2.048-.372-.024-.522-.072-.15-.678-1.634-.93-2.24-.244-.587-.492-.507-.678-.517-.172-.008-.37-.01-.567-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.854-.759 2.115-1.453.262-.693.262-1.288.185-1.402-.077-.115-.277-.186-.59-.342z"/>
  </svg>
)

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [copied, setCopied] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleCopyPhone = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    navigator.clipboard.writeText('08052589663')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Inquiry from ${formData.firstName} ${formData.lastName}`)
    const body = encodeURIComponent(
      `First Name: ${formData.firstName}\nLast Name: ${formData.lastName}\nEmail: ${formData.email}\nPhone Number: ${formData.phone}\n\nMessage:\n${formData.message}`
    )
    window.location.href = `mailto:Support@flairtechlabs.com?subject=${subject}&body=${body}`
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[500px] bg-white dark:bg-[#080E1D] border-border dark:border-[#C6A87C]/30 text-foreground">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-foreground dark:text-white">
            Contact Us
          </DialogTitle>
          <DialogDescription className="text-muted-foreground dark:text-gray-400">
            Reach out via email, phone call, or send us a WhatsApp message directly.
          </DialogDescription>
        </DialogHeader>

        {/* Quick Contact Row */}
        <div className="grid grid-cols-2 gap-4 py-2 border-b border-border/50 dark:border-[#C6A87C]/20 mb-2">
          <a
            href="https://wa.me/2348052589663"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-white bg-[#25D366] hover:bg-[#20ba59] transition-all duration-200 shadow-md font-medium text-sm text-center"
          >
            <WhatsappIcon className="w-5 h-5" />
            WhatsApp
          </a>
          <div className="flex items-center gap-1 bg-slate-100 dark:bg-white/10 rounded-xl border border-border dark:border-transparent overflow-hidden shadow-md">
            <a
              href="tel:08052589663"
              className="flex-1 flex items-center justify-center gap-2 py-3 pl-4 pr-2 text-black dark:text-white hover:bg-slate-200 dark:hover:bg-white/20 transition-all duration-200 font-medium text-xs sm:text-sm text-center"
            >
              <Phone className="w-4 h-4 text-[#C6A87C] dark:text-[#FFC078]" />
              08052589663
            </a>
            <button
              onClick={handleCopyPhone}
              className="px-3 py-3 border-l border-border/50 dark:border-white/10 text-muted-foreground hover:text-black dark:hover:text-white transition-colors"
              title="Copy Phone Number"
            >
              {copied ? (
                <Check className="w-4 h-4 text-green-500" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-xs font-semibold text-muted-foreground dark:text-gray-300">
                First Name
              </Label>
              <Input
                id="firstName"
                name="firstName"
                placeholder="John"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="bg-slate-50 dark:bg-black/40 border-border dark:border-[#C6A87C]/20 focus-visible:ring-[#FFC078] focus-visible:border-[#FFC078]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-xs font-semibold text-muted-foreground dark:text-gray-300">
                Last Name
              </Label>
              <Input
                id="lastName"
                name="lastName"
                placeholder="Doe"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="bg-slate-50 dark:bg-black/40 border-border dark:border-[#C6A87C]/20 focus-visible:ring-[#FFC078] focus-visible:border-[#FFC078]"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-xs font-semibold text-muted-foreground dark:text-gray-300">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-slate-50 dark:bg-black/40 border-border dark:border-[#C6A87C]/20 focus-visible:ring-[#FFC078] focus-visible:border-[#FFC078]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-xs font-semibold text-muted-foreground dark:text-gray-300">
              Phone Number
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="08052589663"
              value={formData.phone}
              onChange={handleChange}
              required
              className="bg-slate-50 dark:bg-black/40 border-border dark:border-[#C6A87C]/20 focus-visible:ring-[#FFC078] focus-visible:border-[#FFC078]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-xs font-semibold text-muted-foreground dark:text-gray-300">
              Message
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Write your message here..."
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="bg-slate-50 dark:bg-black/40 border-border dark:border-[#C6A87C]/20 focus-visible:ring-[#FFC078] focus-visible:border-[#FFC078] resize-none"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-[#FFC078] hover:bg-[#FFB96B] text-black font-semibold py-3 rounded-xl transition duration-200 mt-2 hover:shadow-lg"
          >
            Send Email
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
