import React from 'react';
import Services from '../components/ui/Services';
// import DemoService from '../components/ui/DemoService';
// import HighlightReview from '../components/ui/HighlightReview';
import About from '../components/About';
import Offers from '../components/Offers';
import Gallery from '../components/ui/Gallery';
import BookingRating from '../components/ui/BookingRating';
import Hero from '../components/Hero';

const Home: React.FC = () => {
  return (
    <>
      {/* <Intro /> */}
      <Hero />
      <About />
      <Services />
      <Offers />
      <main className="p-0 px-4">
        <Gallery />
        <div className="item-center flex justify-center mt-8 pb-16">
          <BookingRating />
        </div>
      </main>
      {/* <DemoService /> */}
      {/* <HighlightReview /> */}
    </>
  );
};

export default Home;
