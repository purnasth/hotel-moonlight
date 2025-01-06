import { Link } from 'react-router-dom';
import TestimonialSlider from '../components/TestimonialSlider';
import logo from '../assets/logo.png';
import blueGradient from '../assets/pattern/blue-gradient.png';
import moonLight from '../assets/arts/moon.png';
import ContactAndSocial from '../components/ui/ContactAndSocial';

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <>
      <main className="bg-primary pb-24 text-light">
        <img
          src={moonLight}
          alt="Moon Light"
          className="absolute right-1/2 top-0 -z-10 size-full translate-x-1/2 object-contain opacity-30 blur-3xl"
        />
        <img
          src={moonLight}
          alt="Moon Light"
          className="absolute right-1/2 top-0 -z-10 size-full translate-x-1/2 object-contain opacity-10"
        />

        <div
          className="pointer-events-none absolute inset-0 -z-20 size-full select-none bg-cover bg-center bg-no-repeat opacity-80"
          style={{ backgroundImage: `url(${blueGradient})` }}
          aria-hidden="true"
        />
        <div className="container">
          <h4 className="mb-16 text-center text-4xl">Valued Guests Feedback</h4>
          <TestimonialSlider />
          <hr className="border-1 my-12 border-light/20" />

          <div className="block text-center">
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                className={`mx-auto inline-flex h-48 w-56 items-center justify-center bg-light object-contain p-2 transition-all duration-[1s]`}
              />
            </Link>
            <div className="filter-white my-8 flex items-center justify-center scale-125 origin-center">
              <ContactAndSocial />
            </div>
          </div>

          {/* <div className="my-8 space-y-4 text-center">
            <p className="text-sm font-semibold uppercase">We accept</p>
            <div className="flex items-center justify-center gap-4">
              <img
                src="https://hotelmoonlight.com/template/web/assets/img/mastercard1.png"
                alt="MasterCard"
                className="size-10 object-contain"
              />
              <img
                src="https://hotelmoonlight.com/template/web/assets/img/visa1.png"
                alt="Visa"
                className="size-10 object-contain"
              />
              <img
                src="https://hotelmoonlight.com/template/web/assets/img/amex1.png"
                alt="American Express"
                className="size-10 object-contain"
              />
              <img
                src="https://hotelmoonlight.com/template/web/assets/img/union1.png"
                alt="UnionPay"
                className="size-10 object-contain"
              />
            </div>
          </div> */}

          <p className="text-center text-sm">
            &copy; {year} Hotel Moonlight. All rights reserved. Developed by
            <Link to="https://longtail.info" className="ml-1 font-bold">
              Longtail e-Media
            </Link>
            .
          </p>
        </div>
      </main>
    </>
  );
};

export default Footer;
