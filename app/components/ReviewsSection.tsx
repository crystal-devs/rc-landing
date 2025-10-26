'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

type Review = {
  name: string;
  content: string;
  rating: number;
  avatar: string;
};

interface ScrollingRowProps {
  reviews: Review[];
  speed?: number;
  direction?: 'left' | 'right';
  pauseOnHover?: boolean;
  fadeOut?: boolean;
  fadeOutColor?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ANIMATION_CONFIG = {
  SMOOTH_TAU: 0.25,
  MIN_COPIES: 2,
  COPY_HEADROOM: 2
} as const;

const cx = (...parts: Array<string | false | null | undefined>) => parts.filter(Boolean).join(' ');

const useResizeObserver = (
  callback: () => void,
  elements: Array<React.RefObject<Element | null>>,
  dependencies: React.DependencyList
) => {
  useEffect(() => {
    if (!window.ResizeObserver) {
      const handleResize = () => callback();
      window.addEventListener('resize', handleResize);
      callback();
      return () => window.removeEventListener('resize', handleResize);
    }

    const observers = elements.map(ref => {
      if (!ref.current) return null;
      const observer = new ResizeObserver(callback);
      observer.observe(ref.current);
      return observer;
    });

    callback();

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, dependencies);
};

const useAnimationLoop = (
  trackRef: React.RefObject<HTMLDivElement | null>,
  targetVelocity: number,
  seqWidth: number,
  isHovered: boolean,
  pauseOnHover: boolean
) => {
  const rafRef = useRef<number | null>(null);
  const lastTimestampRef = useRef<number | null>(null);
  const offsetRef = useRef(0);
  const velocityRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (seqWidth > 0) {
      offsetRef.current = ((offsetRef.current % seqWidth) + seqWidth) % seqWidth;
      track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
    }

    if (prefersReduced) {
      track.style.transform = 'translate3d(0, 0, 0)';
      return () => {
        lastTimestampRef.current = null;
      };
    }

    const animate = (timestamp: number) => {
      if (lastTimestampRef.current === null) {
        lastTimestampRef.current = timestamp;
      }

      const deltaTime = Math.max(0, timestamp - lastTimestampRef.current) / 1000;
      lastTimestampRef.current = timestamp;

      const target = pauseOnHover && isHovered ? 0 : targetVelocity;

      const easingFactor = 1 - Math.exp(-deltaTime / ANIMATION_CONFIG.SMOOTH_TAU);
      velocityRef.current += (target - velocityRef.current) * easingFactor;

      if (seqWidth > 0) {
        let nextOffset = offsetRef.current + velocityRef.current * deltaTime;
        nextOffset = ((nextOffset % seqWidth) + seqWidth) % seqWidth;
        offsetRef.current = nextOffset;

        const translateX = -offsetRef.current;
        track.style.transform = `translate3d(${translateX}px, 0, 0)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      lastTimestampRef.current = null;
    };
  }, [targetVelocity, seqWidth, isHovered, pauseOnHover]);
};

const ScrollingRow: React.FC<ScrollingRowProps> = ({
  reviews,
  speed = 30,
  direction = 'left',
  pauseOnHover = true,
  fadeOut = false,
  fadeOutColor,
  className,
  style
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const seqRef = useRef<HTMLDivElement>(null);

  const [seqWidth, setSeqWidth] = useState<number>(0);
  const [copyCount, setCopyCount] = useState<number>(ANIMATION_CONFIG.MIN_COPIES);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const targetVelocity = useMemo(() => {
    const magnitude = Math.abs(speed);
    const directionMultiplier = direction === 'left' ? 1 : -1;
    const speedMultiplier = speed < 0 ? -1 : 1;
    return magnitude * directionMultiplier * speedMultiplier;
  }, [speed, direction]);

  const updateDimensions = useCallback(() => {
    const containerWidth = containerRef.current?.clientWidth ?? 0;
    const sequenceWidth = seqRef.current?.getBoundingClientRect()?.width ?? 0;

    if (sequenceWidth > 0) {
      setSeqWidth(Math.ceil(sequenceWidth));
      const copiesNeeded = Math.ceil(containerWidth / sequenceWidth) + ANIMATION_CONFIG.COPY_HEADROOM;
      setCopyCount(Math.max(ANIMATION_CONFIG.MIN_COPIES, copiesNeeded));
    }
  }, []);

  useResizeObserver(updateDimensions, [containerRef, seqRef], [reviews]);

  useAnimationLoop(trackRef, targetVelocity, seqWidth, isHovered, pauseOnHover);

  const handleMouseEnter = useCallback(() => {
    if (pauseOnHover) setIsHovered(true);
  }, [pauseOnHover]);

  const handleMouseLeave = useCallback(() => {
    if (pauseOnHover) setIsHovered(false);
  }, [pauseOnHover]);

  const ReviewCard = ({ review }: { review: Review }) => (
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 w-[350px] mx-3 flex-shrink-0">
      <div className="flex items-center mb-3">
        {[...Array(review.rating)].map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5 text-yellow-400 fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>
      <p className="text-gray-700 mb-4 leading-relaxed text-sm">
        "{review.content}"
      </p>
      <div className="flex items-center">
        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-3">
          {review.avatar}
        </div>
        <div>
          <div className="font-semibold text-gray-900 text-sm">
            {review.name}
          </div>
        </div>
      </div>
    </div>
  );

  const cssVariables = useMemo(
    () =>
      ({
        ...(fadeOutColor && { '--review-fadeColor': fadeOutColor })
      }) as React.CSSProperties,
    [fadeOutColor]
  );

  const containerClasses = useMemo(
    () =>
      cx(
        'relative overflow-x-hidden group',
        '[--review-fadeColorAuto:#f9fafb]',
        className
      ),
    [className]
  );

  const containerStyle = useMemo(
    (): React.CSSProperties => ({
      ...cssVariables,
      ...style
    }),
    [cssVariables, style]
  );

  const reviewSequences = useMemo(
    () =>
      Array.from({ length: copyCount }, (_, copyIndex) => (
        <div
          className="flex items-center"
          key={`copy-${copyIndex}`}
          ref={copyIndex === 0 ? seqRef : undefined}
        >
          {reviews.map((review, itemIndex) => (
            <ReviewCard key={`${copyIndex}-${itemIndex}`} review={review} />
          ))}
        </div>
      )),
    [copyCount, reviews]
  );

  return (
    <div
      ref={containerRef}
      className={containerClasses}
      style={containerStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {fadeOut && (
        <>
          <div
            aria-hidden
            className={cx(
              'pointer-events-none absolute inset-y-0 left-0 z-[1]',
              'w-[clamp(24px,8%,120px)]',
              'bg-[linear-gradient(to_right,var(--review-fadeColor,var(--review-fadeColorAuto))_0%,rgba(0,0,0,0)_100%)]'
            )}
          />
          <div
            aria-hidden
            className={cx(
              'pointer-events-none absolute inset-y-0 right-0 z-[1]',
              'w-[clamp(24px,8%,120px)]',
              'bg-[linear-gradient(to_left,var(--review-fadeColor,var(--review-fadeColorAuto))_0%,rgba(0,0,0,0)_100%)]'
            )}
          />
        </>
      )}
      <div
        className={cx('flex w-max will-change-transform select-none', 'motion-reduce:transform-none')}
        ref={trackRef}
      >
        {reviewSequences}
      </div>
    </div>
  );
};

export default function ReviewsSection() {
  const reviews: Review[] = [
    {
      name: "Sarah Johnson",
      content: "RC Landing transformed our wedding photography experience. Guests loved being able to upload photos instantly, and the real-time display created such an engaging atmosphere. Our couple was thrilled!",
      rating: 5,
      avatar: "SJ",
    },
    {
      name: "Michael Chen",
      content: "The ease of setup is incredible. No app downloads, just QR codes - and boom, everyone was participating. The photo quality and real-time updates made our corporate gala unforgettable.",
      rating: 5,
      avatar: "MC",
    },
    {
      name: "Emily Rodriguez",
      content: "I've used many photo sharing solutions, but RC Landing stands out with its simplicity and speed. The moderation features give me peace of mind, and the analytics help me understand what works.",
      rating: 5,
      avatar: "ER",
    },
    {
      name: "David Thompson",
      content: "For our 500+ attendee conference, RC Landing handled the load perfectly. Real-time photo walls in multiple locations kept everyone engaged. The support team was fantastic too.",
      rating: 5,
      avatar: "DT",
    },
    {
      name: "Lisa Park",
      content: "We use RC Landing for all our private events. The instant sharing creates such a fun, interactive atmosphere. Our guests love it, and it definitely increases our event bookings.",
      rating: 5,
      avatar: "LP",
    },
    {
      name: "James Wilson",
      content: "Game days are now so much more exciting with live photo sharing. Parents, players, and fans can all contribute instantly. It's become a highlight of our events.",
      rating: 5,
      avatar: "JW",
    },
  ];

  // Split into two rows
  const half = Math.ceil(reviews.length / 2);
  const firstRow = reviews.slice(0, half);
  const secondRow = reviews.slice(half);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Loved by Event Professionals
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See what event organizers, wedding planners, and party hosts are
            saying about RC Landing.
          </p>
        </div>

        {/* Scrolling Reviews */}
        <div className="space-y-8">
          {/* Row 1 - Right to Left */}
          <ScrollingRow
            reviews={firstRow}
            direction="left"
            speed={30}
            pauseOnHover={true}
            fadeOut={true}
          />

          {/* Row 2 - Left to Right */}
          <ScrollingRow
            reviews={secondRow}
            direction="right"
            speed={30}
            pauseOnHover={true}
            fadeOut={true}
          />
        </div>

        {/* Stats Section */}
        <div className="mt-20 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div>
              <div className="text-3xl font-bold text-gray-900">10,000+</div>
              <div className="text-gray-600">Events Hosted</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">500K+</div>
              <div className="text-gray-600">Photos Shared</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">99.9%</div>
              <div className="text-gray-600">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}