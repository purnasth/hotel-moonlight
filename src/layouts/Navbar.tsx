import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
// import { TbMenu } from 'react-icons/tb';
import { Link, matchPath, NavLink, useLocation } from 'react-router-dom';
import blueGradient from '../assets/pattern/blue-gradient.png';
import { IoIosMenu } from 'react-icons/io';

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
    url: '/article/about',
    demoImage:
      'https://hotelmoonlight.com/images/gallery/galleryimages/JfNu4-e1.jpg',
    priority: 'low',
  },
  {
    id: 3,
    title: 'Stay',
    url: '/stay',
    demoImage:
      'https://hotelmoonlight.com/images/gallery/galleryimages/c0A4o-r1.jpg',
    priority: 'high',
  },
  {
    id: 4,
    title: 'Fine Dine',
    url: '/dine',
    demoImage:
      'https://hotelmoonlight.com/images/gallery/galleryimages/b4EyZ-r7.jpg',
    priority: 'high',
  },
  {
    id: 5,
    title: 'Occasions',
    url: '/occasions',
    demoImage:
      'https://hotelmoonlight.com/images/gallery/galleryimages/5KZxo-h5.jpg',
    priority: 'high',
  },
  {
    id: 6,
    title: 'SPA',
    url: '/spa',
    demoImage: 'https://hotelmoonlight.com/assets/userfiles/images/spa2.jpg',
    priority: 'high',
  },
  {
    id: 5,
    title: 'Contact us',
    url: '/contact',
    demoImage:
      'https://hotelmoonlight.com/images/gallery/galleryimages/sfcI4-e4.jpg',
    priority: 'low',
  },
  {
    id: 6,
    title: 'Promotions',
    url: '/offers',
    demoImage:
      'https://hotelmoonlight.com/images/gallery/galleryimages/fVO9e-r14.jpg',
    priority: 'low',
  },
  {
    id: 7,
    title: 'Gallery',
    url: '/gallery',
    demoImage:
      'https://hotelmoonlight.com/images/gallery/galleryimages/6hgTT-r11.jpg',
    priority: 'low',
  },
  {
    id: 8,
    title: 'CSR',
    url: '/article/csr',
    demoImage:
      'https://hotelmoonlight.com/images/gallery/galleryimages/1PXk5-r8.jpg',
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

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const highPriorityLinks = navLinks.filter((link) => link.priority === 'high');
  const lowPriorityLinks = navLinks.filter((link) => link.priority === 'low');

  return (
    <>
      <header
        className={`pointer-events-none fixed top-0 z-[60] flex w-full items-start justify-between p-6 transition-all duration-[1s]`}
      >
        <a
          href="/"
          className={`pointer-events-auto origin-top object-contain transition-all duration-[1s] ${
            visible ? '-translate-y-0' : '-translate-y-40 scale-50'
          } ${window.scrollY === 0 ? 'bg-light p-2' : 'filter-none'} `}
        >
          <img src={logo} alt="logo" className={`h-28 w-40 object-contain`} />
        </a>
        <div className="flex items-center gap-4">
          <Link
            to="#"
            className="transition-300 pointer-events-auto flex items-center justify-center gap-1 border border-dark/30 bg-white px-4 py-1 text-dark hover:border-dark hover:bg-dark hover:text-light"
          >
            Book Now
          </Link>
          <button
            type="button"
            aria-label="Menu"
            className="transition-300 pointer-events-auto flex items-center justify-center gap-1 border border-dark/30 bg-white px-1 py-0 text-dark hover:animate-pulse hover:text-light"
            onClick={toggleNav}
          >
            {/* <span className="px-2 text-xs font-light uppercase tracking-wide group-hover:animate-pulse">
            Menu
          </span> */}
            <IoIosMenu className="origin-center bg-white p-1 text-3xl text-dark group-hover:animate-pulse" />
          </button>
        </div>

        {/* <button
            className={`visible relative flex flex-col items-center justify-center gap-2 p-2 text-light outline outline-1 outline-white/30 transition-all duration-700 ease-linear`}
            title="Menu"
            aria-label="Menu"
          >
            <span className="w-full bg-blue-800 font-light">Book Now</span>
            <span className="flex items-center gap-1 text-xs font-light text-light">
              or <MdOutlineCall />
              <Link to="tel:+977-1-4980452" className="text-light">
                +977-1-4980452
              </Link>
            </span>
          </button> */}
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
          <aside className="space-y-16">
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
                      className={`transition-700 h-px ${
                        activeLink?.id === link.id ? 'w-16' : 'w-0'
                      } bg-light group-hover:w-16`}
                    ></span>
                    {link.title}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Low Priority Links */}
            <ul className="links flex max-w-sm flex-wrap gap-2 md:gap-5">
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
