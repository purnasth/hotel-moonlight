import { MdStarRate } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { otaLinks } from '../../constants/data';

const HighlightReview = () => {
  return (
    <>
      <div className="bg-light fixed bottom-8 right-8 z-50 max-w-xs">
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
