import { FaFacebookF, FaMapMarkerAlt, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { MdLocalPhone, MdMail } from 'react-icons/md';

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

export const packageContents: Record<string, PackageContent> = {
  stay: {
    id: 'stay',
    title:
      'The stay at Hotel Moonlight is an experience in itself offering a blend of comfort and luxury.',
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

export const servicesContents = [
  {
    id: 'services',
    title:
      'The Hotel Moonlight offers a variety of services to make your stay more enjoyable.',
    subtitle: '',
    subheading: 'Experience the ultimate Staycation in Hotel Ichchha',
    description:
      'We offer a range of services to make your stay more enjoyable. From accommodation to dining, spa treatments, and event planning, we have everything you need for a relaxing and memorable stay.',
    accomodation: [
      {
        id: 'accommodation',
        title: 'Accommodation',
        subtitle: '',
        description:
          "In the heart of Kathmandu's tourism hub, discover a tranquil haven filled with sincere Nepali hospitality with a comfortable stay",
        imageUrl: 'https://hotelmoonlight.com/images/subpackage/HOGxu-b4.jpg',
        category: 'accommodation',
        router: '/stay',
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
        title: 'occasion',
        subtitle: '',
        description:
          "Celebrate your special moments with us, and we will make sure it's a memorable one.",
        imageUrl:
          'https://hotelmoonlight.com/assets/userfiles/images/Conferencehall.jpg',
        category: 'occasion',
        router: '/occasions',
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

export const socialLinks = [
  {
    id: 'address',
    title: 'Address',
    link: 'https://maps.app.goo.gl/MTrXwWU47gD93sVRA',
    icon: FaMapMarkerAlt,
  },
  {
    id: 'phone',
    title: 'Phone',
    link: 'tel:+977-1-4980452',
    icon: MdLocalPhone,
  },
  {
    id: 'email',
    title: 'Email',
    link: 'mailto:info@hotelmoonlight.com',
    icon: MdMail,
  },
  {
    id: 'facebook',
    title: 'Facebook',
    link: 'https://www.facebook.com/hotelmoonlightnp/',
    icon: FaFacebookF,
  },
  {
    id: 'twitter',
    title: 'X.com',
    link: 'https://x.com/hotel_moonlight',
    icon: FaXTwitter,
  },
  {
    id: 'youtube',
    title: 'Youtube',
    link: 'https://www.youtube.com/watch?v=_jfHeaH6Xwk',
    icon: FaYoutube,
  },
];

export const otaLinks = [
  {
    id: 'tripadvisor',
    title: 'Tripadvisor',
    link: 'https://www.tripadvisor.com/Hotel_Review-g293890-d654253-Reviews-Hotel_Moonlight-Kathmandu_Kathmandu_Valley_Bagmati_Zone_Central_Region.html',
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKVgOyUkQKg31OI0RJ4F1XXftk_1SnPaUOQQ&s',
  },
  {
    id: 'booking',
    title: 'Booking.com',
    link: 'https://www.booking.com/hotel/np/moonlight-kathmandu.en-gb.html?aid=357028&label=bin859jc-1DCAsoqwFCE21vb25saWdodC1rYXRobWFuZHVIM1gDaKsBiAEBmAEJuAEXyAEM2AED6AEB-AEDiAIBqAIDuAKyzcu6BsACAdICJDY4NTA4Y2U4LTliOWItNGZhMy04NTIzLWY3ZjlkODBkMmY0YtgCBOACAQ&sid=92d4f646b70df7ccf9096a36f66af01e&dist=0&keep_landing=1&sb_price_type=total&type=total&',
    src: 'https://th.bing.com/th/id/R.6f07e6be923e2d9433fa537be7566b36?rik=%2flnDwc%2bBvabGTw&pid=ImgRaw&r=0',
  },
  {
    id: 'agoda',
    title: 'Agoda',
    link: 'https://www.agoda.com/hotel-moonlight/hotel/kathmandu-np.html?cid=1844104',
    src: 'https://cdn2.goodwall.io/images/3615512/cf1316f18600531a363587b66055419e.jpg?width=1280',
  },
  {
    id: 'makeMyTrip',
    title: 'MakeMyTrip',
    link: 'https://hotelmoonlight.com/template/web/assets/img/booking-engine/makemytrip.png',
    src: 'https://play-lh.googleusercontent.com/19I7zjhAAAud9AztLiIxD1MYVdHusoeaW2-7Fx2FUJvcVZBbUBcGKjBBVPsHkFBLWMs',
  },
];
