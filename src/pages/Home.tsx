import React from 'react';
import Slider from '../components/Slider';
import Services from '../components/ui/Services';
import DemoService from '../components/ui/DemoService';
import HighlightReview from '../components/ui/HighlightReview';
// import Intro from '../components/Intro';

const Home: React.FC = () => {
  return (
    <>
      {/* <Intro /> */}
      <Slider />
      <Services />

      <DemoService />

      <HighlightReview />
    </>
  );
};

export default Home;
