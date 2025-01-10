import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import MultiSizeSliderNavigation from '../components/ui/MultiSizeSliderNavigation';

interface Slide {
  image: string;
  title?: string;
  description?: string;
}

interface MultiSizeSliderProps {
  slides: Slide[];
  hasContent?: boolean;
  autoplay?: boolean;
  speed?: number;
  delay?: number;
  slidesPerView?: number | 'auto';
  sizeClassName?: string;
  title?: string;
}

const MultiSizeSlider: React.FC<MultiSizeSliderProps> = ({
  slides,
  hasContent = false,
  autoplay = true,
  speed = 2000,
  delay = 3000,
  slidesPerView = 'auto',
  sizeClassName,
  title,
}) => {
  const swiperRef = useRef<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.on('slideChange', () => {
        setCurrentIndex(swiperRef.current.realIndex);
      });
    }
  }, []);

  const handleNext = () => swiperRef.current?.slideNext();
  const handlePrev = () => swiperRef.current?.slidePrev();

  return (
    <>
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        autoplay={autoplay ? { delay, disableOnInteraction: false } : undefined}
        loop={true}
        speed={speed}
        spaceBetween={30}
        slidesPerView={slidesPerView}
        // effect="fade"
        // fadeEffect={{ crossFade: true }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        centeredSlides={slidesPerView !== 'auto'}
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className={`${
              index % 2 === 0 ? 'w-[400px]' : 'w-[300px]'
            } ${sizeClassName} flex flex-col gap-4 pb-12`}
          >
            <img
              src={slide.image}
              alt={slide.title || `Slide ${index + 1}`}
              className="h-full w-full object-cover"
            />
            <h2 className="inline-block text-3xl">
              {hasContent && <h2>{title}</h2>}
            </h2>
          </SwiperSlide>
        ))}
      </Swiper>

      <MultiSizeSliderNavigation
        currentIndex={currentIndex}
        totalItems={slides.length}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </>
  );
};

export default MultiSizeSlider;
