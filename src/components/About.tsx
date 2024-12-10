import athithiArts from '../assets/arts/athithi.png';
import moonLight from '../assets/arts/moon.png';

const About = () => {
  return (
    <main>
      <img src={moonLight} alt="" className="absolute bottom-0 -z-10 opacity-80" />
      <div className="flex flex-col items-center justify-center">
        <img
          src={athithiArts}
          alt="Athithi Devo Bhava"
          className="filter-black"
        />
        <h1 className="text-center text-8xl">Athithi Devo Bhava</h1>
      </div>

      <div className="container mt-24">
        <h2 className="text-gradient text-5xl leading-snug">
          The Hotel Moonlight is more than 'bricks & stones', it's about our
          people & our guests.
        </h2>

        <div className="mt-12 grid grid-cols-3 gap-12">
          <div>
            <p className="text-sm">
              Hotel Moonlight offers all the modern facilities you would expect,
              while retaining traditional Nepali ambiance and hospitality. From
              our front gate you can take an easy stroll to the hustle and
              bustle of Thamel, with its array of shops, restaurants, bars and
              nightlife.
              <br />
              <br />
              <br />
              Moonlight is the ideal location for exploring the culture and
              lifestyle of Kathmandu. Swayambhunath (The Monkey Temple) is a
              thirty-minute walk or 10 minutes by taxi. Other sights are but a
              short taxi ride away.
            </p>
          </div>

          <div className="col-span-2">
            {/* <video
              className="size-full object-cover outline outline-1 outline-white -outline-offset-[10px]"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            //   poster={poster}
            >
              <source src="https://youtu.be/_jfHeaH6Xwk" type="video/mp4" />
              <track
                src="#"
                kind="captions"
                srcLang="en"
                label="english_captions"
              ></track>
              Your browser does not support the video tag.
            </video> */}
            <iframe
              src="https://www.youtube.com/embed/_jfHeaH6Xwk"
              title="Hotel moonlight | Kathmandu Hotels | Thamel Hotel | Hotel Promo Video | Longtail e-media"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="size-full min-h-[28.75rem]"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
