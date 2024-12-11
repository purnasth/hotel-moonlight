import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import { TbMenu } from 'react-icons/tb';
import { MdOutlineCall } from 'react-icons/md';
import { Link, matchPath, NavLink, useLocation } from 'react-router-dom';
import blueGradient from '../assets/pattern/blue-gradient.png';

const navLinks = [
  {
    id: 1,
    title: 'Home',
    url: '/',
    demoImage: 'https://hotelmoonlight.com/images/slideshow/Nk7Bq-slide1.jpg',
    priority: 'high',
  },
  {
    id: 2,
    title: 'About',
    url: '/about',
    demoImage:
      'https://hotelmoonlight.com/images/gallery/galleryimages/b4EyZ-r7.jpg',
    priority: 'low',
  },
  {
    id: 3,
    title: 'Accommodation',
    url: '/accommodation',
    demoImage: 'https://hotelmoonlight.com/images/slideshow/Nk7Bq-slide1.jpg',
    priority: 'high',
  },
  {
    id: 4,
    title: 'Services',
    url: '/services',
    demoImage:
      'https://hotelmoonlight.com/images/gallery/galleryimages/b4EyZ-r7.jpg',
    priority: 'high',
  },
  {
    id: 5,
    title: 'Contact us',
    url: '/contact',
    demoImage: 'https://hotelmoonlight.com/images/slideshow/Nk7Bq-slide1.jpg',
    priority: 'low',
  },
  {
    id: 6,
    title: 'Promotions',
    url: '/offers',
    demoImage:
      'https://hotelmoonlight.com/images/gallery/galleryimages/b4EyZ-r7.jpg',
    priority: 'low',
  },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);

  const location = useLocation();

  // Get the current route's active link
  const activeLink = navLinks.find((link) =>
    matchPath({ path: link.url, end: true }, location.pathname),
  );

  const activeImage =
    hoveredImage || activeLink?.demoImage || navLinks[0].demoImage;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos === 0);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const highPriorityLinks = navLinks.filter((link) => link.priority === 'high');
  const lowPriorityLinks = navLinks.filter((link) => link.priority === 'low');

  return (
    <>
      <header
        className={`fixed top-0 z-40 w-full transition-all duration-[1s] ${
          window.scrollY > 0 ? '' : ''
        } ${visible ? '' : '-translate-y-full'}`}
      >
        <div
          className={`z-40 flex items-start justify-between px-4 py-6 md:px-8 ${
            visible
              ? 'bg-gradient-to-t from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0)]'
              : 'bg-transparent'
          }${window.scrollY > 0 ? 'flex items-center justify-between' : ''} `}
        >
          <button
            className="rounded-0 relative flex flex-col items-center justify-center text-light outline outline-1 outline-white/30 transition-all duration-700 ease-linear"
            onClick={toggleNav}
          >
            <span className="m-2 mb-0 bg-blue-800 px-2 font-light">Menu</span>
            <TbMenu className="scale-x-[3] text-2xl" />
            {/* <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                className="absolute left-0 top-1/2 -translate-y-1/2 translate-x-4 scale-75 text-xl opacity-0 transition-all duration-700 ease-linear"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M331.3 308.7L278.6 256l52.7-52.7c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-52.7-52.7c-6.2-6.2-15.6-7.1-22.6 0-7.1 7.1-6 16.6 0 22.6l52.7 52.7-52.7 52.7c-6.7 6.7-6.4 16.3 0 22.6 6.4 6.4 16.4 6.2 22.6 0l52.7-52.7 52.7 52.7c6.2 6.2 16.4 6.2 22.6 0 6.3-6.2 6.3-16.4 0-22.6z"></path>
                <path d="M256 76c48.1 0 93.3 18.7 127.3 52.7S436 207.9 436 256s-18.7 93.3-52.7 127.3S304.1 436 256 436c-48.1 0-93.3-18.7-127.3-52.7S76 304.1 76 256s18.7-93.3 52.7-127.3S207.9 76 256 76m0-28C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z"></path>
              </svg>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                className="absolute left-0 top-1/2 -translate-y-1/2 translate-x-4 scale-100 text-xl opacity-100 transition-all duration-700 ease-linear"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 4H21V6H3V4ZM3 11H15V13H3V11ZM3 18H21V20H3V18Z"></path>
              </svg> */}
          </button>

          <h1 className="absolute left-1/2 -translate-x-1/2">
            <a
              href="/"
              className={`object-contain transition-all duration-[1s] ${
                visible ? '' : ''
              } ${window.scrollY > 0 ? '' : ''}`}
            >
              {/* <img
                src="https://hotelhimalaya.pages.dev/assets/logo-s4LMycLK.svg"
                alt="logo"
                className={`object-contain transition-all duration-[1s]  ${
                  visible
                    ? "w-40 h-36 object-contain -translate-y-0"
                    : "scale-0 -translate-y-6 bg-transparent"
                } ${
                  window.scrollY > 0
                    ? "w-36 h-12 md:scale-75 p-4 translate-y-0 mt-0"
                    : // ? "filter-black w-16 h-12 object-contain scale-150 -mt-[4px] p-2"
                      ""
                }`}
              /> */}
              <img
                src={logo}
                alt="logo"
                className={`filter-white -mt-6 h-36 w-40 object-contain transition-all duration-[1s] ${
                  visible ? '-translate-y-0' : '-translate-y-6 scale-0'
                } ${
                  window.scrollY > 0
                    ? '-translate-y-6 scale-0'
                    : // "filter-white w-16 h-12 object-contain scale-150 -mt-[4px] p-2"
                      ''
                }`}
              />
            </a>
          </h1>

          <button
            className={`visible relative flex flex-col items-center justify-center gap-2 p-2 text-light outline outline-1 outline-white/30 transition-all duration-700 ease-linear`}
            title="Menu"
            aria-label="Menu"
          >
            <span className="w-full bg-blue-800 font-light">Book Now</span>
            {/* <TbMenu className="scale-x-[3] text-2xl" />
             */}
            <span className="flex items-center gap-1 text-xs font-light text-light">
              or <MdOutlineCall />
              <Link to="tel:+977-1-4980452" className="text-light">
                +977-1-4980452
              </Link>
            </span>
          </button>
        </div>
      </header>

      <nav
        className={`transition-700 fixed left-0 top-0 h-screen w-full overflow-y-auto bg-light ${
          isOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        } z-50`}
      >
        <div
          className="pointer-events-none absolute inset-0 -z-20 size-full select-none bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${blueGradient})` }}
          aria-hidden="true"
        />
        <button
          onClick={() => setIsOpen(false)}
          className="absolute left-10 top-6 flex items-center justify-center gap-2 py-0 px-3 text-4xl text-light outline outline-1 outline-white/30 transition-all duration-700 ease-linear"
          aria-label="Close"
          title="Close"
        >
          &times;
        </button>

        <div className="container grid size-full grid-cols-2 content-center items-center gap-12">
          {/* Dynamic Image */}
          <div className="relative flex size-full items-end justify-end">
            <img
              src={activeImage || ''}
              alt="Active Section"
              className="h-[70vh] w-96 object-cover transition-all duration-500 ease-in-out"
            />
          </div>

          {/* Navigation Links */}
          <aside className="space-y-24">
            {/* High Priority Links */}
            <ul className="links flex flex-col items-start justify-start gap-2 md:gap-8">
              {highPriorityLinks.map((link) => (
                <li key={link.id} className="group w-full">
                  <NavLink
                    to={link.url}
                    className={({ isActive }) =>
                      `navlink ${
                        isActive ? 'active-link' : ''
                      } flex items-center gap-2`
                    }
                    onMouseEnter={() => setHoveredImage(link.demoImage || '')}
                    onMouseLeave={() => setHoveredImage(null)}
                    aria-label={link.title}
                  >
                    <span
                      className={`h-px transition-all ${
                        activeLink?.id === link.id ? 'w-16' : 'w-0'
                      } bg-light group-hover:w-16`}
                    ></span>
                    {link.title}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Low Priority Links */}
            <ul className="links flex max-w-sm flex-wrap gap-2 md:gap-8">
              {lowPriorityLinks.map((link) => (
                <li key={link.id} className="group">
                  <NavLink
                    to={link.url}
                    className={({ isActive }) =>
                      `transition-300 rounded-full border border-light/50 px-4 py-1 font-body text-sm font-normal text-light backdrop-blur-sm group-hover:bg-light/30 ${
                        isActive ? 'bg-light/30' : ''
                      }`
                    }
                    onMouseEnter={() => setHoveredImage(link.demoImage || '')}
                    onMouseLeave={() => setHoveredImage(null)}
                    aria-label={link.title}
                  >
                    {link.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
