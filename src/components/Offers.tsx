import offers from '../assets/offers.png';
import bookingAward from '../assets/bookingAwards.jpg';

const offersContent = [
  {
    id: 1,
    offer: '',
    title: 'Offer of the Day',
    description: '',
    image: offers,
    // link: '/nepalese-cuisine',
  },
  {
    id: 2,
    offer: '',
    title: 'Happy Hour',
    description: '',
    image: offers,
    // link: '/indian-cuisine',
  },
  {
    id: 3,
    offer: '',
    title: '',
    description: '',
    image: bookingAward,
    // link: '/chinese-cuisine',
  },
];

const Offers = () => {
  return (
    <>
      <main>
        <h2 className="text-2xl font-medium text-dark md:text-4xl lg:text-6xl lg:leading-snug max-w-4xl">
          {/* {offersData.title} */}
          Grab the Moonlight Offers before they are gone!
        </h2>

        <div className="mt-16 grid grid-cols-3 gap-16">
          {offersContent.map((offer) => (
            <div key={offer.id}>
              <img
                src={offer.image}
                alt={offer.title}
                className="size-fulll aspect-square overflow-hidden"
              />
              <h3 className="mt-2 text-left text-2xl">{offer.title}</h3>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Offers;
