import React from 'react';
import Slider from '../components/Slider';
import Services from '../components/ui/Services';
import DemoService from '../components/ui/DemoService';
import HighlightReview from '../components/ui/HighlightReview';
import About from '../components/About';
import Offers from '../components/Offers';
import Gallery from '../components/ui/Gallery';
import BookingRating from '../components/ui/BookingRating';

const Home: React.FC = () => {
  return (
    <>
      {/* <Intro /> */}
      <Slider />
      <About />
      <Services />
      <Offers />
      <main className="p-12 px-4">
        <Gallery />
        <div className="item-center flex justify-center">
          <BookingRating />
        </div>
      </main>
      <DemoService />
      <HighlightReview />
    </>
  );
};

export default Home;
