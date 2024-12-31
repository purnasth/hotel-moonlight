// import athithiArts from '../assets/arts/athithi.png';
// import moonLight from '../assets/arts/moon.png';

import MasterSlider from '../layouts/MasterSlider';

const sliderImages = [
  {
    image: 'https://hotelmoonlight.com/images/slideshow/Nk7Bq-slide1.jpg',
    title: 'Welcome to Hotel Moonlight',
  },
  {
    image: 'https://hotelmoonlight.com/images/slideshow/2WkOb-slide2.jpg',
    title: 'Indulge in the luxury of our rooms',
  },
  {
    image: 'https://hotelmoonlight.com/images/slideshow/egdfB-slider3.jpg',
    title: 'Taste the best of Nepali cuisine',
  },
  {
    image: 'https://hotelmoonlight.com/images/slideshow/r09zz-slide3.jpg',
    title: 'Wellness and relaxation',
  },
];

const About = () => {
  return (
    <main className="px-0 pb-0">
      {/* <img
        src={moonLight}
        alt=""
        className="absolute bottom-0 -z-10 opacity-80"
      /> */}
      {/* <div className="flex flex-col items-center justify-center">
        <img
          src={athithiArts}
          alt="Athithi Devo Bhava"
          className="filter-black"
        />
        <h2 className="text-center text-3xl">Athithi Devo Bhava</h2>
      </div> */}

      <div className="container space-y-8 text-center">
        <h2 className="text-3xl">Athithi Devo Bhava</h2>

        <h3 className="text-gradient text-6xl leading-snug">
          The Hotel Moonlight is more than 'bricks & stones', it's about our
          people & our guests.
        </h3>
      </div>

      <div className="col-span-2 mt-24">
        {/* <iframe
            src="https://www.youtube.com/embed/_jfHeaH6Xwk"
            title="Hotel moonlight | Kathmandu Hotels | Thamel Hotel | Hotel Promo Video | Longtail e-media"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className="size-full min-h-[28.75rem]"
          ></iframe> */}

        <MasterSlider slides={sliderImages} hasContent={true} />
      </div>
    </main>
  );
};

export default About;
