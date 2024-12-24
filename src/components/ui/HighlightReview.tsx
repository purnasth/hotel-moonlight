import { useEffect, useState } from 'react';
import { MdStarRate } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { otaLinks } from '../../constants/data';

const HighlightReview = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos === 0);
      setPrevScrollPos(currentScrollPos);

      setVisible(
        prevScrollPos > currentScrollPos ||
          currentScrollPos === 0 ||
          currentScrollPos + windowHeight >= documentHeight - 500,
      );
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <>
      <div
        className={`transition-1000 fixed bottom-8 left-8 z-40 max-w-xs origin-right bg-light shadow ${visible ? 'translate-x-0 opacity-100' : '-translate-x-[150%] opacity-0'}`}
      >
        <div className="flex size-full flex-col gap-4 p-4">
          <div className="flex items-center justify-between gap-8">
            <span className="flex gap-0 text-base text-dark">
              <MdStarRate />
              <MdStarRate />
              <MdStarRate />
              <MdStarRate />
              <MdStarRate />
            </span>
            <p className="text-xs text-dark/60">
              <strong className="font-bold text-dark">5.0</strong>/ 1000+ review
            </p>
          </div>
          <p className="text-justify text-xs">
            Hotel Moonlight earns rave reviews for its exceptional service for
            their friendliness and professionalism. Nestled in a prime location
            near Thamel and local attractions, this hotel is lauded for its
            tranquil atmosphere and modern decor.
          </p>
          <ul className="flex items-center justify-start gap-4 text-sm">
            {otaLinks.map((link) => (
              <li
                key={link.id}
                className="text-dark transition-all duration-300 ease-linear hover:scale-125"
              >
                <Link
                  to={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={link.title}
                >
                  <img
                    src={link.src}
                    alt={link.title}
                    className="size-4 object-contain"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default HighlightReview;
