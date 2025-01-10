import { TbAirConditioning, TbWifi } from 'react-icons/tb';
import { packageContents } from '../constants/data';
import { MdOutlineKingBed, MdOutlineRoomService } from 'react-icons/md';
import { Link } from 'react-router-dom';

const { stay } = packageContents;

const { title, packages, router } = stay;

const AccommodationHome = () => {
  return (
    <>
      <main className="px-0">
        <div className="container space-y-4 text-center md:space-y-8">
          {/* <h2 className="text-3xl">Athithi Devo Bhava</h2> */}
          <h2 className="text-2xl font-medium md:text-3xl">
            Stay. Comfort. Enjoy.
          </h2>

          <h3 className="text-gradient text-2xl leading-snug md:text-4xl lg:text-6xl lg:leading-snug">
            {title}
          </h3>
          {/* <p className="mx-auto mb-12 max-w-xl px-4 text-center text-base opacity-70 lg:mb-24">
            {description}
          </p> */}
        </div>

        <div className="mt-12 grid grid-cols-2 gap-8 px-8 md:mt-24">
          {packages.map((item, index) => (
            <Link
              to={router}
              key={index}
              className="group mb-4 flex flex-col gap-4"
            >
              <div className="relative overflow-hidden shadow-lg">
                <img
                  src={item.slides[0].image}
                  alt={item.title}
                  className="transition-700 h-full w-full scale-125 object-cover group-hover:scale-100 group-hover:contrast-125"
                />
                {/* <div className="overlay transition-700 opacity-0 group-hover:opacity-100"></div> */}
              </div>
              <div className="flex items-center justify-between">
                <h2 className="transition-700 inline-block text-3xl group-hover:tracking-wider">
                  {item.title}
                </h2>

                <ul className="transition-700 flex origin-right items-center gap-4 text-2xl group-hover:scale-105">
                  <li>
                    <MdOutlineKingBed />
                  </li>
                  <li>
                    <TbWifi />
                  </li>
                  <li>
                    <TbAirConditioning />
                  </li>
                  <li>
                    <MdOutlineRoomService />
                  </li>
                </ul>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
};

export default AccommodationHome;
