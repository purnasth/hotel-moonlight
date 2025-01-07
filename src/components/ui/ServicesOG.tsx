import { HiArrowLongRight } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import { servicesContents } from '../../constants/data';

import blueGradient from '../../assets/pattern/blue-gradient.png';
import TravelersChoice from './TravelersChoice';

const servicesData = servicesContents[0];

const ServicesOG = () => {
  const duration = '700';
  return (
    <>
      <main className="bg-primary">
        <div
          className="pointer-events-none absolute inset-0 -z-10 size-full select-none bg-cover bg-center bg-no-repeat mix-blend-screen opacity-80"
          style={{ backgroundImage: `url(${blueGradient})` }}
          aria-hidden="true"
        />
        <div className="container">
          <h2 className="text-2xl font-medium text-light md:text-4xl lg:text-6xl lg:leading-snug">
            {servicesData.title}
          </h2>
          <div className="mt-12 overflow-hidden rounded-3xl border-[1px] border-dark/40">
            {servicesData.accomodation.map((suite, index) => (
              <Link
                to={suite.router}
                key={suite.id}
                className={`${
                  index !== servicesData.accomodation.length - 1
                    ? 'mb-8 border-b-[1px]'
                    : 'mb-0 border-b-0'
                } group flex flex-col items-center justify-between gap-0 border-dark/30 bg-white transition-all hover:bg-light/80 md:mb-0 md:flex-row duration-${duration}`}
              >
                <div className="flex w-full md:w-1/3">
                  <img
                    src={suite.imageUrl}
                    alt={suite.title}
                    className={`h-64 w-full origin-left object-cover transition-all sm:h-96 md:h-56 duration-${duration} md:group-hover:scale-x-105`}
                  />
                </div>
                <div
                  className={`flex w-full items-center justify-between gap-10 px-4 py-12 transition-all md:w-2/3 md:p-12 duration-${duration} md:group-hover:translate-x-4`}
                >
                  <div className="flex flex-col items-start gap-2 md:gap-5">
                    <h4 className="text-gradient text-2xl capitalize md:text-4xl font-semibold">
                      {suite.title}
                    </h4>
                    <p className="line-clamp-2 max-w-md text-sm opacity-80">
                      {suite.description}
                    </p>
                  </div>
                  <div
                    className={`flex transition-all duration-${duration} md:group-hover:translate-x-4`}
                  >
                    <Link
                      type="button"
                      to={suite.router}
                      className={`group-hover:bg-gradient group flex h-6 w-16 items-center justify-center rounded-full bg-light text-2xl text-dark outline outline-1 outline-black/20 transition-all duration-300 ease-linear group-hover:text-light`}
                      title="Explore More"
                      aria-label="Explore More"
                    >
                      <HiArrowLongRight
                        className={`hidden transition-all duration-300 ease-linear group-hover:block`}
                      />
                      <span className="text-sm font-semibold group-hover:hidden">
                        {(index + 1).toString().padStart(2, '0')}
                      </span>
                    </Link>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <TravelersChoice />
        </div>
      </main>
    </>
  );
};

export default ServicesOG;
