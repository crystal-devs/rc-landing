'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Minus, Plus } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does RC Landing work?",
      answer: "RC Landing creates a unique QR code for your event. Guests scan the code with their phone camera (no app download required) and can instantly upload photos/videos. All content appears in real-time on your event display, creating an interactive photo wall that everyone can enjoy."
    },
    {
      question: "Do guests need to download an app?",
      answer: "No! RC Landing works directly through the phone's web browser. Guests simply scan a QR code and start uploading immediately. This makes it incredibly easy for everyone to participate, regardless of their phone type or technical skills."
    },
    {
      question: "How much does it cost?",
      answer: "We offer flexible pricing starting with a free tier for small events (up to 50 photos). Paid plans start at $29/month for unlimited events and photos. Enterprise plans are available for large organizations with custom features."
    },
    {
      question: "Can I moderate the photos before they appear?",
      answer: "Yes! You have full control over content moderation. Choose from automatic AI-powered filtering, manual approval workflows, or let everything appear instantly. You can also remove inappropriate content at any time."
    },
    {
      question: "How many people can upload photos at once?",
      answer: "RC Landing is built to handle hundreds of simultaneous uploads. Whether you have 20 guests at a wedding or 500 attendees at a conference, our infrastructure scales automatically to handle the load."
    },
    {
      question: "Can I use RC Landing for multiple events?",
      answer: "Absolutely! Each account can manage multiple events simultaneously. You can create different QR codes for different events, and each event maintains its own photo collection and settings."
    },
    {
      question: "What happens to the photos after the event?",
      answer: "Photos are stored securely in the cloud for 30 days after the event (free tier) or up to 1 year on paid plans. You can download all photos as a ZIP file, and guests can access their uploaded content through a private link."
    },
    {
      question: "Is my data secure?",
      answer: "Security is our top priority. All data is encrypted in transit and at rest. We use enterprise-grade cloud infrastructure with regular security audits. Photos are processed through secure, isolated environments."
    },
    {
      question: "Can I customize the look of the photo wall?",
      answer: "Yes! You can customize colors, layouts, and branding to match your event theme. Add your logo, choose from different display styles, and even include custom messaging or sponsor information."
    },
    {
      question: "What if I need help during my event?",
      answer: "Our support team is available 24/7 during events. You can reach us through chat, email, or phone. We also provide detailed setup guides and have a comprehensive knowledge base for common questions."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-white select-none">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about RC Landing
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left bg-gray-50 transition-colors flex items-center justify-between outline-none focus:outline-none cursor-pointer"
              >
                <span className="font-medium text-neutral-700">
                  {faq.question}
                </span>

                {/* Plus / Minus Icon with smooth rotation */}
                <motion.span
                  initial={false}
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="text-gray-600 text-2xl font-bold leading-none"
                >
                  {openIndex === index ? <Minus /> : <Plus />}
                </motion.span>
              </button>

              {/* Animated Answer */}
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0, y: -10 }}
                    animate={{ height: 'auto', opacity: 1, y: 0 }}
                    exit={{ height: 0, opacity: 0, y: -10 }}
                    transition={{
                      height: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
                      opacity: { duration: 0.2, ease: 'easeOut' }, // 👈 faster opacity fade
                      y: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
                    }}
                  >
                    <div className="px-6 pb-5 pt-2 bg-white">
                      <p className="text-neutral-500 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">
            Still have questions?
          </p>
          <a
            href="mailto:support@rclanding.com"
            className="inline-flex items-center px-6 py-3 bg-[#a9caf9] text-black font-medium rounded-lg hover:bg-[#93bdf8] transition-colors"
          >
            Contact Support
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
