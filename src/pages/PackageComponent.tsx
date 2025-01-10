import { Link, useParams } from 'react-router-dom';
import MasterSlider from '../layouts/MasterSlider';
import { packageContents } from '../constants/data';

const PackageComponent = () => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug || !(slug in packageContents)) {
    return <p className="text-center text-red-500">Package not found!</p>; // Fallback for invalid or missing slugs
  }

  const packageContent = packageContents[slug]; // Safe access after checking

  const { id, title, packages } = packageContent;

  return (
    <>
      <main key={id} className="px-0">
        <div className="container mb-16">
          <h1 className="text-gradient max-w-6xl text-2xl font-medium md:text-4xl lg:text-6xl lg:leading-snug">
            {title}
          </h1>
        </div>

        <section className="space-y-40">
          {packages.map((pkg, index) => {
            const {
              id,
              title,
              description,
              slides,
              highlights,
              amenities,
              htmlContent,
            } = pkg;

            return (
              <div key={id} className="">
                <div
                // className={`sticky top-16 max-h-fit ${index % 2 === 0 ? 'col-span-3' : 'order-2 col-span-3'}`}
                >
                  <MasterSlider
                    slides={slides}
                    hasContent={true}
                    sizeClassName="relative flex h-80 md:h-[50vh] lg:h-[110vh] items-center justify-center"
                  />
                  {/* <div className="mt-5 flex items-center justify-between">
                    <h2 className="text-gradient max-w-2xl font-title text-2xl font-semibold leading-snug">
                      {heading}
                    </h2>
                    <Link
                      to={`${packageContent.booking}`}
                      className="transition-300 font-semibold underline underline-offset-4 hover:underline-offset-0"
                    >
                      Reserve Now
                    </Link>
                  </div> */}
                </div>
                <div
                  className={`container ${index % 2 === 0 ? 'col-span-2' : 'order-1 col-span-2'}`}
                >
                  <div className="mt-12 flex items-center justify-between">
                    <h2 className="text-gradient text-2xl font-medium md:text-4xl lg:text-5xl lg:leading-snug">
                      {title}
                    </h2>
                    <Link
                      to={`${packageContent.booking}`}
                      className="transition-300 font-semibold underline underline-offset-4 hover:underline-offset-0"
                    >
                      Reserve Now
                    </Link>
                  </div>
                  <p className="mt-5 text-dark">{description}</p>
                  <ul className="mt-12 flex flex-wrap items-center gap-4">
                    {highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="text-gradient border border-cyan-600 border-dark/30 px-4 py-2 font-semibold hover:bg-dark/5"
                      >
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <h3 className="mt-16 font-body text-xl">Amenties:</h3>
                  <ul className="mt-8 flex flex-wrap items-center gap-2 text-sm opacity-80">
                    {amenities.map((amenity, index) => (
                      <>
                        <li key={amenity} className="font-medium capitalize">
                          {amenity}
                        </li>
                        {index < amenities.length - 1 && (
                          <span className="font-extrabold"> | </span>
                        )}
                      </>
                    ))}
                  </ul>

                  <div className="room-rates max-w-2xl">
                    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </main>
      {/* <section className="relative border-t border-cyan-600 bg-white">
        <div
          className="pointer-events-none absolute inset-0 -z-10 size-full select-none bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${blueGradient})` }}
          aria-hidden="true"
        />
        <Offers />
      </section> */}
    </>
  );
};

export default PackageComponent;
