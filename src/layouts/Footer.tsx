import { Link } from 'react-router-dom';
import TestimonialSlider from '../components/TestimonialSlider';

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <>
      <main className="pb-24">
        <div className="container">
          <h4 className="mb-16 text-center text-4xl">Valued Guests Feedback</h4>
          <TestimonialSlider />
          <hr className="border-1 my-24 border-gray-300" />

          <div className="mb-8 mt-12 space-y-4 text-center">
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
          </div>

          <p className="text-center text-sm">
            &copy; {year} Hotel Moonlight. All rights reserved. Developed by
            <Link
              to="https://longtail.info"
              className="ml-1 font-bold text-dark"
            >
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
