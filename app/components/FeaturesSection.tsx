'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import React from 'react';

export default function FeaturesSection() {
  const colors = ['amber', 'rose', 'lime', 'indigo', 'violet', 'orange'];
  const spans = [1, 3, 2, 2, 1, 3];

  const features = [
    {
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "Real-Time Photo Wall",
      description: "Photos appear instantly on your event display as guests upload them. No delays, no waiting - see the magic happen live."
    },
    {
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-4h4m-4-6v1m0 0v1m0-1h4m0 0v1m0-1v-1m0 1H8m4 0H8m0 0V9m0 0v1m0-1h4m0 0H8" />
        </svg>
      ),
      title: "No App Downloads Required",
      description: "Guests simply scan a QR code with their phone camera and start uploading. Works with any smartphone instantly."
    },
    {
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Smart Content Moderation",
      description: "AI-powered content filtering ensures only appropriate photos make it to your event display. Manual approval options available."
    },
    {
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Multi-Host Support",
      description: "Multiple organizers can manage the same event with granular permissions. Perfect for weddings, corporate events, and parties."
    },
    {
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Lightning Fast Uploads",
      description: "Optimized for speed with progressive image loading and smart compression. Photos upload in seconds, not minutes."
    },
    {
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Real-Time Analytics",
      description: "Track engagement, upload patterns, and event performance with detailed analytics dashboard. Make data-driven decisions."
    }
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need for Perfect Events
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful features designed to make your events unforgettable.
            From setup to execution, we've got you covered.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {features.map((feature, index) => {
            const color = colors[index % colors.length];
            const cardBg = `bg-${color}-200`;
            const iconBg = `bg-${color}-100`;
            const span = spans[index % spans.length];
            return (
              <motion.div
                key={index}
                className={`lg:col-span-${span} rounded-xl p-6 hover:shadow-lg transition-all duration-300 ${cardBg}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                // whileHover={{ scale: 1.02 }}
              >
                <div className={`w-12 h-12 ${iconBg} rounded-lg flex items-center justify-center mb-4`}>
                  {React.cloneElement(feature.icon, { className: `w-8 h-8 text-${color}-600` })}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-6">
            Ready to transform your next event?
          </p>
          <a
            href="#get-started"
            className="inline-flex items-center px-6 py-3 bg-[#fce88d] text-black font-medium rounded-lg hover:bg-[#f7e181] transition-colors"
          >
            Get Started Today
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}