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

import { galleryImages } from '../constants/data';

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
            elementClassNames="w-full columns-2 sm:columns-2 lg:columns-2 xl:columns-4 gap-2 md:gap-4"
            thumbnail={true}
            autoplay={true}
          >
            {galleryImages
              .filter((image) => image.category === category)
              .map((image) => (
                <div
                  key={image.id}
                  className="gallery-item group mb-2 origin-center overflow-hidden transition-all duration-300 ease-linear md:mb-4"
                  data-src={image.image}
                >
                  <img
                    className="h-full w-full cursor-pointer object-cover shadow-lg transition duration-700 ease-in-out group-hover:scale-125"
                    src={image.image}
                    alt={image.title}
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
