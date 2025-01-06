import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { TbArrowNarrowLeft, TbArrowNarrowRight } from 'react-icons/tb';
import type { Swiper as SwiperType } from 'swiper';

// Define the type for testimonial content
interface Testimonial {
  author: string;
  source: string;
  sourceImage: string;
  review: string;
}

const testimonialsContent: Testimonial[] = [
  {
    author: 'Purna Shrestha',
    source: 'Google Review',
    sourceImage: 'https://www.purnashrestha.com.np/assets/hero-DDSQy-9a.avif',
    review:
      'The best place for the best service. I love the way they treat their customers. I am very happy with their service. I highly recommend this place to everyone. Thank You Hotel Moonlight for making our family stay memorable.',
  },
  {
    author: 'Purna Shrestha',
    source: 'Google Review',
    sourceImage: 'https://www.purnashrestha.com.np/assets/hero-DDSQy-9a.avif',
    review:
      'The best place for the best service. I love the way they treat their customers. I am very happy with their service. I highly recommend this place to everyone. Thank You Hotel Moonlight for making our family stay memorable.',
  },
  {
    author: 'Purna Shrestha',
    source: 'Google Review',
    sourceImage: 'https://www.purnashrestha.com.np/assets/hero-DDSQy-9a.avif',
    review:
      'The best place for the best service. I love the way they treat their customers. I am very happy with their service. I highly recommend this place to everyone. Thank You Hotel Moonlight for making our family stay memorable.',
  },
  {
    author: 'Purna Shrestha',
    source: 'Google Review',
    sourceImage: 'https://www.purnashrestha.com.np/assets/hero-DDSQy-9a.avif',
    review:
      'The best place for the best service. I love the way they treat their customers. I am very happy with their service. I highly recommend this place to everyone. Thank You Hotel Moonlight for making our family stay memorable.',
  },
  {
    author: 'Purna Shrestha',
    source: 'Google Review',
    sourceImage: 'https://www.purnashrestha.com.np/assets/hero-DDSQy-9a.avif',
    review:
      'The best place for the best service. I love the way they treat their customers. I am very happy with their service. I highly recommend this place to everyone. Thank You Hotel Moonlight for making our family stay memorable.',
  },
];

const TestimonialSlider: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  return (
    <div className="relative z-20 mt-8">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 5000 }}
        loop={true}
        // slidesPerView={4}
        spaceBetween={30} // Adds spacing between slides
        breakpoints={{
          640: { slidesPerView: 1 }, // 1 slide on smaller screens
          768: { slidesPerView: 2 }, // 2 slides on medium screens
          1024: { slidesPerView: 3 }, // 3 slides on large screens
          1280: { slidesPerView: 3 }, // 4 slides on extra-large screens
        }}
        className="h-full"
      >
        {testimonialsContent.map((content, index) => (
          <SwiperSlide key={index} className="flex flex-col items-center">
            <p className="review text-justify text-sm text-white sm:text-base md:text-justify leading-loose font-light">
              {content.review}
            </p>
            <div className="mt-12 flex items-center justify-center gap-3">
              <img
                src={content.sourceImage}
                alt={content.author}
                className="size-12 rounded-full border bg-white object-contain shadow"
              />
              <div className="text-left">
                <p className="text-lg font-bold">{content.author}</p>
                <p className="text-sm">{content.source}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="z-10 mt-16 flex items-center justify-center gap-5">
        <button
          className="transition-300 rounded-full border px-5 py-1 shadow backdrop-blur hover:opacity-50"
          onClick={handlePrev}
          aria-label="Previous"
          title="Previous"
        >
          <TbArrowNarrowLeft />
        </button>
        <button
          className="transition-300 rounded-full border px-5 py-1 shadow backdrop-blur hover:opacity-50"
          onClick={handleNext}
          aria-label="Next"
          title="Next"
        >
          <TbArrowNarrowRight />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
