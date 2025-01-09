import React from 'react';
import { Link } from 'react-router-dom';

import { FaFacebookF } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { IoLogoTiktok } from 'react-icons/io5';
import { AiFillInstagram } from 'react-icons/ai';
import { FaXTwitter } from 'react-icons/fa6';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { TbBrandFacebook } from 'react-icons/tb';
import { FaInstagram } from 'react-icons/fa';
import { TbPhone, TbBrandYoutube } from 'react-icons/tb';

const iconMap = {
  FaFacebookF,
  RiInstagramFill,
  IoLogoTiktok,
  AiFillInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
  TbBrandFacebook,
  FaInstagram,
  TbPhone,
  TbBrandYoutube,
};

interface ContactDetail {
  link: string;
  title: string;
}

interface ContactInfo {
  id: string;
  type: string;
  icon: keyof typeof iconMap | null;
  image: string | null;
  details: ContactDetail[];
}

const contactInfo: ContactInfo[] = [
  {
    id: 'location',
    type: 'location',
    icon: null,
    image: null,
    details: [
      {
        link: 'https://maps.app.goo.gl/MTrXwWU47gD93sVRA',
        title: 'Paknajol, Kathmandu, Nepal',
      },
    ],
  },
  {
    id: 'phoneNumbers',
    type: 'phone',
    icon: null,
    image: null,
    details: [
      {
        link: 'tel:+97714983566',
        title: '+977-1-4983566',
      },
      {
        link: 'tel:+97714980636',
        title: '+977-1-4980636',
      },
      {
        link: 'tel:+97714983528',
        title: '+977-1-4983528',
      },
    ],
  },
  {
    id: 'emails',
    type: 'email',
    icon: null,
    image: null,
    details: [
      {
        link: 'mailto:info@hotelmoonlight.com',
        title: 'info@hotelmoonlight.com',
      },
    ],
  },
  {
    id: 'instagram',
    type: 'social',
    icon: 'FaInstagram',
    image: null,
    details: [
      {
        link: 'https://www.instagram.com/hotel_ichchha/',
        title: '',
      },
    ],
  },
  {
    id: 'twitter',
    type: 'social',
    icon: 'FaXTwitter',
    image: null,
    details: [
      {
        link: 'https://x.com/hotel_moonlight',
        title: '',
      },
    ],
  },
  {
    id: 'youtube',
    type: 'social',
    icon: 'TbBrandYoutube',
    image: null,
    details: [
      {
        link: 'https://www.youtube.com/watch?v=_jfHeaH6Xwk',
        title: '',
      },
    ],
  },
  {
    id: 'booking.com',
    type: 'ota',
    icon: null,
    image:
      'https://th.bing.com/th/id/R.6f07e6be923e2d9433fa537be7566b36?rik=%2flnDwc%2bBvabGTw&pid=ImgRaw&r=0',
    details: [
      {
        link: '#',
        title: 'Booking.com',
      },
    ],
  },
  {
    id: 'tripadvisor',
    type: 'ota',
    icon: null,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKVgOyUkQKg31OI0RJ4F1XXftk_1SnPaUOQQ&s',
    details: [
      {
        link: '#',
        title: 'Tripadvisor',
      },
    ],
  },
  {
    id: 'agoda',
    type: 'ota',
    icon: null,
    image:
      'https://cdn2.goodwall.io/images/3615512/cf1316f18600531a363587b66055419e.jpg?width=1280',
    details: [
      {
        link: '#',
        title: 'Agoda',
      },
    ],
  },
  {
    id: 'makeMyTrip',
    type: 'ota',
    icon: null,
    image:
      'https://play-lh.googleusercontent.com/19I7zjhAAAud9AztLiIxD1MYVdHusoeaW2-7Fx2FUJvcVZBbUBcGKjBBVPsHkFBLWMs',
    details: [
      {
        link: '#',
        title: 'MakeMyTrip',
      },
    ],
  },
];

const ContactAndSocial: React.FC = () => {
  return (
    <>
      <ul className="flex flex-col gap-1">
        {contactInfo
          .filter((item) => item.type !== 'social' && item.type !== 'ota')
          .map((item) => (
            <li key={item.id}>
              {item.details.map((detail, index) => (
                <React.Fragment key={index}>
                  <a
                    key={index}
                    href={detail.link}
                    className="transition-300 inline-block text-sm font-medium hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={detail.title}
                  >
                    {detail.title}
                  </a>
                  {index < item.details.length - 1 && <span>, </span>}
                </React.Fragment>
              ))}
            </li>
          ))}
      </ul>

      <ul className="flex gap-4 text-2xl">
        {contactInfo
          .filter((item) => item.type === 'social')
          .map((item) => {
            const IconComponent = item.icon ? iconMap[item.icon] : null;

            return (
              <li key={item.id} className="group">
                {item.details.map((detail, index) => (
                  <Link
                    key={index}
                    to={detail.link}
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    {IconComponent ? (
                      <IconComponent className="text-lg transition-all duration-300 ease-linear group-hover:scale-125" />
                    ) : item.image ? (
                      <img
                        src={item.image}
                        alt={item.id}
                        className="size-5 object-contain transition-all duration-300 ease-linear group-hover:scale-125"
                      />
                    ) : null}
                  </Link>
                ))}
              </li>
            );
          })}
      </ul>

      <ul className="flex gap-4 text-2xl">
        {contactInfo
          .filter((item) => item.type === 'ota')
          .map((item) => (
            <li key={item.id} className="group">
              {item.details.map((detail, index) => (
                <Link
                  key={index}
                  to={detail.link}
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.id}
                      className="size-5 object-contain transition-all duration-300 ease-linear group-hover:scale-125"
                    />
                  ) : null}
                </Link>
              ))}
            </li>
          ))}
      </ul>
    </>
  );
};

export default ContactAndSocial;
