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
      'The best place for the best service. I love the way they treat their customers. I am very happy with their service. I highly recommend this place to everyone.',
  },
  // Add more testimonials for demonstration
  {
    author: 'John Doe',
    source: 'Google Review',
    sourceImage: 'https://via.placeholder.com/150',
    review:
      'Excellent service and friendly staff. Highly recommended for everyone looking for quality!',
  },
  {
    author: 'Jane Smith',
    source: 'Google Review',
    sourceImage: 'https://via.placeholder.com/150',
    review:
      'I was amazed by their service quality. Truly a wonderful experience. Would love to visit again.',
  },
  {
    author: 'Chris Brown',
    source: 'Google Review',
    sourceImage: 'https://via.placeholder.com/150',
    review:
      'A delightful experience with exceptional customer care. Five stars for sure!',
  },
  {
    author: 'Emily Clark',
    source: 'Google Review',
    sourceImage: 'https://via.placeholder.com/150',
    review:
      'The team is fantastic, and the services exceeded my expectations. I would definitely recommend them!',
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
    <div className="relative mt-8">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 5000 }}
        loop={true}
        slidesPerView={4}
        spaceBetween={30} // Adds spacing between slides
        breakpoints={{
          640: { slidesPerView: 1 }, // 1 slide on smaller screens
          768: { slidesPerView: 2 }, // 2 slides on medium screens
          1024: { slidesPerView: 3 }, // 3 slides on large screens
          1280: { slidesPerView: 4 }, // 4 slides on extra-large screens
        }}
        className="h-full"
      >
        {testimonialsContent.map((content, index) => (
          <SwiperSlide key={index} className="flex flex-col items-center">
            <p className="review text-justify text-sm sm:text-base md:text-pretty">
              {content.review}
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <img
                src={content.sourceImage}
                alt={content.author}
                className="size-12 rounded-full border bg-white object-contain shadow"
              />
              <div className="text-left">
                <p className="caps text-base font-bold">{content.author}</p>
                <p className="text-xs">{content.source}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="z-10 mt-5 flex items-center justify-center gap-5">
        <button
          className="rounded-full border px-5 py-1 text-dark shadow backdrop-blur hover:bg-dark/10"
          onClick={handlePrev}
          aria-label="Previous"
          title="Previous"
        >
          <TbArrowNarrowLeft />
        </button>
        <button
          className="rounded-full border px-5 py-1 text-dark shadow backdrop-blur hover:bg-dark/10"
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
