import React from 'react';
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
    alt: 'Accommodation',
    category: 'Accommodation',
  },
  {
    id: 2,
    url: 'https://hotelmoonlight.com/images/gallery/galleryimages/b4EyZ-r7.jpg',
    alt: 'Fine Dine',
    category: 'Fine Dine',
  },
  {
    id: 3,
    url: 'https://hotelmoonlight.com/images/gallery/galleryimages/5KZxo-h5.jpg',
    alt: 'Occasion',
    category: 'Occasion',
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
    alt: 'Accommodation',
    category: 'Accommodation',
  },
  {
    id: 6,
    url: 'https://hotelmoonlight.com/images/gallery/galleryimages/pJzQ6-r3.jpg',
    alt: 'Fine Dine',
    category: 'Fine Dine',
  },
  {
    id: 7,
    url: 'https://hotelmoonlight.com/images/gallery/galleryimages/Zkz2s-h2.jpg',
    alt: 'Occasion',
    category: 'Occasion',
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
    alt: 'Accommodation',
    category: 'Accommodation',
  },
  {
    id: 10,
    url: 'https://hotelmoonlight.com/images/gallery/galleryimages/6hgTT-r11.jpg',
    alt: 'Fine Dine',
    category: 'Fine Dine',
  },
  {
    id: 11,
    url: 'https://hotelmoonlight.com/images/gallery/galleryimages/PCsIm-h7.jpg',
    alt: 'Occasion',
    category: 'Occasion',
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
    alt: 'Accommodation',
    category: 'Accommodation',
  },
  {
    id: 14,
    url: 'https://hotelmoonlight.com/images/gallery/galleryimages/nKalB-r1.jpg',
    alt: 'Fine Dine',
    category: 'Fine Dine',
  },
  {
    id: 15,
    url: 'https://hotelmoonlight.com/images/gallery/galleryimages/EJ0XL-h4.jpg',
    alt: 'Occasion',
    category: 'Occasion',
  },
  {
    id: 16,
    url: 'https://hotelmoonlight.com/images/gallery/galleryimages/JfNu4-e1.jpg',
    alt: 'Exterior',
    category: 'Exterior',
  },
];

const categories = [...new Set(galleryImages.map((image) => image.category))];

const GalleryPage: React.FC = () => {
  return (
    <main className="space-y-16 px-4">
      {categories.map((category) => (
        <div key={category}>
          <h2 className="my-8 text-4xl">{category}</h2>
          <LightGallery
            plugins={[lgZoom, lgVideo, lgThumbnail, lgFullscreen]}
            mode="lg-fade"
            elementClassNames="w-full columns-3 sm:columns-2 lg:columns-3 xl:columns-4 gap-2 md:gap-4"
            thumbnail={true}
            autoplay={true}
          >
            {galleryImages
              .filter((image) => image.category === category)
              .map((image) => (
                <div
                  key={image.id}
                  className="gallery-item group mb-2 origin-center overflow-hidden transition-all duration-300 ease-linear md:mb-4"
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
      ))}
    </main>
  );
};

export default GalleryPage;
