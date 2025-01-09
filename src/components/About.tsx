// import athithiArts from '../assets/arts/athithi.png';
// import moonLight from '../assets/arts/moon.png';

import slider1 from '../assets/images/slide/1.webp';
import slider2 from '../assets/images/slide/2.webp';
import slider3 from '../assets/images/slide/3.webp';
import slider4 from '../assets/images/slide/4.webp';
import slider5 from '../assets/images/slide/5.webp';
import slider6 from '../assets/images/slide/6.webp';

import MasterSlider from '../layouts/MasterSlider';

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

      <div className="container space-y-8 text-center">
        <h2 className="text-3xl">Athithi Devo Bhava</h2>

        <h3 className="text-gradient leading-snug text-2xl md:text-4xl lg:text-6xl lg:leading-snug">
          The Hotel Moonlight is more than 'bricks & stones', it's about our
          people & our guests.
        </h3>
      </div>

      <div className="col-span-2 mt-12 md:mt-24">
        {/* <iframe
            src="https://www.youtube.com/embed/_jfHeaH6Xwk"
            title="Hotel moonlight | Kathmandu Hotels | Thamel Hotel | Hotel Promo Video | Longtail e-media"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className="size-full min-h-[28.75rem]"
          ></iframe> */}

        <MasterSlider
          slides={sliderImages}
          hasContent={true}
          sizeClassName="relative flex h-80 md:h-[50vh] xl:h-[110vh] items-center justify-center"
        />
      </div>
    </main>
  );
};

export default About;
