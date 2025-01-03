import { useParams } from 'react-router-dom';
import Offers from '../components/Offers';
import blueGradient from '../assets/pattern/blue-gradient.png';

interface PackageContent {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  router: string;
  packages: Package[];
}

interface Package {
  id: string;
  title: string;
  heading: string;
  description: string;
  imageUrl: string;
  highlights: string[];
  amenities: string[];
  htmlContent: string;
}

const packageContents: Record<string, PackageContent> = {
  stay: {
    id: 'stay',
    title: 'Take a break. Recharge your batteries. Find inspiration.',
    description:
      'Stay in our luxurious rooms and enjoy the ultimate comfort and relaxation.',
    imageUrl: 'https://hotelmoonlight.com/images/subpackage/HOGxu-b4.jpg',
    router: '/stay',
    packages: [
      {
        id: 'boutique-room',
        title: 'Boutique Room',
        heading: 'Styled with a cultural touch of Tibetan and Newari art',
        description:
          'Each Boutique Room has a refined interior design that includes a taste of our culture. Newari style hardwood flooring and beams, with a gentle Tibetan cloud feeling in the ceiling. Traditional yes, yet with all the facilities you expect when starting or completing your trip in Nepal.',
        imageUrl: 'https://hotelmoonlight.com/images/subpackage/HOGxu-b4.jpg',
        highlights: [
          '23 Boutique Rooms',
          'Double, Twin, Triple or Family rooms',
          'Tibetan & Newari art',
          'Starting USD 85 / Night',
        ],
        amenities: [
          'ensuite bathroom',
          'towels and slippers',
          'toiletries & hair dryer',
          'air-conditioning',
          'LED TV, with HD channels',
          'free Wi-Fi',
          'telephone',
          'tea & coffee maker',
          'safety deposit box',
          'mini-bar',
          'complementary mineral water',
        ],
        htmlContent:
          '<h4 class="mt-16 font-body text-xl font-bold">Room Rates:</h4><table class="mt-8 w-full table-auto border-collapse border border-gray-300"><thead><tr class="bg-gray-200"><th class="border border-gray-300 px-4 py-2 text-sm">Room Plan</th><th class="border border-gray-300 px-4 py-2 text-sm">1 Pax./Night</th><th class="border border-gray-300 px-4 py-2 text-sm">2 Pax./Night</th><th class="border border-gray-300 px-4 py-2 text-sm">Extra Bed</th></tr></thead><tbody><tr class="odd:bg-white"><td class="border border-gray-300 px-4 py-2 text-sm">EP plan</td><td class="border border-gray-300 px-4 py-2 text-sm">USD 85</td><td class="border border-gray-300 px-4 py-2 text-sm">USD 95</td><td class="border border-gray-300 px-4 py-2 text-sm">USD 20</td></tr><tr class="even:bg-gray-100"><td class="border border-gray-300 px-4 py-2 text-sm">BB plan</td><td class="border border-gray-300 px-4 py-2 text-sm">USD 110</td><td class="border border-gray-300 px-4 py-2 text-sm">USD 120</td><td class="border border-gray-300 px-4 py-2 text-sm"></td></tr></tbody></table>',
      },
      {
        id: 'deluxe-room',
        title: 'Deluxe Room',
        heading: 'Discretely designed with comfort in mind',
        description:
          'Each Deluxe Room has a refined interior design that includes a taste of our culture. Newari style hardwood flooring and beams, with a gentle Tibetan cloud feeling in the ceiling. Traditional yes, yet with all the facilities you expect when starting or completing your trip in Nepal.',
        imageUrl: 'https://hotelmoonlight.com/images/subpackage/HOGxu-b4.jpg',
        highlights: [
          '43 Deluxe Rooms',
          'Double, Twin, Triple or Family rooms',
          'Tibetan & Newari art',
          'Starting USD 65 / Night',
        ],
        amenities: [
          'ensuite bathroom',
          'towels and slippers',
          'toiletries & hair dryer',
          'air-conditioning',
          'LED TV, with HD channels',
          'free Wi-Fi',
          'telephone',
          'tea & coffee maker',
          'safety deposit box',
          'mini-bar',
          'complementary mineral water',
        ],
        htmlContent:
          '<h4 class="mt-16 font-body text-xl font-bold">Room Rates:</h4><table class="mt-8 w-full table-auto border-collapse border border-gray-300"><thead><tr class="bg-gray-200"><th class="border border-gray-300 px-4 py-2 text-sm">Room Plan</th><th class="border border-gray-300 px-4 py-2 text-sm">1 Pax./Night</th><th class="border border-gray-300 px-4 py-2 text-sm">2 Pax./Night</th><th class="border border-gray-300 px-4 py-2 text-sm">Extra Bed</th></tr></thead><tbody><tr class="odd:bg-white"><td class="border border-gray-300 px-4 py-2 text-sm">EP plan</td><td class="border border-gray-300 px-4 py-2 text-sm">USD 65</td><td class="border border-gray-300 px-4 py-2 text-sm">USD 75</td><td class="border border-gray-300 px-4 py-2 text-sm">USD 20</td></tr><tr class="even:bg-gray-100"><td class="border border-gray-300 px-4 py-2 text-sm">BB plan</td><td class="border border-gray-300 px-4 py-2 text-sm">USD 75</td><td class="border border-gray-300 px-4 py-2 text-sm">USD 85</td><td class="border border-gray-300 px-4 py-2 text-sm"></td></tr></tbody></table>',
      },
    ],
  },
  dine: {
    id: 'Dine',
    title: 'Dine in style & Be pampered with our culinary delights',
    description:
      'Stay in our luxurious rooms and enjoy the ultimate comfort and relaxation.',
    imageUrl: 'https://hotelmoonlight.com/assets/userfiles/images/garden.jpg',
    router: '/dine',
    packages: [
      {
        id: 'juneli-restaurant',
        title: 'Juneli Restaurant',
        heading: 'Dine in style at the Juneli Restaurant',
        description:
          'We offer dining in the Juneli Restaurant, in The PALM TREE Garden, at our Over the Moon Rooftop Lounge, and outside on The Rooftop itself. Groups/seminars may choose to dine in the Atithi Conference Hall. The Juneli Bar is a popular ‘watering hole’, offering a wide range of alcoholic and non-alcoholic drinks, with its own seating area. The Barista Coffee Shop is conveniently placed at the entrance to the restaurant, serving coffee, a selection of teas, fruit juices and bakery items.',
        imageUrl:
          'https://hotelmoonlight.com/assets/userfiles/images/rooftop.jpg',
        highlights: [
          'Asian, Indian, Chinese & Western Cuisine',
          'Juneli Bar & Barista Coffee Shop',
          'The Barista Coffee Shop',
          'Over the Moon Rooftop Lounge',
        ],
        amenities: [
          // add the amenities here for the dine package
          'Wifi',
          'Parking',
          'Air Conditioning',
          'Ample Seating',
          'Barista Coffee Shop',
          'Cutlery',
          'Bevarages',
          'Background Music',
          'Garden View',
          'Rooftop View',
          'Barista Coffee Shop',
          'Wine Selection',
          'Cocktail Selection',
          'Expereinced Chefs',
          '24 hours Service',
        ],
        htmlContent: '',
      },
      {
        id: 'palm-garden',
        title: 'Palm Garden',
        heading: 'Dine in style at the Palm Garden',
        description:
          'The Palm Garden is a beautiful garden restaurant located in the heart of the city. The restaurant offers a wide range of dishes from around the world, including Asian, Indian, Chinese, and Western cuisine. The Palm Garden is the perfect place to relax and enjoy a delicious meal with friends and family.',
        imageUrl:
          'https://hotelmoonlight.com/assets/userfiles/images/garden.jpg',
        highlights: [
          'Asian, Indian, Chinese & Western Cuisine',
          'Juneli Bar & Barista Coffee Shop',
          'The Barista Coffee Shop',
          'Over the Moon Rooftop Lounge',
        ],
        amenities: [
          // add the amenities here for the dine package
          'Wifi',
          'Parking',
          'Air Conditioning',
          'Ample Seating',
          'Barista Coffee Shop',
          'Cutlery',
          'Bevarages',
          'Background Music',
          'Garden View',
          'Rooftop View',
          'Barista Coffee Shop',
          'Wine Selection',
          'Cocktail Selection',
          'Expereinced Chefs',
          '24 hours Service',
        ],
        htmlContent: '',
      },
    ],
  },
  occasions: {
    id: 'hall',
    title: 'Celebrate your special moments with us',
    description:
      'Stay in our luxurious rooms and enjoy the ultimate comfort and relaxation.',
    imageUrl:
      'https://hotelmoonlight.com/assets/userfiles/images/Conferencehall.jpg',
    router: '/occasion',
    packages: [
      {
        id: 'atithi-hall',
        title: 'The Atithi Hall',
        heading: 'Celebrate your special moments with us',
        description:
          'The Atithi Conference Hall is the perfect venue for your next event. Whether you are planning a wedding, birthday party, or corporate event, our team will work with you to create a memorable experience for you and your guests. Our hall is equipped with state-of-the-art audiovisual equipment, comfortable seating, and a dedicated team of staff to ensure that your event is a success.',
        imageUrl:
          'https://hotelmoonlight.com/images/gallery/galleryimages/TGsxU-h9.jpg',
        highlights: [
          'Atithi Conference Hall',
          'Wedding',
          'Birthday Party',
          'Corporate Event',
        ],
        amenities: [
          // add the amenities here for the hall package
          'Wifi',
          'Parking',
          'Air Conditioning',
          'Ample Seating',
          'Projector',
          'PA System',
          'Stage',
          'Catering',
          'Music System',
          'Dance Floor',
          'Decoration',
          'Photography',
          'Videography',
          'Event Planner',
          'Security',
        ],
        htmlContent:
          '<h4 class="mt-16 font-body text-xl font-bold">Hall Setup Styles and Capacities:</h4><table class="mt-8 w-full table-auto border-collapse border border-gray-300"><thead><tr class="bg-gray-200"><th class="border border-gray-300 px-4 py-2 text-sm">Setup Style</th><th class="border border-gray-300 px-4 py-2 text-sm">Capacity</th></tr></thead><tbody><tr class="odd:bg-white"><td class="border border-gray-300 px-4 py-2 text-sm">Theater</td><td class="border border-gray-300 px-4 py-2 text-sm">100</td></tr><tr class="even:bg-gray-100"><td class="border border-gray-300 px-4 py-2 text-sm">Fishbone/Classroom</td><td class="border border-gray-300 px-4 py-2 text-sm">60</td></tr><tr class="odd:bg-white"><td class="border border-gray-300 px-4 py-2 text-sm">U-Shape</td><td class="border border-gray-300 px-4 py-2 text-sm">70</td></tr></tbody></table>',
      },
    ],
  },
  spa: {
    id: 'spa',
    title: 'Relax and rejuvenate your body, mind, and soul',
    description:
      'Stay in our luxurious rooms and enjoy the ultimate comfort and relaxation.',
    imageUrl: 'https://hotelmoonlight.com/assets/userfiles/images/spa2.jpg',
    router: '/spa',
    packages: [
      {
        id: 'spa-treatments',
        title: 'Spa Treatments',
        heading: 'Relax and rejuvenate your body, mind, and soul',
        description:
          'Our spa treatments are designed to help you relax and rejuvenate your body, mind, and soul. Whether you are looking for a traditional massage or a modern treatment, our team of professional therapists will help you find the perfect treatment for your needs. Our spa is equipped with state-of-the-art facilities and offers a range of treatments to help you feel your best.',
        imageUrl: 'https://hotelmoonlight.com/assets/userfiles/images/spa2.jpg',
        highlights: ['Spa Treatments', 'Massage', 'Facials', 'Body Treatments'],
        amenities: [
          'massage therapy',
          'facials',
          'body treatments',
          'steam room',
          'sauna',
          'jacuzzi',
          'relaxation lounge',
          'fitness center',
          'yoga classes',
          'meditation sessions',
          'spa boutique',
          'locker rooms',
          'showers',
          'towels and robes',
          'complimentary tea and water',
        ],
        htmlContent: '',
      },
    ],
  },
};

const PackageComponent = () => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug || !(slug in packageContents)) {
    return <p className="text-center text-red-500">Package not found!</p>; // Fallback for invalid or missing slugs
  }

  const packageContent = packageContents[slug]; // Safe access after checking

  const { id, title, packages } = packageContent;

  return (
    <>
      <main key={id}>
        <div className="mb-16">
          <h1 className="text-gradient max-w-6xl text-2xl font-medium md:text-4xl lg:text-6xl lg:leading-snug">
            {title}
          </h1>
        </div>

        <section className="space-y-40">
          {packages.map((pkg, index) => {
            const {
              id,
              title,
              heading,
              description,
              imageUrl,
              highlights,
              amenities,
              htmlContent,
            } = pkg;

            return (
              <div key={id} className="grid grid-cols-5 gap-12">
                <div
                  className={`sticky top-16 max-h-fit ${index % 2 === 0 ? 'col-span-3' : 'order-2 col-span-3'}`}
                >
                  <img src={imageUrl} alt="" />
                  <h2 className="text-gradient mt-5 max-w-2xl font-title text-2xl font-semibold leading-snug">
                    {heading}
                  </h2>
                </div>
                <div
                  className={`${index % 2 === 0 ? 'col-span-2' : 'order-1 col-span-2'}`}
                >
                  <h2 className="text-gradient text-2xl font-medium md:text-4xl lg:text-5xl lg:leading-snug">
                    {title}
                  </h2>
                  <p className="mt-5 text-dark">{description}</p>
                  <ul className="mt-12 flex flex-wrap items-center gap-4">
                    {highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="text-gradient border border-cyan-600 border-dark/30 px-4 py-2 font-bold hover:bg-dark/5"
                      >
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <h3 className="mt-16 font-body text-xl font-bold">
                    Amenties:
                  </h3>
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

                  <div className="room-rates">
                    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </main>
      <section className="relative border-t border-cyan-600 bg-white">
        <div
          className="pointer-events-none absolute inset-0 -z-10 size-full select-none bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${blueGradient})` }}
          aria-hidden="true"
        />
        <Offers />
      </section>
    </>
  );
};

export default PackageComponent;
