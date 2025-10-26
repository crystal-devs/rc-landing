'use client';

import Image from 'next/image';

export default function SingleSectionHeroGrid() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Background Effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-y-3 left-1/2 max-h-[calc(100dvh-40px)] w-[calc(100%-24px)] max-w-screen-2xl -translate-x-1/2 overflow-hidden rounded-[2rem] bg-gradient-to-b from-blue-700/[0.06] to-white sm:inset-y-5 sm:w-[calc(100%-40px)]">
          <Image
            alt=""
            width={1416}
            height={675}
            className="pointer-events-none absolute left-1/2 top-0 max-w-none -translate-x-1/2 opacity-40"
            src="https://images.unsplash.com/photo-1557683316-973673baf926?w=1416&h=675&fit=crop&q=80"
            priority
          />
        </div>
        <div className="absolute inset-y-3 left-1/2 max-h-[calc(100dvh-40px)] w-[calc(100%-24px)] max-w-screen-2xl -translate-x-1/2 rounded-[2rem] border border-blue-800/[0.1] sm:inset-y-5 sm:w-[calc(100%-40px)]" />
      </div>

      {/* Scattered Images */}
      {/* Scattered Image 1 - Top Left */}
      <div className="absolute inline-grid auto-cols-[122px] auto-rows-[122px] gap-4 sm:auto-cols-[156px] sm:auto-rows-[156px] sm:gap-5 lg:auto-cols-[200px] lg:auto-rows-[200px] lg:gap-6 xl:auto-cols-[234px] xl:auto-rows-[234px] -left-12 top-32 lg:left-[calc(50%-min(50vw,800px)+90px)] lg:top-40 lg:-translate-x-1/2">
        <div
          className="col-span-1 row-span-1 rounded-[20px] md:rounded-3xl"
          style={{ touchAction: 'none', transform: 'scale(0.7) rotate(-6deg)' }}
        >
          <div className="relative flex size-full rounded-[20px] after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:opacity-0 after:shadow-2xl after:transition-opacity md:rounded-3xl">
            <div className="relative flex size-full flex-1">
              <div className="group pointer-events-none relative flex flex-1 flex-col items-start gap-5 overflow-hidden rounded-[20px] bg-white p-1.5 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:shadow-sm before:transition-opacity after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:opacity-0 after:shadow-xl after:transition-opacity sm:p-2.5 md:rounded-3xl md:p-3 lg:p-2.5 2xl:p-3">
                <Image
                  alt="Hiker"
                  fill
                  className="select-none rounded-[inherit] object-cover transition-opacity duration-300"
                  src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=500&h=500&fit=crop"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-[20px] border border-black/[0.12] md:rounded-[24px]" />
            <div className="pointer-events-none absolute inset-[1px] rounded-[19px] border-x border-t border-white/20 md:rounded-[23px]" />
          </div>
        </div>
      </div>

      {/* Scattered Image 2 - Top Right */}
      <div className="absolute inline-grid auto-cols-[122px] auto-rows-[122px] gap-4 sm:auto-cols-[156px] sm:auto-rows-[156px] sm:gap-5 lg:auto-cols-[200px] lg:auto-rows-[200px] lg:gap-6 xl:auto-cols-[234px] xl:auto-rows-[234px] -right-10 top-0 lg:right-[calc(50%-min(50vw,800px)+52px)] lg:top-20 lg:translate-x-1/2">
        <div
          className="col-span-1 row-span-2 rounded-[20px] md:rounded-3xl"
          style={{ touchAction: 'none', transform: 'scale(0.6) rotate(12deg)' }}
        >
          <div className="relative flex size-full rounded-[20px] after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:opacity-0 after:shadow-2xl after:transition-opacity md:rounded-3xl">
            <div className="relative flex size-full flex-1">
              <div className="group pointer-events-none relative flex flex-1 flex-col items-start gap-5 overflow-hidden rounded-[20px] bg-white p-1.5 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:shadow-sm before:transition-opacity after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:opacity-0 after:shadow-xl after:transition-opacity sm:p-2.5 md:rounded-3xl md:p-3 lg:p-2.5 2xl:p-3">
                <Image
                  alt="Portrait"
                  fill
                  className="select-none rounded-[inherit] object-cover transition-opacity duration-300"
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=700&fit=crop"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-[20px] border border-black/[0.12] md:rounded-[24px]" />
            <div className="pointer-events-none absolute inset-[1px] rounded-[19px] border-x border-t border-white/20 md:rounded-[23px]" />
          </div>
        </div>
      </div>

      {/* Scattered Image 3 - Bottom Left */}
      <div className="absolute inline-grid auto-cols-[122px] auto-rows-[122px] gap-4 sm:auto-cols-[156px] sm:auto-rows-[156px] sm:gap-5 lg:auto-cols-[200px] lg:auto-rows-[200px] lg:gap-6 xl:auto-cols-[234px] xl:auto-rows-[234px] -left-[50px] top-[550px] sm:top-[600px] lg:left-[calc(50%-min(50vw,800px)+70px)] lg:top-[650px] lg:-translate-x-1/2">
        <div
          className="col-span-1 row-span-1 rounded-[20px] md:rounded-3xl"
          style={{ touchAction: 'none', transform: 'scale(0.65) rotate(10deg)' }}
        >
          <div className="relative flex size-full rounded-[20px] after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:opacity-0 after:shadow-2xl after:transition-opacity md:rounded-3xl">
            <div className="relative flex size-full flex-1">
              <div className="group pointer-events-none relative flex flex-1 flex-col items-start gap-5 overflow-hidden rounded-[20px] bg-white p-1.5 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:shadow-sm before:transition-opacity after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:opacity-0 after:shadow-xl after:transition-opacity sm:p-2.5 md:rounded-3xl md:p-3 lg:p-2.5 2xl:p-3">
                <Image
                  alt="Travel"
                  fill
                  className="select-none rounded-[inherit] object-cover transition-opacity duration-300"
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=500&fit=crop"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-[20px] border border-black/[0.12] md:rounded-[24px]" />
            <div className="pointer-events-none absolute inset-[1px] rounded-[19px] border-x border-t border-white/20 md:rounded-[23px]" />
          </div>
        </div>
      </div>

      {/* Scattered Image 4 - Bottom Right */}
      <div className="absolute inline-grid auto-cols-[122px] auto-rows-[122px] gap-4 sm:auto-cols-[156px] sm:auto-rows-[156px] sm:gap-5 lg:auto-cols-[200px] lg:auto-rows-[200px] lg:gap-6 xl:auto-cols-[234px] xl:auto-rows-[234px] right-[70px] top-[800px] sm:right-[100px] lg:right-[calc(50%-min(50vw,800px)+280px)] lg:top-[770px] lg:translate-x-1/2">
        <div
          className="col-span-1 row-span-1 rounded-[20px] md:rounded-3xl"
          style={{ touchAction: 'none', transform: 'scale(0.65) rotate(-8deg)' }}
        >
          <div className="relative flex size-full rounded-[20px] after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:opacity-0 after:shadow-2xl after:transition-opacity md:rounded-3xl">
            <div className="relative flex size-full flex-1">
              <div className="group pointer-events-none relative flex flex-1 flex-col items-start gap-5 overflow-hidden rounded-[20px] bg-white p-1.5 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:shadow-sm before:transition-opacity after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:opacity-0 after:shadow-xl after:transition-opacity sm:p-2.5 md:rounded-3xl md:p-3 lg:p-2.5 2xl:p-3">
                <Image
                  alt="Coffee"
                  fill
                  className="select-none rounded-[inherit] object-cover transition-opacity duration-300"
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&h=500&fit=crop"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-[20px] border border-black/[0.12] md:rounded-[24px]" />
            <div className="pointer-events-none absolute inset-[1px] rounded-[19px] border-x border-t border-white/20 md:rounded-[23px]" />
          </div>
        </div>
      </div>

      {/* DIV 1: Hero Content */}
      <div className="max-w-screen-xl mx-auto px-8 md:px-12 xl:px-16 relative z-10 flex min-h-[min(880px,90vh)] flex-col items-center justify-center gap-8 pb-16 pt-32 lg:gap-10 lg:pt-36">
        {/* Announcement badges */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          <a
            href="#"
            className="group inline-flex items-center gap-1 rounded-full bg-gray-100 py-1 pl-4 pr-1 text-sm font-medium text-blue-900/70 ring-1 ring-black/10 transition-all duration-200 hover:gap-2.5 hover:bg-white hover:text-blue-900/90 hover:shadow-sm"
          >
            <span>Portrait launches Public Testnet</span>
            <span className="inline-flex size-6 items-center justify-center rounded-full border border-transparent transition-colors group-hover:border-blue-900/10 group-hover:bg-blue-900/5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M17 7l-10 10" />
                <path d="M8 7l9 0l0 9" />
              </svg>
            </span>
          </a>

          <a
            href="#"
            className="group inline-flex items-center gap-1 rounded-full bg-white/60 py-1 pl-1 pr-4 text-sm font-medium text-blue-900/70 ring-1 ring-black/10 transition-all duration-200 hover:gap-2.5 hover:bg-white hover:text-blue-900/90 hover:shadow-sm"
          >
            <span className="inline-flex size-6 items-center justify-center rounded-full border border-transparent transition-colors group-hover:border-blue-900/10 group-hover:bg-blue-900/5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 4v16a1 1 0 0 0 1.524.852l13-8a1 1 0 0 0 0-1.704l-13-8a1 1 0 0 0-1.524.852z" />
              </svg>
            </span>
            <span>Discover Portrait in 90s</span>
          </a>
        </div>

        {/* Heading */}
        <div className="flex flex-col items-center gap-6 text-center">
          <h1 className="max-w-[14ch] text-balance text-4xl font-medium leading-tight text-blue-900 sm:text-5xl md:text-6xl lg:text-7xl">
            Your{' '}
            <span className="relative inline-block font-serif text-[1.05em] font-semibold italic">
              <span className="absolute inset-0 -mx-2 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 opacity-30" />
              <span className="relative px-2">forever</span>
            </span>{' '}
            space for everything you are.
          </h1>
          <p className="mx-auto max-w-md text-balance text-base text-blue-900/65 sm:text-lg">
            More than a link—a decentralized canvas to share your story, your work, and your life—in minutes.
          </p>
        </div>
      </div>

      {/* DIV 2: Grid Section */}
      <div className="relative mx-auto flex w-fit justify-self-center rounded-[2rem] border border-black/15 bg-black/5 p-1 lg:rounded-[1.625rem] lg:p-1.5">
        {/* Profile Header */}
        <div className='relative flex max-h-[540px] w-min flex-col gap-6 rounded-[1.75rem] bg-white p-6 [clip-path:polygon(-100vw_calc(0%-3000px),calc(100%+100vw)_calc(0%-3000px),calc(100%+100vw)_100%,_-100vw_100%)] sm:max-h-[650px] sm:gap-12 lg:max-h-[1300px] lg:rounded-[1.25rem] lg:p-12' >


          <div className="mb-8 flex items-center gap-4">
            <div className="relative h-20 w-20 overflow-hidden rounded-full border-4 border-white shadow-lg md:h-24 md:w-24">
              <Image
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop"
                alt="Rowan Blake"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">Rowan Blake</h2>
              <p className="mt-1 text-sm text-gray-600 md:text-base">
                I write about LLMs. I garden when it's not raining.
              </p>
            </div>
          </div>

          <div className="relative inline-grid justify-center xl:auto-rows-[234px] xl:grid-cols-[repeat(4,234px)] lg:auto-rows-[200px] lg:grid-cols-[repeat(4,200px)] lg:grid-rows-none lg:gap-6 sm:auto-rows-[156px] sm:grid-cols-[repeat(2,156px)] sm:gap-5 auto-rows-[122px] grid-cols-[repeat(2,122px)] gap-4">
            <div className="relative -z-1 rounded-[20px] bg-gray-25 md:rounded-3xl lg:col-span-1 col-span-1 lg:row-span-1 row-span-1 bg-amber-200"></div>
            <div className="relative -z-1 rounded-[20px] bg-gray-25 md:rounded-3xl lg:col-span-2 col-span-1 lg:row-span-1 row-span-2 bg-red-200"></div>
            <div className="relative -z-1 rounded-[20px] bg-gray-25 md:rounded-3xl lg:col-span-1 col-span-1 lg:row-span-2 row-span-2 bg-green-200"></div>
            <div className="relative -z-1 rounded-[20px] bg-gray-25 md:rounded-3xl lg:col-span-1 col-span-1 lg:row-span-1 row-span-1 bg-blue-200"></div>
            <div className="relative -z-1 rounded-[20px] bg-gray-25 md:rounded-3xl lg:col-span-1 col-span-1 lg:row-span-1 row-span-1 bg-purple-200"></div>
            <div className="relative -z-1 rounded-[20px] bg-gray-25 md:rounded-3xl lg:col-span-1 col-span-1 lg:row-span-1 row-span-1 bg-orange-200"></div>
          </div>
          {/* Grid Layout - 2 Column Masonry for Mobile, Bento for Desktop */}
          <div className="columns-2 gap-4 space-y-4 lg:columns-3 lg:gap-6">
            {/* Woman with backpack */}
            <div className="group relative mb-4 break-inside-avoid overflow-hidden rounded-3xl bg-white shadow-lg transition-shadow hover:shadow-xl lg:mb-6">
              <div className="relative aspect-[3/4]">
                <Image
                  src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=800&fit=crop"
                  alt="Woman with backpack"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-3xl border border-black/10" />
            </div>

            {/* Travel card */}
            <div className="group relative mb-4 break-inside-avoid overflow-hidden rounded-3xl bg-white shadow-lg transition-shadow hover:shadow-xl lg:mb-6">
              <div className="relative aspect-video">
                <Image
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=400&fit=crop"
                  alt="Travel"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900">Gap year: Indonesia '25</h3>
                <a href="#" className="mt-2 inline-flex items-center text-sm text-gray-600 hover:text-gray-900">
                  polarsteps.com
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-3xl border border-black/10" />
            </div>

            {/* Dog */}
            <div className="group relative mb-4 break-inside-avoid overflow-hidden rounded-3xl bg-white shadow-lg transition-shadow hover:shadow-xl lg:mb-6">
              <div className="relative aspect-video">
                <Image
                  src="https://images.unsplash.com/photo-1517849845537-4d257902454a?w=1200&h=600&fit=crop"
                  alt="Dog in field"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-3xl border border-black/10" />
            </div>

            {/* Coffee */}
            <div className="group relative mb-4 break-inside-avoid overflow-hidden rounded-3xl bg-white shadow-lg transition-shadow hover:shadow-xl lg:mb-6">
              <div className="relative aspect-square">
                <Image
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=600&fit=crop"
                  alt="Coffee"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-3xl border border-black/10" />
            </div>

            {/* Two women */}
            <div className="group relative mb-4 break-inside-avoid overflow-hidden rounded-3xl bg-white shadow-lg transition-shadow hover:shadow-xl lg:mb-6">
              <div className="relative aspect-[3/4]">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop"
                  alt="Two women"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-3xl border border-black/10" />
            </div>

            {/* Article card */}
            <div className="group relative mb-4 break-inside-avoid overflow-hidden rounded-3xl bg-white shadow-lg transition-shadow hover:shadow-xl lg:mb-6">
              <div className="flex flex-col justify-between p-6">
                <div>
                  <div className="mb-2 flex items-center gap-2 text-sm text-gray-500">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                    </svg>
                    Nov 23
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">LLMs for house plants?</h3>
                  <p className="text-sm text-gray-600">
                    It's been five incredibly turbulent days at the leading AI tech compan...
                  </p>
                </div>
                <a href="#" className="mt-4 inline-flex items-center text-sm font-medium text-gray-900">
                  Read more
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-3xl border border-black/10" />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition-shadow hover:shadow-xl">
              <svg className="h-5 w-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" strokeWidth={2} />
                <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" />
                <path d="M21 15l-5-5L5 21" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition-shadow hover:shadow-xl">
              <svg className="h-5 w-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" strokeWidth={2} />
                <path d="M7 2v20M17 2v20M2 12h20M2 7h5M2 17h5M17 17h5M17 7h5" strokeWidth={2} />
              </svg>
            </button>
            <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition-shadow hover:shadow-xl">
              <svg className="h-5 w-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition-shadow hover:shadow-xl">
              <svg className="h-5 w-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M4 7h16M4 12h16M4 17h16" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}