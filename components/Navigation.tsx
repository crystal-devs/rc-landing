'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight, ArrowLeft, X, Menu } from 'lucide-react';
import Link from 'next/link';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Mobile menu states
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState<string | null>(null);
  const [showMobileSubmenu, setShowMobileSubmenu] = useState(false);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setActiveMenu(null);
    if (activeMenu) {
      document.addEventListener('click', handleClickOutside);
    }
    return () => document.removeEventListener('click', handleClickOutside);
  }, [activeMenu]);

  // Handle mouse leave with delay to prevent accidental closes
  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 100);
  };

  // Cancel close timeout when mouse re-enters
  const handleMouseEnter = (itemName?: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    if (itemName) {
      setActiveMenu(itemName);
    }
  };

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [isMenuOpen]);

  // Navigation data
  const navItems = [
    {
      name: 'Home',
      href: '/',
      hasDropdown: true,
      sections: [
        {
          title: 'Real-time Photo Sharing',
          description: 'Instant photo sharing during events',
          icon: '📸',
        },
        {
          title: 'Interactive Photo Wall',
          description: 'Engage guests with live photo displays',
          icon: '🖼️',
        },
        {
          title: 'Easy Event Management',
          description: 'Set up events in minutes',
          icon: '⚙️',
        },
      ],
    },
    {
      name: 'Features',
      href: '/features',
      hasDropdown: false,
    },
    {
      name: 'Solutions',
      href: '/solutions',
      hasDropdown: false,
    },
    {
      name: 'Pricing',
      href: '/pricing',
      hasDropdown: false,
    },
    {
      name: 'About',
      href: '/about',
      hasDropdown: false,
    },
    {
      name: 'Blog',
      href: '/blog',
      hasDropdown: true,
      sections: [
        {
          title: 'Latest Posts',
          description: 'Read our newest articles',
          icon: '📝',
        },
        {
          title: 'Tutorials',
          description: 'Step-by-step guides',
          icon: '📚',
        },
        {
          title: 'Case Studies',
          description: 'Success stories from users',
          icon: '📊',
        },
      ],
    },
    {
      name: 'Contact',
      href: '/contact',
      hasDropdown: false,
    },
  ];

  return (
    <>
      {/* Centered Navigation Container */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center">
        <motion.div
          className={`transition-all pt-4 md:pt-5 px-2 sm:px-0 duration-500 ease-in-out ${isScrolled
            ? ' w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] max-w-4xl'
            : ' w-full max-w-7xl'
            }`}
        >
          <motion.nav
            initial={false}
            animate={{
              backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : '',
              backdropFilter: isScrolled ? 'blur(12px)' : 'blur(0px)',
              borderRadius: isScrolled ? '10px' : '0px',
            }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className={`${isScrolled ? 'shadow-lg border border-gray-200' : 'shadow-none'}`}
          >
            <div className="p-1 ">
              <div className="flex items-center justify-between">
                {/* Logo */}
                <motion.div
                  className="flex items-center cursor-pointer"
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-7 h-7 sm:w-10 sm:h-10 bg-black rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-xs sm:text-sm">R</span>
                    </div>
                    <span className="text-lg sm:text-xl font-semibold text-gray-900">RC Landing</span>
                  </div>
                </motion.div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center space-x-1">
                  {navItems.map((item) => (
                    <div
                      key={item.name}
                      className="relative"
                      onMouseEnter={(e) => {
                        e.stopPropagation();
                        if (item.hasDropdown) {
                          handleMouseEnter(item.name);
                        }
                      }}
                      onMouseLeave={handleMouseLeave}
                    >
                      <Link
                        href={item.href}
                        className={`flex items-center space-x-1 px-3 py-3 rounded-lg text-sm font-medium transition-all focus-none ${activeMenu === item.name
                          ? 'bg-black text-white'
                          : 'text-gray-700 hover:bg-black hover:text-white'
                          }`}
                      >
                        <span>{item.name}</span>
                        {item.hasDropdown && (
                          <motion.div
                            animate={{ rotate: activeMenu === item.name ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown size={16} />
                          </motion.div>
                        )}
                      </Link>
                    </div>
                  ))}
                </div>

                {/* Desktop CTA Buttons */}
                <div className="hidden lg:flex items-center space-x-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-3 xl:px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    Login
                  </motion.button>
                  <motion.button
                    className="px-3 xl:px-4 py-3 text-sm font-medium text-white bg-black rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    Get Started
                  </motion.button>
                </div>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setMobileMenuOpen(true)}
                  className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <Menu size={24} />
                </button>
              </div>
            </div>
          </motion.nav>

          {/* Desktop Mega Menu */}
          <AnimatePresence>
            {activeMenu && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="hidden lg:block absolute left-1/2 -translate-x-1/2 w-full max-w-2xl"
                style={{ top: '100%' }}
                onMouseEnter={() => handleMouseEnter()}
                onMouseLeave={handleMouseLeave}
              >
                {/* Larger invisible bridge to prevent menu closing during scroll */}
                <div className="h-4 w-full" />

                <div className="bg-white border border-gray-200 shadow-xl rounded-2xl">
                  <div className="py-4 px-4 xl:py-6 xl:px-6">
                    {navItems
                      .filter((item) => item.name === activeMenu)
                      .map((item) => (
                        <div key={item.name}>
                          <div className="space-y-1">
                            {item.sections?.map((section, idx) => (
                              <motion.div
                                key={section.title}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.05, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                                className="group cursor-pointer p-3 xl:p-4 rounded-lg hover:bg-gray-50 transition-colors"
                              >
                                <div className="flex items-start space-x-3">
                                  {section.icon && <span className="text-xl xl:text-2xl">{section.icon}</span>}
                                  <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                      <h3 className="text-sm font-semibold text-gray-900 group-hover:text-black">
                                        {section.title}
                                      </h3>
                                      <ChevronDown
                                        size={16}
                                        className="text-gray-400 transform -rotate-90 opacity-0 group-hover:opacity-100 transition-opacity"
                                      />
                                    </div>
                                    <p className="text-xs xl:text-sm text-gray-600 mt-1">{section.description}</p>
                                  </div>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 bg-white z-40 md:hidden pt-24"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col h-full"
            >
              {/* Main Menu View */}
              <AnimatePresence mode="wait">
                {!showMobileSubmenu ? (
                  <motion.div
                    key="main-menu"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-1 flex flex-col overflow-y-auto px-6 py-6"
                  >
                    <div className="flex-1 space-y-1">
                      {navItems.map((link, index) => (
                        <motion.div
                          key={link.href}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.05 + index * 0.03 }}
                        >
                          {link.hasDropdown ? (
                            <button
                              onClick={() => {
                                setMobileActiveDropdown(link.name);
                                setShowMobileSubmenu(true);
                              }}
                              className="flex items-center justify-between w-full px-4 py-4 text-lg font-medium text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200 group"
                            >
                              <span>{link.name}</span>
                              <ChevronRight size={18} className="text-gray-400 group-hover:text-gray-600 transition-colors" />
                            </button>
                          ) : (
                            <Link
                              href={link.href}
                              className="block px-4 py-4 text-lg font-medium text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {link.name}
                            </Link>
                          )}
                        </motion.div>
                      ))}
                    </div>

                    {/* Bottom CTA Buttons */}
                    <div className="mt-auto pt-6 space-y-3">
                      <Link
                        href="#get-started"
                        className="block w-full text-center px-6 py-3.5 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-xl transition-all duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Get a demo
                      </Link>
                      <Link
                        href="/login"
                        className="block w-full text-center px-6 py-3.5 text-gray-900 hover:bg-gray-50 font-medium rounded-xl transition-all duration-200 border border-gray-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Login
                      </Link>
                    </div>
                  </motion.div>
                ) : (
                  /* Submenu View */
                  <motion.div
                    key="submenu"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-1 overflow-y-auto"
                  >
                    {/* Breadcrumb */}
                    <div className="px-6 py-4 border-b border-gray-200">
                      <button
                        onClick={() => {
                          setShowMobileSubmenu(false);
                          setMobileActiveDropdown(null);
                        }}
                        className="flex items-center text-gray-600 hover:text-gray-900 transition-colors group"
                      >
                        <svg
                          className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        <span className="text-lg font-medium">{mobileActiveDropdown}</span>
                      </button>
                    </div>

                    {/* Submenu Items */}
                    <div className="px-6 py-6 space-y-3">
                      {navItems
                        .find((link) => link.name === mobileActiveDropdown)
                        ?.sections?.map((item, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.04, duration: 0.2 }}
                          >
                            <Link
                              href={`${navItems.find((link) => link.name === mobileActiveDropdown)?.href}#${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                              className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-200 group"
                              onClick={() => {
                                setIsMenuOpen(false);
                                setShowMobileSubmenu(false);
                                setMobileActiveDropdown(null);
                              }}
                            >
                              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl flex items-center justify-center text-2xl border border-gray-100 group-hover:scale-105 transition-transform">
                                {item.icon}
                              </div>
                              <div className="flex-1 min-w-0 pt-1">
                                <h3 className="text-gray-900 font-semibold text-base mb-1 group-hover:text-blue-600 transition-colors">
                                  {item.title}
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                  {item.description}
                                </p>
                              </div>
                            </Link>
                          </motion.div>
                        ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}