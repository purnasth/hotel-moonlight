import React, { useRef } from 'react';
import moonlightPoster from '../assets/videos/moonlightPoster.webp';
import moonlightVideo from '../assets/videos/moonlight1.mp4';

const IntroVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const startVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <main className="relative m-0 p-0">
      <div className="responsive-banner relative top-0 mt-16 h-full w-full overflow-hidden md:mt-0 lg:h-screen">
        {/* <div className="overlay absolute top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.25)]"></div> */}
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster={moonlightPoster}
          onClick={startVideo}
        >
          <source src={moonlightVideo} type="video/mp4" />
          <track
            src="#"
            kind="captions"
            srcLang="en"
            label="english_captions"
          ></track>
          A video of Moonlight.
        </video>
      </div>
      {/* <div className="absolute inset-0 inline-flex flex-col items-center text-light justify-end gap-8 bg-gradient-to-t from-black/50 to-transparent pb-20">
        <h2 className="text-shadow-glow text-center text-9xl">
          Hotel Moonlight
        </h2>
        <ul className="flex items-center justify-center gap-5 text-2xl">
          <li>
            <a
              href="#about"
              className="font-title text-2xl uppercase"
            >
              Stay
            </a>
          </li>
          •
          <li>
            <a
              href="#gallery"
              className="font-title text-2xl uppercase"
            >
              Dine
            </a>
          </li>
          •
          <li>
            <a
              href="#contact"
              className="font-title text-2xl uppercase"
            >
              Wellness
            </a>
          </li>
          •
          <li>
            <a
              href="#contact"
              className="font-title text-2xl uppercase"
            >
              Occasion
            </a>
          </li>
        </ul>
      </div> */}
    </main>
  );
};

export default IntroVideo;
