// import moonlight from '../assets/moonlight.png';

const Hero = () => {
  return (
    <main className="bg-dark p-0">
      <img
        // src={moonlight}
        src="https://wallpapercat.com/w/full/4/e/9/185978-3840x2160-desktop-4k-moon-background-photo.jpg"
        alt="Hotel Moonlight"
        className="responsive-banner relative w-full h-80 md:h-full lg:h-screen object-cover"
        draggable="false"
      />
      <div className="overlay" />
      <h1
        className="pointer-events-none absolute inset-0 mx-auto inline-flex size-full max-w-sm p-4 md:max-w-4xl items-end lg:items-center justify-center text-center text-3xl sm:text-5xl lg:text-8xl leading-snug text-light"
        style={{
          textShadow:
            '0 0 10px rgba(255, 255, 255, 0.8), 0 0 30px rgba(255, 255, 255, 0.4)',
        }}
      >
        Welcome to Hotel Moonlight
      </h1>
    </main>
  );
};

export default Hero;
