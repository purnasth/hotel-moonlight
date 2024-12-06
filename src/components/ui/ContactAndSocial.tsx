import { socialLinks } from '../../constants/data';
import { Link } from 'react-router-dom';

const ContactAndSocial = () => {
  return (
    <>
      <ul className="flex items-center justify-start gap-4 text-sm">
        {socialLinks.map((link) => (
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
              <link.icon />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactAndSocial;
