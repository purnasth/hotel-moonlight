import { Link } from 'react-router-dom';
import { packageContents } from '../../constants/data';

import hallImage from '../../assets/images/slide/5.webp';

const ServicesHome = () => {
  return (
    <>
      <main className="pt-0">
        <div className="container">
          <div className="space-y-4 text-center md:space-y-8">
            <h2 className="text-2xl font-medium md:text-3xl">
              Dine • Occasion • Spa
            </h2>

            <h3 className="text-gradient text-2xl leading-snug md:text-4xl lg:text-6xl lg:leading-snug">
              The Hotel Moonlight offers a variety of services to make your stay
              more enjoyable.
            </h3>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-16">
            {Object.keys(packageContents)
              .slice(1)
              .map((key, index) => {
                const packageContent = packageContents[key];

                return (
                  <div
                    key={packageContent.id}
                    className={`transition-300 group relative outline outline-1 outline-offset-[12px] outline-dark/0 hover:outline-offset-0 ${
                      index === 1 ? 'translate-y-16' : ''
                    }`}
                  >
                    <div className="relative overflow-hidden shadow-lg">
                      <div className="overlay transition-300 transition-300 absolute inset-0 z-10 size-full outline outline-1 -outline-offset-[12px] outline-light/40 group-hover:bg-transparent group-hover:outline-offset-0" />
                      <img
                        src={packageContent.imageUrl}
                        alt={packageContent.title}
                        className="transition-300 -z-10 h-[36rem] w-full object-cover object-left-top shadow group-hover:scale-110 xl:h-[70vh]"
                      />
                    </div>

                    <div className="mt-12 px-4 text-center">
                      <div className="space-y-5">
                        <h2 className="mx-8 max-w-xl text-center text-xl leading-relaxed md:mx-0 md:text-4xl md:leading-snug">
                          {packageContent.title}
                        </h2>

                        <p className="mx-auto line-clamp-2 max-w-sm text-center text-sm opacity-80">
                          {packageContent.description}
                        </p>
                      </div>

                      <Link
                        to={packageContent.router}
                        className="transition-300 mt-10 inline-flex items-center justify-center gap-2 border border-dark/50 bg-dark/0 px-6 py-2 backdrop-blur group-hover:bg-dark/20"
                      >
                        Explore
                      </Link>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </main>

      <main className="p-0">
        <div
          className="relative h-[36rem] w-full bg-cover bg-fixed bg-center md:h-[70vh]"
          style={{ backgroundImage: `url(${hallImage})` }}
        >
          <div className="absolute inset-0 bg-black/60 contrast-125" />
          <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 text-center text-white md:space-y-8">
            <h2 className="font-body text-lg uppercase tracking-widest">
              Occasions & Events
            </h2>

            <h3 className="text-shadow-glow max-w-3xl text-2xl leading-snug md:text-4xl lg:text-6xl lg:leading-snug">
              A Warm, Exquisite, Practical And Urban Space.
            </h3>

            <Link
              to="/occasions"
              className="transition-300 mt-10 inline-flex items-center justify-center gap-2 border border-light/50 bg-light/0 px-10 py-3 text-xl backdrop-blur hover:bg-light/20"
            >
              Explore
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default ServicesHome;
