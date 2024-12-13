import { FaFacebookF, FaMapMarkerAlt, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { MdLocalPhone, MdMail } from 'react-icons/md';

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
        title: 'occasion',
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
