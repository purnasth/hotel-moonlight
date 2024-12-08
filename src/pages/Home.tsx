import React from 'react';
import Slider from '../components/Slider';
import Services from '../components/ui/Services';
import DemoService from '../components/ui/DemoService';
import HighlightReview from '../components/ui/HighlightReview';
import About from '../components/About';
import Offers from '../components/Offers';
// import Intro from '../components/Intro';

const Home: React.FC = () => {
  return (
    <>
      {/* <Intro /> */}
      <Slider />
      <About />
      <Services />
      <Offers />
      <DemoService />

      <HighlightReview />
    </>
  );
};

export default Home;
