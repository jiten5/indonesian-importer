'use client'

import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Facebook, Twitter, Linkedin, Youtube, Mail } from 'lucide-react'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'

interface FooterLink {
  label: string
  href: string
}

interface FooterSection {
  title: string
  links: FooterLink[]
}

interface SocialLink {
  platform: 'facebook' | 'twitter' | 'linkedin' | 'youtube'
  href: string
}

interface FooterProps {
  logo?: string
  logoText?: string
  tagline?: string
  sections: FooterSection[]
  socialLinks?: SocialLink[]
  showNewsletter?: boolean
  className?: string
}

const Footer: React.FC<FooterProps> = ({
  logo,
  logoText = 'Trade Intelligence',
  tagline = 'Empowering global trade decisions with real-time data intelligence',
  sections,
  socialLinks = [],
  showNewsletter = false,
  className
}) => {
  const socialIcons = {
    facebook: Facebook,
    twitter: Twitter,
    linkedin: Linkedin,
    youtube: Youtube
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className={cn('bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800', className)}>
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              {logo ? (
                <img src={logo} alt={logoText} className="h-8" />
              ) : (
                <span className="text-2xl font-bold text-gradient">{logoText}</span>
              )}
            </Link>
            <p className="text-sm lg:text-base text-neutral-600 dark:text-neutral-400 mb-6 max-w-xs lg:max-w-sm leading-relaxed">
              {tagline}
            </p>
            
            {/* Social Links */}
            {socialLinks.length > 0 && (
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = socialIcons[social.platform]
                  return (
                    <a
                      key={social.platform}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center rounded-lg bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 transition-colors"
                      aria-label={social.platform}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  )
                })}
              </div>
            )}
          </div>

          {/* Navigation Sections */}
          {sections.map((section) => (
            <div key={section.title} className="lg:col-span-2">
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* ...existing code... */}
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-neutral-200 dark:border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            © {currentYear} {logoText}. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center md:justify-end gap-6">
            <Link
              href="/privacy"
              className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors hover:underline"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors hover:underline"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors hover:underline"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

