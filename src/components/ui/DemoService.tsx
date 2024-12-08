import { useEffect, useState } from 'react';
import { servicesContents } from '../../constants/data';
import ContactAndSocial from './ContactAndSocial';

const DemoService = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos === 0);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const servicesData = servicesContents[0];

  const description = servicesData.description;

  return (
    <>
      <div
        className={`transition-1000 fixed bottom-8 left-8 z-50 max-w-xs origin-left bg-light shadow ${visible ? 'translate-x-0 opacity-100' : '-translate-x-[150%] opacity-0'}`}
      >
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
          <p className="text-pretty text-xs">{description}</p>
          <ContactAndSocial />
        </div>
      </div>
    </>
  );
};

export default DemoService;
