import { servicesContents } from '../../constants/data';
import ContactAndSocial from './ContactAndSocial';

const DemoService = () => {
  const servicesData = servicesContents[0];

  const description = servicesData.description;

  return (
    <>
      <div className="bg-light fixed bottom-8 left-8 z-50 max-w-xs">
        <div className="flex size-full flex-col gap-4 p-4">
          <div className="flex items-center">
            {servicesData.accomodation.map((service) => (
              <img
                key={service.id}
                src={service.imageUrl}
                alt={service.title}
                className="size-8 rounded-full"
                title={service.title}
              />
            ))}
          </div>
          {/* <hr className="border-1 w-2/3 border-gray-300 my-2" /> */}
          <p className="text-xs text-pretty">{description}</p>
          <ContactAndSocial />
        </div>
      </div>
    </>
  );
};

export default DemoService;
