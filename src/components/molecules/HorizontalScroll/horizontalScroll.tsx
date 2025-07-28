import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react'; 

const items = [
  'Element 1',
  'Element 2',
  'Element 3',
  'Element 4',
  'Element 5',
];

const HorizontalScrollComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < items.length - 1 ? prev + 1 : prev));
  };

  return (
    <div className="w-full flex flex-col items-center gap-4">
      <div className="flex items-center gap-2">
        <button
          onClick={handlePrev}
          className="bg-gray-200 hover:bg-gray-300 rounded-full p-2"
        >
          <ChevronLeft />
        </button>

        <div className="flex overflow-hidden w-64">
          <div
            className="flex transition-transform duration-300"
            style={{ transform: `translateX(-${currentIndex * 100}%)`, width: `${items.length * 100}%` }}
          >
            {items.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-64 h-40 flex items-center justify-center bg-blue-100 rounded-md shadow-md"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handleNext}
          className="bg-gray-200 hover:bg-gray-300 rounded-full p-2"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default HorizontalScrollComponent;
