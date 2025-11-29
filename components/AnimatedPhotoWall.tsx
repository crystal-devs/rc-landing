'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Image from 'next/image';

// Define the grid items with their spans and scatter positions
const items = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=80',
    alt: 'Hiker',
    mobileCol: 'col-span-1',
    mobileRow: 'row-span-1',
    desktopCol: 'lg:col-span-1',
    desktopRow: 'lg:row-span-1',
    // Mobile scatter (around hero on small screens)
    mobileScatter: { x: '-25vw', y: '-95vh', rotate: -8, scale: 0.7 },
    // Desktop scatter (around hero on large screens)
    desktopScatter: { x: '-15vw', y: '-95vh', rotate: -6, scale: 0.7 },
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80',
    alt: 'Dog',
    mobileCol: 'col-span-1',
    mobileRow: 'row-span-2',
    desktopCol: 'lg:col-span-2',
    desktopRow: 'lg:row-span-1',
    mobileScatter: { x: '30vw', y: '-115vh', rotate: 6, scale: 0.6 },
    desktopScatter: { x: '35vw', y: '-90vh', rotate: 4, scale: 0.7 },
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1529139574466-a302c27560a0?auto=format&fit=crop&w=800&q=80',
    alt: 'Friends',
    mobileCol: 'col-span-1',
    mobileRow: 'row-span-2',
    desktopCol: 'lg:col-span-1',
    desktopRow: 'lg:row-span-2',
    mobileScatter: { x: '65vw', y: '-65vh', rotate: -5, scale: 0.8 },
    desktopScatter: { x: '20vw', y: '-70vh', rotate: -4, scale: 0.7 },
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80',
    alt: 'Travel',
    mobileCol: 'col-span-1',
    mobileRow: 'row-span-1',
    desktopCol: 'lg:col-span-1',
    desktopRow: 'lg:row-span-1',
    mobileScatter: { x: '-35vw', y: '-25vh', rotate: 4, scale: 0.8 },
    desktopScatter: { x: '-15vw', y: '-75vh', rotate: 5, scale: 0.7 },
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?auto=format&fit=crop&w=800&q=80',
    alt: 'Smoothie',
    mobileCol: 'col-span-1',
    mobileRow: 'row-span-1',
    desktopCol: 'lg:col-span-1',
    desktopRow: 'lg:row-span-1',
    mobileScatter: { x: '30vw', y: '-15vh', rotate: -6, scale: 0.8 },
    desktopScatter: { x: '25vw', y: '-55vh', rotate: -5, scale: 0.7 },
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
    alt: 'Food',
    mobileCol: 'col-span-1',
    mobileRow: 'row-span-1',
    desktopCol: 'lg:col-span-1',
    desktopRow: 'lg:row-span-1',
    mobileScatter: { x: '-30vw', y: '-10vh', rotate: 8, scale: 0.8 },
    desktopScatter: { x: '-39vw', y: '-55vh', rotate: -3, scale: 0.7 },
  },
];

export default function AnimatedPhotoWall() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress for animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // "Critically Damped" physics configuration.
  // stiffness: 150 -> Responsive tracking of scroll.
  // damping: 25 -> Perfectly balanced friction to prevent ANY bounce/oscillation.
  // This creates a smooth "hydraulic" feel where it slides to a stop.
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 25,
    mass: 1,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="relative min-h-[200vh] bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 overflow-hidden">

      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-y-3 left-1/2 w-[calc(100%-24px)] max-w-screen-2xl -translate-x-1/2 rounded-[2rem] border border-white/40 bg-white/30 backdrop-blur-3xl" />
      </div>

      {/* Main content container */}
      <div className="max-w-7xl mx-auto relative w-full">

        {/* Hero Text Section - Takes 80vh so 20% of grid shows */}
        <div className="relative z-50 flex flex-col items-center justify-center px-4 text-center" style={{ minHeight: 'calc(100vh - 10vh)' }}>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-1.5 text-sm font-medium text-blue-900/80 shadow-sm backdrop-blur-sm mb-8">
            <span>✨ Portrait launches Public Testnet</span>
          </div>

          <h1 className="max-w-4xl mx-auto text-4xl md:text-7xl font-medium tracking-tight text-slate-900 mb-8 relative">
            Your{' '}
            <span className="relative inline-block">
              <span className="italic font-serif text-slate-900 relative z-10">forever</span>
              {/* Pink curved underline doodle */}
              <svg className="absolute -bottom-2 left-0 w-full h-8 pointer-events-none" viewBox="0 0 200 20" preserveAspectRatio="none">
                <path d="M5,15 Q50,5 100,12 T195,10" stroke="#ec4899" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.7" />
              </svg>
            </span>
            {' '}space for{' '}
            <span className="relative inline-block">
              <span className="relative z-10">everything</span>
              {/* Yellow highlight box doodle */}
              <svg className="absolute -inset-1 w-[calc(100%+8px)] h-[calc(100%+8px)] pointer-events-none -z-10" viewBox="0 0 200 60" preserveAspectRatio="none">
                <rect x="2" y="8" width="196" height="44" fill="#fef08a" opacity="0.6" rx="4" />
              </svg>
            </span>
            {' '}you are.
          </h1>

          <p className="max-w-lg mx-auto text-base md:text-lg text-slate-600 mb-12">
            More than a link—a decentralized canvas to share your story, your work, and your life—in minutes.
          </p>
        </div>

        {/* Grid Section - Pushed down below viewport */}
        <div className="relative z-20 w-full mx-auto pb-40 flex justify-center">

          {/* Mobile/Tablet: Phone-like container with fixed width */}
          <div className="lg:hidden relative w-full max-w-[320px] mx-auto">
            {/* Phone border/frame */}
            <div className="relative rounded-[2.5rem] border-4 border-neutral-400 bg-neutral-400 shadow-2xl">
              {/* Grid content */}
              <div className="relative bg-white rounded-[1.5rem] h-[600px]">
                <div className="p-4 mt-44">
                  <div className="grid grid-cols-2 gap-4 auto-rows-[140px]">
                    {items.map((item) => {
                      // Transform from scattered position (initial) to grid position (0, 0)
                      // Using smoothProgress (critically damped spring) for that "drifting" feel
                      const x = useTransform(smoothProgress, [0, 0.6], [item.mobileScatter.x, '0vw']);
                      const y = useTransform(smoothProgress, [0, 0.6], [item.mobileScatter.y, '0vh']);
                      const rotate = useTransform(smoothProgress, [0, 0.6], [item.mobileScatter.rotate, 0]);
                      const opacity = useTransform(smoothProgress, [0, 0.3], [0.8, 1]);
                      const scale = useTransform(smoothProgress, [0, 0.6], [item.mobileScatter.scale, 1]);

                      return (
                        <motion.div
                          key={`grid-${item.id}`}
                          className={`relative ${item.mobileCol} ${item.mobileRow}`}
                          style={{ x, y, rotate, opacity, scale }}
                        >
                          <div className="relative flex size-full">
                            <div className="overflow-hidden relative rounded-2xl p-1 flex flex-1 bg-white shadow-lg">
                              <Image
                                src={item.src}
                                alt={item.alt}
                                fill
                                className="select-none rounded-2xl object-cover"
                                sizes="140px"
                              />
                            </div>
                            <div className="pointer-events-none absolute inset-0 rounded-2xl border border-black/[0.12]" />
                            <div className="pointer-events-none absolute inset-[1px] rounded-[19px] border-x border-t border-white/20" />
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop: Desktop-like container */}
          <div className="hidden lg:block relative w-full max-w-6xl mx-auto">
            {/* Desktop border/frame */}
            <div className="relative rounded-[2rem] border border-gray-300 bg-gray-100 shadow-2xl p-1.5">
              {/* Desktop top bar */}
              <div className="absolute top-0 left-0 right-0 h-8 bg-gray-200 rounded-t-[2rem] border-b border-gray-300 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>

              {/* Grid content */}
              <div className="relative bg-white rounded-[1.5rem] mt-8">
                <div className="p-12 mt-44">
                  <div className="grid grid-cols-4 gap-6 auto-rows-[200px]">
                    {items.map((item) => {
                      // Transform from scattered position (initial) to grid position (0, 0)
                      // Using smoothProgress (critically damped spring) for that "drifting" feel
                      const x = useTransform(smoothProgress, [0, 0.6], [item.desktopScatter.x, '0vw']);
                      const y = useTransform(smoothProgress, [0, 0.6], [item.desktopScatter.y, '0vh']);
                      const rotate = useTransform(smoothProgress, [0, 0.6], [item.desktopScatter.rotate, 0]);
                      const scale = useTransform(smoothProgress, [0, 0.6], [item.desktopScatter.scale, 1]);

                      return (
                        <motion.div
                          key={`grid-${item.id}`}
                          className={`relative ${item.desktopCol} ${item.desktopRow}`}
                          style={{ x, y, rotate, scale }}
                        >
                          <div className="relative flex size-full cursor-pointer">
                            <div className="overflow-hidden relative rounded-3xl p-3 flex flex-1 bg-white shadow-lg transition-shadow hover:shadow-xl">
                              <Image
                                src={item.src}
                                alt={item.alt}
                                fill
                                className="select-none rounded-[inherit] object-cover"
                                sizes="200px"
                              />
                            </div>
                            <div className="pointer-events-none absolute inset-0 rounded-[24px] border border-black/[0.12]" />
                            <div className="pointer-events-none absolute inset-[1px] rounded-[23px] border-x border-t border-white/20" />
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}