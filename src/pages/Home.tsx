import React from 'react';
// import Services from '../components/ui/Services';
// import DemoService from '../components/ui/DemoService';
// import HighlightReview from '../components/ui/HighlightReview';
import About from '../components/About';
// import Offers from '../components/Offers';
// import Gallery from '../components/ui/Gallery';
// import BookingRating from '../components/ui/BookingRating';
// import Hero from '../components/Hero';
import IntroVideo from '../components/IntroVideo';
import AccommodationHome from '../components/AccommodationHome';
import GalleryHome from '../components/ui/GalleryHome';
import ServicesHome from '../components/ui/ServicesHome';

const Home: React.FC = () => {
  return (
    <>
      {/* <Intro /> */}
      <IntroVideo />
      {/* <Hero /> */}
      <About />
      <AccommodationHome />
      <ServicesHome />
      {/* <Services /> */}
      {/* <Offers /> */}
      <GalleryHome />
      {/* <main className="p-0 px-4">
        <Gallery />
        <div className="item-center mt-8 flex justify-center pb-16">
          <BookingRating />
        </div>
      </main> */}
      {/* <DemoService /> */}
      {/* <HighlightReview /> */}
    </>
  );
};

export default Home;
