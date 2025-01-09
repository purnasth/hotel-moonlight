import React, { useRef, useState } from 'react';
import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-video.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-fullscreen.css';

const galleryImages = [
  {
    id: 1,
    url: 'https://hotelmoonlight.com/images/gallery/galleryimages/c0A4o-r1.jpg',
    alt: 'Stay',
    category: 'Stay',
  },
  {
    id: 2,
    url: 'https://hotelmoonlight.com/images/gallery/galleryimages/b4EyZ-r7.jpg',
    alt: 'Dine',
    category: 'Dine',
  },
  {
    id: 3,
    url: 'https://hotelmoonlight.com/images/gallery/galleryimages/5KZxo-h5.jpg',
    alt: 'Hall',
    category: 'Hall',
  },
  {
    id: 4,
    url: 'https://hotelmoonlight.com/images/gallery/galleryimages/055Di-e9.jpg',
    alt: 'Exterior',
    category: 'Exterior',
  },
  {
    id: 5,
    url: 'https://hotelmoonlight.com/images/gallery/galleryimages/YLgds-r14.jpg',
    alt: 'Stay',
    category: 'Stay',
  },
  {
    id: 6,
    url: 'https://hotelmoonlight.com/images/gallery/galleryimages/pJzQ6-r3.jpg',
    alt: 'Dine',
    category: 'Dine',
  },
  {
    id: 7,
    url: 'https://hotelmoonlight.com/images/gallery/galleryimages/Zkz2s-h2.jpg',
    alt: 'Hall',
    category: 'Hall',
  },
  {
    id: 8,
    url: 'https://hotelmoonlight.com/images/gallery/galleryimages/FtZ2D-e5.jpg',
    alt: 'Exterior',
    category: 'Exterior',
  },
  {
    id: 9,
    url: 'https://hotelmoonlight.com/images/gallery/galleryimages/2sbo2-r11.jpg',
    alt: 'Stay',
    category: 'Stay',
  },
  {
    id: 10,
    url: 'https://hotelmoonlight.com/images/gallery/galleryimages/6hgTT-r11.jpg',
    alt: 'Dine',
    category: 'Dine',
  },
  {
    id: 11,
    url: 'https://hotelmoonlight.com/images/gallery/galleryimages/PCsIm-h7.jpg',
    alt: 'Hall',
    category: 'Hall',
  },
  {
    id: 12,
    url: 'https://hotelmoonlight.com/images/gallery/galleryimages/sfcI4-e4.jpg',
    alt: 'Exterior',
    category: 'Exterior',
  },
  {
    id: 13,
    url: 'https://hotelmoonlight.com/images/gallery/galleryimages/ymv9M-r5.jpg',
    alt: 'Stay',
    category: 'Stay',
  },
  {
    id: 14,
    url: 'https://hotelmoonlight.com/images/gallery/galleryimages/nKalB-r1.jpg',
    alt: 'Dine',
    category: 'Dine',
  },
  {
    id: 15,
    url: 'https://hotelmoonlight.com/images/gallery/galleryimages/EJ0XL-h4.jpg',
    alt: 'Hall',
    category: 'Hall',
  },
  {
    id: 16,
    url: 'https://hotelmoonlight.com/images/gallery/galleryimages/JfNu4-e1.jpg',
    alt: 'Exterior',
    category: 'Exterior',
  },
];

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null); // Ref to gallery container

  const filteredImages =
    activeCategory === 'All'
      ? galleryImages
      : galleryImages.filter((image) => image.category === activeCategory);

  const categories = [
    'All',
    ...new Set(galleryImages.map((image) => image.category)),
  ];

  const handleCategoryClick = (category: string) => {
    setIsTransitioning(true);
    setActiveCategory(category);

    setTimeout(() => {
      setIsTransitioning(false);
      if (galleryRef.current) {
        // Scroll to the top of the gallery
        galleryRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }, 200);
  };

  return (
    <>
      <div className="sticky top-0 z-40 flex flex-wrap justify-center gap-4 bg-light p-2 md:px-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`${
              activeCategory === category ? 'text-gradient' : 'text-dark/50'
            } hidden transition-linear hover:text-custom-black hover:bg-custom-black/5 rounded-md px-1 py-2 font-title text-xs font-bold uppercase md:px-4 md:py-2 md:text-sm lg:text-base`}
          >
            {category}
          </button>
        ))}
      </div>
      <div ref={galleryRef} className="scroll-mt-20">
        <LightGallery
          plugins={[lgZoom, lgVideo, lgThumbnail, lgFullscreen]}
          mode="lg-fade"
          elementClassNames={`w-full columns-1 sm:columns-2 lg:columns-2 xl:columns-4 gap-4 md:gap-4 transition-linear scroll-mt-64 ${
            isTransitioning ? 'translate-y-1/2' : 'translate-y-0'
          }`}
          thumbnail={true}
          autoplay={true}
        >
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className={`gallery-item group mb-4 origin-center overflow-hidden transition-all duration-300 ease-linear md:mb-4 ${
                isTransitioning ? 'scale-0' : 'scale-100'
              }`}
              data-src={image.url}
            >
              <img
                className="h-full w-full cursor-pointer object-cover shadow-lg transition duration-700 ease-in-out group-hover:scale-125"
                src={image.url}
                alt={image.alt}
                loading="lazy"
              />
            </div>
          ))}
        </LightGallery>
      </div>
    </>
  );
};

export default Gallery;
