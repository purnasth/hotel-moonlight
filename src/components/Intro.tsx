const Intro = () => {
  return (
    <>
      <main className="relative z-auto h-screen w-full text-white">
        <div
          className="pointer-events-none absolute inset-0 -z-10 size-full select-none bg-cover"
          style={{
            backgroundImage:
              'url("https://img.freepik.com/free-photo/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner_1258-54332.jpg?t=st=1733396254~exp=1733399854~hmac=e418546b0cd7cd73929ca8f5a24205a25fb29a86cfb487461a07957b00f26ba5&w=1380")',
          }}
        ></div>
        <div className="container flex size-full flex-col items-center justify-center gap-4 text-center">
          <img
            src="https://hotelmoonlight.com/images/preference/TRz4g-logo.jpg"
            alt="Mount Glory School"
            className="size-48 object-contain"
          />
          <h1 className="font-luxury mt-12 text-5xl">
            Hotel Moonlight – a hotel with heart
          </h1>

          <p className="max-w-3xl opacity-65 text-xs leading-snug">
            Hotel Moonlight is within easy reach of the capital's main
            attractions. Moonlight is more than ‘bricks and stone’, it is about
            its people - our staff and you - our guests. Hotel Moonlight offers
            all the modern facilities you would expect, while retaining
            traditional Nepali ambiance and hospitality. From our front gate you
            can take an easy stroll to the hustle and bustle of Thamel, with its
            array of shops, restaurants, bars and nightlife. Moonlight is the
            ideal location for exploring the culture and lifestyle of Kathmandu.
            Swayambhunath (The Monkey Temple) is a thirty-minute walk or 10
            minutes by taxi. Other sights are but a short taxi ride away.
          </p>
        </div>
      </main>
    </>
  );
};

export default Intro;
