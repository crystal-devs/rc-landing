'use client';

import Image from 'next/image';

export default function SingleSectionHeroGrid() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Background Effect */}
      <div className="absolute inset-0">
      
        <div className="absolute inset-y-3 left-1/2 max-h-[calc(100dvh-40px)] w-[calc(100%-24px)] max-w-screen-2xl -translate-x-1/2 rounded-[2rem] border border-blue-800/[0.1] sm:inset-y-5 sm:w-[calc(100%-40px)]" />
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
          <h1 className="max-w-[18ch] text-balance text-4xl font-medium leading-tight text-blue-900 sm:text-5xl md:text-6xl lg:text-7xl">
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
          <div className="relative inline-grid justify-center xl:auto-rows-[234px] xl:grid-cols-[repeat(4,234px)] lg:auto-rows-[200px] lg:grid-cols-[repeat(4,200px)] lg:grid-rows-none lg:gap-6 sm:auto-rows-[156px] sm:grid-cols-[repeat(2,156px)] sm:gap-5 auto-rows-[122px] grid-cols-[repeat(2,122px)] gap-4">
            <div className="relative -z-1 rounded-[20px] bg-gray-25 md:rounded-3xl lg:col-span-1 col-span-1 lg:row-span-1 row-span-1 bg-amber-200"></div>
            <div className="relative -z-1 rounded-[20px] bg-gray-25 md:rounded-3xl lg:col-span-2 col-span-1 lg:row-span-1 row-span-2 bg-red-200"></div>
            <div className="relative -z-1 rounded-[20px] bg-gray-25 md:rounded-3xl lg:col-span-1 col-span-1 lg:row-span-2 row-span-2 bg-green-200"></div>
            <div className="relative -z-1 rounded-[20px] bg-gray-25 md:rounded-3xl lg:col-span-1 col-span-1 lg:row-span-1 row-span-1 bg-blue-200"></div>
            <div className="relative -z-1 rounded-[20px] bg-gray-25 md:rounded-3xl lg:col-span-1 col-span-1 lg:row-span-1 row-span-1 bg-purple-200"></div>
            <div className="relative -z-1 rounded-[20px] bg-gray-25 md:rounded-3xl lg:col-span-1 col-span-1 lg:row-span-1 row-span-1 bg-orange-200"></div>
          </div>
        </div>
      </div>


      <div className="pointer-events-none absolute inset-x-0 bottom-1 top-0 overflow-hidden">
        <div className="absolute inline-grid justify-center xl:auto-cols-[234px] xl:auto-rows-[234px] lg:auto-cols-[200px] lg:auto-rows-[200px] lg:gap-6 sm:auto-cols-[156px] sm:auto-rows-[156px] sm:gap-5 auto-cols-[122px] auto-rows-[122px] gap-4 -left-12 top-32 lg:left-[calc(50%-min(50vw,800px)+90px)] lg:top-40 lg:-translate-x-1/2">
          <div
            className="rounded-[20px] md:rounded-3xl lg:col-span-1 col-span-1 lg:row-span-1 row-span-1"
            style={{
              touchAction: "none",
              transform:
                "translateX(323px) translateY(767.594px);"
            }}
          >
            <div className="relative flex rounded-[20px] md:rounded-3xl col-span-1 row-span-1 after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:opacity-0 after:shadow-2xl after:transition-opacity size-full">
              <div className="relative flex size-full flex-1">
                <div className="overflow-hidden group relative rounded-[20px] md:rounded-3xl 2xl:p-3 lg:p-2.5 md:p-3 sm:p-2.5 p-1.5 flex flex-1 flex-col items-start gap-5 before:pointer-events-none after:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:shadow-sm before:transition-opacity after:absolute after:inset-0 after:rounded-[inherit] after:opacity-0 after:shadow-xl after:transition-opacity bg-white dark:bg-gray-900 pointer-events-none">
                  <img
                    alt="Image"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="ease-out-smooth transition-opacity duration-300 select-none rounded-[inherit] object-cover"
                    src="https://portrait.so/images/home/grid/hiker@2x.jpg"
                    style={{ position: "absolute", height: "100%", width: "100%", inset: 0, color: "transparent" }}
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-[20px] border border-black/[0.12] md:rounded-[24px] dark:border-black/[0.13]"></div>
              <div className="pointer-events-none absolute inset-[1px] rounded-[19px] border-x border-t border-white/20 md:rounded-[23px] dark:border dark:border-white/[0.13]"></div>
            </div>
          </div>
        </div>
        <div className="absolute inline-grid justify-center xl:auto-cols-[234px] xl:auto-rows-[234px] lg:auto-cols-[200px] lg:auto-rows-[200px] lg:gap-6 sm:auto-cols-[156px] sm:auto-rows-[156px] sm:gap-5 auto-cols-[122px] auto-rows-[122px] gap-4 -left-12 top-[370px] lg:left-[calc(50%-min(50vw,850px)+60px)] lg:top-[520px] lg:-translate-x-1/2">
          <div
            className="rounded-[20px] md:rounded-3xl lg:col-span-2 col-span-1 lg:row-span-1 row-span-2"
            style={{
              touchAction: "none",
              transform: "translateX(790px) translateY(407.594px)"
            }}
          >
            <div className="relative flex rounded-[20px] md:rounded-3xl col-span-1 row-span-1 after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:opacity-0 after:shadow-2xl after:transition-opacity size-full">
              <div className="relative flex size-full flex-1">
                <div className="overflow-hidden group relative rounded-[20px] md:rounded-3xl 2xl:p-3 lg:p-2.5 md:p-3 sm:p-2.5 p-1.5 flex flex-1 flex-col items-start gap-5 before:pointer-events-none after:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:shadow-sm before:transition-opacity after:absolute after:inset-0 after:rounded-[inherit] after:opacity-0 after:shadow-xl after:transition-opacity bg-white dark:bg-gray-900 pointer-events-none">
                  <img
                    alt="Image"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="ease-out-smooth transition-opacity duration-300 select-none rounded-[inherit] object-cover"
                    src="https://portrait.so/images/home/grid/dog@2x.jpg"
                    style={{ position: "absolute", height: "100%", width: "100%", inset: 0, color: "transparent" }}
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-[20px] border border-black/[0.12] md:rounded-[24px] dark:border-black/[0.13]"></div>
              <div className="pointer-events-none absolute inset-[1px] rounded-[19px] border-x border-t border-white/20 md:rounded-[23px] dark:border dark:border-white/[0.13]"></div>
            </div>
          </div>
        </div>


        <div className="absolute inline-grid justify-center xl:auto-cols-[234px] xl:auto-rows-[234px] lg:auto-cols-[200px] lg:auto-rows-[200px] lg:gap-6 sm:auto-cols-[156px] sm:auto-rows-[156px] sm:gap-5 auto-cols-[122px] auto-rows-[122px] gap-4 -right-10 top-0 lg:right-[calc(50%-min(50vw,800px)+52px)] lg:top-5 lg:translate-x-1/2">
          <div
            className="rounded-[20px] md:rounded-3xl lg:col-span-1 col-span-1 lg:row-span-2 row-span-2"
            style={{
              touchAction: "none",
              transform: "translateX(-361px) translateY(907.594px)",
            }}
          >
            <div className="relative flex rounded-[20px] md:rounded-3xl col-span-1 row-span-1 after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:opacity-0 after:shadow-2xl after:transition-opacity size-full">
              <div className="relative flex size-full flex-1">
                <div className="overflow-hidden group relative rounded-[20px] md:rounded-3xl 2xl:p-3 lg:p-2.5 md:p-3 sm:p-2.5 p-1.5 flex flex-1 flex-col items-start gap-5 before:pointer-events-none after:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:shadow-sm before:transition-opacity after:absolute after:inset-0 after:rounded-[inherit] after:opacity-0 after:shadow-xl after:transition-opacity bg-white dark:bg-gray-900 pointer-events-none">
                  <img
                    alt="Image"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="ease-out-smooth transition-opacity duration-300 select-none rounded-[inherit] object-cover"
                    src="https://portrait.so/images/home/grid/women@2x.jpg"
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      inset: 0,
                      color: "transparent"
                    }}
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-[20px] border border-black/[0.12] md:rounded-[24px] dark:border-black/[0.13]"></div>
              <div className="pointer-events-none absolute inset-[1px] rounded-[19px] border-x border-t border-white/20 md:rounded-[23px] dark:border dark:border-white/[0.13]"></div>
            </div>
          </div>
        </div>


        <div className="absolute inline-grid justify-center xl:auto-cols-[234px] xl:auto-rows-[234px] lg:auto-cols-[200px] lg:auto-rows-[200px] lg:gap-6 sm:auto-cols-[156px] sm:auto-rows-[156px] sm:gap-5 auto-cols-[122px] auto-rows-[122px] gap-4 -left-[50px] top-[550px] sm:top-[600px] lg:left-[calc(50%-min(50vw,800px)+70px)] lg:top-[650px] lg:-translate-x-1/2">
          <div className="rounded-[20px] md:rounded-3xl lg:col-span-1 col-span-1 lg:row-span-1 row-span-1"
            style={{
              touchAction: "none",
              transform: "translateX(343px) translateY(535.594px);",
            }}>
            <div className="relative flex rounded-[20px] md:rounded-3xl col-span-1 row-span-1 after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:opacity-0 after:shadow-2xl after:transition-opacity size-full">
              <div className="relative flex size-full flex-1">
                <div className="overflow-hidden group relative rounded-[20px] md:rounded-3xl 2xl:p-3 lg:p-2.5 md:p-3 sm:p-2.5 p-1.5 flex flex-1 flex-col items-start gap-5 before:pointer-events-none after:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:shadow-sm before:transition-opacity after:absolute after:inset-0 after:rounded-[inherit] after:opacity-0 after:shadow-xl after:transition-opacity bg-white dark:bg-gray-900 pointer-events-none">
                  <img
                    alt="Image"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="ease-out-smooth transition-opacity duration-300 select-none rounded-[inherit] object-cover"
                    src="https://portrait.so/images/home/grid/gap-year@2x.jpg"
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      inset: 0,
                      color: "transparent"
                    }}
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-[20px] border border-black/[0.12] md:rounded-[24px] dark:border-black/[0.13]"></div>
              <div className="pointer-events-none absolute inset-[1px] rounded-[19px] border-x border-t border-white/20 md:rounded-[23px] dark:border dark:border-white/[0.13]"></div>
            </div>
          </div>
        </div>

      </div>


    </section >
  );
}