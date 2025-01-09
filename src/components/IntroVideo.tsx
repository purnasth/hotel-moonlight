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
    <>
      <div className="mt-16 md:mt-0 responsive-banner relative top-0 h-full w-full overflow-hidden lg:h-screen">
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
    </>
  );
};

export default IntroVideo;
