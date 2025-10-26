'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight, ArrowLeft, X, Menu } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Navigation data
  const navItems = [
    {
      name: 'Product',
      hasDropdown: true,
      sections: [
        {
          title: 'Intelligence',
          description: 'Game-changing AI for precision selling',
          icon: '🎯',
        },
        {
          title: 'Data & Lead Generation',
          description: 'Rich signals & data to power your pipeline',
          icon: '📊',
        },
        {
          title: 'Multichannel Engagement',
          description: 'Automated engagement to scale your reach',
          icon: '💬',
        },
        {
          title: 'Deliverability Optimization',
          description: 'Your mailbox health kit for outreach success',
          icon: '✉️',
        },
      ],
      rightSection: [
        {
          title: 'Duo Copilot',
          description: 'Just hit play to power your pipeline',
        },
        {
          title: 'Duo Copywriter',
          description: 'Create hyper-personal first-touches',
        },
        {
          title: 'Duo Inbox',
          description: 'Send the perfect replies to prospects',
        },
        {
          title: 'Duo Voice',
          description: 'Stand out with scalable creative outreach',
        },
      ],
    },
    {
      name: 'Why us',
      hasDropdown: true,
      sections: [
        {
          title: 'About Us',
          description: 'Learn about our mission and values',
          icon: '🏢',
        },
        {
          title: 'Success Stories',
          description: 'See how teams grow with our platform',
          icon: '⭐',
        },
        {
          title: 'Resources',
          description: 'Guides, templates, and best practices',
          icon: '📚',
        },
      ],
    },
    {
      name: 'Customers',
      hasDropdown: false,
    },
    {
      name: 'Pricing',
      hasDropdown: false,
    },
  ];

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
                      <span className="text-white font-bold text-xs sm:text-sm">A</span>
                    </div>
                    <span className="text-lg sm:text-xl font-semibold text-gray-900">amplemarket</span>
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
                      <motion.button
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
                      </motion.button>
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
                    Open app
                  </motion.button>
                  <motion.button
                    className="px-3 xl:px-4 py-3 text-sm font-medium text-white bg-black rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    Get free trial
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
                        <div key={item.name} className={item.rightSection ? 'grid grid-cols-2 gap-4 xl:gap-6' : ''}>
                          {/* Left Section */}
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

                          {/* Right Section */}
                          {item.rightSection && (
                            <div className="space-y-1 border-l border-gray-200 pl-4 xl:pl-6">
                              {item.rightSection.map((section, idx) => (
                                <motion.div
                                  key={section.title}
                                  initial={{ opacity: 0, x: 20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: idx * 0.05, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                                  className="group cursor-pointer p-3 xl:p-4 rounded-lg hover:bg-gray-50 transition-colors"
                                >
                                  <div className="flex items-center justify-between">
                                    <div>
                                      <div className="flex items-center space-x-2">
                                        <span className="px-2 py-0.5 text-xs font-semibold text-purple-600 bg-purple-100 rounded">
                                          DUO
                                        </span>
                                        <h3 className="text-sm font-semibold text-gray-900 group-hover:text-black">
                                          {section.title.replace('Duo ', '')}
                                        </h3>
                                      </div>
                                      <p className="text-xs xl:text-sm text-gray-600 mt-1">{section.description}</p>
                                    </div>
                                    <ChevronDown
                                      size={16}
                                      className="text-gray-400 transform -rotate-90 opacity-0 group-hover:opacity-100 transition-opacity"
                                    />
                                  </div>
                                </motion.div>
                              ))}

                              {/* Watch Demo */}
                              <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                                className="mt-4 xl:mt-6 p-3 xl:p-4 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors"
                              >
                                <div className="flex items-center space-x-3">
                                  <div className="w-10 h-10 bg-gray-300 rounded-full" />
                                  <div>
                                    <h4 className="text-sm font-semibold text-gray-900">Watch Demo</h4>
                                    <p className="text-xs text-gray-600">Get an inside look at AM's features!</p>
                                  </div>
                                </div>
                              </motion.div>
                            </div>
                          )}
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
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 bg-white z-[60] lg:hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 sm:px-6 h-20 border-b border-gray-200 flex-shrink-0">
              <div className="flex items-center space-x-2">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-black rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xs sm:text-sm">A</span>
                </div>
                <span className="text-lg sm:text-xl font-semibold text-gray-900">amplemarket</span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X size={22} className="text-gray-700" />
              </button>
            </div>

            {/* Content */}
            <AnimatePresence mode="wait">
              {!mobileSubmenuOpen ? (
                <motion.div
                  key="main-menu"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -20, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-1 flex flex-col overflow-hidden"
                >
                  <div className="flex-1 overflow-y-auto px-5 sm:px-6 pt-3 pb-6">
                    <div className="space-y-1.5">
                      {navItems.map((item, index) => (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.05 + index * 0.03 }}
                        >
                          {item.hasDropdown ? (
                            <button
                              onClick={() => setMobileSubmenuOpen(item.name)}
                              className="w-full flex items-center justify-between px-4 py-3 text-left text-[15px] sm:text-[16px] font-medium text-gray-900 hover:bg-gray-50 rounded-lg transition-colors group"
                            >
                              <span>{item.name}</span>
                              <ChevronRight size={18} className="text-gray-400 group-hover:text-gray-600 transition-colors" />
                            </button>
                          ) : (
                            <button className="w-full px-4 py-3 text-left text-[15px] sm:text-[16px] font-medium text-gray-900 hover:bg-gray-50 rounded-lg transition-colors">
                              {item.name}
                            </button>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom CTA */}
                  <div className="px-5 sm:px-6 pb-5 border-t border-gray-200 space-y-3 flex-shrink-0">
                    <button className="w-full px-4 py-3 text-sm font-medium text-white bg-black rounded-xl hover:bg-gray-800 transition-colors">
                      Get a demo
                    </button>
                    <button className="w-full px-4 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded-xl transition-colors border border-gray-200">
                      Login
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="submenu"
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 20, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-1 flex flex-col overflow-hidden"
                >
                  {/* Submenu Header */}
                  <div className="px-5 sm:px-6 py-3 border-b border-gray-200 flex-shrink-0">
                    <button
                      onClick={() => setMobileSubmenuOpen(null)}
                      className="flex items-center text-gray-600 hover:text-gray-900 transition-colors group"
                    >
                      <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                      <span className="text-base sm:text-lg font-medium">{mobileSubmenuOpen}</span>
                    </button>
                  </div>

                  {/* Submenu Content */}
                  <div className="flex-1 overflow-y-auto px-5 sm:px-6 py-4 space-y-5">
                    {navItems
                      .filter((item) => item.name === mobileSubmenuOpen)
                      .map((item) => (
                        <div key={item.name} className="space-y-6">
                          {/* Platform Section */}
                          {item.sections && (
                            <div className="space-y-2">
                              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-2">
                                Platform
                              </h3>
                              {item.sections.map((section, index) => (
                                <motion.button
                                  key={section.title}
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: index * 0.04, duration: 0.2 }}
                                  className="w-full flex items-start space-x-3 p-3 sm:p-4 rounded-lg hover:bg-gray-50 transition-colors text-left"
                                >
                                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg flex items-center justify-center text-lg sm:text-xl border border-gray-100">
                                    {section.icon}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-0.5">
                                      {section.title}
                                    </h4>
                                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                                      {section.description}
                                    </p>
                                  </div>
                                </motion.button>
                              ))}
                            </div>
                          )}

                          {/* Solutions Section */}
                          {item.rightSection && (
                            <div className="space-y-2">
                              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-2">
                                Solutions
                              </h3>
                              {item.rightSection.map((section, index) => (
                                <motion.button
                                  key={section.title}
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{
                                    delay:
                                      (item.sections?.length || 0) * 0.04 + index * 0.04,
                                    duration: 0.2,
                                  }}
                                  className="w-full flex items-start space-x-3 p-3 sm:p-4 rounded-lg hover:bg-gray-50 transition-colors text-left"
                                >
                                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-indigo-50 to-pink-50 rounded-lg border border-gray-100" />
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center space-x-2 mb-0.5">
                                      <span className="px-2 py-0.5 text-xs font-semibold text-purple-600 bg-purple-100 rounded">
                                        DUO
                                      </span>
                                    </div>
                                    <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-0.5">
                                      {section.title}
                                    </h4>
                                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                                      {section.description}
                                    </p>
                                  </div>
                                </motion.button>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

    </>
  );
};

export default Navbar;