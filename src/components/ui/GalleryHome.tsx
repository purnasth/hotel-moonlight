import MultiSizeSlider from '../../layouts/MultiSizeSlider';
import { galleryImages } from '../../constants/data';

const GalleryHome = () => {
  return (
    <main className="p-0 translate-y-16">
      <MultiSizeSlider
        slides={galleryImages}
        hasContent={false}
        sizeClassName="relative h-96 flex items-center justify-center"
      />
    </main>
  );
};

export default GalleryHome;
