// import athithiArts from '../assets/arts/athithi.png';
// import moonLight from '../assets/arts/moon.png';

import slider1 from '../assets/images/slide/1.webp';
import slider2 from '../assets/images/slide/2.webp';
import slider3 from '../assets/images/slide/3.webp';
import slider4 from '../assets/images/slide/4.webp';
import slider5 from '../assets/images/slide/5.webp';
import slider6 from '../assets/images/slide/6.webp';

// import MasterSlider from '../layouts/MasterSlider';
import MultiSizeSlider from '../layouts/MultiSizeSlider';

const sliderImages = [
  {
    image: slider1,
    title: 'Hotel Moonlight',
  },
  {
    image: slider2,
    title: 'Hotel Moonlight',
  },
  {
    image: slider3,
    title: 'Hotel Moonlight',
  },
  {
    image: slider4,
    title: 'Hotel Moonlight',
  },
  {
    image: slider5,
    title: 'Hotel Moonlight',
  },
  {
    image: slider6,
    title: 'Hotel Moonlight',
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

      <div className="container space-y-4 text-center md:space-y-8">
        {/* <h2 className="text-3xl">Athithi Devo Bhava</h2> */}
        <h2 className="text-2xl font-medium md:text-4xl">अतिथि देवो भव:</h2>

        <h3 className="text-gradient text-2xl leading-snug md:text-4xl lg:text-6xl lg:leading-snug">
          The Hotel Moonlight is more than 'bricks & stones', it's about our
          people & our guests.
        </h3>
        {/* <p className="mx-auto mb-12 max-w-xl px-4 text-center text-base opacity-70 lg:mb-24">
          Hotel Moonlight offers all the modern facilities you would expect,
          while retaining traditional Nepali ambiance and hospitality. From our
          front gate you can take an easy stroll to the hustle and bustle of
          Thamel, with its array of shops, restaurants, bars and nightlife.
        </p> */}
      </div>

      <div className="col-span-2 mt-12 md:mt-24">
        {/* <iframe
            src="https://www.youtube.com/embed/_jfHeaH6Xwk"
            title="Hotel moonlight | Kathmandu Hotels | Thamel Hotel | Hotel Promo Video | Longtail e-media"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className="size-full min-h-[28.75rem]"
          ></iframe> */}

        <MultiSizeSlider
          slides={sliderImages}
          hasContent={false}
          sizeClassName="relative flex h-80 md:h-[65vh] items-center justify-center"
        />
      </div>
    </main>
  );
};

export default About;
