'use client';

import React, { useEffect, useRef, useState } from 'react';
import { clsx } from 'clsx';

type CarouselProps = {
  items: React.ReactNode[];
  autoPlay?: boolean;
  autoPlayDelay?: number;
  className?: string;
};

const Carousel: React.FC<CarouselProps> = ({
  items,
  autoPlay = true,
  autoPlayDelay = 3000,
  className = '',
}) => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const total = items.length;

  const nextSlide = () => setCurrent((prev) => (prev + 1) % total);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + total) % total);

  useEffect(() => {
    if (autoPlay) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(nextSlide, autoPlayDelay);
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current, autoPlay, autoPlayDelay]);

  return (
    <div className={clsx('relative overflow-hidden', className)}>
      <div className="flex transition-transform duration-500 ease-in-out"
           style={{ transform: `translateX(-${current * 100}%)`, width: `${total * 100}%` }}>
        {items.map((item, index) => (
          <div key={index} className="w-full flex-shrink-0">
            {item}
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 text-black px-3 py-1 rounded-full shadow hover:bg-white transition"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 text-black px-3 py-1 rounded-full shadow hover:bg-white transition"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={clsx(
              'w-3 h-3 rounded-full',
              current === index ? 'bg-blue-600' : 'bg-gray-300'
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
