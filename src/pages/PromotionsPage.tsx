import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import offers from '../assets/offers.png';
import OffersEnquiry from '../components/ui/OffersEnquiry';

const offersContent = [
  {
    id: 1,
    offer: '',
    title: 'Happy Hour Every Day',
    image: offers,
    link: '#',
  },
  {
    id: 2,
    offer: '',
    title: 'Happy Hour Every Day',
    image: offers,
    link: '#',
  },
];

const PromotionsPage: React.FC = () => {
  const [showOffersEnquiry, setShowOffersEnquiry] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Toggle form visibility and update the URL accordingly
  const toggleOffersEnquiry = (title = '') => {
    setSelectedOffer(title);
    setShowOffersEnquiry((prevState) => {
      const newState = !prevState;
      if (newState) {
        navigate('/offers#enquiry'); // Update URL to include #enquiry
      } else {
        navigate('/offers'); // Reset URL when form is closed
      }
      return newState;
    });
  };

  // Open the form automatically if URL contains #enquiry
  useEffect(() => {
    if (location.hash === '#enquiry') {
      setShowOffersEnquiry(true);
    }
  }, [location]);

  return (
    <>
      <main className="px-4 lg:px-8">
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {offersContent.map((content, index) => (
            <div
              key={index}
              className="transition-300 group relative outline outline-1 outline-offset-[12px] outline-dark/0 hover:outline-offset-0"
            >
              {/* <div className="overlay transition-300 absolute inset-0 -z-0 bg-black/70 outline outline-1 -outline-offset-[12px] outline-light/40 group-hover:bg-black/80 group-hover:outline-offset-0" /> */}
              <div className="overlay transition-300 absolute inset-0 -z-0 bg-gradient-to-t from-black/50 to-transparent outline outline-1 -outline-offset-[12px] outline-light/40 group-hover:outline-offset-0" />
              <img
                src={content.image}
                alt=""
                className="-z-10 aspect-square w-full object-cover shadow"
              />
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-end px-12 py-8 text-center text-light">
                <button
                  onClick={() => toggleOffersEnquiry(content.title)}
                  className="transition-300 flex items-center gap-2 rounded-full border border-light/50 bg-light/10 px-4 py-2 font-medium text-light backdrop-blur group-hover:bg-light/30"
                  type="button"
                  aria-label="Enquiry Now"
                  title="Enquiry Now"
                >
                  Enquiry Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
      {showOffersEnquiry && (
        <OffersEnquiry
          onClose={() => {
            setShowOffersEnquiry(false);
            navigate('/offers');
          }}
          offerTitle={selectedOffer || ''}
        />
      )}
    </>
  );
};

export default PromotionsPage;
