import React from 'react';
import { TbArrowNarrowRight, TbArrowNarrowLeft } from 'react-icons/tb';
import { RxSlash } from 'react-icons/rx';

interface SliderNavigationProps {
  currentIndex: number;
  totalItems: number;
  onNext: () => void;
  onPrev: () => void;
}

const SliderNavigation: React.FC<SliderNavigationProps> = ({
  // currentIndex,
  // totalItems,
  onNext,
  onPrev,
}) => {
  return (
    <div className="bg-gradient mb-16 flex h-7 items-center gap-0 overflow-hidden rounded-full border border-light/40 px-4">
      <button
        onClick={onPrev}
        aria-label="Previous"
        className="text-2xl text-light"
      >
        <TbArrowNarrowLeft />
        {/* &larr; */}
      </button>
      {/* <span className="text-base">
        {currentIndex + 1} / {totalItems}
      </span> */}

      <RxSlash className="scale-x-50 scale-y-110 text-3xl text-light" />
      <button
        onClick={onNext}
        aria-label="Next"
        className="text-2xl text-light"
      >
        {/* &rarr; */}
        <TbArrowNarrowRight />
      </button>
    </div>
  );
};

export default SliderNavigation;
