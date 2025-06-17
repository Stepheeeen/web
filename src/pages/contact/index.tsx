"use client"

import { useState, useEffect } from "react"
import { Mail, Phone, MessageCircle, Clock, Users, Newspaper, Send, ChevronDown } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [selectedCountryCode, setSelectedCountryCode] = useState("+234")
  const [selectedSubject, setSelectedSubject] = useState("")
  const [isSubjectDropdownOpen, setIsSubjectDropdownOpen] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const countryCodes = [
    { code: "+234", country: "Nigeria" },
    { code: "+1", country: "US/Canada" },
    { code: "+44", country: "UK" },
    { code: "+91", country: "India" },
  ]

  const subjects = [
    "General Inquiry",
    "Technical Support",
    "Sales Question",
    "Partnership",
    "Media Inquiry",
    "Feedback",
  ]

  return (
    <>
      <Navbar styling={"z-10"} theme={"dark"} />

      <div className="min-h-screen bg-gradient-to-br from-[#f0f4fc] to-[#e8f0fe] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your messaging experience? We're here to help you every step of the way.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Left Column - Contact Information */}
            <div
              className={`lg:col-span-1 space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
            >
              {/* Contact Details Card */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border-0 p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <a
                        href="mailto:flairtechhq@gmail.com"
                        className="text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        flairtechhq@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <a href="tel:+2348052589663" className="text-gray-700 hover:text-gray-900 transition-colors">
                        +(234) 805 258 9663
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-purple-100 p-3 rounded-full">
                      <MessageCircle className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Support</p>
                      <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors underline">
                        Customer Support Portal
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Support Services */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900">How We Can Help</h3>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-2 rounded-lg mt-1">
                      <Clock className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">24/7 Customer Support</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Our dedicated support team is available around the clock to address any concerns or queries you
                        may have.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-2 rounded-lg mt-1">
                      <Users className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Feedback & Suggestions</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        We value your feedback and are continuously working to improve FlairTech. Your input shapes our
                        future.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 p-2 rounded-lg mt-1">
                      <Newspaper className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Media Inquiries</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        For press inquiries and media-related questions, reach out to us at{" "}
                        <a href="mailto:flairtechhq@gmail.com" className="text-blue-600 hover:text-blue-700">
                          flairtechhq@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div
              className={`lg:col-span-2 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl border-0 p-8">
                <div className="text-center pb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
                  <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours</p>
                </div>

                <form className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                        First Name *
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        placeholder="Enter your first name"
                        className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 outline-none transition-all"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                        Last Name *
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        placeholder="Enter your last name"
                        className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 outline-none transition-all"
                        required
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 outline-none transition-all"
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <div className="flex gap-3">
                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                          className="w-24 h-12 px-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 outline-none transition-all flex items-center justify-between bg-white"
                        >
                          <span className="text-sm">{selectedCountryCode}</span>
                          <ChevronDown className="h-4 w-4 text-gray-400" />
                        </button>
                        {isDropdownOpen && (
                          <div className="absolute top-full left-0 mt-1 w-32 bg-white border border-gray-200 rounded-xl shadow-lg z-10">
                            {countryCodes.map((item) => (
                              <button
                                key={item.code}
                                type="button"
                                onClick={() => {
                                  setSelectedCountryCode(item.code)
                                  setIsDropdownOpen(false)
                                }}
                                className="w-full px-3 py-2 text-left text-sm hover:bg-gray-50 first:rounded-t-xl last:rounded-b-xl"
                              >
                                {item.code}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        className="flex-1 h-12 px-4 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                      Subject *
                    </label>
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setIsSubjectDropdownOpen(!isSubjectDropdownOpen)}
                        className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 outline-none transition-all flex items-center justify-between bg-white text-left"
                      >
                        <span className={`text-sm ${selectedSubject ? "text-gray-900" : "text-gray-500"}`}>
                          {selectedSubject || "Select a subject"}
                        </span>
                        <ChevronDown className="h-4 w-4 text-gray-400" />
                      </button>
                      {isSubjectDropdownOpen && (
                        <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-200 rounded-xl shadow-lg z-10">
                          {subjects.map((subject) => (
                            <button
                              key={subject}
                              type="button"
                              onClick={() => {
                                setSelectedSubject(subject)
                                setIsSubjectDropdownOpen(false)
                              }}
                              className="w-full px-4 py-3 text-left text-sm hover:bg-gray-50 first:rounded-t-xl last:rounded-b-xl"
                            >
                              {subject}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      placeholder="Tell us how we can help you..."
                      className="w-full min-h-32 px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 outline-none transition-all resize-none"
                      maxLength={500}
                      required
                    />
                    <p className="text-xs text-gray-500 text-right">Maximum 500 characters</p>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-[1.02] shadow-lg flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>

                  {/* Terms */}
                  <p className="text-xs text-center text-gray-500 leading-relaxed">
                    By submitting this form, you agree to our{" "}
                    <a href="#" className="text-blue-600 hover:text-blue-700 font-medium underline">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-blue-600 hover:text-blue-700 font-medium underline">
                      Privacy Policy
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>

          {/* Bottom CTA Section */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Our support team is standing by to help you resolve any issues or answer questions about FlairTech.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-xl transition-all flex items-center justify-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-3 rounded-xl transition-all flex items-center justify-center space-x-2">
                  <MessageCircle className="w-4 h-4" />
                  <span>Live Chat</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

