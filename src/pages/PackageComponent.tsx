import { Link, useParams } from 'react-router-dom';
import MasterSlider from '../layouts/MasterSlider';

// hall
import hall1 from '../assets/images/hall/IMG_4736.webp';
import hall2 from '../assets/images/hall/IMG_4770.webp';
import hall3 from '../assets/images/hall/IMG_4862.webp';
import hall4 from '../assets/images/hall/IMG_4864.webp';

// spa
import spa1 from '../assets/images/spa/IMG_0420.webp';
import spa2 from '../assets/images/spa/IMG_0430.webp';
import spa3 from '../assets/images/spa/IMG_0454.webp';
import spa4 from '../assets/images/spa/IMG_8865.webp';

// dine
import juneli1 from '../assets/images/dine/juneli/IMG_4820.webp';
import juneli2 from '../assets/images/dine/juneli/IMG_4781.webp';
import palm1 from '../assets/images/dine/palm/IMG_4849.webp';
import palm2 from '../assets/images/dine/palm/IMG_4835.webp';

// stay
import room1 from '../assets/images/room/IMG_4705.webp';
import room2 from '../assets/images/room/IMG_4753.webp';
import room3 from '../assets/images/room/IMG_8882.webp';
import room4 from '../assets/images/room/IMG_8970.webp';


interface PackageContent {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  booking: string;
  router: string;
  packages: Package[];
}

interface Slide {
  image: string;
  title?: string;
  description?: string;
}

interface Package {
  id: string;
  title: string;
  heading: string;
  description: string;
  imageUrl: string;
  slides: Slide[];
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
    booking: 'https://hotelmoonlight.com/result.php?hotel_code=MQYYCu',
    packages: [
      {
        id: 'boutique-room',
        title: 'Boutique Room',
        heading: 'Styled with a cultural touch of Tibetan and Newari art',
        description:
          'Each Boutique Room has a refined interior design that includes a taste of our culture. Newari style hardwood flooring and beams, with a gentle Tibetan cloud feeling in the ceiling. Traditional yes, yet with all the facilities you expect when starting or completing your trip in Nepal.',
        imageUrl: 'https://hotelmoonlight.com/images/subpackage/HOGxu-b4.jpg',
        slides: [
          {
            image: room1,
            title: 'Boutique Room',
          },
          {
            image: room2,
            title: 'Boutique Room',
          },
          {
            image: room3,
            title: 'Boutique Room',
          },
          {
            image: room4,
            title: 'Boutique Room',
          },
        ],
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
          '<h4 class="mt-16 font-body text-xl">Room Rates:</h4><table class="mt-8 w-full table-auto border-collapse border border-gray-300"><thead><tr class="bg-gray-200"><th class="border border-gray-300 px-4 py-2 text-sm">Room Plan</th><th class="border border-gray-300 px-4 py-2 text-sm">1 Pax./Night</th><th class="border border-gray-300 px-4 py-2 text-sm">2 Pax./Night</th><th class="border border-gray-300 px-4 py-2 text-sm">Extra Bed</th></tr></thead><tbody><tr class="odd:bg-white"><td class="border border-gray-300 px-4 py-2 text-sm">EP plan</td><td class="border border-gray-300 px-4 py-2 text-sm">USD 85</td><td class="border border-gray-300 px-4 py-2 text-sm">USD 95</td><td class="border border-gray-300 px-4 py-2 text-sm">USD 20</td></tr><tr class="even:bg-gray-100"><td class="border border-gray-300 px-4 py-2 text-sm">BB plan</td><td class="border border-gray-300 px-4 py-2 text-sm">USD 110</td><td class="border border-gray-300 px-4 py-2 text-sm">USD 120</td><td class="border border-gray-300 px-4 py-2 text-sm"></td></tr></tbody></table>',
      },
      {
        id: 'deluxe-room',
        title: 'Deluxe Room',
        heading: 'Discretely designed with comfort in mind',
        description:
          'Each Deluxe Room has a refined interior design that includes a taste of our culture. Newari style hardwood flooring and beams, with a gentle Tibetan cloud feeling in the ceiling. Traditional yes, yet with all the facilities you expect when starting or completing your trip in Nepal.',
        imageUrl: 'https://hotelmoonlight.com/images/subpackage/HOGxu-b4.jpg',
        slides: [
          {
            image: room1,
            title: 'Deluxe Room',
          },
          {
            image: room2,
            title: 'Deluxe Room',
          },
          {
            image: room3,
            title: 'Deluxe Room',
          },
          {
            image: room4,
            title: 'Deluxe Room',
          },
        ],
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
          '<h4 class="mt-16 font-body text-xl">Room Rates:</h4><table class="mt-8 w-full table-auto border-collapse border border-gray-300"><thead><tr class="bg-gray-200"><th class="border border-gray-300 px-4 py-2 text-sm">Room Plan</th><th class="border border-gray-300 px-4 py-2 text-sm">1 Pax./Night</th><th class="border border-gray-300 px-4 py-2 text-sm">2 Pax./Night</th><th class="border border-gray-300 px-4 py-2 text-sm">Extra Bed</th></tr></thead><tbody><tr class="odd:bg-white"><td class="border border-gray-300 px-4 py-2 text-sm">EP plan</td><td class="border border-gray-300 px-4 py-2 text-sm">USD 65</td><td class="border border-gray-300 px-4 py-2 text-sm">USD 75</td><td class="border border-gray-300 px-4 py-2 text-sm">USD 20</td></tr><tr class="even:bg-gray-100"><td class="border border-gray-300 px-4 py-2 text-sm">BB plan</td><td class="border border-gray-300 px-4 py-2 text-sm">USD 75</td><td class="border border-gray-300 px-4 py-2 text-sm">USD 85</td><td class="border border-gray-300 px-4 py-2 text-sm"></td></tr></tbody></table>',
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
    booking: '/contact#form',
    packages: [
      {
        id: 'juneli-restaurant',
        title: 'Juneli Restaurant',
        heading: 'Dine in style at the Juneli Restaurant',
        description:
          'We offer dining in the Juneli Restaurant, in The PALM TREE Garden, at our Over the Moon Rooftop Lounge, and outside on The Rooftop itself. Groups/seminars may choose to dine in the Atithi Conference Hall. The Juneli Bar is a popular ‘watering hole’, offering a wide range of alcoholic and non-alcoholic drinks, with its own seating area. The Barista Coffee Shop is conveniently placed at the entrance to the restaurant, serving coffee, a selection of teas, fruit juices and bakery items.',
        imageUrl:
          'https://hotelmoonlight.com/assets/userfiles/images/rooftop.jpg',
        slides: [
          {
            image: juneli1,
            title: 'Juneli Restaurant',
          },
          {
            image: juneli2,
            title: 'Juneli Restaurant',
          },
        ],
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
        slides: [
          {
            image: palm1,
            title: 'Palm Garden',
          },
          {
            image: palm2,
            title: 'Palm Garden',
          },
        ],
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
    booking: '/contact#form',
    packages: [
      {
        id: 'atithi-hall',
        title: 'The Atithi Hall',
        heading: 'Celebrate your special moments with us',
        description:
          'The Atithi Conference Hall is the perfect venue for your next event. Whether you are planning a wedding, birthday party, or corporate event, our team will work with you to create a memorable experience for you and your guests. Our hall is equipped with state-of-the-art audiovisual equipment, comfortable seating, and a dedicated team of staff to ensure that your event is a success.',
        imageUrl:
          'https://hotelmoonlight.com/images/gallery/galleryimages/TGsxU-h9.jpg',
        slides: [
          {
            image: hall1,
            title: 'Athithi Hall',
          },
          {
            image: hall2,
            title: 'Athithi Hall',
          },
          {
            image: hall3,
            title: 'Athithi Hall',
          },
          {
            image: hall4,
            title: 'Athithi Hall',
          },
        ],
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
          '<h4 class="mt-16 font-body text-xl">Hall Setup Styles and Capacities:</h4><table class="mt-8 w-full table-auto border-collapse border border-gray-300"><thead><tr class="bg-gray-200"><th class="border border-gray-300 px-4 py-2 text-sm">Setup Style</th><th class="border border-gray-300 px-4 py-2 text-sm">Capacity</th></tr></thead><tbody><tr class="odd:bg-white"><td class="border border-gray-300 px-4 py-2 text-sm">Theater</td><td class="border border-gray-300 px-4 py-2 text-sm">100</td></tr><tr class="even:bg-gray-100"><td class="border border-gray-300 px-4 py-2 text-sm">Fishbone/Classroom</td><td class="border border-gray-300 px-4 py-2 text-sm">60</td></tr><tr class="odd:bg-white"><td class="border border-gray-300 px-4 py-2 text-sm">U-Shape</td><td class="border border-gray-300 px-4 py-2 text-sm">70</td></tr></tbody></table>',
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
    booking: '/contact#form',
    packages: [
      {
        id: 'spa-treatments',
        title: 'Spa Treatments',
        heading: 'Relax and rejuvenate your body, mind, and soul',
        description:
          'Our spa treatments are designed to help you relax and rejuvenate your body, mind, and soul. Whether you are looking for a traditional massage or a modern treatment, our team of professional therapists will help you find the perfect treatment for your needs. Our spa is equipped with state-of-the-art facilities and offers a range of treatments to help you feel your best.',
        imageUrl: 'https://hotelmoonlight.com/assets/userfiles/images/spa2.jpg',
        slides: [
          {
            image: spa1,
            title: 'Moonlight SPA',
          },
          {
            image: spa2,
            title: 'Moonlight SPA',
          },
          {
            image: spa3,
            title: 'Moonlight SPA',
          },
          {
            image: spa4,
            title: 'Moonlight SPA',
          },
        ],
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

                  <h3 className="mt-16 font-body text-xl">
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
