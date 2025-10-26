'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState<string | null>(null);
  const [showMobileSubmenu, setShowMobileSubmenu] = useState(false);

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

  const navLinks = [
    { 
      href: '/', 
      label: 'Home',
      dropdown: [
        { title: 'Feature One', description: 'Get started with our platform', icon: '🚀' },
        { title: 'Feature Two', description: 'Explore advanced capabilities', icon: '⚡' },
        { title: 'Feature Three', description: 'Discover integrations', icon: '🔗' },
      ]
    },
    { 
      href: '/blog', 
      label: 'Blog',
      dropdown: [
        { title: 'Latest Posts', description: 'Read our newest articles', icon: '📝' },
        { title: 'Tutorials', description: 'Step-by-step guides', icon: '📚' },
        { title: 'Case Studies', description: 'Success stories from users', icon: '📊' },
      ]
    },
    { 
      href: '/pricing', 
      label: 'Pricing',
    },
    { 
      href: '/faq', 
      label: 'FAQ',
    },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] md:max-w-7xl z-50"
      >
        <div className="relative m-0">
          {/* Main Navigation Bar */}
          <div className="bg-zinc-900/90 backdrop-blur-xl border border-zinc-800/50 rounded-full shadow-2xl shadow-black/20">
            <div className="px-6 sm:px-8 lg:px-10">
              <div className="flex justify-between items-center h-16">
                {/* Logo */}
                <Link href="/" className="flex-shrink-0">
                  <span className="text-xl font-bold text-white">RC Landing</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center">
                  {navLinks.map((link) => (
                    <div
                      key={link.href}
                      onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
                      onMouseLeave={() => setActiveDropdown(null)}
                      className="relative m-0"
                    >
                      <Link
                        href={link.href}
                        className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 rounded-full"
                      >
                        {link.label}
                      </Link>
                      
                      {/* Extended hover area for this specific nav item */}
                      {link.dropdown && activeDropdown === link.label && (
                        <div className="absolute top-full left-0 right-0 h-8 bg-transparent pointer-events-auto" />
                      )}
                    </div>
                  ))}
                </div>

                {/* Right Section */}
                <div className="hidden md:flex items-center space-x-4">
                  <Link
                    href="/login"
                    className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Login
                  </Link>
                  <Link
                    href="#get-started"
                    className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-sm font-semibold rounded-full transition-all duration-200 shadow-lg shadow-orange-500/30"
                  >
                    Get Started
                  </Link>
                </div>

                {/* Mobile menu button */}
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {isMenuOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Dropdown Mega Menu */}
          <AnimatePresence>
            {activeDropdown && (
              <motion.div
                key="dropdown-container"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                onMouseEnter={() => setActiveDropdown(activeDropdown)}
                onMouseLeave={() => setActiveDropdown(null)}
                className="absolute top-full left-0 right-0"
                style={{ marginTop: '0.5rem' }}
              >
                <motion.div
                  layout
                  className="bg-zinc-900/95 backdrop-blur-xl border border-zinc-800/50 rounded-2xl shadow-2xl shadow-black/40"
                  style={{ borderRadius: '1rem' }}
                  transition={{ 
                    layout: { duration: 0.3, ease: [0.32, 0.72, 0, 1] },
                    borderRadius: { duration: 0 }
                  }}
                >
                  <motion.div
                    layout="position"
                    className="p-8"
                  >
                    <div className="grid grid-cols-3 gap-6">
                      <AnimatePresence mode="popLayout">
                        {navLinks
                          .find((link) => link.label === activeDropdown)
                          ?.dropdown?.map((item, index) => (
                            <motion.div
                              key={`${activeDropdown}-${index}`}
                              layout
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ 
                                layout: { duration: 0.3, ease: [0.32, 0.72, 0, 1] },
                                opacity: { duration: 0.2 }
                              }}
                            >
                              <Link
                                href={`${navLinks.find((link) => link.label === activeDropdown)?.href}#${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                                className="block p-4 rounded-2xl hover:bg-zinc-800/50 transition-all duration-200 group"
                              >
                                <div className="flex items-start space-x-4">
                                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-200">
                                    {item.icon}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <h3 className="text-white font-semibold mb-1 group-hover:text-blue-400 transition-colors duration-200">
                                      {item.title}
                                    </h3>
                                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-200">
                                      {item.description}
                                    </p>
                                  </div>
                                </div>
                              </Link>
                            </motion.div>
                          ))}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

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
                      {navLinks.map((link, index) => (
                        <motion.div
                          key={link.href}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.05 + index * 0.03 }}
                        >
                          {link.dropdown ? (
                            <button
                              onClick={() => {
                                setMobileActiveDropdown(link.label);
                                setShowMobileSubmenu(true);
                              }}
                              className="flex items-center justify-between w-full px-4 py-4 text-lg font-medium text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200 group"
                            >
                              <span>{link.label}</span>
                              <svg
                                className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </button>
                          ) : (
                            <Link
                              href={link.href}
                              className="block px-4 py-4 text-lg font-medium text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {link.label}
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
                      {navLinks
                        .find((link) => link.label === mobileActiveDropdown)
                        ?.dropdown?.map((item, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.04, duration: 0.2 }}
                          >
                            <Link
                              href={`${navLinks.find((link) => link.label === mobileActiveDropdown)?.href}#${item.title.toLowerCase().replace(/\s+/g, '-')}`}
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