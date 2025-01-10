import IconRenderer from '../components/IconRenderer';
import { hotelFacilities } from '../constants/data';

const Facilities = () => {
  return (
    <>
      <main>
        <h1 className="mx-auto my-10 max-w-3xl text-center text-3xl leading-snug sm:text-3xl md:text-4xl lg:text-7xl lg:leading-snug">
          Facilities at Hotel Moonlight
        </h1>
        <p className="mx-auto mb-24 max-w-xl text-center text-base">
          We offer a range of services to make your stay more enjoyable. From
          accommodation to dining, spa treatments, and event planning, we have
          everything you need for a relaxing and memorable stay.
        </p>
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
          {hotelFacilities.map((facility) => (
            <div key={facility.id} className="flex items-start gap-6">
              <IconRenderer
                iconName={facility.icon}
                iconPath={facility.image}
                className="filter-primary size-16 text-6xl text-primary"
              />
              <div className="flex flex-col items-start gap-2">
                <h2 className="text-base font-bold">{facility.title}</h2>
                <p className="text-sm text-gray-600">
                  {facility.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Facilities;
