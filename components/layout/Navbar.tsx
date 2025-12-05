'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Menu, X, ChevronDown, Search, Database, BarChart3, Zap, Package, FileText, Target } from 'lucide-react'
import Button from '@/components/ui/Button'
import ThemeToggle from '@/components/ui/ThemeToggle'

interface NavLink {
  label: string
  href: string
  description?: string
  icon?: React.ReactNode
  items?: NavLink[]
  featured?: boolean
}

interface NavbarProps {
  logo?: string
  logoText?: string
  navigation: NavLink[]
  ctaText?: string
  ctaHref?: string
  className?: string
}

const Navbar: React.FC<NavbarProps> = ({
  logo,
  logoText = 'Trade Intelligence',
  navigation,
  ctaText = 'Book A Demo',
  ctaHref = '/signup',
  className
}) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [showBookDemoModal, setShowBookDemoModal] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  useEffect(() => {
    if (showBookDemoModal) {
      // Load Cal.com embed script
      const script = document.createElement('script')
      script.src = 'https://app.cal.com/embed/embed.js'
      script.async = true
      document.body.appendChild(script)
      
      return () => {
        document.body.removeChild(script)
      }
    }
  }, [showBookDemoModal])

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 dark:bg-neutral-900/95 backdrop-blur-xl shadow-lg border-b border-neutral-200/50 dark:border-neutral-800/50'
          : 'bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md',
        className
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
            {logo ? (
              <img src={logo} alt={logoText} className="h-7 lg:h-8" />
            ) : (
              <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">{logoText}</span>
            )}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 lg:gap-8">
            {navigation.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => item.items && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.items ? (
                  <button
                    className="flex items-center space-x-1 px-3 py-2 rounded-lg text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-all font-medium text-sm xl:text-base"
                  >
                    <span>{item.label}</span>
                    <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="px-3 py-2 rounded-lg text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-all font-medium text-sm xl:text-base inline-block"
                  >
                    {item.label}
                  </Link>
                )}

                {/* Mega Menu Dropdown */}
                {item.items && activeDropdown === item.label && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-auto bg-white dark:bg-neutral-800 rounded-xl shadow-2xl border border-neutral-200 dark:border-neutral-700 overflow-hidden animate-fade-in">
                    {item.label === 'Resources' ? (
                      // Simple dropdown for Resources
                      <div className="p-3 flex flex-col gap-1" style={{ minWidth: '200px' }}>
                        <Link
                          href="/about"
                          className="group/item flex items-start gap-3 px-3 py-3 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-700/50 transition-all duration-200"
                        >
                          <div className="flex-1 min-w-0">
                            <span className="font-semibold text-sm text-neutral-900 dark:text-white group-hover/item:text-primary-600 dark:group-hover/item:text-primary-400 transition-colors whitespace-nowrap">
                              About
                            </span>
                          </div>
                        </Link>
                        <Link
                          href="/contact"
                          className="group/item flex items-start gap-3 px-3 py-3 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-700/50 transition-all duration-200"
                        >
                          <div className="flex-1 min-w-0">
                            <span className="font-semibold text-sm text-neutral-900 dark:text-white group-hover/item:text-primary-600 dark:group-hover/item:text-primary-400 transition-colors whitespace-nowrap">
                              Contact
                            </span>
                          </div>
                        </Link>
                      </div>
                    ) : item.label === 'Products' ? (
                      // Single column layout for Products
                      <div className="p-3 flex flex-col gap-1" style={{ minWidth: '280px' }}>
                        {item.items.map((subItem, idx) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className={cn(
                              "group/item flex items-start gap-3 px-3 py-3 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-700/50 transition-all duration-200",
                              subItem.featured && "bg-gradient-to-r from-primary-50/50 to-secondary-50/50 dark:from-primary-900/20 dark:to-secondary-900/20 border border-primary-200 dark:border-primary-800"
                            )}
                            style={{ animationDelay: `${idx * 50}ms` }}
                          >
                            {subItem.icon && (
                              <div className={cn(
                                "flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 group-hover/item:scale-110",
                                subItem.featured 
                                  ? "bg-gradient-to-br from-primary-500 to-secondary-500 text-white" 
                                  : "bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 group-hover/item:bg-primary-100 dark:group-hover/item:bg-primary-900/30 group-hover/item:text-primary-600 dark:group-hover/item:text-primary-400"
                              )}>
                                {subItem.icon}
                              </div>
                            )}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2">
                                <span className="font-semibold text-sm text-neutral-900 dark:text-white group-hover/item:text-primary-600 dark:group-hover/item:text-primary-400 transition-colors whitespace-nowrap">
                                  {subItem.label}
                                </span>
                                {subItem.featured && (
                                  <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300">New</span>
                                )}
                              </div>
                              {subItem.description && (
                                <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-0.5 line-clamp-2">
                                  {subItem.description}
                                </p>
                              )}
                            </div>
                          </Link>
                        ))}
                      </div>
                    ) : (
                      // Multi-column layout for other dropdowns (Solutions)
                      <div className="p-4 grid grid-cols-3 gap-6" style={{ minWidth: '900px' }}>
                        {(() => {
                          const groups: any[][] = []
                          let currentGroup: any[] = []
                          
                          item.items.forEach((subItem) => {
                            if (subItem.label === '---') {
                              if (currentGroup.length > 0) {
                                groups.push(currentGroup)
                                currentGroup = []
                              }
                            } else {
                              currentGroup.push(subItem)
                            }
                          })
                          
                          if (currentGroup.length > 0) {
                            groups.push(currentGroup)
                          }
                          
                          return groups.map((group, groupIdx) => (
                            <div key={groupIdx} className="flex flex-col gap-2 min-w-[280px]">
                              {group.map((subItem, idx) => (
                                <Link
                                  key={subItem.label}
                                  href={subItem.href}
                                  className={cn(
                                    "group/item flex items-start gap-3 px-3 py-3 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-700/50 transition-all duration-200",
                                    subItem.featured && "bg-gradient-to-r from-primary-50/50 to-secondary-50/50 dark:from-primary-900/20 dark:to-secondary-900/20 border border-primary-200 dark:border-primary-800"
                                  )}
                                  style={{ animationDelay: `${(groupIdx * 3 + idx) * 50}ms` }}
                                >
                                  {subItem.icon && (
                                    <div className={cn(
                                      "flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 group-hover/item:scale-110",
                                      subItem.featured 
                                        ? "bg-gradient-to-br from-primary-500 to-secondary-500 text-white" 
                                        : "bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 group-hover/item:bg-primary-100 dark:group-hover/item:bg-primary-900/30 group-hover/item:text-primary-600 dark:group-hover/item:text-primary-400"
                                    )}>
                                      {subItem.icon}
                                    </div>
                                  )}
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2">
                                      <span className="font-semibold text-sm text-neutral-900 dark:text-white group-hover/item:text-primary-600 dark:group-hover/item:text-primary-400 transition-colors whitespace-nowrap">
                                        {subItem.label}
                                      </span>
                                      {subItem.featured && (
                                        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300">New</span>
                                      )}
                                    </div>
                                    {subItem.description && (
                                      <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-0.5 line-clamp-2">
                                        {subItem.description}
                                      </p>
                                    )}
                                  </div>
                                </Link>
                              ))}
                            </div>
                          ))
                        })()}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Search, CTA & Mobile Menu Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Button */}
            <button
              className="hidden md:flex items-center justify-center w-9 h-9 rounded-lg text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-primary-600 dark:hover:text-primary-400 transition-all"
              aria-label="Search"
              title="Search (⌘K)"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Theme Toggle */}
            <div className="hidden sm:block">
              <ThemeToggle />
            </div>

            {/* Login Link */}
            <Link 
              href="https://dashboard.exportgenius.in/" 
              className="hidden lg:flex items-center px-4 py-2 rounded-lg text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-primary-600 dark:hover:text-primary-400 transition-all font-medium text-sm"
            >
              Login
            </Link>

            {/* Try Free Button */}
            <Link href="https://dashboard.exportgenius.in/sign-up">
              <Button
                variant="outline"
                size="md"
                className="hidden lg:inline-flex border-2 border-primary-600 text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all"
              >
                Try Free
              </Button>
            </Link>

            {/* Book A Demo Button */}
            <Button
              variant="primary"
              size="md"
              className="hidden lg:inline-flex shadow-lg shadow-primary-500/20 hover:shadow-xl hover:shadow-primary-500/30 transition-all"
              onClick={() => setShowBookDemoModal(true)}
            >
              Book A Demo
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden flex items-center justify-center w-10 h-10 -mr-2 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-all"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 shadow-2xl animate-fade-in">
          <div className="container-custom py-4 max-h-[calc(100vh-4rem)] overflow-y-auto scrollbar-thin scrollbar-thumb-neutral-300 dark:scrollbar-thumb-neutral-700">
            {/* Search Bar Mobile */}
            <div className="mb-4 px-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-2.5 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Navigation Items */}
            <div className="space-y-1">
              {navigation.map((item, idx) => (
                <div key={item.label} style={{ animationDelay: `${idx * 50}ms` }} className="animate-slide-in">
                  {item.items ? (
                    <details className="group">
                      <summary className="flex items-center justify-between py-3 px-4 text-neutral-700 dark:text-neutral-300 font-medium cursor-pointer rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-all">
                        <span className="text-base">{item.label}</span>
                        <ChevronDown className="w-5 h-5 text-neutral-400 group-open:rotate-180 group-open:text-primary-600 dark:group-open:text-primary-400 transition-all duration-300" />
                      </summary>
                      <div className="mt-1 ml-3 pl-4 border-l-2 border-neutral-200 dark:border-neutral-700 space-y-1">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className="flex items-start gap-3 py-2.5 px-3 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-all group/subitem"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subItem.icon && (
                              <div className="flex-shrink-0 w-8 h-8 rounded-md bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-600 dark:text-neutral-400 group-hover/subitem:bg-primary-100 dark:group-hover/subitem:bg-primary-900/30 group-hover/subitem:text-primary-600 dark:group-hover/subitem:text-primary-400 transition-all">
                                {subItem.icon}
                              </div>
                            )}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2">
                                <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300 group-hover/subitem:text-primary-600 dark:group-hover/subitem:text-primary-400">
                                  {subItem.label}
                                </span>
                                {subItem.featured && (
                                  <span className="text-xs font-medium px-1.5 py-0.5 rounded bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300">New</span>
                                )}
                              </div>
                              {subItem.description && (
                                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5 line-clamp-1">
                                  {subItem.description}
                                </p>
                              )}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </details>
                  ) : (
                    <Link
                      href={item.href}
                      className="block py-3 px-4 text-base font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg transition-all"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Actions */}
            <div className="mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-800 space-y-2 px-2">
              <Link 
                href="https://dashboard.exportgenius.in/" 
                className="flex items-center justify-center py-2.5 px-4 text-neutral-700 dark:text-neutral-300 font-medium border border-neutral-300 dark:border-neutral-700 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all" 
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </Link>
              <Link 
                href="https://dashboard.exportgenius.in/sign-up" 
                className="block"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button
                  variant="outline"
                  size="md"
                  className="w-full border-2 border-primary-600 text-primary-600"
                >
                  Try Free
                </Button>
              </Link>
              <Button
                variant="primary"
                size="md"
                className="w-full shadow-lg shadow-primary-500/20"
                onClick={() => {
                  setMobileMenuOpen(false)
                  setShowBookDemoModal(true)
                }}
              >
                Book A Demo
              </Button>
              <div className="flex justify-center pt-2">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Book A Demo Modal */}
      {showBookDemoModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={() => setShowBookDemoModal(false)}>
          <div className="relative bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-neutral-200 dark:border-neutral-800">
              <div>
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">Book A Demo</h2>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">Schedule a personalized demo with our team</p>
              </div>
              <button
                onClick={() => setShowBookDemoModal(false)}
                className="w-8 h-8 flex items-center justify-center rounded-lg text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Cal.com Embed */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-100px)]">
              <div 
                className="cal-inline" 
                data-cal-link="team/exportgenius/30min"
                data-cal-config='{"layout":"month_view","theme":"light"}'
                style={{ width: '100%', height: '600px', overflow: 'scroll' }}
              ></div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

