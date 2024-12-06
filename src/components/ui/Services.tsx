import { HiArrowLongRight } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

const servicesContents = [
  {
    id: 'services',
    title:
      'The Hotel Moonlight offers a variety of services to make your stay more enjoyable.',
    subtitle: '',
    subheading: 'Experience the ultimate Staycation in Hotel Ichchha',
    description:
      'Hotel Ichchha rooms and suites are a symphony of luxury and comfort, designed to enchant every guest where luxury embraces elegance, Hotel Ichchha offers an exquisite blend of comfort and grandeur. Experience unparalleled hospitality and serene elegance in every stay.',
    accomodation: [
      {
        id: 'accommodation',
        title: 'Accommodation',
        subtitle: '',
        description:
          "In the heart of Kathmandu's tourism hub, discover a tranquil haven filled with sincere Nepali hospitality with a comfortable stay",
        imageUrl: 'https://hotelmoonlight.com/images/subpackage/HOGxu-b4.jpg',
        category: 'accommodation',
        router: '/accommodation',
      },
      {
        id: 'dine',
        title: 'Fine Dine',
        subtitle: '',
        description:
          'Dine in style at our multi-cuisine Juneli Restaurant, where every meal is a culinary delight.',
        imageUrl:
          'https://hotelmoonlight.com/assets/userfiles/images/garden.jpg',
        category: 'dine',
        router: '/dine',
      },
      {
        id: 'occasion',
        title: 'Occasion',
        subtitle: '',
        description:
          "Celebrate your special moments with us, and we will make sure it's a memorable one.",
        imageUrl:
          'https://hotelmoonlight.com/assets/userfiles/images/Conferencehall.jpg',
        category: 'occasion',
        router: '/occasion',
      },
      {
        id: 'spa',
        title: 'Spa',
        subtitle: '',
        description:
          'Relax and rejuvenate your body, mind, and soul at our spa and wellness center with a range of treatments.',
        imageUrl: 'https://hotelmoonlight.com/assets/userfiles/images/spa2.jpg',
        category: 'spa',
        router: '/spa',
      },
    ],
  },
];
const servicesData = servicesContents[0];

const Services = () => {
  const duration = '700';
  return (
    <>
      <main>
        <div className="container">
          <h2 className="text-2xl font-medium text-dark md:text-4xl lg:text-6xl lg:leading-snug">
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
                } hover:bg-light/80 group flex flex-col items-center justify-between gap-0 border-dark/30 bg-white transition-all md:mb-0 md:flex-row duration-${duration}`}
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
                    <h4 className="text-2xl md:text-4xl">{suite.title}</h4>
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
                      className={`bg-light group-hover:text-light group flex h-6 w-16 items-center justify-center rounded-full text-2xl text-dark outline outline-1 outline-black/20 transition-all duration-300 ease-linear group-hover:bg-dark`}
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
          <Link
            to="https://www.tripadvisor.com/Hotel_Review-g293890-d654253-Reviews-Hotel_Moonlight-Kathmandu_Kathmandu_Valley_Bagmati_Zone_Central_Region.html"
            target="_blank"
            className={`bg-light group mt-8 inline-flex items-center gap-5 rounded-full border-dark/30 px-6 py-2 transition-all md:mb-0 md:flex-row duration-${duration}`}
          >
            <svg
              viewBox="0 0 24 24"
              width="24px"
              height="24px"
              className="scale-150"
            >
              <path d="M12 3.953a7.442 7.442 0 1 0 .001 14.884A7.442 7.442 0 0 0 12 3.953m0 14.05a6.61 6.61 0 1 1 0-13.218 6.61 6.61 0 0 1 0 13.219M10.343 11.9a.91.91 0 1 1-1.821 0 .91.91 0 0 1 1.821 0m5.134 0a.91.91 0 1 1-1.821 0 .91.91 0 0 1 1.82 0m.82-1.897.84-.913h-1.863A5.8 5.8 0 0 0 12 8.08a5.77 5.77 0 0 0-3.27 1.008H6.862l.84.913a2.567 2.567 0 1 0 3.475 3.78l.823.896.823-.895a2.568 2.568 0 1 0 3.474-3.78m-6.865 3.634a1.738 1.738 0 1 1 0-3.476 1.738 1.738 0 0 1 0 3.476M12 11.85c0-1.143-.832-2.124-1.929-2.543A5 5 0 0 1 12 8.92a5 5 0 0 1 1.928.386c-1.096.42-1.927 1.4-1.927 2.543m2.566 1.787a1.738 1.738 0 1 1 .001-3.476 1.738 1.738 0 0 1 0 3.476m-8.456 3.719s-.377-.946-1.396-1.903c-1.02-.957-2.303-1.132-2.303-1.132s.457 1.02 1.54 2.04c1.086 1.017 2.159.995 2.159.995m2.568 1.41s-.524-.511-1.479-.883-1.861-.191-1.861-.191.598.54 1.615.935c1.016.397 1.725.139 1.725.139m2.493.505s-.545-.224-1.357-.196-1.415.47-1.415.47.608.222 1.473.193 1.3-.467 1.3-.467m-6.186-4.203s-.175-1.008-.974-2.154c-.8-1.147-2.015-1.578-2.015-1.578s.238 1.098 1.089 2.319c.85 1.22 1.9 1.413 1.9 1.413m-1.003-3.071s.195-1.021-.134-2.393c-.328-1.371-1.294-2.21-1.294-2.21s-.17 1.128.18 2.589c.35 1.46 1.248 2.014 1.248 2.014"></path>
              <path d="M17.887 17.355s.377-.946 1.396-1.903c1.02-.957 2.303-1.132 2.303-1.132s-.457 1.02-1.54 2.04c-1.086 1.017-2.159.995-2.159.995m-2.567 1.41s.524-.511 1.479-.883 1.861-.191 1.861-.191-.598.54-1.615.935c-1.016.397-1.725.139-1.725.139m-2.493.505s.545-.224 1.357-.196 1.415.47 1.415.47-.608.222-1.473.193-1.3-.467-1.3-.467m6.186-4.203s.175-1.008.974-2.154c.8-1.147 2.015-1.578 2.015-1.578s-.238 1.098-1.089 2.319c-.85 1.22-1.9 1.413-1.9 1.413m1.003-3.071s-.195-1.021.133-2.393c.33-1.371 1.293-2.21 1.293-2.21s.17 1.128-.18 2.589c-.349 1.46-1.246 2.014-1.246 2.014M12 20.047a.413.413 0 1 0 0-.827.413.413 0 0 0 0 .827"></path>
            </svg>
            Travelers' Choice Award Winner
            {/* <span className="text-xs">Read all review</span> */}
          </Link>
        </div>
      </main>
    </>
  );
};

export default Services;
