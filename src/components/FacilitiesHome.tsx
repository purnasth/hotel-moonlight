import { Link } from 'react-router-dom';
import { hotelFacilities } from '../constants/data';
import { awards } from '../constants/data';
import IconRenderer from './IconRenderer';

const FacilitiesHome = () => {
  return (
    <>
      <main>
        <div className="">
          <div className="grid grid-cols-5 content-center items-center gap-20">
            <div className="col-span-3 space-y-12">
              <div className="space-y-4 text-pretty">
                <h2 className="font-body text-lg opacity-70">
                  Discover the facilities at Hotel Moonlight
                </h2>
                <h3 className="text-2xl text-gradient leading-snug md:text-4xl lg:text-4xl lg:leading-snug">
                  The Hotel Moonlight offers a variety of services to make your
                  stay more enjoyable.
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-4 gap-y-12">
                {hotelFacilities.slice(0, 8).map((facility) => (
                  <div key={facility.id} className="flex items-center gap-6">
                    {/* <span className="text-6xl">{facility.icon}</span> */}

                    <IconRenderer
                      iconName={facility.icon}
                      iconPath={facility.image}
                      className="size-16 text-6xl text-primary filter-primary"
                    />
                    <div className="flex flex-col items-start gap-2">
                      <h2 className="text-base font-bold">{facility.title}</h2>
                      <p className="line-clamp-2 text-sm text-gray-700">
                        {facility.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                to="/facilities"
                className="mx-auto translate-y-12 flex w-fit items-center justify-center border border-dark/50 bg-dark/0 px-6 py-2 backdrop-blur"
              >
                Explore all facilities
              </Link>
            </div>

            <div className="col-span-2">
              <div className="grid grid-cols-2 gap-6">
                {awards.map((award) => (
                  <img
                    key={award.id}
                    src={award.image}
                    alt={award.title}
                    className="transition-300 aspect-square size-full object-cover object-center shadow hover:shadow-lg"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default FacilitiesHome;
